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

  constructor(public navCtrl: NavController, public organService: OrganService,) {
    this.findAllOrgans();
  }

  findAllOrgans() {
    this.organService.findAll()
        .then(data => this.organs = data)
        .catch(error => alert(error));
  }

  openOrganPage(organ: any){
    this.navCtrl.push(OrganPage, organ);
    // this.navCtrl.push(OrganPage);
  }
}
