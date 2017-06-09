import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";
import { Http } from "@angular/http";

@Injectable()
export class HomeService {

  constructor(private http: Http) {
  }

  getUser(): Observable<any> {
    //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    return this.http.get("./api/user")
      .map(response => response.json()
      )
      .catch(() => {
        return Observable.of("");
      });
  }


}




