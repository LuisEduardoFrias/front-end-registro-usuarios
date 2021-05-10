import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from '../Components/app-componet/app.component';
import { HomeComponent } from '../Components/home/home.component';
import { HeaderComponent } from '../Components/header/header.component';
import { MenuComponent } from '../Components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
