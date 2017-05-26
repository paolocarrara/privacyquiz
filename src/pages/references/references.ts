import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-references',
  templateUrl: 'references.html',
})
export class ReferencesPage {

  references: Array<{
    text:string,
    address:string
  }>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.references = [
      {
        text: 'link',
        address: 'http://www.conjur.com.br/2014-set-10/sistema-retirada-conteudo-internet-piorou-marco-civil'
      },
      {
        text: 'link',
        address: 'http://www.migalhas.com.br/dePeso/16,MI207696,21048-O+Marco+Civil+da+internet'
      },
      {
        text: 'link',
        address: 'http://www.conjur.com.br/2014-abr-30/marco-civil-internet-poe-fim-lacunas-existentes-legislacao'
      },
      {
        text: 'link',
        address: 'http://culturadigital.br/marcocivil/'
      },
      {
        text: 'link',
        address: 'http://lifehacker.com/5911389/twitter-is-tracking-you-on-the-web-heres-what-you-can-do-to-stop-it'
      },
      {
        text: 'link',
        address: 'http://bgr.com/2015/02/02/facebook-privacy-policy-update/'
      },
      {
        text: 'link',
        address: 'http://epoca.globo.com/tecnologia/experiencias-digitais/noticia/2017/04/o-que-o-facebook-sabe-sobre-voce-mesmo-que-voce-nao-queira.html'
      },
      {
        text: 'link',
        address: 'https://www.tecmundo.com.br/privacidade/108398-privacidade-email-verificar-bloquear-mensagens-rastreio.htm'
      },
      {
        text: 'link',
        address: 'https://issuu.com/ceti-rpusp/docs/cartilha_cetirp87'
      },
      {
        text: 'link',
        address: 'https://oglobo.globo.com/economia/defesa-do-consumidor/especialista-mostra-como-proteger-dados-na-internet-20187699'
      },
      {
        text: 'link',
        address: 'http://www.techtudo.com.br/noticias/noticia/2014/04/internet-banking-dicas-de-seguranca-para-se-proteger-das-fraudes.html'
      },
      {
        text: 'link',
        address: 'http://www.rmpadvogados.com.br/politica-de-privacidade-e-termos-de-uso-apos-marco-civil-da-internet/'
      },
      {
        text: 'link',
        address: 'https://startupi.com.br/2016/05/o-que-as-startups-devem-saber-sobre-termos-de-uso-e-politica-de-privacidade/'
      },
      {
        text: 'link',
        address: 'https://blog.mozilla.org/internetcitizen/2017/01/30/15-privacy-tips-protect-online-life/'
      },
      {
        text: 'link',
        address: 'https://sites.google.com/site/cleverclassroomhelpers/internet-safety/the-do-s-and-dont-s-of-the-internet'
      }
    ];
  }

}
