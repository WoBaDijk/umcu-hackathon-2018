import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {OrganService} from '../../providers/organ-service-mock';

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
}
