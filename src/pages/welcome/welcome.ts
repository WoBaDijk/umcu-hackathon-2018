import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BlankPage} from '../blank/blank';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    constructor(public navCtrl: NavController) {}
    
    openApp() {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(BlankPage);
    }

}
