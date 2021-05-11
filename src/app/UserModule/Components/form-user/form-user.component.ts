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
      [Validators.required, Validators.max(25)]],
  
      name: [ this.dataUser != undefined ? this.dataUser.name : '' ,
      [Validators.required, Validators.max(25)]],
  
      lastName: [this.dataUser != undefined ? this.dataUser.lastName : '',
      [Validators.required, Validators.max(25)]],
  
      gender: [this.dataUser != undefined ? this.dataUser.gender : '',
      [Validators.required]],
  
      identificationCard: [this.dataUser != undefined ? this.dataUser.identificationCard : '',
      [Validators.required, Validators.max(11)]],
  
      birthDay: [this.dataUser != undefined ?  this.datePipe.transform(this.dataUser.birthDay, 'yyyy-MM-dd') : '',
      [Validators.required]],
  
      position: [this.dataUser != undefined ? this.dataUser.position : '',
      [Validators.required, Validators.max(20)]],
  
      immediateSupervisor: [this.dataUser != undefined ? this.dataUser.immediateSupervisor : '',
      [Validators.required,Validators.max(25)]],
  
      departmentId: [this.dataUser != undefined ? this.dataUser.departmentId : '',
      [Validators.required]]
    });
  }

  Post()
  {
    this.post.emit(this.form.value);
  }

  Cancel() {
    this.router.navigate([this.cancelLink]);
  }
}
