import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { JsonService } from '../../providers/json-service';
import { Chart } from 'chart.js';

@Component({
    selector: 'page-treatment',
    templateUrl: 'treatment.html',
    providers: [JsonService]
})
export class TreatmentPage {
  public data: any;
  private dataurl: any;
  public lineChartEl               : any;
  public chartLabels               : any    = [];
  public chartValues               : any    = [];
  public chartValues2              : any    = [];

  @ViewChild('lineChart') lineChart;

  constructor(public navCtrl: NavController, public navParams : NavParams, public http:Http, public jsonService: JsonService) {
/*     this.dataurl = 'assets/data/test.json'; */
/*     this.loadJson(this.dataurl); */
}

/* loadJson(dataurl: string) {
  this.jsonService.load(dataurl)
  .then(data => {
    this.data = data
    console.log('my treatment.ts.data', this.data)
    console.log('my loadJson.link', dataurl)
  })
}; */

ionViewDidLoad()
{
    this.dataurl = 'assets/data/test.json';
    this.defineChartData(this.dataurl);
    this.createLineChart();
}

defineChartData(dataurl: string)
{
  this.jsonService.load(dataurl)
  .then(data => {
    this.data = data
    console.log('my defineChartData.data', this.data)
    console.log('my defineChartData.link', dataurl)
  
    let k : any;

    for(k in this.data)
    {
       var tech  =      this.data[k];
 
       this.chartLabels.push(tech.time);
       this.chartValues.push(tech.mon_sat);
       this.chartValues2.push(tech.ven_fio2);
    }
  });

}


/**
 *
 * Configure the Line chart, define configuration options
 *
 */
createLineChart()
{
  console.log('values: ', this.chartValues);
  console.log('labels: ', this.chartLabels); 
  
  this.lineChartEl 			= new Chart(this.lineChart.nativeElement,
   {
      type: 'line',
      data: {
          labels: this.chartLabels,
          datasets: [{
              label                 : 'Saturatie',
              data                  : this.chartValues,
              duration              : 0,
              borderColor           : 'rgba(54, 116, 152, 0.5)',
              borderwidth           : 3,
              backgroundColor       : 'rgba(54, 116, 152, 0.5)',
              hoverBackgroundColor  : 'rgba(103, 139, 160, 0.5)',
              fill 				          : false,
              pointRadius           : 0
          }, {
              label                 : 'FiO2',
              data                  : this.chartValues2,
              duration              : 0,
              borderColor           : 'rgba(192, 192, 192, 0.5)',
              borderwidth           : 3,
              backgroundColor       : 'rgba(192, 192, 192, 0.5)',
              hoverBackgroundColor  : 'rgba(220, 220, 220, 0.5)',
              fill 				          : false,
              pointRadius           : 0
        }]    
      },
      options : {
         maintainAspectRatio: false,
         legend         : {
            display     : true,
            boxWidth    : 80,
            fontSize    : 15,
            padding     : 0
         },
         title: {
          display: true,
          text: 'Beademing'
         },
         scales: {
             yAxes: [{
                  ticks: {
                    beginAtZero:true,
                    stepSize: 5,
                    max : 110
                 }
             }],
             xAxes: [{  
                  ticks: {
                    autoSkip: true
                 }
             }]
         }
      }
   });
}



}