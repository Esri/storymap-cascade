/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Salvare",
      "close": "Închidere"
    },
    "errors": {
      "noConfigName": "Nu s-a specificat nicio configuraţie în index.html > configOptions.story",
      "configFormatError": "Configuraţia specificată nu a putut fi încărcată din cauza unei erori de sintaxă JSON.",
      "configNotFound": "Configuraţia specificată nu a putut fi găsită sau încărcată din cauza unei erori de sintaxă JSON.",
      "boxTitle": "A apărut o eroare",
      "servedFromFile": "Aplicaţia trebuie accesată printr-un server web. Consultaţi ${USER_GUIDE} pentru detalii.",
      "userGuide": "ghidul utilizatorului",
      "invalidConfig": "Configurare incorectă",
      "invalidConfigNoApp": "ID-ul aplicaţiei de cartografiere web nu este specificat în index.html.",
      "invalidConfigNoAppDev": "Nu a fost specificat niciun identificator de aplicaţie web de cartografiere sau o hartă web în parametrii adresei URL (?appid=). În mod dezvoltare, configuraţia appid din index.html este ignorată.",
      "unspecifiedConfigOwner": "Proprietarul autorizat nu a fost configurat.",
      "invalidConfigOwner": "Proprietarul poveştii nu este autorizat.",
      "invalidConfignoOAuth": "Această poveste necesită autentificare, vă rugăm să configuraţi un ID ArcGIS OAuth în index.html sau să faceţi publică povestea.",
      "invalidApp": "Această poveste nu poate fi încărcată.",
      "appLoadingFail": "Ceva nu a mers bine, {TPL_NAME} nu s-a încărcat corect.",
      "notConfiguredDesktop": "Povestea nu este configurată încă.",
      "notConfiguredMobile": "Aplicația de creare {TPL_NAME} nu este suportată la această dimensiune a ecranului. Dacă este posibil, redimensionaţi browserul dvs. pentru accesarea aplicației sau vă rugăm să creați scenariul dvs. pe un dispozitiv cu un ecran mai mare.",
      "notConfiguredMobile2": "Vă rugăm să rotiţi dispozitivul pe orientarea peisaj pentru a utiliza aplicația de creare pentru {TPL_NAME}.",
      "notAuthorized": "Nu sunteţi autorizat să accesaţi această poveste",
      "notAuthorizedBuilder": "Nu sunteţi autorizat să utilizaţi aplicație de creare pentru {TPL_NAME}.",
      "noViewerIE": "Această poveste nu este suportată în versiunile Internet Explorer anterioare versiunii ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Încercaţi să vizualizaţi această poveste cu un browser vechi, care nu mai este suportat. Pot exista funcţiuni care să nu funcţioneze sau pot apărea probleme neaşteptate. Vă sugerăm să upgradaţi la Internet Explorer 11 sau să utilizaţi alt browser cum ar fi Chrome.",
      "noViewerIE3": "Spre sfârşitul lui 2017, această poveste nu se va mai încărca pe acest browser. În acel moment, trebuie să utilizaţi un browser suportat pentru a vizualiza această poveste.",
      "upgradeBrowser": "Actualizaţi browserul",
      "mapLoadingFail": "Ceva nu a mers bine şi harta nu a fost încărcată corect.",
      "signOut": "Ieşire",
      "builderSupport1": "Aplicaţia de creare Story Map Cascade este disponibilă doar pentru ${CHROME} şi ${SAFARI}. Totuşi, poveştile cascadă pe care le creaţi cu aplicaţia de creare pot fi vizualizate cu acele browsere, cu Internet Explorer 11+ şi cu Firefox.",
      "builderSupport2": "Aplicaţia de creare Story Map Cascade nu este suportată pe iPad. Poveştile cascadă pe care le creaţi şi partajaţi vor funcţiona pe iPad.",
      "builderSupport3": "Poveştile cascadă pot fi vizualizate în Chrome, Safari, Firefox şi Internet Explorer 11+, dar aplicaţia de creare Story Map Cascade este suportată doar în ${CHROME} şi ${SAFARI}.",
      "builderSupport4": "Poveştile cascadă pot fi vizualizate în orice browser modern, dar aplicaţia de creare Story Map Cascade este suportată doar în ${CHROME} şi ${SAFARI}.<br><br>Dacă aveţi nevoie ca aplicaţia de creare cascadă să suporte şi alt browser, vă rugăm să contactaţi ${ESRI-SUPPORT} sau ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Atenţie:"
    },
    "mobileWarning": {
      "message1": "Aţi citit versiunea pentru mobil a acestei poveşti. Pentru versiunea completă, cu elemente media mai bogate, încercaţi să o citiţi pe un computer.",
      "email": "Partajaţi un link către această poveste"
    },
    "cover": {
      "iosEmbedLink": "Atingeţi pentru a citi povestea completă"
    },
    "media": {
      "captionPlaceholder": "Comentariul dvs. aici...",
      "loadingError": "Ne pare rău, acest conţinut nu este accesibil",
      "explore": "Exploraţi",
      "exploreMap": "Exploraţi harta",
      "exploreStop": "Nu mai exploraţi",
      "sceneNotSupported": "Ne pare rău, această hartă 3D nu este suportată pe dispozitivul dvs.",
      "loading1": "Se încarcă...",
      "loading2": "Se încarcă harta...",
      "videoPlayPause": "redare/pauză",
      "videoMuteUnmute": "fără sonor/cu sonor"
    },
    "headerFromCommon": {
      "defaultTagline": "O ${STORY_MAP}",
      "share": "Partajare",
      "tooltipAutoplayDisabled": "Aceasta nu este disponibilă în modul de redare automată"
    },
    "shareFromCommon": {
      "copy": "Copiere",
      "copied": "Copiat",
      "open": "Deschidere",
      "embed": "Încorporare în pagină web",
      "embedExplain": "Utilizaţi următorul cod HTML pentru a încorpora povestea într-o pagină web.",
      "size": "Dimensiune (lăţime/înălţime):",
      "autoplayLabel": "Mod redare automată",
      "autoplayExplain1": "Modul de redare automată va avansa prin scenariul dvs. la un interval regulat. Această opţiune este ideală pentru un chioşc sau un monitor pentru afişare publică, dar, reţineţi, că în alte situaţii poate face ca scenariul să fie dificil de urmărit. Această caracteristică nu este acceptată pe ecranele de dimensiuni mici.",
      "autoplayExplain2": "Când acest mod este activ, sunt afişate butoane pentru a reda/întrerupe scenariul şi pentru a regla viteza de navigare.",
      "linksupdated": "Legătură actualizată!"
    },
    "theme": {
      "lightLabel": "Deschis",
      "darkLabel": "Închis"
    }
  }
});