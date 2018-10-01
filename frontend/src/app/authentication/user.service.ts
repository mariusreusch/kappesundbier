import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.httpClient.get('./api/user').pipe(
      map((response: any) => new User(response.userAuthentication.details.given_name)
      ));
  }
}




