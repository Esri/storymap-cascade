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
      "builderSupportFirefox": "Story Map Cascade-builder biedt nu ondersteuning voor Firefox!<br><br>Ondersteuning voor het schrijven van Cascade-verhalen in Firefox bevindt zich momenteel in de beta-fase. Probeer het en meld alle problemen aan ${ESRI-SUPPORT} of de ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade-verhalen kunnen worden bekeken in alle moderne webbrowsers, maar Story Map Cascade-builder wordt alleen ondersteund in ${SAFARI} en ${FIREFOX}.<br><br>Als u wilt dat Cascade-builder een ander type browser ondersteund, neem dan contact op met ${ESRI-SUPPORT} of ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Story Map Cascade-builder wordt niet ondersteund op de iPad. Cascade-verhalen die u maakt en deelt werken op de iPad.",
      "launchBuilder": "Cascade builder starten",
      "notAgain": "Dit niet meer tonen",
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
      "share": "Delen of afdrukken",
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
    },
    "autoplay": {
      "speedFast": "Snel",
      "speedMedium": "Middel",
      "speedSlow": "Langzaam"
    },
    "bannerNotification": {
      "learnMore": "Meer informatie",
      "close": "Sluiten",
      "dontShowAgain": "Dit bericht niet meer weergeven"
    },
    "embedBar": {
      "share": "Delen",
      "fullScreen": "Volledig scherm",
      "exitFullScreen": "Volledig scherm afsluiten",
      "enlarge": "Vergroten",
      "newTab": "Openen in een nieuw tabblad",
      "tagline": "Een Story Map",
      "twitter": "Delen op Twitter",
      "facebook": "Delen op Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Wacht tot het hele verhaal geladen is voordat u het afdrukt",
      "printNotes": "Als deze pagina traag geladen wordt of bepaalde media niet verschijnt, probeer dan live media te vervangen door afbeeldingen of een kleinere reeks secties af te drukken. Voor de beste resultaten moet u mogelijk het afdrukken van achtergrondelementen activeren in de afdrukinstellingen van uw browser.",
      "printOptions": "Opties",
      "makeTextBlack": "Maak alle tekst zwart",
      "showLinks": "Koppelings-URL's weergeven",
      "useAltMedia": "Indien beschikbaar, vervang live media door afbeeldingen",
      "pageBreaks": "Begin elke sectie op een nieuwe pagina",
      "printRange": "Een deel van dit verhaal afdrukken",
      "sectionStart": "Secties:",
      "go": "Toepassen",
      "reset": "Resetten naar hele verhaal",
      "print": "Afdrukken"
    },
    "page": {
      "appTagline": "Dit verhaal werd gemaakt met ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esri's Story Map Cascade",
      "readItOnline": "Lees het op het internet op ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Sectie ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Website:",
      "videoLabel": "Video:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Uw account  (%USER_NAME%) heeft geen licentie om een Story Map te openen die niet openbaar is. Vraag uw organisatiebeheerder om u een gebruikerstype toe te wijzen die Sory Maps of een add-on Essential Apps-licentie bevat."
    }
  }
});