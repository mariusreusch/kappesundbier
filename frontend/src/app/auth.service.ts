import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";
import { Http } from "@angular/http";

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) {
  }

  login(): Observable<boolean> {
    return this.http.get("./api/user")
      .map(response => {
        response.json();
        this.isLoggedIn = true;
        return true;
      })
      .catch(() => {
        this.isLoggedIn = false;
        return Observable.of(false);
      });
  }

  logout(): void {
    this.http.post('./logout', {})
      .map(response => {
        this.isLoggedIn = false;
      })
      .catch(() => {
        this.isLoggedIn = false;
        return Observable.of("");
      })
      .subscribe();
  }

}




