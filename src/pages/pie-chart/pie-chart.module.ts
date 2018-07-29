import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PieChartPage } from './pie-chart';

@NgModule({
  declarations: [
    PieChartPage,
  ],
  exports: [
    PieChartPage
  ]
})
export class PieChartPageModule {}
