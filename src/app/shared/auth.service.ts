import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/shared/user.model";
import { JwtResponse } from "src/app/shared/jwt-response.model";
import { HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
jwtResponse: JwtResponse
 readonly rootURL = "http://192.168.1.7:9002/"
  constructor(private httpClient: HttpClient) { }
    result: boolean

  signin( user: User)
  {
    alert('XXX ' + user.username + ' XXX ' + user.password)
    return this.httpClient.post(this.rootURL + 'SignIn', user, httpOptions).
    toPromise().
      then(res => this.jwtResponse = res as JwtResponse)
  } 

}
