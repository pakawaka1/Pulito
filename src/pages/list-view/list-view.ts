import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Settings } from '../../providers';
import { FormBuilder } from '../../../node_modules/@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
    selector: 'list-view',
    templateUrl: 'list-view.html'
})

export class ListViewPage {
    page: string = 'main';
    pageTitleKey: string = 'LISTVIEW_TITLE';
    pageTitle: string;

    constructor(public navCtrl: NavController,
        public settings: Settings,
        public formBuilder: FormBuilder,
        public navParams: NavParams,
        public translate: TranslateService) {
      }
}