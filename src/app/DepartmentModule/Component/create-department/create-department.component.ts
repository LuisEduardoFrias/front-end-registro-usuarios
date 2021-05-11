import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { DepartmentService } from 'src/app/shared/Services/Department/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent{

  public spinkit:boolean = false;

  constructor(private DepartmentService: DepartmentService) { }

  Post(Department: DepartmentDto)
  {
    this.spinkit = true;

    this.DepartmentService.Post(Department).subscribe(observable =>
    {
      this.spinkit = false;

      if (observable === null)
      {
        alert("El registro a sido guardado");
      }
      
    }, error => {console.log(error); alert("Error al guardar el registro"); this.spinkit = false;});
  }

}