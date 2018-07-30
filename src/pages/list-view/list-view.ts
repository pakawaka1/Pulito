import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Settings } from '../../providers';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ILocation } from '../../app/interfaces/location';
import { AngularFireDatabase } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { Center } from './../../app/interfaces/center';
import { firebaseService } from '../../app/services/firebase';
import { ToastController } from 'ionic-angular';
import { take } from 'rxjs/operators';

@IonicPage()
@Component({
    selector: 'list-view',
    templateUrl: 'list-view.html',
})

export class ListViewPage implements OnInit {
    page: string = 'main';
    pageTitleKey: string = 'LISTVIEW_TITLE';
    pageTitle: string;
    public myLat;
    public myLong;
    public loadRecycle: boolean = true;
    public loadTrash: boolean = true;
    public recycle: any[];
    public trash: any[];
    public both: any[]= [];
    public locations;
    public Center: Center;

    constructor(public navCtrl: NavController,
        public settings: Settings,
        public formBuilder: FormBuilder,
        public navParams: NavParams,
        public geolocation: Geolocation,
        public translate: TranslateService,
        public firebaseService: firebaseService,
        private toastCtrl: ToastController) {}

    ngOnInit(): void {
        this.loadRecycleMarkers();
        this.loadTrashMarkers();
        this.geolocation.getCurrentPosition().then((position:any) => {
            this.myLat = position.coords.latitude;
            this.myLong = position.coords.longitude;
        });
    }

    ionViewWillEnter() {
        this.load();
    }

    load(){
        if(this.loadRecycle && this.loadTrash){
            this.locations = this.both;
        } else if(this.loadRecycle && !this.loadTrash){
            this.locations = this.recycle;
        } else {
            this.locations = this.trash;
        }
    }

    loadRecycleMarkers() {
        return this.firebaseService.loadRecyleLocations().pipe(take(1)).subscribe((res) => { 
          this.recycle = res;
          for(let item of this.recycle){
              this.both.push(item)
          }
          },(err)=>{
            const toast = this.toastCtrl.create({
              message: 'Error in loading Recycle locations',
              duration: 4000
            });
            toast.present();
        
        });
    }
    loadTrashMarkers() {
        return this.firebaseService.loadTrashPlaces().pipe(take(1)).subscribe((res) => { 
            this.trash = res;
            for(let item of this.trash){
                this.both.push(item);
            };
          },(err)=>{
            const toast = this.toastCtrl.create({
              message: 'Error in loading Landfill locations',
              duration: 4000
            });
            toast.present();
          });
    }

    toggleRecycle(){
        this.loadRecycle = true;
        this.loadTrash = false;
        this.load();
    }

    toggleTrash(){
        this.loadRecycle = false;
        this.loadTrash = true;
        this.load();
    }

    bothMarkers(){
        this.loadRecycle = true;
        this.loadTrash = true;
        this.load();
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