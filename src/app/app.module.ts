import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Project1Component } from './project1/project1.component';
import { Project2Component } from './project2/project2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Project1Component,
    Project2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
