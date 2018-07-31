import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IReport } from '../../app/interfaces/report';
import { Geolocation } from '@ionic-native/geolocation';
import { firebaseService } from '../../app/services/firebase';
import { Modal, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

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
export class ReportsPage implements OnDestroy{
  public myLat;
  public myLong;
  public reports:IReport[];
  reportSub;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public firebaseService:firebaseService,
    public geolocation: Geolocation,
    public modal : ModalController
  ) {}

  ngOnDestroy (){
    this.reportSub.unsubscribe();
  }

  public openModal(){
    const newReportModal: Modal = this.modal.create('ModalPage');
    newReportModal.present();
  }

  ionViewDidLoad() {
    this.loadReports();
  }

  ngOnInit(): void {
    this.geolocation.getCurrentPosition().then((position:any) => {
      this.myLat = position.coords.latitude;
      this.myLong = position.coords.longitude;
        
    });
  }

  loadReports(){
    this.reportSub = this.firebaseService.loadReports().subscribe(res => {
      this.reports = res;
      this.reports.reverse();
    })
  }

  public getDistanceFromLatLonInMi(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    d = d * .0621371
    if (isNaN(d)) d = 0;
    return d.toFixed(1);
  }

  private deg2rad(deg) {
    return deg * (Math.PI/180)
  }

}
