/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Käytä",
      "close": "Sulje"
    },
    "header": {
      "sharingNotAvailable": "Tämä toiminto ei ole käytettävissä, ennen kuin jaat tarinan",
      "edit": "Muokkaa"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Kirjanmerkit",
        "logoSharing": "Logo ja jakaminen",
        "theme": "Ulkoasu"
      },
      "bookmarks": {
        "title": "Osio",
        "bookmark": "Kirjanmerkki",
        "intro": "Kirjanmerkit ovat tarinan osioiden linkkejä, jotka näkyvät otsikkorivillä. Ytimekkäiden kirjanmerkkien luonti tarinan pääosioita varten auttaa lukijoita perehtymisessä.",
        "sequentialDefault": "Kerrontaosio (tekstiä ei löytynyt)",
        "immersiveDefault": "Immersiivinen osio (tekstiä ei löytynyt)",
        "titleDefault": "Otsikko-osio (tekstiä ei löytynyt)",
        "coverDefault": "Kansi-osio (tekstiä ei löytynyt)",
        "coverAppendage": "(Kansi)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Käytä ${ESRI}-logoa",
        "useOrgLogo": "Käytä oman organisaation logoa",
        "useOrgLogoHelp": "Käytä pääkäyttäjän toimittamaa logoa",
        "logoLink": "Logolinkki",
        "logoUploadProgress": "Logon lataus on meneillään",
        "logoUploadSuccess": "Logon lataaminen onnistui",
        "logoUploadError": "Logon lataaminen epäonnistui. Vaihdetaan takaisin ${ESRI}-logoon",
        "customHeaderText": "Iskulause",
        "taglineLinkDisabledTooltip": "Ota linkki käyttöön kirjoittamalla iskulause",
        "link": "Iskulauselinkki",
        "enableSocialSharing": "Näytä jakamispainike"
      },
      "appearance": {
        "themeLabel": "Teema",
        "fontLabel": "Fontit",
        "previewLabel": "Esikatselu",
        "fontsTitleLabel": "Otsikot",
        "fontsBodyLabel": "Runko-osa",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Yksityinen",
      "btnOrg": "Organisaatio",
      "btnPublic": "Julkinen",
      "btnEveryone": "Jokainen"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Muodostusohjelma",
      "buttonSaving": "Tallennetaan",
      "buttonSaved": "Tallennettu",
      "buttonError": "Tallennus epäonnistui",
      "buttonShare": "Jaa",
      "buttonSettings": "Asetukset",
      "settingsLogoError": "Logossasi on ongelma. Saat lisätietoja napsauttamalla.",
      "buttonHelp": "Etsi ohjeita tai lähetä palautetta GeoNetistä",
      "buttonPreview": "Näytä tarina",
      "buttonHealth": "Terveysraportti",
      "manageStories": "Omien tarinoiden hallinta",
      "closeWithPendingChange": "Haluatko varmasti vahvistaa tämän toiminnon? Menetät tekemäsi muutokset.",
      "coverLabel": "Kansi",
      "creditsLabel": "Krediitit",
      "betaFeedback": "Palaute",
      "betaNote": "Kerro meille, mitä pidät sovelluksesta ${APP_NAME}, tai jos jokin ei toimi odottamallasi tavalla.",
      "notSharedNote": "Tarinaasi ei ole jaettu. Vain sinä näet sen.",
      "organizationWarning": "Jos haluat varmistaa, että muut näkevät tarinasi, sinun on jaettava organisaatiosi kanssa myös tarinan maisemat, maisemakarttatasot ja upotetut sovellukset.",
      "publicWarning": "Jos haluat varmistaa, että muut näkevät tarinasi, sinun on jaettava kaikkien kanssa myös tarinan maisemat, maisemakarttatasot ja upotetut sovellukset.",
      "addTitleNote": "Tallenna lisäämällä otsikko kanteen",
      "saveError": "Tarinan tallennuksessa tapahtui virhe.",
      "duplicate": "Tee kopio",
      "organize": "Järjestä",
      "done": "Valmis",
      "invite": "Kun luot tarinaasi, osiot tulevat näkyviin tähän...",
      "mystoriestooltip": "Cascade Builder ilmoittaa tarinassa olevista ongelmista ja auttaa niiden korjaamisessa. Maisemia ja upotettuja sovelluksia ei tarkisteta, joten tarkista ne manuaalisesti."
    },
    "immersiveViewPanel": {
      "transition": "Siirtymä",
      "chooseTransition": "Valitse siirtymä",
      "fade": "Häivytä",
      "fadeSlow": "Häivytä hitaasti",
      "swipeVertical": "Pyyhkäise pystysuunnassa",
      "swipeHorizontal": "Pyyhkäise vaakasuunnassa",
      "none": "Ei mitään",
      "disabledConsecutiveSameMedia": "Ei ole käytettävissä, kun peräkkäisissä näkymissä käytetään samaa mediaa",
      "disabledTooltipMap": "Tämän siirtymän käyttö edellyttää, että molempien näkymien näkyvien karttatasojen on oltava erilaisia ja että muiden kartan ominaisuuksien on oltava samat",
      "disabledConsecutiveSameMap": "Ei ole käytettävissä, kun peräkkäisissä näkymissä käytetään samaa karttaa",
      "disabledNotInBeta": "Ei ole käytettävissä, kun peräkkäisissä näkymissä käytetään samaa karttaa",
      "disabledNonConsecutive": "Ei ole käytettävissä, koska tästä mediasta on toinen esiintymä, joka ei ole peräkkäinen",
      "addMedia": "Lisää media",
      "invite": "Kun luot immersiivistä osaa, näkymät tulevat näkyviin tähän..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Ulkoasu",
        "manage": "Hallitse",
        "size": "Koko",
        "background": "Tausta",
        "mobile": "Mobiili",
        "issues": "Ongelmia",
        "fixIssues": "Korjaa ongelmat"
      },
      "manage": {
        "changeMedia": "Vaihda media",
        "edit": "Muokkaa",
        "editAside": "Avautuu uuteen selaimen välilehteen. Kun olet tallentanut muokkaukset, tallenna ja lataa uudelleen tämä tarina, jotta näet tekemäsi muutokset.",
        "remove": "Poista",
        "altTextPlaceholder": "Lisää tämän median kuvaus näkövammaisia lukijoita varten...",
        "altTextHelptip": "Vaihtoehtoinen teksti on näkyvän median kuvaus, jota käytetään helppokäyttötekniikoissa, kuten näytönlukuohjelmistoissa. Kuvaus on valinnainen, mutta sen käyttöä suositellaan verkon helppokäyttöisyysohjeiden (esim. WCAG ja Section 508) mukaisesti."
      },
      "appearance": {
        "homeView": "Alkuperäinen näkymä",
        "audio": "Audio",
        "on": "Käytössä",
        "muted": "Vaimennettu",
        "volumeAside": "Video toistetaan automaattisesti, kun lukija siirtyy tähän näkymään. Jos vaimennat äänen, lukija ei voi ottaa ääntä käyttöön.",
        "view": "Näytä",
        "resetLocation": "Palauta sijainti",
        "resetLayers": "Palauta karttatasot",
        "clearPopup": "Tyhjennä ponnahdusikkuna",
        "interaction": "Vuorovaikutus",
        "interactionDisabled": "Vuorovaikutus on poistettu käytöstä",
        "buttonToEnable": "Käyttöönoton painike",
        "interactionEnabled": "Vuorovaikutus on käytössä",
        "interactionAside": "*Kosketuslaitteissa näkyy vuorovaikutuspainike.",
        "slide": "Dia",
        "noSlides": "Yhtään diaa ei ole käytettävissä.",
        "mapExtentPrompt": "Kerro tarinasi päivittämällä kartta ja tallenna muutokset napsauttamalla valintamerkkiä"
      },
      "sectionAppearance": {
        "layout": "Asettelu",
        "theme": "Teema"
      },
      "size": {
        "small": "Pieni",
        "medium": "Keskitaso",
        "large": "Suuri",
        "noCrop": "Älä rajaa korkeita kuvia",
        "noCropTallTooltip": "Jos et rajaa korkeaa kuvaa, lukijat joutuvat vierittämään kuvaa nähdäkseen sen kokonaan, mikä ei ole suotavaa."
      },
      "background": {
        "noCrop": "Älä rajaa",
        "mostImportantPart": "Valitse tärkein piste",
        "cropExplanationImmersive": "Määritä, miten kuva rajataan erikokoisissa näytöissä, valitsemalla piste kuvasta. Valitsemasi piste näkyy aina. Valitse Älä raja -valintaruutu, jos kuvan on näyttävä kokonaan.",
        "cropExplanation": "Määritä, miten kuva rajataan erikokoisissa näytöissä, valitsemalla piste kuvasta. Valitsemasi piste näkyy aina.",
        "color": "Väri",
        "previews": "Esikatselut"
      },
      "altMedia": {
        "alternativeMedia": "Vaihtoehtoinen kuva mobiilikäyttöä varten",
        "explanation": "Joitakin mediatyyppejä ei tueta tai ne eivät toimi hyvin mobiililaitteissa. Tässä paneelissa voit määrittää kuvan, joka näytetään tämän median tilalla, kun tarinaasi tarkastellaan puhelimessa tai tabletilla.",
        "changeAltImage": "Vaihda kuva",
        "uploadAltImage": "Lisää vaihtoehtoinen kuva"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Linkki sisältöön",
        "urls_short": "Linkki",
        "contentType": {
          "error": "Ei valtuutettua mediaa.",
          "imageOnly": "Tässä tarinan osassa voit lisätä kuvan.",
          "imageAndVideo": "Tässä tarinan osassa voit lisätä kuvan tai videon.",
          "imageVideoWebpage": "Tässä tarinan osassa voit lisätä ääntä, kuvan, videon tai verkkosivun."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Etsitään kohdetta ${searchterm}...",
          "searchedFor": "Kohteen ${searchterm} hakutulokset",
          "albumsOf": "Käyttäjän ${username} albumit",
          "noPhotosFound": "Yksikään valokuva ei täsmännyt hakuasi. Yritä uudelleen.",
          "noItemsFound": "Yksikään kohde ei täsmännyt hakuasi. Yritä uudelleen.",
          "noItemsInThisStory": "ArcGISista ei ole lisätty vielä yhtään sisältöä tähän tarinaan.",
          "limitReached": "Näytetään 100 kohdetta. Jos et löytänyt tarvitsemaasi, kokeile avainsanahakua.",
          "galleryItems": {
            "uploadError": "Valitettavasti tämän kohteen lataus palvelimeen epäonnistui."
          },
          "agol": {
            "remove1": "Poista tämä käyttämätön kuva ArcGIS-tilistäsi.",
            "remove2": "(Joudut lataamaan kuvan uudelleen, jos haluat käyttää sitä myöhemmin.)",
            "removeFailed": "Poista luettelosta tämä kuva, jota et voi käyttää.",
            "modified": "Muokkauspäivämäärä: ${date}",
            "uploaded": "Latauspäivämäärä: ${date}",
            "contentByAuthor": "${contentType}, tekijä: ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Selaa valokuvia ${Picasa}ssa tai ${Google+}:ssa"
          },
          "flickr": {
            "photostream": "Valokuvavirta",
            "searchAndBrowse": "Etsi ja selaa valokuvia ${Flickr}ssä",
            "captionStarter": "Käyttäjän ${USERNAME} valokuva palvelussa ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Etsi valokuvia ${Unsplash}issa",
            "photoBy": "Käyttäjän ${username} valokuva",
            "userLink": "Siirry käyttäjän ${username} ${Unsplash}-sivulle",
            "captionStarter": "Käyttäjän ${USERNAME} valokuva palvelussa ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Linkki verkkosisältöön",
              "imageOnly": "Linkki verkossa olevaan valokuvaan",
              "imageAndVideo": "Linkki verkossa olevaan valokuvaan tai videoon"
            },
            "linkText": {
              "imageOnly": "Yllä olevassa ruudussa voit luoda linkin suoraan valokuvaan.",
              "imageAndVideo1": "Yllä olevassa ruudussa voit liittää linkin tai iframe-koodin ${YouTube}- tai ${Vimeo}-videota varten.",
              "imageAndVideo2": "Voit myös luoda linkin suoraan valokuvaan.",
              "imageVideoWebpage1": "Yllä olevassa ruudussa voit liittää linkin tai iframe-koodin verkkosisältöä, kuten dynaamista kaaviota tai ${YouTube}- ja ${Vimeo}-videota varten.",
              "imageVideoWebpage2": "Voit myös luoda linkin suoraan valokuvaan, videoon, äänitiedostoon, verkkosivuun tai web-sovellukseen.",
              "ender": "Käytä aina suojattuja (HTTPS) linkkejä. Jos sisältösi ei tue HTTPS-protokollaa, lisää linkki tarinasi tekstiin, jotta lukijat voivat tarkastella sitä uudessa selainikkunassa.",
              "httpsError": "Linkin on alettava merkkijonolla HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Lataa sivu suojatun yhteyden kautta (https)",
              "embedProtocolWarning1": "Jos tämä sivu ei lataudu tarinassa, sitä ei voi upottaa suojaussyistä.",
              "embedProtocolWarning2": "Jos tämä sivu ei lataudu tarinassa, poista tämän valintaruudun valinta ja yritä uudelleen. Jos sivu ei edelleenkään lataudu, sitä ei voi upottaa suojaussyistä.",
              "embedProtocolWarning3": "Voit vaihtoehtoisesti lisätä linkin tarinaan, jolloin sivu avautuu uudella välilehdellä selaimessa. ${linkText}",
              "linkText": "Lisätietoja."
            },
            "placeholder": "${https://}... tai ${<iframe>}",
            "uploadErrors": {
              "generic": "Annettu osoite on virheellinen. Yritä uudelleen.",
              "imageOnly1": "Tässä tarinan osassa on käytettävä kuvaa.",
              "imageOnly2": "Määritä linkki kuvaan (.jpg, .png tai .gif) tai valitse ${ArcGIS}-, ${Flickr}-, ${Google+}- tai ${Unsplash}-palvelun kuva.",
              "imageAndVideo1": "Tässä tarinan osassa on käytettävä kuvaa tai videota.",
              "imageAndVideo2": "Määritä linkki kuvaan (.jpg, .png tai .gif) tai ${YouTube}- tai ${Vimeo}-palvelun videoon. Voit vaihtoehtoisesti valita ${ArcGIS}-, ${Flickr}-, ${Google+}- tai ${Unsplash}-palvelun kuvan.",
              "badFormat": "Linkki tiedostoon, jota yrität lisätä, on muotoiltu väärin.",
              "inaccessible": "Tiedosto, jota yrität lisätä, puuttuu tai sitä ei voi käyttää.",
              "tryAgain": "Tarkista osoite ja yritä uudelleen.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "kuva",
                "generic": "media"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Käyttämällä kolmannen osapuolen palvelua suostut sen palveluehtoihin: ",
          "googlePhotos": {
            "placeholder": "Sähköpostiosoite tai ${Picasa}-/${Google+}-tunnus",
            "helpText": "Voit lisätä tarinaasi valokuvia, jotka on ladattu ${Picasa}- tai ${Google+}-palveluun. ${helpLinkText} ${Google}-tiliisi tallennettujen kuvien käytöstä tarinoissa.",
            "helpLinkText": "Lisätietoja",
            "cannotFindUser": "Käyttäjää ${username} ei löydy. Yritä uudelleen."
          },
          "unsplash": {
            "placeholder": "Etsi valokuvia",
            "aboutText": "${Unsplash} on ilmaisten ja korkealaatuisten valokuvien järjestetty kokoelma.",
            "copyrightText": "Kaikki valokuvat ovat ${Unsplash}-lisenssin alaisia. Lisätietoja on kohdassa ${moreInfoLink}.",
            "moreInfoLink": "tätä"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr}-tili",
              "text": "Kaikki – ${Flickr}"
            },
            "placeholders": {
              "user": "Etsi tiliä",
              "userText": "Etsi valokuvia tästä tilistä",
              "text": "Etsi valokuvia"
            },
            "errors": {
              "cannotFindUser": "Käyttäjää ${username} ei löydy.",
              "noUserPhotos": "Käyttäjällä ${username} ei ole julkisia valokuvia.",
              "didYouMean": "Tarkoititko käyttäjää ${username}?",
              "generalUserError": "Käyttäjän ${username} etsinnässä tapahtui virhe."
            },
            "licenses": {
              "licenseLabel": "Lisenssi: ",
              "public": "Public Domain",
              "commercial": "Kaupallinen käyttö – OK",
              "nonCommercial": "Muu kuin kaupallinen käyttö – OK",
              "reserved": "Kaikki oikeudet pidätetään",
              "any": "Mikä tahansa lisenssi"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Tämä tarina",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portaali",
              "myOrg": "Organisaatio ${orgname}",
              "myContent": "Oma sisältö"
            },
            "createContent": {
              "createNewMap": "Luo uusi kartta",
              "or": "TAI",
              "dragAndDropImage": "Pudota kuvat",
              "dragAndDropImageAudio": "Pudota kuvat tai äänitiedostot",
              "uploadButton": "Selaa",
              "agolInfo": "Sivustoon ladatut kuvat ja äänitiedostot ovat käytettävissä vain tässä tarinassa.",
              "saveBeforeUpload": "Kun tallennat tämän tarinan, voit ladata kuvat tai äänitiedostot ArcGISiin tässä.",
              "fileExtsImage": "Tuetut tiedostotyypit: .png, .jpg, .gif ja .bmp.",
              "fileExtsImageAudio": "Tuetut tiedostotyypit: .png, .jpg, .gif, .bmp ja mp3.",
              "maxSize": "Enintään 10 Mt tiedostoa kohti."
            },
            "filterAndSort": {
              "webmap": "Web-kartta",
              "webscene": "Web-maisema",
              "image": "kuva",
              "audio": "Ääni",
              "date": "Päivämäärä",
              "sortByDate": "Lajittele päivämäärän perusteella",
              "title": "Otsikko",
              "sortByTitle": "Lajittele otsikon perusteella",
              "views": "Katselukerrat",
              "search": "Hae avainsanan tai tunnuksen perusteella"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Muokkaa karttaa",
      "unauthorizedDomain": "Et ole kartan muokkausohjelman edellyttämässä valtuutetussa toimialueessa",
      "loading": "Odota, kunnes kartan muokkausohjelma on latautunut",
      "saving": "Tallennetaan karttaa",
      "success": "Kartta on tallennettu",
      "cancelTitle": "Hylätäänkö kaikki tallentamattomat muutokset?",
      "errorSave": "Karttaa ei voi tallentaa. Yritä uudelleen.",
      "loadFail": "Kartan muokkausohjelmaa ei voi ladata",
      "close": "Sulje",
      "save": "Tallenna",
      "confirm": "Kyllä, sulje kartta",
      "deny": "Ei, jatka käsittelyä"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Jatka tarinaasi tässä..."
      },
      "blockAdd": {
        "text": "Teksti",
        "media": "Media",
        "title": "Otsikko",
        "immersive": "Immersiivinen"
      },
      "link": {
        "invite": "Liitä tai kirjoita linkki..."
      },
      "color": {
        "choose": "valitse",
        "cancel": "peruuta",
        "clear": "Tyhjennä väri"
      }
    },
    "imageGallery": {
      "addImage": "Lisää toinen kuva",
      "moveBackward": "Siirrä taakse",
      "moveForward": "Siirrä eteen"
    },
    "cover": {
      "titlePrompt": "Anna tarinan otsikko...",
      "subtitlePrompt": "Aloita vierittämällä alaspäin tai kirjoita valinnainen alaotsikko",
      "mediaPlaceholder": "Lisää kuva tai video",
      "saveError": "Tallennus epäonnistui. Sinulla on jo kohde, jonka otsikko on tämä."
    },
    "credits": {
      "sectionInvite": "Lisää Krediitit-osio",
      "warning": "Molemmat kentät on täytettävä",
      "content": "Sisältö...",
      "source": "Lähde...",
      "linkPrompt": "Valinnainen linkki...",
      "introductionPlaceholder": "Kirjoita valinnainen Krediitit-osion esittely..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Teema"
      },
      "panelConfig": {
        "position": "Sijainti",
        "theme": "Teema",
        "size": "Koko",
        "background": "Tausta",
        "layout": "Vieritys (kaikille paneeleille)"
      }
    },
    "title": {
      "placeholder": "Anna otsikko..."
    },
    "media": {
      "mediaUpload": "Median lataus sivustoon on meneillään...",
      "mediaUploadSuccess": "Median lataaminen onnistui",
      "mediaUploadFail": "Median lataaminen epäonnistui"
    },
    "controller": {
      "sectionOrganize": "Osiot on järjestetty",
      "immersiveOrganize": "Näkymät on järjestetty",
      "sectionDelete": "Olet poistanut osion",
      "viewDelete": "Olet poistanut näkymän"
    },
    "notification": {
      "cancel": "Peruuta",
      "close": "Sulje",
      "undo": "Kumoa"
    },
    "sections": {
      "sequence": "Kerronta",
      "immersive": "Immersiivinen",
      "title": "Otsikko"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "kuva",
        "audio": "ääni",
        "webmap": "kartta",
        "webscene": "maisema",
        "video": "video",
        "content": "sisältö",
        "webpage": "Web-sivu"
      },
      "placeholders": {
        "generic": "Tätä sisältöä ei voi käyttää.",
        "deleted": "Tämä kohde on poistettu.",
        "inaccessible": "Tätä sisältöä ei voi käyttää.",
        "unauthorized": "Sinulla ei ole tämän sisällön tarkasteluoikeuksia.",
        "unshared": "Tätä kohdetta ei jaeta samalla tavalla tarinan kanssa.",
        "othersUnshared": "Tätä kohdetta ei jaeta samalla tavalla tarinan kanssa.",
        "subscriptionContent": "Tämä kartta sisältää Tilaaja-karttatason.",
        "premiumContent": "Tämä kartta sisältää Premium-karttatason.",
        "secureService": "Tämä kartta sisältää suojatun karttatason."
      },
      "contentIssues": {
        "noAltImage": "Media ei ehkä toimi mobiililaitteessa",
        "noAltImageUnsupported": "Mobiililaite ei tue mediaa",
        "noAltImageWarning": "Media ei ehkä toimi mobiililaitteessa",
        "altImageBroken": "Tälle medialle määritetty vaihtoehtoinen kuva ei ole käytettävissä",
        "httpMedia": "Suojaamaton media",
        "httpContent": "Suojaamaton sisältö"
      },
      "contentWarnings": {
        "noAltImage": "Testaa tarinasi mobiililaitteissa ennen sen jakamista. Jos media ei toimi odotetulla tavalla, lisää alla olevan painikkeen avulla vaihtoehtoinen kuva, joka näytetään, kun tarinaa tarkastellaan puhelimessa tai tabletilla.",
        "noAltImageUnsupported": "Tämäntyyppinen media ei toimi mobiililaitteissa. Lisää alla olevan painikkeen avulla vaihtoehtoinen kuva, joka näytetään, kun tarinaa tarkastellaan puhelimessa tai tabletilla.",
        "noAltImageWarning": "Testaa tarinasi mobiililaitteissa ennen sen jakamista. Jos media ei toimi odotetulla tavalla, lisää alla olevan painikkeen avulla vaihtoehtoinen kuva, joka näytetään, kun tarinaa tarkastellaan puhelimessa tai tabletilla.",
        "noAltImageAlt": "Mobiililaitteet eivät tue tämäntyyppistä mediaa tai se ei toimi kunnolla. Määritä mobiilivälilehdellä vaihtoehtoinen kuva, joka näytetään, kun tarinaa tarkastellaan puhelimessa tai tabletilla."
      },
      "descriptions": {
        "httpAudioUnfixable": "Tämä äänitiedosto ei tue HTTPS-protokollaa. Poista äänitiedosto tarinastasi tai korvaa se linkillä.",
        "httpAudioUncheckable": "Tämän äänitiedoston URL-osoite on suojaamaton (HTTP). Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä äänitiedostoa varten napsauttamalla alla olevaa painiketta. Jos se ei toimi, poista äänitiedosto tarinasta tai korvaa se hyperlinkillä.",
        "httpAudioFixable": "Tämän äänitiedoston URL-osoite on suojaamaton (HTTP). Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä äänitiedostoa varten napsauttamalla alla olevaa painiketta.",
        "httpWebpageUnfixable": "Tämä verkkosivu ei tue HTTPS-protokollaa. Poista verkkosivu tarinastasi tai korvaa se näyttökuvalla tai linkillä.",
        "httpWebpageUncheckable": "Tämän verkkosivun URL-osoite on suojaamaton (HTTP). Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä verkkosivua varten napsauttamalla alla olevaa painiketta. Jos se ei toimi, poista verkkosivu tarinasta tai korvaa se näyttökuvalla tai hyperlinkillä.",
        "httpWebpageFixable": "Tämän verkkosivun URL-osoite on suojaamaton (HTTP). Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä verkkosivua varten napsauttamalla alla olevaa painiketta.",
        "httpVideoUnfixable": "Tämä video ei tue HTTPS-protokollaa. Poista video tarinastasi tai korvaa se näyttökuvalla tai linkillä.",
        "httpVideoUncheckable": "Tämän videon URL-osoite on suojaamaton (HTTP). Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä videota varten napsauttamalla alla olevaa painiketta. Jos se ei toimi, poista video tarinasta tai korvaa se näyttökuvalla tai hyperlinkillä.",
        "httpVideoFixable": "Tämän videon URL-osoite on suojaamaton (HTTP). Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä videota varten napsauttamalla alla olevaa painiketta.",
        "httpImageUnfixable": "Tämä kuva ei tue HTTPS-protokollaa. Poista kuva tarinastasi tai korvaa se linkillä.",
        "httpImageUncheckable": "Tämän kuvan URL-osoite on suojaamaton (HTTP). Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä kuvaa varten napsauttamalla alla olevaa painiketta. Jos se ei toimi, poista kuva tarinasta tai korvaa se hyperlinkillä.",
        "httpImageFixable": "Tämän kuvan URL-osoite on suojaamaton (HTTP). Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä kuvaa varten napsauttamalla alla olevaa painiketta.",
        "httpLayer": "Tämän karttatason URL-osoite on suojaamaton (HTTP).",
        "inaccessibleLogo": "Tämä logo ei ole käytettävissä. Korvaa se toisella kuvalla.",
        "httpLogoUnfixable": "Tämä logo ei tue HTTPS-protokollaa. Korvaa se toisella kuvalla.",
        "httpLogoFixable": "Tämän logon URL-osoite on suojaamaton (HTTP). Käytä HTTPS-protokollan mukaista URL-osoitetta logoa varten.",
        "httpLogoUncheckable": "Tämän logon URL-osoite on suojaamaton (HTTP). Käytä HTTPS-protokollan mukaista URL-osoitetta logoa varten tai korvaa logo toisella kuvalla."
      },
      "tooltips": {
        "httpAudioFixable": "Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä äänitiedostoa varten napsauttamalla painiketta.",
        "httpAudioUncheckable": "Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä äänitiedostoa varten. Jos se ei toimi, poista äänitiedosto tarinasta tai korvaa se linkillä.",
        "httpWebpageFixable": "Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä verkkosivua varten napsauttamalla painiketta.",
        "httpWebpageUncheckable": "Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä verkkosivua varten. Jos se ei toimi, poista verkkosivu tarinasta tai korvaa se näyttökuvalla tai linkillä.",
        "httpVideoFixable": "Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä videota varten napsauttamalla painiketta.",
        "httpVideoUncheckable": "Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä videota varten. Jos se ei toimi, poista video tarinasta tai korvaa se näyttökuvalla tai linkillä.",
        "httpImageFixable": "Käytä suojattua HTTPS-protokollan mukaista URL-osoitetta tätä kuvaa varten napsauttamalla painiketta.",
        "httpImageUncheckable": "Yritä käyttää suojattua HTTPS-protokollan mukaista URL-osoitetta tätä kuvaa varten. Jos se ei toimi, poista kuva tarinasta tai korvaa se linkillä.",
        "httpLayerMyMap": "Päivitä tämä karttataso HTTPS-käytännön mukaiseksi siirtymällä kartan kohdesivulle. Jos karttatasoa ei voi päivittää, poista se kartasta.",
        "httpLayerNotMyMap": "Tee kartasta kopio ja päivitä tämä karttataso HTTPS-käytännön mukaiseksi. Jos karttatasoa ei voi päivittää, poista se kartasta.",
        "clickLearnMore": "Saat lisätietoja napsauttamalla."
      },
      "fixButtons": {
        "agolItemPage": "Kohdesivu",
        "openTheMap": "Avaa kartta",
        "updateAudio": "Korjaa äänitiedoston URL-osoite",
        "updateWebpages": "Korjaa verkkosivun URL-osoite",
        "updateVideos": "Korjaa videon URL-osoite",
        "updateImages": "Korjaa kuvan URL-osoite"
      },
      "mapIssues": {
        "fixButton": "Korjaa ongelmat",
        "nofixButton": "Ongelmia",
        "mapLabel": "Kartta:",
        "summaries": {
          "unshared": "Sisältö, jota ei ole jaettu",
          "othersUnshared": "Jonkun muun sisältö, jota ei ole jaettu",
          "subscriptionContent": "Tilaaja-sisältö",
          "premiumContent": "Premium-sisältö",
          "secureContent": "Suojattu sisältö",
          "deleted": "Poistettu sisältö",
          "inaccessible": "Sisältö, jota ei voi käyttää",
          "unauthorized": "Luvaton sisältö"
        },
        "descriptions": {
          "unshared": "Tätä sisältöä ei jaeta yhdessä tarinan kanssa.",
          "othersUnshared": "Joku muu omistaa tämän sisällön, eikä sitä jaeta yhdessä tarinan kanssa.",
          "othersUnsharedAuthorized": "Joku muu omistaa tämän sisällön, mutta sinulla on oikeus jakaa se.",
          "inaccessible": "Tätä sisältöä ei voi käyttää.",
          "deleted": "Tämä sisältö on poistettu.",
          "unauthorized": "Sinulla ei ole tämän sisällön tarkasteluoikeuksia.",
          "popupFeatureLayer": "Tiilitetyn karttatason ponnahdusikkunat ovat peräisin kohdekarttatasosta, jota ei ole jaettu yhdessä tarinan kanssa.",
          "subscriptionContent": "Tilaaja-sisältö on valtuutettava julkista käyttöä varten.",
          "premiumContent": "Premium-sisältö on valtuutettava julkista käyttöä varten.",
          "secureService": "Suojattu sisältö ei ole lukijoiden käytettävissä.",
          "missingItemWarning": "Tähän karttatasoon liitetty kohde on poistettu."
        },
        "tooltips": {
          "unshared": "Saat lisätietoja jakamisesta napsauttamalla.",
          "othersUnshared": "Sinulla ei ole käyttöoikeuksia jakaa muiden omistamaa sisältöä. Pyydä omistajaa jakamaan sisältö, poista kartta tarinastasi tai poista karttatasot, joita et omista, muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "inaccessible": "Poista tämä kartta tarinastasi tai poista ylimääräiset karttatasot muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "deleted": "Poista tämä kartta tarinastasi tai poista puuttuvat karttatasot muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "unauthorized": "Poista tämä kartta tarinastasi tai poista luvattomat karttatasot muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "popupFeatureLayer": "Tiilitetyn karttatason ponnahdusikkunat ovat peräisin kohdekarttatasosta, jota ei ole jaettu yhdessä tarinan kanssa.",
          "subscriptionContent": "Tilaaja-sisältö ei kuluta krediittejä. Saat lisätietoja napsauttamalla.",
          "premiumContent": "Krediitit veloitetaan organisaatioltasi aina, kun joku tarkastelee tarinasi Premium-karttatasoa. Saat lisätietoja napsauttamalla.",
          "secureService": "Poista suojattu sisältö tarinastasi tai tutustu napsauttamalla siihen, miten voit valtuuttaa suojatun sisällön käytön muille.",
          "missingItemWarning": "Tämä karttataso toimii edelleen, mutta sen symbolit, ponnahdusikkunat tai nimi voivat olla muuttuneet. Vahvista, että karttataso näkyy odotusten mukaisena, tai poista se tarinastasi."
        },
        "fixButtons": {
          "share": "Jaa",
          "hide": "Piilota",
          "authorize": "Valtuuta",
          "remove": "Poista",
          "help": "Hanki ohjeita",
          "ignore": "Ohita",
          "confirm": "Vahvista",
          "edit": "Muokkaa karttaa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Jotkin kartat ja karttatasot on myös jaettu.",
          "alsoSharedMaps": "Jotkin kartat on myös jaettu.",
          "alsoSharedLayers": "Jotkin karttatasot on myös jaettu.",
          "sharedOthersContent": "Olet käyttänyt pääkäyttäjän oikeuksia jonkun toisen sisällön jakamiseen."
        }
      },
      "storyHealth": {
        "healthy": "Ei ongelmia",
        "notHealthy": "Korjaa ongelmat",
        "warnings": "Näytä varoitukset"
      }
    },
    "saveErrorSocial": {
      "title": "Sosiaalisen median jakaminen",
      "panel1": "Tarinasi ei ehkä näy kunnolla sosiaalisessa mediassa, koska ArcGIS-Web-sovelluskohteen otsikko ei ole sama kuin tarinan otsikko.",
      "panel1tooltip": "Jos määrität otsikon, yhteenvedon ja pikkukuvan, tarinasi näyttää tältä:",
      "panel2": "Mitä otsikkoa haluat käyttää sosiaalisessa mediassa:",
      "panel2q1": "Tarinan otsikko (suositus)",
      "panel2q1tooltip": "Kun valitset tämän vaihtoehdon, kohteen otsikkoa muutetaan siten, että se vastaa tarinan otsikkoa, ja luontitoiminnon uudet muutokset synkronoidaan.",
      "panel2q2": "Kohteen otsikko",
      "panel3": "Jos haluat edelleen parantaa tarinan ulkoasua sosiaalisessa mediassa, lisää yhteenveto ja pikkukuva käyttämällä toimintoa ${MYSTORIES}.",
      "panel4": "Älä varoita minua enää uudelleen tästä tarinasta",
      "save": "Tallenna",
      "mystories": "Omat tarinat"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Tärkeä viesti verkon suojauksesta ja tarinakartoista",
      "s1h1": "Esri parantaa tarinakarttojen suojausta",
      "s1p1": "Tarinakarttasi ovat reaaliaikaisesti verkossa, ja verkkoyhteisö tekee parhaansa kaiken aikaa paremman turvallisuuden puolesta. HTTPS-protokollasta, joka tarjoaa suojatun yhteyden Internetissä lähetetylle sisällölle, on tullut odotettu tapa käyttää verkkosisältöä. Useimmat nykyaikaiset selaimet näyttävät nykyisin varoitusviestin, jos HTTPS-yhteyden sijasta käytetään HTTP-yhteyttä. Tämän yleistyneen standardin takia suosittelemme, että käytät HTTPS-linkkejä tarinakarttojen laatimiseen ja jakamiseen ja että käytät HTTPS URL -osoitteita vain silloin, kun upotat web-sisältöä tai linkität kuvia tarinakarttaan.",
      "s1p2": "Käytännössä tämä tarkoittaa sitä, että tarinakarttaa ja kaikkea sen sisältöä (myös kuvia, karttatasoja, upotettuja sovelluksia ja verkkosivustoja) on käytettävä sellaisten linkkien kautta, jotka alkavat merkkijonolla HTTPS eivätkä merkkijonolla HTTP. Tämä takaa parhaan kokemuksen lukijoille, koska useimmat verkkoselaimet osoittavat, että tarinasi ovat suojattuja.",
      "s2h1": "Mitä minun on tehtävä?",
      "s2p1": "Esri yrittää tehdä siirtymästä helpon tarinakarttojen tekijöille ja lukijoille. Tarinakarttojen luontitoiminnoissa ja Omat tarinat -palvelussa on käytettävissä työkaluja, joiden avulla voit etsiä suojaamatonta sisältöä (HTTP) tarinoistasi. Työkalut tarjoavat myös suosituksia siihen, miten voit ratkaista suojausongelmat. Tarkista, onko tarinoissa suojaamatonta sisältöä, ja päivitä HTTPS-protokollaan mahdollisimman pian.",
      "action1": "Sulje",
      "action2": "Tarkista omat tarinani nyt",
      "action3": "Lisätietoja",
      "floatingNotification": "Tässä tarinassa on suojaamatonta (HTTP) sisältöä. Tarkista ja ratkaise nämä ongelmat."
    }
  }
});