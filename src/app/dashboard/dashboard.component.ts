import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  xFilters: string[] =["Time", "Location", "Business Unit"];
  yFilters: string[] =["Head Count", "Unique Volunteers", "Total Volunteering Hours",
  "Coverage", "Frequency Per Volunteer", "Hours Per Associate","Hours Per Volunteer",
  "Total Events", "Hoursper Event", "Volunteers Per Event"];
  constructor() { }

  ngOnInit() {
  }

}
