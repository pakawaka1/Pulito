import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  // google;
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  showRecycleView: boolean = true;
  showTrashView:  boolean = true;
  public recycleList: any[] = []; 
  public trashList: any[] = [];

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private http: HttpClient, private toastCtrl: ToastController ) { }
  
  ionViewWillEnter() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position:any) => {
      // console.log(position)
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 10, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.loadRecycleMarkers();
      this.loadTrashMarkers();
    }, err => {
      const toast = this.toastCtrl.create({
        message: 'Please enable your location services for this app to use this feature',
        duration: 3000
      });
      toast.present();
    });
  }

  loadRecycleMarkers() {
    this.http.get('../../assets/data/recycleMarkers.json')
      .subscribe(data => {
        this.addRecycleMarkersToMap(data);
    });
  }

  addRecycleMarkersToMap(markers) {
    for(let marker of markers) {
      const infowindow = new google.maps.InfoWindow({
        content: marker.name
      });
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      const recycleMarker = new google.maps.Marker({position: position, 
                                                    title: marker.name, 
                                                    icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                                                    type: 'recyle'});
      recycleMarker.setMap(this.map);
      google.maps.event.addListener(recycleMarker, 'click', () => {
        infowindow.open(this.map, recycleMarker);
      }) 
      this.recycleList.push(recycleMarker)
    }
  }

  loadTrashMarkers() {
    this.http.get('../../assets/data/trashMarker.json')
    .subscribe(data => {
      this.addTrashMarkersToMap(data);
    });
  }

    addTrashMarkersToMap(markers) {
    for(let marker of markers) {
      const infowindow = new google.maps.InfoWindow({
        content: marker.name
      });
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      const trashMarker = new google.maps.Marker({position: position, 
                                                  title: marker.name,
                                                  type: 'trash'});
      trashMarker.setMap(this.map);
      google.maps.event.addListener(trashMarker, 'click', () => {
        infowindow.open(this.map, trashMarker);
      })
      this.trashList.push(trashMarker);
    }
  }

  toggleTrash(){
    for(let recycle of this.recycleList){
      recycle.setMap(null)
    }
    for(let trash of this.trashList){
      trash.setMap(this.map)
    }
  }
        
  toggleRecycle() {
    for(let trash of this.trashList){
      trash.setMap(null)
    }
    for(let recycle of this.recycleList){
      recycle.setMap(this.map)
    }
  }
}
 