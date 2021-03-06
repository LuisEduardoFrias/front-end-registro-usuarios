import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DepartmentDto } from 'src/app/shared/Entities/department/department-dto';
import { DepartmentService } from 'src/app/shared/Services/Department/department.service';

@Component({
  selector: 'app-show-departmet',
  templateUrl: './show-departmet.component.html',
  styleUrls: ['./show-departmet.component.css']
})
export class ShowDepartmetComponent {

  public depart?: DepartmentDto[] = undefined;
  private NavigationExtras : NavigationExtras;
  public spinkit: boolean;

  constructor(private departmetService: DepartmentService, private router: Router)
  {
    this.spinkit = true;
    departmetService.Get().subscribe(oberver =>
    {
      this.depart = oberver;
      this.spinkit = false;
    }, error =>
    {
      console.log(error);
      this.spinkit = false;
    });
  }

  update(id : number)
  {
    for(let i = 0; i < this.depart.length; i++)
    {
      if(this.depart[i].code == id)
      {
        this.NavigationExtras =
        {
          state:{
            Depart:this.depart[i]
          }
        }

        this.router.navigate(["departamentos/editar"],this.NavigationExtras)
      }
    }
  }
}
