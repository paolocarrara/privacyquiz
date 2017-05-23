import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Extra } from './extra';

@NgModule({
  declarations: [
    Extra,
  ],
  imports: [
    IonicPageModule.forChild(Extra),
  ],
  exports: [
    Extra
  ]
})
export class ExtraModule {}
