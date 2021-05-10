import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutingModule } from './userModule-routing.module';

//Component
import { CreateUserComponent } from 'src/app/UserModule/Components/create-user/create-user.component';
import { ShowUserComponent } from 'src/app/UserModule/Components/show-user/show-user.component';

@NgModule({
  declarations: [    
    CreateUserComponent,
    ShowUserComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModule { }
