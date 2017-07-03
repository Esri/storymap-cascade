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
      "builderSupport1": "Sastavljač Story Map Cascade podržan je samo u ${CHROME} i ${SAFARI}. Međutim, Cascade priče koje izradite sa sastavljačem mogu se prikazati u tim preglednicima, Internet Exploreru 11+ i Firefoxu.",
      "builderSupport2": "Sastavljač Story Map Cascade nije podržan za iPad. Cascade priče koje izradite i podijelite radit će na iPadu.",
      "builderSupport3": "Cascade priče mogu se prikazati u preglednicima Chrome, Safari, Firefox i Internet Explorer 11+, ali sastavljač Story Map Cascade podržan je samo u ${CHROME} i ${SAFARI}.",
      "builderSupport4": "Cascade priče mogu se prikazati u bilo kojem modernom internetskom pregledniku, ali sastavljač Story Map Cascade podržan je samo u ${CHROME} i ${SAFARI}.<br><br>Ako trebate sastavljač Cascade za podržavanje drugog preglednika, obratite se ${ESRI-SUPPORT} ili ${BROWSER-SUPPORT-VOTE}.",
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
      "share": "Podijeli",
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
    }
  }
});