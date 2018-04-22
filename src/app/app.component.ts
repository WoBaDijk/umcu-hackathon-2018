import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {GeneralPage} from '../pages/general/general';
import {StatusPage} from '../pages/status/status';
import {OrganPage} from '../pages/organ/organ';
import {TreatmentPage} from '../pages/treatment/treatment';
import {AdvicePage} from '../pages/advice/advice';
import {AboutPage} from '../pages/about/about';
import {DetailPage} from '../pages/detailpage/detailpage';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    backupMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Mijn opname', component: GeneralPage, icon: 'person'},
            {title: 'Status', component: StatusPage, icon: 'pulse'},
            // {title: 'Detail', component: DetailPage, icon: 'medkit'},
            {title: 'Behandelingen', component: PropertyListPage, icon: 'medkit'},
            {title: 'Adviezen', component: PropertyListPage, icon: 'text'},
        ];

        this.backupMenuItems = [
            {title: 'Properties', component: PropertyListPage, icon: 'home'},
            {title: 'Brokers', component: BrokerListPage, icon: 'people'},
            {title: 'Favorites', component: FavoriteListPage, icon: 'star'},
            {title: 'Get Preapproved', component: WelcomePage, icon: 'checkmark-circle'},
        ];

        this.accountMenuItems = [
            // {title: 'Mijn account', component: WelcomePage, icon: 'ios-contact'},
            {title: 'Over deze app', component: AboutPage, icon: 'information-circle'},
            {title: 'Uitloggen', component: WelcomePage, icon: 'log-out'},
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
