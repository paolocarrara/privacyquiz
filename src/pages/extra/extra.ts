import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Extra page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class Extra {
  isRight: boolean;
  extra: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    this.isRight = this.navParams.get('isRight');
    this.extra = this.navParams.get('extra');
  }

  dismiss() {
     this.viewCtrl.dismiss();
   }
}
