import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "src/app/shared/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {



image: string

  constructor(private service: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit() {

    let employeeID  = +this.route.snapshot.paramMap.get('EmployeeID')
    // console.log("Activated route id is : " + id)
    // alert("Activated route id is : " + id)
    //  alert("Type is : " + typeof(employeeID))
    this.service.getEmployeeById(employeeID)
    this.image = this.service.rootURL + 'Files/' + this.service.formData.FileName;    
  }

}
