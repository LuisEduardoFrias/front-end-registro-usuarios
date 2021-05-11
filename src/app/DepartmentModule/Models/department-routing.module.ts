import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDepartmentComponent } from '../Component/create-department/create-department.component';
import { ShowDepartmetComponent } from '../Component/show-departmet/show-departmet.component';
import { UpdateDepartmentComponent} from 'src/app/DepartmentModule/Component/update-department/update-department.component';

const routes: Routes = [
  {
    path: '', component: ShowDepartmetComponent
  },
  {
    path: 'crear', component : CreateDepartmentComponent
  },
  {
    path: 'editar', component : UpdateDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
