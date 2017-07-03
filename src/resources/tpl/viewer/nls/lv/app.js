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
      "invalidConfigNoApp": "Web kartēšanas lietotnes identifikators nav norādīts šeit: index.html.",
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
      "noViewerIE3": "No 2017. gada beigām šo stāstu vairs nevarēs ielādēt šajā pārlūkā. Pēc tam šī stāsta skatīšanai ir jāizmanto atbalstīts pārlūks.",
      "upgradeBrowser": "Atjaunojiet savu pārlūku.",
      "mapLoadingFail": "Radās kļūda — karte netika ielādēta pareizi.",
      "signOut": "Izrakstīties",
      "builderSupport1": "Story Map Cascade veidotāju atbalsta tikai pārlūkā ${CHROME} un ${SAFARI}. Taču Cascade stāstus, ko izveido ar veidotāju, var skatīt arī Internet Explorer 11+ un Firefox.",
      "builderSupport2": "Story Map Cascade veidotāju neatbalsta iPad, bet iPad ierīcēs darbosies stāsti, kurus izveidojat un kopīgojat.",
      "builderSupport3": "Cascade stāstus var skatīt pārlūkā Chrome, Safari, Firefox un Internet Explorer 11+, bet Story Map Cascade veidotāju atbalsta tikai ${CHROME} un ${SAFARI}.",
      "builderSupport4": "Cascade stāstus var skatīt jebkurā mūsdienīgā pārlūkā, bet Story Map Cascade veidotāju atbalsta tikai ${CHROME} un ${SAFARI}.<br><br>Ja nepieciešams, lai Cascade veidotājs tiktu atbalstīts citā pārlūkā, sazinieties ar ${ESRI-SUPPORT} vai ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Uzmanību!"
    },
    "mobileWarning": {
      "message1": "Jūs lasījāt šī stāsta mobilo versiju. Lai skatītu pilno versiju ar bagātīgāku multivides satura klāstu, atveriet to galddatorā.",
      "email": "Nosūtīt e-pastā saiti uz šo stāstu"
    },
    "cover": {
      "iosEmbedLink": "Pieskarieties, lai izlasītu visu rakstu"
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
      "share": "Kopīgot",
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
    }
  }
});