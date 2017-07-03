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
    "builderPanel": {
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
        "remove": "Ukloni"
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
        "alternativeMedia": "Alternativni mediji",
        "explanation": "Neki mediji nisu podržani ili možda neće raditi dobro na mobilnim uređajima. Upotrijebite ovu ploču za odabir alternativne stavke koja će biti pristupačnija vašem mobilnom uređaju i koja će se prikazati umjesto ovog medija kada se vaša priča prikazuje na telefonu ili tabletu.",
        "changeAltImage": "Promijeni sliku",
        "uploadAltImage": "Dodaj sliku"
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
      "imageUpload": "Učitavanje slike u tijeku...",
      "imageUploadSuccess": "Slika je uspješno učitana",
      "imageUploadFail": "Nije uspjelo učitavanje slike"
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
        "noAltImage": "Medij nije podržan na mobilnim uređajima",
        "altImageBroken": "Određena alternativna slika za ovu stavku medija nije dostupna"
      },
      "contentWarnings": {
        "noAltImage": "Ova vrsta medija nije podržana na mobilnim uređajima. Navedite alternativnu sliku koja će se prikazati kada se priča gleda na mobilnom uređaju.",
        "noAltImageAlt": "Ova vrsta medija nije podržana na mobilnim uređajima. Na kartici mobilnog uređaja navedite alternativnu sliku koja će se prikazati kada se priča gleda na mobilnom uređaju."
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
    }
  }
});