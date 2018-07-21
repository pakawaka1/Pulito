import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


declare var google;
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
//   showRecycleView: boolean = false;
//   showTrashView:  boolean = true;

 
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private http: HttpClient) { }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.loadMap();
    // this.loadRecycleMarkers();
    // this.loadTrashMarkers();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    });
  }
};

//   loadRecycleMarkers() {
//     this.http.get('../../assets/data/recycleMarkers.json')
//       .subscribe(data => {
//       this.addRecycleMarkersToMap(data);
//     });
//   }
  
//   loadTrashMarkers() {
//     this.http.get('../../assets/data/trashMarker.json')
//     .subscribe(data => {
//       this.addTrashMarkersToMap(data);
//     });
//   }

//   addRecycleMarkersToMap(markers) {
//     for(let marker of markers) {
//       const position = new google.maps.LatLng(marker.latitude, marker.longitude);
//       const recycleMarker = new google.maps.Marker({position: position, title: marker.name});
//       recycleMarker.setMap(this.map);
//     }
//   }

//   addTrashMarkersToMap(markers) {
//     for(let marker of markers) {
//       const position = new google.maps.LatLng(marker.latitude, marker.longitude);
//       const trashMarker = new google.maps.Marker({position: position, title: marker.name});
//       trashMarker.setMap(this.map);
//     }
//   }

//   toggleRecycle(recycleMarker) {
//     this.showRecycleView = !this.showRecycleView;
//     }
    
//   toggleTrash(trashMarker) {
//     this.showTrashView = !this.showTrashView;
// }





//   addMarker() {
//     let marker = new google.maps.Marker({
//       map: this.map,
//       animation: google.maps.Animation.DROP,
//       position: this.map.getCenter()
//     });

//     let content = '<h4>Information!</h4>';
    
//     this.addInfoWindow(marker, content);
//   }

//   addInfoWindow(marker, content) {
//     let infoWindow = new google.maps.infoWindow({
//       content: content
//     });
  
//     google.maps.event.addListener(marker , 'click', () => {
//       infoWindow.open(this.map, marker);
//     });
//   }





 


