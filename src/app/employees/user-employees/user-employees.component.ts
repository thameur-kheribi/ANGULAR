import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/shared/employee.service";

@Component({
  selector: 'app-user-employees',
  templateUrl: './user-employees.component.html',
  styleUrls: ['./user-employees.component.css']
})
export class UserEmployeesComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  ngOnInit() {
     this.service.refreshList();
  }

}
