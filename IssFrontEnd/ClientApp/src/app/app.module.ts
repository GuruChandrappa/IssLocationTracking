import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { IssComponent } from './components/iss/iss.component';
import { ShellComponent } from './components/shell/shell.component';


@NgModule({
  declarations: [
    IssComponent, 
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }