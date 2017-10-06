import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.httpClient.get('./api/user')
      .map(response => response)
      .catch(() => {
        return Observable.of('');
      });
  }
}




