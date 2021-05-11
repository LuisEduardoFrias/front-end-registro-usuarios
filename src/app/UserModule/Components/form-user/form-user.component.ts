import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto } from 'src/app/Entities/Entities/create-user-dto';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  providers: [FormBuilder, HttpClient]
})
export class FormUser{

  @Output()
  post: EventEmitter<CreateUserDto>;

  @Input()
  cancelLink: string;

  public form: FormGroup;

  constructor(private formBuild: FormBuilder, private router: Router)
  {
    this.form = formBuild.group(
    {
      name: ['', [Validators.required,Validators.max(25)]],
      lastName : ['', [Validators.required,Validators.max(25)]],
      gender: ['', [Validators.required]],
      identificationCard: ['', [Validators.required,Validators.max(11)]],
      birthDay: ['', [Validators.required]],
      position : ['', [Validators.required],Validators.max(20)],
      immediateSupervisor: ['', [Validators.required,Validators.max(25)]],
      departmentId: ['', [Validators.required]]
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
