import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from "src/app/shared/employee.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './not-found404.component';
import { UserEmployeesComponent } from './employees/user-employees/user-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthService } from "src/app/shared/auth.service";
import { TestComponent } from './auth/test/test.component';

const appRoutes : Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'register', component: EmployeesComponent},
  { path : '', redirectTo: '/register', pathMatch: 'full'},
  { path: 'search', component: UserEmployeesComponent},
  { path: 'details/:EmployeeID', component: EmployeeDetailsComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFound404Component }
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoginComponent,
    NotFound404Component,
    UserEmployeesComponent,
    EmployeeDetailsComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [EmployeeService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
