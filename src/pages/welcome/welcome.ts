import {Component, ViewChild} from '@angular/core';
import {NavController, Platform, Slides} from 'ionic-angular';
import {StatusPage} from '../status/status';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
    @ViewChild('slides') slides: Slides;

    constructor(public navCtrl: NavController, public platform: Platform) {}

    openApp() {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(StatusPage);
    }

    isMobileDevice(){
    // Check If Cordova/Mobile
     if (this.platform.is('cordova')) return true;
     else return false;
  }

  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }
}
