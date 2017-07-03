/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Gem",
      "close": "Luk"
    },
    "errors": {
      "noConfigName": "Ingen konfiguration angivet i index.html > configOptions.story",
      "configFormatError": "Den angivne konfiguration kunne ikke indlæses på grund af en JSON-syntaksfejl.",
      "configNotFound": "Den angivne konfiguration blev ikke fundet eller kunne ikke indlæses på grund af en JSON-syntaksfejl.",
      "boxTitle": "Der opstod en fejl",
      "servedFromFile": "Applikationen skal tilgås via en webserver. Se ${USER_GUIDE} for oplysninger.",
      "userGuide": "brugervejledning",
      "invalidConfig": "Ugyldig konfiguration",
      "invalidConfigNoApp": "Webkortapplikation-identifikatoren er ikke angivet i index.html.",
      "invalidConfigNoAppDev": "Ingen webkortapplikation-identifikator er angivet i URL-parametrene (?appid=). I udviklertilstand tilsidesættes appid-konfigurationen i index.html.",
      "unspecifiedConfigOwner": "Der er ikke konfigureret en uautoriseret ejer.",
      "invalidConfigOwner": "Historieejeren er ikke autoriseret.",
      "invalidConfignoOAuth": "Denne historie kræver godkendelse. Konfigurér en ArcGIS OAuth-ID i index.html, eller gør historien offentlig.",
      "invalidApp": "Denne historie kan ikke indlæses.",
      "appLoadingFail": "Noget gik galt, {TPL_NAME} blev ikke indlæst korrekt.",
      "notConfiguredDesktop": "Historien er endnu ikke blevet konfigureret.",
      "notConfiguredMobile": "{TPL_NAME}-builder-programmet understøttes ikke ved denne skærmstørrelse. Hvis det er muligt, skal du ændre størrelse på din browser for at få adgang til builder-programmet, eller du kan udvikle din historie på en enhed med en større skærm.",
      "notConfiguredMobile2": "Rotér din enhed til liggende retning for at bruge {TPL_NAME}-builder-programmet.",
      "notAuthorized": "Du er ikke autoriseret til at få adgang til denne historie",
      "notAuthorizedBuilder": "Du har ikke autorisation til at bruge {TPL_NAME} -builder-programmet.",
      "noViewerIE": "Denne historie understøttes ikke i Internet Explorer før version ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Du forsøger at få vist denne historie ved hjælp af en ældre, ikke-understøttet browser. Der kan være funktioner, der ikke fungerer, eller andre uventede problemer. Vi foreslår, at du opgraderer til Internet Explorer 11 eller benytter en anden browser, f.eks. Chrome.",
      "noViewerIE3": "I slutningen af 2017 vil denne historie ikke længere kunne vises i denne browser. På det tidspunkt skal du benytte en understøttet browser til at vise denne historie.",
      "upgradeBrowser": "Opdater din browser.",
      "mapLoadingFail": "Noget gik galt, kortet blev ikke indlæst korrekt.",
      "signOut": "Log ud",
      "builderSupport1": "Story Map Cascade-builder-programmet understøttes kun af ${CHROME} og ${SAFARI}. Men de Cascade-historier, du opretter med builder-programmet kan vises i disse browsere samt i Internet Explorer 11+ og Firefox.",
      "builderSupport2": "Story Map Cascade-builder-programmet understøttes ikke på iPad. De Cascade-historier, du opretter og deler, vil fungere på iPad.",
      "builderSupport3": "Cascade-historier kan vises i Chrome, Safari, Firefox og Internet Explorer 11+, men Story Map Cascade-builder-programmet understøttes kun af ${CHROME} og ${SAFARI}.",
      "builderSupport4": "Cascade-historier kan vises i en hvilken som helst webbrowser, men Story Map Cascade-builder-programmet understøttes kun af ${CHROME} og ${SAFARI}.<br><br>Hvis du har brug for, at Cascade-builder-programmet skal understøtte en anden browser, bedes du kontakte ${ESRI-SUPPORT} eller ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Bemærk:"
    },
    "mobileWarning": {
      "message1": "Du har læst den mobile version af denne historie. For at få vist den fulde historie med mere avancerede medieelementer skal du prøve at læse den på en stationær computer.",
      "email": "Send en e-mail med et link til denne historie"
    },
    "cover": {
      "iosEmbedLink": "Tryk for at læse hele historien"
    },
    "media": {
      "captionPlaceholder": "Din billedtekst her...",
      "loadingError": "Beklager, dette indhold er utilgængeligt",
      "explore": "Udforsk",
      "exploreMap": "Udforsk kort",
      "exploreStop": "Stop udforskning",
      "sceneNotSupported": "Beklager, dette 3D-kort understøttes ikke på din enhed.",
      "loading1": "Indlæser...",
      "loading2": "Indlæser kort...",
      "videoPlayPause": "afspil/pause",
      "videoMuteUnmute": "slå lyd fra/slå lyd til"
    },
    "headerFromCommon": {
      "defaultTagline": "Et ${STORY_MAP}",
      "share": "Opdatér",
      "tooltipAutoplayDisabled": "Dette er ikke tilgængeligt i autoplay-tilstand."
    },
    "shareFromCommon": {
      "copy": "Kopiér",
      "copied": "Kopieret",
      "open": "Åbn",
      "embed": "Indlejr i webside",
      "embedExplain": "Brug følgende HTML-kode til at indlejre historien i en webside.",
      "size": "Størrelse (bredde/højde):",
      "autoplayLabel": "Autoplay-tilstand",
      "autoplayExplain1": "Autoplay-tilstand vil gå frem igennem din historie med et regelmæssigt interval. Dette er ideelt på en kiosk-skærm eller offentlig tilgængelig skærm, men du skal være opmærksom på, at dette kan gøre din historie vanskeligere at læse i andre situationer. Denne funktion understøttes ikke på små skærme.",
      "autoplayExplain2": "Når denne tilstand er aktiv, er der knapper til at afspille din historie eller sætte den på pause og til at justere navigationshastigheden.",
      "linksupdated": "Links opdateret!"
    },
    "theme": {
      "lightLabel": "Lys",
      "darkLabel": "Mørk"
    }
  }
});