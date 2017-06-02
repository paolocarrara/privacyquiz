var quiz = [
  {
    number: 1,
    title: 'O que é o Marco Civil da Internet?',
    alternatives: [
      {
        number: 1,
        title: 'Monumento arquitetônico construído em Brasília com o objetivo de celebrar 20 anos de internet no Brasil',
        correct: false
      },
      {
        number: 2,
        title: 'Uma espécie de "constituição" que rege o uso da internet no Brasil definindo direitos e deveres de usuários e provedores da web no país',
        correct: true
      },
      {
        number: 3,
        title: 'Data em que ocorrem diversos eventos no Brasil para discutir possíveis rumos da segurança na Internet',
        correct: false
      },
      {
        number: 4,
        title: 'Projeto de lei que objetiva promover recomendações sobre boas práticas do uso da internet no Brasi',
        correct: false
      }
    ],
    extra: 'De acordo com o Marco Civil da Internet a remoção de conteúdo se dá mediante decisão judicial, de forma a preservar a liberdade de expressão na internet. Os dados do usuário são de sua tutela e, com exceção da guarda de registros de acesso e de conexão(armazenados por um ano nos servidores), devem ser excluídos definitivamente, mediante requerimento, ao término da relação entre as partes. Ainda sobre privacidade, o art. 7 do capítulo 2 do MCI garante que é direito do usuário ter informações claras e completas sobre coleta, uso, armazenamento, tratamento e proteção de seus dados pessoais.',
    color: '#6F00DC'
  },

  {
    number: 2,
    title: 'A partir da interpretação dos direitos garantidos pelo Marco Civil da Internet, no que diz respeito a privacidade, qual das seguintes afirmações é falsa?',
    alternatives: [
      {
        number: 1,
        title: 'O site que receber solicitação do usuário para que remova um conteúdo específico, deve atender ao pedido imediatamente, sob o risco de se responsabilizar pelos danos causados ao usuário',
        correct: false
      },
      {
        number: 2,
        title: 'O usuário tem liberdade de solicitar a sites, como redes sociais e sites de compras, que após o encerramento de sua conta, seus dados sejam excluídos de forma definitiva',
        correct: false
      },
      {
        number: 3,
        title: 'Aplicativos que utilizam informações do usuário diferentes daquelas solicitadas para seu funcionamento atentam contra o MCI',
        correct: false
      },
      {
        number: 4,
        title: 'Arquivos de texto contendo informações sobre a atividade do usuário em determinados sites- conhecidos como cookies- são baixados automaticamente e não necessitam do consentimento do usuário, pois são usados para que os sites possam oferecer publicidade de forma personalizada',
        correct: true
      }
    ],
    extra: 'O Facebook cruza uma base de dados genérica sobre a distribuição de renda de um local fornecida por uma empresa (no Brasil, trata-se do grupo Experian) com sua própria base de dados, que inclui hábitos de navegação dos usuários. A partir do cruzamento dessas duas bases, empresas anunciantes conseguem alcançar grupos específicos de renda aproximada. De forma similar, Twitter e Google utilizam informações sobre o comportamento dos usuários online para direcionar publicidade personalizada.',
    color: '#6F00DC'
  },

  {
    number: 3,
    title: 'O que Facebook, Twitter, Google e Instagram sabem sobre você? Marque a alternativa FALSA sobre o alcance dessas plataformas:',
    alternatives: [
      {
        number: 1,
        title: 'O Facebook consegue detectar sua renda estimada mesmo sem perguntar nada a respeito durante seu cadastro',
        correct: false
      },
      {
        number: 2,
        title: 'Se você estiver logado em sua conta do Twitter, toda vez que você visitar uma site que contenha um botão “Tweet”, “Follow” ou “Compartilhar um link no Twitter”, sua atividade no site será monitorada',
        correct: false
      },
      {
        number: 3,
        title: 'Suas informações do WhatsApp, Instagram e Facebook não estão relacionadas. Essas plataformas são independentes e lançam publicidade de acordo com seu uso específico em cada uma',
        correct: true
      },
      {
        number: 4,
        title: 'O Google armazena o percurso de todos as suas viagens feitas com o auxílio do Google Mapas',
        correct: false
      }
    ],
    extra: 'O Facebook cruza uma base de dados genérica sobre a distribuição de renda de um local fornecida por uma empresa (no Brasil, trata-se do grupo Experian) com sua própria base de dados, que inclui hábitos de navegação dos usuários. A partir do cruzamento dessas duas bases, empresas anunciantes conseguem alcançar grupos específicos de renda aproximada. De forma similar, Twitter e Google utilizam informações sobre o comportamento dos usuários online para direcionar publicidade personalizada.',
    color: '#6F00DC'
  },

  {
    number: 4,
    title: 'Em relação às boas práticas de segurança no computador e em dispositivos móveis, marque a alternativa correta',
    alternatives: [
      {
        number: 1,
        title: 'Ao instalar programas ou aplicativos é necessário sempre verificar se as permissões necessárias para a instalação e execução são coerentes, bem como se complementos indesejados não estão sendo oferecidos concomitantemente',
        correct: true
      },
      {
        number: 2,
        title: 'É prudente criar uma única conta em computadores utilizados por mais de uma pessoa, a fim de que as informações dos usuários sejam centralizadas e, consequentemente, preservadas',
        correct: false
      },
      {
        number: 3,
        title: 'É mais seguro baixar aplicativos menos populares e menos avaliados, pois esses são menos visados por hackers',
        correct: false
      },
      {
        number: 4,
        title: 'Um computador com antivírus instalado está livre de ameaças virtuais, o que permite que o usuários não precise se preocupar em ter a versão mais recente dos programas instalados',
        correct: false
      }
    ],
    extra: 'Faz parte do conceito de privacidade excluir do conhecimento de terceiros aquilo que só pertence a você. Por isso, em computadores de uso compartilhado, vale a pena criar diferentes contas. Além disso, é importante baixar programas e aplicativos somente de fontes confiáveis e que sejam bem avaliados. Porém, essas dicas são de pouca valia se seu computador está desprovido da versão mais atual dos programas instalados. As atualizações liberadas comumente contém melhorias na segurança dos programas.',
    color: '#6F00DC'
  },

  {
    number: 5,
    title: 'Qual das seguintes afirmações é verdadeira?',
    alternatives: [
      {
        number: 1,
        title: 'É comum que bancos ou instituições financeiras enviem e mails solicitando informações sensíveis ao usuário',
        correct: false
      },
      {
        number: 2,
        title: 'Clicar em botões como “quero ser retirado da lista de email” é sempre uma boa prática para evitar o recebimento de spam',
        correct: false
      },
      {
        number: 3,
        title: 'Clicar em fotos ou links em emails pode permitir que o remetente saiba se você leu a mensagem, quando leu e se visitou determinado site',
        correct: true
      },
      {
        number: 4,
        title: 'Não é possível alterar o cabeçalho de um email de forma a aparentar que ele foi enviado de uma fonte uma fonte não confiável',
        correct: false
      }
    ],
    extra: 'Nunca responda e mails que solicitam recadastramento de senhas, dados de conta bancária, de cartão de crédito, prêmios ou outros que pareçam suspeitos. Muitos spams tentam justificar o abuso, alegando que é possível sair da lista de divulgação, entretanto nem sempre esse recurso funciona. A prática mais efetiva nesse caso é reportar o email como "spam" ao seu provedor de e mail ou adicionar o remetente ou domínio do remetente para sua lista de "Bloqueados"',
    color: '#6F00DC'
  },

  {
    number: 6,
    title: 'Marque a relação falsa entre ameaça e solução',
    alternatives: [
      {
        number: 1,
        title: 'Roubo de informações pessoais- Utilizar conexões criptografadas, como HTTPS e SSL, representados por um cadeado ao lado do endereço do site para indicar que a conexão é segura',
        correct: false
      },
      {
        number: 2,
        title: 'Ataque de malwares ou softwares que capturam informações digitadas sem que você perceba- evitar utilizar o internet banking a partir de computadores públicos',
        correct: false
      },
      {
        number: 3,
        title: 'Invasão de sua conta online usando técnicas de engenharia social, descobrindo fraquezas na segurança dos servidores de uma empresa ou conduzindo um ataque de força-bruta numa tentativa de adivinhar sua senha- Deixar o máximo de informações em servidores online',
        correct: true
      },
      {
        number: 4,
        title: 'Evitar que hackers usem sua conta para praticar fraudes, acessar documentos e informações privadas- Habilitar o sistema de verificação em dois passos. Por exemplo, você pode cadastrar um número de celular para receber códigos de segurança por SMS toda vez que for registrar o acesso de uma aplicação de Internet',
        correct: false
      }
    ],
    extra: 'Serviços de armazenamento e sincronização de dados online como o Dropbox, Google Drive e SkyDrive estão entre as melhores inovações na história da internet. A conveniência de ter suas últimas fotos sempre disponíveis no Dropbox ou seus documentos no iCloud é fantástica, mas tenha em mente que muitos de seus dados serão armazenados em servidores de terceiros, que podem não ter criptografia ou estar protegidos por um sistema além de seu controle. Se você tem informações importantes, como dados bancários ou documentos da empresa, que precisam ser sincronizadas entre dispositivos, a melhor opção é usar um serviço de armazenamento na nuvem criptografado.',
    color: '#6F00DC'
  },
  {
    number: 7,
    title: 'Sobre termos de uso e política de privacidade, marque a alternativa falsa',
    alternatives: [
      {
        number: 1,
        title: 'Os termos de uso de um site descrevem somente o funcionamento do site e o procedimento em relação aos dados coletados do usuário. Dessa forma, o usuário não é passível de punição em caso de incorreção de seus atos durante a utilização do site',
        correct: true
      },
      {
        number: 2,
        title: 'Caso o provedor de internet utilize dados pessoais do usuário, independente do objetivo,  deverá adequar-se ao Marco Civil da Internet, indicando na “Política de Privacidade” e nos “Termos de Uso” como será feita a coleta, uso, armazenamento, tratamento e proteção de dados pessoais, além da segurança dessas informações',
        correct: false
      },
      {
        number: 3,
        title: 'A política de privacidade é um documento disponível no site do provedor de internet, responsável por explicar quais dados pessoais o provedor coleta do usuário, seja para completar uma compra pelo cartão de crédito, baixar um aplicativo, fazer contato ou apenas tê-lo cadastrado em seu banco de dados',
        correct: false
      },
      {
        number: 4,
        title: 'Os Termos de Uso e a Política de Privacidade geralmente são disponibilizados para consulta no rodapé da página do site da empresa. Esses termos também podem ser disponibilizados por meio de pop-ups no momento do cadastro do usuário em um aplicativo, game ou no momento de download de novas versões de um software',
        correct: false
      },
    ],
    extra: 'A explicação sobre o produto e como utilizá-lo é apenas uma parte dos Termos, sendo necessário também que esses documentos apontem a conduta esperada e necessária do usuário para a manutenção e utilização do produto ou serviço. No caso de sites, aplicativos e games deverão ser previstos os atos passíveis de exclusão do cliente/usuário com ou sem aviso prévio, como por exemplo, nos casos de tentativas de fraude, chargeback e pirataria. Já no caso de redes sociais, temos como exemplo os casos de postagens contendo informações agressivas, condutas imorais e ilegais, dentre outras.',
    color: '#6F00DC'
  },
  {
    number: 8,
    title: 'Qual das seguintes dicas não é válida sobre privacidade na internet?',
    alternatives: [
      {
        number: 1,
        title: 'Somente clicar em links de fontes legítimas/conhecidas. É importante se atentar se antes do endereço do site há a marca “seguro” acompanhada de HTTPS',
        correct: false
      },
      {
        number: 2,
        title: 'Sua senha é parte integral da sua privacidade. Escolha uma senha forte e longa o suficiente, mesclando letras e números, para se defender de ataques hackers',
        correct: false
      },
      {
        number: 3,
        title: 'Permita que seu navegador web salve seu nome de usuário e senha para poupar tempo com login, tornando sua navegação mais produtiva',
        correct: true
      },
      {
        number: 4,
        title: 'Use criptografia no máximo de atividade que envolvam transação de informações sensíveis possível',
        correct: false
      }
    ],
    extra: 'Permitir que seus dados sejam salvos pelo navegador facilita a vida de hackers, principalmente se suas atualizações não estiverem em dia. Vale a pena manter o navegador sempre atualizado e utilizar o modo de navegação anônima para navegar sem deixar rastros.',
    color: '#6F00DC'
  }
];

export { quiz }
