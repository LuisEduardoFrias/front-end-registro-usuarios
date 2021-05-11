import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModuleRoutingModule } from './userModule-routing.module';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),

  ],
  providers: [HttpClient]
})
export class UserModule { }
