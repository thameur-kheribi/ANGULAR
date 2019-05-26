import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/shared/employee.service";
import { Employee } from "src/app/shared/employee.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService, private toastrService : ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  poupulateForm(emp : Employee)
  {
     this.service.formData = Object.assign({}, emp)
  }

  onDelete(employeeID : number)
  {
    if(confirm('Are you sure to delete this employee ?'))
      this.toastrService.info('Deleted successfully','EMP. Register')
      this.service.deleteEmployee(employeeID).subscribe(
        res => {
          this.service.refreshList()
        })
  }
}
