import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from 'src/app/Entities/Entities/department-dto';
import { DepartmentService } from 'src/app/services/Services/Department/department.service';

@Component({
  selector: 'app-show-departmet',
  templateUrl: './show-departmet.component.html',
  styleUrls: ['./show-departmet.component.css']
})
export class ShowDepartmetComponent {

  depart: DepartmentDto[];

  constructor(private departmetService: DepartmentService)
  {
    departmetService.Get().subscribe(oberver => console.log(oberver));
  }
}
