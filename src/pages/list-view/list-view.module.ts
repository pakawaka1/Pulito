import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListViewPage } from './list-view';
import { firebaseService } from '../../app/services/firebase';

@NgModule({
  declarations: [
    ListViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ListViewPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListViewPage
  ],
  providers: [firebaseService]
})
export class ListPageModule { }
