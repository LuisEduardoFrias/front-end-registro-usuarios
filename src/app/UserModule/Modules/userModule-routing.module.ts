import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from '../Components/create-user/create-user.component';
import { ShowUserComponent } from '../Components/show-user/show-user.component';

const routes: Routes = [
  {
    path: '', component: ShowUserComponent
  },
  {
    path: 'crear', component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
