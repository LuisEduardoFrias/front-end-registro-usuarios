import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { DepartmentService } from 'src/app/shared/Services/Department/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent{

  public spinkit:boolean = false;
  public Depart : DepartmentDto;
  
  constructor(private DepartmentService: DepartmentService, private router: Router,private toastr: ToastrService) 
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
        this.toastr.success('El registro a sido editado..','Éxito');
      }
      
    },error => {console.log(error); this.toastr.error('Error al editar el registro.','Error'); this.spinkit = false;});
  }

}