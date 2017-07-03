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
      "builderSupport1": "Byggeverktøyet Story Cascade støttes bare i ${CHROME} og ${SAFARI}. Imidlertid kan Cascade-historier som du oppretter med byggeverktøyet vises i disse nettleserne, Internet Explorer 11+ og Firefox.",
      "builderSupport2": "Byggeverktøyet Story Cascade støttes ikke på iPad. Cascade-historier som du oppretter og deler, vil fungere på iPad.",
      "builderSupport3": "Cascade-historier kan vises i Chrome, Safari, Firefox og Internet Explorer 11+, men byggeverktøyet Story Cascade støttes bare i ${CHROME} og ${SAFARI}.",
      "builderSupport4": "Cascade-historier kan vises i vanlige nettlesere, men byggeverktøyet Story Cascade støttes bare i ${CHROME} og ${SAFARI}.<br><br>Hvis du har behov for at byggeverktøyet Cascade skal støtte en annen leser, kontakter du ${ESRI-SUPPORT} eller ${BROWSER-SUPPORT-VOTE}.",
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
      "share": "Del",
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
    }
  }
});