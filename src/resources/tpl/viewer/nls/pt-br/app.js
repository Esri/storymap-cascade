/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Salvar",
      "close": "Fechar"
    },
    "errors": {
      "noConfigName": "Nenhuma configuração especificada em index.html > configOptions.story",
      "configFormatError": "Não foi possível carregar a configuração especificada devido a um erro de sintaxe do JSON.",
      "configNotFound": "Não foi possível carregar ou localizar a configuração especificada devido a um erro de sintaxe do JSON.",
      "boxTitle": "Ocorreu um erro",
      "servedFromFile": "O aplicativo tem que ser acessado através de um servidor da web. Consulte ${USER_GUIDE} para detalhes.",
      "userGuide": "guia do usuário",
      "invalidConfig": "Configuração inválida",
      "invalidConfigNoApp": "Identificador do Aplicativo de Mapeamento da Web não especificado no index.html.",
      "invalidConfigNoAppDev": "Nenhum identificador do Aplicativo de Mapeamento da Web está especificado em parâmetros da URL (?appid=). Em modo de desenvolvimento, a configuração de appid em index.html é ignorada.",
      "unspecifiedConfigOwner": "O proprietário autorizado não foi configurado.",
      "invalidConfigOwner": "O proprietário da história não está autorizado.",
      "invalidConfignoOAuth": "Esta história exige autenticação, configure um ID do ArcGIS OAuth em index.html ou torne a história pública.",
      "invalidApp": "Esta história não pode ser carregada.",
      "appLoadingFail": "Algo deu errado, o {TPL_NAME} não foi carregado corretamente.",
      "notConfiguredDesktop": "A história ainda não está configurada.",
      "notConfiguredMobile": "O construtor {TPL_NAME} não é suportado neste tamanho de visualização. Se possível, redimensione seu navegador para acessar o construtor ou construa sua história em um dispositivo com uma tela maior.",
      "notConfiguredMobile2": "Gire seu dispositivo para orientação de paisagem para utilizar o construtor {TPL_NAME}.",
      "notAuthorized": "Você não tem autorização para acessar esta história",
      "notAuthorizedBuilder": "Você não está autorizado a utilizar o construtor {TPL_NAME}.",
      "noViewerIE": "Esta história não é suportada no Internet Explorer antes da versão ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Você está tentando visualizar esta história utilizando um navegador antigo e não suportado. Pode haver recursos que não funcionam ou outros problemas inesperados. Sugerimos que você atualize para Internet Explorer 11 ou utilize outro navegador, como Chrome.",
      "noViewerIE3": "No final de 2017, esta história não será mais carregada neste navegador. Neste momento, você deve utilizar um navegador suportado para visualizar esta história.",
      "upgradeBrowser": "Atualize seu navegador",
      "mapLoadingFail": "Algo deu errado, o mapa não carregou corretamente.",
      "signOut": "Sair",
      "builderSupport1": "O construtor de Cascata do Mapa Histórico é suportado somente no ${CHROME} e ${SAFARI}. No entanto, as histórias em Cascata que você cria com o construtor podem ser visualizadas nestes navegadores, Internet Explorer 11+ e Firefox.",
      "builderSupport2": "O construtor de Cascata do Mapa Histórico não é suportado no iPad. As histórias em cascata que você cria e compartilha funcionam no iPad.",
      "builderSupport3": "As histórias em cascata podem ser visualizadas no Chrome, Safari, Firefox e Internet Explorer 11+, mas o construtor de Cascata do Mapa Histórico é suportado somente no ${CHROME} e ${SAFARI}.",
      "builderSupport4": "As histórias em cascata podem ser visualizadas em qualquer navegador da web moderno, mas o construtor de Cascata de Mapa Histórico é suportado somente no ${CHROME} e ${SAFARI}.<br><br>Se você precisar do construtor de Cascade para suportar um navegador diferente, entre em contato com ${ESRI-SUPPORT} ou ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Atenção:"
    },
    "mobileWarning": {
      "message1": "Você leu a versão móvel desta história. Para a versão completa, com elementos de mídia mais eficientes, teste em um computador de desktop.",
      "email": "Envie um link para esta história por e-mail"
    },
    "cover": {
      "iosEmbedLink": "Toque para ler a história completa"
    },
    "media": {
      "captionPlaceholder": "Sua legenda aqui...",
      "loadingError": "Desculpe, este conteúdo não está acessível",
      "explore": "Explorar",
      "exploreMap": "Explorar Mapa",
      "exploreStop": "Parar de Explorar",
      "sceneNotSupported": "Desculpe, mas este mapa 3D não é suportado no seu dispositivo.",
      "loading1": "Carregando...",
      "loading2": "Carrregando mapa...",
      "videoPlayPause": "reproduzir/pausar",
      "videoMuteUnmute": "áudio/sem áudio"
    },
    "headerFromCommon": {
      "defaultTagline": "UM ${STORY_MAP}",
      "share": "Compartilhar",
      "tooltipAutoplayDisabled": "Isto não está disponível no modo de reprodução automática"
    },
    "shareFromCommon": {
      "copy": "Copiar",
      "copied": "Copiado",
      "open": "Abrir",
      "embed": "Anexar na página da web",
      "embedExplain": "Utilize o código de HTML seguinte para embutir a história em uma página da web.",
      "size": "Tamanho (largura/altura):",
      "autoplayLabel": "Modo de reprodução automática",
      "autoplayExplain1": "O modo de reprodução automática avançará por sua história em um intervalo regular. Isto é ideal em um monitor de visualização pública ou de quiosque, mas esteja ciente que em outras situações ele pode tornar a história mais difícil de ler. Este recurso não é suportado em visualizações pequenas.",
      "autoplayExplain2": "Quando este modo está ativo há controles para reproduzir/pausar a história e ajustar a velocidade de navegação.",
      "linksupdated": "Links atualizados!"
    },
    "theme": {
      "lightLabel": "Claro",
      "darkLabel": "Escuro"
    }
  }
});