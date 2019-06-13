import { Component, OnInit } from '@angular/core';
import { JwtResponse } from "src/app/shared/jwt-response.model";
import { AuthService } from "src/app/shared/auth.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private srv: AuthService) { }
  test: JwtResponse
  ngOnInit() {

     this.test = this.srv.jwtResponse;
  }

}
