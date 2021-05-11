import { Component, OnInit } from '@angular/core';
import { ShowUserDto } from 'src/app/Entities/Entities/show-user-dto';
import { UserService } from 'src/app/services/Services/User/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent {

  user: ShowUserDto[];

  constructor(private userService: UserService)
  {
    userService.Get().subscribe(oberver => this.user = oberver);
  }

}
