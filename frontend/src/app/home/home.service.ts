import { of as observableOf, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.httpClient.get('./api/user').pipe(
      map(response => response),
      catchError(() => {
        return observableOf('');
      }),);
  }
}




