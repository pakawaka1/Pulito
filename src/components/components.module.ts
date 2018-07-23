import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { GoogleLoginService } from './google-login/google-login';

@NgModule({
	declarations: [GoogleLoginService],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [GoogleLoginService]
})
export class ComponentsModule {}