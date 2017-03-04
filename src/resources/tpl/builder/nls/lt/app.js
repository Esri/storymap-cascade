/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Taikyti",
      "close": "Uždaryti"
    },
    "header": {
      "sharingNotAvailable": "Kol pasakojimas nėra bendrinamas, ši funkcija negalima",
      "edit": "Redaguoti"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Žymės",
        "logoSharing": "Logotipas ir bendrinimas"
      },
      "bookmarks": {
        "title": "Skiltis",
        "bookmark": "Žymos",
        "intro": "Žymos – tai nuorodos į pasakojimų dalis, rodomas antraštėje. Sukūrus pagrindinių pasakojimo dalių žymas, skaitytojams bus lengviau orientuotis.",
        "sequentialDefault": "Slenkanti skiltis (tekstas nerastas)",
        "immersiveDefault": "Fiksuota skiltis (tekstas nerastas)",
        "titleDefault": "Pavadinimas (tekstas nerastas)",
        "coverDefault": "Viršelis (tekstas nerastas)",
        "coverAppendage": "(Viršelis)"
      },
      "logoSharing": {
        "logo": "Logotipas",
        "logoButton": "Naudoti ${ESRI} logotipą",
        "useOrgLogo": "Naudoti mano organizacijos logotipą",
        "useOrgLogoHelp": "Naudoti jūsų administratoriaus pateiktą logotipą",
        "logoLink": "Logotipo nuoroda",
        "logoUploadProgress": "Įkeliamas logotipas",
        "logoUploadSuccess": "Logotipas įkeltas sėkmingai",
        "logoUploadError": "Logotipo įkelti nepavyko, grąžinamas ${ESRI} logotipas",
        "customHeaderText": "Paantraštė",
        "taglineLinkDisabledTooltip": "Norėdami suaktyvinti nuorodą, įveskite paantraštę",
        "link": "Paantraštės nuoroda",
        "enableSocialSharing": "Rodyti bendrinimo mygtuką"
      }
    },
    "builderPanel": {
      "coverLabel": "Viršelis",
      "creditsLabel": "Kreditai",
      "betaFeedback": "Atsiliepimai",
      "betaNote": "Praneškite mums, ką manote apie ${APP_NAME}, arba jei kas nors neveikia taip, kaip turėtų.",
      "notSharedNote": "Jūsų pasakojimas nebendrinamas, jį galite matyti tik jūs",
      "organizationWarning": "Kad šį pasakojimą galėtų matyti kiti, turite viešai bendrinti jo scenas, scenų sluoksnius ir įkeltas aplikacijas su savo organizacija. Žemėlapiai ir žemėlapių sluoksniai bendrinami automatiškai.",
      "publicWarning": "Kad šį pasakojimą galėtų matyti kiti, turite viešai bendrinti ir jo scenas, scenų sluoksnius ir įkeltas aplikacijas. Žemėlapiai ir žemėlapių sluoksniai bendrinami automatiškai.",
      "addTitleNote": "Norėdami įrašyti, viršelyje nurodykite pavadinimą",
      "saveError": "Įrašant jūsų pasakojimą, įvyko klaida.",
      "duplicate": "Dubliuoti",
      "organize": "Tvarkyti",
      "done": "Atlikta",
      "invite": "Kuriant pasakojimą, jo dalys bus rodomos čia...",
      "mystoriestooltip": "Besitęsiančių žemėlapių pasakojimų kūrimo priemonė įspėja apie aptinkamas klaidas ir padeda jas ištaisyti. Scenos ir įkeltos aplikacijos netikrinamos, todėl patikrinkite jas rankiniu būdu."
    },
    "immersiveViewPanel": {
      "transition": "Perėjimas",
      "fade": "Išnykimas",
      "fadeSlow": "Lėtas išnykimas",
      "swipeVertical": "Perbraukimas vertikaliai",
      "swipeHorizontal": "Perbraukimas horizontaliai",
      "none": "Nėra",
      "disabledConsecutiveSameMedia": "Neveikia, kai nuosekliuose vaizduose naudojama ta pati medija",
      "disabledTooltipMap": "Norint naudoti šį perėjimą, abiejų vaizdų matomi sluoksniai turi būti skirtingi, o kitos žemėlapio ypatybės – vienodos",
      "disabledConsecutiveSameMap": "Neveikia, kai nuosekliuose vaizduose naudojamas tas pats žemėlapis",
      "disabledNotInBeta": "Neveikia, kai nuosekliuose vaizduose naudojamas tas pats žemėlapis",
      "disabledNonConsecutive": "Neveikia, nes yra kitas šios medijos variantas, kuris nėra nuoseklus",
      "addMedia": "Pridėti mediją",
      "invite": "Kuriant pasakojimo fiksuotą dalį, vaizdai bus rodomi čia..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Išvaizda",
        "manage": "Valdyti",
        "size": "Dydis",
        "background": "Fonas",
        "issues": "Klaidos",
        "fixIssues": "Taisyti klaidas"
      },
      "manage": {
        "changeMedia": "Pakeisti mediją",
        "edit": "Redaguoti",
        "editAside": "Atsidaro naujame naršyklės skirtuke. Norėdami matyti pakeitimus, pasakojimą įrašykite ir įkelkite iš naujo.",
        "remove": "Panaikinti"
      },
      "appearance": {
        "homeView": "Pradinis vaizdas",
        "audio": "Garsas",
        "on": "Įjungta",
        "muted": "Nutildyta",
        "volumeAside": "Skaitytojui priėjus prie vaizdo įrašo, jis bus rodomas automatiškai. Jei nutildysite garsą, skaitytojas negalės jo įjungti.",
        "view": "Peržiūrėti",
        "resetLocation": "Iš naujo nustatyti vietą",
        "resetLayers": "Iš naujo nustatyti sluoksnius",
        "clearPopup": "Išjungti iškylančius langus",
        "interaction": "Sąveika",
        "interactionDisabled": "Sąveika išjungta",
        "buttonToEnable": "Įjungimo mygtukas",
        "interactionEnabled": "Sąveika įjungta",
        "interactionAside": "*Liečiamuosiuose įrenginiuose bus rodomas sąveikos mygtukas.",
        "slide": "Skaidrė",
        "noSlides": "Skaidrių nėra.",
        "mapExtentPrompt": "Atnaujinkite savo žemėlapio pasakojimą, spustelėkite varnelę, kad įrašytumėte pakeitimus"
      },
      "sectionAppearance": {
        "layout": "Maketas",
        "theme": "Tema"
      },
      "size": {
        "small": "Mažas",
        "medium": "Vidutiniškas",
        "large": "Didelis"
      },
      "background": {
        "noCrop": "Neapkarpyti atvaizdo",
        "mostImportantPart": "Pasirinkite vietą",
        "cropExplanationImmersive": "Pasirinkite vietą atvaizde, pagal kurią jis bus apkarpomas skirtingo dydžio ekranuose. Jūsų pasirinkta vieta bus visada matoma. Jei reikia, kad būtų matoma visa medija, pažymėkite toliau pateiktą langelį.",
        "cropExplanation": "Pasirinkite vietą atvaizde, pagal kurią jis bus apkarpomas skirtingo dydžio ekranuose. Jūsų pasirinkta vieta bus visada matoma.",
        "color": "Spalva",
        "previews": "Peržiūros"
      }
    },
    "imageGallery": {
      "addImage": "Pridėti kitą vaizdą",
      "moveBackward": "Judėti atgal",
      "moveForward": "Judėti pirmyn"
    },
    "cover": {
      "titlePrompt": "Įveskite pasakojimo pavadinimą...",
      "subtitlePrompt": "Norėdami pradėti, paslinkite žemyn arba įveskite paantraštę",
      "mediaPlaceholder": "Pridėkite atvaizdą arba vaizdo įrašą",
      "saveError": "Įrašyti nepavyko, jau yra elementas tokiu pavadinimu"
    },
    "credits": {
      "sectionInvite": "Pridėti autorinių teisių skiltį",
      "warning": "Būtina užpildyti abu laukus",
      "content": "Turinys...",
      "source": "Šaltinis...",
      "linkPrompt": "Pasirinktinė nuoroda...",
      "introductionPlaceholder": "Įveskite autorinių teisių skilties pradžią..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Padėtis",
        "theme": "Tema",
        "size": "Dydis",
        "background": "Fonas",
        "layout": "Slinkimas"
      }
    },
    "title": {
      "placeholder": "Įveskite antraštę..."
    },
    "media": {
      "imageUpload": "Įkeliamas atvaizdas...",
      "imageUploadSuccess": "Atvaizdas įkeltas sėkmingai",
      "imageUploadFail": "Atvaizdo įkelti nepavyko"
    },
    "controller": {
      "sectionOrganize": "Jūs surikiavote skiltis",
      "immersiveOrganize": "Jūs surikiavote atvaizdus",
      "sectionDelete": "Jūs panaikinote skiltį",
      "viewDelete": "Jūs panaikinote atvaizdą"
    },
    "notification": {
      "cancel": "Atšaukti",
      "close": "Uždaryti",
      "undo": "Atšaukti"
    },
    "sections": {
      "sequence": "Pasakojimo skiltis",
      "immersive": "Fiksuota skiltis",
      "title": "Pavadinimas"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "atvaizdas",
        "webmap": "žemėlapis",
        "webscene": "scena",
        "video": "vaizdo įrašas",
        "content": "turinys",
        "webpage": "tinklalapis"
      },
      "placeholders": {
        "generic": "Šis turinys nepasiekiamas",
        "deleted": "Šis ${media-type} panaikintas.",
        "inaccessible": "Šis ${media-type} nepasiekiamas.",
        "unauthorized": "Jūs neturite teisių peržiūrėti ${media-type}.",
        "unshared": "${media-type} nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
        "othersUnshared": "${media-type} nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
        "subscriptionContent": "${media-type} yra prenumeratoriaus sluoksnis.",
        "premiumContent": "${media-type} yra premium sluoksnis.",
        "secureService": "${media-type} yra saugus sluoksnis."
      },
      "mapIssues": {
        "fixButton": "Taisyti klaidas",
        "nofixButton": "Klaidos",
        "mapLabel": "Žemėlapis:",
        "summaries": {
          "unshared": "Nebendrinamas turinys",
          "othersUnshared": "Kažkas kitas panaikino turinio bendrinimą",
          "subscriptionContent": "Prenumeratoriaus turinys",
          "premiumContent": "Premium turinys",
          "secureContent": "Saugus turinys",
          "deleted": "Panaikintas turinys",
          "inaccessible": "Nepasiekiamas turinys",
          "unauthorized": "Neleistinas turinys"
        },
        "descriptions": {
          "unshared": "Šis turinys nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
          "othersUnshared": "Šis turinys priklauso kažkam kitam ir nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
          "othersUnsharedAuthorized": "Šis turinys priklauso kažkam kitam, tačiau jūs suteikėte teises jį bendrinti.",
          "inaccessible": "Šis turinys nepasiekiamas",
          "deleted": "Šis turinys buvo panaikintas.",
          "unauthorized": "Jūs neturite teisių peržiūrėti šį turinį.",
          "popupFeatureLayer": "Išklotinių sluoksnio iššokantys langai yra iš elementų sluoksnio, kuris nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
          "subscriptionContent": "Kad prenumeratoriaus turinys būtų rodomas viešai, turite suteikti teises.",
          "premiumContent": "Kad premium turinys būtų rodomas viešai, turite suteikti teises.",
          "secureService": "Saugus turinys jūsų skaitytojams nėra rodomas.",
          "missingItemWarning": "Su šiuo sluoksniu susijęs elementas buvo panaikintas."
        },
        "tooltips": {
          "unshared": "Spustelėkite, jei apie bendrinimą norite sužinoti daugiau.",
          "othersUnshared": "Jūs neturite leidimo bendrinti kitiems priklausantį turinį. Paprašykite savininko jį bendrinti ir pašalinkite žemėlapį iš savo pasakojimo arba pakoreguokite žemėlapį pašalindami sluoksnius, kurie nėra jūsų. Spustelėkite, jei apie žemėlapių koregavimą norite sužinoti daugiau.",
          "inaccessible": "Pašalinkite šį žemėlapį iš savo pasakojimo arba pakoreguokite jį pašalindami nepasiekiamus sluoksnius. Spustelėkite, jei apie žemėlapių koregavimą norite sužinoti daugiau.",
          "deleted": "Pašalinkite šį žemėlapį iš savo pasakojimo arba pakoreguokite jį pašalindami trūkstamus sluoksnius. Spustelėkite, jei apie žemėlapių koregavimą norite sužinoti daugiau.",
          "unauthorized": "Pašalinkite šį žemėlapį iš savo pasakojimo arba pakoreguokite jį pašalindami neleistinus sluoksnius. Spustelėkite, jei apie žemėlapių koregavimą norite sužinoti daugiau.",
          "popupFeatureLayer": "Išklotinių sluoksnio iššokantys langai yra iš elementų sluoksnio, kuris nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
          "subscriptionContent": "Prenumeratoriaus turinys nenaudoja kreditų. Spustelėkite, jei norite sužinoti daugiau.",
          "premiumContent": "Kreditai bus nuskaitomi iš jūsų organizacijos kaskart, kai kas nors peržiūrės jūsų pasakojimo premium sluoksnį. Spustelėkite, jei norite sužinoti daugiau.",
          "secureService": "Pašalinkite saugų turinį iš savo pasakojimo arba spustelėkite, jei norite sužinoti, kaip galite kitiems suteikti teisę naudoti saugų turinį.",
          "missingItemWarning": "Šis sluoksnis vis dar veikia, tačiau jo simboliai, iššokantys langai arba pavadinimas galėjo būti pakeisti. Patvirtinkite, kad sluoksnis rodomas taip, kaip turėtų, arba pašalinkite jį iš savo pasakojimo."
        },
        "fixButtons": {
          "share": "Bendrinti",
          "hide": "Slėpti",
          "authorize": "Suteikti teises",
          "remove": "Panaikinti",
          "help": "Gauti pagalbą",
          "ignore": "Ignoruoti",
          "confirm": "Patvirtinti",
          "edit": "Redaguoti žemėlapį"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Kai kurie žemėlapiai ir sluoksniai taip pat bendrinami.",
          "alsoSharedMaps": "Kai kurie žemėlapiai taip pat bendrinami.",
          "alsoSharedLayers": "Kai kurie sluoksniai taip pat bendrinami.",
          "sharedOthersContent": "Bendrindami kažkieno kito turinį, jūs naudojate administravimo teises."
        }
      },
      "storyHealth": {
        "healthy": "Klaidų nėra",
        "notHealthy": "Taisyti klaidas",
        "warnings": "Peržiūrėti įspėjimus"
      }
    }
  }
});