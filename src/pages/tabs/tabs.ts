import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";

import { Camera, CameraOptions } from "@ionic-native/camera";
import { normalizeURL } from "ionic-angular";
import { Platform } from "ionic-angular";


import { Tab1Root, Tab2Root, Tab3Root, Tab4Root, Tab5Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  // For translating service tabs only, tabs are set my html
  // tab1Title = " ";
  // tab2Title = " ";
  // tab3Title = " ";
  // tab4Title = " ";
  constructor(
    public navCtrl: NavController,
    public translateService: TranslateService,
    public navParams: NavParams,
    private camera: Camera,
    public alertCtrl: AlertController,
    public domSanitizer: DomSanitizer,
    public platform: Platform) {
    // translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB3_TITLE']).subscribe(values => {
    //   this.tab1Title = values['TAB1_TITLE'];
    //   this.tab2Title = values['TAB2_TITLE'];
    //   this.tab3Title = values['TAB3_TITLE'];
    //   this.tab4Title = values['TAB4_TITLE'];
    // });
  }

  onTakePicture() {
    // Options for the camera
    const options: CameraOptions = {
      // Picture quality. It defaults to 50. 100 is the highest
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      // Choosing the format of the return value. 
      destinationType: this.platform.is('ios') ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
      // Saves images to the photo album / camera roll
      saveToPhotoAlbum: true,
      encodingType: this.camera.EncodingType.JPEG,
      // Type of media to select from. Only works when PictureSourceType is PHOTOLIBRARY or SAVEDPHOTOALBUM.
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or  a file URI
      // If it's base64 (DATA_URL)
      let base64Image = null;

      // get photo from the camera based on platform type
      if (this.platform.is('ios')) {
        // normalizeURL rewrites an absolute URL so it works across file and http based engines.
        base64Image = normalizeURL(imageData);
      } else {
        base64Image = "data:image/jpeg;base64," + imageData;
      }

    }, (err) => {
      console.log('Something messed up', err);
    })
  }
}