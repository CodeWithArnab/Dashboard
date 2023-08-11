import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  chart: any;
  time = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '1:30 PM',
    '2:30 PM',
    '3:30 PM',
    '4:30 PM',
    '5:30 PM',
  ];
  apiCalls = [3000, 4500, 5000, 7546, 7000, 8000, 6400, 9000];
  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('api-calls', {
      type: 'line',
      data: {
        labels: this.time,
        datasets: [
          {
            data: this.apiCalls,
            borderColor: '#7549FF',
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
            
            
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  }
}
