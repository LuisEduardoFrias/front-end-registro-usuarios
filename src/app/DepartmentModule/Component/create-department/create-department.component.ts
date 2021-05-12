import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { DepartmentService } from 'src/app/shared/Services/Department/department.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent{

  public spinkit:boolean = false;

  constructor(private DepartmentService: DepartmentService,private toastr: ToastrService) { }

  Post(Department: DepartmentDto)
  {
    this.spinkit = true;

    this.DepartmentService.Post(Department).subscribe(observable =>
    {
      this.spinkit = false;

      if (observable === null)
      {
        this.toastr.success('El registro a sido creado.','Éxito');
      }
      
    }, error => {console.log(error); this.toastr.error('Error al crear el registro.','Error'); this.spinkit = false;});
  }

}