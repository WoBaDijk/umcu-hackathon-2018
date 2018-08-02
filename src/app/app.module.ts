import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import { BarChartPage } from '../pages/bar-chart/bar-chart';
import { PieChartPage } from '../pages/pie-chart/pie-chart';
import {TimeseriesPage} from '../pages/timeseries/timeseries';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {BlankPage} from '../pages/blank/blank';
import {GeneralPage} from '../pages/general/general';
import {StatusPage} from '../pages/status/status';
import {OrganPage} from '../pages/organ/organ';
import {TreatmentPage} from '../pages/treatment/treatment';
import {AdvicePage} from '../pages/advice/advice';
import {AboutPage} from '../pages/about/about';

import {OrganService} from "../providers/organ-service-mock";
import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailPage } from '../pages/detailpage/detailpage';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    BarChartPage,
    PieChartPage,
    TimeseriesPage,
    BlankPage,
    GeneralPage,
    StatusPage,
    OrganPage,
    TreatmentPage,
    AdvicePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    DetailPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    BarChartPage,
    PieChartPage,
    TimeseriesPage,
    BlankPage,
    GeneralPage,
    StatusPage,
    OrganPage,
    TreatmentPage,
    AdvicePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    DetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OrganService,
    PropertyService,
    BrokerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
