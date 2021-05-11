import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService/http-serive';
import { ShowUserDto } from 'src/app/shared/Entities/user/show-user-dto';
import { Observable } from 'rxjs';
import { CreateUserDto } from 'src/app/shared/Entities/user/create-user-dto';
import { UpdateUserDto } from '../../Entities/user/update-user-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService
{
  constructor(private httpclien: HttpClient) 
  {
    super();
  }

  Get(): Observable<ShowUserDto[]>
  {
    return this.httpclien.get<ShowUserDto[]>(`${this.linkServer}api/user`, 
    { headers: { "Accept": "application/json" } });
  }

  Post(plan: CreateUserDto): Observable<any>
  {
    return this.httpclien.post(`${this.linkServer}api/user`, plan, 
    { headers: { "Content-Type": "application/json" } });
  }

  Put(plan: UpdateUserDto): Observable<any>
  {
    return this.httpclien.put(`${this.linkServer}api/user`, plan, 
    { headers: { "Content-Type": "application/json" } });
  }
}
