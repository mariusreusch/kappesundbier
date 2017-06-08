import { Injectable, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { log } from "util";

@Injectable()
export class AuthenticationService {


  authenticated = false;

  constructor(private http: Http) {
  }

  login() {
    return this.http.get("./api/user")
      .map(response => {
        return true;
      })
      .catch(() => {
        return Observable.of(false);
      });
  }

  logout() {
    this.http.post('./logout', {})
      .map(response => {
        this.authenticated = false;
      })
      .catch(() => {
        this.authenticated = false;
        return Observable.of("");
      });

  }


}
