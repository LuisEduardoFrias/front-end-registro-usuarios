import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/shared/Entities/user/create-user-dto';
import { UserService } from 'src/app/shared/Services/User/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{

  public spinkit:boolean = false;

  constructor(private UserService: UserService,private toastr: ToastrService) { }

  Post(createUser: CreateUserDto)
  {
    this.spinkit = true;

    this.UserService.Post(createUser).subscribe(observable => {
      
      this.spinkit = false;

      if (observable === null)
      {
        this.toastr.success('El registro a sido creado.','Éxito');
      }

    }, error => {console.log(error); this.toastr.error('Error al crear el registro.','Error'); this.spinkit = false;});
  }

}
