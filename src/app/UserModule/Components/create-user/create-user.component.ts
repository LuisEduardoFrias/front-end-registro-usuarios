import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/shared/Entities/user/create-user-dto';
import { UserService } from 'src/app/shared/Services/User/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{

  public spinkit:boolean = false;

  constructor(private UserService: UserService) { }

  Post(createUser: CreateUserDto)
  {
    this.spinkit = true;

    this.UserService.Post(createUser).subscribe(observable => {
      
      this.spinkit = false;

      if (observable === null)
      {
        alert("El registro a sido guardado");
      }

    }, error => {console.log(error); alert("Error al guardar el registro"); this.spinkit = false;});
  }

}
