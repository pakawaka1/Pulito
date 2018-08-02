import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from './tabs';
import { GoogleLoginService } from '../../components/google-login/google-login';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    TranslateModule.forChild()
  ],
  providers: [
    GoogleLoginService
  ],
  exports: [
    TabsPage
  ]
})
export class TabsPageModule { }
