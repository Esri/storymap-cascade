/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Mentés",
      "close": "Bezárás"
    },
    "errors": {
      "noConfigName": "Nincs megadva konfiguráció az index.html > configOptions.story fájlban",
      "configFormatError": "A megadott konfigurációt nem sikerült betölteni egy JSON szintaktikai hiba miatt.",
      "configNotFound": "A megadott konfiguráció nem található, vagy nem sikerült betölteni egy JSON szintaktikai hiba miatt.",
      "boxTitle": "Hiba történt",
      "servedFromFile": "Az alkalmazást webszerveren keresztül kell elérni. További tájékoztatást a ${USER_GUIDE} tartalmaz.",
      "userGuide": "felhasználói útmutató",
      "invalidConfig": "Érvénytelen konfiguráció",
      "invalidConfigNoApp": "A Webes térképkészítő alkalmazás azonosítója nincs megadva az index.html fájlban.",
      "invalidConfigNoAppDev": "A Webes térképkészítő alkalmazás azonosítója nincs megadva az URL paramétereiben (?appid=). Fejlesztői módban az index.html fájlban található appid konfiguráció figyelmen kívül van hagyva.",
      "unspecifiedConfigOwner": "Nincs konfigurálva jogosult tulajdonos.",
      "invalidConfigOwner": "Nincs jogosultsága a történet tulajdonosának.",
      "invalidConfignoOAuth": "Ez a történet hitelesítést igényel. Konfiguráljon egy ArcGIS OAuth-azonosítót az index.html fájlban, vagy tegye nyilvánossá a történetet.",
      "invalidApp": "Ezt a történetet nem lehet betölteni.",
      "appLoadingFail": "Hiba történt, a(z) {TPL_NAME} nem töltődött be megfelelően.",
      "notConfiguredDesktop": "A történet még nincs konfigurálva.",
      "notConfiguredMobile": "A(z) {TPL_NAME} szerkesztő nem támogatott ennél a kijelzőméretnél. Ha lehetséges, módosítsa a böngésző méretét úgy, hogy elérhető legyen a szerkesztő, vagy használjon nagyobb képernyővel rendelkező eszközt a történet összeállításához.",
      "notConfiguredMobile2": "A(z) {TPL_NAME} szerkesztő használatához fordítsa el fekvő tájolásra az eszközt.",
      "notAuthorized": "Ön nem jogosult a történet elérésére",
      "notAuthorizedBuilder": "Ön nem jogosult a(z) {TPL_NAME} szerkesztő használatára.",
      "noViewerIE": "Ez a történet nem támogatott a(z) ${VERSION} verzió előtti Internet Explorerben. ${UPGRADE}.",
      "noViewerIE2": "Ezt a történetet egy régebbi, nem támogatott böngészőben próbálja megtekinteni. Előfordulhat, hogy néhány vektoros elem nem fog megfelelően működni, vagy váratlan hibák történhetnek. Azt javasoljuk, hogy frissítsen az Internet Explorer 11-es verziójára, vagy használjon más böngészőt, például a Chrome-ot.",
      "noViewerIE3": "2017 végén ez a történet már nem töltődik be ebben a böngészőben. A történet megtekintéséhez támogatott böngészőt kell használnia.",
      "upgradeBrowser": "Frissítse a böngészőjét",
      "mapLoadingFail": "Hiba történt, a térkép nem töltődött be megfelelően.",
      "signOut": "Kijelentkezés",
      "builderSupportFirefox": "A Story Map Cascade szerkesztő már támogatja a Firefox böngészőt!<br><br>A Cascade történetek Firefoxban való támogatása jelenleg bétaverzióban érhető el. Kérjük, próbálja ki, és az esetleges problémákat jelentse itt: ${ESRI-SUPPORT} vagy ${ESRI-COMMUNITY}.",
      "builderSupportOther": "A kaszkádolt történetek megtekinthetők bármelyik modern webböngészőben, de a Story Map Cascade szerkesztőt csak a ${CHROME}, a ${SAFARI} és a ${FIREFOX} böngésző támogatja.<br><br>Ha azt szeretné, hogy a Cascade szerkesztő más böngészőt is támogasson, keresse fel a következőket: ${ESRI-SUPPORT} vagy ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "A Story Map Cascade szerkesztő nem támogatott az iPad eszközökön. A létrehozott és megosztott kaszkádolt történetek működni fognak az iPad eszközökön.",
      "launchBuilder": "Cascade szerkesztő elindítása",
      "notAgain": "Ne jelenjen meg újra ez",
      "sorry": "Figyelem:"
    },
    "mobileWarning": {
      "message1": "A történet mobil verzióját olvassa. A több médiaelemet tartalmazó teljes verzió megjelenítéséhez tekintse meg asztali számítógépen a történetet.",
      "email": "Történet hivatkozásának küldése e-mailben"
    },
    "cover": {
      "iosEmbedLink": "Koppintson a teljes történet olvasásához"
    },
    "media": {
      "captionPlaceholder": "A képaláírás helye...",
      "loadingError": "Ez a tartalom nem érhető el",
      "explore": "Böngészés",
      "exploreMap": "Térkép böngészése",
      "exploreStop": "Böngészés leállítása",
      "sceneNotSupported": "Ez a 3D térkép nem támogatott az eszközén",
      "loading1": "Betöltés...",
      "loading2": "Térkép betöltése...",
      "videoPlayPause": "lejátszás/szünet",
      "videoMuteUnmute": "némítás/némítás kikapcsolása"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Megosztás vagy nyomtatás",
      "tooltipAutoplayDisabled": "Ez nem érhető el automatikus lejátszási módban"
    },
    "shareFromCommon": {
      "copy": "Másolás",
      "copied": "Másolt",
      "open": "Megnyitás",
      "embed": "Beágyazás weboldalon",
      "embedExplain": "A következő HTML-kód használatával ágyazhatja be a történetet a weboldalakon.",
      "size": "Méret (szélesség/magasság):",
      "autoplayLabel": "Automatikus lejátszási mód",
      "autoplayExplain1": "Az automatikus lejátszási mód meghatározott időközönként léptetve halad végig a történeten. Ez ideális megoldás a  nyilvános monitorokon történő megjelenítéshez, de vegye figyelembe, hogy más helyzetekben megnehezítheti a történet olvasását. Ez a funkció kisméretű kijelzőkön nem támogatott.",
      "autoplayExplain2": "Amikor aktív ez a mód, vezérlők érhetők el a történet lejátszásához/szüneteltetéséhez, valamint a navigáció sebességének beállításához.",
      "linksupdated": "A hivatkozások frissítése megtörtént."
    },
    "theme": {
      "lightLabel": "Világos",
      "darkLabel": "Sötét"
    },
    "autoplay": {
      "speedFast": "Gyors",
      "speedMedium": "Közepes",
      "speedSlow": "Lassú"
    },
    "bannerNotification": {
      "learnMore": "További információk",
      "close": "Bezárás",
      "dontShowAgain": "Ne jelenjen meg újra ez az üzenet"
    },
    "embedBar": {
      "share": "Megosztás",
      "fullScreen": "Teljes képernyő",
      "exitFullScreen": "Kilépés a teljes képernyőből",
      "enlarge": "Nagyítás",
      "newTab": "Megnyitás új fülön",
      "tagline": "Egy story map",
      "twitter": "Megosztás Twitteren",
      "facebook": "Megosztás Facebookon"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Várjon, amíg betöltődik a teljes történet, mielőtt kinyomtatja",
      "printNotes": "Ha ez az oldal lassan töltődik be, vagy valamelyik média nem jelenik meg, próbálja meg a valós idejű médiát képekkel vagy kisebb terjedelmű szekciók kinyomtatásával helyettesíteni. A legjobb eredmények érdekében szükség lehet a háttérelemek nyomtatásának engedélyezésére böngészője nyomtatási beállításaiban.",
      "printOptions": "Beállítások",
      "makeTextBlack": "Az összes szöveg legyen fekete",
      "showLinks": "URL-hivatkozások megjelenítése",
      "useAltMedia": "Valós idejű média helyettesítése képekkel, ha elérhetők",
      "pageBreaks": "Minden szekció új oldalon kezdődjön",
      "printRange": "A történet egy részének nyomtatása",
      "sectionStart": "Szekciók:",
      "go": "Alkalmaz",
      "reset": "Teljes történet visszaállítása",
      "print": "Nyomtatás"
    },
    "page": {
      "appTagline": "Ez a történet ${CASCADE_LINK_TEXT} használatával készült.",
      "cascadeLinkText": "Esri Story Map Cascade",
      "readItOnline": "Olvassa el az interneten itt: ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "${SECTION_NUMBER} szekció"
    },
    "media": {
      "websiteLabel": "Webhely:",
      "videoLabel": "Videó:",
      "audioLabel": "Hang:"
    },
    "licenseChange2018": {
      "noAccess": "Az Ön fiókjának (%USER_NAME%) licence nem teszi lehetővé a nem nyilvános story map megnyitását.  Igényelje a szervezete adminisztrátorától, hogy rendeljen Önhöz olyan felhasználótípust, amely tartalmazza a story map-eket, vagy egy kiegészítő story map-ekre vonatkozó licencet."
    }
  }
});