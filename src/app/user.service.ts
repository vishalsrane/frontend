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

  getUsers(): Observable<User[]>{
    console.log('in getUsers() method');
    return this._http.get<User[]>('/user');    
  }

  createUser(user: User): Observable<User>{
    return this._http.post<User>('/user', user);    
  }
}
