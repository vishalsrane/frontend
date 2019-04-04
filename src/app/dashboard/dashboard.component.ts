import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';
import { Participation } from 'src/app/dashboard/Participation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  private participation: any;

  xFilters: string[] =["Time", "Location", "Business Unit"];
  yFilters: string[] =["Head Count", "Unique Volunteers", "Total Volunteering Hours",
  "Coverage", "Frequency Per Volunteer", "Hours Per Associate","Hours Per Volunteer",
  "Total Events", "Hoursper Event", "Volunteers Per Event"];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    console.log('inside dashboard onInit()=========>');
    this.dashboardService.getParticipationMatrics()
        .subscribe(data =>this.participation = data, error => console.log(error));
    console.log(this.participation);
  }

}
