import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {OrganService} from '../../providers/organ-service-mock';

import {OrganPage} from '../organ/organ';

@Component({
    selector: 'page-status',
    templateUrl: 'status.html'
})
export class StatusPage {

  organs: Array<any>;
  searchKey: string = "";

  overlayHidden: boolean = false;

  constructor(public navCtrl: NavController, public organService: OrganService,) {
    this.findAllOrgans();
  }

  findAllOrgans() {
    this.organService.findAll()
        .then(data => this.organs = data)
        .catch(error => alert(error));
  }

  evaluateOrganColor(status, lower, upper) {
    return this.organService.evaluateOrganColor(status, lower, upper);
  }

  openOrganPage(organ: any){
    this.navCtrl.push(OrganPage, organ);
    // this.navCtrl.push(OrganPage);
  }

  hideOverlay() {
    this.overlayHidden = true;
  }

  diseases = [
    { title: "Ontslagdatum", description: "Kritieke factoren:" },
  ];

  shownGroup = null;
  toggleGroup(group) {
    if (this.isGroupShown(group)) this.shownGroup = null;
    else this.shownGroup = group;
  };

  isGroupShown(group) {
      return this.shownGroup === group;
  };
}
