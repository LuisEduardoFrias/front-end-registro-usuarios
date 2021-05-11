import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/Services/Department/department.service';

@Component({
  selector: 'app-show-departmet',
  templateUrl: './show-departmet.component.html',
  styleUrls: ['./show-departmet.component.css']
})
export class ShowDepartmetComponent {

  constructor(private departmetService: DepartmentService)
  {
    departmetService.Get().subscribe(oberver => console.log(oberver));
  }
}
