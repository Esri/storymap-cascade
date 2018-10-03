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
    "share": {
      "btnPrivate": "Privāti",
      "btnOrg": "Organizācija",
      "btnPublic": "Publisks",
      "btnEveryone": "Ikviens"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Veidotājs",
      "buttonSaving": "Saglabā",
      "buttonSaved": "Saglabāts",
      "buttonError": "Saglabāšana neizdevās",
      "buttonShare": "Kopīgošana",
      "buttonSettings": "Iestatījumi",
      "settingsLogoError": "Jūsu logotipā ir radusies problēma. Noklikšķiniet, lai uzzinātu vairāk.",
      "buttonHelp": "Saņemt palīdzību vai iesniegt atsauksmi par GeoNet",
      "buttonPreview": "Skatīt stāstu",
      "buttonHealth": "Darbspējas pārskats",
      "manageStories": "Pārvaldīt manus stāstus",
      "closeWithPendingChange": "Vai tiešām vēlaties apstiprināt šo darbību? Jūsu veiktās izmaiņas tiks zaudētas.",
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
      "chooseTransition": "Izvēlēties pāreju",
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
        "remove": "Noņemt",
        "altTextPlaceholder": "Pievienojiet šīs multivides aprakstu lasītājiem ar redzes traucējumiem…",
        "altTextHelptip": "Alternatīvais teksts ir vizuālas multivides apraksts, ko izmanto palīgtehnoloģijas, piemēram, ekrāna lasītāja programmatūra. Tas nav obligāti, bet ir ieteicama atbilstība tīmekļa pieejamības vadlīnijām, piemēram, WCAG un 508. sadaļai."
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
        "alternativeMedia": "Alternatīvs attēls mobilajai ierīcei",
        "explanation": "Noteikta veida saturs mobilajās ierīcēs netiek atbalstīts vai var nedarboties pareizi. Izmantojiet šo paneli, lai norādītu attēlu, kas tiks rādīts šī satura vietā, kad stāsts tiks skatīts tālrunī vai planšetdatorā.",
        "changeAltImage": "Mainīt attēlu",
        "uploadAltImage": "Pievienot alternatīvu attēlu"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Saite uz saturu",
        "urls_short": "Saite",
        "contentType": {
          "error": "Nav autorizēta datu nesēja.",
          "imageOnly": "Šajā stāsta daļā varat pievienot attēlu.",
          "imageAndVideo": "Šajā stāsta daļā varat pievienot attēlu vai video.",
          "imageVideoWebpage": "Šajā stāsta daļā varat pievienot audio, attēlu, video vai tīmekļa lapu."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Tiek meklēts termins \"${searchterm}\"...",
          "searchedFor": "Termina \"${searchterm}” meklēšanas rezultāti",
          "albumsOf": "Lietotāja ${Username} albumi",
          "noPhotosFound": "Neviens fotoattēls neatbilst jūsu meklētajam. Lūdzu, mēģiniet vēlreiz.",
          "noItemsFound": "Neviena vienība neatbilst jūsu meklētajam. Lūdzu, mēģiniet vēlreiz.",
          "noItemsInThisStory": "Šim stāstam vēl nav pievienots saturs no ArcGIS.",
          "limitReached": "Tiek rādītas 100 vienības. Ja neatradāt meklēto, mēģiniet meklēt ar atslēgvārdu.",
          "galleryItems": {
            "uploadError": "Diemžēl šo vienību neizdevās augšupielādēt."
          },
          "agol": {
            "remove1": "Izdzēsiet šo neizmantoto attēlu no jūsu ArcGIS konta.",
            "remove2": "(Ja izlemsiet vēlāk to lietot, tas būs jāaugšupielādē vēlreiz.)",
            "removeFailed": "Noņemiet no saraksta šo attēlu, kam nevar piekļūt.",
            "modified": "Mainīšanas datums: ${date}",
            "uploaded": "Augšupielādes datums: ${date}",
            "contentByAuthor": "${contentType}, autors ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Pārlūkot fotoattēlus vietnē ${Picasa} vai ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Meklēt un pārlūkot fotoattēlus vietnē ${Flickr}",
            "captionStarter": "Fotoattēla autors: ${USERNAME} (${Flickr})"
          },
          "unsplash": {
            "searchAndBrowse": "Meklēt fotoattēlus vietnē ${Unsplash}",
            "photoBy": "Fotoattēls pēc lietotājvārda ${username}",
            "userLink": "Doties uz lietotāja ${username} ${Unsplash} lapu",
            "captionStarter": "Fotoattēla autors: ${USERNAME} (${Unsplash})"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Saite uz saturu tīmeklī",
              "imageOnly": "Saite uz attēlu tīmeklī",
              "imageAndVideo": "Saite uz attēlu vai video tīmeklī"
            },
            "linkText": {
              "imageOnly": "Augstāk esošajā lodziņā varat izveidot saiti tieši uz fotoattēlu.",
              "imageAndVideo1": "Augstāk esošajā lodziņā varat ielīmēt videoklipa no ${YouTube} vai ${Vimeo} saiti vai iframe kodu.",
              "imageAndVideo2": "Varat arī izveidot saiti tieši uz fotoattēlu.",
              "imageVideoWebpage1": "Augstāk esošajā lodziņā varat ielīmēt tīmekļa satura, piemēram, dinamiskas diagrammas vai videoklipa no ${YouTube} vai ${Vimeo} saiti vai iframe kodu.",
              "imageVideoWebpage2": "Varat arī izveidot saiti tieši uz fotoattēlu, videoklipu, audio failu, tīmekļa lapu vai tīmekļa lietotni.",
              "ender": "Noteikti izmantojiet drošas (https) saites. Ja jūsu saturs neatbalsta https, pievienojiet tiem saiti stāsta tekstā, lai lasītāji to varētu skatīt jaunā pārlūka cilnē.",
              "httpsError": "Saitei ir jāsākas ar HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Ielādēt lapu, izmantojot drošu savienojumu (https)",
              "embedProtocolWarning1": "Ja šī lapa jūsu stāstā neielādējas, to nevar iegult tīmekļa drošības iemeslu dēļ.",
              "embedProtocolWarning2": "Ja šī lapa jūsu stāstā neielādējas, noņemiet atzīmi no šīs iespējas un mēģiniet vēlreiz. Ja lapa joprojām neielādējas, to nevar iegult tīmekļa drošības iemeslu dēļ.",
              "embedProtocolWarning3": "Alternatīva iespēja — stāstījumam pievienojiet saiti, lai lapu atvērtu jaunā pārlūka cilnē. ${linkText}",
              "linkText": "Uzziniet vairāk."
            },
            "placeholder": "${https://}... vai ${<iframe>}",
            "uploadErrors": {
              "generic": "Ar ievadīto adresi radās problēma. Lūdzu, mēģiniet vēlreiz.",
              "imageOnly1": "Šajā stāsta daļā ir jāizmanto attēls.",
              "imageOnly2": "Lūdzu, sniedziet saiti uz attēlu (.jpg, .png, .gif) vai izvēlieties attēlu no ${ArcGIS}, ${Flickr}, ${Google+} vai  ${Unsplash}.",
              "imageAndVideo1": "Šajā stāsta daļā ir jāizmanto attēls vai video.",
              "imageAndVideo2": "Lūdzu, sagādājiet saiti uz attēlu (.jpg, .png, .gif), uz video vietnē ${YouTube} vai ${Vimeo} vai izvēlieties attēlu no ${ArcGIS}, ${Flickr}, ${Google+} vai ${Unsplash}.",
              "badFormat": "Saite uz failu, ko mēģināt pievienot, ir nepareizi formatēta.",
              "inaccessible": "Trūkst faila, ko mēģināt pievienot, vai tam nevar piekļūt.",
              "tryAgain": "Pārbaudiet ievadīto adresi un mēģiniet vēlreiz.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "attēls",
                "generic": "multivides fails"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Izmantojot šo trešās puses pakalpojumu, jūs piekrītat tā lietošanas noteikumiem. ",
          "googlePhotos": {
            "placeholder": "E-pasta adrese vai ${Picasa}/${Google+} ID",
            "helpText": "Savam stāstam varat pievienot ${Picasa} vai ${Google+} augšupielādētos attēlus. ${helpLinkText} par tādu attēlu izmantošanu stāstos, kas ir glabāti jūsu ${Google} kontā.",
            "helpLinkText": "Uzziniet vairāk",
            "cannotFindUser": "Nevar atrast lietotāju ${username}. Lūdzu, mēģiniet vēlreiz."
          },
          "unsplash": {
            "placeholder": "Meklēt fotoattēlus",
            "aboutText": "${Unsplash} ir pārraudzīta bezmaksas, augstas kvalitātes fotoattēlu kolekcija.",
            "copyrightText": "Visi fotoattēli ir licencēti saskaņā ar ${Unsplash} licenci. Atrodiet papildinformāciju ${moreInfoLink}.",
            "moreInfoLink": "šeit"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} konts",
              "text": "Viss ${Flickr}"
            },
            "placeholders": {
              "user": "Meklēt kontu",
              "userText": "Meklēt šajā kontā fotoattēlus",
              "text": "Meklēt fotoattēlus"
            },
            "errors": {
              "cannotFindUser": "Nevar atrast lietotāju ${username}.",
              "noUserPhotos": "Lietotājam ${username} nav neviena publiska fotoattēla.",
              "didYouMean": "Vai domājāt ${username}?",
              "generalUserError": "Meklējot lietotāju ${username}, radās problēma."
            },
            "licenses": {
              "licenseLabel": "Licence: ",
              "public": "Neaizsargātie darbi",
              "commercial": "OK komerciālai lietošanai",
              "nonCommercial": "OK nekomerciālai lietošanai",
              "reserved": "Visas tiesības paturētas",
              "any": "Jebkura licence"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Šis stāsts",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organizācija ${orgname}",
              "myContent": "Mans Saturs"
            },
            "createContent": {
              "createNewMap": "Izveidot jaunu karti",
              "or": "VAI",
              "dragAndDropImage": "Nomest attēlus",
              "dragAndDropImageAudio": "Nomest attēlus vai audio",
              "uploadButton": "Pārlūkot",
              "agolInfo": "Augšupielādētajiem attēliem un audio varēs piekļūt tikai šajā stāstā.",
              "saveBeforeUpload": "Pēc šī stāsta saglabāšanas šeit varat augšupielādēt attēlus un audio ArcGIS.",
              "fileExtsImage": "Atbalstītie tipi: .png, .jpg, .gif, .bmp.",
              "fileExtsImageAudio": "Atbalstītie tipi: .png, .jpg, .gif, .bmp, .mp3.",
              "maxSize": "Faila izmērs nedrīkst pārsniegt 10 MB."
            },
            "filterAndSort": {
              "webmap": "Tīmekļa karte",
              "webscene": "Tīmekļa scēna",
              "image": "Attēls",
              "audio": "Audio",
              "date": "Datums",
              "sortByDate": "Šķirot pēc datuma",
              "title": "Virsraksts",
              "sortByTitle": "Šķirot pēc virsraksta",
              "views": "Skatījumi",
              "search": "Meklēt pēc atslēgvārda vai ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Kartes rediģēšana",
      "unauthorizedDomain": "Domēnā, ko izmantojat, nav sankcionēta karšu redaktora izmantošana",
      "loading": "Pagaidiet, kamēr ielādējas karšu redaktors",
      "saving": "Saglabā karti",
      "success": "Karte ir saglabāta",
      "cancelTitle": "Vai atmest nesaglabātās izmaiņas?",
      "errorSave": "Neizdevās saglabāt karti. Mēģiniet vēlreiz.",
      "loadFail": "Diemžēl nevar ielādēt karšu redaktoru",
      "close": "Aizvērt",
      "save": "Saglabāt",
      "confirm": "Jā, aizvērt karti",
      "deny": "Nē, turpināt darbu"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Turpiniet šeit savu stāstu..."
      },
      "blockAdd": {
        "text": "Teksts",
        "media": "Informācijas datu nesēji",
        "title": "Virsraksts",
        "immersive": "Iekļaujošs"
      },
      "link": {
        "invite": "Ielīmējiet vai ierakstiet saiti..."
      },
      "color": {
        "choose": "izvēlēties",
        "cancel": "atcelt",
        "clear": "Notīrīt krāsu"
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
      "mediaUpload": "Notiek multivides augšupielāde…",
      "mediaUploadSuccess": "Multivides augšupielāde izdevās",
      "mediaUploadFail": "Multivides augšupielāde neizdevās"
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
        "audio": "audio",
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
        "noAltImage": "Saturs var nedarboties mobilajā ierīcē",
        "noAltImageUnsupported": "Saturs mobilajā ierīcē netiek atbalstīts",
        "noAltImageWarning": "Saturs var nedarboties mobilajā ierīcē",
        "altImageBroken": "Šī satura vienībai definētais alternatīvais attēls nav pieejams",
        "httpMedia": "Nedrošs multivides saturs",
        "httpContent": "Nedrošs saturs"
      },
      "contentWarnings": {
        "noAltImage": "Pirms kopīgošanas noteikti pārbaudiet savu stāstu mobilajās ierīcēs. Ja šis saturs nedarbojas, kā nākas, izmantojiet šo pogu un pievienojiet alternatīvu attēlu, kas tiks parādīts, kad stāsts tiks skatīts tālrunī vai planšetdatorā.",
        "noAltImageUnsupported": "Šis saturs mobilajās ierīcēs nedarbosies. Izmantojiet šo pogu un pievienojiet alternatīvu attēlu, kas tiks parādīts, kad stāsts tiks skatīts tālrunī vai planšetdatorā.",
        "noAltImageWarning": "Pirms kopīgošanas noteikti pārbaudiet savu stāstu mobilajās ierīcēs. Ja šis saturs nedarbojas, kā nākas, izmantojiet šo pogu un pievienojiet alternatīvu attēlu, kas tiks parādīts, kad stāsts tiks skatīts tālrunī vai planšetdatorā.",
        "noAltImageAlt": "Šī tipa saturs mobilajās ierīcēs netiek atbalstīts, vai arī tas mobilajās ierīcēs nedarbosies. Mobilo ierīču cilnē norādiet alternatīvu attēlu, kas tiks parādīts, kad stāsts tiks skatīts tālrunī vai planšetdatorā."
      },
      "descriptions": {
        "httpAudioUnfixable": "Šis audio saturs neatbalsta protokolu HTTPS. Noņemiet saturu no sava stāsta vai aizstājiet ar saiti.",
        "httpAudioUncheckable": "Šī audio satura vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šim audio saturam izmantotu HTTPS vietrādi URL. Ja tas neizdodas, noņemiet audio saturu no jūsu stāsta vai aizstājiet to ar hipersaiti.",
        "httpAudioFixable": "Šī audio satura vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šim audio saturam izmantotu drošu HTTPS vietrādi URL.",
        "httpWebpageUnfixable": "Šī tīmekļa lapa neatbalsta protokolu HTTPS. Noņemiet tīmekļa lapu no sava stāsta vai aizstājiet ar ekrānuzņēmumu vai saiti.",
        "httpWebpageUncheckable": "Šīs tīmekļa lapas vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šai tīmekļa lapai izmantotu HTTPS vietrādi URL. Ja tas neizdodas, noņemiet tīmekļa lapu no jūsu stāsta vai aizstājiet to ar ekrānuzņēmumu vai hipersaiti.",
        "httpWebpageFixable": "Šīs tīmekļa lapas vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šai tīmekļa lapai izmantotu drošu HTTPS vietrādi URL.",
        "httpVideoUnfixable": "Šis video saturs neatbalsta protokolu HTTPS. Noņemiet video saturu no sava stāsta vai aizstājiet ar ekrānuzņēmumu vai saiti.",
        "httpVideoUncheckable": "Šī video satura vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šim video saturam izmantotu HTTPS vietrādi URL. Ja tas neizdodas, noņemiet video saturu no jūsu stāsta vai aizstājiet to ar ekrānuzņēmumu vai hipersaiti.",
        "httpVideoFixable": "Šī video satura vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šim video saturam izmantotu drošu HTTPS vietrādi URL.",
        "httpImageUnfixable": "Šis attēls neatbalsta protokolu HTTPS. Noņemiet attēlu no sava stāsta vai aizstājiet ar saiti.",
        "httpImageUncheckable": "Šī attēla vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šim attēlam izmantotu HTTPS vietrādi URL. Ja tas neizdodas, noņemiet attēlu no jūsu stāsta vai aizstājiet to ar hipersaiti.",
        "httpImageFixable": "Šī attēla vietrādis URL ir nedrošs (HTTP). Noklikšķiniet uz zemāk redzamās pogas, lai šim attēlam izmantotu drošu HTTPS vietrādi URL.",
        "httpLayer": "Šī slāņa vietrādis URL ir nedrošs (HTTP).",
        "inaccessibleLogo": "Šis logotips nav pieejams. Aizstājiet to ar citu attēlu.",
        "httpLogoUnfixable": "Šis logotips neatbalsta protokolu HTTPS. Aizstājiet logotipu ar citu attēlu.",
        "httpLogoFixable": "Šī logotipa vietrādis URL ir nedrošs (HTTP). Logotipam izmantojiet HTTPS vietrādi URL.",
        "httpLogoUncheckable": "Šī logotipa vietrādis URL ir nedrošs (HTTP). Logotipam izmantojiet HTTPS vietrādi URL vai aizstājiet logotipu ar citu attēlu."
      },
      "tooltips": {
        "httpAudioFixable": "Noklikšķiniet uz pogas, lai šim audio saturam izmantotu drošu HTTPS vietrādi URL.",
        "httpAudioUncheckable": "Izmantojiet HTTPS vietrādi URL šim audio saturam. Ja tas neizdodas, noņemiet audio saturu no jūsu stāsta vai aizstājiet to ar saiti.",
        "httpWebpageFixable": "Noklikšķiniet uz pogas, lai šai tīmekļa lapai izmantotu drošu HTTPS vietrādi URL.",
        "httpWebpageUncheckable": "Izmantojiet HTTPS vietrādi URL šai tīmekļa lapai. Ja tas neizdodas, noņemiet tīmekļa lapu no jūsu stāsta vai aizstājiet to ar ekrānuzņēmumu vai saiti.",
        "httpVideoFixable": "Noklikšķiniet uz pogas, lai šim video saturam izmantotu drošu HTTPS vietrādi URL.",
        "httpVideoUncheckable": "Izmantojiet HTTPS vietrādi URL šim video saturam. Ja tas neizdodas, noņemiet video saturu no jūsu stāsta vai aizstājiet to ar ekrānuzņēmumu vai saiti.",
        "httpImageFixable": "Noklikšķiniet uz pogas, lai šim attēlam izmantotu drošu HTTPS vietrādi URL.",
        "httpImageUncheckable": "Izmantojiet HTTPS vietrādi URL šim attēlam. Ja tas neizdodas, noņemiet attēlu no jūsu stāsta vai aizstājiet to ar saiti.",
        "httpLayerMyMap": "Apmeklējiet kartes vienību lapu, lai atjaunotu šo slāni un tajā izmantotu protokolu HTTPS. Ja slāni nevar atjaunot, noņemiet to no kartes.",
        "httpLayerNotMyMap": "Izveidojiet kartes kopiju un atjaunojiet šo slāni, lai tajā tiktu izmantots protokols HTTPS. Ja slāni nevar atjaunot, noņemiet to no kartes.",
        "clickLearnMore": "Noklikšķiniet, lai uzzinātu vairāk."
      },
      "fixButtons": {
        "agolItemPage": "Vienību lapa",
        "openTheMap": "Atvērt karti",
        "updateAudio": "Salabot audio satura vietrādi URL",
        "updateWebpages": "Salabot tīmekļa lapas vietrādi URL",
        "updateVideos": "Salabot video satura vietrādi URL",
        "updateImages": "Salabot attēla vietrādi URL"
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
    },
    "saveErrorSocial": {
      "title": "Sociālās multivides kopīgošana",
      "panel1": "Jūsu stāsts sociālajā multividē var netikt rādīts pareizi, jo jūsu ArcGIS tīmekļa lietotnes vienības virsraksts atšķiras no stāsta virsraksta.",
      "panel1tooltip": "Kad būsiet definējis virsrakstu, kopsavilkumu un sīktēla attēlu, jūsu stāsts izskatīsies šādi:",
      "panel2": "Kādu virsrakstu vēlaties izmantot sociālajā multividē:",
      "panel2q1": "Stāsta virsraksts (ieteicams)",
      "panel2q1tooltip": "Ja izvēlēsieties šo opciju, vienības virsraksts tiks modificēts tā, lai atbilstu stāsta virsrakstam, un veidotājā tiks sinhronizētas tālākās izmaiņas.",
      "panel2q2": "Vienības virsraksts",
      "panel3": "Ja sociālajā multividē vēlaties vēl vairāk uzlabot stāsta izskatu, izmantojiet ${MYSTORIES}, lai pievienotu kopsavilkumu un sīktēla attēlu.",
      "panel4": "Vairs nerādīt brīdinājumus par šo stāstu",
      "save": "Saglabāt",
      "mystories": "Mani stāsti"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Svarīgs ziņojums par tīmekļa drošību un Kartes stāstiem (Story Maps)",
      "s1h1": "Esri uzlabo Kartes stāstu drošību",
      "s1p1": "Jūsu Kartes stāsti dzīvo tīmeklī, un tīmekļa kopiena vienmēr strādā, lai nodrošinātu un uzlabotu drošību. HTTPS, kas nodrošina drošu savienojumu ar internetā pārraidītu saturu, tiek parādīts kā paredzētais veids, kā piekļūt tīmekļa saturam. Lielākā daļa moderno pārlūku tagad parāda brīdinājuma ziņojumus, ja tiek izmantots HTTP, nevis HTTPS. Šī jaunā standarta dēļ mēs stingri iesakām izmantot HTTPS saites Kartes stāstu autorēšanai un koplietošanai, kā arī izmantot HTTPS vietrāžus URL, iegulstot tīmekļa saturu vai sasaistot ar attēliem Kartes stāstā.",
      "s1p2": "Praktiski runājot, tas nozīmē, ka Kartes stāstam un visam tās saturam (ieskaitot attēlus, slāņus, iegultās lietotnes un tīmekļa vietnes), ir jānodrošina piekļuve, izmantojot saites, kas sākas ar HTTPS, nevis HTTP. Tas nodrošina labāko pieredzi jūsu lasītājiem, jo lielākā daļa tīmekļa pārlūku norāda, ka jūsu stāsti ir droši.",
      "s2h1": "Kas man jādara?",
      "s2p1": "Esri strādā, lai padarītu to par vienkāršu pāreju Kartes stāsta autoriem un lasītājiem. Kartes stāstu veidotājos un Manos stāstos ir pieejami rīki, kas jums palīdzēs atrast nedrošo saturu (HTTP) jūsu stāstos un sniegs ieteikumus, kā to risināt. Lūdzu, pārbaudiet savus stāstus uz nedrošu saturu un pēc iespējas ātrāk atjauniniet HTTPS.",
      "action1": "Aizvērt",
      "action2": "Pārbaudīt manus stāstus tūlīt",
      "action3": "Uzziniet vairāk",
      "floatingNotification": "Šajā stāstā ir ietverts nedrošs (HTTP) saturs. Izskatiet un novērsiet problēmas."
    }
  }
});