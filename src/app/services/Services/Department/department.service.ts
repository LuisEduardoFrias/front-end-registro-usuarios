import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http-serive';
import { Observable } from 'rxjs';
import { DepartmentDto } from 'src/app/Entities/Entities/department-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService extends HttpService {

  constructor(private httpclien: HttpClient) {
    super();
   }

  
  Get(): Observable<DepartmentDto[]>
  {
    return this.httpclien.get<DepartmentDto[]>(`${this.linkServer}api/departement`, { headers: { "Accept": "application/json" } })
  }

  Post(plan: DepartmentDto): Observable<any>
  {
    debugger;
    return this.httpclien.post(`${this.linkServer}api/departement`, plan)
  }
}
