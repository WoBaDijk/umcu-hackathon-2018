import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {OrganService} from '../../providers/organ-service-mock';
import * as HighCharts from 'highcharts';
@Component({
    selector: 'page-organ',
    templateUrl: 'organ.html'
})
export class OrganPage {

  organ: any;

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public organService: OrganService, public toastCtrl: ToastController) {
      this.organ = this.navParams.data;
      organService.findById(this.organ.id).then(
          organ => this.organ = organ
      );
  }

  evaluateOrganColor(status, lower, upper) {
    return this.organService.evaluateOrganColor(status, lower, upper);
  }

  ionViewDidLoad() {
    // var myChart = HighCharts.chart('container', {
    //   chart: {
    //     type: 'spline'
    //   },
    //   title: {
    //     text: 'Heartrate',
    //     style: {
    //       fontSize: '15px',
    //     },
    //   },
    //   xAxis: {
    //     categories: ['Eergisteren', 'Gisteren', 'Vandaag', 'Morgen'],
    //     labels: {
    //       style: {
    //           fontSize:'15px'
    //       }
    //     }
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Hartslag'
    //     },
    //     plotLines: [{
    //       value: 140,
    //       color: 'red',
    //       dashStyle: 'shortdash',
    //       width: 2,
    //       label: {
    //         text: 'Bovengrens hartslag'
    //       }
    //     }]
    //   },
    //   series: [
    //     {
    //       name: 'YOU',
    //       data: [160, 155, 145],
    //       lineWidth: 10,
    //       zones: [{
    //         value: 140,
    //         color: '#009345',
    //         }, {
    //         value: 150,
    //         color: '#EC1C24' // oranje
    //         }, {
    //         color: '#EC1C24',
    //         }]
    //     },
    //     {
    //       name: 'PREDICT',
    //       data: [null, null, 145, 130],
    //       lineWidth: 10,
    //       dashStyle: 'dash',
    //       zones: [{
    //         value: 140,
    //         color: '#009345' // rood
    //         }, {
    //         value: 150,
    //         color: '#EC1C24' // oranje
    //         }, {
    //         color: '#EC1C24' // groen
    //       }
    //   ]},
    //   ]
    // });
  }
}