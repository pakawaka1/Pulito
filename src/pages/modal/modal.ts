import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { IReport } from '../../app/interfaces/report';
import { firebaseService } from '../../app/services/firebase';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage{
  public report:IReport[];
  public title;
  public location;
  public description;
  public subscription;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view:ViewController,
              private firebaseService:firebaseService) {
  }

  submit(form:IReport){
    this.subscription = this.firebaseService.addReport(form).then(res => {
      this.closeModal()
    })
  }

  closeModal() {
    this.view.dismiss();
  }

}
