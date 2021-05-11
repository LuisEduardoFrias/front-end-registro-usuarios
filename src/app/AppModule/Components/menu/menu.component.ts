import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HorizontalMenu } from 'src/app/AppModule/Entities/horizontal-menu';

@Component({
  selector: 'menus',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  public Menus: HorizontalMenu[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  IsClick(link: string) {
    this.router.navigate([link])
  }

}


