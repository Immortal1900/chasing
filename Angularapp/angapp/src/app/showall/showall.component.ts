import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';

declare var  M:any;
@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css'],
  providers: [EmployeeService]
})
export class ShowallComponent implements OnInit {
employeeService
  constructor(kk:EmployeeService) { 
    this.employeeService=kk;
  }

  ngOnInit(): void {
    this.showall();
  }
  showall(){
    console.log('SHOW ALL called');
    this.employeeService.getallEmployee().subscribe((res)=>{
      this.employeeService.employees=res as Employee[];
      console.log(this.employeeService.employees);
      M.toast({html: 'Loaded Successfully',classes: 'rounded'});
    });
  }

}
