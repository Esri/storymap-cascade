/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Rakenda",
      "close": "Sulge"
    },
    "header": {
      "sharingNotAvailable": "See pole saadaval enne, kui lugu jagate",
      "edit": "Muuda"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Järjehoidjad",
        "logoSharing": "Logo ja jagamine",
        "theme": "Välimus"
      },
      "bookmarks": {
        "title": "Jaotis",
        "bookmark": "Järjehoidja",
        "intro": "Järjehoidjad on päises kuvatavate lugude jaotiste lingid. Loo põhijaotiste konkreetsed järjehoidjad aitavad lugejatel loost parema ülevaate saada.",
        "sequentialDefault": "Narratiivjaotis (teksti ei leitud)",
        "immersiveDefault": "Detailsem jaotis (teksti ei leitud)",
        "titleDefault": "Pealkirja jaotis (teksti ei leitud)",
        "coverDefault": "Esilehe jaotis (teksti ei leitud)",
        "coverAppendage": "(Esileht)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Kasuta logo ${ESRI}",
        "useOrgLogo": "Kasuta minu ettevõtte logo",
        "useOrgLogoHelp": "Kasuta administraatorilt saadud logo",
        "logoLink": "Logo link",
        "logoUploadProgress": "Logo üleslaadimine",
        "logoUploadSuccess": "Logo laaditi üles",
        "logoUploadError": "Logo üleslaadimine nurjus, lülitutakse tagasi logole ${ESRI}",
        "customHeaderText": "Reklaamlause",
        "taglineLinkDisabledTooltip": "Lingi lubamiseks sisestage reklaamlause",
        "link": "Reklaamlause link",
        "enableSocialSharing": "Kuva jagamise nupp"
      },
      "appearance": {
        "themeLabel": "Kujundus",
        "fontLabel": "Fondid",
        "previewLabel": "Eelvaade",
        "fontsTitleLabel": "Pealkirjad",
        "fontsBodyLabel": "Sisu",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Esileht",
      "creditsLabel": "Krediidid",
      "betaFeedback": "Tagasiside",
      "betaNote": "Andke meile teada, mida rakendusest ${APP_NAME} arvate. Samuti teavitage meid ka sellest, kui miski ootustekohaselt ei tööta.",
      "notSharedNote": "Teie lugu pole jagatud, ainult teie näete seda.",
      "organizationWarning": "Selleks et teised saaksid seda lugu vaadata, peate loole lisatud vaateid, vaatekihte ja rakendusi oma ettevõttega jagama. Kaarte ja kaardikihte jagatakse automaatselt.",
      "publicWarning": "Selleks et teised saaksid seda lugu vaadata, peate loole lisatud vaateid, vaatekihte ja rakendusi kõigiga jagama. Kaarte ja kaardikihte jagatakse automaatselt.",
      "addTitleNote": "Salvestamiseks lisage esilehe pealkiri",
      "saveError": "Teie loo salvestamisel ilmnes tõrge.",
      "duplicate": "Duplikaat",
      "organize": "Paiguta",
      "done": "Valmis",
      "invite": "Loo täiendamisel kuvatakse jaotised siin...",
      "mystoriestooltip": "Juhul kui loos esineb probleeme, annab teile nendest teada kaskaadikoostur, mis aitab teil probleemid ka lahendada. Vaateid ja lisatud rakendusi ei kontrollita, neid peate ise kontrollima."
    },
    "immersiveViewPanel": {
      "transition": "Üleminek",
      "fade": "Hajutus",
      "fadeSlow": "Aeglane hajutamine",
      "swipeVertical": "Vertikaalne rullimine",
      "swipeHorizontal": "Horisontaalne rullimine",
      "none": "Puudub",
      "disabledConsecutiveSameMedia": "See pole saadaval, kui järjestikuste vaadete jaoks kasutatakse sama meediumit",
      "disabledTooltipMap": "Selle ülemineku kasutamiseks peavad mõlema vaate nähtavad kihid olema erinevad ning muud kaardiatribuudid olema samad",
      "disabledConsecutiveSameMap": "See pole saadaval, kui järjestikuste vaadete jaoks kasutatakse sama kaarti",
      "disabledNotInBeta": "See pole saadaval, kui järjestikuste vaadete jaoks kasutatakse sama kaarti",
      "disabledNonConsecutive": "See pole saadaval, sest parajasti töötab veel üks sama meediumi eksemplar, mis pole järjestikune",
      "addMedia": "Lisa meedium",
      "invite": "Detailse jaotise täiendamisel kuvatakse vaated siia..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Välimus",
        "manage": "Halda",
        "size": "Suurus",
        "background": "Taust",
        "mobile": "Mobiil",
        "issues": "Probleemid",
        "fixIssues": "Lahenda probleeme"
      },
      "manage": {
        "changeMedia": "Vaheta meedia",
        "edit": "Muuda",
        "editAside": "See lugu avatakse uues brauseriaknas. Pärast muudatuste salvestamist salvestage lugu ja laadige see muudatuste nägemiseks uuesti.",
        "remove": "Eemalda"
      },
      "appearance": {
        "homeView": "Algvaade",
        "audio": "Heli",
        "on": "Sees",
        "muted": "Vaigistatud",
        "volumeAside": "Selles vaates esitatakse lugejale video automaatselt. Juhul kui te heli vaigistate, ei saa lugeja seda sisse lülitada.",
        "view": "Vaatamine",
        "resetLocation": "Lähtesta asukoht",
        "resetLayers": "Lähtesta kihid",
        "clearPopup": "Tühjenda hüpikaken",
        "interaction": "Interaktsioon",
        "interactionDisabled": "Interaktsioon on keelatud",
        "buttonToEnable": "Lubamise nupp",
        "interactionEnabled": "Interaktsioon on lubatud",
        "interactionAside": "*Interaktsiooninupp kuvatakse puuteekraaniga seadmete ekraanidel.",
        "slide": "Slaid",
        "noSlides": "Ühtegi slaidi pole saadaval.",
        "mapExtentPrompt": "Oma loo jutustamiseks värskenda kaarti ning muudatuste salvestamiseks klõpsake linnukest"
      },
      "sectionAppearance": {
        "layout": "Paigutus",
        "theme": "Kujundus"
      },
      "size": {
        "small": "Väike",
        "medium": "Keskmine",
        "large": "Suur",
        "noCrop": "Ära kärbi kõrgeid pilte",
        "noCropTallTooltip": "Kui jätate kõrge pildi kärpimata, jätab see lugejatele dramaatilise mulje, kui nad peavad kogu pildi nägemiseks alla kerima."
      },
      "background": {
        "noCrop": "Ära kärbi",
        "mostImportantPart": "Vali põhipunkt",
        "cropExplanationImmersive": "Selleks et valida, kuidas pilt eri ekraanisuuruste korral kärbitakse, valige pildil punkt. Valitud punkt on alati nähtav. Juhul, kui pilt peab täielikult nähtav olema, valige märkeruut „Ära kärbi”.",
        "cropExplanation": "Selleks et valida, kuidas pilt eri ekraanisuuruste korral kärbitakse, valige pildil punkt. Valitud punkt on alati nähtav.",
        "color": "Värv",
        "previews": "Eelvaated"
      },
      "altMedia": {
        "alternativeMedia": "Alternatiivne meedia",
        "explanation": "Teatud meedia ei pruugi olla toetatud või ei pruugi töötada hästi mobiilsideseadmetes. Kasutage seda paneeli alternatiivsete, mobiilsideseadmetele paremini sobivate üksuste valimiseks, mida näidatakse selle meedia asemel, kui teie lugu vaadatakse mobiiltelefonis või tahvelarvutis.",
        "changeAltImage": "Muuda pilt",
        "uploadAltImage": "Lisa pilt"
      }
    },
    "imageGallery": {
      "addImage": "Lisa teine pilt",
      "moveBackward": "Liigu tagasi",
      "moveForward": "Liigu edasi"
    },
    "cover": {
      "titlePrompt": "Sisestage loo pealkiri...",
      "subtitlePrompt": "Alustamiseks liikuge kerides allapoole või lisage soovi korral alapealkiri",
      "mediaPlaceholder": "Lisage pilt või video",
      "saveError": "Salvestamine nurjus, sest selle pealkirjaga üksus on juba olemas"
    },
    "credits": {
      "sectionInvite": "Lisa krediitide jaotis",
      "warning": "Täita tuleb mõlemad väljad",
      "content": "Sisu...",
      "source": "Allikas...",
      "linkPrompt": "Valikuline link...",
      "introductionPlaceholder": "Lisage krediitide jaotisse valikuline tutvustus..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Kujundus"
      },
      "panelConfig": {
        "position": "Paigutus",
        "theme": "Kujundus",
        "size": "Suurus",
        "background": "Taust",
        "layout": "Kerimine (kõikide paneelide korral)"
      }
    },
    "title": {
      "placeholder": "Sisesta pealkiri..."
    },
    "media": {
      "imageUpload": "Pilti laaditakse üles",
      "imageUploadSuccess": "Pilt laaditi üles",
      "imageUploadFail": "Pildi üleslaadimine nurjus"
    },
    "controller": {
      "sectionOrganize": "Korraldasite jaotised",
      "immersiveOrganize": "Korraldasite vaated",
      "sectionDelete": "Kustutasite jaotise",
      "viewDelete": "Kustutasite vaate"
    },
    "notification": {
      "cancel": "Loobu",
      "close": "Sule",
      "undo": "Ennista"
    },
    "sections": {
      "sequence": "Narratiiv",
      "immersive": "Detailne",
      "title": "Pealkiri"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "pilt",
        "webmap": "kaart",
        "webscene": "stseen",
        "video": "videomaterjalide",
        "content": "sisu",
        "webpage": "veebileht"
      },
      "placeholders": {
        "generic": "See sisu pole kättesaadav.",
        "deleted": "See üksus on kustutatud.",
        "inaccessible": "See sisu pole kättesaadav.",
        "unauthorized": "Teil puudub õigus seda sisu vaadata.",
        "unshared": "Seda üksust jagatakse teie looga võrreldes muul viisil.",
        "othersUnshared": "Seda üksust jagatakse teie looga võrreldes muul viisil.",
        "subscriptionContent": "See kaart sisaldab tellijasisu kihti.",
        "premiumContent": "See kaart sisaldab kvaliteetsisu kihti.",
        "secureService": "See kaart sisaldab kaitstud kihti."
      },
      "contentIssues": {
        "noAltImage": "Meedia pole mobiilsidega seadmetes toetatud",
        "altImageBroken": "Selle meediaüksuse jaoks määratud alternatiivne pilt pole ligipääsetav"
      },
      "contentWarnings": {
        "noAltImage": "Seda tüüpi meedia pole mobiilsidega seadmetes toetatud. Määrake alternatiivne pilt, mida näidatakse, kui lugu kuvatakse mobiilsidega seadmetes.",
        "noAltImageAlt": "Seda tüüpi meedia pole mobiilsidega seadmetes toetatud. Määrake vahekaardil Mobiil alternatiivne pilt, mida näidatakse, kui lugu kuvatakse mobiilsidega seadmetes."
      },
      "mapIssues": {
        "fixButton": "Teemade lahendamine",
        "nofixButton": "Teemad",
        "mapLabel": "Kaart:",
        "summaries": {
          "unshared": "Mittejagatud sisu",
          "othersUnshared": "Kellegi teise mittejagatud sisu",
          "subscriptionContent": "Tellija sisu",
          "premiumContent": "Kvaliteetsisu",
          "secureContent": "Kaitstud sisu",
          "deleted": "Kustutatud sisu",
          "inaccessible": "Kättesaamatu sisu",
          "unauthorized": "Volitamata sisu"
        },
        "descriptions": {
          "unshared": "Seda sisu jagatakse teie looga võrreldes muul viisil.",
          "othersUnshared": "Selle sisu omanik on muu isik ning seda sisu jagatakse teie looga võrreldes muul viisil.",
          "othersUnsharedAuthorized": "Selle sisu omanik on muu isik, kuid teil on õigus seda sisu jagada.",
          "inaccessible": "See sisu pole kättesaadav.",
          "deleted": "See sisu on kustutatud.",
          "unauthorized": "Teil puudub õigus seda sisu vaadata.",
          "popupFeatureLayer": "Pildiüksusega kihi hüpikaknad pärinevad objektikihist, mida jagatakse teie looga võrreldes muul viisil.",
          "subscriptionContent": "Tellijasisu avalikuks kasutamiseks peate andma loa.",
          "premiumContent": "Kvaliteetsisu avalikuks kasutamiseks peate andma loa.",
          "secureService": "Kaitstud sisu pole lugejatele kättesaadav.",
          "missingItemWarning": "Selle kihiga seotud üksus on kustutatud."
        },
        "tooltips": {
          "unshared": "Klõpsake jagamise kohta lisateabe saamiseks.",
          "othersUnshared": "Teil puudub õigus teistele isikutele kuuluva sisu jagamiseks. Paluge sisu omanikul sisu jagada, eemaldage kaart loost või muutke kaarti, et eemaldada teile mittekuuluvad kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "inaccessible": "Eemaldage see kaart loost või muutke seda, et eemaldada kättesaamatud kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "deleted": "Eemaldage see kaart loost või muutke seda, et eemaldada puuduolevad kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "unauthorized": "Eemaldage see kaart loost või muutke seda, et eemaldada lubamatud kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "popupFeatureLayer": "Pildiüksusega kihi hüpikaknad pärinevad objektikihist, mida jagatakse teie looga võrreldes muul viisil.",
          "subscriptionContent": "Tellijasisu ei kasuta krediite. Klõpsake lisateabe saamiseks.",
          "premiumContent": "Krediidid kantakse teie ettevõttele üle iga kord, kui keegi vaatab teie loos kvaliteetsisu. Klõpsake lisateabe saamiseks.",
          "secureService": "Eemaldage loost kaitstud sisu või klõpsake, et saada teavet selle kohta, kuidas kaitstud sisu teistele isikutele kasutamiseks lubada.",
          "missingItemWarning": "Kiht toimib, kuid muutunud võivad olla selle sümbolid ja hüpikaknad ning muutunud võib olla ka selle nimi. Kinnitage, et kiht kuvatakse soovitud kujul või eemaldage kiht loost."
        },
        "fixButtons": {
          "share": "Jaga",
          "hide": "Peida",
          "authorize": "Luba",
          "remove": "Eemalda",
          "help": "Abi otsimine",
          "ignore": "Eira",
          "confirm": "Kinnita",
          "edit": "Muuda kaarti"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Jagati ka mõningaid kaarte ja kihte.",
          "alsoSharedMaps": "Jagati ka mõningaid kaarte.",
          "alsoSharedLayers": "Jagati ka mõningaid kihte.",
          "sharedOthersContent": "Kasutasite oma administraatoriõigusi kellegi teise sisu jagamiseks."
        }
      },
      "storyHealth": {
        "healthy": "Probleeme pole",
        "notHealthy": "Lahenda probleeme",
        "warnings": "Kuva hoiatused"
      }
    }
  }
});