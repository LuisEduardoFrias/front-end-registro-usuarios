import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserModuleRoutingModule } from './userModule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from 'src/app/UserModule/Components/update-user/update-user.component';
import { SharedModule } from 'src/app/shared/Modules/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

//Component
import { CreateUserComponent } from 'src/app/UserModule/Components/create-user/create-user.component';
import { ShowUserComponent } from 'src/app/UserModule/Components/show-user/show-user.component';
import { FormUser } from 'src/app/UserModule/Components/form-user/form-user.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [    
    CreateUserComponent,
    ShowUserComponent,
    FormUser,
    UpdateUserComponent,
    
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule, 
    NgxMaskModule.forRoot(),
    
  ],
  providers:[DatePipe]
})
export class UserModule { }
