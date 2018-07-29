import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { GoogleLoginService } from './../../components/google-login/google-login';
import { MainPage } from '../';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  private loginErrorString: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController,  private googleLogIn: GoogleLoginService) { }

  login() {
    //Attempt to login in through our User service
    try {
      this.googleLogIn.googleLogin();
      //this.user.login(this.account).subscribe((resp) => {
        this.navCtrl.push(MainPage);
      //},
    }
    catch {
      (err) => {
        this.navCtrl.push(MainPage);
        // Unable to log in
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }
    //});
  }

}
