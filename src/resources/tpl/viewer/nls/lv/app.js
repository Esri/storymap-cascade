/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Saglabāt",
      "close": "Aizvērt"
    },
    "errors": {
      "noConfigName": "Nav norādīta neviena konfigurācija šeit: index.html > configOptions.story",
      "configFormatError": "Norādīto konfigurāciju nevarēja ielādēt JSON sintakses kļūdas dēļ.",
      "configNotFound": "Norādītā konfigurācija nav atrasta vai to nevarēja ielādēt JSON sintakses kļūdas dēļ.",
      "boxTitle": "Radusies kļūda",
      "servedFromFile": "Lietotnei ir jāpiekļūst caur tīmekļa serveri. Plašāku informāciju skatiet šeit: ${USER_GUIDE}.",
      "userGuide": "lietotāja rokasgrāmata",
      "invalidConfig": "Nederīga konfigurācija",
      "invalidConfigNoApp": "Tīmekļa kartēšanas lietotnes identifikators nav norādīts šeit: index.html.",
      "invalidConfigNoAppDev": "URL parametros nav norādīts tīmekļa kartēšanas lietotnes identifikators (?appid=). Izstrādes režīmā lapā index.html ir ignorēta appid konfigurācija.",
      "unspecifiedConfigOwner": "Pilnvarotais īpašnieks nav konfigurēts.",
      "invalidConfigOwner": "Stāsta īpašnieks nav pilnvarots.",
      "invalidConfignoOAuth": "Šim stāstam ir nepieciešama autentifikācija; konfigurējiet ArcGIS OAuth ID šeit: index.html vai stāstu norādiet kā publisku.",
      "invalidApp": "Šo stāstu nevar ielādēt.",
      "appLoadingFail": "Radusies kāda kļūda: nepareizi ielādējās {TPL_NAME}.",
      "notConfiguredDesktop": "Stāsts vēl nav konfigurēts.",
      "notConfiguredMobile": "{TPL_NAME} veidotājs nav atbalstīts šim displeja izmēram. Ja iespējams, mainiet pārlūka izmērus tā, lai piekļūtu veidotājam, vai veidojiet savu stāstu ierīcē ar lielāku ekrānu.",
      "notConfiguredMobile2": "Lai izmantotu {TPL_NAME} veidotāju, rotējiet ierīci uz ainavas orientāciju.",
      "notAuthorized": "Jūs neesat pilnvarots piekļūt šim stāstam",
      "notAuthorizedBuilder": "Jums nav atļauts izmantot {TPL_NAME} veidotāju.",
      "noViewerIE": "Šis stāsts netiek atbalstīts Internet Explorer versijās, kas ir vecākas par ${VERSION}. ${UPGRADE}",
      "noViewerIE2": "Jūs mēģināt skatīt šo stāstu, izmantojot vecāku, neatbalstītu pārlūku. Var gadīties, ka nedarbojas kāds elements vai rodas citas neparedzētas problēmas. Iesakām jaunināt uz Internet Explorer 11 vai izmantot citu pārlūku, piemēram, Chrome.",
      "noViewerIE3": "No 2017. gada beigām šo stāstu vairs nevar ielādēt šajā pārlūkā. Pēc tam šī stāsta skatīšanai ir jāizmanto atbalstīts pārlūks.",
      "upgradeBrowser": "Atjaunojiet savu pārlūku.",
      "mapLoadingFail": "Radās kļūda — karte netika ielādēta pareizi.",
      "signOut": "Izrakstīties",
      "builderSupportFirefox": "Kartes stāsta Cascade (kaskādes) veidotājs tagad atbalsta Firefox!<br><br>Kaskādes stāstu izveide pārlūkā Firefox pašlaik ir pieejama beta versijā. Izmēģiniet to un ziņojiet par problēmām ${ESRI-SUPPORT} vai ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Kaskādes stāstus var skatīt jebkurā modernā tīmekļa pārlūkprogrammā, bet Kartes stāsta Cascade veidotāju atbalsta tikai ${CHROME}, ${SAFARI} un ${FIREFOX}.<br><br>Ja jums ir nepieciešams Cascade veidotājs atbalstam citā pārlūkprogrammā, sazinieties ar ${ESRI-SUPPORT} vai ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Kartes stāsta Cascade (kaskāde) veidotāju neatbalsta iPad, bet iPad ierīcēs darbosies stāsti, kurus izveidojat un kopīgojat.",
      "launchBuilder": "Palaist Cascade veidotāju",
      "notAgain": "Vairs nerādīt šo saturu",
      "sorry": "Uzmanību!",
      "nonOwnerOrgUrl": "%TPL_NAME%, kam mēģināt piekļūt, nav no jūsu norādītā vietrāža (URL).",
      "nonOwnerOrgProceedToGeneric": "Turpināt ar %HREF%",
      "advanced": "Uzlabots"
    },
    "mobileWarning": {
      "message1": "Jūs skatījāt šī stāsta mobilo versiju. Lai skatītu pilno versiju ar bagātīgāku multivides satura klāstu, atveriet to datora.",
      "email": "Nosūtīt e-pastā saiti uz šo stāstu"
    },
    "cover": {
      "iosEmbedLink": "Pieskarieties, lai izlasītu visu stāstu"
    },
    "media": {
      "captionPlaceholder": "Vieta parakstam...",
      "loadingError": "Diemžēl šim saturam nevar piekļūt",
      "explore": "Izpētīt",
      "exploreMap": "Izpētīt karti",
      "exploreStop": "Apturēt izpēti",
      "sceneNotSupported": "Diemžēl šī 3D karte netiek atbalstīta jūsu ierīcē.",
      "loading1": "Ielādē...",
      "loading2": "Notiek kartes ielāde...",
      "videoPlayPause": "darbināt/pauze",
      "videoMuteUnmute": "izslēgt skaņu/ieslēgt skaņu"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Koplietot vai drukāt",
      "tooltipAutoplayDisabled": "Nav pieejams automātiskās demonstrēšanas režīmā"
    },
    "shareFromCommon": {
      "copy": "Kopēt",
      "copied": "Nokopēts",
      "open": "Atvērt",
      "embed": "Iedarināt tīmekļa lapā",
      "embedExplain": "Lai iedarinātu stāstu tīmekļa lapā, izmantojiet šo HTML kodu.",
      "size": "Izmērs (platums/augstums):",
      "autoplayLabel": "Automātiskās demonstrēšanas režīms",
      "autoplayExplain1": "Automātiskās demonstrēšanas režīms jūsu stāstu parādīs ar regulāriem intervāliem. Tas lieliski noder rādīšanai stendos vai publiskās demonstrēšanas monitorā, bet ņemiet vērā, ka citās situācijās šis režīms var padarīt stāstu grūtāk lasāmu. Šī funkcija netiek atbalstīta maza izmēra displejos.",
      "autoplayExplain2": "Pēc šī režīma aktivizēšanas ir pieejamas vadīklas stāsta demonstrēšanai/pauzēšanai un navigācijas ātruma regulēšanai.",
      "linksupdated": "Saites ir atjaunotas."
    },
    "theme": {
      "lightLabel": "Gaišs",
      "darkLabel": "Tumšs"
    },
    "autoplay": {
      "speedFast": "Ātri",
      "speedMedium": "Vidēji",
      "speedSlow": "Lēni"
    },
    "bannerNotification": {
      "learnMore": "Uzzināt vairāk",
      "close": "Aizvērt",
      "dontShowAgain": "Nerādīt šo ziņojumu vēlreiz"
    },
    "embedBar": {
      "share": "Kopīgošana",
      "fullScreen": "Pilnekrāna režīms",
      "exitFullScreen": "Iziet no pilnekrāna režīma",
      "enlarge": "Palielināt",
      "newTab": "Atvēriet jaunā cilnē",
      "tagline": "Kartes stāsts",
      "twitter": "Kopīgot Twitter",
      "facebook": "Kopīgot Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Pirms drukāšanas uzgaidiet, līdz tiks ielādēts viss stāsts",
      "printNotes": "Ja šīs lapas ielāde ir lēna vai dažas multivides vienības netiek parādītas, mēģiniet aizstāt tiešsaistes multividi ar attēliem vai drukāt mazāku sadaļu diapazonu. Lai iegūtu labākos rezultātus, iespējams, sava pārlūka drukāšanas iestatījumos ir jāaktivizē fona elementu drukāšana.",
      "printOptions": "Iespējas",
      "makeTextBlack": "Iekrāsot visu tekstu melnu",
      "showLinks": "Rādīt saišu vietrāžus URL",
      "useAltMedia": "Aizstāt tiešsaistes multividi ar attēliem (ja tie ir pieejami)",
      "pageBreaks": "Sāciet katru sadaļu jaunā lapā",
      "printRange": "Izdrukāt šī stāsta daļu",
      "sectionStart": "Sadaļas:",
      "go": "Lietot",
      "reset": "Atiestatīt uz pilno stāstu",
      "print": "Drukāt"
    },
    "page": {
      "appTagline": "Šis stāsts tika izveidots, izmantojot ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esri Kartes stāsta Kaskāde",
      "readItOnline": "Izlasiet to tīmekļa vietnē ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "${SECTION_NUMBER}. sadaļa"
    },
    "media": {
      "websiteLabel": "Tīmekļa vietne:",
      "videoLabel": "Video:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Jūsu kontam (%USER_NAME%) nav atļaujas atvērt kartes stāstu, kas nav publisks. Pieprasiet savas organizācijas administratoram piešķirt jums lietotāja veidu, kurā iekļauta Story Maps vai papildinājumlietotņu Essential Apps licence."
    }
  }
});