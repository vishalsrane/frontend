import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Participation } from 'src/app/dashboard/Participation';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getParticipationMatrics(): Observable<Participation>{
    console.log('in getUsers() method');
    return this._http.get<Participation>('/chart/participationMatrics');    
  }
}
