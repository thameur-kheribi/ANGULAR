import { Component, OnInit } from '@angular/core';
import { User } from "src/app/shared/user.model";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/shared/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) { }

 user: User
  ngOnInit() {
    this.customResetForm();
  }

customResetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    else
     this.user = {
        username: '',
        password: ''
      }
  }

  onSignIn(form: NgForm)
  {
      // this.authService.test();
      // alert('TEST IS ' + this.authService.result)

      this.authService.signin(this.user)
      this.router.navigate(['/test'])
      alert("Token " + this.authService.jwtResponse.token)
  }


}
