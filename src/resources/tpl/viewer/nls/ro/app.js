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
      "builderSupportFirefox": "Aplicaţia de creare Story Map Cascade suportă acum Firefox!<br><br>Suportul pentru autorizarea Poveștilor cascadă în Firefox este oferit în prezent în beta. Vă rugăm să încercaţi şi să raportați orice problemă la ${ESRI-SUPPORT} sau ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Poveștile cascadă pot fi vizualizate în orice browser web modern, dar aplicația de creare Story Map Cascade este acceptată doar în ${CHROME}, ${SAFARI} și ${FIREFOX}.<br><br>Dacă aveți nevoie ca aplicația de creare cascadă să accepte un alt browser, contactați ${ESRI-SUPPORT} sau ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Aplicaţia de creare Story Map Cascade nu este suportată pe iPad. Poveştile cascadă pe care le creaţi şi partajaţi vor funcţiona pe iPad.",
      "launchBuilder": "Lansare aplicaţie de creare Cascade",
      "notAgain": "Nu se mai afişează aceasta",
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
      "share": "Partajați sau imprimați",
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
    },
    "autoplay": {
      "speedFast": "Rapid",
      "speedMedium": "Medie",
      "speedSlow": "Lent"
    },
    "bannerNotification": {
      "learnMore": "Aflaţi mai multe",
      "close": "Închidere",
      "dontShowAgain": "Nu afişa acest mesaj din nou"
    },
    "embedBar": {
      "share": "Partajare",
      "fullScreen": "Pe tot ecranul",
      "exitFullScreen": "Părăsiți modul pe tot ecranul",
      "enlarge": "Mărire",
      "newTab": "Deschideți într-o filă nouă",
      "tagline": "O hartă informativă",
      "twitter": "Partajare pe Twitter",
      "facebook": "Partajare pe Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Aşteptaţi ca întreaga poveste să se încarce înainte de imprimare",
      "printNotes": "Dacă această pagină se încarcă încet sau anumite medii nu apar, încercaţi să le înlocuiţi pe cele folosite în varianta curentă cu imagini sau să imprimați o serie mai restrânsă de secţiuni. Pentru rezultate optime, poate fi necesar să activați imprimarea elementelor de fundal în setările de imprimare ale browserului dvs.",
      "printOptions": "Opţiuni",
      "makeTextBlack": "Coloraţi tot textul cu negru",
      "showLinks": "Afişaţi URL-uri link",
      "useAltMedia": "Înlocuiţi medii din versiunea curentă cu imagini, dacă sunt disponibile",
      "pageBreaks": "Începeţi fiecare secţiune pe o pagină nouă",
      "printRange": "Imprimați o parte din această poveste",
      "sectionStart": "Secţiuni:",
      "go": "Aplicare",
      "reset": "Resetare la povestea integrală",
      "print": "Imprimare"
    },
    "page": {
      "appTagline": "Această poveste a fost creată cu ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Story Map Cascade de la Esri",
      "readItOnline": "Consultaţi-o pe internet pe pagina ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Secţiune ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Site web:",
      "videoLabel": "Video:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Contul dvs. (%USER_NAME%) nu este licențiat să deschidă o hartă informativă care nu este publică.  Solicitați-i administratorului organizației să vă aloce un tip de utilizator care include hărți informative sau o licență pentru aplicații esențiale de completare."
    }
  }
});