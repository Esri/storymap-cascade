/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplikovať",
      "close": "Zatvoriť"
    },
    "header": {
      "sharingNotAvailable": "Nie je k dispozícii, pokým nevyzdieľate príbeh.",
      "edit": "Editovať"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Mapové záložky",
        "logoSharing": "Logo & Zdieľanie",
        "theme": "Vzhľad"
      },
      "bookmarks": {
        "title": "Časť",
        "bookmark": "Záložka",
        "intro": "Záložky sú prepojenia na sekcie príbehov, ktoré sú zobrazené v hlavičke. Vytváranie krátkych záložiek pre hlavné časti Vášho príbehu pomáha čitateľom zorientovať sa.",
        "sequentialDefault": "Popisná časť (nebol nájdený žiadny text)",
        "immersiveDefault": "Zážitková časť (nebol nájdený žiadny text)",
        "titleDefault": "Titulná čast (nebol nájdený žiadny text)",
        "coverDefault": "Vrchná časť - Obálka (nebol nájdený žiadny text)",
        "coverAppendage": "(Obálka)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Použiť ${ESRI} logo",
        "useOrgLogo": "Použiť logo mojej organizácie",
        "useOrgLogoHelp": "Použiť logo poskytnuté správcom",
        "logoLink": "Prepojenie na logo",
        "logoUploadProgress": "Prebieha nahrávanie loga",
        "logoUploadSuccess": "Logo bolo úspešne nahraté",
        "logoUploadError": "Nahrávanie loga zlyhalo, prepnutie späť na ${ESRI} logo",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Ak chcete povoliť prepojenie, zadajte slogan",
        "link": "Prepojenie na slogan",
        "enableSocialSharing": "Tlačidlo zdieľania displeja"
      },
      "appearance": {
        "themeLabel": "Vrstva",
        "fontLabel": "Fonty",
        "previewLabel": "Náhľad",
        "fontsTitleLabel": "Názvy",
        "fontsBodyLabel": "Telo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Súkromné",
      "btnOrg": "Organizácia",
      "btnPublic": "Verejné",
      "btnEveryone": "Všetci"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Prostredie Builder",
      "buttonSaving": "Ukladá sa",
      "buttonSaved": "Uložené",
      "buttonError": "Uloženie zlyhalo",
      "buttonShare": "Zdieľať",
      "buttonSettings": "Nastavenia",
      "settingsLogoError": "Vaše logo má problém. Kliknite a zistite viac",
      "buttonHelp": "Získať pomoc alebo odoslať spätnú väzbu na GeoNet",
      "buttonPreview": "Zobraziť príbeh",
      "buttonHealth": "Správa o zdraví",
      "manageStories": "Spravovať Moje príbehy",
      "closeWithPendingChange": "Naozaj chcete potvrdiť túto akciu? Vaše zmeny sa stratia.",
      "coverLabel": "Obálka",
      "creditsLabel": "Kredity",
      "betaFeedback": "Spätná väzba",
      "betaNote": "Dajte nám vedieť, čo si myslíte o ${APP_NAME}, alebo ak niečo nefunguje tak, ako ste očakávali.",
      "notSharedNote": "Váš príbeh nie je zdieľaný, môžete ho vidieť iba vy.",
      "organizationWarning": "Ak chcete zabezpečiť, aby si tento príbeh mohli prezerať aj ostatní, musíte zdieľať s Vašou organizáciou aj jeho scény, vrstvy scén a vnorené aplikácie. Mapy a vrstvy mapy sú zdieľané automaticky.",
      "publicWarning": "Ak chcete zabezpečiť, aby si tento príbeh mohli prezerať aj ostatní, musíte zdieľať so všetkými aj jeho scény, vrstvy scén a vnorené aplikácie. Mapy a vrstvy mapy sú zdieľané automaticky.",
      "addTitleNote": "Pre uloženie pridajte názov na obálku",
      "saveError": "Pri ukladaní Vášho príbehu sa vyskytla chyba.",
      "duplicate": "Duplikovať",
      "organize": "Organizovať",
      "done": "Hotovo",
      "invite": "Pri vytváraní príbehu sa časti zobrazia tu...",
      "mystoriestooltip": "Prostredie Builder pre tvorbu Cascade Vás upozorní na problémy vo Vašom príbehu a pomôže vám ich vyriešiť. Scény a vložené aplikácie nie sú kontrolované, preto ich skontrolujte ručne."
    },
    "immersiveViewPanel": {
      "transition": "Prechod",
      "chooseTransition": "Vybrať prechod",
      "fade": "Blednutie",
      "fadeSlow": "Pomalé blednutie",
      "swipeVertical": "Potiahnuť zvislo",
      "swipeHorizontal": "Potiahnuť vodorovne",
      "none": "Žiadne",
      "disabledConsecutiveSameMedia": "Nie je k dispozícii, ak po sebe nasledujúce zobrazenia používajú rovnaké médiá",
      "disabledTooltipMap": "Ak chcete použiť tento prechod, viditeľné vrstvy v oboch zobrazeniach musia byť odlišné a ostatné vlastnosti mapy musia byť rovnaké",
      "disabledConsecutiveSameMap": "Nie je k dispozícii, ak po sebe nasledujúce zobrazenia používajú rovnaké mapy",
      "disabledNotInBeta": "Nie je k dispozícii, ak po sebe nasledujúce zobrazenia používajú rovnaké mapy",
      "disabledNonConsecutive": "Nie je k dispozícii, pretože dochádza k inému výskytu týchto médií, ktoré nie sú za sebou",
      "addMedia": "Pridať médiá",
      "invite": "Pri vytváraní zážitkovej časti sa pohľady zobrazia tu..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Vzhľad",
        "manage": "Spravovať",
        "size": "Veľkosť",
        "background": "Pozadie",
        "mobile": "Mobil",
        "issues": "Problémy",
        "fixIssues": "Vyriešiť problémy"
      },
      "manage": {
        "changeMedia": "Zmeniť médiá",
        "edit": "Editovať",
        "editAside": "Otvorí sa na novej karte prehľadávača. Po uložení úprav uložte a znova načítajte tento príbeh, aby ste videli svoje zmeny.",
        "remove": "Odstrániť",
        "altTextPlaceholder": "Pridajte popis tohto média pre čitateľov so zrakovým postihnutím...",
        "altTextHelptip": "Alternatívny text je opis vizuálnych médií používaných pomocnými technológiami, ako je softvér na čítanie obrazovky. Toto je voliteľné, ale odporúča sa dodržiavať pokyny na prístup k webu, ako napríklad WCAG a oddiel 508."
      },
      "appearance": {
        "homeView": "Počiatočné zobrazenie",
        "audio": "Audio",
        "on": "Zapnuté",
        "muted": "Stlmené",
        "volumeAside": "Keď čítačka príde na toto zobrazenie, video sa automaticky prehrá. Ak stlmíte zvuk, čítačka ho nebude môcť povoliť.",
        "view": "Zobrazenie",
        "resetLocation": "Obnoviť umiestnenie",
        "resetLayers": "Obnoviť vrstvy",
        "clearPopup": "Vymazať kontextové okno",
        "interaction": "Interakcia",
        "interactionDisabled": "Interakcia nie je povolená",
        "buttonToEnable": "Tlačidlo na povolenie",
        "interactionEnabled": "Interakcia povolená",
        "interactionAside": "*Dotykové zariadenia zobrazia tlačidlo interakcie.",
        "slide": "Snímka",
        "noSlides": "K dispozícii nie sú žiadne snímky.",
        "mapExtentPrompt": "Aktualizujte mapu a povedzte svoj príbeh. Zakliknutím uložte zmeny."
      },
      "sectionAppearance": {
        "layout": "Rozloženie",
        "theme": "Vrstva"
      },
      "size": {
        "small": "Malé",
        "medium": "Stredné",
        "large": "Veľké",
        "noCrop": "Neorezať vysoké obrázky",
        "noCropTallTooltip": "Neorezanie vysokého obrázku bude mať pre čitateľov dramatický efekt, ktorý vyžaduje rolovanie na jeho celé zobrazenie."
      },
      "background": {
        "noCrop": "Neorezať",
        "mostImportantPart": "Vyberte najdôležitejší bod",
        "cropExplanationImmersive": "Zvoľte bod na obrázku a vyberte, ako bude orezaný pri rôznych veľkostiach obrazovky. Bod, ktorý vyberiete, bude vždy viditeľný. Ak chcete, aby bol váš obrázok úplne viditeľný, začiarknite políčko \"Neorezať\".",
        "cropExplanation": "Zvoľte bod na obrázku a vyberte, ako bude orezaný pri rôznych veľkostiach obrazovky. Bod, ktorý vyberiete, bude vždy viditeľný.",
        "color": "Farba",
        "previews": "Náhľady"
      },
      "altMedia": {
        "alternativeMedia": "Alternatívny obrázok pre mobil",
        "explanation": "Niektoré mádiá nie sú podporované alebo je možné, že nebudú fungovať správne na mobilných zariadeniach. Pomocou tohto panela môžete určiť obrázok, ktorý sa zobrazí na mieste tohto média pri prezeraní Vášho príbehu v telefóne alebo na tablete.",
        "changeAltImage": "Zmeniť obrázok",
        "uploadAltImage": "Pridať alternatívny obrázok"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Prepojiť na obsah",
        "urls_short": "Prepojiť",
        "contentType": {
          "error": "Neautorizované médium.",
          "imageOnly": "V tejto časti príbehu môžete vložiť obrázok.",
          "imageAndVideo": "V tejto časti príbehu môžete vložiť obrázok alebo video.",
          "imageVideoWebpage": "V tejto časti príbehu môžete vložiť audio, obrázok, video alebo webovú stránku."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Vyhľadávanie pre \"${searchterm}\"...",
          "searchedFor": "Výsledky hľadania pre \"${searchterm}\"",
          "albumsOf": "Albumy ${username}",
          "noPhotosFound": "Vášmu vyhľadávaniu nezodpovedajú žiadne fotografie. Skúste prosím znova.",
          "noItemsFound": "Vášmu vyhľadávaniu nezodpovedajú žiadne položky. Skúste prosím znova.",
          "noItemsInThisStory": "K tomuto príbehu zatiaľ nebol pridaný žiadny obsah z ArcGIS.",
          "limitReached": "Zobrazuje sa 100 položiek. Ak ste nenašli čo ste hľadali, vyskúšajte hľadať podľa kľúčových slov.",
          "galleryItems": {
            "uploadError": "Ľutujeme, načítanie položky zlyhalo."
          },
          "agol": {
            "remove1": "Odstráňte tento nepoužitý obrázok z účtu ArcGIS.",
            "remove2": "(Ak sa rozhodnete použiť ho neskôr, budete ho musieť znova nahrať.)",
            "removeFailed": "Odstráňte tento neprístupný obrázok zo zoznamu.",
            "modified": "Upravené ${date}",
            "uploaded": "Nahraté ${date}",
            "contentByAuthor": "${contentType} od ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Prehľadávať fotografie na ${Picasa} alebo ${Google+}"
          },
          "flickr": {
            "photostream": "Sled fotografií",
            "searchAndBrowse": "Vyhľadať a prehľadávať fotografie na ${Flickr}",
            "captionStarter": "Fotografia od ${USERNAME} na ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Vyhľadať fotografie na ${Unsplash}",
            "photoBy": "Fotografia od ${username}",
            "userLink": "Ísť na ${username}${Unsplash} stránku",
            "captionStarter": "Fotografia od ${USERNAME} na ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Prepojiť na webový obsah",
              "imageOnly": "Prepojiť na webový obrázok",
              "imageAndVideo": "Prepojiť na webový obrázok alebo video"
            },
            "linkText": {
              "imageOnly": "V poli vyššie môžete prepojiť priamo na fotografiu.",
              "imageAndVideo1": "Do vyššie uvedeného poľa môžete vložiť prepojenie alebo iframe kód pre video na ${YouTube} alebo ${Vimeo}.",
              "imageAndVideo2": "Môžete tiež prepojiť priamo na fotografiu.",
              "imageVideoWebpage1": "Do vyššie uvedeného poľa môžete vložiť prepojenie alebo iframe kód pre webový obsah ako dynamický graf alebo video na ${YouTube} alebo${Vimeo}.",
              "imageVideoWebpage2": "Môžete tiež prepojiť priamo na fotografiu, video, audio súbor, webovú stránku alebo webovú aplikáciu.",
              "ender": "Vždy používajte zabezpečené (https) prepojenia. Ak Váš obsah nepodporuje protokol https, pridajte do textu prepojenie naň, aby ho čitatelia mohli zobraziť na novej karte prehľadávača.",
              "httpsError": "Prepojenie musí začínať HTTPS."
            },
            "embedProtocol": {
              "embedProtocolLabel": "Načítať stránku prostredníctvom zabezpečeného pripojenia (https)",
              "embedProtocolWarning1": "Ak sa táto stránka nenačítala do Vášho príbehu, nemôže byť vložená z dôvodov zabezpečenia webu.",
              "embedProtocolWarning2": "Ak sa táto stránka nenačítala do Vášho príbehu, zrušte začiarknutie tejto možnosti a skúste to znova. Ak sa táto stránka naďalej nenačítala do Vášho príbehu, nemôže byť vložená z dôvodov zabezpečenia webu.",
              "embedProtocolWarning3": "Alternatívne môžete vo svojom príbehu pridať prepojenie na otvorenie stránky na novej karte prehľadávača. ${linkText}",
              "linkText": "Zistiť viac"
            },
            "placeholder": "${https://}... alebo ${<iframe>}",
            "uploadErrors": {
              "generic": "Niečo nie je v poriadku so zadanou adresou. Skúste prosím znova.",
              "imageOnly1": "V tejto časti príbehu musíte použiť obrázok.",
              "imageOnly2": "Prosím uveďte prepojenie na obrázok (.jpg, .png, .gif), alebo vyberte obrázok z ${ArcGIS}, ${Flickr}, ${Google+}, ${Unsplash}.",
              "imageAndVideo1": "V tejto časti príbehu musíte použiť obrázok alebo video.",
              "imageAndVideo2": "Prosím uveďte prepojenie na obrázok (.jpg, .png, .gif), alebo na video na ${YouTube} alebo ${Vimeo}, prípadne vyberte obrázok z ${ArcGIS}, ${Flickr}, ${Google+} alebo ${Unsplash}.",
              "badFormat": "Prepojenie na súbor, ktorý sa snažíte pridať, je nesprávne naformátovaný.",
              "inaccessible": "Súbor, ktorý sa snažíte pridať, chýba alebo nie je prístupný.",
              "tryAgain": "Skontrolujte adresu a skúste to znova.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "obrázok",
                "generic": "médiá"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Používaním služby tretej strany súhlasíte s jej zmluvnými podmienkami: ",
          "googlePhotos": {
            "placeholder": "E-mail alebo ${Picasa}/${Google+} ID",
            "helpText": "Do vášho príbehu môžete pridať fotografie nahrané do ${Picasa}alebo ${Google+}. ${helpLinkText} o používaní obrázkov uložených vo vašom ${Google} účte vo vašich príbehoch.",
            "helpLinkText": "Zistiť viac",
            "cannotFindUser": "Nie je možné nájsť používateľa ${username}. Skúste prosím znova."
          },
          "unsplash": {
            "placeholder": "Vyhľadať fotografie",
            "aboutText": "${Unsplash} je kurátorská zbierka bezplatných, vysokokvalitných fotografií.",
            "copyrightText": "Všetky fotografie sú licencované na základe ${Unsplash} licencie. Viac informácií nájdete na ${moreInfoLink}.",
            "moreInfoLink": "tu"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} Účet",
              "text": "Všetky ${Flickr}"
            },
            "placeholders": {
              "user": "Vyhľadať účet",
              "userText": "Vyhľadať v tomto účte fotografie",
              "text": "Vyhľadať fotografie"
            },
            "errors": {
              "cannotFindUser": "Nie je možné nájsť používateľa ${username}.",
              "noUserPhotos": "${username} nemá žiadne verejné fotografie.",
              "didYouMean": "Mali ste na mysli ${username}?",
              "generalUserError": "Pri vyhľadávaní používateľa ${username} došlo k chybe."
            },
            "licenses": {
              "licenseLabel": "Licencia: ",
              "public": "Verejná doména",
              "commercial": "OK pre komerčné použitie",
              "nonCommercial": "OK pre nekomerčné použitie",
              "reserved": "Všetky práva vyhradené",
              "any": "Akákoľvek licencia"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Tento príbeh",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portál pre ArcGIS",
              "portal": "Portál",
              "myOrg": "Organizácia ${orgname}",
              "myContent": "Môj obsah"
            },
            "createContent": {
              "createNewMap": "Vytvoriť Novú mapu",
              "or": "ALEBO",
              "dragAndDropImage": "Pustiť obrázok",
              "dragAndDropImageAudio": "Pustiť obrázok alebo audio",
              "uploadButton": "Prehľadať",
              "agolInfo": "Nahrané obrázky a audio budú prístupné iba v rámci tohto príbehu.",
              "saveBeforeUpload": "Po uložení tohto príbehu môžete obrázky a audio nahrať do ArcGIS tu.",
              "fileExtsImage": "Podporované formáty: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Podporované formáty: png, jpg, gif, bmp, mp3.",
              "maxSize": "Max 10 MB pre súbor."
            },
            "filterAndSort": {
              "webmap": "Webmapa",
              "webscene": "Webscéna",
              "image": "Obrázok",
              "audio": "Audio",
              "date": "Dátum",
              "sortByDate": "Zoradiť podľa dátumu",
              "title": "Názov",
              "sortByTitle": "Zoradiť podľa názvu",
              "views": "Zobrazenia",
              "search": "Hľadať podľa kľúčových slov alebo ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Upraviť mapu",
      "unauthorizedDomain": "Nie ste v autorizovanej doméne na použitie editora máp.",
      "loading": "Počkajte, kým sa načíta editor máp",
      "saving": "Ukladám mapu",
      "success": "Mapa bola uložená",
      "cancelTitle": "Zahodiť neuložené zmeny?",
      "errorSave": "Nie je možné uložiť mapu. Skúste prosím znova.",
      "loadFail": "Ľutujeme, editor máp nie je možné načítať",
      "close": "Zatvoriť",
      "save": "Uložiť",
      "confirm": "Áno, zatvoriť mapu",
      "deny": "Nie, ešte pracujem"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Pokračovať v príbehu tu..."
      },
      "blockAdd": {
        "text": "Text",
        "media": "Médium",
        "title": "Názov",
        "immersive": "Zážitok"
      },
      "link": {
        "invite": "Prilepte alebo zadajte prepojenie..."
      },
      "color": {
        "choose": "vybrať",
        "cancel": "zrušiť",
        "clear": "Vymazať farbu"
      }
    },
    "imageGallery": {
      "addImage": "Pridať ďalší obrázok",
      "moveBackward": "Posunúť dozadu",
      "moveForward": "Posunúť dopredu"
    },
    "cover": {
      "titlePrompt": "Zadajte názov Vášho príbehu...",
      "subtitlePrompt": "Ak chcete začať, zrolujte nadol alebo zadajte voliteľný podnadpis",
      "mediaPlaceholder": "Pridajte Váš obrázok alebo video",
      "saveError": "Uloženie zlyhalo, už existuje položka s týmto názvom"
    },
    "credits": {
      "sectionInvite": "Pridať časť kreditov",
      "warning": "Obe polia musia byť vyplnené",
      "content": "Obsah...",
      "source": "Zdroj...",
      "linkPrompt": "Voliteľné prepojenie...",
      "introductionPlaceholder": "Zadajte voliteľný úvod do Vašej časti kreditov..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Vrstva"
      },
      "panelConfig": {
        "position": "Pozícia",
        "theme": "Vrstva",
        "size": "Veľkosť",
        "background": "Pozadie",
        "layout": "Rolovanie (pre panely)"
      }
    },
    "title": {
      "placeholder": "Zadať názov..."
    },
    "media": {
      "mediaUpload": "Prebieha nahrávanie médií...",
      "mediaUploadSuccess": "Médiá boli úspešne nahraté",
      "mediaUploadFail": "Nebolo možné nahrať médiá"
    },
    "controller": {
      "sectionOrganize": "Zorganizovali ste časti",
      "immersiveOrganize": "Zorganizovali ste zobrazenia",
      "sectionDelete": "Odstránili ste časti",
      "viewDelete": "Odstránili ste zobrazenia"
    },
    "notification": {
      "cancel": "Zrušiť",
      "close": "Zatvoriť",
      "undo": "Späť"
    },
    "sections": {
      "sequence": "Opis",
      "immersive": "Zážitok",
      "title": "Názov"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "obrázok",
        "audio": "audio",
        "webmap": "mapa",
        "webscene": "scéna",
        "video": "video",
        "content": "obsah",
        "webpage": "webová stránka"
      },
      "placeholders": {
        "generic": "Tento obsah nie je prístupný.",
        "deleted": "Táto položka bola vymazaná.",
        "inaccessible": "Tento obsah nie je prístupný.",
        "unauthorized": "Nie ste autorizovaný pre zobrazenie tohto obsahu.",
        "unshared": "Táto položka nie je zdieľaná rovnako ako Váš príbeh.",
        "othersUnshared": "Táto položka nie je zdieľaná rovnako ako Váš príbeh.",
        "subscriptionContent": "Táto mapa obsahuje vrstvu predplatiteľov.",
        "premiumContent": "Táto mapa obsahuje prémiovú vrstvu.",
        "secureService": "Táto mapa obsahuje zabezpečenú vrstvu."
      },
      "contentIssues": {
        "noAltImage": "Je možné, že médiá nebudú fungovať na mobilnom zariadení",
        "noAltImageUnsupported": "Médiá nie sú podporované na mobilnom zariadení",
        "noAltImageWarning": "Je možné, že médiá nebudú fungovať na mobilnom zariadení",
        "altImageBroken": "Alternatívny obrázok definovaný pre túto mediálnu položku nie je prístupný",
        "httpMedia": "Nezabezpečené médiá",
        "httpContent": "Nezabezpečený obsah"
      },
      "contentWarnings": {
        "noAltImage": "Pred zdieľaním nezabudnite otestovať svoj príbeh na mobilných zariadeniach. Ak toto médium nefunguje podľa očakávania, pomocou tlačidla nižšie pridajte alternatívny obrázok, ktorý sa zobrazí pri prezeraní príbehu v telefóne alebo na tablete.",
        "noAltImageUnsupported": "Toto médium nebude fungovať na mobilnom zariadení. Pomocou tlačidla nižšie môžete pridať alternatívny obrázok, ktorý sa zobrazí pri prehliadaní príbehu v telefóne alebo na tablete.",
        "noAltImageWarning": "Pred zdieľaním nezabudnite otestovať svoj príbeh na mobilných zariadeniach. Ak toto médium nefunguje podľa očakávania, pomocou tlačidla nižšie pridajte alternatívny obrázok, ktorý sa zobrazí pri prezeraní príbehu v telefóne alebo na tablete.",
        "noAltImageAlt": "Tento typ média nie je podporovaný alebo je možné, že nebude fungovať správne na mobilnom zariadení. Na karte Mobil zadajte alternatívny obrázok, ktorý sa zobrazí pri prehliadaní príbehu v telefóne alebo na tablete."
      },
      "descriptions": {
        "httpAudioUnfixable": "Toto audio nepodporuje HTTPS. Odstráňte ho zo svojho príbehu alebo ho nahraďte prepojením.",
        "httpAudioUncheckable": "Toto audio má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie sa pokúsite použiť pre toto audio adresu URL s HTTPS. Ak to nefunguje, odstráňte audio zo svojho príbehu alebo ho nahraďte hypertextovým odkazom.",
        "httpAudioFixable": "Toto audio má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie môžete pre toto audio použiť zabezpečenú adresu URL s HTTPS.",
        "httpWebpageUnfixable": "Táto webová stránka nepodporuje HTTPS. Odstráňte ho zo svojho príbehu alebo ho nahraďte snímkou obrazovky alebo prepojením.",
        "httpWebpageUncheckable": "Táto webová stránka má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie sa pokúsite použiť URL adresu HTTPS pre túto webovú stránku. Ak to nefunguje, odstráňte webovú stránku zo svojho príbehu alebo ju nahraďte snímkou obrazovky alebo hypertextovým odkazom.",
        "httpWebpageFixable": "Táto webová stránka má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie použite pre túto webovú stránku zabezpečenú URL adresu HTTPS .",
        "httpVideoUnfixable": "Toto video nepodporuje HTTPS. Odstráňte ho zo svojho príbehu alebo ho nahraďte snímkou obrazovky alebo prepojením.",
        "httpVideoUncheckable": "Toto video má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie sa pokúsite použiť URL adresu HTTPS pre toto video. Ak to nefunguje, odstráňte video zo svojho príbehu alebo ho nahraďte snímkou obrazovky alebo hypertextovým odkazom.",
        "httpVideoFixable": "Toto video má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie použite pre toto video zabezpečenú URL adresu HTTPS.",
        "httpImageUnfixable": "Tento obrázok nepodporuje HTTPS. Odstráňte ho zo svojho príbehu alebo ho nahraďte prepojením.",
        "httpImageUncheckable": "Tento obrázok má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie sa pokúsite použiť pre tento obrázok URL adresu HTTPS. Ak to nefunguje, odstráňte obrázok zo svojho príbehu alebo ho nahraďte hypertextovým odkazom.",
        "httpImageFixable": "Tento obrázok má nezabezpečenú (HTTP) URL adresu. Kliknutím na tlačidlo nižšie môžete pre tento obrázok použiť zabezpečenú URL adresu HTTPS.",
        "httpLayer": "Táto vrstva má nezabezpečenú (HTTP) URL adresu.",
        "inaccessibleLogo": "Toto logo nie je dostupné. Nahraďte ho iným obrázkom.",
        "httpLogoUnfixable": "Toto logo nepodporuje HTTPS. Nahraďte ho iným obrázkom.",
        "httpLogoFixable": "Toto logo má nezabezpečenú (HTTP) URL adresu. Použite HTTPS URL adresu pre toto logo.",
        "httpLogoUncheckable": "Toto logo má nezabezpečenú (HTTP) URL adresu. Použite HTTPS URL adresu pre toto logo alebo ho nahraďte iným obrázkom."
      },
      "tooltips": {
        "httpAudioFixable": "Kliknutím na toto tlačidlo použite pre toto audio zabezpečenú URL adresu HTTPS.",
        "httpAudioUncheckable": "Skúste pre tento zvuk použiť adresu URL s HTTPS. Ak to nefunguje, odstráňte audio zo svojho príbehu alebo ho nahraďte odkazom.",
        "httpWebpageFixable": "Kliknite na tlačidlo, ak chcete pre túto webovú stránku použiť zabezpečenú adresu HTTPS.",
        "httpWebpageUncheckable": "Skúste pre túto webovú stránku použiť adresu URL s HTTPS. Ak to nefunguje, odstráňte webovú stránku zo svojho príbehu alebo ju nahraďte snímkou obrazovky alebo odkazom.",
        "httpVideoFixable": "Kliknite na tlačidlo, ak chcete pre toto video použiť zabezpečenú adresu HTTPS.",
        "httpVideoUncheckable": "Skúste pre toto video použiť adresu URL s HTTPS. Ak to nefunguje, odstráňte video zo svojho príbehu alebo ho nahraďte snímkou obrazovky alebo odkazom.",
        "httpImageFixable": "Kliknite na tlačidlo, ak chcete pre tento obrázok použiť zabezpečenú adresu HTTPS.",
        "httpImageUncheckable": "Skúste pre tento obrázok použiť URL adresu HTTPS. Ak to nefunguje, odstráňte obrázok zo svojho príbehu alebo ho nahraďte odkazom.",
        "httpLayerMyMap": "Ak chcete aktualizovať túto vrstvu na používanie protokolu HTTPS, navštívte stránku s položkami na mape. Ak vrstvu nie je možné aktualizovať, odstráňte ju z mapy.",
        "httpLayerNotMyMap": "Vytvorte kópiu mapy a aktualizujte túto vrstvu na používanie protokolu HTTPS. Ak vrstvu nie je možné aktualizovať, odstráňte ju z mapy.",
        "clickLearnMore": "Kliknite a zistite viac"
      },
      "fixButtons": {
        "agolItemPage": "Stránka položiek",
        "openTheMap": "Otvoriť mapu",
        "updateAudio": "Opraviť URL audia",
        "updateWebpages": "Opraviť URL webovej stránky",
        "updateVideos": "Opraviť URL videa",
        "updateImages": "Opraviť URL obrázka"
      },
      "mapIssues": {
        "fixButton": "Vyriešiť problémy",
        "nofixButton": "Problémy",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Nezdieľaný obsah",
          "othersUnshared": "Nezdieľaný obsah niekoho iného",
          "subscriptionContent": "Obsah predplatného",
          "premiumContent": "Prémiový obsah",
          "secureContent": "Zabezpečený obsah",
          "deleted": "Vymazaný obsah",
          "inaccessible": "Nedostupný obsah",
          "unauthorized": "Neautorizovaný obsah"
        },
        "descriptions": {
          "unshared": "Tento obsah nie je zdieľaný rovnako ako Váš príbeh.",
          "othersUnshared": "Tento obsah vlastní niekto iný a nie je zdieľaný rovnako ako Váš príbeh.",
          "othersUnsharedAuthorized": "Tento obsah vlastní niekto iný, ale máte oprávnenie ho zdieľať.",
          "inaccessible": "Tento obsah nie je prístupný.",
          "deleted": "Tento obsah bol vymazaný.",
          "unauthorized": "Nie ste autorizovaný pre zobrazenie tohto obsahu.",
          "popupFeatureLayer": "Vyskakovacie okná dláždenej vrstvy pochádzajú z funkčnej vrstvy, ktorá nie je zdieľaná rovnako ako Váš príbeh.",
          "subscriptionContent": "Je potrebné povoliť obsah predplatiteľa pre verejné použitie.",
          "premiumContent": "Je potrebné povoliť prémiový obsah pre verejné použitie.",
          "secureService": "Zabezpečený obsah nie je prístupný Vašim čitateľom.",
          "missingItemWarning": "Položka priradená k tejto vrstve bola odstránená."
        },
        "tooltips": {
          "unshared": "Kliknite a zistite viac o zdieľaní.",
          "othersUnshared": "Nemáte oprávnenie na zdieľanie obsahu, ktorý vlastnia iné osoby. Požiadajte vlastníka, aby mapu zdieľal, prípadne ju odstránil zo svojho príbehu alebo ju upravil tak, aby odstránil vrstvy, ktoré nie sú Vaše. Kliknite a zistite viac o upravovaní máp.",
          "inaccessible": "Odstráňte túto mapu zo svojho príbehu alebo ju upravte tak, aby ste odstránili nedostupné vrstvy. Kliknite a zistite viac o upravovaní máp.",
          "deleted": "Odstráňte túto mapu zo svojho príbehu alebo ju upravte tak, aby ste odstránili chýbajúce vrstvy. Kliknite a zistite viac o upravovaní máp.",
          "unauthorized": "Odstráňte túto mapu zo svojho príbehu alebo ju upravte tak, aby ste odstránili neautorizované vrstvy. Kliknite a zistite viac o upravovaní máp.",
          "popupFeatureLayer": "Vyskakovacie okná dláždenej vrstvy pochádzajú z funkčnej vrstvy, ktorá nie je zdieľaná rovnako ako Váš príbeh.",
          "subscriptionContent": "Predplatiteľov obsah nespotrebúva kredity. Kliknite a zistite viac",
          "premiumContent": "Kredity sa budú účtovať Vašej organizácii zakaždým, keď niekto v príbehu uvidí prémiovú vrstvu. Kliknite a zistite viac",
          "secureService": "Odstráňte zabezpečený obsah zo svojho príbehu alebo kliknutím zistíte, ako autorizovať zabezpečený obsah na použitie inými používateľmi.",
          "missingItemWarning": "Táto vrstva stále funguje, ale je možné, že jej symboly, kontextové okná alebo názov sa zmenili. Skontrolujte, či sa vrstva ukazuje podľa očakávania, alebo ju odstráňte zo svojho príbehu."
        },
        "fixButtons": {
          "share": "Zdieľať",
          "hide": "Skryť",
          "authorize": "Autorizovať",
          "remove": "Odstrániť",
          "help": "Získať pomoc",
          "ignore": "Ignorovať",
          "confirm": "Potvrdiť",
          "edit": "Editovať mapu"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Zdieľané boli aj niektoré mapy a vrstvy.",
          "alsoSharedMaps": "Zdieľané boli aj niektoré mapy.",
          "alsoSharedLayers": "Zdieľané boli aj niektoré vrstvy.",
          "sharedOthersContent": "Použili ste Vaše administratívne povolenia na zdieľanie obsahu niekoho iného."
        }
      },
      "storyHealth": {
        "healthy": "Žiadne problémy",
        "notHealthy": "Vyriešiť problémy",
        "warnings": "Pozrieť upozornenia"
      }
    },
    "saveErrorSocial": {
      "title": "Zdieľanie sociálnych sietí",
      "panel1": "Váš príbeh sa nemusí na sociálnych sieťach zobrazovať správne, pretože názov položky webovej aplikácie ArcGIS nie je rovnaký ako názov príbehu.",
      "panel1tooltip": "Po zadefinovaní názvu, súhrnu a miniatúry obrázku bude Váš príbeh vyzerať nasledovne:",
      "panel2": "Ktorý názov chcete použiť na sociálnych sieťach:",
      "panel2q1": "Názov príbehu (odporúča sa)",
      "panel2q1tooltip": "Ak vyberiete túto možnosť, názov položky sa upraví tak, aby zodpovedal názvu Vášho príbehu a ďalšie zmeny v tvorcovi sa synchronizujú.",
      "panel2q2": "Názov položky",
      "panel3": "Na ďalšie vylepšenie vzhľadu Vášho príbehu na sociálnych sieťach použite ${MYSTORIES} na doplnenie zhrnutia a miniatúry obrázka.",
      "panel4": "Na tento príbeh ma už znova neupozorňovať",
      "save": "Uložiť",
      "mystories": "Moje Príbehy"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Dôležité informácie o zabezpečení webu a mapách s príbehom",
      "s1h1": "Esri zvyšuje bezpečnosť máp s príbehom",
      "s1p1": "Váš Mapový príbeh naživo na webe a webové komunity neustále pracujú na vytvorení a realizácii lepšieho zabezpečenia. HTTPS, ktorý poskytuje bezpečné pripojenie pre obsah prenášaný cez internet, sa objavuje ako očakávaný spôsob prístupu k webovému obsahu. Väčšina moderných prehliadačov teraz zobrazuje varovné správy, keď sa používa HTTP namiesto HTTPS. Z dôvodu tohto vznikajúceho štandardu Vám odporúčame používať odkazy HTTPS na tvorbu a zdieľanie mapových príbehov a URL adresy HTTPS používať iba pri vkladaní webového obsahu alebo prepojení na obrázky v mapových príbehoch.",
      "s1p2": "Prakticky to znamená, že k mapovým príbehom a všetkému obsahu (vrátane obrázkov, vrstiev, vložených aplikácií a webových stránok) by sa malo pristupovať pomocou odkazov, ktoré začínajú HTTPS a nie HTTP. Týmto zabezpečíte najlepší zážitok pre svojich čitateľov, pretože väčšina webových prehliadačov naznačuje, že Vaše príbehy sú bezpečné.",
      "s2h1": "Čo potrebujem spraviť?",
      "s2p1": "Esri pracuje na tom, aby sa to stalo ľahkým prechodom pre autorov a čitateľov mapových príbehov. Nástroje sú teraz k dispozícii v tvorcoch Mapových príbehov a Mojich príbehov, ktoré Vám pomôžu nájsť nezabezpečený obsah (HTTP) vo Vašich príbehoch a poskytnúť odporúčania, ako ho riešiť. Skontrolujte, či Vaše príbehy neobsahujú nezabezpečený obsah, a čo najskôr aktualizujte na HTTPS.",
      "action1": "Zatvoriť",
      "action2": "Skontrolovať moje príbehy teraz",
      "action3": "Zistiť viac",
      "floatingNotification": "Tento príbeh obsahuje nezabezpečený (HTTP) obsah. Prosím skontrolujte a vyriešte tieto problémy."
    },
    "extendedSupportMessage": {
      "bannerMsg": "Klasické Esri Mapy s príbehom sú v Rozšírenej podpore",
      "s1h1": "Dôležitá správa o klasických Esri Mapách s príbehom",
      "s1p1": "Klasické šablóny Esri Máp s príbehom sú v Rozšírenej podpore Všetkým zákazníkom odporúčame používať ArcGIS StoryMaps, aktuálnu generáciu nástroja od Esri na rozprávanie príbehov.",
      "s1p2": "Klasické šablóny už viac nepodliehajú aktívnemu rozvoju a nie sú odporúčané pre nové projekty. Pre ich vlastnosti nie sú plánované žiadne nové aktualizácie. Príbehy, ktoré ste vytvorili pomocou klasických šablón budú naďalej dostupné.",
      "s1p3": "V decembri 2021 budú klasické šablóny odstránené z predvolenej galérie configurable apps. Do skupiny vlastných konfigurovateľných aplikácií vašej organizácie možno pridať jednu alebo viac klasických šablón, ak je to potrebné na podporu súčasných pracovných postupov počas prechodu na používanie ArcGIS StoryMaps.",
      "s1p4": "Pre viac informácií kliknite na odkaz nižšie.",
      "action1": "Zatvoriť",
      "action2": "Zistiť viac",
      "action3": "Vyskúšajte ArcGIS StoryMaps"
    },
    "matureSupportMessage": {
      "bannerMsg": "Klasické Esri Mapy s príbehom sú v záverečnej fáze podpory",
      "s1h1": "Dôležitá správa o klasických Esri Mapách s príbehom",
      "s1p1": "Klasické šablóny Esri Máp s príbehom sú v záverečnej fáze podpory Všetkým zákazníkom odporúčame používať ArcGIS StoryMaps, aktuálnu generáciu nástroja od Esri na rozprávanie príbehov.",
      "s1p2": "Klasické šablóny už viac nepodliehajú aktívnemu rozvoju a nie sú odporúčané pre nové projekty. Pre ich vlastnosti nie sú plánované žiadne nové aktualizácie. Príbehy, ktoré ste vytvorili pomocou klasických šablón budú naďalej dostupné.",
      "s1p3": "Pre viac informácií kliknite na odkaz nižšie.",
      "action1": "Zatvoriť",
      "action2": "Zistiť viac",
      "action3": "Vyskúšajte ArcGIS StoryMaps"
    },
    "storyTellerUserType": {
      "notCreatorError": "Váš účet (%USER_NAME%) nemá licenciu na používanie klasických tvorcov mapových príbehov. Požiadajte správcu Vašej organizácie, aby vám priradil používateľa typu Creator."
    }
  }
});