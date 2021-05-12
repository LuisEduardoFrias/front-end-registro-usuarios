import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';

@Component({
  selector: 'form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartment implements OnInit{

  @Output()
  public post: EventEmitter<DepartmentDto> = new EventEmitter<DepartmentDto>();

  @Input()
  public cancelLink: string;

  @Input()
  public spinkit: boolean;

  @Input()
  public dataDepart?: DepartmentDto;

  public UpdateCreate: string;
  public form: FormGroup;

  constructor(private formBuild: FormBuilder, private router: Router){}

  ngOnInit(): void {

    this.UpdateCreate = this.dataDepart != undefined ? "Editar" : "Crear";

    this.form = this.formBuild.group(
    {
      code: [this.dataDepart != undefined ? this.dataDepart.code : '' ,
      [Validators.required]],
  
      name: [this.dataDepart != undefined ? this.dataDepart.name : '' ,
      [Validators.required,Validators.max(25)]],
    });
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
