import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';
import { Participation } from 'src/app/dashboard/Participation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  private participation:Participation = new Participation();
  private fromDate: Date;
  private toDate: Date;
  private businessUnits: string[] = ["a", "b"];
  
  private locations: string[] = [];

  private xFilters: string[] = ["Time", "Location", "Business Unit"];
  private yFilters: string[] = ["Head Count", "Unique Volunteers", "Total Volunteering Hours",
  "Coverage", "Frequency Per Volunteer", "Hours Per Associate","Hours Per Volunteer",
  "Total Events", "Hoursper Event", "Volunteers Per Event"];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    console.log('Enter DashboardComponent onInit()');
    this.dashboardService.getParticipationMatrics()
        .subscribe(data => this.setInitialvalues(data), error => console.log(error));
    
    console.log('Exit DashboardComponent onInit()');
  }

  setInitialvalues(data){
    console.log('enetered setInitialvalues')
    this.participation = data;
    this.fromDate = this.participation.fromDate;
    this.toDate = this.participation.toDate;
    this.businessUnits = this.participation.businessUnits;
    this.locations = this.participation.locations;
  }


}
