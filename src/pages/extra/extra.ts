import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
})
export class ExtraPage {
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
