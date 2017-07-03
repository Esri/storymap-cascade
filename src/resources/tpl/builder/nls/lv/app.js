/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Lietot",
      "close": "Aizvērt"
    },
    "header": {
      "sharingNotAvailable": "Šī iespēja nav pieejama, kamēr neesat stāstu kopīgojis",
      "edit": "Labot"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Grāmatzīmes",
        "logoSharing": "Logotips un koplietošana",
        "theme": "Izskats"
      },
      "bookmarks": {
        "title": "Sadaļa",
        "bookmark": "Grāmatzīme",
        "intro": "Grāmatzīmes ir saites uz galvenē rādītajām stāsta sadaļām. Ja izveidojat lakoniskas stāsta galveno sadaļu grāmatzīmes, lasītājiem ir vieglāk orientēties.",
        "sequentialDefault": "Virsraksta sadaļa (teksts nav atrasts)",
        "immersiveDefault": "Imersīvā sadaļa (teksts nav atrasts)",
        "titleDefault": "Virsraksta sadaļa (teksts nav atrasts)",
        "coverDefault": "Vāka sadaļa (teksts nav atrasts)",
        "coverAppendage": "(Vāks)"
      },
      "logoSharing": {
        "logo": "Logotips",
        "logoButton": "Izmantot ${ESRI} logotipu",
        "useOrgLogo": "Izmantot manas organizācijas logotipu",
        "useOrgLogoHelp": "Izmantot administratora izsniegto logotipu",
        "logoLink": "Logotipa saite",
        "logoUploadProgress": "Notiek logotipa augšupielāde",
        "logoUploadSuccess": "Logotipa augšupielāde izdevās",
        "logoUploadError": "Logotipa augšupielāde neizdevās, pārslēdzas atpakaļ uz ${ESRI} logotipu",
        "customHeaderText": "Devīze",
        "taglineLinkDisabledTooltip": "Ievadiet devīzi, lai aktivizētu saiti",
        "link": "Devīzes saite",
        "enableSocialSharing": "Rādīt koplietošanas pogu"
      },
      "appearance": {
        "themeLabel": "Motīvs",
        "fontLabel": "Fonti",
        "previewLabel": "Priekšskatījums",
        "fontsTitleLabel": "Virsraksts",
        "fontsBodyLabel": "Pamatteksts",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Vāks",
      "creditsLabel": "Kredītpunkti",
      "betaFeedback": "Atsauksmes",
      "betaNote": "Lūdzu, dariet mums zināmu savu viedokli par ${APP_NAME} vai pastāstiet, ja kaut kas nedarbojās tā, kā vajadzētu.",
      "notSharedNote": "Jūsu stāsts nav kopīgots; to varat redzēt tikai jūs pats.",
      "organizationWarning": "Lai šo stāstu varētu skatīt arī citi, jums jākopīgo ar organizāciju arī tā scēnas, scēnu slāņi un iedarinātās lietotnes. Kartes un karšu slāņi tiek kopīgoti automātiski.",
      "publicWarning": "Lai pārliecinātos, vai šo stāstu var skatīt citi, nepieciešams kopīgot arī tā scēnas, scēnu slāņus un iegultās lietotnes, izmantojot iestatījumu Ikviens. Kartes un karšu slāņi tiek kopīgoti automātiski.",
      "addTitleNote": "Lai saglabātu, uz vāka pievienojiet virsrakstu",
      "saveError": "Saglabājot jūsu stāstu, radās kļūda.",
      "duplicate": "Dublēt",
      "organize": "Organizēt",
      "done": "Pabeigts",
      "invite": "Būvējot stāstu, sadaļas tiks rādītas šeit...",
      "mystoriestooltip": "Cascade Builder brīdina par problēmām stāstā un palīdz tās novērst. Scēnas un iedarinātās lietotnes netiek pārbaudītas, tāpēc pārbaudiet tās manuāli."
    },
    "immersiveViewPanel": {
      "transition": "Pāreja",
      "fade": "Izgaišana",
      "fadeSlow": "Lēna izgaišana",
      "swipeVertical": "Vertikāla pārvilkšana",
      "swipeHorizontal": "Horizontāla pārvilkšana",
      "none": "Nav",
      "disabledConsecutiveSameMedia": "Nav pieejama, ja secīgi skati izmanto vienu un to pašu multivides saturu",
      "disabledTooltipMap": "Lai varētu izmantot šo pāreju, abos skatos redzamajiem slāņiem ir jāatšķiras, bet pārējām kartes īpašībām jāsakrīt",
      "disabledConsecutiveSameMap": "Nav pieejama, ja secīgi skati izmanto vienu un to pašu karti",
      "disabledNotInBeta": "Nav pieejama, ja secīgi skati izmanto vienu un to pašu karti",
      "disabledNonConsecutive": "Nav pieejama, jo ir cits šīs multivides gadījums, kas nav secīgs",
      "addMedia": "Pievienot multividi",
      "invite": "Būvējot imersīvo sadaļu, skati tiks rādīti šeit..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Izskats",
        "manage": "Pārvaldīt",
        "size": "Izmērs",
        "background": "Fons",
        "mobile": "Mobilās ierīces",
        "issues": "Problēmas",
        "fixIssues": "Problēmu novēršana"
      },
      "manage": {
        "changeMedia": "Mainīt multividi",
        "edit": "Labot",
        "editAside": "Tiek atvērts jaunā pārlūka cilnē. Lai redzētu veiktos labojumus, vispirms saglabājiet labojumus, bet pēc tam saglabājiet un atkārtoti ielādējiet šo stāstu.",
        "remove": "Noņemt"
      },
      "appearance": {
        "homeView": "Sākotnējais skats",
        "audio": "Audio",
        "on": "Ieslēgts",
        "muted": "Izslēgta skaņa",
        "volumeAside": "Video tiek atskaņots automātiski, kad lasītājs nonāk šajā skatā. Ja izslēgsiet skaņu, lasītājs to nevarēs aktivizēt.",
        "view": "Skats",
        "resetLocation": "Izvietojuma atiestatīšana",
        "resetLayers": "Slāņu atiestatīšana",
        "clearPopup": "Notīrīt uznirtošo logu",
        "interaction": "Mijiedarbība",
        "interactionDisabled": "Mijiedarbība atspējota",
        "buttonToEnable": "Poga aktivizēšanai",
        "interactionEnabled": "Mijiedarbība aktivizēta",
        "interactionAside": "*Skārienjutīgās ierīces piedāvā mijiedarbība pogu.",
        "slide": "Slaids",
        "noSlides": "Nav pieejams neviens slaids.",
        "mapExtentPrompt": "Atjaunojiet karti ar savu stāstu un, lai saglabātu izmaiņas, noklikšķiniet uz kontrolatzīmes"
      },
      "sectionAppearance": {
        "layout": "Izkārtojums",
        "theme": "Tēma"
      },
      "size": {
        "small": "Mazs",
        "medium": "Vidējs",
        "large": "Liels",
        "noCrop": "Neapgriezt garus attēlus",
        "noCropTallTooltip": "Ja gari attēli netiek apgriezti, var panākt dramatisku efektu, jo lasītājiem ir jāritina, lai skatītu visu attēlu."
      },
      "background": {
        "noCrop": "Neapgriezt",
        "mostImportantPart": "Izvēlieties vissvarīgāko punktu",
        "cropExplanationImmersive": "Attēlā izvēlieties punktu, lai redzētu, kā attēls tiks apgriezts dažādu izmēru ekrānos. Izvēlētais punkts vienmēr būs redzams. Atzīmējiet ‘Neapgriezt’, ja attēlam jābūt pilnībā redzamam.",
        "cropExplanation": "Attēlā izvēlieties punktu, lai redzētu, kā tas tiks apgriezts dažādu izmēru ekrānos. Izvēlētais punkts vienmēr būs redzams.",
        "color": "Krāsa",
        "previews": "Priekšskatījumi"
      },
      "altMedia": {
        "alternativeMedia": "Alternatīvs saturs",
        "explanation": "Noteikta veida saturs mobilajās ierīcēs netiek atbalstīts vai var nedarboties pareizi. Izmantojiet šo paneli, lai izvēlētos alternatīvu un mobilām ierīcēm piemērotāku materiālu, kas tiks rādīts šī satura vietā, kad stāsts tiks skatīts tālrunī vai planšetdatorā.",
        "changeAltImage": "Mainīt attēlu",
        "uploadAltImage": "Pievienot attēlu"
      }
    },
    "imageGallery": {
      "addImage": "Pievienot citu attēlu",
      "moveBackward": "Pārvietot atpakaļ",
      "moveForward": "Pārvietot uz priekšu"
    },
    "cover": {
      "titlePrompt": "Ievadiet stāsta virsrakstu...",
      "subtitlePrompt": "Ritiniet uz leju, lai sāktu darbu, vai, ja vēlaties, ievadiet apakšvirsrakstu",
      "mediaPlaceholder": "Pievienojiet attēlu vai video",
      "saveError": "Saglabāšana neizdevās, jo jums jau ir vienība ar šādu virsrakstu"
    },
    "credits": {
      "sectionInvite": "Pievienojiet kredītpunktu sadaļu",
      "warning": "Abi lauki ir jāaizpilda",
      "content": "Saturs...",
      "source": "Avots...",
      "linkPrompt": "Saite (nav obligāti)...",
      "introductionPlaceholder": "Ja vēlaties, ievadiet ievadtekstu kredītpunktu sadaļai..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tēma"
      },
      "panelConfig": {
        "position": "Pozīcija",
        "theme": "Tēma",
        "size": "Izmērs",
        "background": "Fons",
        "layout": "Ritināšana (visiem paneļiem)"
      }
    },
    "title": {
      "placeholder": "Ievadīt virsrakstu..."
    },
    "media": {
      "imageUpload": "Notiek attēla augšupielāde...",
      "imageUploadSuccess": "Attēla augšupielāde izdevās",
      "imageUploadFail": "Attēla augšupielāde neizdevās"
    },
    "controller": {
      "sectionOrganize": "Jūs organizējāt sadaļas",
      "immersiveOrganize": "Jūs organizējāt skatus",
      "sectionDelete": "Jūs izdzēsāt sadaļu",
      "viewDelete": "Jūs izdzēsāt skatu"
    },
    "notification": {
      "cancel": "Atcelt",
      "close": "Aizvērt",
      "undo": "Atsaukt"
    },
    "sections": {
      "sequence": "Stāsts",
      "immersive": "Iekļaujošs",
      "title": "Virsraksts"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "attēls",
        "webmap": "karte",
        "webscene": "scēna",
        "video": "video",
        "content": "saturs",
        "webpage": "tīmekļa lapa"
      },
      "placeholders": {
        "generic": "Šim saturam nevar piekļūt.",
        "deleted": "Šī vienība ir izdzēsta.",
        "inaccessible": "Šim saturam nevar piekļūt.",
        "unauthorized": "Jums nav tiesību skatīt šo saturu.",
        "unshared": "Šī vienība nav kopīgota tāpat kā jūsu stāsts.",
        "othersUnshared": "Šī vienība nav kopīgota tāpat kā jūsu stāsts.",
        "subscriptionContent": "Šajā kartē ir abonenta slānis.",
        "premiumContent": "Šajā kartē ir augstākās klases slānis.",
        "secureService": "Šajā kartē ir drošs slānis."
      },
      "contentIssues": {
        "noAltImage": "Multivides saturs mobilajās ierīces netiek atbalstīts",
        "altImageBroken": "Šī satura vienībai definētais alternatīvais attēls nav pieejams"
      },
      "contentWarnings": {
        "noAltImage": "Šī veida saturs mobilajās ierīcēs netiek atbalstīts. Norādiet alternatīvu attēlu, kas tiks parādīts, kad stāsts tiks skatīts no mobilajām ierīcēm.",
        "noAltImageAlt": "Šī veida saturs mobilajās ierīcēs netiek atbalstīts. Mobilo ierīču cilnē norādiet alternatīvu attēlu, kas tiks parādīts, kad stāsts tiks skatīts no mobilajām ierīcēm."
      },
      "mapIssues": {
        "fixButton": "Problēmu novēršana",
        "nofixButton": "Problēmas",
        "mapLabel": "Karte:",
        "summaries": {
          "unshared": "Nekopīgots saturs",
          "othersUnshared": "Cita lietotāja nekopīgots saturs",
          "subscriptionContent": "Abonenta saturs",
          "premiumContent": "Augstākā līmeņa saturs",
          "secureContent": "Drošais saturs",
          "deleted": "Izdzēsts saturs",
          "inaccessible": "Nepieejams saturs",
          "unauthorized": "Nesankcionēts saturs"
        },
        "descriptions": {
          "unshared": "Šis saturs nav kopīgots tāpat kā jūsu stāsts.",
          "othersUnshared": "Šis saturs pieder kādam citam un nav kopīgots tāpat kā jūsu stāsts.",
          "othersUnsharedAuthorized": "Šis saturs pieder kādam citam, bet jums ir atļauts to koplietot.",
          "inaccessible": "Šim saturam nevar piekļūt.",
          "deleted": "Šis saturs ir izdzēsts.",
          "unauthorized": "Jums nav tiesību skatīt šo saturu.",
          "popupFeatureLayer": "Mozaīkas slāņa uznirstošie logi nāk no elementu slāņa, kas nav kopīgots tāpat kā jūsu stāsts.",
          "subscriptionContent": "Jums abonenta saturs ir jāautorizē publiskai lietošanai.",
          "premiumContent": "Jums augstākā līmeņa saturs ir jāautorizē publiskai lietošanai.",
          "secureService": "Drošais saturs nav pieejams jūsu lasītājiem.",
          "missingItemWarning": "Ar šo slāni asociētā vienība ir izdzēsta."
        },
        "tooltips": {
          "unshared": "Noklikšķiniet, lai uzzinātu vairāk par koplietošanu.",
          "othersUnshared": "Jums nav atļauju kopīgot citiem piederošu saturu. Lūdziet, lai saturu kopīgo īpašnieks, noņemiet karti no sava stāsta vai labojiet karti, noņemot slāņus, kuri nepieder jums. Noklikšķiniet, lai uzzinātu vairāk par karšu labošanu.",
          "inaccessible": "Noņemiet šo karti no stāsta vai labojiet karti, noņemot nepieejamos slāņus. Noklikšķiniet, lai uzzinātu vairāk par karšu labošanu.",
          "deleted": "Noņemiet šo karti no stāsta vai labojiet karti, noņemot trūkstošos slāņus. Noklikšķiniet, lai uzzinātu vairāk par karšu labošanu.",
          "unauthorized": "Noņemiet šo karti no stāsta vai labojiet karti, noņemot neatļautos slāņus. Noklikšķiniet, lai uzzinātu vairāk par karšu labošanu.",
          "popupFeatureLayer": "Mozaīkā izkārtota slāņa uznirstošie logi nāk no elementu slāņa, kas nav kopīgots tāpat kā  jūsu stāsts.",
          "subscriptionContent": "Abonenta saturs nepatērē kredītpunktus. Noklikšķiniet, lai uzzinātu vairāk.",
          "premiumContent": "Ik reizi, kad kāds apskata augstākā līmeņa slāni jūsu stāstā, jūsu organizācijai tiek atskaitīti kredītpunkti. Noklikšķiniet, lai uzzinātu vairāk.",
          "secureService": "Noņemiet šo drošo saturu no stāsta vai noklikšķiniet, lai uzzinātu, kā citiem lietotājiem atļaut drošā satura lietošanu.",
          "missingItemWarning": "Šis slānis joprojām darbojas, taču tā simboli, uznirstošie logi vai nosaukums var būt mainījušies. Pārliecinieties, vai slānis parādās, kā paredzēts, vai noņemiet to no sava stāsta."
        },
        "fixButtons": {
          "share": "Kopīgot",
          "hide": "Paslēpt",
          "authorize": "Atļaut",
          "remove": "Izņemt",
          "help": "Saņemt palīdzību",
          "ignore": "Ignorēt",
          "confirm": "Apstiprināt",
          "edit": "Labot karti"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Arī vairākas kartes un slāņi tika kopīgoti.",
          "alsoSharedMaps": "Arī vairākas kartes tika kopīgotas.",
          "alsoSharedLayers": "Arī vairāki slāņi tika kopīgoti.",
          "sharedOthersContent": "Jūs izmantojāt savas administratīvās privilēģijas, lai kopīgotu kādam citam piederošu saturu."
        }
      },
      "storyHealth": {
        "healthy": "Nav problēmu",
        "notHealthy": "Novērst problēmas",
        "warnings": "Skatīt brīdinājumus"
      }
    }
  }
});