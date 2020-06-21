import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowallComponent } from './showall/showall.component'
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes:Routes=[
  {path: '', component:EmployeeComponent}
  ,{path: 'showall',component: ShowallComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowallComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
