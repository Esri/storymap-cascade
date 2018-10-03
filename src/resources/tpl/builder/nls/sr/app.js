/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Primeni",
      "close": "Zatvori"
    },
    "header": {
      "sharingNotAvailable": "Ovo nije dostupno dok ne podelite priču",
      "edit": "Izmeni"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Obeleživači",
        "logoSharing": "Logotip i deljenje",
        "theme": "Izgled"
      },
      "bookmarks": {
        "title": "Odeljak",
        "bookmark": "Obeleživač",
        "intro": "Obeleživači su linkovi ka odeljcima priče koji su prikazani u zaglavlju. Kreiranje sažetih obeleživača za glavne odeljke vaše priče pomaže čitaocima da se orijentišu.",
        "sequentialDefault": "Narativni odeljak (nema pronađenog teksta)",
        "immersiveDefault": "Sveobuhvatni odeljak (nema pronađenog teksta)",
        "titleDefault": "Naslov odeljka (nema pronađenog teksta)",
        "coverDefault": "Naslovni odeljak (nema pronađenog teksta)",
        "coverAppendage": "(Naslovnica)"
      },
      "logoSharing": {
        "logo": "Logotip",
        "logoButton": "Koristi ${ESRI} logotip",
        "useOrgLogo": "Koristi logotip moje organizacije",
        "useOrgLogoHelp": "Koristi logotip obezbeđen od strane administratora",
        "logoLink": "Link logotipa",
        "logoUploadProgress": "Otpremanje logotipa je u toku",
        "logoUploadSuccess": "Logotip je uspešno otpremljen",
        "logoUploadError": "Otpremanje logotipa nije uspelo, promeni na ${ESRI} logotip",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Unesite slogan da biste omogućili link",
        "link": "Link slogana",
        "enableSocialSharing": "Prikaži dugme za deljenje"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fontovi",
        "previewLabel": "Prikaži",
        "fontsTitleLabel": "Naslovi",
        "fontsBodyLabel": "Telo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privatni",
      "btnOrg": "Organizacija",
      "btnPublic": "Javni",
      "btnEveryone": "Svi"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Alatka za izradu",
      "buttonSaving": "Čuvanje",
      "buttonSaved": "Sačuvano",
      "buttonError": "Čuvanje nije uspelo",
      "buttonShare": "Podeli",
      "buttonSettings": "Postavke",
      "settingsLogoError": "Postoji problem sa logotipom. Kliknite kako biste saznali više o tome.",
      "buttonHelp": "Potražite pomoć ili prosledite povratne informacije u vezi sa GeoNet",
      "buttonPreview": "Prikaži priču",
      "buttonHealth": "Izveštaj o zdravlju",
      "manageStories": "Upravljaj mojim pričama",
      "closeWithPendingChange": "Želite li da potvrdite ovu radnju? Promene će biti izgubljene.",
      "coverLabel": "Naslovnica",
      "creditsLabel": "Zasluge",
      "betaFeedback": "Povratne informacije",
      "betaNote": "Javite nam vaše mišljenje o ${APP_NAME} ili ako nešto ne radi kako ste očekivali.",
      "notSharedNote": "Vaša priča nije podeljena, samo vi možete da je vidite",
      "organizationWarning": "Kako biste se postarali da i drugi mogu da je vide, morate takođe da podelite scene, slojeve scena i ugrađene aplikacije sa vašom organizacijom. Mape i slojevi mape su automatski podeljeni.",
      "publicWarning": "Da biste bili sigurni da drugi mogu da vide ovu priču, morate da delite i njene scene, slojeve scena i ugrađene aplikacije sa svima. Mape i slojevi mapa dele se automatski.",
      "addTitleNote": "Dodajte naslov na naslovnicu kako biste sačuvali",
      "saveError": "Došlo je do greške prilikom čuvanja priče.",
      "duplicate": "Dupliraj",
      "organize": "Organizujte",
      "done": "Završeno",
      "invite": "Kako gradite priču, odeljci će se pojavljivati ovde...",
      "mystoriestooltip": "Kaskadna alatka za izradu vas upozorava na probleme u vašoj priči i pomaže vam da ih ispravite. Scene i ugrađene aplikacije se ne proveravaju, pa ih proverite ručno."
    },
    "immersiveViewPanel": {
      "transition": "Prelaz",
      "chooseTransition": "Odaberite prelaz",
      "fade": "Bledi",
      "fadeSlow": "Bledi polako",
      "swipeVertical": "Vertikalno prevlačenje",
      "swipeHorizontal": "Horizontalno prevlačenje",
      "none": "Ništa",
      "disabledConsecutiveSameMedia": "Nije dostupno kada uzastopni prikazi koriste iste medije",
      "disabledTooltipMap": "Da biste koristili ovaj prelaz, vidljivi slojevi u oba prikaza moraju da budu drugačiji i ostala svojstva mape moraju da budu ista",
      "disabledConsecutiveSameMap": "Nije dostupno kada uzastopni prikazi koriste istu mapu",
      "disabledNotInBeta": "Nije dostupno kada uzastopni prikazi koriste istu mapu",
      "disabledNonConsecutive": "Nije dostupno jer postoji drugo pojavljivanje ovog medija koje nije uzastopno",
      "addMedia": "Dodaj medije",
      "invite": "Kako gradite sveobuhvatni odeljak, prikazi će se pojavljivati ovde..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Izgled",
        "manage": "Upravljaj",
        "size": "Veličina",
        "background": "Pozadina",
        "mobile": "Mobilni",
        "issues": "Problemi",
        "fixIssues": "Popravi probleme"
      },
      "manage": {
        "changeMedia": "Promeni medij",
        "edit": "Izmeni",
        "editAside": "Otvara se u novoj kartici pregledača. Nakon čuvanja izmena, sačuvajte i ponovo učitajte ovu priču kako biste videli izmene.",
        "remove": "Ukloni",
        "altTextPlaceholder": "Dodajte opis ovih medija za osobe oštećenog vida...",
        "altTextHelptip": "Alternativni tekst je opis vizuelnih medija koji će koristiti pomoćne tehnologije, kao što je softver čitača ekrana. Ovo je opciono, ali se preporučuje radi ispunjavanja uputstava za veb pristupačnost poput WCAG i Odeljak 508."
      },
      "appearance": {
        "homeView": "Početni prikaz",
        "audio": "Audio",
        "on": "Uključeno",
        "muted": "Prigušeno",
        "volumeAside": "Video će se automatski prikazati kada čitalac dođe do ovog prikaza. Ako prigušite zvuk, čitalac neće moći da ga omogući.",
        "view": "Prikaži",
        "resetLocation": "Ponovo postavite lokaciju",
        "resetLayers": "Ponovo postavite slojeve",
        "clearPopup": "Izbriši iskačući prozor",
        "interaction": "Interakcija",
        "interactionDisabled": "Interakcija je onemogućena",
        "buttonToEnable": "Dugme za omogućavanje",
        "interactionEnabled": "Interakcija je omogućena",
        "interactionAside": "*Uređaji osetljivi na dodir će prikazati dugme za interakciju.",
        "slide": "Slajd",
        "noSlides": "Nema dostupnih slajdova.",
        "mapExtentPrompt": "Ažurirajte mapu kako biste ispričali svoju priču, kliknite na znak potvrde kako biste sačuvali izmene"
      },
      "sectionAppearance": {
        "layout": "Raspored",
        "theme": "Tema"
      },
      "size": {
        "small": "Malo",
        "medium": "Srednje",
        "large": "Veliko",
        "noCrop": "Ne režite visoke slike",
        "noCropTallTooltip": "Neizrezivanje visokih slika stvara dramatičan efekat za čitaoce koji moraju da prelistavaju kako bi videli celu sliku."
      },
      "background": {
        "noCrop": "Ne reži",
        "mostImportantPart": "Odaberite najvažniju tačku",
        "cropExplanationImmersive": "Selektujte tačku na slici kako biste odabrali kako će biti izrezana na različitim veličinama ekrana. Tačka koju selektujete će uvek biti vidljiva. Potvrdite izbor u polju za potvrdu „Ne reži“ ako slika treba da bude u celosti vidljiva.",
        "cropExplanation": "Selektujte tačku na slici kako biste odabrali kako će biti izrezana na različitim veličinama ekrana. Tačka koju selektujete će uvek biti vidljiva.",
        "color": "Boja",
        "previews": "Pregledi"
      },
      "altMedia": {
        "alternativeMedia": "Alternativni snimak za mobilnu aplikaciju",
        "explanation": "Neki mediji nisu podržani ili ne rade dobro na mobilnim uređajima. Koristite ovu tablu kako biste odredili snima koji će se pokazivati umesto ovih medija kada se vaša priča pregleda na telefonu ili tabletu.",
        "changeAltImage": "Promeni sliku",
        "uploadAltImage": "Dodaj alternativni snimak"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Link do sadržaja",
        "urls_short": "Link",
        "contentType": {
          "error": "Nema medija sa ovlašćenjem.",
          "imageOnly": "U ovom delu priče, možete da dodate snimak.",
          "imageAndVideo": "U ovom delu priče, možete da dodate snimak ili video zapis.",
          "imageVideoWebpage": "U ovom delu priče, možete da dodate audio, snimak, video zapis ili veb stranicu."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Traženje „${searchterm}”...",
          "searchedFor": "Rezultati pretrage za „${searchterm}”",
          "albumsOf": "Albumi korisnika ${username}",
          "noPhotosFound": "Nijedna fotografija se ne podudara sa vašom pretragom. Pokušajte ponovo.",
          "noItemsFound": "Nijedna stavka se ne podudara sa vašom pretragom. Pokušajte ponovo.",
          "noItemsInThisStory": "Ovoj priči još uvek nije dodat nikakav sadržaj sa ArcGIS platforme.",
          "limitReached": "Prikazuje se 100 stavki. Ukoliko niste pronašli ono što vam je potrebno, pokušajte pretragu po ključnoj reči.",
          "galleryItems": {
            "uploadError": "Nažalost, otpremanje ove stavke nije uspelo."
          },
          "agol": {
            "remove1": "Izbrišite ovu nekorišćenu sliku sa svog ArcGIS naloga.",
            "remove2": "(Moraćete ponovo da je otpremite ako ponovo poželite da je upotrebite.)",
            "removeFailed": "Uklonite ovaj nedostupni snimak sa ove liste.",
            "modified": "Izmenjeno ${date}",
            "uploaded": "Otpremljeno ${date}",
            "contentByAuthor": "${contentType} od strane ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Pregledaj fotografije na ${Picasa} ili ${Google+}"
          },
          "flickr": {
            "photostream": "Prikaz fotografija",
            "searchAndBrowse": "Pretraži i pregledaj fotografije na ${Flickr}",
            "captionStarter": "Fotografija kreirana od strane ${USERNAME} na ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Pretraži fotografije na ${Unsplash}",
            "photoBy": "Fotografija od strane korisnika ${username}",
            "userLink": "Idi na ${Unsplash} stranicu korisnika ${username}",
            "captionStarter": "Fotografija kreirana od strane ${USERNAME} na ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Link za sadržaj na vebu",
              "imageOnly": "Link za snimak na vebu",
              "imageAndVideo": "Link za snimak ili video zapis na vebu"
            },
            "linkText": {
              "imageOnly": "U polju iznad možete da postavite direktan link za fotografiju.",
              "imageAndVideo1": "U polju iznad možete da nalepite link ili iframe kôd za video snimke sa ${YouTube} ili ${Vimeo}.",
              "imageAndVideo2": "Takođe možete i da postavite direktan link za fotografiju.",
              "imageVideoWebpage1": "U polju iznad možete da nalepite link ili iframe kôd za veb sadržaj, poput dinamičkih grafikona ili video snimaka sa ${YouTube} ili ${Vimeo}.",
              "imageVideoWebpage2": "Takođe možete i da postavite direktan link za fotografiju, video snimak, audio datoteku, veb stranicu ili veb aplikaciju.",
              "ender": "Uvek koristite bezbedne (https) linkove. Ako vaš sadržaj ne podržava https, dodajte link do njega u tekstu priče, kako bi čitaoci mogli da ga prikažu u novoj kartici pregledača.",
              "httpsError": "Link mora da počinje sa HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Učitaj stranicu preko bezbedne veze (https)",
              "embedProtocolWarning1": "Ako se ova stranica ne učitava u vašoj priči, ne može da se ugradi iz veb bezbednosnih razloga.",
              "embedProtocolWarning2": "Ako se ova stranica ne učitava u vašoj priči, poništite izbor ove opcije i pokušajte ponovo. Ako se stranica i dalje ne učitava, ne može da bude ugrađena iz veb bezbednosnih razloga.",
              "embedProtocolWarning3": "Kao alternativu, dodajte link u svom narativu da biste otvorili stranicu u novoj kartici pregledača. ${linkText}",
              "linkText": "Saznajte više."
            },
            "placeholder": "${https://}... ili ${<iframe>}",
            "uploadErrors": {
              "generic": "Nešto nije u redu sa unetom adresom. Pokušajte ponovo.",
              "imageOnly1": "Morate da koristite snimak u ovom delu priče.",
              "imageOnly2": "Unesite link do snimka (.jpg, .png, .gif) ili odaberite snimak sa ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
              "imageAndVideo1": "Morate da koristite snimak ili video zapis u ovom delu priče.",
              "imageAndVideo2": "Unesite link do snimka (.jpg, .png, .gif) ili video zapisa na ${YouTube} ili ${Vimeo}, ili odaberite snimak sa ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
              "badFormat": "Link do datoteke koju pokušavate da dodate je nepravilno formatiran.",
              "inaccessible": "Datoteka koju pokušavate da dodate nedostaje ili je nepristupačna.",
              "tryAgain": "Proverite adresu i pokušajte ponovo.",
              "mediaTypes": {
                "VIDEO": "kolekciju",
                "IMAGE": "snimak",
                "generic": "mediji"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Korišćenjem usluge treće strane prihvatate odgovarajuće uslove korišćenja usluge: ",
          "googlePhotos": {
            "placeholder": "E-pošta ili ${Picasa}/${Google+} ID",
            "helpText": "Možete da svojoj priči dodate fotografije koje su otpremljene na ${Picasa} ili ${Google+}. ${helpLinkText} u vezi sa korišćenjem u vašim pričama snimaka koji su sačuvani na vašem ${Google} nalogu.",
            "helpLinkText": "Saznaj više",
            "cannotFindUser": "Pronalaženje korisnika ${username} nije moguće. Pokušajte ponovo."
          },
          "unsplash": {
            "placeholder": "Traži fotografije",
            "aboutText": "${Unsplash} je odabrana kolekcija besplatnih fotografija visokog kvaliteta.",
            "copyrightText": "Sve fotografije su licencirane pod licencom ${Unsplash}. Pronađite više informacija na ${moreInfoLink}.",
            "moreInfoLink": "ovde"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} nalog",
              "text": "Svi ${Flickr}"
            },
            "placeholders": {
              "user": "Traži nalog",
              "userText": "Pretraži fotografije na ovom nalogu",
              "text": "Traži fotografije"
            },
            "errors": {
              "cannotFindUser": "Pronalaženje korisnika ${username} nije moguće.",
              "noUserPhotos": "${username} nema nijednu javnu fotografiju.",
              "didYouMean": "Da li ste mislili ${username}?",
              "generalUserError": "Nešto nije u redu pri traženju korisnika ${username}."
            },
            "licenses": {
              "licenseLabel": "Licenca: ",
              "public": "Javni domen",
              "commercial": "U redu za komercijalnu upotrebu",
              "nonCommercial": "U redu za nekomercijalnu upotrebu",
              "reserved": "Sva prava zadržana",
              "any": "Bilo koja licenca"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Ova priča",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal za ArcGIS",
              "portal": "Portal",
              "myOrg": "Organizacija ${orgname}",
              "myContent": "Moj sadržaj"
            },
            "createContent": {
              "createNewMap": "Kreiraj novu mapu",
              "or": "ILI",
              "dragAndDropImage": "Otpustite snimke",
              "dragAndDropImageAudio": "Otpustite snimke ili audio",
              "uploadButton": "Pregledaj",
              "agolInfo": "Otpremljenim snimcima i audio zapisu će biti moguć pristup samo u okviru ove priče.",
              "saveBeforeUpload": "Kada sačuvate ovu priču, možete da otpremite snimke i audio na ArcGIS ovde.",
              "fileExtsImage": "Podržani tipovi: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Podržani tipovi: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maks. 10 MB po datoteci."
            },
            "filterAndSort": {
              "webmap": "Veb mapa",
              "webscene": "Veb scena",
              "image": "Snimak",
              "audio": "Audio",
              "date": "Datum",
              "sortByDate": "Sortiraj po datumu",
              "title": "Naslov",
              "sortByTitle": "Sortiraj po naslovu",
              "views": "Prikazi",
              "search": "Pretraži po ključnoj reči ili ID-u"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Izmeni mapu",
      "unauthorizedDomain": "Niste u autorizovanom domenu kako biste koristili uređivač mape",
      "loading": "Sačekajte dok se uređivač mape učitava.",
      "saving": "Čuvanje mape",
      "success": "Mapa je sačuvana",
      "cancelTitle": "Odbaci sve nesačuvane izmene?",
      "errorSave": "Čuvanje mape nije moguće. Pokušajte ponovo.",
      "loadFail": "Učitavanje uređivača mape nije moguće",
      "close": "Zatvori",
      "save": "Sačuvaj",
      "confirm": "Da, zatvori mapu",
      "deny": "Ne, nastavi sa radom"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Nastavite svoju priču ovde..."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Mediji",
        "title": "Naslov",
        "immersive": "Sveobuhvatno"
      },
      "link": {
        "invite": "Nalepite ili otkucajte link..."
      },
      "color": {
        "choose": "odaberite",
        "cancel": "otkaži",
        "clear": "Obriši boju"
      }
    },
    "imageGallery": {
      "addImage": "Dodaj još jedan snimak",
      "moveBackward": "Pomeri nazad",
      "moveForward": "Pomeri napred"
    },
    "cover": {
      "titlePrompt": "Unesite naslov priče...",
      "subtitlePrompt": "Pomerajte na dole kako biste počeli ili unesite opcioni podnaslov",
      "mediaPlaceholder": "Dodajte snimak ili video",
      "saveError": "Čuvanje nije uspelo, već imate stavku sa ovim naslovom"
    },
    "credits": {
      "sectionInvite": "Dodajte odeljak sa zaslugama",
      "warning": "Oba polja moraju da budu popunjena",
      "content": "Sadržaj...",
      "source": "Izvor...",
      "linkPrompt": "Opcioni link...",
      "introductionPlaceholder": "Unesite opcioni uvod za odeljak sa zaslugama..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Pozicija",
        "theme": "Tema",
        "size": "Veličina",
        "background": "Pozadina",
        "layout": "Pomeranje (za sve tabele)"
      }
    },
    "title": {
      "placeholder": "Unesite naslov..."
    },
    "media": {
      "mediaUpload": "Otpremanje medija je u toku...",
      "mediaUploadSuccess": "Mediji uspešno otpremljeni",
      "mediaUploadFail": "Otpremanje medija nije uspelo"
    },
    "controller": {
      "sectionOrganize": "Organizovali ste odeljke",
      "immersiveOrganize": "Organizovali ste prikaze",
      "sectionDelete": "Obrisali ste odeljak",
      "viewDelete": "Obrisali ste prikaz"
    },
    "notification": {
      "cancel": "Otkaži",
      "close": "Zatvori",
      "undo": "Opozovi radnju"
    },
    "sections": {
      "sequence": "Naracija",
      "immersive": "Sveobuhvatno",
      "title": "Naslov"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "snimak",
        "audio": "audio",
        "webmap": "mapa",
        "webscene": "scene",
        "video": "kolekciju",
        "content": "sadržaj",
        "webpage": "veb stranica"
      },
      "placeholders": {
        "generic": "Ovaj sadržaj je nepristupačan.",
        "deleted": "Ova stavka je obrisana.",
        "inaccessible": "Ovaj sadržaj je nepristupačan.",
        "unauthorized": "Nemate ovlašćenje da vidite ovaj sadržaj.",
        "unshared": "Ova stavka nije podeljena na isti način kao priča.",
        "othersUnshared": "Ova stavka nije podeljena na isti način kao priča.",
        "subscriptionContent": "Ova mapa sadrži pretplatnički sloj.",
        "premiumContent": "Ova mapa sadrži premijum sloj.",
        "secureService": "Ova mapa sadrži siguran sloj."
      },
      "contentIssues": {
        "noAltImage": "Mediji možda neće raditi na mobilnim uređajima",
        "noAltImageUnsupported": "Mediji nisu podržani na mobilnim uređajima",
        "noAltImageWarning": "Mediji možda neće raditi na mobilnim uređajima",
        "altImageBroken": "Alternativna slika definisana za ovu stavku medija nije pristupačna",
        "httpMedia": "Nebezbedni mediji",
        "httpContent": "Nebezbedni sadržaj"
      },
      "contentWarnings": {
        "noAltImage": "Obavezno testirajte svoju priču na mobilnim uređajima pre deljenja. Ako ovi mediji ne rade kao što je očekivano, koristite dugme ispod za dodavanje alternativnog snimka koji će biti prikazan kada se priča pregleda na mobilnim uređajima.",
        "noAltImageUnsupported": "Ovi mediji neće raditi na mobilnim uređajima. Koristite dugme ispod za dodavanje alternativnog snimka koji će biti prikazan kada se priča pregleda na mobilnim uređajima.",
        "noAltImageWarning": "Obavezno testirajte svoju priču na mobilnim uređajima pre deljenja. Ako ovi mediji ne rade kao što je očekivano, koristite dugme ispod za dodavanje alternativnog snimka koji će biti prikazan kada se priča pregleda na mobilnim uređajima.",
        "noAltImageAlt": "Ovaj tip medija nije podržan ili možda neće dobro raditi na mobilnim uređajima. Na mobilnoj kartici obezbedite alternativnu sliku koja će da bude prikazana kada se priča pregleda na telefonu ili tabletu."
      },
      "descriptions": {
        "httpAudioUnfixable": "Ovaj audio ne podržava HTTPS. Uklonite ga iz priče ili ga zamenite linkom.",
        "httpAudioUncheckable": "Ovaj audio ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod da biste isprobali korišćenje HTTPS URL adrese za ovaj audio. Ako to ne funkcioniše, uklonite audio iz svoje radnje ili ga zamenite hipervezom.",
        "httpAudioFixable": "Ovaj audio ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod za korišćenje bezbedne HTTPS URL adrese za ovaj audio.",
        "httpWebpageUnfixable": "Ova veb stranica ne podržava HTTPS. Uklonite je iz priče ili je zamenite snimkom ekrana ili linkom.",
        "httpWebpageUncheckable": "Ova veb stranica ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod da biste isprobali korišćenje HTTPS URL adrese za ovu veb stranicu. Ako to ne funkcioniše, uklonite veb stranicu iz svoje radnje ili je zamenite snimkom ekrana ili hipervezom.",
        "httpWebpageFixable": "Ova veb stranica ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod za korišćenje bezbedne HTTPS URL adrese za ovu veb stranicu.",
        "httpVideoUnfixable": "Ovaj video ne podržava HTTPS. Uklonite ga iz priče ili ga zamenite snimkom ekrana ili linkom.",
        "httpVideoUncheckable": "Ovaj video ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod da biste isprobali korišćenje HTTPS URL adrese za ovaj video sadržaj. Ako to ne funkcioniše, uklonite video sadržaj iz svoje radnje ili ga zamenite snimkom ekrana ili hipervezom.",
        "httpVideoFixable": "Ovaj video ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod za korišćenje bezbedne HTTPS URL adrese za ovaj video sadržaj.",
        "httpImageUnfixable": "Ovaj snimak ne podržava HTTPS. Uklonite ga iz priče ili ga zamenite linkom.",
        "httpImageUncheckable": "Ovaj snimak ima nebezbednu (HTTP) URL adresu.Kliknite na dugme ispod da biste isprobali korišćenje HTTPS URL adrese za ovaj snimak. Ako to ne funkcioniše, uklonite snimak iz svoje radnje ili ga zamenite hipervezom.",
        "httpImageFixable": "Ovaj snimak ima nebezbednu (HTTP) URL adresu. Kliknite na dugme ispod za korišćenje bezbedne HTTPS URL adrese za ovaj snimak.",
        "httpLayer": "Ovaj sloj ima nebezbednu (HTTP) URL adresu.",
        "inaccessibleLogo": "Ovaj logotip nije dostupan. Zamenite ga drugim snimkom.",
        "httpLogoUnfixable": "Ovaj logotip ne podržava HTTPS. Zamenite ga drugim snimkom.",
        "httpLogoFixable": "Ovaj logotip ima nebezbednu (HTTP) URL adresu. Koristite HTTPS URL adresu za logotip.",
        "httpLogoUncheckable": "Ovaj logotip ima nebezbednu (HTTP) URL adresu. Koristite HTTPS URL adresu za logotip, ili ga zamenite drugim snimkom."
      },
      "tooltips": {
        "httpAudioFixable": "Kliknite na dugme kako biste koristili HTTPS URL za ovaj audio.",
        "httpAudioUncheckable": "Isprobajte korišćenje HTTPS URL adrese za ovaj audio. Ako to ne funkcioniše, uklonite audio iz svoje radnje ili ga zamenite vezom.",
        "httpWebpageFixable": "Kliknite na dugme kako biste koristili HTTPS URL za ovu veb stranicu.",
        "httpWebpageUncheckable": "Isprobajte korišćenje HTTPS URL adrese za ovu veb stranicu. Ako to ne funkcioniše, uklonite veb stranicu iz svoje radnje ili je zamenite snimkom ekrana ili vezom.",
        "httpVideoFixable": "Kliknite na dugme kako biste koristili bezbednu HTTPS URL adresu za ovaj video.",
        "httpVideoUncheckable": "Isprobajte korišćenje HTTPS URL adrese za ovaj video sadržaj. Ako to ne funkcioniše, uklonite video sadržaj iz svoje radnje ili ga zamenite snimkom ekrana ili vezom.",
        "httpImageFixable": "Kliknite na dugme kako biste koristili bezbednu HTTPS URL adresu za ovaj snimak.",
        "httpImageUncheckable": "Isprobajte korišćenje HTTPS URL adrese za ovaj snimak. Ako to ne funkcioniše, uklonite snimak iz svoje radnje ili ga zamenite vezom.",
        "httpLayerMyMap": "Posetite stranicu stavke mape da biste ažurirali ovaj sloj za korišćenje HTTPS. Ako sloj ne može da bude ažuriran, uklonite ga iz mape.",
        "httpLayerNotMyMap": "Napravite kopiju mape i ažurirajte ovaj sloj za korišćenje HTTPS. Ako sloj ne može da bude ažuriran, uklonite ga iz mape.",
        "clickLearnMore": "Kliknite sa saznate više."
      },
      "fixButtons": {
        "agolItemPage": "Stranica stavke",
        "openTheMap": "Otvori mapu",
        "updateAudio": "Popravi URL adresu audio sadržaja",
        "updateWebpages": "Popravi URL adresu veb stranice",
        "updateVideos": "Popravi URL adresu",
        "updateImages": "Popravi URL adresu snimka"
      },
      "mapIssues": {
        "fixButton": "Popravi probleme",
        "nofixButton": "Problemi",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Nepodeljeni sadržaj",
          "othersUnshared": "Nepodeljeni sadržaj nekog drugog",
          "subscriptionContent": "Sadržaj pretplatnika",
          "premiumContent": "Premijum sadržaj",
          "secureContent": "Siguran sadržaj",
          "deleted": "Obrisani sadržaj",
          "inaccessible": "Nepristupačan sadržaj",
          "unauthorized": "Neovlašćeni sadržaj"
        },
        "descriptions": {
          "unshared": "Ovaj sadržaj nije podeljen isto kao vaša priča.",
          "othersUnshared": "Ovaj sadržaj poseduje neko drugi i nije podeljen isto kao vaša priča.",
          "othersUnsharedAuthorized": "Ovaj sadržaj poseduje neko drugi, ali ste ovlašćeni da ga podelite.",
          "inaccessible": "Ovaj sadržaj je nepristupačan.",
          "deleted": "Ovaj sadržaj je obrisan.",
          "unauthorized": "Nemate ovlašćenje da vidite ovaj sadržaj.",
          "popupFeatureLayer": "Iskačući prozori sloja tajlova potiču iz sloja geoobjekata koji nisu podeljeni isto kao vaša priča.",
          "subscriptionContent": "Morate da ovlastite pretplatnički sadržaj za javno korišćenje.",
          "premiumContent": "Morate da ovlastite premium sadržaj za javno korišćenje.",
          "secureService": "Sigurni sadržaj je nepristupačan čitaocima.",
          "missingItemWarning": "Stavka povezana sa ovim slojem je obrisana."
        },
        "tooltips": {
          "unshared": "Kliknite da biste saznali više o deljenju.",
          "othersUnshared": "Nemate dozvole da podelite sadržaj koji poseduju drugi. Pitajte vlasnika da ga podelite, uklonite mapu iz priče, ili izmenite mapu da biste uklonili slojeve koji nisu vaši. Kliknite da biste saznali više o uređivanju mapa.",
          "inaccessible": "Uklonite ovu mapu iz priče ili je izmenite da biste uklonili nepristupačne slojeve. Kliknite da biste saznali više o uređivanju mapa.",
          "deleted": "Uklonite ovu mapu iz priče ili je izmenite da biste uklonili nedostajuće slojeve. Kliknite da biste saznali više o uređivanju mapa.",
          "unauthorized": "Uklonite ovu mapu iz priče ili je izmenite da biste uklonili neautorizovane slojeve. Kliknite da biste saznali više o uređivanju mapa.",
          "popupFeatureLayer": "Iskačući prozori sloja tajlova potiču iz sloja geoobjekata koji nisu podeljeni isto kao vaša priča.",
          "subscriptionContent": "Pretplatnički sadržaj ne troši kredite. Kliknite da saznate više.",
          "premiumContent": "Krediti će biti naplaćen vašoj organizaciji svaki put kada neko pogleda premium sloj u vašoj priči. Kliknite da saznate više.",
          "secureService": "Uklonite sigurni sadržaj iz priče, kliknite da saznate kako da ovlastite da sigurni sadržaj koriste i drugi korisnici.",
          "missingItemWarning": "Ovaj sloj još radi, ali njegovi simboli, iskačući prozori ili ime su se promenili. Potvrdite da se sloj prikazuje kako je očekivano ili ga uklonite iz priče."
        },
        "fixButtons": {
          "share": "Podeli",
          "hide": "Sakrij",
          "authorize": "Autorizuj",
          "remove": "Ukloni",
          "help": "Nađite pomoć",
          "ignore": "Zanemari",
          "confirm": "Potvrdi",
          "edit": "Izmeni mapu"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Neke mape i slojevi su takođe podeljeni.",
          "alsoSharedMaps": "Neke mape su takođe podeljene.",
          "alsoSharedLayers": "Neki slojevi su takođe podeljeni.",
          "sharedOthersContent": "Takođe ste koristili administratorske privilegije da podelite sadržaj nekog drugog."
        }
      },
      "storyHealth": {
        "healthy": "Nema spornih stavki",
        "notHealthy": "Popravi probleme",
        "warnings": "Pogledaj upozorenja"
      }
    },
    "saveErrorSocial": {
      "title": "Deljenje na društvenim medijima",
      "panel1": "Vaša priča ne može da izgleda pravilno na društvenim medijima, jer naslov vaše stavke ArcGIS veb aplikacije nije isti kao naslov vaše priče.",
      "panel1tooltip": "Određivanjem naslova, rezimea i sličice, vaša priča će izgledati ovako:",
      "panel2": "Koji naslov biste želeli da koristite na društvenim medijima:",
      "panel2q1": "Naslov priče (preporučeno)",
      "panel2q1tooltip": "Odabirom ove opcije naslov vaše stavke će biti izmenjen da se podudara sa naslovom vaše priče i dalje promene u alatki za izradu će biti sinhronizovane.",
      "panel2q2": "Naslov stavke",
      "panel3": "Da biste dodatno poboljšali izgled priče na društvenim medijima, koristite ${MYSTORIES} da dodate rezime i snimak sličice.",
      "panel4": "Nemoj ponovo da me upozoravaš na ovu priču",
      "save": "Sačuvaj",
      "mystories": "Moje priče"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Važna poruka u vezi sa veb bezbednošću i Story Maps",
      "s1h1": "Esri poboljšava bezbednost za Story Maps",
      "s1p1": "Vaše Story mape žive na vebu i veb zajednica uvek radi na uspostavljanju i primeni bolje sigurnosti. HTTPS, kojim se obezbeđuje sigurna veza za prenos sadržaja putem interneta, pojavljuje se kao očekivani način pristupa veb sadržaju. Najsavremeniji pregledači sada prikazuju poruke upozorenja kada se koristi HTTP umesto HTTPS. Zbog ovog novog standarda, preporučujemo da koristite HTTPS linkove za kreiranje i deljenje Story mapa i da isključivo koristite HTTPS URL adrese kada ugrađujete veb sadržaj ili povezujete sa snimcima u Story mapi.",
      "s1p2": "Drugim rečima, ovo znači da Story mapi i svom njenom sadržaju (uključujući snimke, slojeve, ugrađene aplikacije i veb sajtove) treba da se pristupa korišćenjem linkova koji počinju sa HTTPS umesto sa HTTP. Ovim se obezbeđuje bolje iskustvo za čitaoce jer većina veb pregledača pokazuje da su vaše priče sigurne.",
      "s2h1": "Šta treba da uradim?",
      "s2p1": "Esri radi na tome da ovaj prelazak učini što lakšim za Story mape i njihove korisnike. Sada su dostupne alatke za izradu Story Map i Moje priče koje vam pomažu da pronađete sadržaj koji nije siguran (HTTP) u pričama i obezbeđuje preporuke o tome na koji način to da rešite. Proverite da li vaše priče sadrže sadržaj koji nije siguran i nadogradite na HTTPS što pre.",
      "action1": "Zatvori",
      "action2": "Proveri odmah moje priče",
      "action3": "Saznaj više",
      "floatingNotification": "Ova priča sadrži nebezbedni (HTTP) sadržaj. Pregledajte je i rešite taj problem."
    }
  }
});