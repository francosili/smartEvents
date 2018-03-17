import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  baseUrl = 'http://192.168.0.15/smartevents/login'
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(pass, user) {
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'user' : user,
        'pass' : pass
      }
    };
    return new Observable(resolve => {
      this.http.post(this.baseUrl,options);
     });
  }
  
}
