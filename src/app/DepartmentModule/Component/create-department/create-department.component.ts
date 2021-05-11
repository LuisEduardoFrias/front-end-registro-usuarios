import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from 'src/app/Entities/Entities/department-dto';
import { DepartmentService } from 'src/app/services/Services/Department/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent{

  constructor(private DepartmentService: DepartmentService) { }

  Post(Department: DepartmentDto)
  {
    this.DepartmentService.Post(Department).subscribe(observable =>
    {
      if (observable === null)
      {
        alert("El registro a sido guardado");
      }
      else
      {
        alert("Error al guardar el registro");
      }
    });
  }

}