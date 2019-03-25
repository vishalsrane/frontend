import { Injectable } from '@angular/core';'@angular/http';
import 'rxjs/add/operator/map';
import { User } from './users/User';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) { }

  getUsers(): Observable<any[]>{
    console.log('in getUsers() method');
    return this._http.get<any[]>('/user');    
  }

  // getUsers(){
  //   this._http.get('/user')
  //   .subscribe(
  //     data => console.log(data),
  //     () => alert('Invalid Credentials')
  //   );
  // }
}
