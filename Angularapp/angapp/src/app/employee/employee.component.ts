import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
declare var M:any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employeeService
  constructor(kk: EmployeeService) { 
    this.employeeService=kk;
   
  }

  ngOnInit(): void {
    this.resetForm()
    
  }
  resetForm(form? :NgForm){
    console.log("RESET CAELEELD");
    if(form)
    form.reset();
    this.employeeService.selectedEmployee={
      name:"",
      position:"",
      office:"",
      salary:null
    }
  }
  method(){
    console.log("ASDDDDDDDDDDDD");
  }
  onSubmit(form: NgForm){
    console.log('Submit called');
    this.employeeService.postEmployee(form.value).subscribe((res)=>{
      this.resetForm(form);
      M.toast({html: 'Saved Succesfully',classes: 'rounded'});
    });
  }

}
