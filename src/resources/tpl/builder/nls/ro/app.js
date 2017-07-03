/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplicare",
      "close": "Închidere"
    },
    "header": {
      "sharingNotAvailable": "Indisponibil până când partajaţi povestea",
      "edit": "Editare"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Semne de carte",
        "logoSharing": "Siglă şi partajare",
        "theme": "Aspect"
      },
      "bookmarks": {
        "title": "Secţiune",
        "bookmark": "Semn de carte",
        "intro": "Semnele de carte sunt legături către secţiuni ale poveştii, afişate în titlu. Crearea de semne de carte concise pentru secţiunile principale ale poveştii dvs. îi ajută pe cititori să se orienteze.",
        "sequentialDefault": "Secţiune naraţiune (nu s-a găsit text)",
        "immersiveDefault": "Secţiune imersivă (nu s-a găsit text)",
        "titleDefault": "Secţiune titlu (nu s-a găsit text)",
        "coverDefault": "Secţiune copertă (nu s-a găsit text)",
        "coverAppendage": "(Copertă)"
      },
      "logoSharing": {
        "logo": "Siglă",
        "logoButton": "Utilizare siglă ${ESRI}",
        "useOrgLogo": "Utilizare siglă organizaţia mea",
        "useOrgLogoHelp": "Utilizaţi sigla furnizată de administratorul dvs.",
        "logoLink": "Legătură siglă",
        "logoUploadProgress": "Se încarcă sigla",
        "logoUploadSuccess": "Sigla s-a încărcat cu succes",
        "logoUploadError": "Încărcarea siglei a eşuat, se afişează din nou sigla ${ESRI}",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Introduceţi un slogan pentru a activa legătura",
        "link": "Legătură slogan",
        "enableSocialSharing": "Afişare buton partajare"
      },
      "appearance": {
        "themeLabel": "Temă",
        "fontLabel": "Fonturi",
        "previewLabel": "Previzualizare",
        "fontsTitleLabel": "Titluri",
        "fontsBodyLabel": "Corp",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Copertă",
      "creditsLabel": "Credite",
      "betaFeedback": "Feedback",
      "betaNote": "Vă rugăm să ne spuneţi ce credeţi despre ${APP_NAME} sau dacă ceva nu funcţionează aşa cum v-aţi aşteptat.",
      "notSharedNote": "Scenariul dvs. nu este partajat, numai dvs. îl puteţi vizualiza",
      "organizationWarning": "Pentru a vă asigura că această poveste poate fi vizualizată de alte persoane, trebuie să partajaţi şi scenele acesteia, straturile tematice de scenă şi aplicaţiile încorporate cu organizaţia dvs. Hărţile şi straturile tematice de hartă sunt partajate automat.",
      "publicWarning": "Pentru a vă asigura că această poveste poate fi vizualizată de alte persoane, trebuie să partajaţi şi scenele acesteia, straturile tematice de scenă şi aplicaţiile încorporate cu toată lumea. Hărţile şi straturile tematice de hartă sunt partajate automat.",
      "addTitleNote": "Adăugaţi un titlu pe copertă pentru a salva",
      "saveError": "A apărut o eroare la salvarea poveştii dvs.",
      "duplicate": "Duplicare",
      "organize": "Organizare",
      "done": "Gata",
      "invite": "Pe parcurs ce creaţi povestea, vor apărea aici secţiunile...",
      "mystoriestooltip": "Aplicaţia de creare în cascadă vă alertează în privinţă cu problemele din povestea dvs. şi vă ajută să le remediaţi. Scenele şi aplicaţiile încorporate nu sunt verificare, aşa că vă rugăm să le verificaţi manual."
    },
    "immersiveViewPanel": {
      "transition": "Tranziţie",
      "fade": "Estompare",
      "fadeSlow": "Estompare înceată",
      "swipeVertical": "Trageţi pe verticală",
      "swipeHorizontal": "Trageţi pe orizontală",
      "none": "Niciunul",
      "disabledConsecutiveSameMedia": "Nu este disponibil atunci când vizualizări consecutive utilizează acelaşi conţinut media",
      "disabledTooltipMap": "Pentru a utiliza această tranziţie, straturile tematice vizibile în ambele vizualizări trebuie să fie diferite, iar celelalte proprietăţi ale hărţii trebuie să fie la fel.",
      "disabledConsecutiveSameMap": "Nu este disponibil atunci când vizualizări consecutive utilizează aceeaşi hartă",
      "disabledNotInBeta": "Nu este disponibil atunci când vizualizări consecutive utilizează aceeaşi hartă",
      "disabledNonConsecutive": "Nu este disponibil deoarece există o altă apariţie a acestui conţinut media care nu este consecutiv",
      "addMedia": "Adăugare media",
      "invite": "Pe parcurs ce creaţi secţiunea imersivă, vor apărea aici secţiunile..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aspect",
        "manage": "Gestionare",
        "size": "Dimensiune",
        "background": "Fundal",
        "mobile": "Mobil",
        "issues": "Probleme",
        "fixIssues": "Rezolvare probleme"
      },
      "manage": {
        "changeMedia": "Schimbare media",
        "edit": "Editare",
        "editAside": "Se deschide într-o nouă filă a browserului. După ce salvaţi editările, salvaţi şi reîncărcaţi această poveste pentru a vizualiza modificările dvs.",
        "remove": "Eliminare"
      },
      "appearance": {
        "homeView": "Vizualizare iniţială",
        "audio": "Audio",
        "on": "Activ",
        "muted": "Fără sonor",
        "volumeAside": "Videoclipul va rula automat atunci când un cititor ajunge la această vizualizare. Dacă opriţi sonorul, cititorul nu va putea să-l activeze.",
        "view": "Vizualizare",
        "resetLocation": "Resetare locaţie",
        "resetLayers": "Resetare straturi tematice",
        "clearPopup": "Ştergere pop-up",
        "interaction": "Intercaţiune",
        "interactionDisabled": "Interacţiune dezactivată",
        "buttonToEnable": "Buton de activare",
        "interactionEnabled": "Interacţiune activată",
        "interactionAside": "*Dispozitivele cu atingere tactilă vor afişa un buton de interacţiune.",
        "slide": "Diapozitiv",
        "noSlides": "Nu sunt disponibile diapozitive.",
        "mapExtentPrompt": "Actualizaţi harta pentru a spune povestea, faceţi clic pe bifă pentru a salva schimbările"
      },
      "sectionAppearance": {
        "layout": "Configuraţie",
        "theme": "Temă"
      },
      "size": {
        "small": "Mic",
        "medium": "Medie",
        "large": "Mare",
        "noCrop": "Nu se decupează imaginile înalte",
        "noCropTallTooltip": "Nedecuparea unei imagini înalte produce un efect dramatic pentru cititori, care necesită derularea pentru a vedea întreaga imagine."
      },
      "background": {
        "noCrop": "Nu se decupează",
        "mostImportantPart": "Alegeţi cel mai important punct",
        "cropExplanationImmersive": "Selectaţi un punct pe imagine pentru a alege modul în care aceasta va fi decupată în funcţie de dimensiunile ecranului. Punctul pe care îl alegeţi va fi întotdeauna vizibil. Bifaţi caseta „Nu se decupează” în cazul în care imaginea trebuie să fie complet vizibilă.",
        "cropExplanation": "Selectaţi un punct pe imagine pentru a alege modul în care aceasta va fi decupată în funcţie de dimensiunile ecranului. Punctul pe care îl alegeţi va fi întotdeauna vizibil.",
        "color": "Culoare",
        "previews": "Examinări"
      },
      "altMedia": {
        "alternativeMedia": "Multimedia alternativă",
        "explanation": "Unele materiale multimedia nu sunt acceptate sau este posibil să nu funcţioneze bine pe dispozitive mobile. Folosiţi acest panou pentru a alege un element alternativ, compatibil cu mediul mobil, care să fie prezentat în locul acestui material multimedia atunci când povestea dvs. este vizualizată pe un telefon sau pe o tabletă.",
        "changeAltImage": "Modificare imagine",
        "uploadAltImage": "Adăugare imagine"
      }
    },
    "imageGallery": {
      "addImage": "Adăugaţi o altă imagine",
      "moveBackward": "Deplasare înapoi",
      "moveForward": "Deplasare înainte"
    },
    "cover": {
      "titlePrompt": "Introduceţi titlul poveştii dvs...",
      "subtitlePrompt": "Derulaţi în jos pentru a începe sau introduceţi un subtitlu opţional",
      "mediaPlaceholder": "Adăugaţi imaginea sau videoclipul dvs.",
      "saveError": "Salvarea a eşuat, există deja un element cu acest titlu"
    },
    "credits": {
      "sectionInvite": "Secţiune adăugare generic",
      "warning": "Ambele câmpuri trebuie completate",
      "content": "Conţinut...",
      "source": "Sursă...",
      "linkPrompt": "Legătură opţională...",
      "introductionPlaceholder": "Introduceţi o introducere opţionale la secţiunea dvs. de generic"
    },
    "immersive": {
      "titleConfig": {
        "theme": "Temă"
      },
      "panelConfig": {
        "position": "Poziţie",
        "theme": "Temă",
        "size": "Dimensiune",
        "background": "Fundal",
        "layout": "Derulare (pentru toate panourile)"
      }
    },
    "title": {
      "placeholder": "Introduceţi un titlu..."
    },
    "media": {
      "imageUpload": "Se încarcă imaginea...",
      "imageUploadSuccess": "Imaginea s-a încărcat cu succes",
      "imageUploadFail": "Incărcarea imaginii a eşuat"
    },
    "controller": {
      "sectionOrganize": "Aţi organizat secţiunile",
      "immersiveOrganize": "Aţi organizat vizualizările",
      "sectionDelete": "Aţi şters o secţiune",
      "viewDelete": "Aţi şters o vizualizare"
    },
    "notification": {
      "cancel": "Anulare",
      "close": "Închidere",
      "undo": "Anulare"
    },
    "sections": {
      "sequence": "Naraţiune",
      "immersive": "Captivantă",
      "title": "Titlu"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "imagine",
        "webmap": "hărţii",
        "webscene": "scenei",
        "video": "video",
        "content": "conţinut",
        "webpage": "pagină web"
      },
      "placeholders": {
        "generic": "Acest conţinut nu este accesibil.",
        "deleted": "Acest element a fost şters.",
        "inaccessible": "Acest conţinut nu este accesibil.",
        "unauthorized": "Nu sunteţi autorizat să vizualizaţi acest conţinut.",
        "unshared": "Acest element nu este partajat la fel ca povestea dvs.",
        "othersUnshared": "Acest element nu este partajat la fel ca povestea dvs.",
        "subscriptionContent": "Această hartă conţine un strat tematic de abonat.",
        "premiumContent": "Această hartă conţine un strat tematic premium.",
        "secureService": "Această hartă conţine un strat tematic securizat."
      },
      "contentIssues": {
        "noAltImage": "Material multimedia neacceptat pe dispozitive mobile",
        "altImageBroken": "Imaginea alternativă definită pentru acest element multimedia nu este accesibilă"
      },
      "contentWarnings": {
        "noAltImage": "Acest tip de material multimedia nu este acceptat pe dispozitive mobile. Furnizaţi o imagine alternativă, care să fie afişată atunci când povestea este vizualizată pe dispozitive mobile.",
        "noAltImageAlt": "Acest tip de material multimedia nu este acceptat pe dispozitive mobile. În fila pentru mobile, furnizaţi o imagine alternativă, care să fie afişată atunci când povestea este vizualizată pe dispozitive mobile."
      },
      "mapIssues": {
        "fixButton": "Rezolvare probleme",
        "nofixButton": "Probleme",
        "mapLabel": "Hartă:",
        "summaries": {
          "unshared": "Conţinut nepartajat",
          "othersUnshared": "Conţinutul partajat al altei persoane",
          "subscriptionContent": "Conţinut abonaţi",
          "premiumContent": "Conţinut premium",
          "secureContent": "Conţinut securizat",
          "deleted": "Conţinut şters",
          "inaccessible": "Conţinut inaccesibil",
          "unauthorized": "Conţinut neautorizat"
        },
        "descriptions": {
          "unshared": "Acest conţinut nu este partajat la fel ca povestea dvs.",
          "othersUnshared": "Acest conţinut este deţinut de altcineva şi nu este partajat la fel ca povestea dvs.",
          "othersUnsharedAuthorized": "Acest conţinut este deţinut de altcineva, dar sunteţi autorizat să-l partajaţi.",
          "inaccessible": "Acest conţinut nu este accesibil.",
          "deleted": "Acest conţinut a fost şters.",
          "unauthorized": "Nu sunteţi autorizat să vizualizaţi acest conţinut.",
          "popupFeatureLayer": "Mesajele pop-up ale unui strat tematic cu titlu provin dintr-un strat tematic de obiecte spaţiale care nu este partajat la fel ca povestea dvs.",
          "subscriptionContent": "Trebuie să autorizaţi conţinutul pentru abonaţi, pentru utilizare publică.",
          "premiumContent": "Trebuie să autorizaţi conţinutul premium pentru utilizare publică.",
          "secureService": "Conţinutul securizat nu este accesibil cititorilor dvs.",
          "missingItemWarning": "Elementul asociat cu acest strat tematic a fost şters."
        },
        "tooltips": {
          "unshared": "Faceţi clic pentru a afla mai multe despre partajare.",
          "othersUnshared": "Nu aveţi permisiunea să partajaţi conţinutul deţinut de alţii. Rugaţi proprietarul să-l partajeze, să şteargă harta din povestea dvs. sau să editeze harta pentru a elimina straturile tematice care nu sunt ale dvs. Faceţi clic pentru a afla mai multe despre editarea hărţilor.",
          "inaccessible": "Eliminaţi această hartă din poveste sau editaţi-o pentru a elimina straturile tematice inaccesibile. Faceţi clic pentru a afla mai multe despre editarea hărţilor.",
          "deleted": "Eliminaţi această hartă din poveste sau editaţi-o pentru a elimina straturile tematice care lipsesc. Faceţi clic pentru a afla mai multe despre editarea hărţilor.",
          "unauthorized": "Eliminaţi această hartă din poveste sau editaţi-o pentru a elimina straturile tematice neautorizate. Faceţi clic pentru a afla mai multe despre editarea hărţilor.",
          "popupFeatureLayer": "Mesajele pop-up ale unui strat tematic cu titlu provin dintr-un strat tematic de obiecte spaţiale care nu este partajat la fel ca povestea dvs.",
          "subscriptionContent": "Conţinutul pentru abonaţi nu consumă credite. Faceţi clic pentru a afla mai multe.",
          "premiumContent": "Organizaţia dvs. va plăti credite de fiecare dată când cineva vizualizează un strat tematic premium în povestea dvs. Faceţi clic pentru a afla mai multe.",
          "secureService": "Eliminaţi conţinutul securizat din povestea dvs. sau faceţi clic pentru a afla cum să autorizaţi conţinutul securizat pentru a fi utilizat şi de alţii.",
          "missingItemWarning": "Acest strat tematic funcţionează încă, dar simbolurile, mesajele pop-up sau numele acestuia ar putea fi altele. Confirmaţi că stratul tematic este afişat corespunzător sau eliminaţi-l din povestea dvs."
        },
        "fixButtons": {
          "share": "Partajare",
          "hide": "Ascundere",
          "authorize": "Autorizare",
          "remove": "Eliminare",
          "help": "Obţineţi ajutor",
          "ignore": "Ignorare",
          "confirm": "Confirmare",
          "edit": "Editare hartă"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Unele hărţi şi straturi tematice au fost, de asemenea, partajate.",
          "alsoSharedMaps": "Unele hărţi au fost, de asemenea, partajate.",
          "alsoSharedLayers": "Unele straturi tematice au fost, de asemenea, partajate.",
          "sharedOthersContent": "Aţi utilizat privilegiile dvs. administrative pentru a partaja conţinutul altcuiva."
        }
      },
      "storyHealth": {
        "healthy": "Nicio problemă",
        "notHealthy": "Rezolvare probleme",
        "warnings": "Afişare avertismente"
      }
    }
  }
});