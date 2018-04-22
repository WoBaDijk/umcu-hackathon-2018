import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
    selector: 'page-blank',
    templateUrl: 'detailpage.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController) {
  }

// > 150 heartrate == rood
  ionViewDidLoad() {
    var myChart = HighCharts.chart('container', {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Heartrate',
        style: {
          fontSize: '15px',
        },
      },
      xAxis: {
        categories: ['Eergisteren', 'Gisteren', 'Vandaag', 'Morgen'],
        labels: {
          style: {
              fontSize:'15px'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Hartslag'
        },
        plotLines: [{
          value: 140,
          color: 'red',
          dashStyle: 'shortdash',
          width: 2,
          label: {
            text: 'Bovengrens hartslag'
          }
        }]
      },
      series: [
        {
          name: 'YOU',
          data: [160, 155, 145],
          lineWidth: 10,
          zones: [{
            value: 140,
            color: '#009345',
            }, {
            value: 150,
            color: '#EC1C24' // oranje
            }, {
            color: '#EC1C24',
            }]
        },
        {
          name: 'PREDICT',
          data: [null, null, 145, 130],
          lineWidth: 10,
          dashStyle: 'dash',
          zones: [{
            value: 140,
            color: '#009345' // rood
            }, {
            value: 150,
            color: '#EC1C24' // oranje
            }, {
            color: '#EC1C24' // groen
          }
      ]},
      ]
    });
  }
}