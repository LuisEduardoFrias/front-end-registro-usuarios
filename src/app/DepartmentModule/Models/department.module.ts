import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//component
import { CreateDepartmentComponent } from 'src/app/DepartmentModule/Component/create-department/create-department.component';
import { ShowDepartmetComponent } from 'src/app/DepartmentModule/Component/show-departmet/show-departmet.component';
import { FormDepartment } from 'src/app/DepartmentModule/Component/form-department/form-department.component';

@NgModule({
  declarations: [
    CreateDepartmentComponent,
    ShowDepartmetComponent,
    FormDepartment,
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartmentModule { }
