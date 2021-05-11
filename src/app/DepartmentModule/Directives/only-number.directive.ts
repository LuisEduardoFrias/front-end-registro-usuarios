import { Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})

export class OnlyNumberDirective implements OnInit {

  constructor(private  el: ElementRef, private re: Renderer2) { }
  
  ngOnInit(): void 
  {
    this.re.listen(this.el.nativeElement, "keypress", (e) => this.OnlyNumb(e))
  }

  OnlyNumb(e: any)
  {debugger;
    var key = window.event ? e.which : e.keyCode;
        
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
  
  }

}