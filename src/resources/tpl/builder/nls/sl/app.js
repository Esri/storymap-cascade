/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Uporabi",
      "close": "Zapri"
    },
    "header": {
      "sharingNotAvailable": "Ni na voljo, dokler ne delite zgodbe",
      "edit": "Uredi"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Zaznamki",
        "logoSharing": "Logotip in deljenje",
        "theme": "Videz"
      },
      "bookmarks": {
        "title": "Razdelek",
        "bookmark": "Zaznamek",
        "intro": "Zaznamki so oznake povezave do razdelkov zgodbe, ki so prikazani v glavi. Z ustvarjanjem natančnih zaznamkov za glavne razdelke zgodbe boste bralcem omogočili večjo preglednost.",
        "sequentialDefault": "Pripovedni razdelek (besedilo ni najdeno)",
        "immersiveDefault": "Potopni razdelek (besedilo ni najdeno)",
        "titleDefault": "Razdelek z imenom (besedilo ni najdeno)",
        "coverDefault": "Razdelek naslovnice (besedilo ni najdeno)",
        "coverAppendage": "(Naslovnica)"
      },
      "logoSharing": {
        "logo": "Logotip",
        "logoButton": "Uporabi logotip ${ESRI}",
        "useOrgLogo": "Uporabi logotip moje organizacije",
        "useOrgLogoHelp": "Uporabi logotip, ki ga je zagotovil administrator",
        "logoLink": "Povezava logotipa",
        "logoUploadProgress": "V teku je nalaganje logotipa",
        "logoUploadSuccess": "Logotip je uspešno naložen",
        "logoUploadError": "Nalaganje logotipa ni uspelo, preklapljam nazaj na logotip ${ESRI}",
        "customHeaderText": "Označeno besedilo",
        "taglineLinkDisabledTooltip": "Vnesite označeno besedilo, da omogočite povezavo",
        "link": "Povezava označenega besedila",
        "enableSocialSharing": "Prikaži gumb za deljenje"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Pisave",
        "previewLabel": "Predogled",
        "fontsTitleLabel": "Imena",
        "fontsBodyLabel": "Telo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Zasebno",
      "btnOrg": "Organizacija",
      "btnPublic": "Javno",
      "btnEveryone": "Vsi"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Graditelj",
      "buttonSaving": "Shranjevanje",
      "buttonSaved": "Shranjeno",
      "buttonError": "Shranjevanje ni uspelo",
      "buttonShare": "Deli",
      "buttonSettings": "Nastavitve",
      "settingsLogoError": "Vaš logotip ima težavo. Kliknite, če želite izvedeti več.",
      "buttonHelp": "Poiščite pomoč ali pošljite povratno informacijo na GeoNet",
      "buttonPreview": "Ogled zgodbe",
      "buttonHealth": "Poročilo o zdravju",
      "manageStories": "Upravljanje Mojih zgodb",
      "closeWithPendingChange": "Ste prepričani, da želite to dejanje potrditi? Vaše spremembe bodo izgubljene.",
      "coverLabel": "Naslovnica",
      "creditsLabel": "Krediti",
      "betaFeedback": "Povratne informacije",
      "betaNote": "Sporočite nam svoje mnenje o ${APP_NAME} ali če nekaj ne deluje, kot ste pričakovali.",
      "notSharedNote": "Vaša zgodba ni deljena, vidite jo lahko samo vi",
      "organizationWarning": "Če želite zagotoviti, da si lahko zgodbo ogledajo tudi drugi, morate s svojo organizacijo deliti 3D-prizore, sloje 3D-prizora in vdelane aplikacije. Karte in kartni sloji se samodejno delijo.",
      "publicWarning": "Če želite zagotoviti, da si zgodbo lahko ogledajo tudi drugi, morate z vsemi deliti 3D-prizore, sloje 3D-prizora in vdelane aplikacije. Karte in kartni sloji se samodejno delijo.",
      "addTitleNote": "Če želite shraniti, dodajte ime na naslovnico",
      "saveError": "Pri shranjevanju vaše zgodbe je prišlo do napake.",
      "duplicate": "Podvoji",
      "organize": "Organiziraj",
      "done": "Končano",
      "invite": "Med izdelovanjem zgodbe se bodo razdelki prikazovali tukaj ...",
      "mystoriestooltip": "Kaskadni graditelj vas opozarja na težave v vaši zgodbi in vam pomaga pri njihovem odpravljanju. 3D-prizori in vdelane aplikacije ne bodo preverjene, zato jih preverite ročno."
    },
    "immersiveViewPanel": {
      "transition": "Prehod",
      "chooseTransition": "Izberite Prehod",
      "fade": "Odtemnitev",
      "fadeSlow": "Počasna odtemnitev",
      "swipeVertical": "Podrsnite navpično",
      "swipeHorizontal": "Podrsnite vodoravno",
      "none": "Brez",
      "disabledConsecutiveSameMedia": "Ni na voljo, ko zaporedni pogledi uporabljajo isti medij",
      "disabledTooltipMap": "Če želite uporabiti ta prehod, morajo biti vidni sloji v obeh pogledih drugačni, druge lastnosti karte pa morajo biti enake",
      "disabledConsecutiveSameMap": "Ni na voljo, ko zaporedni pogledi uporabljajo isto karto",
      "disabledNotInBeta": "Ni na voljo, ko zaporedni pogledi uporabljajo isto karto",
      "disabledNonConsecutive": "Ni na voljo, ker se ta medij pojavlja nezaporedno",
      "addMedia": "Dodaj medij",
      "invite": "Med izdelovanjem potopnega razdelka se bodo pogledi prikazovali tukaj..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Videz",
        "manage": "Upravljaj",
        "size": "Velikost",
        "background": "Ozadje",
        "mobile": "Mobilno",
        "issues": "Težave",
        "fixIssues": "Odpravi težave"
      },
      "manage": {
        "changeMedia": "Spremeni omrežje",
        "edit": "Uredi",
        "editAside": "Odpre se v novem zavihku brskalnika. Ko shranite svoje spremembe, shranite in znova naložite to zgodbo, da vidite svoje spremembe.",
        "remove": "Odstrani",
        "altTextPlaceholder": "Dodajte opis tega medija za slabovidne bralce...",
        "altTextHelptip": "Dodatno besedilo je opis vizualnih medijev, ki jih uporabljajo podporne tehnologije, kot je programska oprema bralnika zaslona. To je izbirno, a je priporočljivo slediti smernicam za dostop do spleta, kot sta WCAG in Razdelek 508."
      },
      "appearance": {
        "homeView": "Začetni pogled",
        "audio": "Zvok",
        "on": "Vklop",
        "muted": "Brez zvoka",
        "volumeAside": "Video se bo samodejno predvajal, ko pride bralec do tega pogleda. Če izklopite zvok, ga bralec ne bo mogel omogočiti.",
        "view": "Ogled",
        "resetLocation": "Ponastavi lokacijo",
        "resetLayers": "Ponastavi sloje",
        "clearPopup": "Počisti pojavno okno",
        "interaction": "Interakcija",
        "interactionDisabled": "Interakcija je onemogočena",
        "buttonToEnable": "Gumb za omogočanje",
        "interactionEnabled": "Interakcija je omogočena",
        "interactionAside": "*Na napravah na dotik bo prikazan gumb za interakcijo.",
        "slide": "Drsnica",
        "noSlides": "Ni razpoložljivih drsnic.",
        "mapExtentPrompt": "Posodobite karto, da poveste svojo zgodbo in kliknite kljukico, da shranite spremembe"
      },
      "sectionAppearance": {
        "layout": "Postavitev",
        "theme": "Tema"
      },
      "size": {
        "small": "Majhno",
        "medium": "Srednje",
        "large": "Veliko",
        "noCrop": "Ne obrezuj visokih slik",
        "noCropTallTooltip": "Če ne obrežete visokih slik, boste ustvarili dramatičen učinek za bralce, saj se bodo morali premikati navzdol, da si ogledajo celotno sliko."
      },
      "background": {
        "noCrop": "Ne obrezuj",
        "mostImportantPart": "Izberite najpomembnejšo točko",
        "cropExplanationImmersive": "Izberite točko na sliki, da določite način obrezovanja slik za različne velikosti zaslona. Točka, ki jo boste izbrali, bo vedno vidna. Obkljukajte »Ne obrezuj«, če želite, da je vaša slika v celoti vidna.",
        "cropExplanation": "Izberite točko na sliki, če želite izbrati način obrezovanja slik za različne velikosti zaslona. Točka, ki jo boste izbrali, bo vedno vidna.",
        "color": "Barva",
        "previews": "Predogledi"
      },
      "altMedia": {
        "alternativeMedia": "Dodatna slika za mobilne naprave",
        "explanation": "Nekateri mediji niso podprti ali morda ne bodo ustrezno delovali na mobilnih napravah. Uporabite to ploščo, da izberete sliko, ki se bo pojavila na mestu tega medija ob prikazovanju vaše zgodbe na telefonu ali tablici.",
        "changeAltImage": "Spremeni sliko",
        "uploadAltImage": "Dodaj dodatno sliko"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Povezava do vsebine",
        "urls_short": "Povezava",
        "contentType": {
          "error": "Ni pooblaščenega medija.",
          "imageOnly": "V tem delu zgodbe lahko dodate sliko.",
          "imageAndVideo": "V tem delu zgodbe lahko dodate sliko ali videoposnetek.",
          "imageVideoWebpage": "V tem delu zgodbe lahko dodate zvok, sliko, video ali spletno stran."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Iskanje »${searchterm}« ...",
          "searchedFor": "Rezultati iskanja za »${searchterm}«",
          "albumsOf": "Albumi uporabnika ${username}",
          "noPhotosFound": "Ni slik, ki ustrezajo vaši poizvedbi. Poskusite znova.",
          "noItemsFound": "Ni elementov, ki ustrezajo vaši poizvedbi. Poskusite znova.",
          "noItemsInThisStory": "V to zgodbo še ni dodana nobena vsebina ArcGIS.",
          "limitReached": "Prikazujem 100 elementov. Če niste našli, kar potrebujete, poskusite z iskanjem s ključnimi besedami.",
          "galleryItems": {
            "uploadError": "Oprostite, tega elementa ni bilo mogoče naložiti."
          },
          "agol": {
            "remove1": "Izbrišite neuporabljeno sliko z računa ArcGIS.",
            "remove2": "(Morali jo boste znova naložiti, če se boste kasneje odločili, da jo želite uporabiti.)",
            "removeFailed": "Odstranite nedostopno sliko s tega seznama.",
            "modified": "Spremenjeno ${date}",
            "uploaded": "Naloženo ${date}",
            "contentByAuthor": "${contentType} od ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Brskajte po fotografijah na straneh ${Picasa} ali ${Google+}"
          },
          "flickr": {
            "photostream": "Photo stream",
            "searchAndBrowse": "Poiščite in brskajte po fotografijah na strani ${Flickr}",
            "captionStarter": "Avtor fotografije je ${USERNAME} na ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Poiščite slike na strani ${Unsplash}",
            "photoBy": "Avtor fotografije je uporabnik ${username}",
            "userLink": "Pojdi na stran ${Unsplash} uporabnika ${username}",
            "captionStarter": "Avtor fotografije je ${USERNAME} na ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Povezava do vsebine na spletu",
              "imageOnly": "Povezava do slike na spletu",
              "imageAndVideo": "Povezava do slike ali videoposnetka na spletu"
            },
            "linkText": {
              "imageOnly": "V zgornjem polju lahko določite neposredno povezavo s fotografijo.",
              "imageAndVideo1": "V zgornjem polju lahko prilepite povezavo ali kodo iframe za video na ${YouTube} in ${Vimeo}.",
              "imageAndVideo2": "Prav tako lahko določite neposredno povezavo s fotografijo.",
              "imageVideoWebpage1": "V zgornjem polju lahko prilepite povezavo ali kodo iframe za spletno vsebino, kot npr. dinamični grafikon ali video na ${YouTube} in ${Vimeo}.",
              "imageVideoWebpage2": "Prav tako lahko določite neposredno povezavo s fotografijo, videom, zvočno datoteko, spletno stranjo ali spletno aplikacijo.",
              "ender": "Vedno uporabljajte varne (https) povezave. Če jih vaša vsebina ne podpira, v besedilu svoje zgodbe dodajte povezavo, da si jih bodo lahko bralci ogledali v novem zavihku brskalnika.",
              "httpsError": "Povezava se mora začeti s HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Naložite stran prek varne povezave (https)",
              "embedProtocolWarning1": "Če se stran v vaši zgodbi ne naloži, je ni mogoče vdelati zaradi varnostnih razlogov.",
              "embedProtocolWarning2": "Če se stran v vaši zgodbi ne naloži, odkljukajte to možnost in poskusite znova. Če se stran še vedno ne naloži, je ni mogoče vdelati zaradi razlogov spletne varnosti.",
              "embedProtocolWarning3": "Namesto tega dodajte povezavo v zgodbo, da odprete stran v novem zavihku brskalnika. ${linkText}",
              "linkText": "Izvedi več."
            },
            "placeholder": "${https://}... ali ${<iframe>}",
            "uploadErrors": {
              "generic": "Nekaj ni v redu z vnesenim naslovom. Poskusite znova.",
              "imageOnly1": "V tem delu zgodbe morate uporabiti sliko.",
              "imageOnly2": "Navedite povezavo do slike (.jpg, .png, .gif) ali izberite sliko s strani ${ArcGIS}, ${Flickr}, ${Google+} ali ${Unsplash}.",
              "imageAndVideo1": "V tem delu zgodbe morate uporabiti sliko ali videoposnetek.",
              "imageAndVideo2": "Navedite povezavo do slike (.jpg, .png, .gif) ali videoposnetka na strani ${YouTube} ali ${Vimeo} ali izberite sliko s strani ${ArcGIS}, ${Flickr}, ${Google+} ali ${Unsplash}.",
              "badFormat": "Povezava do datoteke, ki jo poskušate dodati, ni pravilno oblikovana.",
              "inaccessible": "Ni datoteke, ki jo želite dodati, ali ni dostopna.",
              "tryAgain": "Preverite naslov in poskusite znova.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "slika",
                "generic": "mediji"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Z uporabo storitve tretje osebe se strinjate s pogoji storitve: ",
          "googlePhotos": {
            "placeholder": "E-pošta ali ID za ${Picasa}/${Google+}",
            "helpText": "V svojo zgodbo lahko dodate slike, naložene v storitvi ${Picasa} ali ${Google+}. ${helpLinkText} o uporabi slik, shranjenih v vašem računu ${Google} v vaših zgodbah.",
            "helpLinkText": "Izvedi več",
            "cannotFindUser": "Uporabnika ${username} ni bilo mogoče najti. Poskusite znova."
          },
          "unsplash": {
            "placeholder": "Poiščite fotografije",
            "aboutText": "${Unsplash} je skrbno zbrana zbirka brezplačnih fotografij izjemne kakovosti.",
            "copyrightText": "Vse fotografije so licencirane pod licenco ${Unsplash}. Poiščite več informacij ${moreInfoLink}.",
            "moreInfoLink": "tukaj"
          },
          "flickr": {
            "searchType": {
              "account": "Račun ${Flickr}",
              "text": "Vse na ${Flickr}"
            },
            "placeholders": {
              "user": "Poiščite račun",
              "userText": "Poiščite fotografije v tem računu",
              "text": "Poiščite fotografije"
            },
            "errors": {
              "cannotFindUser": "Uporabnika ${username} ni bilo mogoče najti.",
              "noUserPhotos": "Uporabnik ${username} nima javnih fotografij.",
              "didYouMean": "Ste mislili uporabnika ${username}?",
              "generalUserError": "Prišlo je do težav pri iskanju uporabnika ${username}."
            },
            "licenses": {
              "licenseLabel": "Licenca: ",
              "public": "Javna domena",
              "commercial": "V redu za komercialno uporabo",
              "nonCommercial": "V redu za nekomercialno uporabo",
              "reserved": "Vse pravice pridržane",
              "any": "Katera koli licenca"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Ta zgodba",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organizacija ${orgname}",
              "myContent": "Moja vsebina"
            },
            "createContent": {
              "createNewMap": "Ustvari novo karto",
              "or": "ALI",
              "dragAndDropImage": "Spusti slike",
              "dragAndDropImageAudio": "Spusti slike ali zvok",
              "uploadButton": "Prebrskaj",
              "agolInfo": "Naložene slike in zvok bodo na voljo samo v tej zgodbi.",
              "saveBeforeUpload": "Ko shranite to zgodbo, lahko naložite slike in zvok v ArcGIS tukaj.",
              "fileExtsImage": "Podprti formati: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Podprti formati: png, jpg, gif, bmp, mp3.",
              "maxSize": "Največ 10 MB na datoteko."
            },
            "filterAndSort": {
              "webmap": "Spletna karta",
              "webscene": "Spletni 3D-prizor",
              "image": "Slika",
              "audio": "Zvok",
              "date": "Datum",
              "sortByDate": "Razvrsti po datumu",
              "title": "Ime",
              "sortByTitle": "Razvrsti po imenu",
              "views": "Ogledi",
              "search": "Iskanje po ključni besedi ali ID-ju"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Uredi karto",
      "unauthorizedDomain": "Niste na pooblaščeni domeni za uporabo urejevalnika kart",
      "loading": "Počakajte, da se urejevalnik kart naloži",
      "saving": "Shranjevanje karte",
      "success": "Karta je shranjena",
      "cancelTitle": "Opustim vse neshranjene spremembe?",
      "errorSave": "Karte ni mogoče shraniti. Poskusite znova.",
      "loadFail": "Oprostite, urejevalnika kart ni mogoče naložiti",
      "close": "Zapri",
      "save": "Shrani",
      "confirm": "Da, zapri karto",
      "deny": "Ne, nadaljuj z delom"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Svojo zgodbo nadaljujte tukaj ..."
      },
      "blockAdd": {
        "text": "Besedilo",
        "media": "Mediji",
        "title": "Ime",
        "immersive": "Potopni"
      },
      "link": {
        "invite": "Prilepite ali napišite povezavo ..."
      },
      "color": {
        "choose": "izberi",
        "cancel": "prekliči",
        "clear": "Počisti barvo"
      }
    },
    "imageGallery": {
      "addImage": "Dodaj novo sliko",
      "moveBackward": "Premakni se nazaj",
      "moveForward": "Premakni se naprej"
    },
    "cover": {
      "titlePrompt": "Vnesite ime svoje zgodbe...",
      "subtitlePrompt": "Podrsnite navzdol za začetek ali vnesite dodatni podnaslov",
      "mediaPlaceholder": "Dodajte svojo sliko ali video",
      "saveError": "Shranjevanje ni uspelo, ker že imate element s tem imenom"
    },
    "credits": {
      "sectionInvite": "Dodajte razdelek s krediti",
      "warning": "Obe polji je treba izpolniti",
      "content": "Vsebina...",
      "source": "Vir...",
      "linkPrompt": "Dodatna povezava...",
      "introductionPlaceholder": "Vnesite izbirni uvod v razdelek s krediti ..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Položaj",
        "theme": "Tema",
        "size": "Velikost",
        "background": "Ozadje",
        "layout": "Drsenje (za vse plošče)"
      }
    },
    "title": {
      "placeholder": "Vnesite naslov..."
    },
    "media": {
      "mediaUpload": "V teku je nalaganje medijev...",
      "mediaUploadSuccess": "Mediji so uspešno naloženi",
      "mediaUploadFail": "Nalaganje medijev ni uspelo"
    },
    "controller": {
      "sectionOrganize": "Organizirali ste razdelek",
      "immersiveOrganize": "Organizirali ste poglede",
      "sectionDelete": "Izbrisali ste razdelek",
      "viewDelete": "Izbrisali ste pogled"
    },
    "notification": {
      "cancel": "Prekliči",
      "close": "Zapri",
      "undo": "Razveljavi"
    },
    "sections": {
      "sequence": "Pripovedno",
      "immersive": "Potopni",
      "title": "Ime"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "slika",
        "audio": "zvok",
        "webmap": "karta",
        "webscene": "3D-prizor",
        "video": "video",
        "content": "vsebina",
        "webpage": "spletna stran"
      },
      "placeholders": {
        "generic": "Do te vsebine ni mogoče dostopati.",
        "deleted": "Ta element je bil izbrisan.",
        "inaccessible": "Do te vsebine ni mogoče dostopati.",
        "unauthorized": "Niste pooblaščeni za ogled te vsebine.",
        "unshared": "Ta element ni deljen, prav tako kot tudi vaša zgodba ne.",
        "othersUnshared": "Ta element ni deljen, prav tako kot tudi vaša zgodba ne.",
        "subscriptionContent": "Ta karta vsebuje naročniški sloj.",
        "premiumContent": "Ta karta vsebuje premium sloj.",
        "secureService": "Ta karta vsebuje varni sloj."
      },
      "contentIssues": {
        "noAltImage": "Medij morda ne bo deloval na mobilni napravi",
        "noAltImageUnsupported": "Medij ni podprt na mobilnih napravah",
        "noAltImageWarning": "Medij morda ne bo deloval na mobilni napravi",
        "altImageBroken": "Do dodatne slike, določene za ta element medija, ni mogoče dostopati",
        "httpMedia": "Negotovi mediji",
        "httpContent": "Negotova vsebina"
      },
      "contentWarnings": {
        "noAltImage": "Prikazovanje svoje zgodbe preizkusite na mobilnih napravah, preden jo boste delili. Če ta medij ne deluje po pričakovanjih, s spodnjim gumbom dodajte dodatno sliko, ki bo prikazana ob ogledu zgodbe na telefonu ali tablici.",
        "noAltImageUnsupported": "Ta medij ne bo deloval na mobilnih napravah. S spodnjim gumbom dodajte dodatno sliko, ki se bo prikazovala ob ogledu zgodbe na telefonu ali tablici.",
        "noAltImageWarning": "Prikazovanje svoje zgodbe preizkusite na mobilnih napravah, preden jo boste delili. Če ta medij ne deluje po pričakovanjih, s spodnjim gumbom dodajte dodatno sliko, ki bo prikazana ob ogledu zgodbe na telefonu ali tablici.",
        "noAltImageAlt": "Ta vrsta medija ni podprta in morda ne bo ustrezno delovala na mobilnih napravah. V zavihku mobilne naprave zagotovite dodatno sliko, ki se bo prikazovala ob ogledu zgodbe na telefonu ali tablici."
      },
      "descriptions": {
        "httpAudioUnfixable": "Ta zvočni zapis ne podpira HTTPS. Odstranite ga iz vaše zgodbe ali ga nadomestite s povezavo.",
        "httpAudioUncheckable": "Ta zvočni zapis ima nezavarovan (HTTP) URL.Kliknite spodnji gumb in poskusite uporabiti HTTPS URL za ta zvočni zapis. Če to ne deluje, zvočni zapis odstranite iz svoje zgodbe ali ga zamenjajte s hiperpovezavo.",
        "httpAudioFixable": "Ta zvočni zapis ima nezavarovan (HTTP) URL.Kliknite spodnji gumb za uporabo zavarovanega HTTPS URL za ta zvočni zapis.",
        "httpWebpageUnfixable": "Ta spletna stran ne podpira HTTPS. Odstranite jo iz vaše zgodbe ali jo nadomestite s posnetkom zaslona ali povezavo.",
        "httpWebpageUncheckable": "Ta spletna stran ima nezavarovan (HTTP) URL.Kliknite spodnji gumb in poskusite uporabiti HTTPS URL za to spletno stran. Če to ne deluje, spletno stran odstranite iz svoje zgodbe ali jo zamenjajte s posnetkom zaslona ali hiperpovezavo.",
        "httpWebpageFixable": "Ta spletna stran ima nezavarovan (HTTP) URL.Kliknite spodnji gumb za uporabo zavarovanega HTTPS URL za to spletno stran.",
        "httpVideoUnfixable": "Ta video ne podpira HTTPS. Odstranite ga iz vaše zgodbe ali ga nadomestite s posnetkom zaslona ali povezavo.",
        "httpVideoUncheckable": "Ta video ima nezavarovan (HTTP) URL.Kliknite spodnji gumb in poskusite uporabiti HTTPS URL za ta video. Če to ne deluje, video odstranite iz svoje zgodbe ali ga zamenjajte s posnetkom zaslona ali hiperpovezavo.",
        "httpVideoFixable": "Ta video ima nezavarovan (HTTP) URL.Kliknite spodnji gumb za uporabo zavarovanega HTTPS URL za ta video.",
        "httpImageUnfixable": "Ta slika ne podpira HTTPS. Odstranite jo iz vaše zgodbe ali jo nadomestite s povezavo.",
        "httpImageUncheckable": "Ta slika ima nezavarovan (HTTP) URL.Kliknite spodnji gumb in poskusite uporabiti HTTPS URL za to sliko. Če to ne deluje, sliko odstranite iz svoje zgodbe ali jo zamenjajte s hiperpovezavo.",
        "httpImageFixable": "Ta slika ima nezavarovan (HTTP) URL.Kliknite spodnji gumb za uporabo zavarovanega HTTPS URL za to sliko.",
        "httpLayer": "Ta sloj ima negotov (HTTP) URL.",
        "inaccessibleLogo": "Do tega logotipa ni mogoče dostopati. Zamenjajte ga z drugo sliko.",
        "httpLogoUnfixable": "Ta logotip ne podpira HTTPS. Zamenjajte ga z drugo sliko.",
        "httpLogoFixable": "Ta logotip ima negotov (HTTP) URL. Za logotip uporabite HTTPS URL.",
        "httpLogoUncheckable": "Ta logotip ima negotov (HTTP) URL. Za logotip uporabite HTTPS URL ali ga zamenjajte z drugo sliko."
      },
      "tooltips": {
        "httpAudioFixable": "Kliknite gumb za uporabo zavarovanega HTTPS URL za ta zvočni zapis.",
        "httpAudioUncheckable": "Poskusite uporabiti HTTPS URL za ta zvočni zapis. Če to ne deluje, zvočni zapis odstranite iz svoje zgodbe ali ga zamenjajte s povezavo.",
        "httpWebpageFixable": "Kliknite gumb za uporabo zavarovanega HTTPS URL za to spletno stran.",
        "httpWebpageUncheckable": "Poskusite uporabiti HTTPS URL za to spletno stran. Če to ne deluje, spletno stran odstranite iz svoje zgodbe ali jo zamenjajte s posnetkom zaslona ali povezavo.",
        "httpVideoFixable": "Kliknite gumb za uporabo zavarovanega HTTPS URL za ta video.",
        "httpVideoUncheckable": "Poskusite uporabiti HTTPS URL za ta video. Če to ne deluje, video odstranite iz svoje zgodbe ali ga zamenjajte s posnetkom zaslona ali povezavo.",
        "httpImageFixable": "Kliknite gumb za uporabo zavarovanega HTTPS URL za to sliko.",
        "httpImageUncheckable": "Poskusite uporabiti HTTPS URL za to sliko. Če to ne deluje, sliko odstranite iz svoje zgodbe ali jo zamenjajte s povezavo.",
        "httpLayerMyMap": "Obiščite stran elementov karte za posodobitev tega sloja za uporabo HTTPS. Če sloja ni mogoče posodobiti, ga odstranite s karte.",
        "httpLayerNotMyMap": "Naredite kopijo karte in posodobite ta sloj za uporabo HTTPS. Če sloja ni mogoče posodobiti, ga odstranite s karte.",
        "clickLearnMore": "Kliknite, če želite izvedeti več."
      },
      "fixButtons": {
        "agolItemPage": "Stran elementa",
        "openTheMap": "Odpri karto",
        "updateAudio": "Popravi URL zvočnega zapisa",
        "updateWebpages": "Popravi URL spletne strani",
        "updateVideos": "Popravi URL videa",
        "updateImages": "Popravi URL slike"
      },
      "mapIssues": {
        "fixButton": "Odpravi težave",
        "nofixButton": "Težave",
        "mapLabel": "Karta:",
        "summaries": {
          "unshared": "Nedeljena vsebina",
          "othersUnshared": "Nedeljena vsebina nekoga drugega",
          "subscriptionContent": "Naročniška vsebina",
          "premiumContent": "Premium vsebina",
          "secureContent": "Varna vsebina",
          "deleted": "Izbrisana vsebina",
          "inaccessible": "Nedostopna vsebina",
          "unauthorized": "Nepooblaščena vsebina"
        },
        "descriptions": {
          "unshared": "Ta vsebina ni deljena enako kot vaša zgodba.",
          "othersUnshared": "Ta vsebina je v lasti nekoga drugega in ni deljena enako kot vaša zgodba.",
          "othersUnsharedAuthorized": "Ta vsebina je v lasti nekoga drugega, vendar ste pooblaščeni, da jo delite.",
          "inaccessible": "Do te vsebine ni mogoče dostopati.",
          "deleted": "Ta vsebina je bila izbrisana.",
          "unauthorized": "Niste pooblaščeni za ogled te vsebine.",
          "popupFeatureLayer": "Pojavna okna ploščičnega sloja prihajajo iz geoobjektnega sloja, ki ni deljen enako kot vaša zgodba.",
          "subscriptionContent": "Avtorizirati morate naročniško vsebino za javno uporabo.",
          "premiumContent": "Avtorizirati morate premium vsebino za javno uporabo.",
          "secureService": "Varna vsebina ni na voljo vašim bralcem.",
          "missingItemWarning": "Element, povezan s tem slojem, je bil izbrisan."
        },
        "tooltips": {
          "unshared": "Kliknite, če želite izvedeti več o deljenju.",
          "othersUnshared": "Nimate dovoljenja za deljenje vsebine, ki je v lasti nekoga drugega. Prosite lastnika, da jo deli, odstranite karto iz vaše zgodbe ali uredite karto, da odstranite sloje, ki niso vaši. Kliknite, če želite izvedeti več o urejanju kart.",
          "inaccessible": "Odstranite to karto iz svoje zgodbe ali jo uredite, da odstranite nedostopne sloje. Kliknite, če želite izvedeti več o urejanju kart.",
          "deleted": "Odstranite to karto iz svoje zgodbe ali jo uredite, da odstranite manjkajoče sloje. Kliknite, če želite izvedeti več o urejanju kart.",
          "unauthorized": "Odstranite to karto iz svoje zgodbe ali jo uredite, da odstranite nepooblaščene sloje. Kliknite, če želite izvedeti več o urejanju kart.",
          "popupFeatureLayer": "Pojavna okna ploščičnega sloja prihajajo iz geoobjektnega sloja, ki ni deljen enako kot vaša zgodba.",
          "subscriptionContent": "Naročniška vsebina ne porablja kreditov. Kliknite, če želite izvedeti več.",
          "premiumContent": "Krediti bodo vaši organizaciji zaračunani vsakič, ko si nekdo ogleda premium sloj v vaši zgodbi. Kliknite, če želite izvedeti več.",
          "secureService": "Odstranite varno vsebino iz svoje zgodbe ali kliknite, če želite izvedeti, kako pooblastiti varni sloj, da ga bodo tudi drugi lahko uporabljali.",
          "missingItemWarning": "Ta sloj še vedno deluje, vendar so se lahko spremenili njegovi simboli, pojavna okna ali ime. Potrdite, da se sloj prikazuje, kot je pričakovano, ali ga odstranite iz svoje zgodbe."
        },
        "fixButtons": {
          "share": "Deli",
          "hide": "Skrij",
          "authorize": "Pooblasti",
          "remove": "Odstrani",
          "help": "Poišči pomoč",
          "ignore": "Prezri",
          "confirm": "Potrdi",
          "edit": "Uredi karto"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Nekatere karte in sloji so bili prav tako deljeni.",
          "alsoSharedMaps": "Nekatere karte so bile prav tako deljene.",
          "alsoSharedLayers": "Nekateri sloji so bili prav tako deljeni.",
          "sharedOthersContent": "Uporabili ste svoje administrativne pravice za delitev vsebine nekoga drugega."
        }
      },
      "storyHealth": {
        "healthy": "Brez težav",
        "notHealthy": "Odpravi težave",
        "warnings": "Ogled opozoril"
      }
    },
    "saveErrorSocial": {
      "title": "Deljenje na družbenih omrežjih",
      "panel1": "Vaša zgodba se morda na družbenih omrežjih ne bo pravilno prikazala, saj ime elementa spletne aplikacije ArcGIS ni enako imenu vaše zgodbe.",
      "panel1tooltip": "Z določitvijo imena, povzetka in sličice bo vaša zgodba videti tako:",
      "panel2": "Katero ime želite uporabiti na družbenih omrežjih:",
      "panel2q1": "Ime zgodbe (priporočeno)",
      "panel2q1tooltip": "Če izberete to možnost, se bo ime vašega elementa spremenilo zaradi ujemanja z imenom vaše zgodbe, dodatne spremembe pa bodo sinhronizirane v graditelju.",
      "panel2q2": "Ime elementa",
      "panel3": "Za nadaljnje izboljševanje videza vaše zgodbe na družbenih omrežjih uporabite ${MYSTORIES} in dodajte povzetek in sličico.",
      "panel4": "Ne opozarjaj me več za to zgodbo",
      "save": "Shrani",
      "mystories": "Moje zgodbe"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Pomembno sporočilo o spletni varnosti in kartah z zgodbo",
      "s1h1": "Esri izboljšuje varnost kart z zgodbo",
      "s1p1": "Vaše karte z zgodbo živijo na spletu in spletna skupnost si nenehno prizadeva za vzpostavitev in izvajanje boljše varnosti. HTTPS, ki zagotavlja varno povezavo za vsebino, preneseno prek interneta, se pojavlja kot pričakovani način za dostop do spletnih vsebin. Večina sodobnih brskalnikov sedaj prikazuje opozorilna sporočila, ko je namesto HTTPS uporabljen HTTP. Zaradi tega nastajajočega standarda vam toplo priporočamo, da uporabljate povezave HTTPS za izdelavo in deljenje Kart z zgodbo, in uporabite URL-je HTTPS samo pri vdelavi spletne vsebine ali povezovanju s slikami znotraj Karte z zgodbo.",
      "s1p2": "Praktično gledano to pomeni, da bo do Karte z zgodbo in vseh njenih vsebin (vključno s slikami, sloji, vdelanimi aplikacijami in spletnimi stranmi) treba dostopati s pomočjo povezav, ki se začnejo s HTTPS in ne s HTTP. To zagotavlja najboljšo izkušnjo vašim bralcem, saj bo večina brskalnikov označevala, da so vaše zgodbe varne.",
      "s2h1": "Kaj moram storiti?",
      "s2p1": "Podjetje Esri si prizadeva, da bo to enostaven prehod za avtorje in bralce Kart z zgodbo. Sedaj so na voljo orodja v graditeljih Kart z zgodbo in Mojih zgodbah, ki vam pomagajo najti nezavarovano vsebino (HTTP) v vaših zgodbah in zagotavljajo priporočila, kako jih obravnavati. Preverite vaše zgodbe za nezavarovano vsebino in čim prej posodobite na HTTPS.",
      "action1": "Trenutna drsnica",
      "action2": "Preveri moje zgodbe zdaj",
      "action3": "Izvedi več",
      "floatingNotification": "Ta zgodba vsebuje negotovo (HTTP) vsebino. Preglejte in obravnavajte te težave."
    }
  }
});