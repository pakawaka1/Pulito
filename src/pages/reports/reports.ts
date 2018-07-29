import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IReport } from '../../app/interfaces/report';

/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  public reports:IReport[] = [{
    title: 'Matress',
    location: 20,
    description: 'Somebody left their mattress on the side of the road.'
  },{
    title: 'A really dirty alley',
    location: 0.5,
    description: 'The alley behind my house is filthy'
  },{
    title: 'Old couch',
    location: 0.9,
    description: 'somebody just dumped an old couch in the field right behind my house'
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

}
