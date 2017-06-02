import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-references',
  templateUrl: 'references.html',
})
export class ReferencesPage {

  references: Array<{
    text: string,
    author: string,
    address: string,
    date: string
  }>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.references = [
      {
        text: 'Cartilha de segurança para internet- Fascículo privacidade.',
        author: 'CERT.BR.',
        address: 'https://cartilha.cert.br/fasciculos/privacidade/fasciculo-privacidade.pdf',
        date: '1 jun. 2017'
      },
      {
        text: 'Sistemática de retirada de conteúdo da internet piorou com o Marco Civil',
        author: 'Cots, M.; Oliveira, R.',
        address: 'http://www.conjur.com.br/2014-set-10/sistema-retirada-conteudo-internet-piorou-marco-civil',
        date: '1 jun. 2017'
      },
      {
        text: 'Especialista mostra como proteger dados na internet',
        author: '',
        address: 'https://oglobo.globo.com/economia/defesa-do-consumidor/especialista-mostra-como-proteger-dados-na-internet-20187699',
        date: '1 jun. 2017'
      },
      {
        text: 'Cartilha de boas práticas para o uso de emails e segura da informação',
        author: 'CeTI-RP/STI- USP',
        address: '',
        date: ''
      },
      {
        text: 'Marco Civil da Internet põe fim a lacunas na legislação',
        author: 'Giacchetta, A.; Freitas, C.; Meneguetti, P.',
        address: 'http://www.conjur.com.br/2014-abr-30/marco-civil-internet-poe-fim-lacunas-existentes-legislacao',
        date: '1 jun. 2017'
      },
      {
        text: 'Internet banking: dicas de segurança para se proteger das fraudes.',
        author: '',
        address: 'http://www.techtudo.com.br/noticias/noticia/2014/04/internet-banking-dicas-de-seguranca-para-se-proteger-das-fraudes.html',
        date: '1 jun. 2017'
      },
      {
        text: ' Privacidade no email: como verificar e bloquear mensagens com rastreio.',
        author: 'Jordão, F.',
        address: 'https://www.tecmundo.com.br/privacidade/108398-privacidade-email-verificar-bloquear-mensagens-rastreio.htm',
        date: '1 jun. 2017'
      },
      {
        text: '15 Privacy Tips to Protect Your Online Life – Internet Citizen.',
        author: 'Kelly, M.',
        address: 'https://blog.mozilla.org/internetcitizen/2017/01/30/15-privacy-tips-protect-online-life/',
        date: '1 jun. 2017'
      },
      {
        text: 'Marco Civil.',
        author: '',
        address: 'http://www.migalhas.com.br/dePeso/16,MI207696,21048-O+Marco+Civil+da+internet',
        date: '1 jun. 2017'
      },
      {
        text: 'O que o Facebook sabe sobre você (mesmo que você não queira)',
        author: '',
        address: 'http://epoca.globo.com/tecnologia/experiencias-digitais/noticia/2017/04/o-que-o-facebook-sabe-sobre-voce-mesmo-que-voce-nao-queira.html',
        date: '1 jun. 2017'
      },
      {
        text: 'Política de Privacidade e Termos de Uso após Marco Civil da Internet - RMP Advogados',
        author: 'Reis, P.; Reis, P.',
        address: 'http://www.rmpadvogados.com.br/politica-de-privacidade-e-termos-de-uso-apos-marco-civil-da-internet/',
        date: '1 jun. 2017'
      },
      {
        text: 'Facebook can now collect and share more of your data than ever before.',
        author: 'Smith, C.; Estrada, M.; Mills, C.',
        address: 'http://bgr.com/2015/02/02/facebook-privacy-policy-update/',
        date: '1 jun. 2017'
      },
      {
        text: "The Do's and Don'ts of Using the Internet",
        author: 'Clever - Classroom - Helpers',
        address: 'https://sites.google.com/site/cleverclassroomhelpers/internet-safety/the-do-s-and-dont-s-of-the-internet',
        date: '1 jun. 2017'
      }
    ];
  }

}
