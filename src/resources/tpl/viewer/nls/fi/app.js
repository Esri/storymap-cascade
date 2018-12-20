/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Tallenna",
      "close": "Sulje"
    },
    "errors": {
      "noConfigName": "Tiedostossa index.html > configOptions.story ei ole määritetty kokoonpanoa",
      "configFormatError": "Määritettyä kokoonpanoa ei voitu ladata JSON-syntaksivirheen takia.",
      "configNotFound": "Määritettyä kokoonpanoa ei löytynyt tai sitä ei voitu ladata JSON-syntaksivirheen takia.",
      "boxTitle": "Tapahtui virhe",
      "servedFromFile": "Sovellusta on käytettävä Web-palvelimen kautta. Lisätietoja on ${USER_GUIDE}.",
      "userGuide": "käyttöoppaassa",
      "invalidConfig": "Virheellinen määritys",
      "invalidConfigNoApp": "Web-karttasovelluksen tunnusta ei ole määritetty index.html-tiedostossa.",
      "invalidConfigNoAppDev": "URL-osoitteen parametreissa (?appid= tai ?webmap=) ei ole määritetty yhtään Web-karttasovelluksen tunnusta. Kehittäjätilassa index.html-tiedoston appid-määritys ohitetaan.",
      "unspecifiedConfigOwner": "Valtuutettua omistajaa ei ole määritetty.",
      "invalidConfigOwner": "Tarinan omistajalla ei ole valtuuksia.",
      "invalidConfignoOAuth": "Tämä tarina edellyttää todennusta. Määritä ArcGIS OAuth -tunnus tiedostossa index.html tai tee tarinasta julkinen.",
      "invalidApp": "Tätä tarinaa ei voi ladata.",
      "appLoadingFail": "Tapahtui virhe, eikä {TPL_NAME} latautunut oikein.",
      "notConfiguredDesktop": "Tarinaa ei ole vielä määritetty.",
      "notConfiguredMobile": "Luontitoimintoa {TPL_NAME} ei tueta tässä näyttökoossa. Muuta selaimen kokoa mahdollisuuksien mukaan luontitoiminnon käyttöä varten tai luo tarinasi laitteessa, jossa on suurempi näyttö.",
      "notConfiguredMobile2": "Käytä luontitoimintoa {TPL_NAME} kääntämällä laitteesi vaakasuuntaan.",
      "notAuthorized": "Sinulla ei ole tämän tarinan käyttöoikeuksia",
      "notAuthorizedBuilder": "Sinulla ei ole luontitoiminnon {TPL_NAME} käyttöoikeuksia.",
      "noViewerIE": "Tarinaa ei tueta Internet Explorerin versiota ${VERSION} edeltävissä versioissa. ${UPGRADE}.",
      "noViewerIE2": "Yrität tarkastella tätä tarinaa käyttämällä vanhempaa selainta, jota ei tueta. Siinä saattaa olla ominaisuuksia, jotka eivät toimi, tai muita odottamattomia ongelmia. Suosittelemme, että päivität Internet Explorer -selaimen versioon 11 tai käytät toista selainta, kuten Chromea.",
      "noViewerIE3": "Vuoden 2017 loppupuolella tämä tarina ei enää lataudu tässä selaimessa. Käytä silloin tuettua selainta tämän tarinan katseluun.",
      "upgradeBrowser": "Päivitä selaimesi",
      "mapLoadingFail": "Tapahtui virhe, eikä kartta latautunut oikein.",
      "signOut": "Kirjaudu ulos",
      "builderSupportFirefox": "Story Map Cascade -luontitoiminto tukee nyt Firefoxia.<br><br>Cascade-tarinoiden luonnin tuki Firefoxissa on nyt beeta-vaiheessa. Kokeile luontitoimintoa ja kerro mahdollisista ongelmista ${ESRI-SUPPORT} tai ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade-tarinoita voi tarkastella missä tahansa verkkoselaimessa, mutta Story Map Cascade -luontitoimintoa tuetaan vain ${CHROME}-, ${SAFARI}- ja ${FIREFOX}-selaimissa.<br><br>Jos haluat, että Cascade-luontitoiminto tukee eri selainta, ota yhteyttä: ${ESRI-SUPPORT} tai ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Story Map Cascade -luontitoimintoa ei tueta iPadissa. Luomasi ja jakamasi Cascade-tarinat toimivat kyllä iPadissa.",
      "launchBuilder": "Käynnistä Cascade-luontitoiminto",
      "notAgain": "Älä näytä tätä uudelleen",
      "sorry": "Huomio:"
    },
    "mobileWarning": {
      "message1": "Olet lukenut tämän tarinan mobiiliversion. Jos haluat nähdä täyden version, jossa on enemmän mediaelementtejä, lue tarina pöytätietokoneella.",
      "email": "Lähetä linkki tähän tarinaan sähköpostilla"
    },
    "cover": {
      "iosEmbedLink": "Lue koko tarina napauttamalla"
    },
    "media": {
      "captionPlaceholder": "Kuvatekstisi tulee tähän...",
      "loadingError": "Valitettavasti tätä sisältöä ei voi käyttää",
      "explore": "Tutki",
      "exploreMap": "Tutki karttaa",
      "exploreStop": "Lopeta tutkiminen",
      "sceneNotSupported": "Valitettavasti laitteesi ei tue tätä 3D-karttaa.",
      "loading1": "Ladataan...",
      "loading2": "Ladataan karttaa...",
      "videoPlayPause": "toista/tauko",
      "videoMuteUnmute": "vaimenna/poista vaimennus"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Jaa tai tulosta",
      "tooltipAutoplayDisabled": "Tämä toiminto ei ole käytettävissä automaattisen toiston tilassa"
    },
    "shareFromCommon": {
      "copy": "Kopioi",
      "copied": "Kopioitu",
      "open": "Avaa",
      "embed": "Upota Web-sivulle",
      "embedExplain": "Käytä seuraavaa HTML-koodia tarinan upottamiseen Web-sivulle.",
      "size": "Koko (leveys/korkeus):",
      "autoplayLabel": "Automaattisen toiston tila",
      "autoplayExplain1": "Automaattisen toiston tilassa tarina etenee säännöllisin väliajoin. Tämä soveltuu hyvin kioskin näyttöön tai julkiseen näyttöön. Huomaa kuitenkin, että muissa tilanteissa tarinan lukeminen voi olla vaikeampaa. Tätä ominaisuutta ei tueta pienissä näytöissä.",
      "autoplayExplain2": "Kun tämä tila on käytössä, tarinan voi toistaa tai keskeyttää tai sen nopeutta voi säätää ohjausobjekteilla.",
      "linksupdated": "Linkit on päivitetty."
    },
    "theme": {
      "lightLabel": "Vaalea",
      "darkLabel": "Tumma"
    },
    "autoplay": {
      "speedFast": "Nopea",
      "speedMedium": "Keskitaso",
      "speedSlow": "Hidas"
    },
    "bannerNotification": {
      "learnMore": "Lisätietoja",
      "close": "Sulje",
      "dontShowAgain": "Älä näytä tätä viestiä uudelleen"
    },
    "embedBar": {
      "share": "Jaa",
      "fullScreen": "Koko näyttö",
      "exitFullScreen": "Poistu koko näytön tilasta",
      "enlarge": "Laajenna",
      "newTab": "Avaa uudessa välilehdessä",
      "tagline": "Tarinakartta",
      "twitter": "Jaa Twitterissä",
      "facebook": "Jaa Facebookissa"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Odota, että koko tarina on latautunut, ennen tulostusta",
      "printNotes": "Jos tämä sivu latautuu hitaasti tai jotkin mediatyypit eivät näyt, yritä korvata reaaliaikainen media kuvilla tai tulosta pienempiä osa-alueita. Parhaan tuloksen saamiseksi joudut ehkä ottamaan taustaelementtien tulostuksen käyttöön selaimesi tulostusasetuksissa.",
      "printOptions": "Asetukset",
      "makeTextBlack": "Määritä kaikki teksti mustaksi",
      "showLinks": "Näytä linkkien URL-osoitteet",
      "useAltMedia": "Korvaa reaaliaikainen media kuvilla mahdollisuuksien mukaan",
      "pageBreaks": "Aloita jokainen osa uudelta sivulta",
      "printRange": "Tulosta osa tästä tarinasta",
      "sectionStart": "Osat:",
      "go": "Käytä",
      "reset": "Palauta koko tarinaksi",
      "print": "Tulosta"
    },
    "page": {
      "appTagline": "Tämä tarina on luotu kohteella ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esrin Story Map Cascade",
      "readItOnline": "Lue se verkossa osoitteessa ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Osa ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Web-sivusto:",
      "videoLabel": "Video:",
      "audioLabel": "Ääni:"
    },
    "licenseChange2018": {
      "noAccess": "Tiliäsi (%USER_NAME%) ei ole lisensoitu avaamaan tarinakarttaa, joka ei ole julkinen. Pyydä organisaatiosi pääkäyttäjää määrittämään sinulle käyttäjätyyppi, joka sisältää tarinakartat tai keskeisten sovellusten lisäosan lisenssin."
    }
  }
});