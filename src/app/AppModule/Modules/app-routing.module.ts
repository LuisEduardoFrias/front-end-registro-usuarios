import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path: 'usuarios', loadChildren: () => 
    import('src/app/UserModule/Modules/user.module').then(m => m.UserModule)
  },
  {
    path: 'usuarios/crear', loadChildren: () => 
    import('src/app/UserModule/Modules/user.module').then(m => m.UserModule)
  },
  {
    path: 'usuarios/editar', loadChildren: () => 
    import('src/app/UserModule/Modules/user.module').then(m => m.UserModule)
  },
  {
    path: 'departamentos', loadChildren: () => 
    import('src/app/DepartmentModule/Models/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'departamentos/crear', loadChildren: () => 
    import('src/app/DepartmentModule/Models/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'departamentos/editar', loadChildren: () => 
    import('src/app/DepartmentModule/Models/department.module').then(m => m.DepartmentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
