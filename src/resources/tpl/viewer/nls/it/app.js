/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Salva",
      "close": "Chiudi"
    },
    "errors": {
      "noConfigName": "Nessuna configurazione specificata in index.html > configOptions.story",
      "configFormatError": "Impossibile caricare la configurazione specificata a causa di un errore di sintassi JSON.",
      "configNotFound": "Impossibile trovare o caricare la configurazione specificata a causa di un errore di sintassi JSON.",
      "boxTitle": "Si è verificato un errore",
      "servedFromFile": "Accedere all'applicazione tramite un server Web. Vedere la ${USER_GUIDE} per ulteriori dettagli.",
      "userGuide": "giuda per l'utente",
      "invalidConfig": "Configurazione non valida",
      "invalidConfigNoApp": "Identificatore dell'applicazione di mappatura Web non specificato in index.html.",
      "invalidConfigNoAppDev": "Nessun identificatore applicazione mappatura Web specificato nei parametri URL (?appid=). Nella modalità di sviluppo, la configurazione dell'ID dell'app in index.html viene ignorata.",
      "unspecifiedConfigOwner": "Il proprietario autorizzato non è stato configurato.",
      "invalidConfigOwner": "Il proprietario della storia non è autorizzato.",
      "invalidConfignoOAuth": "La storia richiede l'autenticazione. Configurare un ID OAuth ArcGIS in index.html o rendere pubblica la storia.",
      "invalidApp": "Impossibile caricare la storia.",
      "appLoadingFail": "Si è verificato un errore. Impossibile caricare {TPL_NAME} correttamente.",
      "notConfiguredDesktop": "La storia non è ancora configurata.",
      "notConfiguredMobile": "Il generatore {TPL_NAME} non è supportato per queste dimensioni dello schermo. Se possibile, ridimensionare il browser per accedere al generatore o creare la storia su un dispositivo con uno schermo più grande.",
      "notConfiguredMobile2": "Orientare il dispositivo in orizzontale per utilizzare il generatore {TPL_NAME}.",
      "notAuthorized": "Non si è autorizzati ad accedere alla storia.",
      "notAuthorizedBuilder": "Non si è autorizzati a utilizzare il generatore {TPL_NAME}.",
      "noViewerIE": "Questa storia non è supportata nelle versioni di Internet Explorer precedenti alla ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Si sta tentando di visualizzare la storia utilizzando un browser meno recente e non più supportato. Alcune funzioni potrebbero non funzionare o potrebbero verificarsi errori inattesi. Si consiglia di effettuare l'aggiornamento a Internet Explorer 11 o di utilizzare un altro browser, come Chrome.",
      "noViewerIE3": "Verso la fine del 2017, questa storia non sarà più caricata su questo browser e sarà quindi necessario utilizzare un browser supportato per visualizzarla.",
      "upgradeBrowser": "Aggiornare il browser",
      "mapLoadingFail": "Si è verificato un errore. La mappa non è stata caricata correttamente.",
      "signOut": "Disconnetti",
      "builderSupport1": "Il generatore Cascade Story Map è supportato solo in ${CHROME} e ${SAFARI}. Tuttavia, è possibile visualizzare le storie Cascade create con il generatore anche con Internet Explorer 11+ e Firefox.",
      "builderSupport2": "Il generatore Cascade Story Map non è supportato su iPad. Le storie Cascade create e condivise funzioneranno su iPad.",
      "builderSupport3": "È possibile visualizzare le storie Cascade in Chrome, Safari, Firefox e Internet Explorer 11+, ma il generatore Cascade Story Map è supportato solo in ${CHROME} e ${SAFARI}.",
      "builderSupport4": "È possibile visualizzare le storie Cascade in qualsiasi browser moderno, tuttavia il generatore Cascade Story Map è supportato solo in ${CHROME} e ${SAFARI}.<br><br>Se è necessario che il generatore Cascade supporti un browser diverso, contattare ${ESRI-SUPPORT} o fare clic per votare: ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Attenzione:"
    },
    "mobileWarning": {
      "message1": "Il testo della storia è stato adattato per i dispositivi mobili. Per la versione completa, con elementi multimediali avanzati, utilizzare un computer desktop.",
      "email": "Invia un collegamento a questa storia tramite e-mail"
    },
    "cover": {
      "iosEmbedLink": "Toccare per leggere la storia completa"
    },
    "media": {
      "captionPlaceholder": "Immetti la didascalia qui...",
      "loadingError": "Spiacenti, il contenuto non è accessibile",
      "explore": "Esplora",
      "exploreMap": "Esplora mappa",
      "exploreStop": "Interrompi l'esplorazione",
      "sceneNotSupported": "Spiacenti, questa mappa 3D non è supportata su questo dispositivo.",
      "loading1": "Caricamento in corso...",
      "loading2": "Caricamento della mappa in corso...",
      "videoPlayPause": "riproduci/pausa",
      "videoMuteUnmute": "disattiva audio/attiva audio"
    },
    "headerFromCommon": {
      "defaultTagline": "Una ${STORY_MAP}",
      "share": "Condividi",
      "tooltipAutoplayDisabled": "Questo non è disponibile nella modalità di riproduzione automatica"
    },
    "shareFromCommon": {
      "copy": "Copia",
      "copied": "Copiato",
      "open": "Apri",
      "embed": "Incorpora nella pagina Web",
      "embedExplain": "Utilizzare il seguente codice HTML per incorporare la storia in una pagina Web.",
      "size": "Dimensioni (larghezza/altezza):",
      "autoplayLabel": "Modalità di riproduzione automatica",
      "autoplayExplain1": "La modalità di riproduzione automatica consente di avanzare nella storia a intervalli regolari. Questa soluzione è ideale in un chiosco o monitor pubblico, ma occorre tenere presente che in altre situazioni potrebbe creare problemi di lettura della storia. Questa funzione non è supportata su display di piccole dimensioni.",
      "autoplayExplain2": "Quando questa modalità è attiva, sono disponibili controlli per riprodurre/sospendere la storia e regolare la velocità di navigazione.",
      "linksupdated": "Collegamenti aggiornati"
    },
    "theme": {
      "lightLabel": "Chiaro",
      "darkLabel": "Scuro"
    }
  }
});