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
      "builderSupportFirefox": "Byggverktyget Story Map Cascade stödjer nu Firefox!<br><br>Stöd för att skriva Cascade-berättelser i Firefox finns för närvarande i betaversionen. Prova och rapportera eventuella problem till ${ESRI-SUPPORT} eller ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade-berättelser kan visas i alla moderna webbläsare, men byggverktyget Story Map Cascade stöds endast i ${CHROME}, ${SAFARI} och ${FIREFOX}.<br><br>Om du har behov av att Cascade-byggverktyget ska stödja en annan webbläsare kontaktar du ${ESRI-SUPPORT} eller ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Byggverktyget Story Map Cascade stöds inte för iPad, men Cascade-berättelser som du skapar och delar fungerar ändå på iPad.",
      "launchBuilder": "Lansering av byggverktyget Cascade",
      "notAgain": "Visa inte detta igen",
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
      "share": "Dela eller skriv ut",
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
    },
    "autoplay": {
      "speedFast": "Snabb",
      "speedMedium": "Medium",
      "speedSlow": "Långsamt"
    },
    "bannerNotification": {
      "learnMore": "Läs mer",
      "close": "Stäng",
      "dontShowAgain": "Visa inte det här meddelandet igen"
    },
    "embedBar": {
      "share": "Dela",
      "fullScreen": "Helskärm",
      "exitFullScreen": "Avsluta helskärmsläge",
      "enlarge": "Förstora",
      "newTab": "Öppna i en ny flik",
      "tagline": "En Story Map",
      "twitter": "Dela på Twitter",
      "facebook": "Dela på Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Vänta tills hela berättelsen har lästs in innan du skriver ut",
      "printNotes": "Om den här sidan läses in långsamt eller om vissa media inte visas kan du försöka ersätta livemedia med bilder eller skriva ut färre avsnitt. För bästa resultat kan du behöva aktivera utskrift av bakgrundselement i din webbläsares skrivarinställningar.",
      "printOptions": "Alternativ",
      "makeTextBlack": "Gör all text svart",
      "showLinks": "Visa länk-URL:er",
      "useAltMedia": "Ersätt livemedia med bilder, om sådana finns",
      "pageBreaks": "Börja varje avsnitt på en ny sida",
      "printRange": "Skriv ut en del av den här berättelsen",
      "sectionStart": "Avsnitt:",
      "go": "Verkställ",
      "reset": "Återställ till hela berättelsen",
      "print": "Skriv ut"
    },
    "page": {
      "appTagline": "Den här berättelsen skapades med ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esris Story Map Cascade",
      "readItOnline": "Läs den på webben på ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Avsnitt ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Webbplats:",
      "videoLabel": "Videoklipp:",
      "audioLabel": "Ljudspår:"
    },
    "licenseChange2018": {
      "noAccess": "Ditt konto (%USER_NAME%) har ingen licens för att öppna en Story Map som inte är tillgänglig för allmänheten. Be din organisations administratör att tilldela dig en användartyp som omfattar Story Maps eller en tilläggslicens för Essential Apps."
    }
  }
});