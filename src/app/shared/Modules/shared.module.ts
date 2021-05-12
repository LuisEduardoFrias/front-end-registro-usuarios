import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinkitComponent } from '../Components/spinkit/spinkit.component';
import { OnlyNumberDirective } from '../Directives/only-number.directive';

@NgModule({
  declarations: 
  [
    OnlyNumberDirective,
    SpinkitComponent,
    
  ],
  imports: 
  [
      CommonModule,
  ],
  exports:
  [
    OnlyNumberDirective,
      SpinkitComponent,
    
  ],
})
export class SharedModule { }
