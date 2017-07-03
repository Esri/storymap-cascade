/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Spara",
      "close": "Stäng"
    },
    "errors": {
      "noConfigName": "Ingen konfiguration har angetts i index.html > configOptions.story",
      "configFormatError": "Den angivna konfigurationen kunde inte läsas in på grund av ett JSON-syntaxfel.",
      "configNotFound": "Den angivna konfigurationen hittades inte eller kunde inte läsas in på grund av ett JSON-syntaxfel.",
      "boxTitle": "Ett fel har inträffat",
      "servedFromFile": "Programmet måste öppnas via en webbserver. Se ${USER_GUIDE} för mer information.",
      "userGuide": "användarhandbok",
      "invalidConfig": "Ogiltig konfiguration",
      "invalidConfigNoApp": "Identifieraren för webbapplikationen anges inte i index.html.",
      "invalidConfigNoAppDev": "Ingen identifierare för en webbapplikation anges i URL-parametrarna (?appid=). I utvecklingsläge ignoreras app-ID:ts konfiguration i index.html.",
      "unspecifiedConfigOwner": "Ingen auktoriserad ägare har konfigurerats.",
      "invalidConfigOwner": "Berättelsens ägare är inte auktoriserad.",
      "invalidConfignoOAuth": "Den här berättelsen kräver autentisering. Konfigurera ett ArcGIS OAuth-ID i index.html eller gör berättelsen offentlig.",
      "invalidApp": "Den här berättelsen kan inte läsas in.",
      "appLoadingFail": "Något gick fel. {TPL_NAME} lästes inte in korrekt.",
      "notConfiguredDesktop": "Berättelsen har inte konfigurerats ännu.",
      "notConfiguredMobile": "Byggverktyget {TPL_NAME} stöds inte för den här skärmstorleken. Ändra om möjligt storlek på webbläsaren för att få åtkomst till byggverktyget, eller skapa din berättelse på en enhet med större skärm.",
      "notConfiguredMobile2": "Rotera enheten till liggande läge om du vill använda byggverktyget {TPL_NAME}.",
      "notAuthorized": "Du är inte behörig att öppna den här berättelsen",
      "notAuthorizedBuilder": "Du är inte behörig att använda byggverktyget {TPL_NAME}.",
      "noViewerIE": "Den här berättelsen kan inte användas med Internet Explorer-versioner tidigare än version ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Du försöker visa denna berättelse med en äldre webbläsare som inte stöds. Det kan röra sig om funktioner som inte fungerar eller andra oväntade problem. Vi rekommenderar dig att uppgradera till Internet Explorer 11 eller använda en annan webbläsare, till exempel Chrome.",
      "noViewerIE3": "I slutet av 2017 kommer denna berättelse inte längre att kunna läsas in av denna webbläsare. Då måste du använda en webbläsare som stöds om du vill kunna visa den här berättelsen.",
      "upgradeBrowser": "Uppdatera webbläsaren",
      "mapLoadingFail": "Något gick fel, kartan lästes inte in på rätt sätt.",
      "signOut": "Logga ut",
      "builderSupport1": "Byggverktyget Story Map Cascade stöds endast i ${CHROME} och ${SAFARI}. Men Cascade-berättelser som du skapar med byggverktyget kan visas i de webbläsarna samt Internet Explorer 11+ och Firefox.",
      "builderSupport2": "Byggverktyget Story Map Cascade stöds inte för iPad, men Cascade-berättelser som du skapar och delar fungerar ändå på iPad.",
      "builderSupport3": "Cascade-berättelser kan visas i Chrome, Safari, Firefox och Internet Explorer 11+, men byggverktyget Story Map Cascade stöds endast i ${CHROME} och ${SAFARI}.",
      "builderSupport4": "Cascade-berättelser kan visas i alla moderna webbläsare, men byggverktyget Story Map Cascade stöds endast i ${CHROME} och ${SAFARI}.<br><br>Om du vill att Cascade-byggverktyget ska stödja en annan webbläsare, kontaktar du ${ESRI-SUPPORT} eller ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Obs!"
    },
    "mobileWarning": {
      "message1": "Du har läst den mobila versionen av den här berättelsen. Om du vill ta del av den fullständiga versionen, med fylligare medieelement, provar du på en stationär dator.",
      "email": "Skicka en länk till berättelsen med e-post"
    },
    "cover": {
      "iosEmbedLink": "Klicka för att läsa hela berättelsen"
    },
    "media": {
      "captionPlaceholder": "Din bildtext här...",
      "loadingError": "Det här innehållet är inte tillgängligt",
      "explore": "Utforska",
      "exploreMap": "Utforska karta",
      "exploreStop": "Sluta utforska",
      "sceneNotSupported": "Tyvärr stöds inte den här 3D-kartan på din enhet.",
      "loading1": "Läser in...",
      "loading2": "Läser in kartan ...",
      "videoPlayPause": "spela/pausa",
      "videoMuteUnmute": "ljud på/av"
    },
    "headerFromCommon": {
      "defaultTagline": "En ${STORY_MAP}",
      "share": "Dela",
      "tooltipAutoplayDisabled": "Funktionen finns inte tillgänglig i autouppspelningsläge"
    },
    "shareFromCommon": {
      "copy": "Kopiera",
      "copied": "Kopierad",
      "open": "Öppna",
      "embed": "Bädda in på webbplats",
      "embedExplain": "Använd följande HTML-kod om du vill bädda in berättelsen på en webbsida.",
      "size": "Storlek (bredd/höjd):",
      "autoplayLabel": "Autouppspelningsläge",
      "autoplayExplain1": "Autouppspelningsläge kommer att köras på din berättelse med ett regelbundet intervall. Detta är idealiskt för informationskiosker och offentliga bildskärmar, men du bör vara medveten om att det i andra situationer kan göra berättelsen svårare att läsa. Funktionen stöds inte på små skärmar.",
      "autoplayExplain2": "När läget är aktivt finns det kontroller för att spela upp/pausa berättelsen och anpassa navigeringshastigheten.",
      "linksupdated": "Länkarna har uppdaterats"
    },
    "theme": {
      "lightLabel": "Ljus",
      "darkLabel": "Mörk"
    }
  }
});