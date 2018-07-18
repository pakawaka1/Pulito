import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyStatsPage } from './my-stats';
import { Chart } from 'chart.js'; 

@NgModule({
  declarations: [
    MyStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyStatsPage),
  ],
})
export class MyStatsPageModule {}
