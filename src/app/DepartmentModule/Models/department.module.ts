import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';

//component
import { CreateDepartmentComponent } from 'src/app/DepartmentModule/Component/create-department/create-department.component';
import { ShowDepartmetComponent } from 'src/app/DepartmentModule/Component/show-departmet/show-departmet.component';

@NgModule({
  declarations: [
    CreateDepartmentComponent,
    ShowDepartmetComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
