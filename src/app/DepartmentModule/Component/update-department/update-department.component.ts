import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { DepartmentService } from 'src/app/shared/Services/Department/department.service';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent{

  public spinkit:boolean = false;
  public Depart : DepartmentDto;
  
  constructor(private DepartmentService: DepartmentService, private router: Router) 
  {
    this.Depart = this.router.getCurrentNavigation().extras.state.Depart;
  }

  Put(Department: DepartmentDto)
  {
    this.spinkit = true;

    this.DepartmentService.Put(Department).subscribe(observable =>
    {
            
      this.spinkit = false;

      if (observable === null)
      {
        alert("El registro a sido guardado");
      }
      
    }, error => {console.log(error); alert("Error al guardar el registro"); this.spinkit = false;});
  }

}