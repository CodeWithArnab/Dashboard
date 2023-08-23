import { Component, OnInit,PLATFORM_ID,Inject } from '@angular/core';
import { Chart } from 'chart.js';
import { activityData } from './activity-data';
import { HttpClient } from '@angular/common/http';
import { MyDataService } from './my-data.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  // standalone:true,
  // imports: [MatProgressBarModule,],
})
export class ProfileComponent implements OnInit {
  chart: any;
  pieChart: any;
  myData:any;
  activityData :any;
  pieLabels :any;
  pieData :any;
  time :any;
  apiCalls :any;

  constructor(private myDataService:MyDataService,@Inject(PLATFORM_ID) private platformId: Object) {}

  

  ngOnInit(): void {
    // this.getUserData();
    this.myDataService.getData()
    .subscribe((data)=>{
      this.myData=data;
      // console.log(this.myData);
      if (isPlatformBrowser(this.platformId)) {
      this.createApiCallsChart();
      this.createPieChart();
      }
      this.activityData = this?.myData?.activityData;

    })
    
    

    
  }
  createApiCallsChart() {
    const time = this.myData?.apiCallData?.time;
    const apiCalls = this.myData?.apiCallData?.apiCalls;

    this.chart = new Chart('api-calls', {
      type: 'line',
      data: {
        labels: time,
        datasets: [
          {
            data: apiCalls,
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
  createPieChart() {
    const pieLabels = this.myData?.plData?.pieLabels;
    const pieData = this.myData?.plData?.pieData;

    this.pieChart = new Chart('pie-chart', {
      type: 'doughnut',
      data: {
        labels: pieLabels,
        datasets: [
          {
            data: pieData,
            backgroundColor: ['#FD2254', '#00B7FE', '#D0D2DA'],
            borderAlign: 'center',
          },
        ],
      },
      options: {
        legend: {
          display: true,
          position: 'left',
          labels: {
            boxWidth: 10,
            fontColor: '#000',
          },
        },
      },
    });
  }
}
