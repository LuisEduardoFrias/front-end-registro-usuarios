import { Component, OnInit } from '@angular/core';
import { CreateUserDto } from 'src/app/Entities/Entities/create-user-dto';
import { UserService } from 'src/app/services/Services/User/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{

  constructor(private UserService: UserService) { }

  Post(createUser: CreateUserDto)
  {
    this.UserService.Post(createUser).subscribe(observable => alert(observable));
  }

}
