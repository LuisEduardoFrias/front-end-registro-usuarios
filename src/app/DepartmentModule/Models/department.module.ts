import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/Modules/shared.module';
import { ToastrModule, ToastrService, TOAST_CONFIG } from 'ngx-toastr';

//component
import { CreateDepartmentComponent } from 'src/app/DepartmentModule/Component/create-department/create-department.component';
import { ShowDepartmetComponent } from 'src/app/DepartmentModule/Component/show-departmet/show-departmet.component';
import { FormDepartment } from 'src/app/DepartmentModule/Component/form-department/form-department.component';
import { UpdateDepartmentComponent} from 'src/app/DepartmentModule/Component/update-department/update-department.component';

@NgModule({
  declarations: [
    CreateDepartmentComponent,
    ShowDepartmetComponent,
    FormDepartment,
    UpdateDepartmentComponent,
    
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
    
  ],
  providers:[ToastrService,]
})
export class DepartmentModule { }
