import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/Services/User/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

  constructor(private userService: UserService)
  {
    userService.Get().subscribe(oberver => console.log(oberver));
  }

}
