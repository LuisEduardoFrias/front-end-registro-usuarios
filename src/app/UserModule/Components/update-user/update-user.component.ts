import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { UpdateUserDto } from 'src/app/shared/Entities/user/update-user-dto';
import { UserService } from 'src/app/shared/Services/User/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent{

  public spinkit:boolean = false;
  public user : UpdateUserDto;
  
  constructor(private UserService: UserService, private router: Router, private toastr: ToastrService)  
  { 
    this.user = this.router.getCurrentNavigation()?.extras?.state.user;
  }

  Put(updateUser: UpdateUserDto)
  {
    this.spinkit = true;

    this.UserService.Put(updateUser).subscribe(observable => {
      
      this.spinkit = false;

      if (observable === null)
      {
        this.toastr.success('El registro a sido editado.','Éxito');
      }

    }, error => {console.log(error); this.toastr.error('Error al editar el registro.','Error'); this.spinkit = false;});
  }
}
