import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentDto } from 'src/app/Entities/Entities/department-dto';

@Component({
  selector: 'form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartment{

  @Output()
  post: EventEmitter<DepartmentDto> = new EventEmitter<DepartmentDto>();

  @Input()
  cancelLink: string;

  public form: FormGroup;

  constructor(private formBuild: FormBuilder, private router: Router)
  {
    this.form = formBuild.group(
    {
      code: ['', [Validators.required]],
      name: ['', [Validators.required,Validators.max(25)]],
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
