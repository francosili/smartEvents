import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Configuraciones } from '../../clases/configuraciones';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class AuthProvider {
  
  constructor(public http: Http) {}

  login(pass, user) {
    let headers = new Headers;
    headers.append('user', user);
    headers.append('pass', pass);
    var opciones: RequestOptionsArgs = {
      url: Configuraciones.authUrl,
      method: RequestMethod.Post,
      search: null,
      headers: headers,
      body: null
    }
    var reqOptions = new RequestOptions(opciones);
    var req = new Request(reqOptions);
    return this.http.request(req).timeout(Configuraciones.timeoutDefault).map(res => { return res.json() });     
  }
  
}
