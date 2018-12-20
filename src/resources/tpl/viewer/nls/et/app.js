/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Salvesta",
      "close": "Sulge"
    },
    "errors": {
      "noConfigName": "Failis index.html > configOptions.story pole määratud ühtegi konfiguratsiooni.",
      "configFormatError": "Määratud konfiguratsiooni ei saanud laadida, kuna ilmnes JSON-i süntaksiviga.",
      "configNotFound": "Määratud konfiguratsiooni ei leitud või ei saanud laadida,kuna ilmnes JSON-i süntaksiviga",
      "boxTitle": "Esines tõrge",
      "servedFromFile": "Rakendusele juurdepääsemiseks tuleb kasutada veebiserverit. Lisateavet leiate juhendist ${USER_GUIDE}.",
      "userGuide": "kasutusjuhend",
      "invalidConfig": "Vigane konfiguratsioon",
      "invalidConfigNoApp": "Veebikaardi rakenduse identifikaatorit pole failis index.html määratud.",
      "invalidConfigNoAppDev": "Veebikaardi rakenduse identifikaatorit pole URL-i parameetrites (?appid=) määratud. Faili index.html AppID konfiguratsioon on arendusrežiimis ignoreeritud.",
      "unspecifiedConfigOwner": "Omanikuõigusi pole määratud.",
      "invalidConfigOwner": "Loo omanikul puuduvad õigused.",
      "invalidConfignoOAuth": "See lugu nõuab autentimist. Konfigureerige failis index.html ArcGIS-i OAuth-i ID või tehke lugu avalikuks.",
      "invalidApp": "Seda lugu ei saa laadida.",
      "appLoadingFail": "Midagi läks valesti, rakendust {TPL_NAME} ei laaditud õigesti.",
      "notConfiguredDesktop": "Lugu pole veel konfigureeritud.",
      "notConfiguredMobile": "Selle kuvasuuruse korral koosturit {TPL_NAME} ei toetata. Võimaluse korral muutke koosturile juurdepääsemiseks oma brauseri suurust või looge oma lugu suurema ekraaniga seadmes.",
      "notConfiguredMobile2": "Koosturi {TPL_NAME} kasutamiseks pöörake oma seadet ja kasutage horisontaalpaigutust.",
      "notAuthorized": "Teil puudub õigus sellele loole juurde pääseda",
      "notAuthorizedBuilder": "Teil pole õigust koosturit {TPL_NAME} kasutada.",
      "noViewerIE": "Seda lugu ei toetata Internet Exploreri varasemas versioonis ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Püüate seda lugu vaadata vanemas brauseris, mida ei toetata. Mõned funktsioonid ei pruugi töötada ning ilmneda võib ootamatuid probleeme. Soovitame kasutada brauserit Internet Explorer 11 või mõnda muud brauserit (nt Chrome).",
      "noViewerIE3": "2017. aasta lõpus seda lugu selles brauseris enam ei laadita. Siis peate selle loo vaatamiseks kasutama toetatud brauserit.",
      "upgradeBrowser": "Uuendage oma veebibrauserit",
      "mapLoadingFail": "Midagi läks valesti ning kaarti ei laaditud õigesti.",
      "signOut": "Logi välja",
      "builderSupportFirefox": "Kaardilugude kaskaadi koostaja on nüüd toetud ka Firefox brauseris!<br><br>Vastav Firefoxi tugi on praegu kasutatav beetaversioonina. Proovige seda ja kui leiate mõne kitsaskoha, andke sellest kindlasti teada: ${ESRI-SUPPORT} või ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Kaskaadlugusid saab kuvada igas tänapäevases veebibrauseris, kuid nende koostamiseks vajalik Story Map Cascade Builder on toetatud vaid brauserites ${CHROME}, ${SAFARI} ja ${FIREFOX}.<br><br>Kui teil on vaja, et kaskaadlugude koostamise keskkond toetaks mõnda muud brauserit, võtke palun ühendust ${ESRI-SUPPORT} või ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "iPadis kaardilugude kaskaadi koosturit ei toetata. Eelnevalt koostatud ja jagatud kaskaadlood iPadis toimivad.",
      "launchBuilder": "Kaskaadi koosturi käivitamine",
      "notAgain": "Ära seda enam kuva",
      "sorry": "Tähelepanu!"
    },
    "mobileWarning": {
      "message1": "Lugesite seda lugu mobiilivaates. Rohkemate meediaelementidega täisloo lugemiseks saate kasutada lauaarvutit.",
      "email": "Saada selle loo link meilisõnumiga"
    },
    "cover": {
      "iosEmbedLink": "Kogu loo lugemiseks puudutage"
    },
    "media": {
      "captionPlaceholder": "Sisestage pealkiri siia...",
      "loadingError": "See sisu pole kättesaadav",
      "explore": "Uurimine",
      "exploreMap": "Uuri kaarti",
      "exploreStop": "Lõpeta uurimine",
      "sceneNotSupported": "Teie seade ei toeta seda 3D-kaarti.",
      "loading1": "Laadimine...",
      "loading2": "Laadin kaarti...",
      "videoPlayPause": "esita/peata",
      "videoMuteUnmute": "vaigista/taasta heli"
    },
    "headerFromCommon": {
      "defaultTagline": "A ${STORY_MAP}",
      "share": "Jaga või prindi",
      "tooltipAutoplayDisabled": "See pole automaatesituse režiimis saadaval"
    },
    "shareFromCommon": {
      "copy": "Kopeeri",
      "copied": "Kopeeritud",
      "open": "Ava",
      "embed": "Lisa veebilehele",
      "embedExplain": "Kasutage loo veebilehele lisamiseks järgmist HTML-koodi.",
      "size": "Suurus (laius/kõrgus):",
      "autoplayLabel": "Automaatesituse režiim",
      "autoplayExplain1": "Automaatesituse režiimis keritakse Teie lugu kindla ajavahemiku järel edasi. Seda on hea kasutada kioskite või avalike kohtade ekraanidel, kuid arvestage, et muudel juhtudel võib see raskendada Teie loo lugemist. See funktsioon pole väikestel ekraanidel toetatud.",
      "autoplayExplain2": "Kui see režiim on aktiveeritud, saate kasutada loo esitamise või peatamise ja liikumiskiiruse reguleerimise juhtelemente.",
      "linksupdated": "Lingid on värskendatud!"
    },
    "theme": {
      "lightLabel": "Hele",
      "darkLabel": "Tume"
    },
    "autoplay": {
      "speedFast": "Kiire",
      "speedMedium": "Keskmine",
      "speedSlow": "Aeglane"
    },
    "bannerNotification": {
      "learnMore": "Lisateave",
      "close": "Sule",
      "dontShowAgain": "Ära kuva enam seda teadet"
    },
    "embedBar": {
      "share": "Jaga",
      "fullScreen": "Täisekraan",
      "exitFullScreen": "Välju täisekraanist",
      "enlarge": "Kasvav",
      "newTab": "Avatakse uuel vahelehel",
      "tagline": "Kaardilugu",
      "twitter": "Jaga Twitteris",
      "facebook": "Jaga Facebookis"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Enne printimist oodake, kuni laaditud on kogu lugu",
      "printNotes": "Kui lehe laadimine on aeglane või osa meediumist ei kuvata, proovige asendada reaalajas meedium piltidega või printige korraga vähem jaotisi. Parima tulemuse saavutamiseks peate võib-olla lubama brauseri printimissätetes taustaelementide printimise.",
      "printOptions": "Valikud",
      "makeTextBlack": "Muuda kogu tekst mustaks",
      "showLinks": "Kuva linkide URL-id",
      "useAltMedia": "Asenda reaalajas meedium piltidega, kui see on võimalik",
      "pageBreaks": "Alusta iga jaotist uuelt lehelt",
      "printRange": "Prindi osa sellest loost",
      "sectionStart": "Jaotised:",
      "go": "Rakenda",
      "reset": "Lähtesta täismahus loole",
      "print": "Prindi"
    },
    "page": {
      "appTagline": "Selle loo koostamisel kasutati: ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esri kaardilugude kaskaad",
      "readItOnline": "Lugege seda veebis: ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Jaotis ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Veebileht:",
      "videoLabel": "Video:",
      "audioLabel": "Heli:"
    },
    "licenseChange2018": {
      "noAccess": "Teie kontol (%USER_NAME%) puudub litsents kaardiloo avamiseks, mis ei ole avalik. Paluge oma organisatsiooni administraatoril määrata teile kasutajatüüp, mis sisaldab kaardilugusid või oluliste rakenduse lisalitsentsi."
    }
  }
});