/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Guardar",
      "close": "Fechar"
    },
    "errors": {
      "noConfigName": "Não existe qualquer configuração em index.html > configOptions.story",
      "configFormatError": "Não foi possível carregar a configuração especificada devido a um erro de sintaxe JSON.",
      "configNotFound": "A configuração especificada não foi encontrada ou não foi possível carregá-la devido a um erro de sintaxe JSON.",
      "boxTitle": "Ocorreu um erro",
      "servedFromFile": "A aplicação tem de ser acedida através de um servidor web. Consulte ${USER_GUIDE} para obter detalhes.",
      "userGuide": "guia de utilizador",
      "invalidConfig": "Configuração inválida",
      "invalidConfigNoApp": "Identificador de Aplicação de Cartografia Web não especificada em index.html.",
      "invalidConfigNoAppDev": "Não foi especificado nenhum identificador de Aplicação de Mapeamento Web nos parâmetros URL (?appid=). No modo de desenvolvimento, a configuração appid em index.html é ignorada.",
      "unspecifiedConfigOwner": "O proprietário autorizado não foi configurado.",
      "invalidConfigOwner": "O proprietário da história não está autorizado.",
      "invalidConfignoOAuth": "Esta história requer autenticação; por favor, configure uma ID OAuth de ArcGIS em index.html ou publique a história.",
      "invalidApp": "Não é possível carregar esta história.",
      "appLoadingFail": "Algo correu mal, o {TPL_NAME} não foi carregado corretamente.",
      "notConfiguredDesktop": "A história ainda não se encontra configurada.",
      "notConfiguredMobile": "O builder {TPL_NAME} não é suportado neste tamanho de exibição. Se possível, redimensione o seu navegador para aceder ao builder ou construa, por favor, a sua história num dispositivo com um ecrã de maior dimensão.",
      "notConfiguredMobile2": "Por favor, rode o seu dispositivo para orientação de paisagem para utilizar o builder {TPL_NAME}.",
      "notAuthorized": "Não tem autorização para aceder a esta história",
      "notAuthorizedBuilder": "Não está autorizado a usar o builder {TPL_NAME}.",
      "noViewerIE": "Esta história não é suportada pelo Internet Explorer abaixo da versão ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Está a tentar visualizar esta história através de um navegador mais antigo, que não é suportado. Alguns elementos poderão não funcionar, ou poderão surgir outros problemas inesperados. Sugerimos que atualize para o Internet Explorer 11 ou que utilize outro navegador, por exemplo, o Chrome.",
      "noViewerIE3": "No final de 2017, esta história já não poderá ser carregada neste navegador. Nessa altura, terá de utilizar um navegador suportado para visualizar esta história.",
      "upgradeBrowser": "Por favor, atualize o seu navegador",
      "mapLoadingFail": "Algo correu mal, o mapa não foi carregado correctamente.",
      "signOut": "Terminar Sessão",
      "builderSupportFirefox": "O builder Story Map Cascade já suporta o Firefox!<br><br>O suporte para criação de histórias Cascade no Firefox encontra-se em versão beta. Por favor, experimente-o e reporte quaisquer problemas a ${ESRI-SUPPORT} ou à ${ESRI-COMMUNITY}.",
      "builderSupportOther": "As histórias do Cascade podem ser visualizadas em qualquer navegador web moderno, mas o builder do Story Map Cascade é suportado apenas no ${CHROME}, ${SAFARI}, e ${FIREFOX}.<br><br>Caso necessite que o builder do Cascade suporte um navegador diferente, por favor contacte ${ESRI-SUPPORT} ou ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "O builder Story Map Cascade não é suportados em iPad. As histórias do Cascade que cria e partilha funcionam no iPad.",
      "launchBuilder": "Iniciar o builder do Cascade",
      "notAgain": "Não voltar a exibir isto.",
      "sorry": "Atenção:"
    },
    "mobileWarning": {
      "message1": "Já leu a versão desta história para dispositivo móvel. Para aceder à versão completa, com elementos audiovisuais mais completos, execute-o num computador desktop.",
      "email": "Enviar uma ligação a esta história por correio eletrónico"
    },
    "cover": {
      "iosEmbedLink": "Tocar para ler a história completa"
    },
    "media": {
      "captionPlaceholder": "A sua legenda aqui...",
      "loadingError": "Lamentamos, este conteúdo não se encontra disponível",
      "explore": "Explorar",
      "exploreMap": "Explorar Mapa",
      "exploreStop": "Parar de Explorar",
      "sceneNotSupported": "Lamentamos, este mapa 3D não é suportado no seu dispositivo.",
      "loading1": "A carregar...",
      "loading2": "A carregar mapa...",
      "videoPlayPause": "reproduzir/pausar",
      "videoMuteUnmute": "silenciar/não silenciar"
    },
    "headerFromCommon": {
      "defaultTagline": "Um ${STORY_MAP}",
      "share": "Partilhar ou imprimir",
      "tooltipAutoplayDisabled": "Isto não está disponível no modo de reprodução automática"
    },
    "shareFromCommon": {
      "copy": "Copiar",
      "copied": "Copiado",
      "open": "Aberto",
      "embed": "Incorporar em página web",
      "embedExplain": "Utilize o seguinte código HTML para incorporar a história numa página web.",
      "size": "Tamanho (largura/altura):",
      "autoplayLabel": "Modo reprodução automática",
      "autoplayExplain1": "Modo reprodução automática irá avançar através da sua história em intervalos regulares. Isto é ideal num monitor de quiosque ou exibição pública, mas esteja ciente de que noutras situações pode tornar a história mais difícil de ler. Este elemento não é suportado em écrans pequenos.",
      "autoplayExplain2": "Quando este modo está activo existem controles para reproduzir/pausar a história e ajustar a velocidade de navegação.",
      "linksupdated": "Links actualizados!"
    },
    "theme": {
      "lightLabel": "Claro",
      "darkLabel": "Escuro"
    },
    "autoplay": {
      "speedFast": "Rápido",
      "speedMedium": "Média",
      "speedSlow": "Lento"
    },
    "bannerNotification": {
      "learnMore": "Saber Mais",
      "close": "Fechar",
      "dontShowAgain": "Não exibir esta mensagem novamente"
    },
    "embedBar": {
      "share": "Partilhar",
      "fullScreen": "Ecrã inteiro",
      "exitFullScreen": "Sair do modo de ecrã inteiro",
      "enlarge": "Aumentar",
      "newTab": "Abrir num novo separador",
      "tagline": "Um Story Map",
      "twitter": "Partilhar no Twitter",
      "facebook": "Partilhar no Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Por favor, aguarde até que a história seja totalmente carregada antes de imprimir",
      "printNotes": "Caso esta página demore a carregar ou algum media não aparecer, experimente substituir media em tempo real por imagens ou imprimir um intervalo de secções mais reduzido. Para obter melhores resultados, poderá necessitar de ativar a impressão de elementos de fundo nas definições de impressão do seu navegador.",
      "printOptions": "Opções",
      "makeTextBlack": "Colocar todo o texto a negro",
      "showLinks": "Exibir URLs de ligação",
      "useAltMedia": "Substituir media em tempo real por imagens, se disponíveis",
      "pageBreaks": "Iniciar cada secção numa nova página",
      "printRange": "Imprimir parte desta história",
      "sectionStart": "Secções:",
      "go": "Aplicar",
      "reset": "Restaurar para história completa",
      "print": "Imprimir"
    },
    "page": {
      "appTagline": "Esta história foi criada com ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Story Map Cascade da Esri",
      "readItOnline": "Leia-a na web em ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Secção ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Website:",
      "videoLabel": "Vídeo:",
      "audioLabel": "Áudio:"
    },
    "licenseChange2018": {
      "noAccess": "A sua conta (%USER_NAME%) não está licenciada para abrir um Story Map não público. Peça ao administrador da sua organização para lhe atribuir um tipo de utilizador que inclua a licença para Story Maps ou aplicações essenciais complementares."
    }
  }
});