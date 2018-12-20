/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Lagre",
      "close": "Ja"
    },
    "errors": {
      "noConfigName": "Det er ikke spesifisert noen konfigurasjon i index.html > configOptions.story",
      "configFormatError": "Den angitte konfigurasjonen kunne ikke lastes inn på grunn av en JSON-syntaksfeil.",
      "configNotFound": "Den angitte konfigurasjonen ble ikke funnet eller den kunne ikke lastes inn på grunn av en JSON-syntaksfeil.",
      "boxTitle": "Det har oppstått en feil",
      "servedFromFile": "Programmet må brukes gjennom en webserver. Se ${USER_GUIDE} for detaljer.",
      "userGuide": "brukerhåndbok",
      "invalidConfig": "Ugyldig konfigurasjon",
      "invalidConfigNoApp": "Identifikator for webkartprogram ikke angitt i index.html.",
      "invalidConfigNoAppDev": "Det er ikke angitt en webkartapplikasjons-ID i URL-parameterne (?appid=). App-ID-konfigurasjonen i Index.html ignoreres i utviklingsmodus.",
      "unspecifiedConfigOwner": "Godkjent eier er ikke konfigurert.",
      "invalidConfigOwner": "Historieeier er ikke godkjent.",
      "invalidConfignoOAuth": "Denne historien krever godkjenning, så du må konfigurere en ArcGIS OAuth-ID i index.html eller gjøre historien offentlig.",
      "invalidApp": "Denne historien kan ikke lastes inn.",
      "appLoadingFail": "Noe gikk galt, og {TPL_NAME} ble ikke lastet inn på riktig måte.",
      "notConfiguredDesktop": "Historien er ikke konfigurert ennå.",
      "notConfiguredMobile": "Byggeverktøyet {TPL_NAME} støttes ikke med denne skjermstørrelsen. Hvis det er mulig, endrer du størrelsen på nettleseren for å få tilgang til byggeverktøyet. Du kan også lage historien på en enhet med større skjerm.",
      "notConfiguredMobile2": "Snu enheten i liggende retning for å bruke byggeverktøyet {TPL_NAME}.",
      "notAuthorized": "Du har ikke tillatelse til å lese denne historien",
      "notAuthorizedBuilder": "Du har ikke tillatelse til å bruke byggeverktøyet {TPL_NAME}.",
      "noViewerIE": "Denne historien er ikke støttet i Internet Explorer før versjon ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Du prøver å vise denne historien ved hjelp av en eldre nettleser som ikke støttes. Det kan være funksjoner som ikke fungerer eller andre uventede problemer. Vi foreslår at du oppgraderer til Internet Explorer 11 eller bruker en annen nettleser, for eksempel Chrome.",
      "noViewerIE3": "Mot slutten av 2017 vil denne historien ikke lenger lastes på denne nettleseren. I mellomtiden må du bruke en nettleser som støttes for å se denne historien.",
      "upgradeBrowser": "Oppdater nettleseren din",
      "mapLoadingFail": "Noe gikk galt, og kartet ble ikke lastet inn på riktig måte.",
      "signOut": "Logg av",
      "builderSupportFirefox": "Byggeverktøyet Story Map Cascade støtter nå Firefox!<br><br>Støtte for å opprette Cascade-fortellinger i Firefox er foreløpig i betaversjon. Prøv det, og rapporter eventuelle problem til ${ESRI-SUPPORT} eller ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade-fortellinger kan vises i alle moderne nettlesere, men byggeverktøyet Story Map Cascade støttes bare i ${CHROME}, ${SAFARI} og ${FIREFOX}.<br><br>Hvis du har behov for at Cascade-byggeverktøyet skal støtte en annen nettleser, kan du kontakte ${ESRI-SUPPORT} eller ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Byggeverktøyet Story Map Cascade støttes ikke på iPad. Cascade-fortellinger som du oppretter og deler, vil fungere på iPad.",
      "launchBuilder": "Starter byggeverktøyet Cascade",
      "notAgain": "Ikke vis igjen",
      "sorry": "Obs:"
    },
    "mobileWarning": {
      "message1": "Du har lest den mobile versjonen av denne historien. For den fulle versjonen, som har rikere medieelementer, kan du bruke en stasjonær datamaskin.",
      "email": "Send en kobling til denne historien på e-post"
    },
    "cover": {
      "iosEmbedLink": "Trykk for å lese hele historien"
    },
    "media": {
      "captionPlaceholder": "Din bildetekst her ...",
      "loadingError": "Beklager, dette innholdet er ikke tilgjengelig",
      "explore": "Utforsk",
      "exploreMap": "Utforsk kart",
      "exploreStop": "Avslutt utforskningen",
      "sceneNotSupported": "Beklager, dette 3D-kartet støttes ikke på enheten din.",
      "loading1": "Laster inn ...",
      "loading2": "Laster inn kart...",
      "videoPlayPause": "spill av/pause",
      "videoMuteUnmute": "demping av/på"
    },
    "headerFromCommon": {
      "defaultTagline": "A ${STORY_MAP}",
      "share": "Del eller skriv ut",
      "tooltipAutoplayDisabled": "Dette er ikke tilgjengelig i automatisk avspillingsmodus"
    },
    "shareFromCommon": {
      "copy": "Kopier",
      "copied": "Kopiert",
      "open": "Åpne",
      "embed": "Bygg inn på webside",
      "embedExplain": "Bruk følgende HTML-kode for å bygge inn historien på en webside.",
      "size": "Størrelse (bredde/høyde):",
      "autoplayLabel": "Automatisk avspillingsmodus",
      "autoplayExplain1": "Automatisk avspillingsmodus går videre i historien med gitte intervaller. Dette fungerer utmerket til kiosker eller informasjonsskjermer, men kan i andre situasjoner gjøre det vanskeligere å lese historien. Denne funksjonen støttes ikke på små skjermer.",
      "autoplayExplain2": "Når denne modusen er aktivert, vises det kontroller for å spille av/pause historien og justere navigeringshastigheten.",
      "linksupdated": "Koblingene ble oppdatert"
    },
    "theme": {
      "lightLabel": "Lys",
      "darkLabel": "Mørk"
    },
    "autoplay": {
      "speedFast": "Raskt",
      "speedMedium": "Middels",
      "speedSlow": "Sakte"
    },
    "bannerNotification": {
      "learnMore": "Få mer informasjon",
      "close": "Lukk",
      "dontShowAgain": "Ikke vis denne meldingen igjen"
    },
    "embedBar": {
      "share": "Del",
      "fullScreen": "Fullskjerm",
      "exitFullScreen": "Avslutt fullskjerm",
      "enlarge": "Forstørr",
      "newTab": "Åpne i ny fane",
      "tagline": "Et fortellingskart",
      "twitter": "Del på Twitter",
      "facebook": "Del på Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Vent til hele fortellingen er lastet inn før du skriver ut",
      "printNotes": "Hvis det tar lang tid å laste inn denne siden eller visse medier ikke vises, kan du prøve å erstatte livemedia med bilder eller skrive ut et mindre antall avsnitt. For å få best resultat kan det hende du må aktivere utskrift av bakgrunnselementer i utskriftsalternativene i nettleseren.",
      "printOptions": "Alternativer",
      "makeTextBlack": "Gjør all tekst svart",
      "showLinks": "Vis koblings-URL-er",
      "useAltMedia": "Erstatt livemedia med bilder, hvis tilgjengelig",
      "pageBreaks": "Begynn hver del på en ny side",
      "printRange": "Skriv ut deler av fortellingen",
      "sectionStart": "Deler:",
      "go": "Bruk",
      "reset": "Tilbakestill hele fortellingen",
      "print": "Skriv ut"
    },
    "page": {
      "appTagline": "Denne fortellingen ble laget med ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esris Story Map Cascade",
      "readItOnline": "Les det på nettet på ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Avsnitt ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Webområde:",
      "videoLabel": "Video:",
      "audioLabel": "Lyd:"
    },
    "licenseChange2018": {
      "noAccess": "Kontoen (%USER_NAME%) er ikke lisensiert til å åpne et fortellingskart som ikke er offentlig.  Be administratoren for organisasjonen om å tilordne deg en brukertype som omfatter Story Maps eller en tilleggslisens for Essential Apps."
    }
  }
});