import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto } from 'src/app/shared/Entities/user/create-user-dto';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { DepartmentService } from 'src/app/shared/Services/Department/department.service';
import { UpdateUserDto } from 'src/app/shared/Entities/user/update-user-dto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUser implements OnInit{

  @Output()
  public post: EventEmitter<CreateUserDto> = new EventEmitter<CreateUserDto>();

  @Input()
  public cancelLink: string;

  @Input()
  public spinkit: boolean;

  @Input()
  public dataUser?: UpdateUserDto;

  public form: FormGroup;
  public Departments: DepartmentDto[];
  public UpdateCreate: string;

  private errorRequired : string = "Campo requerido.";
  private errorMax : string = "Excedió el máximo de caracteres permitido.";


  constructor(
    private formBuild: FormBuilder,
    private router: Router,
    private Depar : DepartmentService,
    private datePipe: DatePipe
    )
  {
    this.Depar.Get().subscribe(o => this.Departments = o);
  }

  ngOnInit(): void 
  {
    this.UpdateCreate = this.dataUser != undefined ? "Editar" : "Crear";

    this.form = this.formBuild.group(
    {
      id: [ this.dataUser != undefined ? this.dataUser.id : '' ,
      [Validators.required, Validators.maxLength(25)]],
  
      name: [ this.dataUser != undefined ? this.dataUser.name : '' ,
      [Validators.required, Validators.maxLength(25)]],
  
      lastName: [this.dataUser != undefined ? this.dataUser.lastName : '',
      [Validators.required, Validators.maxLength(25)]],
  
      gender: [this.dataUser != undefined ? this.dataUser.gender : '',
      [Validators.required]],
  
      identificationCard: [this.dataUser != undefined ? this.dataUser.identificationCard : '',
      [Validators.required, Validators.minLength(11)]],
  
      birthDay: [this.dataUser != undefined ?  this.datePipe.transform(this.dataUser.birthDay, 'yyyy-MM-dd') : '',
      [Validators.required]],
  
      position: [this.dataUser != undefined ? this.dataUser.position : '',
      [Validators.required, Validators.maxLength(20)]],
  
      immediateSupervisor: [this.dataUser != undefined ? this.dataUser.immediateSupervisor : '',
      [Validators.required,Validators.maxLength(25)]],
  
      departmentId: [this.dataUser != undefined ? this.dataUser.departmentId : '',
      [Validators.required]]
    });
  }

  
  HasError(formComponent:string) : string
  {   
    switch(formComponent)
    { 
      case "name":
      {
        if(this.form.get("name")?.hasError("required") && this.form.get("name")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("name")?.hasError("maxlength"))
        {
          return this.errorMax;
        }

        break;
      }
      case "lastName":
      {
        if(this.form.get("lastName")?.hasError("required") && this.form.get("lastName")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("lastName")?.hasError("maxlength"))
        {
          return this.errorMax 
        }

        break;
      }
      case "gender":
      {
        if(this.form.get("gender")?.hasError("required") && this.form.get("gender")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("gender")?.hasError("maxlength"))
        {
          return this.errorMax 
        }

        break;
      }
      case "identificationCard":
      {
        if(this.form.get("identificationCard")?.hasError("required") && this.form.get("identificationCard")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("identificationCard")?.hasError("minLength"))
        {
          return this.errorMax 
        }

        break;
      }
      case "birthDay":
      {
        if(this.form.get("birthDay")?.hasError("required") && this.form.get("birthDay")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("birthDay")?.hasError("maxlength"))
        {
          return this.errorMax 
        }

        break;
      }
      case "position":
      {
        if(this.form.get("position")?.hasError("required") && this.form.get("position")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("position")?.hasError("maxlength"))
        {
          return this.errorMax 
        }

        break;
      }
      case "immediateSupervisor":
      {
        if(this.form.get("immediateSupervisor")?.hasError("required") && this.form.get("immediateSupervisor")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("immediateSupervisor")?.hasError("maxlength"))
        {
          return this.errorMax 
        }

        break;
      }
      case "departmentId":
      {
        if(this.form.get("departmentId")?.hasError("required") && this.form.get("departmentId")?.touched)
        {
          return this.errorRequired;
        }

        if(this.form.get("departmentId")?.hasError("maxlength"))
        {
          return this.errorMax 
        }

        break;
      }
      default:
      {
        return "Error desconocido.";
      }
    }
  }


  Post()
  {
    this.post.emit(this.form.value);
    this.form.reset();
  }

  Cancel() {
    this.router.navigate([this.cancelLink]);
  }
}
