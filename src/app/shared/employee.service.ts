import { Injectable } from '@angular/core';
import { Employee } from "src/app/shared/employee.model";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee
  list: Employee[]
  readonly rootURL = "http://192.168.1.9:9002/"
  constructor(private httpClient: HttpClient) {
  }
  refreshList() {
    this.httpClient.get(this.rootURL + 'Employees')
      //  .subscribe(res => this.list = res as Employee[]);
      .toPromise().then(res => this.list = res as Employee[])
  }

  postEmployee(formData: Employee) {
    return this.httpClient.post(this.rootURL + 'Employees', formData);
  }

  putEmployee(formData: Employee) {
    return this.httpClient.put(this.rootURL + 'Employees/' + this.formData.EmployeeID, formData)
  }

  deleteEmployee(employeeID: number) {
    return this.httpClient.delete(this.rootURL + 'Employees/' + employeeID);
  }

  postEmployeeWithFile(request: FormData) {

    //const headers = new HttpHeaders({ 'Content-Type' : 'multipart/form-data'})
    return this.httpClient.post(this.rootURL + 'UploadFile', request/*, {headers}*/);
  }

  getEmployeeById(employeeID: number)
  {
    return this.httpClient.get(this.rootURL + 'Employees/' + employeeID).subscribe(
      response => this.formData = response as Employee
    )
  }

  getFileByName(fileName: string)
  {
      return this.httpClient.get(this.rootURL + 'Files/' + fileName);
  }
}
