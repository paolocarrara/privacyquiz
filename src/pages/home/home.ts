import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Slides, ToastController } from 'ionic-angular';

// Pages
import { Extra } from '../extra/extra';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  public quiz: Array <{
    number: number,
    title: string,
    alternatives: [{
        number: number,
        title: string,
        correct: boolean
      }],
    extra: string,
    color: string
  }>;
  public answers: Array<number>;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {
    this.quiz = new Array();
    this.answers = new Array();
    this.quiz.push({
      number: 1,
      title: 'O que é o Marco Civil da Internet?',
      alternatives: [
        {number: 1, title: 'Monumento arquitetônico construído em Brasília com o objetivo de celebrar 20 anos de internet no Brasil', correct: false},
        {number: 2, title: 'Uma espécie de "constituição" que rege o uso da internet no Brasil definindo direitos e deveres de usuários e provedores da web no país', correct: true},
        {number: 3, title: 'Data em que ocorrem diversos eventos no Brasil para discutir possíveis rumos da segurança na Internet', correct: false},
        {number: 4, title: 'Projeto de lei que objetiva promover recomendações sobre boas práticas do uso da internet no Brasi', correct: false}
      ],
      extra: 'De acordo com o Marco Civil da Internet a remoção de conteúdo se dá mediante decisão judicial, de forma a preservar a liberdade de expressão na internet. Os dados do usuário são de sua tutela e, com exceção da guarda de registros de acesso e de conexão(armazenados por um ano nos servidores), devem ser excluídos definitivamente, mediante requerimento, ao término da relação entre as partes. Ainda sobre privacidade, o art. 7 do capítulo 2 do MCI garante que é direito do usuário ter informações claras e completas sobre coleta, uso, armazenamento, tratamento e proteção de seus dados pessoais.',
      color: '#6F00DC'
    });

    this.quiz.push({
      number: 2,
      title: 'A partir da interpretação dos direitos garantidos pelo Marco Civil da Internet, no que diz respeito a privacidade, qual das seguintes afirmações é falsa?',
      alternatives: [
        {number: 1, title: 'O site que receber solicitação do usuário para que remova um conteúdo específico, deve atender ao pedido imediatamente, sob o risco de se responsabilizar pelos danos causados ao usuário', correct: false},
        {number: 2, title: 'O usuário tem liberdade de solicitar a sites, como redes sociais e sites de compras, que após o encerramento de sua conta, seus dados sejam excluídos de forma definitiva', correct: false},
        {number: 3, title: 'Aplicativos que utilizam informações do usuário diferentes daquelas solicitadas para seu funcionamento atentam contra o MCI', correct: false},
        {number: 4, title: 'Arquivos de texto contendo informações sobre a atividade do usuário em determinados sites- conhecidos como cookies- são baixados automaticamente e não necessitam do consentimento do usuário, pois são usados para que os sites possam oferecer publicidade de forma personalizada', correct: true}
      ],
      extra: 'O Facebook cruza uma base de dados genérica sobre a distribuição de renda de um local fornecida por uma empresa (no Brasil, trata-se do grupo Experian) com sua própria base de dados, que inclui hábitos de navegação dos usuários. A partir do cruzamento dessas duas bases, empresas anunciantes conseguem alcançar grupos específicos de renda aproximada. De forma similar, Twitter e Google utilizam informações sobre o comportamento dos usuários online para direcionar publicidade personalizada.',
      color: '#6F00DC'
    });

    this.quiz.push({
      number: 3,
      title: 'O que Facebook, Twitter, Google e Instagram sabem sobre você? Marque a alternativa FALSA sobre o alcance dessas plataformas:',
      alternatives: [
        {number: 1, title: 'O Facebook consegue detectar sua renda estimada mesmo sem perguntar nada a respeito durante seu cadastro', correct: false},
        {number: 2, title: 'Se você estiver logado em sua conta do Twitter, toda vez que você visitar uma site que contenha um botão “Tweet”, “Follow” ou “Compartilhar um link no Twitter”, sua atividade no site será monitorada', correct: false},
        {number: 3, title: 'Suas informações do WhatsApp, Instagram e Facebook não estão relacionadas. Essas plataformas são independentes e lançam publicidade de acordo com seu uso específico em cada uma', correct: true},
        {number: 4, title: 'O Google armazena o percurso de todos as suas viagens feitas com o auxílio do Google Mapas', correct: false}
      ],
      extra: 'Esse é um texto com informações adicionais que se relacionam com a pergunta feita.',
      color: '#6F00DC'
    });

    this.quiz.push({
      number: 4,
      title: 'Em relação às boas práticas de segurança no computador e em dispositivos móveis, marque a alternativa correta',
      alternatives: [
        {number: 1, title: 'Ao instalar programas ou aplicativos é necessário sempre verificar se as permissões necessárias para a instalação e execução são coerentes, bem como se complementos indesejados não estão sendo oferecidos concomitantemente', correct: true},
        {number: 2, title: 'É prudente criar uma única conta em computadores utilizados por mais de uma pessoa, a fim de que as informações dos usuários sejam centralizadas e, consequentemente, preservadas', correct: false},
        {number: 3, title: 'É mais seguro baixar aplicativos menos populares e menos avaliados, pois esses são menos visados por hackers', correct: false},
        {number: 4, title: 'Um computador com antivírus instalado está livre de ameaças virtuais, o que permite que o usuários não precise se preocupar em ter a versão mais recente dos programas instalados', correct: false}
      ],
      extra: 'Esse é um texto com informações adicionais que se relacionam com a pergunta feita.',
      color: '#6F00DC'
    });

    this.quiz.push({
      number: 5,
      title: 'Qual das seguintes afirmações é verdadeira?',
      alternatives: [
        {number: 1, title: 'É comum que bancos ou instituições financeiras enviem e mails solicitando informações sensíveis ao usuário', correct: false},
        {number: 2, title: 'Clicar em botões como “quero ser retirado da lista de email” é sempre uma boa prática para evitar o recebimento de spam', correct: false},
        {number: 3, title: 'Clicar em fotos ou links em emails pode permitir que o remetente saiba se você leu a mensagem, quando leu e se visitou determinado site', correct: true},
        {number: 4, title: 'Não é possível alterar o cabeçalho de um email de forma a aparentar que ele foi enviado de uma fonte uma fonte não confiável', correct: false}
      ],
      extra: 'Esse é um texto com informações adicionais que se relacionam com a pergunta feita.',
      color: '#6F00DC'
    });

    this.quiz.push({
      number: 6,
      title: 'Marque a relação falsa entre ameaça e solução',
      alternatives: [
        {number: 1, title: 'Roubo de informações pessoais- Utilizar conexões criptografadas, como HTTPS e SSL, representados por um cadeado ao lado do endereço do site para indicar que a conexão é segura', correct: false},
        {number: 2, title: 'Ataque de malwares ou softwares que capturam informações digitadas sem que você perceba- evitar utilizar o internet banking a partir de computadores públicos', correct: false},
        {number: 3, title: 'Invasão de sua conta online usando técnicas de engenharia social, descobrindo fraquezas na segurança dos servidores de uma empresa ou conduzindo um ataque de força-bruta numa tentativa de adivinhar sua senha- Deixar o máximo de informações em servidores online', correct: true},
        {number: 4, title: 'Evitar que hackers usem sua conta para praticar fraudes, acessar documentos e informações privadas- Habilitar o sistema de verificação em dois passos. Por exemplo, você pode cadastrar um número de celular para receber códigos de segurança por SMS toda vez que for registrar o acesso de uma aplicação de Internet', correct: false}
      ],
      extra: 'Esse é um texto com informações adicionais que se relacionam com a pergunta feita.',
      color: '#6F00DC'
    });
  }

  ngOnInit () {
    this.slides.enableKeyboardControl(false);
    this.slides.lockSwipeToNext(true);
    this.slides.lockSwipeToPrev(true);
  }

  verify (queryNumber) {
    if (this.answers[queryNumber]) {
      let extraModal = this.modalCtrl.create(Extra, {
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

  isTheRightAnswer (queryNumber, alternativeNumber) {
    return this.quiz[queryNumber - 1].alternatives[alternativeNumber - 1].correct
  }
}
