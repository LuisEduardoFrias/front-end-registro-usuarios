import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http-serive';
import { Observable } from 'rxjs';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService extends HttpService 
{
  constructor(private httpclien: HttpClient) 
  {
    super();
  }

  Get(): Observable<DepartmentDto[]>
  {
    return this.httpclien.get<DepartmentDto[]>(`${this.linkServer}api/departement`, 
    { headers: { "Accept": "application/json" } })
  }

  Post(department: DepartmentDto): Observable<any>
  {
    return this.httpclien.post(`${this.linkServer}api/departement`, department, 
    { headers: { "Content-Type": "application/json" } });
  }

  Put(department: DepartmentDto): Observable<any>
  {
    return this.httpclien.put(`${this.linkServer}api/departement`, department, 
    { headers: { "Content-Type": "application/json" } });
  }
}
