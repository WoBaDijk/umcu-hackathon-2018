import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    properties: Array<any>;
    propertyService: PropertyService;

    constructor(public navCtrl: NavController, public service: PropertyService) {
        this.propertyService = service;
        this.propertyService.getFavorites().then(data => this.properties = data);
    }

    itemTapped(property) {
        this.navCtrl.push(PropertyDetailPage, property);
    }

    deleteItem(property) {
        this.propertyService.unfavorite(property);
    }

}
