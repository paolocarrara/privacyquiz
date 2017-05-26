import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides, ToastController } from 'ionic-angular';
import { quiz } from '../../quiz';

// Pages
import { ExtraPage } from '../extra/extra';
import { ReferencesPage } from '../references/references';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public answers: Array<number>;
  public quiz: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {
    this.quiz = quiz;
    this.answers = new Array();
  }

  ngOnInit () {
    this.slides.enableKeyboardControl(false);
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
  }

  verify (queryNumber) {
    if (this.answers[queryNumber]) {
      let extraModal = this.modalCtrl.create(ExtraPage, {
        extra: this.quiz[queryNumber - 1].extra,
        isRight: this.isTheRightAnswer(queryNumber, this.answers[queryNumber])
      }, {
        showBackdrop: true
      });

      extraModal.present();

      extraModal.onDidDismiss(data => {
        this.goToNextQuery();
      })
    } else {
      let toast = this.toastCtrl.create({
        message: 'Escolha uma alternativa para prosseguir.',
        duration: 3000
      });

      toast.present();
    }
  }

  private goToNextQuery() {
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
    this.slides.lockSwipeToNext(true);
  }

  goToStart() {
    this.slides.lockSwipeToPrev(false);
    while(!this.slides.isBeginning()){
      this.slides.slidePrev();
    }
    this.slides.lockSwipeToPrev(true);

    this.answers = new Array();
  }

  private isTheRightAnswer (queryNumber, alternativeNumber) {
    return this.quiz[queryNumber - 1].alternatives[alternativeNumber - 1].correct
  }

  countTotalOfRightAnswers () {
    let total = 0;

    this.quiz.forEach(query => {
      if (this.answers[query.number] && this.isTheRightAnswer(query.number, this.answers[query.number])) {
        total++;
      }
    });

    return total;
  }

  showReferences () {
    let referencesModal = this.modalCtrl.create(ReferencesPage, {}, {});

    referencesModal.present();
  }
}
