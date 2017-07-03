/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Opslaan",
      "close": "Sluiten"
    },
    "errors": {
      "noConfigName": "Geen configuratie gespecificeerd in index.html>configOptions.story",
      "configFormatError": "De opgegeven configuratie kon niet worden geladen vanwege een JSON syntaxfout.",
      "configNotFound": "De opgegeven configuratie kon niet worden gevonden of geladen vanwege een JSON syntaxfout.",
      "boxTitle": "Er is een fout opgetreden",
      "servedFromFile": "De applicatie moet worden benaderd via een webserver. Zie ${USER_GUIDE} voor meer informatie.",
      "userGuide": "gebruikershandleiding",
      "invalidConfig": "Ongeldige configuratie",
      "invalidConfigNoApp": "Webmapapplicatie-ID niet opgegeven in index.html.",
      "invalidConfigNoAppDev": "Er is geen Web Mapping Application identifier opgegeven in URL parameters (?appid=). In ontwikkelingsmodus wordt de appid-configuratie in index.html genegeerd.",
      "unspecifiedConfigOwner": "De gemachtigde eigenaar is niet geconfigureerd.",
      "invalidConfigOwner": "De eigenaar van het verhaal is niet gemachtigd.",
      "invalidConfignoOAuth": "Dit verhaal vereist verificatie, configureer een ArcGIS OAuth-ID in index.html of maak het verhaal openbaar.",
      "invalidApp": "Dit verhaal kan niet worden geladen.",
      "appLoadingFail": "Er is een probleem opgetreden. De {TPL_NAME} is niet correct geladen.",
      "notConfiguredDesktop": "Het verhaal is nog niet geconfigureerd.",
      "notConfiguredMobile": "De {TPL_NAME} builder wordt niet ondersteund op dit schermformaat. Pas indien mogelijk de grootte van uw browser aan voor toegang tot de builder of bouw uw verhaal op een apparaat met een groter scherm.",
      "notConfiguredMobile2": "Draai uw apparaat een kwartslag om de {TPL_NAME} builder te gebruiken.",
      "notAuthorized": "U bent niet gemachtigd om dit verhaal te openen",
      "notAuthorizedBuilder": "U bent niet gemachtigd om {TPL_NAME} builder te gebruiken.",
      "noViewerIE": "Dit verhaal wordt niet ondersteund op eerdere versies van Internet Explorer dan versie ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "U probeert dit verhaal te bekijken met behulp van een oudere, niet-ondersteunde browser. Er kunnen functies niet werken of er kunnen andere onverwachte problemen ontstaan. Wij raden u aan te upgraden naar Internet Explorer 11 of een andere browser te gebruiken, zoals Chrome.",
      "noViewerIE3": "In het najaar van 2017 zal dit verhaal niet meer laden op deze browser. Vanaf dat moment moet u een ondersteunde browser gebruiken om dit verhaal te bekijken.",
      "upgradeBrowser": "Werk uw browser bij",
      "mapLoadingFail": "Er is een probleem opgetreden. De kaart is niet correct geladen.",
      "signOut": "Afmelden",
      "builderSupport1": "Story Map Cascade-builder wordt alleen ondersteund in ${CHROME} en ${SAFARI}. Echter, Cascade verhalen die u maakt met builder kunnen bekeken worden met die browsers, Internet Explorer 11+, en Firefox.",
      "builderSupport2": "Story Map Cascade-builder wordt niet ondersteund op de iPad. Cascade-verhalen die u maakt en deelt werken op de iPad.",
      "builderSupport3": "Cascade-verhalen kunnen worden bekeken in Chrome, Safari, Firefox en Internet Explorer 11+, maar Story Map Cascade-builder wordt alleen ondersteund in ${CHROME} en ${SAFARI}.",
      "builderSupport4": "Cascade-verhalen kunnen worden bekeken in alle moderne browsers, maar Story Map Cascade-builder wordt alleen ondersteund in ${CHROME} en ${SAFARI}.<br><br>Als u Cascade-builder nodig hebt om een andere browser te ondersteunen, neem dan contact op met ${ESRI-SUPPORT} of ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Let op:"
    },
    "mobileWarning": {
      "message1": "U hebt de mobiele versie van dit verhaal gelezen. Lees de volledige versie, met rijkere media-elementen, op een desktopcomputer.",
      "email": "E-mail een koppeling naar dit verhaal"
    },
    "cover": {
      "iosEmbedLink": "Tik om hele verhaal te lezen"
    },
    "media": {
      "captionPlaceholder": "Uw titel hier...",
      "loadingError": "Sorry, deze content is niet toegankelijk",
      "explore": "Verkennen",
      "exploreMap": "Kaart verkennen",
      "exploreStop": "Stop met verkennen",
      "sceneNotSupported": "Sorry, deze 3D-kaart wordt niet ondersteund op uw apparaat.",
      "loading1": "Laden...",
      "loading2": "Kaart laden...",
      "videoPlayPause": "Afspelen/Pauzeren",
      "videoMuteUnmute": "Dempen/dempen opheffen"
    },
    "headerFromCommon": {
      "defaultTagline": "Een ${STORY_MAP}",
      "share": "Delen",
      "tooltipAutoplayDisabled": "Dit is niet beschikbaar in autoplaymodus."
    },
    "shareFromCommon": {
      "copy": "Kopiëren",
      "copied": "Gekopieerd",
      "open": "Openen",
      "embed": "Inbedden in webpagina",
      "embedExplain": "Gebruik de volgende HTML-code om het verhaal in een webpagina in te sluiten.",
      "size": "Grootte (breedte/hoogte):",
      "autoplayLabel": "Autoplaymodus",
      "autoplayExplain1": "Autoplaymodus speelt uw verhaal regelmatig af. Dit is ideaal voor een kiosk of monitor in een openbare ruimte, maar houd er rekening mee dat het verhaal in andere situaties moeilijker te lezen is. Deze functie wordt niet ondersteund op kleine schermen.",
      "autoplayExplain2": "Wanneer deze modus actief is, kan het verhaal worden afgespeeld en gepauzeerd en kan de navigatiesnelheid worden aangepast.",
      "linksupdated": "Links bijgewerkt!"
    },
    "theme": {
      "lightLabel": "Licht",
      "darkLabel": "Donker"
    }
  }
});