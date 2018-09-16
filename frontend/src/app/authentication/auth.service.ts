import { of as observableOf, Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private httpClient: HttpClient) {
  }

  login(): Observable<boolean> {
    return this.httpClient.get('./api/user').pipe(
      map(() => {
        this.isLoggedIn = true;
        return true;
      }),
      catchError(() => {
        this.isLoggedIn = false;
        return observableOf(false);
      }),);
  }

  logout(): void {
    this.httpClient.post('./logout', {}).pipe(
      tap(() => this.isLoggedIn = false),
      catchError(() => {
        this.isLoggedIn = false;
        return observableOf('');
      }),)
      .subscribe();
  }
}




