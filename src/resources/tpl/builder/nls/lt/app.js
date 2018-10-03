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
        "bookmarks": "Žymos",
        "logoSharing": "Logotipas",
        "theme": "Išvaizda"
      },
      "bookmarks": {
        "title": "Skiltis",
        "bookmark": "Žymos",
        "intro": "Žymos – tai nuorodos į pasakojimų dalis, rodomas antraštėje. Sukūrus pagrindinių pasakojimo dalių žymas, skaitytojams bus lengviau orientuotis.",
        "sequentialDefault": "Pasakojimo skiltis (tekstas nerastas)",
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
      },
      "appearance": {
        "themeLabel": "Stilius",
        "fontLabel": "Šriftai",
        "previewLabel": "Peržiūra",
        "fontsTitleLabel": "Antraštės",
        "fontsBodyLabel": "Pagrindinė dalis",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Asmeninis",
      "btnOrg": "Organizacija",
      "btnPublic": "Viešas",
      "btnEveryone": "Visi"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Kūrimo priemonė",
      "buttonSaving": "Įrašoma",
      "buttonSaved": "Išsaugota",
      "buttonError": "Išsaugoti nepavyko",
      "buttonShare": "Bendrinti",
      "buttonSettings": "Parametrai",
      "settingsLogoError": "Kilo logotipo problema. Spustelėkite ir sužinokite daugiau.",
      "buttonHelp": "Gaukite pagalbą arba pateikite atsiliepimą GeoNet svetainėje",
      "buttonPreview": "Žiūrėti pasakojimą",
      "buttonHealth": "Sveikatos ataskaita",
      "manageStories": "Valdyti mano pasakojimus",
      "closeWithPendingChange": "Ar tikrai norite patvirtinti šį veiksmą? Pakeitimai bus prarasti.",
      "coverLabel": "Viršelis",
      "creditsLabel": "Kreditai",
      "betaFeedback": "Atsiliepimai",
      "betaNote": "Praneškite mums, ką manote apie ${APP_NAME}, arba jei kas nors neveikia taip, kaip turėtų.",
      "notSharedNote": "Jūsų pasakojimas nebendrinamas, jį galite matyti tik jūs",
      "organizationWarning": "Kad šį pasakojimą galėtų matyti kiti, turite viešai bendrinti jo scenas, scenų sluoksnius ir įkeltas aplikacijas su savo organizacija. Žemėlapiai ir žemėlapių sluoksniai bendrinami automatiškai.",
      "publicWarning": "Norėdami užtikrinti, kad šį pasakojimą galės peržiūrėti kiti vartotojai, turite su visais bendrinti ir jo scenas, scenų sluoksnius bei įterptas aplikacijas. Žemėlapiai ir žemėlapių sluoksniai bendrinami automatiškai.",
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
      "chooseTransition": "Pasirinkite perėjimą",
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
        "mobile": "Mobili",
        "issues": "Klaidos",
        "fixIssues": "Taisyti klaidas"
      },
      "manage": {
        "changeMedia": "Pakeisti mediją",
        "edit": "Redaguoti",
        "editAside": "Atsidaro naujame naršyklės skirtuke. Norėdami matyti pakeitimus, pasakojimą įrašykite ir įkelkite iš naujo.",
        "remove": "Panaikinti",
        "altTextPlaceholder": "Pridėkite šios medijos aprašą, skirtą skaitytojams su regos sutrikimais...",
        "altTextHelptip": "Alternatyvus tekstas yra vaizdinės medijos aprašas, kurį naudoja neįgaliesiems pritaikytos technologijos, pvz., ekrano skaitytuvų programinė įranga. Aprašas nėra privalomas, tačiau rekomenduojamas norint atitikti žiniatinklio pritaikymo neįgaliesiems gaires, pavyzdžiui, WCAG ir Section 508."
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
        "large": "Didelis",
        "noCrop": "Neapkarpyti aukštų atvaizdų",
        "noCropTallTooltip": "Neapkarpyti aukšti atvaizdai daro nemalonų įspūdį skaitytojams, kurie turi juos slinkti, kad peržiūrėtų visą puslapį."
      },
      "background": {
        "noCrop": "Neapkarpyti",
        "mostImportantPart": "Pasirinkite vietą",
        "cropExplanationImmersive": "Pasirinkite vietą atvaizde, pagal kurią jis bus apkarpomas skirtingo dydžio ekranuose. Jūsų pasirinkta vieta bus visada matoma. Jei reikia, kad būtų matomas visas atvaizdas, pažymėkite Neapkarpyti.",
        "cropExplanation": "Pasirinkite vietą atvaizde, pagal kurią jis bus apkarpomas skirtingo dydžio ekranuose. Jūsų pasirinkta vieta bus visada matoma.",
        "color": "Spalva",
        "previews": "Peržiūros"
      },
      "altMedia": {
        "alternativeMedia": "Alternatyvus atvaizdas, skirtas mobiliesiems įrenginiams",
        "explanation": "Mobilieji įrenginiai nepalaiko kai kurių medijų arba jos gali būti rodomos netinkamai. Naudodami šį skydelį, nurodykite atvaizdą, kuris bus rodomas vietoje šios medijos, kai jūsų pasakojimas bus peržiūrimas naudojant telefoną ar planšetę.",
        "changeAltImage": "Keisti atvaizdą",
        "uploadAltImage": "Pridėti alternatyvų atvaizdą"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Nuoroda į turinį",
        "urls_short": "Nuoroda",
        "contentType": {
          "error": "Nėra autorizuotos medijos.",
          "imageOnly": "Šioje pasakojimo dalyje galite pridėti paveikslėlį.",
          "imageAndVideo": "Šioje pasakojimo dalyje galite pridėti paveikslėlį arba vaizdo įrašą.",
          "imageVideoWebpage": "Šioje pasakojimo dalyje galite pridėti garso įrašą, paveikslėlį, vaizdo įrašą arba tinklalapį."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Ieškoma ${searchterm}...",
          "searchedFor": "${searchterm} paieškos rezultatai",
          "albumsOf": "${username} albumai",
          "noPhotosFound": "Nėra jūsų paiešką atitinkančių nuotraukų. Bandykite dar kartą.",
          "noItemsFound": "Nėra jūsų paiešką atitinkančių elementų. Bandykite dar kartą.",
          "noItemsInThisStory": "Nėra turinio iš ArcGIS, kuris jau būtų įtrauktas į šį pasakojimą.",
          "limitReached": "Rodoma 100 elementų. Jei nerandate to, ko jums reikia, išbandykite raktažodžių paiešką.",
          "galleryItems": {
            "uploadError": "Deja, šio elemento nepavyko įkelti."
          },
          "agol": {
            "remove1": "Panaikinkite šį nenaudojamą paveikslėlį iš ArcGIS paskyros.",
            "remove2": "(Turėsite vėl jį įkelti, jei nuspręsite naudoti jį vėliau.)",
            "removeFailed": "Pašalinkite šį nepasiekiamą paveikslėlį iš sąrašo.",
            "modified": "Keitimo data: ${date}",
            "uploaded": "Įkėlimo data: ${date}",
            "contentByAuthor": "${contentType} sukūrė ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Ieškokite nuotraukų ${Picasa} arba ${Google+}"
          },
          "flickr": {
            "photostream": "Nuotraukų srautas",
            "searchAndBrowse": "Ieškokite ir naršykite nuotraukas ${Flickr}",
            "captionStarter": "Nuotraukos autorius: ${USERNAME} iš ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Ieškokite nuotraukų ${Unsplash}",
            "photoBy": "Nuotrauką sukūrė ${username}",
            "userLink": "Eikite į ${username} ${Unsplash} puslapį",
            "captionStarter": "Nuotraukos autorius: ${USERNAME} iš ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Nuoroda į turinį internete",
              "imageOnly": "Nuoroda į paveikslėlį internete",
              "imageAndVideo": "Nuoroda į paveikslėlį arba vaizdo įrašą internete"
            },
            "linkText": {
              "imageOnly": "Aukščiau pateiktame laukelyje galite nurodyti tiesioginę nuorodą į nuotrauką.",
              "imageAndVideo1": "Aukščiau pateiktame laukelyje galite įklijuoti nuorodą arba vaizdo įrašo iframe kodą svetainėse ${YouTube} ar ${Vimeo}.",
              "imageAndVideo2": "Taip pat galite pateikti tiesioginę nuorodą į nuotrauką.",
              "imageVideoWebpage1": "Aukščiau pateiktame laukelyje galite įklijuoti nuorodą arba internetinio turinio pvz., dinaminės diagramos ar vaizdo įrašo iframe kodą svetainėse ${YouTube} ar ${Vimeo}.",
              "imageVideoWebpage2": "Taip pat galite pateikti tiesioginę nuorodą į nuotrauką, vaizdo įrašą, garso failą, svetainę ar internetinę aplikaciją.",
              "ender": "Visada naudokite saugias (https) nuorodas. Jei jūsų turinys nepalaiko https, nukreipiančią nuorodą įtraukite į savo pasakojimo tekstą, kad skaitytojai galėtų peržiūrėti jį naujame naršyklės lange.",
              "httpsError": "Nuoroda turi prasidėti HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Įkelkite puslapį naudojant saugų ryšį (https)",
              "embedProtocolWarning1": "Jei šis puslapis neįkelia jūsų pasakojimo, vadinasi, jo negalima įdėti interneto saugos sumetimais.",
              "embedProtocolWarning2": "Jei šis puslapis neįkelia jūsų pasakojimo, panaikinkite šios parinkties žymėjimą ir bandykite dar kartą. Jei puslapio vis dar negalima įkelti, vadinasi, jo negalima įdėti interneto saugos sumetimais.",
              "embedProtocolWarning3": "Kaip alternatyvą įtraukite savo pasakojime nuorodą, kad atidarytumėte puslapį naujos naršyklės skirtuke. ${linkText}",
              "linkText": "Sužinokite daugiau."
            },
            "placeholder": "${https://}... arba ${<iframe>}",
            "uploadErrors": {
              "generic": "Įvedant adresą įvyko klaida. Bandykite dar kartą.",
              "imageOnly1": "Šioje pasakojimo dalyje turite naudoti paveikslėlį.",
              "imageOnly2": "Pateikite nuorodą į paveikslėlį (.jpg, .png, .gif) arba pasirinkite jį iš ${ArcGIS}, ${Flickr}, ${Google+} arba ${Unsplash}.",
              "imageAndVideo1": "Šioje pasakojimo dalyje turite naudoti paveikslėlį arba vaizdo įrašą.",
              "imageAndVideo2": "Pateikite nuorodą į paveikslėlį (.jpg, .png, .gif) arba vaizdo įrašą ${YouTube} ar ${Vimeo}, arba pasirinkite paveikslėlį iš ${ArcGIS}, ${Flickr}, ${Google+} ar ${Unsplash}.",
              "badFormat": "Nuoroda į failą, kurį bandote pridėti, suformatuota netinkamai.",
              "inaccessible": "Failo, kurį bandote pridėti, trūksta arba jis nepasiekiamas.",
              "tryAgain": "Patikrinkite adresą ir bandykite iš naujo.",
              "mediaTypes": {
                "VIDEO": "vaizdo įrašas",
                "IMAGE": "paveikslėlis",
                "generic": "medija"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Naudodamiesi trečiųjų šalių paslaugomis, sutinkate su jų paslaugų teikimo sąlygomis: ",
          "googlePhotos": {
            "placeholder": "E. pašto arba ${Picasa} / ${Google+} ID",
            "helpText": "Į savo pasakojimą galite pridėti nuotraukų, įkeltų į ${Picasa} arba ${Google+}. ${helpLinkText} apie paveikslėlių, saugomų jūsų ${Google} paskyroje, naudojimą jūsų pasakojimuose.",
            "helpLinkText": "Sužinokite daugiau",
            "cannotFindUser": "Nepavyko rasti naudotojo ${username}. Bandykite dar kartą."
          },
          "unsplash": {
            "placeholder": "Nuotraukų paieška",
            "aboutText": "${Unsplash} – tai prižiūrimas nemokamų, aukštos kokybės nuotraukų rinkinys.",
            "copyrightText": "Visos nuotraukos licencijuojamos pagal ${Unsplash} licenciją. Daugiau informacijos rasite ${moreInfoLink}.",
            "moreInfoLink": "čia"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} paskyra",
              "text": "Visos ${Flickr}"
            },
            "placeholders": {
              "user": "Paskyros paieška",
              "userText": "Ieškoti šios nuotraukų paskyros",
              "text": "Nuotraukų paieška"
            },
            "errors": {
              "cannotFindUser": "Nepavyko rasti naudotojo ${username}.",
              "noUserPhotos": "${username} neturi jokių viešų nuotraukų.",
              "didYouMean": "Turite omenyje ${username}?",
              "generalUserError": "Įvyko klaida ieškant naudotojo ${username}."
            },
            "licenses": {
              "licenseLabel": "Licencija: ",
              "public": "Viešasis domenas",
              "commercial": "Tinkamas komerciniam naudojimui",
              "nonCommercial": "Tinkamas nekomerciniam naudojimui",
              "reserved": "Visos teisės saugomos.",
              "any": "Bet kokia licencija"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Šis pasakojimas",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portalas",
              "myOrg": "${orgname} organizacija",
              "myContent": "Mano turinys"
            },
            "createContent": {
              "createNewMap": "Kurti naują žemėlapį",
              "or": "ARBA",
              "dragAndDropImage": "Nuvilkti vaizdus",
              "dragAndDropImageAudio": "Nuvilkti vaizdus arba garso įrašus",
              "uploadButton": "Naršyti",
              "agolInfo": "Įkelti vaizdai ir garso įrašai bus pasiekiami tik šiame pasakojime.",
              "saveBeforeUpload": "Išsaugoję šį pasakojimą, galite įkelti paveikslėlius ir garso įrašus į ArcGIS čia.",
              "fileExtsImage": "Palaikomi tipai: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Palaikomi tipai: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maks. failo dydis 10 MB."
            },
            "filterAndSort": {
              "webmap": "Internetinis žemėlapis",
              "webscene": "Internetinė scena",
              "image": "Paveikslėlis",
              "audio": "Garso įrašas",
              "date": "Data",
              "sortByDate": "Rūšiuoti pagal datą",
              "title": "Pavadinimas",
              "sortByTitle": "Rūšiuoti pagal pavadinimą",
              "views": "Peržiūros",
              "search": "Ieškoti pagal raktažodį arba ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Redaguoti žemėlapį",
      "unauthorizedDomain": "Esate ne autorizuotame domene, todėl negalite naudoti žemėlapių rengyklės",
      "loading": "Palaukite, kol žemėlapių rengyklė pasikraus",
      "saving": "Įrašomas žemėlapis",
      "success": "Žemėlapis įrašytas",
      "cancelTitle": "Atsisakyti neįrašytų pakeitimų?",
      "errorSave": "Nepavyko išsaugoti žemėlapio. Pabandykite dar kartą.",
      "loadFail": "Deja, negalima įkelti žemėlapių rengyklės",
      "close": "Uždaryti",
      "save": "Išsaugoti",
      "confirm": "Taip, uždaryti žemėlapį",
      "deny": "Ne, palikti veikti"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Tęskite savo pasakojimą čia..."
      },
      "blockAdd": {
        "text": "Tekstas",
        "media": "Daugialypė informacija",
        "title": "Pavadinimas",
        "immersive": "Fiksuotas"
      },
      "link": {
        "invite": "Įklijuokite arba įrašykite nuorodą..."
      },
      "color": {
        "choose": "pasirinkti",
        "cancel": "atšaukti",
        "clear": "Išvalyti spalvą"
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
        "theme": "Stilius",
        "size": "Dydis",
        "background": "Fonas",
        "layout": "Slinkimas"
      }
    },
    "title": {
      "placeholder": "Įveskite antraštę..."
    },
    "media": {
      "mediaUpload": "Įkeliama medija...",
      "mediaUploadSuccess": "Medija įkelta sėkmingai",
      "mediaUploadFail": "Medijos įkelti nepavyko"
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
      "sequence": "Pasakojimas",
      "immersive": "Fiksuotas",
      "title": "Pavadinimas"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "atvaizdas",
        "audio": "garso įrašas",
        "webmap": "žemėlapis",
        "webscene": "scena",
        "video": "vaizdo įrašas",
        "content": "turinys",
        "webpage": "tinklalapis"
      },
      "placeholders": {
        "generic": "Šis turinys nepasiekiamas",
        "deleted": "Šis elementas buvo panaikintas.",
        "inaccessible": "Šis turinys nepasiekiamas",
        "unauthorized": "Jūs neturite teisių peržiūrėti šį turinį.",
        "unshared": "Šis elementas nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
        "othersUnshared": "Šis elementas nėra bendrinamas taip pat, kaip jūsų pasakojimas.",
        "subscriptionContent": "Šiame žemėlapyje yra prenumeratoriaus sluoksnis.",
        "premiumContent": "Šiame žemėlapyje yra „Premium“ sluoksnis.",
        "secureService": "Šiame žemėlapyje yra saugaus sluoksnis."
      },
      "contentIssues": {
        "noAltImage": "Naudojant mobilųjį įrenginį, medija gali neveikti",
        "noAltImageUnsupported": "Mobilusis įrenginys gali nepalaikyti šios medijos",
        "noAltImageWarning": "Naudojant mobilųjį įrenginį, medija gali neveikti",
        "altImageBroken": "Alternatyvus apibrėžtas šios medijos elemento atvaizdas nepasiekiamas",
        "httpMedia": "Nesaugi medija",
        "httpContent": "Nesaugus turinys"
      },
      "contentWarnings": {
        "noAltImage": "Prieš bendrindami savo pasakojimą, būtinai patikrinkite jį naudodami mobiliuosius įrenginius. Jei ši medija neveikia taip, kaip tikėjotės, paspaudę mygtuką žemiau, pridėkite alternatyvų atvaizdą, kuris bus rodomas, kai jūsų pasakojimas bus peržiūrimas naudojant telefoną ar planšetę.",
        "noAltImageUnsupported": "Ši medija neveiks naudojant mobiliuosius įrenginius. Paspaudę mygtuką žemiau, pridėkite alternatyvų atvaizdą, kuris bus rodomas, kai jūsų pasakojimas bus peržiūrimas naudojant telefoną ar planšetę.",
        "noAltImageWarning": "Prieš bendrindami savo pasakojimą, būtinai patikrinkite jį naudodami mobiliuosius įrenginius. Jei ši medija neveikia taip, kaip tikėjotės, paspaudę mygtuką žemiau, pridėkite alternatyvų atvaizdą, kuris bus rodomas, kai jūsų pasakojimas bus peržiūrimas naudojant telefoną ar planšetę.",
        "noAltImageAlt": "Šio tipo medija nepalaikoma arba gali tinkamai neveikti naudojant mobiliuosius įrenginius. Mobiliųjų įrenginių skirtuke pridėkite alternatyvų atvaizdą, kuris bus rodomas, kai jūsų pasakojimas bus peržiūrimas naudojant telefoną ar planšetę."
      },
      "descriptions": {
        "httpAudioUnfixable": "Šis garso failas nepalaiko HTTPS. Pašalinkite jį iš savo pasakojimo arba pakeiskite jį nuoroda.",
        "httpAudioUncheckable": "Šio garso įrašo (HTTP) URL yra nesaugus. Spustelėkite mygtuką norėdami naudoti šio garso įrašo HTTPS URL. Jei neveikia, pašalinkite garso įrašą iš savo pasakojimo arba pakeiskite jį hipersaitu.",
        "httpAudioFixable": "Šio garso įrašo (HTTP) URL yra nesaugus. Spustelėkite toliau esantį mygtuką norėdami naudoti saugų šio garso įrašo HTTPS URL.",
        "httpWebpageUnfixable": "Šis tinklalapis nepalaiko HTTPS. Pašalinkite jį iš savo pasakojimo arba pakeiskite jį ekrano vaizdu arba nuoroda.",
        "httpWebpageUncheckable": "Šio tinklalapio (HTTP) URL yra nesaugus. Spustelėkite mygtuką norėdami naudoti šio tinklalapio HTTPS URL. Jei neveikia, pašalinkite tinklalapį iš savo pasakojimo arba pakeiskite jį ekrano vaizdu ar hipersaitu.",
        "httpWebpageFixable": "Šio tinklalapio (HTTP) URL yra nesaugus. Spustelėkite toliau esantį mygtuką norėdami naudoti saugų šio tinklalapio HTTPS URL.",
        "httpVideoUnfixable": "Šis vaizdo įrašas nepalaiko HTTPS. Pašalinkite jį iš savo pasakojimo arba pakeiskite jį ekrano vaizdu arba nuoroda.",
        "httpVideoUncheckable": "Šio vaizdo įrašo (HTTP) URL yra nesaugus. Spustelėkite mygtuką norėdami naudoti šio vaizdo įrašo HTTPS URL. Jei neveikia, pašalinkite vaizdo įrašą iš savo pasakojimo arba pakeiskite jį ekrano vaizdu ar hipersaitu.",
        "httpVideoFixable": "Šio vaizdo įrašo (HTTP) URL yra nesaugus. Spustelėkite toliau esantį mygtuką norėdami naudoti saugų šio vaizdo įrašo HTTPS URL.",
        "httpImageUnfixable": "Šis paveikslėlis nepalaiko HTTPS. Pašalinkite jį iš savo pasakojimo arba pakeiskite jį nuoroda.",
        "httpImageUncheckable": "Šio paveikslėlio (HTTP) URL yra nesaugus. Spustelėkite mygtuką norėdami naudoti šio paveikslėlio HTTPS URL. Jei neveikia, pašalinkite paveikslėlį iš savo pasakojimo arba pakeiskite jį hipersaitu.",
        "httpImageFixable": "Šio paveikslėlio (HTTP) URL yra nesaugus. Spustelėkite toliau esantį mygtuką norėdami naudoti saugų šio paveikslėlio HTTPS URL.",
        "httpLayer": "Šio sluoksnio (HTTP) URL yra nesaugus.",
        "inaccessibleLogo": "Šis logotipas nepasiekiamas. Pakeiskite jį kitu paveikslėliu.",
        "httpLogoUnfixable": "Šis logotipas nepalaiko HTTPS. Pakeiskite jį kitu paveikslėliu.",
        "httpLogoFixable": "Šio logotipo (HTTP) URL yra nesaugus. Su logotipu naudokite HTTPS URL.",
        "httpLogoUncheckable": "Šio logotipo (HTTP) URL yra nesaugus. Su logotipu naudokite HTTPS URL arba pakeiskite jį kitu paveikslėliu."
      },
      "tooltips": {
        "httpAudioFixable": "Spustelėkite mygtuką norėdami naudoti saugų šio garso įrašo HTTPS URL.",
        "httpAudioUncheckable": "Bandykite naudoti šio garso įrašo HTTPS URL. Jei neveikia, pašalinkite garso įrašą iš savo pasakojimo arba pakeiskite jį nuoroda.",
        "httpWebpageFixable": "Spustelėkite mygtuką norėdami naudoti saugų šio tinklalapio HTTPS URL.",
        "httpWebpageUncheckable": "Bandykite naudoti šio tinklalapio HTTPS URL. Jei neveikia, pašalinkite tinklalapį iš savo pasakojimo arba pakeiskite jį ekrano vaizdu ar nuoroda.",
        "httpVideoFixable": "Spustelėkite mygtuką norėdami naudoti saugų šio vaizdo įrašo HTTPS URL.",
        "httpVideoUncheckable": "Bandykite naudoti šio vaizdo įrašo HTTPS URL. Jei neveikia, pašalinkite vaizdo įrašą iš savo pasakojimo arba pakeiskite jį ekrano vaizdu ar nuoroda.",
        "httpImageFixable": "Spustelėkite mygtuką norėdami naudoti saugų šio paveikslėlio HTTPS URL.",
        "httpImageUncheckable": "Bandykite naudoti šio paveikslėlio HTTPS URL. Jei neveikia, pašalinkite paveikslėlį iš savo pasakojimo arba pakeiskite jį nuoroda.",
        "httpLayerMyMap": "Norėdami naudoti HTTPS, apsilankykite žemėlapio elemento puslapyje ir atnaujinkite šį sluoksnį. Jei sluoksnio atnaujinti negalima, pašalinkite jį iš žemėlapio.",
        "httpLayerNotMyMap": "Norėdami naudoti HTTPS, skurkite žemėlapio kopiją ir atnaujinkite šį sluoksnį. Jei sluoksnio atnaujinti negalima, pašalinkite jį iš žemėlapio.",
        "clickLearnMore": "Spustelėkite ir sužinokite daugiau."
      },
      "fixButtons": {
        "agolItemPage": "Elemento puslapis",
        "openTheMap": "Atverti žemėlapį",
        "updateAudio": "Taisyti garso įrašo URL",
        "updateWebpages": "Taisyti tinklalapio URL",
        "updateVideos": "Taisyti vaizdo įrašo URL",
        "updateImages": "Taisyti paveikslėlio URL"
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
    },
    "saveErrorSocial": {
      "title": "Bendrinimas socialiniuose tinkluose",
      "panel1": "Jūsų pasakojimas gali būti netinkamai rodomas socialiniame tinkle, nes ArcGIS internetinės aplikacijos elemento pavadinimas nesutampa su jūsų pasakojimo pavadinimu.",
      "panel1tooltip": "Pateikus pavadinimą, santrauką ir miniatiūros vaizdą, jūsų pasakojimas atrodys taip:",
      "panel2": "Kokį pavadinimą norite naudoti socialiniame tinkle:",
      "panel2q1": "Pasakojimo pavadinimas (rekomenduojama)",
      "panel2q1tooltip": "Pasirinkus šią parinktį, jūsų elemento antraštė bus modifikuota, kad sutaptų su jūsų pasakojimo pavadinimu, o kiti kūrimo priemonėje atlikti keitimai bus sinchronizuojami.",
      "panel2q2": "Elemento antraštė",
      "panel3": "Jei norite toliau tobulinti pasakojimo išvaizdą socialiniame tinkle, naudodami ${MYSTORIES} pridėkite santrauką ir miniatiūros vaizdą.",
      "panel4": "Nebeįspėti manęs apie šį pasakojimą",
      "save": "Išsaugoti",
      "mystories": "Mano pasakojimai"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Svarbus pranešimas apie žiniatinklio saugą ir žemėlapių pasakojimus",
      "s1h1": "Esri tobulina žemėlapių pasakojimų saugą",
      "s1p1": "Jūsų žemėlapių pasakojimai yra internete ir interneto bendruomenė nuolat stengiasi įgyvendinti didesnę saugą. Kaip numatytasis būdas pasiekti interneto turinį, pradedamas naudoti HTTPS, kuris suteikia saugų internetu perduodamo turinio ryšį. Dauguma šiuolaikinių naršyklių rodo įspėjamąjį pranešimą, kai vietoje HTTPS naudojamas HTTP. Dėl šio naujo standarto labai rekomenduojame žemėlapių pasakojimų kūrimui ir saugojimui naudoti HTTPS nuorodas, o įdedant interneto turinį ar susiejant atvaizdus su žemėlapio pasakojimu, naudoti tik HTTPS URL.",
      "s1p2": "Tiksliau tariant, tai reiškia, kad žemėlapio pasakojimas ir visas jo turinys (įskaitant atvaizdus, sluoksnius, įdėtąsias aplikacijas ir svetaines) turi būti pasiekiamas naudojant nuorodas, prasidedančias HTTPS, o ne HTTP. Tai užtikrina jūsų skaitytojams geriausią patirtį, nes dauguma interneto naršyklių rodys, kad jūsų pasakojimai yra saugūs.",
      "s2h1": "Ką reikia daryti?",
      "s2p1": "Esri stengiasi, kad šis perėjimas žemėlapio pasakojimo autoriams ir skaitytojams būtų lengvas. Dabar žemėlapio pasakojimo kūrimo priemonėse ir Mano pasakojimuose yra įrankių, padedančių jums savo pasakojimuose rasti nesaugų turinį (HTTP) ir pateikti rekomendacijų, ką su juo daryti. Patikrinkite, ar jūsų pasakojimuose yra nesaugaus turinio, ir kuo greičiau atnaujinkite į HTTPS.",
      "action1": "Uždaryti",
      "action2": "Peržiūrėkite savo pasakojimus jau dabar",
      "action3": "Sužinokite daugiau",
      "floatingNotification": "Šiame pasakojime yra nesaugaus (HTTP) turinio. Peržiūrėkite ir išspręskite šias problemas."
    }
  }
});