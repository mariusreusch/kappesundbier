import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private httpClient: HttpClient) {
  }

  login(): Observable<boolean> {
    return this.httpClient.get('./api/user')
      .map(() => {
        this.isLoggedIn = true;
        return true;
      })
      .catch(() => {
        this.isLoggedIn = false;
        return Observable.of(false);
      });
  }

  logout(): void {
    this.httpClient.post('./logout', {})
      .do(() => this.isLoggedIn = false)
      .catch(() => {
        this.isLoggedIn = false;
        return Observable.of('');
      })
      .subscribe();
  }
}




