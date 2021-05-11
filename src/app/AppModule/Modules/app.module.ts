import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Component
import { AppComponent } from '../Components/app-componet/app.component';
import { HomeComponent } from '../Components/home/home.component';
import { HeaderComponent } from '../Components/header/header.component';
import { MenuComponent } from '../Components/menu/menu.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

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
    HttpClientModule
  ],
  providers: [FormBuilder, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
