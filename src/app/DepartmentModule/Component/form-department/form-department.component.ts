import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';

@Component({
  selector: 'form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartment implements OnInit{

  @ViewChild("codeinput",{ static : true}) 
  codeinput : ElementRef; 

  @Output()
  public post: EventEmitter<DepartmentDto> = new EventEmitter<DepartmentDto>();

  @Input()
  public cancelLink: string;

  @Input()
  public spinkit: boolean;

  @Input()
  public dataDepart?: DepartmentDto;

  public updateCreate: string;
  public form: FormGroup;
  public desableInput : boolean = false;
  public codeValues :  number;

  private errorRequired : string = "Campo requerido.";
  private errorMax : string = "Excedió el máximo de caracteres permitido.";

  constructor(private formBuild: FormBuilder, private router: Router){}

  ngOnInit(): void {

    this.updateCreate = this.dataDepart != undefined ? "Editar" : "Crear";

    this.codeValues = this.dataDepart != undefined ? Number(this.dataDepart.code) : 0;
     
    this.desableInput = this.dataDepart != undefined;

    this.form = this.formBuild.group(
    {
      code: [this.dataDepart != undefined ? this.dataDepart.code : '',
      [Validators.required, Validators.maxLength(8)]],
  
      name: [this.dataDepart != undefined ? this.dataDepart.name : '' ,
      [Validators.required,Validators.maxLength(25)]],
    });

    if(this.dataDepart != undefined)
    {
      this.codeinput.nativeElement.disabled = true;
    } 
  }

  HasError(formComponent:string) : string
  {
      switch(formComponent)
      {
        case "code":
        {
          if(this.form.get("code")?.hasError("required") && this.form.get("code")?.touched)
          {
            return this.errorRequired;
          }

          if(this.form.get("code")?.hasError("maxlength"))
          {
            return this.errorMax;
          }

          break;
        }
        case "name":
        {
          if(this.form.get("name")?.hasError("required") && this.form.get("name")?.touched)
          {
            return this.errorRequired;
          }

          if(this.form.get("name")?.hasError("maxlength"))
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
