import { Component, OnInit } from '@angular/core';
import { HorizontalMenu } from '../../Entities/horizontal-menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menu: HorizontalMenu[] = [
    new HorizontalMenu("Home", ""),
    new HorizontalMenu("Ver Usuarios", "usuarios"),
    new HorizontalMenu("Crear Usario", "usuarios/crear"),
    new HorizontalMenu("Ver departamentos", "departamentos"),
    new HorizontalMenu("Crear departamento", "departamentos/crear"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
