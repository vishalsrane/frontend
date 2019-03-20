import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  associatesByBusinessUnit(){
    return this.http.get("/countByBusinessUnit")
    .map(result =>result);
  }

}
