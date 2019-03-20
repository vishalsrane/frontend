import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/chart.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  chart = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.associatesByBusinessUnit()
    .subscribe(res =>{
      console.log(Object.values(res));
      let departments = Object.keys(res);
      let employees = Object.values(res);

      this.chart = new Chart('canvas', {
        type:'line',
        data: {
          labels: departments,
          datasets: [
            {
              label: "Department wise Count of Employees",              
              data:employees,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
              fill: false
            }
          ]
        },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
      });

    })
  }

  associatesByBusinessUnit(){
    
  }

}
