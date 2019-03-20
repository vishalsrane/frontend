import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
// import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: Http) { }

  obtainAccessToken(loginData){
    let params = new URLSearchParams();
    params.append('username', loginData.username);
    params.append('password', loginData.password);
    params.append('grant_type', 'password');
    params.append('client_id', 'plural');

    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("plural:plural")});
    let options = new RequestOptions({ headers: headers });
    console.log(params.toString());
    this._http.post
    ('/services/oauth/token', params.toString(), options)
    .map(res => res.json())
    .subscribe(
      data => console.log(data),//this.saveToken(data),
      () => alert('Invalid Credentials')
    ); 

  }
}
