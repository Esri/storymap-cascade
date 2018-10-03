/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Primijeni",
      "close": "Zatvori"
    },
    "header": {
      "sharingNotAvailable": "Ovo nije dostupno dok ne podijelite priču",
      "edit": "Uredi"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Knjižne oznake",
        "logoSharing": "Logotip i dijeljenje",
        "theme": "Izgled"
      },
      "bookmarks": {
        "title": "Odjeljak",
        "bookmark": "Knjižna oznaka",
        "intro": "Knjižne su oznake poveznice s dijelovima priče koji su prikazani u zaglavlju. Stvaranje preciznih knjižnih oznaka za glavne dijelove vaše priče pomoći će čitateljima u snalaženju.",
        "sequentialDefault": "Narativni dio (nema pronađenog teksta)",
        "immersiveDefault": "Prožimajući dio (nema pronađenog teksta)",
        "titleDefault": "Dio s naslovom (nema pronađenog teksta)",
        "coverDefault": "Dio naslovnice (nema pronađenog teksta)",
        "coverAppendage": "(Naslovnica)"
      },
      "logoSharing": {
        "logo": "Logotip",
        "logoButton": "Upotrijebi logotip ${ESRI}",
        "useOrgLogo": "Upotrijebi logotip moje organizacije",
        "useOrgLogoHelp": "Upotrijebi logotip koji nudi administrator",
        "logoLink": "Poveznica logotipa",
        "logoUploadProgress": "Učitavanje logotipa u tijeku",
        "logoUploadSuccess": "Logotip je uspješno učitan",
        "logoUploadError": "Nije uspjelo učitavanje logotipa, prebacivanje natrag na logotip ${ESRI}",
        "customHeaderText": "Dodatni tekst",
        "taglineLinkDisabledTooltip": "Unesite dodatni tekst za omogućivanje poveznice",
        "link": "Poveznica dodatnog teksta",
        "enableSocialSharing": "Prikaži gumb za dijeljenje"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fontovi",
        "previewLabel": "Pretpregled",
        "fontsTitleLabel": "Nazivi",
        "fontsBodyLabel": "Tijelo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privatno",
      "btnOrg": "Organizacija",
      "btnPublic": "Javnost",
      "btnEveryone": "Svi"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Sastavljač",
      "buttonSaving": "Spremanje",
      "buttonSaved": "Spremljeno",
      "buttonError": "Spremanje nije uspjelo",
      "buttonShare": "Podijeli",
      "buttonSettings": "Postavke",
      "settingsLogoError": "Postoji problem s vašim logotipom. Kliknite da biste saznali više.",
      "buttonHelp": "Potražite pomoć ili objavite povratnu informaciju na GeoNetu",
      "buttonPreview": "Prikaz priče",
      "buttonHealth": "Stanje sustava",
      "manageStories": "Upravljaj mojim pričama",
      "closeWithPendingChange": "Jeste li sigurni da želite potvrditi ovu radnju? Vaše će se promjene izgubiti.",
      "coverLabel": "Naslovnica",
      "creditsLabel": "Zasluge",
      "betaFeedback": "Povratne informacije",
      "betaNote": "Recite nam što mislite o ${APP_NAME} ili ako nešto ne radi kako ste očekivali.",
      "notSharedNote": "Vaša priča nije podijeljena, samo je vi možete vidjeti",
      "organizationWarning": "Kako biste osigurali da priču mogu vidjeti drugi također morate podijeliti scene, slojeve scene i umetnute appove sa svojom organizacijom. Karte i slojevi karte dijele se automatski.",
      "publicWarning": "Kako biste osigurali da priču mogu vidjeti drugi, također morate podijeliti scene, slojeve scene i umetnute appove sa svima. Karte i slojevi karte dijele se automatski.",
      "addTitleNote": "Da biste spremili dodajte naslov za naslovnicu",
      "saveError": "Došlo je do pogreške pri spremanju vaše priče.",
      "duplicate": "Dupliciraj",
      "organize": "Organiziraj",
      "done": "Gotovo",
      "invite": "Kako izrađujete priču, dijelovi će se prikazati ovdje...",
      "mystoriestooltip": "Cascade Builder upozorava vas na probleme u vašoj priči i pomaže vam da ih popravite. Ne provjeravaju se scene i umetnuti appovi, zato ih trebate provjeriti ručno."
    },
    "immersiveViewPanel": {
      "transition": "Prijelaz",
      "chooseTransition": "Odaberite prijelaz",
      "fade": "Nestajanje",
      "fadeSlow": "Polagano nestajanje",
      "swipeVertical": "Klizni okomito",
      "swipeHorizontal": "Klizni vodoravno",
      "none": "Nema",
      "disabledConsecutiveSameMedia": "Nije dostupno kad uzastopni prikazi koriste iste medije",
      "disabledTooltipMap": "Za upotrebu ovog prijelaza vidljivi slojevi u oba prikaza moraju se razlikovati, a ostala svojstva karte moraju biti jednaka",
      "disabledConsecutiveSameMap": "Nije dostupno kad uzastopni prikazi koriste istu kartu",
      "disabledNotInBeta": "Nije dostupno kad uzastopni prikazi koriste istu kartu",
      "disabledNonConsecutive": "Nije dostupno jer se ovaj medij pojavljuje neuzastopno",
      "addMedia": "Dodaj medije",
      "invite": "Kako izrađujete prožimajući dio, prikazi će se prikazati ovdje..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Izgled",
        "manage": "Upravljaj",
        "size": "Veličina",
        "background": "Pozadina",
        "mobile": "Mobile",
        "issues": "Problemi",
        "fixIssues": "Popravi probleme"
      },
      "manage": {
        "changeMedia": "Promijeni medij",
        "edit": "Uredi",
        "editAside": "Otvara se u novoj kartici preglednika. Nakon što spremite uređivanja, spremite i ponovo učitajte ovu priču kako biste vidjeli promjene.",
        "remove": "Ukloni",
        "altTextPlaceholder": "Dodajte opis ovog medija za slabovidne čitatelje...",
        "altTextHelptip": "Zamjenski tekst je opis vizualnih medija koji upotrebljavaju tehnologije za pomaganje kao što je softver za čitanje zaslona. To nije obavezno, ali je preporučeno kako bi se ispunile smjernice za mrežnu pristupačnost kao što su WCAG i odjeljak 508."
      },
      "appearance": {
        "homeView": "Početni prikaz",
        "audio": "Audiozapis",
        "on": "Uključeno",
        "muted": "Isključen zvuk",
        "volumeAside": "Videozapis će se automatski reproducirati kada čitatelj dođe do ovog prikaza. Ako isključite zvuk, čitatelj ga neće moći uključiti.",
        "view": "Prikaži",
        "resetLocation": "Poništi lokacije",
        "resetLayers": "Poništi slojeve",
        "clearPopup": "Očisti skočne prozore",
        "interaction": "Interakcija",
        "interactionDisabled": "Interakcija onemogućena",
        "buttonToEnable": "Gumb za omogućivanje",
        "interactionEnabled": "Interakcija omogućena",
        "interactionAside": "*Uređaji na dodir prikazat će gumb za interakciju.",
        "slide": "Slajd",
        "noSlides": "Nema dostupnih slajdova.",
        "mapExtentPrompt": "Ažurirajte kartu i ispričajte svoju priču, kliknite na kvačicu za spremanje promjena"
      },
      "sectionAppearance": {
        "layout": "Izgled",
        "theme": "Tema"
      },
      "size": {
        "small": "Malo",
        "medium": "Srednje",
        "large": "Veliko",
        "noCrop": "Nemoj obrezati visoke slike",
        "noCropTallTooltip": "Ako ne obrežete visoku sliku, proizvest ćete dramatični efekt za čitatelje koji će se trebati pomicati prema dolje kako bi vidjeli čitavu sliku."
      },
      "background": {
        "noCrop": "Nemoj obrezati",
        "mostImportantPart": "Odaberite najvažniju točku",
        "cropExplanationImmersive": "Odaberite točku na slici kako biste odabrali način na koji će se obrezati slika za različite veličine zaslona. Točka koju odaberete uvijek će biti vidljiva. Označite „Nemoj obrezati” ako vaša slika treba biti potpuno vidljiva.",
        "cropExplanation": "Odaberite točku na slici kako biste odabrali način na koji će se obrezati slika za različite veličine zaslona. Točka koju odaberete uvijek će biti vidljiva.",
        "color": "Boja",
        "previews": "Pretpregledi"
      },
      "altMedia": {
        "alternativeMedia": "Alternativna slika za mobilni uređaj",
        "explanation": "Neki mediji nisu podržani ili možda neće raditi dobro na mobilnim uređajima. Upotrijebite ovu ploču za određivanje slike koja će se prikazati umjesto ovog medija kada se vaša priča prikazuje na telefonu ili tabletu.",
        "changeAltImage": "Promijeni sliku",
        "uploadAltImage": "Dodaj alternativnu sliku"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Poveznica na sadržaj",
        "urls_short": "Poveži",
        "contentType": {
          "error": "Nema ovlaštenih medija.",
          "imageOnly": "U ovom dijelu priče možete dodati sliku.",
          "imageAndVideo": "U ovom dijelu priče možete dodati sliku ili videozapis.",
          "imageVideoWebpage": "U ovom dijelu priče možete dodati audiozapis, sliku, videozapis ili web-stranicu."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Pretraživanje „${searchterm}”...",
          "searchedFor": "Rezultati pretraživanja za „${searchterm}”",
          "albumsOf": "Albumi korisnika ${username}",
          "noPhotosFound": "Nema fotografija koje se podudaraju s vašim pretraživanjem. Pokušajte ponovno kasnije.",
          "noItemsFound": "Nema stavki koje se podudaraju s vašim pretraživanjem. Pokušajte ponovno kasnije.",
          "noItemsInThisStory": "Sadržaj s ArcGIS-a još nije dodan priči.",
          "limitReached": "Prikazuje se 100 stavki. Ako ne pronađete ono što trebate, pokušajte pretraživati po ključnoj riječi.",
          "galleryItems": {
            "uploadError": "Nažalost, ova se stavka nije uspjela učitati."
          },
          "agol": {
            "remove1": "Izbrišite ovu neupotrijebljenu sliku s ArcGIS računa.",
            "remove2": "(Trebat ćete je ponovno učitati ako je odlučite kasnije iskoristiti.)",
            "removeFailed": "Uklonite ovu nedostupnu sliku s popisa.",
            "modified": "Izmijenjeno ${date}",
            "uploaded": "Učitano ${date}",
            "contentByAuthor": "${contentType} od ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Pregledavaj fotografije na uslugama ${Picasa} ili ${Google+}"
          },
          "flickr": {
            "photostream": "Prijenos fotografija",
            "searchAndBrowse": "Pretraži i pregledavaj fotografije na usluzi ${Flickr}",
            "captionStarter": "Fotografija autora ${USERNAME} na ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Traži fotografije na usluzi ${Unsplash}",
            "photoBy": "Fotografija od ${username}",
            "userLink": "Idi na stranicu ${Unsplash} korisnika ${username}",
            "captionStarter": "Fotografija autora ${USERNAME} na ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Poveznica na sadržaj na webu",
              "imageOnly": "Poveznica na sliku na webu",
              "imageAndVideo": "Poveznica na sliku ili videozapis na webu"
            },
            "linkText": {
              "imageOnly": "U prethodnom okviru možete staviti poveznicu izravno na fotografiju.",
              "imageAndVideo1": "U prethodnom okviru možete zalijepiti poveznicu ili kod iframea za videozapis s usluga ${YouTube} ili ${Vimeo}.",
              "imageAndVideo2": "Također možete stavit poveznicu izravno na fotografiju.",
              "imageVideoWebpage1": "U prethodnom okviru možete zalijepiti poveznicu ili kod iframea za web-sadržaj kao što je dinamični grafikon ili videozapis s usluga ${YouTube} ili ${Vimeo}.",
              "imageVideoWebpage2": "Također možete staviti poveznicu izravno na fotografiju, videozapis, zvučnu datoteku, web-stranicu ili web-app.",
              "ender": "Uvijek se koristite sigurnim (https) poveznicama. Ako vaš sadržaj ne podržava https, dodajte mu poveznicu u tekstu priče tako da ga čitatelji mogu prikazati u novoj kartici preglednika.",
              "httpsError": "Poveznica mora početi s HTTPS-om"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Učitajte stranicu preko sigurne veze (https)",
              "embedProtocolWarning1": "Ako se ova stranica ne učita u vašoj priči, ne može se umetnuti iz sigurnosnih razloga.",
              "embedProtocolWarning2": "Ako se ova stranica ne učita u vašoj priči, odznačite ovu opciju i pokušajte ponovno. Ako se stranica i dalje ne želi učitati, ne može se umetnuti iz sigurnosnih razloga.",
              "embedProtocolWarning3": "Umjesto toga, dodajte poveznicu u priču za otvaranje stranice u novoj kartici preglednika. ${linkText}",
              "linkText": "Saznajte više."
            },
            "placeholder": "${https://}... ili ${<iframe>}",
            "uploadErrors": {
              "generic": "Nešto je pošlo krivo s unesenom adresom. Pokušajte ponovno kasnije.",
              "imageOnly1": "Morate upotrijebiti sliku u ovom dijelu priče.",
              "imageOnly2": "Stavite poveznicu na sliku (.jpg, .png, .gif) ili izaberite sliku s usluge ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
              "imageAndVideo1": "Morate upotrijebiti sliku ili videozapis u ovom dijelu priče.",
              "imageAndVideo2": "Stavite poveznicu na sliku (.jpg, .png, .gif) ili videozapis na ${YouTube} ili ${Vimeo} ili izaberite sliku s usluge ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
              "badFormat": "Poveznica na datoteku koju pokušavate dodati nije ispravno formatirana.",
              "inaccessible": "Datoteka koju pokušavate dodati nedostaje ili nije dostupna.",
              "tryAgain": "Provjerite adresu i pokušajte ponovno.",
              "mediaTypes": {
                "VIDEO": "videozapis",
                "IMAGE": "slika",
                "generic": "mediji"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Upotrebom usluge treće strane pristajete na njihove uvjete korištenja: ",
          "googlePhotos": {
            "placeholder": "E-pošta ili ${Picasa}/${Google+} ID",
            "helpText": "Možete dodati fotografije učitane na ${Picasa} ili ${Google+} svojoj priči . ${helpLinkText} o upotrebi slika pohranjenih na vašem ${Google} računu u vašu priču.",
            "helpLinkText": "Saznajte više",
            "cannotFindUser": "Nije moguće pronaći korisnika ${username}. Pokušajte ponovno kasnije."
          },
          "unsplash": {
            "placeholder": "Traži fotografije",
            "aboutText": "${Unsplash} je probrana zbirka besplatnih fotografija visoke kvalitete.",
            "copyrightText": "Sve su fotografije licencirane pod licencom ${Unsplash}. Saznajte više informacija ${moreInfoLink}.",
            "moreInfoLink": "ovdje"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} račun",
              "text": "Svi ${Flickr}"
            },
            "placeholders": {
              "user": "Traži račun",
              "userText": "Pretraži ovaj račun za fotografije",
              "text": "Traži fotografije"
            },
            "errors": {
              "cannotFindUser": "Nije moguće pronaći korisnika ${username}.",
              "noUserPhotos": "${username} nema javne fotografije.",
              "didYouMean": "Jeste li mislili ${username}?",
              "generalUserError": "Nešto je pošlo krivo pri traženju korisnika ${username}."
            },
            "licenses": {
              "licenseLabel": "Licenca: ",
              "public": "Javna domena",
              "commercial": "U redu za komercijalnu upotrebu",
              "nonCommercial": "U redu za nekomercijalnu upotrebu",
              "reserved": "Sva prava pridržana",
              "any": "Sve licence"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Ova priča",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organizacija ${orgname}",
              "myContent": "Moj sadržaj"
            },
            "createContent": {
              "createNewMap": "Stvaranje nove karte",
              "or": "ILI",
              "dragAndDropImage": "Ispusti slike",
              "dragAndDropImageAudio": "Ispustite slike ili audiozapis",
              "uploadButton": "Pregledaj",
              "agolInfo": "Učitane slike i audiozapis bit će dostupni samo unutar ove priče.",
              "saveBeforeUpload": "Kada spremite ovu priču, ovdje možete učitati slike i audiozapis na ArcGIS.",
              "fileExtsImage": "Podržane vrste: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Podržane vrste: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maks. 10 MB po datoteci."
            },
            "filterAndSort": {
              "webmap": "Web-karta",
              "webscene": "Web-scena",
              "image": "Slika",
              "audio": "Audiozapis",
              "date": "Datum",
              "sortByDate": "Sortiraj po datumu",
              "title": "Naziv",
              "sortByTitle": "Sortiraj po naslovu",
              "views": "Prikazi",
              "search": "Traži po ključnoj riječi ili ID-u"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Uredi kartu",
      "unauthorizedDomain": "Niste na ovlaštenoj domeni da biste upotrijebili uređivač karte",
      "loading": "Pričekajte dok se ne učita uređivač karte",
      "saving": "Spremanje karte",
      "success": "Karta spremljena",
      "cancelTitle": "Želite li odbaciti nespremljene promjene?",
      "errorSave": "Nije moguće spremiti kartu. Pokušajte ponovno.",
      "loadFail": "Nažalost, uređivač karte ne može se učitati",
      "close": "Zatvori",
      "save": "Spremi",
      "confirm": "Da, zatvori kartu",
      "deny": "Ne, nastavi raditi"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Nastavite s pričom ovdje..."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Mediji",
        "title": "Naziv",
        "immersive": "Prožimanje"
      },
      "link": {
        "invite": "Zalijepite ili upišite poveznicu..."
      },
      "color": {
        "choose": "izaberi",
        "cancel": "odustani",
        "clear": "Izbriši boju"
      }
    },
    "imageGallery": {
      "addImage": "Dodaj drugu sliku",
      "moveBackward": "Idi natrag",
      "moveForward": "Idi naprijed"
    },
    "cover": {
      "titlePrompt": "Unesite naslov svoje priče...",
      "subtitlePrompt": "Pomaknite se dolje za početak ili unesite dodatni podnaslov",
      "mediaPlaceholder": "Dodajte svoju sliku ili videozapis",
      "saveError": "Spremanje nije uspjelo, već imate stavku s ovim naslovom"
    },
    "credits": {
      "sectionInvite": "Dodaj dio sa zaslugama",
      "warning": "Treba popuniti oba polja",
      "content": "Sadržaj...",
      "source": "Izvor...",
      "linkPrompt": "Dodatna poveznica...",
      "introductionPlaceholder": "Unesite dodatni uvod vašem dijelu sa zaslugama..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Položaj",
        "theme": "Tema",
        "size": "Veličina",
        "background": "Pozadina",
        "layout": "Pomicanje (za sve ploče)"
      }
    },
    "title": {
      "placeholder": "Unesite naziv..."
    },
    "media": {
      "mediaUpload": "Učitavanje medija u tijeku...",
      "mediaUploadSuccess": "Medije je uspješno učitan",
      "mediaUploadFail": "Učitavanje medija nije uspjelo"
    },
    "controller": {
      "sectionOrganize": "Organizirali ste dijelove",
      "immersiveOrganize": "Organizirali ste prikaze",
      "sectionDelete": "Izbrisali ste odjeljak",
      "viewDelete": "Izbrisali ste prikaz"
    },
    "notification": {
      "cancel": "Odustani",
      "close": "Zatvori",
      "undo": "Poništi"
    },
    "sections": {
      "sequence": "Priča",
      "immersive": "Prožimanje",
      "title": "Naziv"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "slika",
        "audio": "audiozapis",
        "webmap": "karta",
        "webscene": "scena",
        "video": "videozapis",
        "content": "sadržaj",
        "webpage": "web-stranica"
      },
      "placeholders": {
        "generic": "Ovaj sadržaj nije dostupan.",
        "deleted": "Ova je stavka izbrisana.",
        "inaccessible": "Ovaj sadržaj nije dostupan.",
        "unauthorized": "Niste ovlašteni za pregled ovog sadržaja.",
        "unshared": "Ova stavka nije podijeljena kao ni vaša priča.",
        "othersUnshared": "Ova stavka nije podijeljena kao ni vaša priča.",
        "subscriptionContent": "Ova karta sadrži pretplatnički sloj.",
        "premiumContent": "Ova karta sadrži premium sloj.",
        "secureService": "Ova karta sadrži sigurni sloj."
      },
      "contentIssues": {
        "noAltImage": "Medij možda neće raditi na mobilnom uređaju",
        "noAltImageUnsupported": "Medij nije podržan na mobilnom uređaju",
        "noAltImageWarning": "Medij možda neće raditi na mobilnom uređaju",
        "altImageBroken": "Određena alternativna slika za ovu stavku medija nije dostupna",
        "httpMedia": "Nesigurni mediji",
        "httpContent": "Nesiguran sadržaj"
      },
      "contentWarnings": {
        "noAltImage": "Obavezno isprobajte svoju priču na mobilnim uređajima prije dijeljenja. Ako medij ne radi kako ste očekivali, s pomoću gumba u nastavku dodajte alternativnu sliku koja će se prikazati kada se priča prikazuje na telefonu ili tabletu.",
        "noAltImageUnsupported": "Ovaj medij neće raditi na mobilnim uređajima. S pomoću gumba u nastavku dodajte alternativnu sliku koja će se prikazati kada se priča gleda na telefonu ili tabletu.",
        "noAltImageWarning": "Obavezno isprobajte svoju priču na mobilnim uređajima prije dijeljenja. Ako medij ne radi kako ste očekivali, s pomoću gumba u nastavku dodajte alternativnu sliku koja će se prikazati kada se priča prikazuje na telefonu ili tabletu.",
        "noAltImageAlt": "Ova vrsta medija nije podržana ili neće dobro raditi na mobilnim uređajima. Na kartici mobilnog uređaja navedite alternativnu sliku koja će se prikazati kada se priča gleda na telefonu ili tabletu."
      },
      "descriptions": {
        "httpAudioUnfixable": "Ovaj audiozapis ne podržava HTTPS. Uklonite ga s priče ili ga zamijenite poveznicom.",
        "httpAudioUncheckable": "Ovaj audiozapis ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste pokušali upotrijebiti HTTPS URL za ovaj audiozapis. Ako to ne uspije, uklonite audiozapis s priče ili ga zamijenite hipervezom.",
        "httpAudioFixable": "Ovaj audiozapis ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste upotrijebili siguran HTTPS URL za ovaj audiozapis.",
        "httpWebpageUnfixable": "Ova web-stranica ne podržava HTTPS. Uklonite je s priče ili je zamijenite snimkom zaslona ili poveznicom.",
        "httpWebpageUncheckable": "Ova web-stranica ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste pokušali upotrijebiti HTTPS URL za ovu web-stranicu. Ako to ne uspije, uklonite web-stranicu s priče ili je zamijenite snimkom zaslona ili hipervezom.",
        "httpWebpageFixable": "Ova web-stranica ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste upotrijebili siguran HTTPS URL za ovu web-stranicu.",
        "httpVideoUnfixable": "Ovaj videozapis ne podržava HTTPS. Uklonite ga s priče ili ga zamijenite snimkom zaslona ili poveznicom.",
        "httpVideoUncheckable": "Ovaj videozapis ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste pokušali upotrijebiti HTTPS URL za ovaj videozapis. Ako to ne uspije, uklonite videozapis s priče ili ga zamijenite snimkom zaslona ili hipervezom.",
        "httpVideoFixable": "Ovaj videozapis ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste upotrijebili siguran HTTPS URL za ovaj videozapis.",
        "httpImageUnfixable": "Ova slika ne podržava HTTPS. Uklonite je s priče ili je zamijenite poveznicom.",
        "httpImageUncheckable": "Ova slika ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste pokušali upotrijebiti HTTPS URL za ovu sliku. Ako to ne uspije, uklonite sliku s priče ili je zamijenite hipervezom.",
        "httpImageFixable": "Ova slika ima nesiguran (HTTP) URL. Kliknite na gumb u nastavku da biste upotrijebili siguran HTTPS URL za ovu sliku.",
        "httpLayer": "Ovaj sloj ima nesiguran (HTTP) URL.",
        "inaccessibleLogo": "Ovaj logotip nije dostupan. Zamijenite ga drugom slikom.",
        "httpLogoUnfixable": "Ovaj logotip ne podržava HTTPS. Zamijenite ga drugom slikom.",
        "httpLogoFixable": "Ovaj logotip ima nesiguran (HTTP) URL. Upotrijebite HTTPS URL za logotip.",
        "httpLogoUncheckable": "Ovaj logotip ima nesiguran (HTTP) URL. Upotrijebite HTTPS URL za logotip ili ga zamijenite drugom slikom."
      },
      "tooltips": {
        "httpAudioFixable": "Kliknite na gumb da biste upotrijebili siguran HTTPS URL za ovaj audiozapis.",
        "httpAudioUncheckable": "Pokušajte upotrijebiti HTTPS URL za ovaj audiozapis. Ako to ne uspije, uklonite audiozapis s priče ili ga zamijenite poveznicom.",
        "httpWebpageFixable": "Kliknite na gumb da biste upotrijebili siguran HTTPS URL za ovu web-stranicu.",
        "httpWebpageUncheckable": "Pokušajte upotrijebiti HTTPS URL za ovu web-stranicu. Ako to ne uspije, uklonite web-stranicu s priče ili je zamijenite snimkom zaslona ili poveznicom.",
        "httpVideoFixable": "Kliknite na gumb da biste upotrijebili siguran HTTPS URL za ovaj videozapis.",
        "httpVideoUncheckable": "Pokušajte upotrijebiti HTTPS URL za ovaj videozapis. Ako to ne uspije, uklonite videozapis s priče ili ga zamijenite snimkom zaslona ili poveznicom.",
        "httpImageFixable": "Kliknite na gumb da biste upotrijebili siguran HTTPS URL za ovu sliku.",
        "httpImageUncheckable": "Pokušajte upotrijebiti HTTPS URL za ovu sliku. Ako to ne uspije, uklonite sliku s priče ili ga zamijenite poveznicom.",
        "httpLayerMyMap": "Posjetite stranicu sa stavkama karte da biste ažurirali ovaj sloj da upotrebljava HTTPS. Ako se sloj ne može ažurirati, uklonite ga s karte.",
        "httpLayerNotMyMap": "Kopirajte kartu i ažurirajte ovaj sloj upotrebljava HTTPS. Ako se sloj ne može ažurirati, uklonite ga s karte.",
        "clickLearnMore": "Kliknite da biste saznali više."
      },
      "fixButtons": {
        "agolItemPage": "Stranica sa stavkama",
        "openTheMap": "Otvori kartu",
        "updateAudio": "URL za popravak audiozapisa",
        "updateWebpages": "URL za popravak web-stranice",
        "updateVideos": "URL za popravak videozapisa",
        "updateImages": "URL za popravak slike"
      },
      "mapIssues": {
        "fixButton": "Popravi probleme",
        "nofixButton": "Problemi",
        "mapLabel": "Karta:",
        "summaries": {
          "unshared": "Nepodijeljeni sadržaj",
          "othersUnshared": "Tuđi nepodijeljeni sadržaj",
          "subscriptionContent": "Sadržaj pretplatnika",
          "premiumContent": "Premium sadržaj",
          "secureContent": "Sigurni sadržaj",
          "deleted": "Izbrisani sadržaj",
          "inaccessible": "Nedostupni sadržaj",
          "unauthorized": "Neovlašteni sadržaj"
        },
        "descriptions": {
          "unshared": "Ovaj sadržaj nije podijeljen kao i vaša priča.",
          "othersUnshared": "Ovaj sadržaj pripada nekome drugom i nije podijeljen kao i vaša priča.",
          "othersUnsharedAuthorized": "Ovaj sadržaj pripada nekome drugom, ali ovlašteni ste za njegovo dijeljenje.",
          "inaccessible": "Ovaj sadržaj nije dostupan.",
          "deleted": "Ovaj je sadržaj izbrisan.",
          "unauthorized": "Niste ovlašteni za prikaz ovog sadržaja.",
          "popupFeatureLayer": "Skočni prozori pločastog sloja dolaze iz sloja geoobjekta koji nije podijeljen kao i vaša priča.",
          "subscriptionContent": "Morate autorizirati pretplatnički sadržaj za javnu upotrebu.",
          "premiumContent": "Morate autorizirati premium sadržaj za javnu upotrebu.",
          "secureService": "Sigurni sadržaj nije dostupan vašim čitateljima.",
          "missingItemWarning": "Izbrisana je stavka povezana s ovim slojem."
        },
        "tooltips": {
          "unshared": "Kliknite kako biste saznali više o dijeljenju.",
          "othersUnshared": "Nemate dopuštenje za dijeljenje tuđeg sadržaja. Zatražite od vlasnika sadržaja da ga podijeli, uklonite kartu iz svoje priče ili uredite kartu za uklanjanje slojeva koji nisu vaši. Kliknite da biste saznali više o uređivanju karata.",
          "inaccessible": "Uklonite ovaj sloj iz svoje priče ili ga uredite za uklanjanje nedostupnih slojeva. Kliknite da biste saznali više o uređivanju karata.",
          "deleted": "Uklonite ovaj sloj iz svoje priče ili ga uredite za uklanjanje slojeva koji nedostaju. Kliknite da biste saznali više o uređivanju karata.",
          "unauthorized": "Uklonite ovaj sloj iz svoje priče ili ga uredite za uklanjanje neovlaštenih slojeva. Kliknite da biste saznali više o uređivanju karata.",
          "popupFeatureLayer": "Skočni prozori pločastog sloja dolaze iz sloja geoobjekta koji nije podijeljen kao i vaša priča.",
          "subscriptionContent": "Pretplatnički sadržaj ne troši kredite. Kliknite kako biste saznali više.",
          "premiumContent": "Krediti će se naplatiti vašoj organizaciji svaki put kada netko pregleda premium sloj u vašoj priči. Kliknite kako biste saznali više.",
          "secureService": "Uklonite sigurni sadržaj iz svoje priče ili kliknite da biste saznali kako autorizirati sigurni sadržaj za tuđu upotrebu.",
          "missingItemWarning": "Ovaj sloj i dalje radi, ali njegovi simboli, skočni prozori ili naziv možda su promijenjeni. Potvrdite da se sloj prikazuje kako je očekivano ili ga uklonite iz svoje priče."
        },
        "fixButtons": {
          "share": "Podijeli",
          "hide": "Sakrij",
          "authorize": "Autoriziraj",
          "remove": "Ukloni",
          "help": "Potražite pomoć",
          "ignore": "Zanemari",
          "confirm": "Potvrdi",
          "edit": "Uredi kartu"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Neke su karte i slojevi također podijeljeni.",
          "alsoSharedMaps": "Neke su karte također podijeljene.",
          "alsoSharedLayers": "Neki su slojevi također podijeljeni.",
          "sharedOthersContent": "Upotrijebili ste svoje administratorske privilegije za dijeljenje tuđeg sadržaja."
        }
      },
      "storyHealth": {
        "healthy": "Nema problema",
        "notHealthy": "Popravi probleme",
        "warnings": "Vidi upozorenja"
      }
    },
    "saveErrorSocial": {
      "title": "Dijeljenje na društvenim medijima",
      "panel1": "Vaša priča možda se neće prikazati ispravno na društvenim medijima jer naziv stavke u ArcGIS web-aplikaciji nije jednak nazivu vaše priče.",
      "panel1tooltip": "Kada odredite naziv, sažetak i sličicu, vaša će priča izgledati ovako:",
      "panel2": "Koji biste naziv upotrijebili na društvenim medijima:",
      "panel2q1": "Naziv priče (preporučeno)",
      "panel2q1tooltip": "Ako odaberete ovu mogućnost, naziv vaše stavke izmijenit će se da bi se podudarao s naslovom vaše priče, dodatne promjene ažurirat će se u sastavljaču.",
      "panel2q2": "Naslov stavke",
      "panel3": "Da biste dodatno poboljšali izgled svoje priče na društvenim medijima, upotrijebite ${MYSTORIES} za dodavanje sažetka i sličice.",
      "panel4": "Ne upozoravaj me ponovno za ovu priču",
      "save": "Spremi",
      "mystories": "Moje priče"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Važna poruka o internetskoj sigurnosti i Story Mapsu",
      "s1h1": "Esri unaprjeđuje sigurnost Story Mapsa",
      "s1p1": "Vaše Story Maps uživo na mreži i mrežna zajednica uvijek radi na uspostavljanju u ostvarivanju veće sigurnosti. HTTPS, koji omogućuje sigurnu vezu za sadržaj koji se prenosi putem interneta, sve se češće pojavljuje se kao način pristupa mrežnom sadržaju Najmoderniji pretraživači sada prikazuju poruke upozorenja kada se upotrebljava HTTP umjesto HTTPS-a. Zbog ovog rastućeg standarda, preporučujemo da upotrebljavate HTTPS poveznice za stvaranje i dijeljenje za Story Maps i da upotrebljavate samo HTTPS URL-ove kada ugrađujete mrežni sadržaj ili stvarate poveznice na slike unutar Story Map.",
      "s1p2": "Općenito govoreći, to znači da u Story Map i sav pripadajući sadržaj (uključujući slike, slojeve, ugrađene appove i web-mjesta) treba pristupiti putem povezinica koje počinju s HTTPS, a ne HTTP. To osigurava najbolje iskustvo vašim čitateljima jer će većina mrežnih preglednika prepoznati da su vaše priče sigurne.",
      "s2h1": "Što trebam napraviti?",
      "s2p1": "Esri radi na toma da olakša ovaj prijelaz za autore i čitače usluge Story Map. Alati su dostupni sada u sastavljačima za Story Map i My Stories koji vam olakšavaju pronalaženje nesigurnog sadržaja (HTTP) u vašim pričama i nude vam preporuke kako ih riješiti. Pregledajte ima li u vašim pričama nesigurnog sadržaja i nadogradite ih na HTTPS što je prije moguće.",
      "action1": "Zatvori",
      "action2": "Sada pregledaj moje priče",
      "action3": "Saznajte više",
      "floatingNotification": "Ova priča sadrži nesiguran (HTTP) sadržaj. Pregledajte i riješite te probleme."
    }
  }
});