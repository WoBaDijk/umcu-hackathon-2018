import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TimeseriesPage } from './timeseries';

@NgModule({
  declarations: [
    TimeseriesPage,
  ],
  exports: [
    TimeseriesPage
  ]
})
export class TimeseriesPageModule {}
