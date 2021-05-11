import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService/http-serive';
import { ShowUserDto } from 'src/app/Entities/Entities/show-user-dto';
import { Observable } from 'rxjs';
import { CreateUserDto } from 'src/app/Entities/Entities/create-user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  constructor(private httpclien: HttpClient) {
    super();
   }

  
  Get(): Observable<ShowUserDto[]>
  {
    return this.httpclien.get<ShowUserDto[]>(`${this.linkServer}api/user`, { headers: { "Accept": "application/json" } })
  }

  Post(plan: CreateUserDto): Observable<any>
  {
    return this.httpclien.post(`${this.linkServer}api/user`, plan, { headers: { "Content-Type": "application/json" } })
  }
}
