/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Desa",
      "close": "Tanca"
    },
    "errors": {
      "noConfigName": "No s'ha especificat cap configuració a index.html > configOptions.story",
      "configFormatError": "La configuració especificada no es pot carregar a causa d'un error de sintaxi JSON.",
      "configNotFound": "La configuració especificada no s'ha trobat o no es pot carregar a causa d'un error de sintaxi JSON.",
      "boxTitle": "S'ha produït un error",
      "servedFromFile": "Cal accedir a l'aplicació a través d'un servidor web. Consulteu la ${USER_GUIDE} per obtenir més informació.",
      "userGuide": "guia de l'usuari",
      "invalidConfig": "Configuració no vàlida",
      "invalidConfigNoApp": "L'identificador de l'aplicació de cartografia web no s'ha especificat a index.html.",
      "invalidConfigNoAppDev": "No s'ha especificat cap identificador de l'aplicació de cartografia web als paràmetres de l'adreça URL (?appid=). En el mode de desenvolupament, la configuració de l'appid a index.html es passa per alt.",
      "unspecifiedConfigOwner": "El propietari autoritzat no s'ha configurat.",
      "invalidConfigOwner": "El propietari de la història no té autorització.",
      "invalidConfignoOAuth": "Cal autenticar-se per accedir a aquesta història. Configureu un ID de l'OAuth de l'ArcGIS a index.html o feu que la història sigui pública.",
      "invalidApp": "Aquesta història no es pot carregar.",
      "appLoadingFail": "S'ha produït algun problema. {TPL_NAME} no s'ha carregat correctament.",
      "notConfiguredDesktop": "La història encara no s'ha configurat.",
      "notConfiguredMobile": "El builder de {TPL_NAME} no és compatible amb aquesta mida de pantalla. Si és possible, canvieu la mida del navegador per accedir al builder o creeu la història en un dispositiu amb una pantalla més gran.",
      "notConfiguredMobile2": "Gireu el dispositiu en posició horitzontal per utilitzar el builder de {TPL_NAME}.",
      "notAuthorized": "No teniu autorització per accedir a aquesta història",
      "notAuthorizedBuilder": "No teniu autorització per utilitzar el builder de {TPL_NAME}.",
      "noViewerIE": "Aquesta història no és compatible amb versions de l'Internet Explorer anteriors a la versió ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Esteu intentant veure aquesta història amb un navegador antic no compatible. És possible que algunes característiques no funcionin o que es produeixin altres problemes inesperats. És recomanable que actualitzeu a l'Internet Explorer 11 o que feu servir un altre navegador, com ara el Chrome.",
      "noViewerIE3": "A finals de 2017, aquesta història ja no es podrà carregar en aquest navegador. Quan això passi, haureu de fer servir un navegador compatible per veure-la.",
      "upgradeBrowser": "Actualitzeu el navegador",
      "mapLoadingFail": "S'ha produït algun problema. El mapa no s'ha carregat correctament.",
      "signOut": "Tanca la sessió",
      "builderSupportFirefox": "El builder de l'Story Map Cascade ja és compatible amb el Firefox.<br><br>El suport per a la creació d'històries del Cascade al Firefox es troba en versió beta. Proveu-ho i notifiqueu qualsevol problema al ${ESRI-SUPPORT} o a la ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Les històries del Cascade es poden visualitzar en qualsevol navegador web modern, però el builder de l'Story Map Cascade només s'admet al ${CHROME}, el ${SAFARI} i el ${FIREFOX}.<br><br>Si necessiteu que el builder del Cascade sigui compatible amb un navegador diferent, poseu-vos en contacte amb el ${ESRI-SUPPORT} o bé ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "El builder de l'Story Map Cascade no s'admet a l'iPad. Les històries del Cascade que creeu i compartiu funcionaran a l'iPad.",
      "launchBuilder": "Inicia el builder del Cascade",
      "notAgain": "No ho tornis a mostrar",
      "sorry": "Atenció:"
    },
    "mobileWarning": {
      "message1": "Heu llegit la versió per a mòbil d'aquesta història. Per veure'n la versió completa, que conté més elements multimèdia, obriu-la en un equip de sobretaula.",
      "email": "Envia un enllaç per correu electrònic a aquesta història"
    },
    "cover": {
      "iosEmbedLink": "Toqueu per llegir la història completa"
    },
    "media": {
      "captionPlaceholder": "El títol ha d'aparèixer aquí...",
      "loadingError": "No es pot accedir a aquest contingut",
      "explore": "Explora",
      "exploreMap": "Explora el mapa",
      "exploreStop": "Atura l'exploració",
      "sceneNotSupported": "Aquest mapa 3D no és compatible amb el vostre dispositiu.",
      "loading1": "S'està carregant...",
      "loading2": "S'està carregant el mapa...",
      "videoPlayPause": "reprodueix/atura temporalment",
      "videoMuteUnmute": "desactiva/reactiva el so"
    },
    "headerFromCommon": {
      "defaultTagline": "Un ${STORY_MAP}",
      "share": "Comparteix o imprimeix",
      "tooltipAutoplayDisabled": "No està disponible en el mode de reproducció automàtica"
    },
    "shareFromCommon": {
      "copy": "Copia",
      "copied": "S'ha copiat",
      "open": "Obre",
      "embed": "Incrusta en una pàgina web",
      "embedExplain": "Utilitzeu el codi HTML següent per incrustar la història en una pàgina web.",
      "size": "Mida (amplada/altura):",
      "autoplayLabel": "Mode de reproducció automàtica",
      "autoplayExplain1": "El mode de reproducció automàtica avançarà per la història a intervals regulars. Aquest mode és idoni per a un quiosc o un monitor públic, però en altres situacions pot ser que dificulti la lectura de la història. Aquesta característica no és compatible amb pantalles petites.",
      "autoplayExplain2": "Quan s'activa aquest mode, apareixen controls per reproduir i aturar temporalment la història, així com per ajustar la velocitat de navegació.",
      "linksupdated": "Els enllaços s'han actualitzat."
    },
    "theme": {
      "lightLabel": "Clar",
      "darkLabel": "Fosc"
    },
    "autoplay": {
      "speedFast": "Ràpid",
      "speedMedium": "Mitjà",
      "speedSlow": "Lent"
    },
    "bannerNotification": {
      "learnMore": "Més informació",
      "close": "Tanca",
      "dontShowAgain": "No tornis a mostrar aquest missatge"
    },
    "embedBar": {
      "share": "Comparteix",
      "fullScreen": "Pantalla completa",
      "exitFullScreen": "Surt de la pantalla completa",
      "enlarge": "Amplia",
      "newTab": "Obre-ho en una pestanya nova",
      "tagline": "Un Story Map",
      "twitter": "Comparteix-ho al Twitter",
      "facebook": "Comparteix-ho al Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Espereu que es carregui tota la història abans d'imprimir-la",
      "printNotes": "Si la pàgina es carrega lentament o no es mostra algun contingut multimèdia, proveu de substituir el contingut multimèdia publicat per imatges o imprimir un interval de seccions més petit. Per obtenir uns resultats òptims, pot ser que hagueu d'habilitar la impressió dels elements en segon terme a la configuració d'impressió del navegador.",
      "printOptions": "Opcions",
      "makeTextBlack": "Defineix tot el text de color negre",
      "showLinks": "Mostra les URL dels enllaços",
      "useAltMedia": "Substitueix el contingut multimèdia publicat per imatges, si n'hi ha",
      "pageBreaks": "Comença cada secció en una pàgina nova",
      "printRange": "Imprimeix una part d'aquesta història",
      "sectionStart": "Seccions:",
      "go": "Aplica",
      "reset": "Restableix a la història completa",
      "print": "Imprimeix"
    },
    "page": {
      "appTagline": "Aquesta història s'ha creat amb ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Story Map Cascade d'Esri",
      "readItOnline": "Llegeix-ho al web a ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Secció ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Lloc web:",
      "videoLabel": "Vídeo:",
      "audioLabel": "Àudio:"
    },
    "licenseChange2018": {
      "noAccess": "El vostre compte (%USER_NAME%) no té llicència per obrir un story map que no sigui públic.  Demaneu a l'administrador de l'organització que us assigni un tipus d'usuari que inclogui story maps o una llicència d'aplicacions bàsiques de complement."
    }
  }
});