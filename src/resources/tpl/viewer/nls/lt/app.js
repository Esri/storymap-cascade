/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Įrašyti",
      "close": "Uždaryti"
    },
    "errors": {
      "noConfigName": "index.html > configOptions.story nenurodyta jokia konfigūracija",
      "configFormatError": "Nurodytos konfigūracijos įkelti nepavyko dėl JSON sintaksės klaidos.",
      "configNotFound": "Nurodytos konfigūracijos rasti arba įkelti nepavyko dėl JSON sintaksės klaidos.",
      "boxTitle": "Įvyko klaida",
      "servedFromFile": "Aplikacija turi būti pasiekiama per internetinį serverį. Daugiau informacijos rasite ${USER_GUIDE}.",
      "userGuide": "vartotojo vadove",
      "invalidConfig": "Neteisinga konfigūracija",
      "invalidConfigNoApp": "Interneto žemėlapių aplikacijos identifikatorius nenurodytas index.html.",
      "invalidConfigNoAppDev": "URL parametruose (?appid=) nenurodytas interneto žemėlapių aplikacijos identifikatorius. Veikiant programavimo režimu, appid konfigūracija index.html ignoruojama.",
      "unspecifiedConfigOwner": "Nesukonfigūruotas teisėtas savininkas.",
      "invalidConfigOwner": "Pasakojimo savininkas neautorizuotas.",
      "invalidConfignoOAuth": "Šiam pasakojimui reikalinga autentifikacija. Sukonfigūruokite ArcGIS OAuth ID index.html arba padarykite pasakojimą prieinamą viešai.",
      "invalidApp": "Šio pasakojimo įkelti nepavyko.",
      "appLoadingFail": "Įvyko klaida ir {TPL_NAME} tinkamai įkelti nepavyko.",
      "notConfiguredDesktop": "Pasakojimas dar nesukonfigūruotas.",
      "notConfiguredMobile": "{TPL_NAME} kūrimo priemonė nepalaikoma. Jei įmanoma, pakeiskite naršyklės dydį, kad galėtumėte pasiekti kūrimo priemonę arba kurkite savo pasakojimą, naudodami prietaisą su didesniu ekranu.",
      "notConfiguredMobile2": "Norėdami naudoti {TPL_NAME} kūrimo priemonę, pasukite prietaisą horizontaliai.",
      "notAuthorized": "Neturite teisių pasiekti šį pasakojimą",
      "notAuthorizedBuilder": "Neturite įgaliojimų naudoti {TPL_NAME} kūrimo priemonę.",
      "noViewerIE": "Šis pasakojimas nepalaikomas naudojant Internet Explorer naršyklės versiją ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Jūs bandote peržiūrėti šį pasakojimą naudodami senesnę, nepalaikomą naršyklę. Kai kurie elementai gali neveikti ar įvykti kitokių nenumatytų problemų. Siūlome atnaujinti naršyklės versiją į Internet Explorer 11 arba naudoti kitą naršyklę, pavyzdžiui, Chrome.",
      "noViewerIE3": "2017 m. pabaigoje šio pasakojimo nebebus galima įkelti naudojant šią naršyklę. Norėdami peržiūrėti pasakojimą, turėsite naudoti palaikomą naršyklę.",
      "upgradeBrowser": "Prašome atnaujinti naršyklę",
      "mapLoadingFail": "Įvyko klaida ir žemėlapio nepavyko tinkamai įkelti.",
      "signOut": "Atsijungti",
      "builderSupportFirefox": "Besitęsiančių žemėlapių pasakojimai nuo šiol palaikomi Firefox!<br><br>Šiuo metu besitęsiančių žemėlapių pasakojimų kūrimas Firefox palaikomas tik beta versijoje. Išbandykite ir apie problemas praneškite ${ESRI-SUPPORT} arba ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Besitęsiančius pasakojimus galima peržiūrėti naudojant bet kurią šiuolaikinę naršyklę, tačiau Besitęsiančių žemėlapių pasakojimų kūrimo priemonę palaiko tik ${CHROME}, ${SAFARI} ir ${FIREFOX}.<br><br>Jei norite, kad Besitęsiančių pasakojimų kūrimo priemonę palaikytų kita naršyklė, kreipkitės į ${ESRI-SUPPORT} arba ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Besitęsiančių žemėlapių pasakojimų kūrimo priemonė nepalaikoma naudojant iPad. Tačiau jūsų sukurtos ir bendrinamos aplikacijos šiuose įrenginiuose veiks.",
      "launchBuilder": "Paleiskite besitęsiančių žemėlapių pasakojimų kūrimo priemonę",
      "notAgain": "Daugiau nerodyti",
      "sorry": "Dėmesio!"
    },
    "mobileWarning": {
      "message1": "Jūs peržiūrėjote mobiliąją šio pasakojimo versiją. Norėdami pamatyti daugiau medijos elementų, atsidarykite ją kompiuteryje.",
      "email": "Siųsti nuorodą į šį pasakojimą el. paštu"
    },
    "cover": {
      "iosEmbedLink": "Bakstelėkite, kad peržiūrėtumėte pasakojimą"
    },
    "media": {
      "captionPlaceholder": "Įrašykite antraštę...",
      "loadingError": "Deja, šis turinys nepasiekiamas",
      "explore": "Naršyti",
      "exploreMap": "Naršyti žemėlapį",
      "exploreStop": "Stabdyti naršymą",
      "sceneNotSupported": "Deja, šis 3D žemėlapis jūsų įrenginyje nepalaikomas.",
      "loading1": "Įkeliama...",
      "loading2": "Įkeliamas žemėlapis...",
      "videoPlayPause": "leisti / pristabdyti",
      "videoMuteUnmute": "nutildyti / išjungti nutildymą"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Bendrinti arba spausdinti",
      "tooltipAutoplayDisabled": "Automatinio paleidimo režimu nepasiekiamas"
    },
    "shareFromCommon": {
      "copy": "Kopijuoti",
      "copied": "Nukopijuota",
      "open": "Atverta",
      "embed": "Įterpti į tinklalapį",
      "embedExplain": "Jei į pasakojimą norite įterpti žurnalą, naudokite šį HTML kodą.",
      "size": "Dydis (plotis / aukštis):",
      "autoplayLabel": "Automatinio paleidimo režimas",
      "autoplayExplain1": "Veikiant automatinio paleidimo režimu, jūsų pasakojimas bus pateikiamas reguliariais intervalais. Tai puikiai tinkama parinktis informaciniuose terminaluose arba viešuosiuose ekranuose, tačiau nepamirškite, kad kitais atvejais pasakojimą gali būti sudėtinga perskaityti. Ši funkcija nepalaikoma mažuose ekranuose.",
      "autoplayExplain2": "Kai šis režimas aktyvus, yra valdikliai, kuriais galima leisti / pristabdyti pasakojimą ir reguliuoti naršymo greitį.",
      "linksupdated": "Nuorodos atnaujintos!"
    },
    "theme": {
      "lightLabel": "Šviesi",
      "darkLabel": "Tamsi"
    },
    "autoplay": {
      "speedFast": "Greitai",
      "speedMedium": "Vidutiniškas",
      "speedSlow": "Lėtai"
    },
    "bannerNotification": {
      "learnMore": "Sužinokite daugiau",
      "close": "Uždaryti",
      "dontShowAgain": "Daugiau nerodyti šio pranešimo"
    },
    "embedBar": {
      "share": "Bendrinti",
      "fullScreen": "Visas ekranas",
      "exitFullScreen": "Išjungti viso ekrano rodymo režimą",
      "enlarge": "Išplėsti",
      "newTab": "Atidaryti naujame lange",
      "tagline": "Žemėlapio pasakojimas",
      "twitter": "Bendrinti Twitter",
      "facebook": "Bendrinti Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Prieš spausdindami palaukite, kol bus įkeltas visas pasakojimas",
      "printNotes": "Jei puslapis įkeliamas lėtai ar rodoma ne visa medija, bandykite tiesioginę mediją pakeisti paveikslėliais arba spausdinkite mažesniu skilčių intervalu. Siekdami geriausių rezultatų, naršyklės parametruose gali tekti įgalinti fono elementų spausdinimą.",
      "printOptions": "Parinktys",
      "makeTextBlack": "Spalvinti visą tekstą juodai",
      "showLinks": "Rodyti nuorodos URL",
      "useAltMedia": "Pakeiskite tiesioginę mediją paveikslėliais, jei įmanoma",
      "pageBreaks": "Kiekvieną skiltį pradėkite naujame puslapyje",
      "printRange": "Spausdinkite pasakojimo dalį",
      "sectionStart": "Skiltys:",
      "go": "Taikyti",
      "reset": "Viso pasakojimo nustatymas iš naujo",
      "print": "Spausdinti"
    },
    "page": {
      "appTagline": "Šis pasakojimas sukurtas naudojant ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esri besitęsiančių žemėlapių pasakojimai",
      "readItOnline": "Skaitykite apie tai žiniatinklyje ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Skiltis ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Internetinis puslapis:",
      "videoLabel": "Vaizdo įrašas:",
      "audioLabel": "Garso įrašas:"
    },
    "licenseChange2018": {
      "noAccess": "Jūsų paskyra (%USER_NAME%) nelicencijuota atverti ne viešą žemėlapio pasakojimą. Kreipkitės į organizacijos administratorių, kad paskirtų jums vartotojo tipą, kuris turi žemėlapio pasakojimus, arba suteiktų jums papildomą svarbiausių aplikacijų licenciją."
    }
  }
});