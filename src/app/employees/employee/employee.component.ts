import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "src/app/shared/employee.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService, private toastrService : ToastrService) { }
  file: File
  requestData: FormData
  ngOnInit() {
    this.customResetForm();
  }

  customResetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    else
      this.service.formData = {
        EmployeeID: null,
        FullName: '',
        Position: '',
        EMPCode: '',
        Mobile: ''
      }
  }

  // Global submit function
  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form)
  }

  // Insert record
  insertRecord(form: NgForm) {
     // TOMORROW : We forgot the following
     this.buildRequest(form)
     this.service.postEmployeeWithFile(this.requestData).subscribe(
    //this.service.postEmployee(form.value).subscribe(
      res => {
        if (res == true)
          this.toastrService.success('Inserted successfully','EMP. Register')
        else
           this.toastrService.warning('FullName already exist !','EMP. Register')
        this.service.refreshList()
        this.customResetForm(form)
      })
  }

  // Build Request body
  buildRequest(form: NgForm)
  {
    this.requestData = new FormData();
    let emp = form.value;
    this.requestData.append('file', this.file)
    this.requestData.append('employee', JSON.stringify(emp))
  }

  // Update record
  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(
      res => {
        this.toastrService.warning('Updated successfully','EMP. Register')
        this.service.refreshList()
        this.customResetForm(form)
      })
  }

  onSelectedFile(event)
  {
    this.file = event.target.files[0]
    console.log(this.file)
  }
}
