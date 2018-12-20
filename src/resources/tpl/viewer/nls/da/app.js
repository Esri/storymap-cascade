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
      "builderSupportFirefox": "Story Map Cascade-builder understøtter nu Firefox!<br><br>Understøttelse til oprettelse af Cascade-historier i Firefox er på nuværende tidspunkt i beta. Prøv den, og rapporter eventuelle problemer til ${ESRI-SUPPORT} eller ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade-historier kan vises i alle moderne browsere, men Story Map Cascade-builder-programmet understøttes kun af ${CHROME} , ${SAFARI} og ${FIREFOX}.Hvis du har brug for, at Cascade-builder-programmet skal understøtte en anden browser, bedes du kontakte ${ESRI-SUPPORT} eller ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Story Map Cascade-builder-programmet understøttes ikke på iPad. De Cascade-historier, du opretter og deler, vil fungere på iPad.",
      "launchBuilder": "Start Cascade-builder",
      "notAgain": "Vis ikke dette igen",
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
      "share": "Del eller udskriv",
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
    },
    "autoplay": {
      "speedFast": "Hurtigt",
      "speedMedium": "Mellem",
      "speedSlow": "Langsomt"
    },
    "bannerNotification": {
      "learnMore": "Yderligere oplysninger",
      "close": "Luk",
      "dontShowAgain": "Vis ikke denne meddelelse igen"
    },
    "embedBar": {
      "share": "Opdatér",
      "fullScreen": "Fuld skærm",
      "exitFullScreen": "Afslut Fuld skærm-tilstand",
      "enlarge": "Forstør",
      "newTab": "Åbn på en ny fane",
      "tagline": "Et Story Map",
      "twitter": "Del på Twitter",
      "facebook": "Del på Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Vent, til hele historien er blevet indlæst, før du udskriver",
      "printNotes": "Hvis denne side indlæses langsomt, eller nogle medier ikke vises, kan du prøve at udskifte live-medier med billeder eller at udskrive færre afsnit. For at opnå de bedste resultater skal du muligvis aktivere udskrivning af baggrundselementer i din browserens udskriftsindstillinger.",
      "printOptions": "Indstillinger",
      "makeTextBlack": "Gør al tekst sort",
      "showLinks": "Vis link-URL’er",
      "useAltMedia": "Erstat live-medier med billeder, hvis de er tilgængelige",
      "pageBreaks": "Start hver sektion på en ny side",
      "printRange": "Udskriv en del af denne historie",
      "sectionStart": "Afsnit:",
      "go": "Anvend",
      "reset": "Nulstil til hele historien",
      "print": "Udskriv"
    },
    "page": {
      "appTagline": "Denne historie er lavet med ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esris Story Map Cascade",
      "readItOnline": "Læs det på nettet mere på her ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Afsnit ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Websted:",
      "videoLabel": "Video",
      "audioLabel": "Lyd:"
    },
    "licenseChange2018": {
      "noAccess": "Din konto (%USER_NAME%) har ikke licens til at åbne et Story Map, der ikke er offentlige. Bed din organisationsadministrator om at knytte dig til en brugertype, der omfatter Story Maps eller en add-on Essential Apps-licens."
    }
  }
});