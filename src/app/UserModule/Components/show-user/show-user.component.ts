import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ShowUserDto } from 'src/app/shared/Entities/user/show-user-dto';
import { UserService } from 'src/app/shared/Services/User/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

  public user?: ShowUserDto[] = undefined;
  private NavigationExtras : NavigationExtras;
  public spinkit: boolean;

  constructor(private userService: UserService, private router : Router)
  {
    this.spinkit = true;
    userService.Get().subscribe(oberver =>
    {
      this.user = oberver;
      this.spinkit = false;
    }, error =>
    {
      console.log(error);
      this.spinkit = false;
    });
  }

  update(id : number){

    for(let i = 0; i < this.user.length; i++)
    {
      if(this.user[i].id == id)
      {
        this.NavigationExtras =
        {
          state:{
            user:this.user[i]
          }
        }

        this.router.navigate(['usuarios/editar'],this.NavigationExtras)
      }
    }
  }

}
