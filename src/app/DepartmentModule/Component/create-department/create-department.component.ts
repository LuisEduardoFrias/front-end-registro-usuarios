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
    debugger;
    this.DepartmentService.Post(Department).subscribe(observable => console.log(observable));
  }

}