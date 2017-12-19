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
        "title": "Odsek",
        "bookmark": "Zaznamek",
        "intro": "Zaznamki so oznake povezave do odsekov zgodbe, ki so prikazani v glavi. Z ustvarjanjem natančnih zaznamkov za glavne odseke zgodbe boste bralcem omogočili večjo preglednost.",
        "sequentialDefault": "Pripovedni odsek (besedilo ni najdeno)",
        "immersiveDefault": "Potopni razdelek (besedilo ni najdeno)",
        "titleDefault": "Odsek z imenom (besedilo ni najdeno)",
        "coverDefault": "Odsek naslovnice (besedilo ni najdeno)",
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
    "builderPanel": {
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
      "invite": "Med izdelovanjem zgodbe se bodo odseki prikazovali tukaj...",
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
        "remove": "Odstrani"
      },
      "appearance": {
        "homeView": "Začetni pogled",
        "audio": "Zvok",
        "on": "Vklop",
        "muted": "Brez zvoka",
        "volumeAside": "Videoposnetek se bo samodejno predvajal, ko pride bralec do tega pogleda. Če izklopite zvok, ga bralec ne bo mogel omogočiti.",
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
    "imageGallery": {
      "addImage": "Dodaj novo sliko",
      "moveBackward": "Premakni se nazaj",
      "moveForward": "Premakni se naprej"
    },
    "cover": {
      "titlePrompt": "Vnesite ime svoje zgodbe...",
      "subtitlePrompt": "Podrsnite navzdol za začetek ali vnesite dodatni podnaslov",
      "mediaPlaceholder": "Dodajte svojo sliko ali videoposnetek",
      "saveError": "Shranjevanje ni uspelo, ker že imate element s tem imenom"
    },
    "credits": {
      "sectionInvite": "Dodajte odsek s krediti",
      "warning": "Obe polji je treba izpolniti",
      "content": "Vsebina...",
      "source": "Vir...",
      "linkPrompt": "Dodatna povezava...",
      "introductionPlaceholder": "Vnesite dodatni uvod v odsek s krediti..."
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
      "imageUpload": "V teku je nalaganje slike...",
      "imageUploadSuccess": "Slika je uspešno naložena",
      "imageUploadFail": "Nalaganje slike ni uspelo"
    },
    "controller": {
      "sectionOrganize": "Organizirali ste odseke",
      "immersiveOrganize": "Organizirali ste poglede",
      "sectionDelete": "Izbrisali ste odsek",
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
        "webmap": "karta",
        "webscene": "3D-prizor",
        "video": "videoposnetek",
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
        "altImageBroken": "Do dodatne slike, določene za ta element medija, ni mogoče dostopati"
      },
      "contentWarnings": {
        "noAltImage": "Prikazovanje svoje zgodbe preizkusite na mobilnih napravah, preden jo boste delili. Če ta medij ne deluje po pričakovanjih, s spodnjim gumbom dodajte dodatno sliko, ki bo prikazana ob ogledu zgodbe na telefonu ali tablici.",
        "noAltImageUnsupported": "Ta medij ne bo deloval na mobilnih napravah. S spodnjim gumbom dodajte dodatno sliko, ki se bo prikazovala ob ogledu zgodbe na telefonu ali tablici.",
        "noAltImageWarning": "Prikazovanje svoje zgodbe preizkusite na mobilnih napravah, preden jo boste delili. Če ta medij ne deluje po pričakovanjih, s spodnjim gumbom dodajte dodatno sliko, ki bo prikazana ob ogledu zgodbe na telefonu ali tablici.",
        "noAltImageAlt": "Ta vrsta medija ni podprta in morda ne bo ustrezno delovala na mobilnih napravah. V zavihku mobilne naprave zagotovite dodatno sliko, ki se bo prikazovala ob ogledu zgodbe na telefonu ali tablici."
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
    }
  }
});