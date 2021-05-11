import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateUserDto } from 'src/app/shared/Entities/user/update-user-dto';
import { UserService } from 'src/app/shared/Services/User/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent{

  public spinkit:boolean = false;
  public user : UpdateUserDto;
  
  constructor(private UserService: UserService, private router: Router)  
  { 
    this.user = this.router.getCurrentNavigation().extras.state.user;
  }

  Put(updateUser: UpdateUserDto)
  {
    this.spinkit = true;

    this.UserService.Put(updateUser).subscribe(observable => {
      
      this.spinkit = false;

      if (observable === null)
      {
        alert("El registro a sido guardado");
      }

    }, error => {console.log(error); alert("Error al guardar el registro"); this.spinkit = false;});
  }
}
