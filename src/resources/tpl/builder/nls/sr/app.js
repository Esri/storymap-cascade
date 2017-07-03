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
    "builderPanel": {
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
        "remove": "Ukloni"
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
        "alternativeMedia": "Alternativni mediji",
        "explanation": "Neki mediji nisu podržani ili ne rade dobro na mobilnim uređajima. Koristite ovu tablu kako biste odabrali alternativne stavke koje su pogodne za mobilne uređaje i koje će se pokazivati na mestu ovih medija kada se vaša priča pregleda na telefonu ili tabletu.",
        "changeAltImage": "Promeni sliku",
        "uploadAltImage": "Dodaj sliku"
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
      "imageUpload": "Otpremanje snimka je u toku...",
      "imageUploadSuccess": "Snimak je uspešno otpremljena",
      "imageUploadFail": "Učitavanje snimka nije uspelo"
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
        "noAltImage": "Mediji nisu podržani na mobilnim uređajima",
        "altImageBroken": "Alternativna slika definisana za ovu stavku medija nije pristupačna"
      },
      "contentWarnings": {
        "noAltImage": "Ovaj tip medija nije podržan na mobilnim uređajima. Obezbedite alternativnu sliku koja će da bude prikazana kada se priča pregleda na mobilnim uređajima.",
        "noAltImageAlt": "Ovaj tip medija nije podržan na mobilnim uređajima. Na mobilnoj kartici obezbedite alternativnu sliku koja će da bude prikazana kada se priča pregleda na mobilnim uređajima."
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
    }
  }
});