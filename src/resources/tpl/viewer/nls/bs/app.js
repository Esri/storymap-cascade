/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Spremi",
      "close": "Zatvori"
    },
    "errors": {
      "noConfigName": "Konfiguracija nije navedena u index.html > configOptions.story",
      "configFormatError": "Navedena konfiguracije nije se mogla učitati zbog pogreške u JSON sintaksi.",
      "configNotFound": "Navedena konfiguracije nije pronađena ili se nije mogla učitati zbog pogreške u JSON sintaksi.",
      "boxTitle": "Došlo je do pogreške",
      "servedFromFile": "Aplikaciji treba pristupiti putem web-poslužitelja. Pojedinosti potražite u ${USER_GUIDE}.",
      "userGuide": "korisnički vodič",
      "invalidConfig": "Nevaljana konfiguracija",
      "invalidConfigNoApp": "Identifikator aplikacije za web-kartiranje nije određen u index.html.",
      "invalidConfigNoAppDev": "Identifikator aplikacije za web-kartiranje nije određen u parametrima URL-a (?appid=). U načinu rada razvoja ignorira se konfiguracija za appid u index.html.",
      "unspecifiedConfigOwner": "Preuzmite kratku poveznicu",
      "invalidConfigOwner": "Ovo nije dostupno u načinu automatske reprodukcije",
      "invalidConfignoOAuth": "Ova priča zahtijeva provjeru autentičnosti, konfigurirajte ArcGIS OAuth ID in index.html ili učinite priču javnom.",
      "invalidApp": "Ova se priča ne može učitati.",
      "appLoadingFail": "Nešto nije u redu, predložak {TPL_NAME} nije se točno učitao.",
      "notConfiguredDesktop": "Priča još nije konfigurirana.",
      "notConfiguredMobile": "Sastavljač predloška {TPL_NAME} nije podržan u ovoj veličini prikaza. Ako je moguće, promijenite veličinu preglednika da biste pristupili sastavljaču ili izradite priču na uređaju s većim zaslonom.",
      "notConfiguredMobile2": "Zakrenite uređaj u vodoravno usmjerenje kako biste upotrijebili sastavljač {TPL_NAME}.",
      "notAuthorized": "Niste ovlašteni za pristup ovoj priči",
      "notAuthorizedBuilder": "Niste ovlašteni za upotrebu sastavljača {TPL_NAME}.",
      "noViewerIE": "Priča nije podržana u ranijim verzijama preglednika Internet Explorer prije verzije ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Pokušavate prikazati ovu priču preko starijeg, nepodržanog preglednika. Možda neki geoobjekti ne rade ili je došlo do drugih neočekivanih problema. Predlažemo nadogradnju u Internet Explorer 11 ili korištenje drugog preglednika, primjerice Chromea.",
      "noViewerIE3": "Krajem 2017. ova se priča više neće moći učitati u ovom pregledniku. Tada ćete morati koristiti podržani preglednik za prikaz ove priče.",
      "upgradeBrowser": "Ažurirajte svoj preglednik",
      "mapLoadingFail": "Nešto nije u redu, karta se nije točno učitala.",
      "signOut": "Odjava",
      "builderSupportFirefox": "Sastavljač Story Map Cascade sada podržava Firefox!<br><br>Podrška za izradu Cascade priča u Firefoxu trenutačno je u beta verziji. Isprobajte je i prijavite sve probleme na sljedeće mjesto: ${ESRI-SUPPORT} ili ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade priče mogu se prikazati u bilo kojem modernom web-pregledniku, no sastavljač Story Map Cascade podržan je samo u ${CHROME}, ${SAFARI} i ${FIREFOX}.<br><br>Ako vam je potrebno da sastavljač Cascade podržava drugačiji preglednik, obratite se ${ESRI-SUPPORT} ili ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Sastavljač Story Map Cascade nije podržan za iPad. Cascade priče koje izradite i podijelite radit će na iPadu.",
      "launchBuilder": "Pokreni sastavljač Cascade",
      "notAgain": "Ne prikazuj ovo ponovno",
      "sorry": "Pozor:"
    },
    "mobileWarning": {
      "message1": "Pročitali ste mobilnu verziju ove priče. Za cijelu verziju s bogatijim elementima medija isprobajte je na stolnom računalu.",
      "email": "Pošaljite poveznicu na ovu priču e-poštom"
    },
    "cover": {
      "iosEmbedLink": "Dodirnite za čitanje cijele priče"
    },
    "media": {
      "captionPlaceholder": "Vaš natpis ovdje...",
      "loadingError": "Žao nam je, ovaj sadržaj nije dostupan",
      "explore": "Istraži",
      "exploreMap": "Istražite kartu",
      "exploreStop": "Zaustavi istraživanje",
      "sceneNotSupported": "Žao nam je, ova 3D karta nije podržana na vašem uređaju.",
      "loading1": "Učitavanje...",
      "loading2": "Učitavanje karte...",
      "videoPlayPause": "reproduciraj/pauziraj",
      "videoMuteUnmute": "isključi/uključi zvuk"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Podijeli ili ispiši",
      "tooltipAutoplayDisabled": "Ovo nije dostupno u načinu automatske reprodukcije"
    },
    "shareFromCommon": {
      "copy": "Kopiraj",
      "copied": "Kopirano",
      "open": "Otvori",
      "embed": "Ugradi u web-stranicu",
      "embedExplain": "Upotrijebite sljedeći HTML kod da biste ugradili priču u web-stranicu.",
      "size": "Veličina (širina/visina):",
      "autoplayLabel": "Način automatske reprodukcije",
      "autoplayExplain1": "Način automatske reprodukcije napredovat će kroz vašu priču u redovitim intervalima. To je idealno za kiosk ili javno prikazani zaslon, no budite svjesni da će se u drugim situacijama priča možda teže čitati. Ova značajka nije podržana na malim zaslonima.",
      "autoplayExplain2": "Uredite trenutačni obuhvat",
      "linksupdated": "Poveznice ažurirane!"
    },
    "theme": {
      "lightLabel": "Svijetlo",
      "darkLabel": "Tamno"
    },
    "autoplay": {
      "speedFast": "Brzo",
      "speedMedium": "Srednje",
      "speedSlow": "Sporo"
    },
    "bannerNotification": {
      "learnMore": "Saznaj više",
      "close": "Zatvori",
      "dontShowAgain": "Nemoj ponovno prikazati ovu poruku"
    },
    "embedBar": {
      "share": "Podijeli",
      "fullScreen": "Puni zaslon",
      "exitFullScreen": "Izađi iz punog zaslona",
      "enlarge": "Uvećaj",
      "newTab": "Otvori u novoj kartici",
      "tagline": "Story Map",
      "twitter": "Podijeli na Twitteru",
      "facebook": "Podijeli na Facebooku"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Pričekajte da se učita cijela priča prije ispisa",
      "printNotes": "Ako se ova stranica sporo učitava ili se neki mediji ne pojavljuju, pokušajte zamijeniti medije koji se prikazuju uživo slikama ili ispisom manjeg raspona odjeljaka. Za najbolje rezultate možda ćete trebati omogućiti ispis pozadinskih elemenata u postavkama ispisa preglednika.",
      "printOptions": "Opcije",
      "makeTextBlack": "Promijeni cijeli tekst u crno",
      "showLinks": "Prikaži URL-ove poveznica",
      "useAltMedia": "Zamijenite medije koji se prikazuju uživo sa slikama ako su dostupne",
      "pageBreaks": "Započnite svaki dio na novoj stranici",
      "printRange": "Ispiši dio ove priče",
      "sectionStart": "Odjeljci:",
      "go": "Primijeni",
      "reset": "Vrati na cijelu priču",
      "print": "Ispis"
    },
    "page": {
      "appTagline": "Ova je priča napravljena pomoću ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esrijev Story Map Cascade",
      "readItOnline": "Pročitajte na internetu na ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Odjeljak ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Web-mjesto:",
      "videoLabel": "Videozapis:",
      "audioLabel": "Audiozapis:"
    },
    "licenseChange2018": {
      "noAccess": "Vaš račun (%USER_NAME%) nije licenciran za upotrebu Story Mapa koji nije javan. Obratite se administratoru svoje organizacije da vam dodijeli vrstu korisnika koja sadrži licencu za Story Map ili za dodatke za osnovne appove."
    }
  }
});