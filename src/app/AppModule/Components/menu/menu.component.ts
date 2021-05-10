import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  Link: string = '**'

  @Input()
  public Tittle : string = "Tittle";

  public width: string = "100px";
  public height: string =  "100px";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  IsClick(){
    this.router.navigate([this.Link])
  }

}
