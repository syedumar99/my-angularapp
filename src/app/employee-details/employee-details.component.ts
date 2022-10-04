import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employee !: IEmployee[];
  constructor( private employeeService : EmployeeService ) { }
  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(data => this.employee = data)
  }
}
