/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Bruk",
      "close": "Ja"
    },
    "header": {
      "sharingNotAvailable": "Dette er ikke tilgjengelig før du har delt historien.",
      "edit": "Rediger"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Bokmerker",
        "logoSharing": "Logo og deling",
        "theme": "Utseende"
      },
      "bookmarks": {
        "title": "Seksjon",
        "bookmark": "Bokmerke",
        "intro": "Bokmerker er koblinger til historiedeler som vises i overskriften. Ved å opprette konsise bokmerker for de viktigste seksjonene i historien hjelper du leserne med å orientere seg.",
        "sequentialDefault": "Fortellingsavsnitt (ingen tekst funnet)",
        "immersiveDefault": "Inngående seksjon (ingen tekst funnet)",
        "titleDefault": "Tittelseksjon (ingen tekst funnet)",
        "coverDefault": "Forsideseksjon (ingen tekst funnet)",
        "coverAppendage": "(Forside)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Bruk ${ESRI} logo",
        "useOrgLogo": "Bruk min organisasjons logo",
        "useOrgLogoHelp": "Bruk logoen som administratoren skaffer.",
        "logoLink": "Logokobling",
        "logoUploadProgress": "Logoopplasting pågår",
        "logoUploadSuccess": "Logoen ble lastet opp",
        "logoUploadError": "Logoopplastingen mislyktes, bytter tilbake til ${ESRI}-logoen",
        "customHeaderText": "Slagord",
        "taglineLinkDisabledTooltip": "Skriv inn et slagord for å aktivere koblingen",
        "link": "Slagordkobling",
        "enableSocialSharing": "Vis deleknapp"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Skrifter",
        "previewLabel": "Forhåndsvisning",
        "fontsTitleLabel": "Titler",
        "fontsBodyLabel": "Brødtekst",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Forside",
      "creditsLabel": "Krediteringer",
      "betaFeedback": "Tilbakemelding",
      "betaNote": "Gi oss tilbakemelding om hva du synes om ${APP_NAME} eller om noe ikke fungerer som ventet.",
      "notSharedNote": "Historien er ikke delt. Det er bare du som kan se den.",
      "organizationWarning": "For å sikre at denne historien kan bli sett av andre, må du også dele historiens scener, scenelag, og innebygde apper med organisasjonen. Kart og kartlag deles automatisk.",
      "publicWarning": "For å sikre at denne historien kan bli sett av andre, må du også dele historiens scener, scenelag, og innebygde apper med alle. Kart og kartlag deles automatisk.",
      "addTitleNote": "Legg til en tittel på forsiden for å lagre",
      "saveError": "Det oppstod en feil ved lagring av historien din.",
      "duplicate": "Dupliser",
      "organize": "Organiser",
      "done": "Ferdig",
      "invite": "Etter hvert som du bygger opp historien, vises seksjonene her ...",
      "mystoriestooltip": "Cascade Builder varsler deg om problemer i historien og hjelper deg med å løse dem. Scener og innebygde apper kontrolleres ikke, så de må du kontrollere manuelt."
    },
    "immersiveViewPanel": {
      "transition": "Overgang",
      "fade": "Fade",
      "fadeSlow": "Fade sakte",
      "swipeVertical": "Sveip loddrett",
      "swipeHorizontal": "Sveip vannrett",
      "none": "Ingen",
      "disabledConsecutiveSameMedia": "Ikke tilgjengelig når påfølgende visninger bruker de samme mediene",
      "disabledTooltipMap": "For å bruke denne overgangen må de synlige lagene i begge visningene være annerledes, og de andre kartegenskapene må være de samme",
      "disabledConsecutiveSameMap": "Ikke tilgjengelig når påfølgende visninger bruker det samme kartet",
      "disabledNotInBeta": "Ikke tilgjengelig når påfølgende visninger bruker det samme kartet",
      "disabledNonConsecutive": "Ikke tilgjengelig fordi det er en annen forekomst av dette mediet som ikke er påfølgende",
      "addMedia": "Legg til media",
      "invite": "Etter hvert som du bygger opp hovedseksjonen, blir visningene synlige her ..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Utseende",
        "manage": "Administrer",
        "size": "Størrelse",
        "background": "Bakgrunn",
        "mobile": "Mobil",
        "issues": "Problemer",
        "fixIssues": "Løs problemer"
      },
      "manage": {
        "changeMedia": "Endre medier",
        "edit": "Rediger",
        "editAside": "Åpner i en ny fane i nettleseren. Etter å ha lagret endringene, lagrer og laster du inn denne historien for å se endringene.",
        "remove": "Fjern"
      },
      "appearance": {
        "homeView": "Første visning",
        "audio": "Lyd",
        "on": "På",
        "muted": "Dempet",
        "volumeAside": "Videoen spilles av automatisk når en leser kommer til denne visningen. Hvis du slår av lyden, vil ikke leseren kunne aktivere den.",
        "view": "Vis",
        "resetLocation": "Tilbakestill lokasjon",
        "resetLayers": "Tilbakestill lag",
        "clearPopup": "Fjern Popup",
        "interaction": "Interaksjon",
        "interactionDisabled": "Interaksjon deaktivert",
        "buttonToEnable": "Knapp for å aktivere",
        "interactionEnabled": "Interaksjon aktivert",
        "interactionAside": "* Berøringsenheter vil vise en interaksjonsknapp.",
        "slide": "Lysbilde",
        "noSlides": "Ingen tilgjengelig lysbilder.",
        "mapExtentPrompt": "Oppdater kartet for å fortelle historien din, og klikk på haken for å lagre endringene"
      },
      "sectionAppearance": {
        "layout": "Oppsett",
        "theme": "Tema"
      },
      "size": {
        "small": "Liten",
        "medium": "Middels",
        "large": "Stor",
        "noCrop": "Ikke beskjær høye bilder",
        "noCropTallTooltip": "Hvis du ikke beskjærer et høyt bilde, blir leserne nødt til å rulle for å kunne se hele bildet."
      },
      "background": {
        "noCrop": "Ikke beskjær",
        "mostImportantPart": "Velg det viktigste punktet",
        "cropExplanationImmersive": "Velg et punkt på bildet for å velge hvordan det skal beskjæres på ulike skjermstørrelser. Punktet du velger, vil alltid være synlig. Merk av for Ikke beskjær hvis bildene må være fullt synlige.",
        "cropExplanation": "Velg et punkt på bildet for å velge hvordan bildet skal beskjæres på ulike skjermstørrelser. Punktet du velger, vil alltid være synlig.",
        "color": "Farge",
        "previews": "Forhåndsvisninger"
      },
      "altMedia": {
        "alternativeMedia": "Alternativt medium",
        "explanation": "Enkelte medier støttes ikke eller fungerer ikke så godt på mobile enheter. Bruk dette panelet til å velge et alternativt og mer mobilvennlig element som skal vises i stedet for dette mediet når historien vises på en telefon eller et nettbrett.",
        "changeAltImage": "Endre bilde",
        "uploadAltImage": "Legg til bilde"
      }
    },
    "imageGallery": {
      "addImage": "Legg til et annet bilde",
      "moveBackward": "Flytt bakover",
      "moveForward": "Flytt forover"
    },
    "cover": {
      "titlePrompt": "Skriv inn tittelen på fortellingen ...",
      "subtitlePrompt": "Rull ned å komme i gang eller angi en valgfri undertittel",
      "mediaPlaceholder": "Legg til bildet eller videoen",
      "saveError": "Lagring mislyktes, du har allerede et element med denne tittelen"
    },
    "credits": {
      "sectionInvite": "Legg en creditsseksjon",
      "warning": "Begge feltene må fylles ut",
      "content": "Innhold...",
      "source": "Kilde...",
      "linkPrompt": "Valgfri kobling...",
      "introductionPlaceholder": "Skriv inn en valgfri introduksjon til creditsseksjonen ..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posisjon",
        "theme": "Tema",
        "size": "Størrelse",
        "background": "Bakgrunn",
        "layout": "Rulling (for alle paneler)"
      }
    },
    "title": {
      "placeholder": "Angi en tittel..."
    },
    "media": {
      "imageUpload": "Bildeopplasting pågår ...",
      "imageUploadSuccess": "Bildeopplastingen var vellykket",
      "imageUploadFail": "Bildeopplastingen mislyktes"
    },
    "controller": {
      "sectionOrganize": "Du organiserte seksjonene",
      "immersiveOrganize": "Du organiserte visningene",
      "sectionDelete": "Du slettet en seksjon",
      "viewDelete": "Du slettet en visning"
    },
    "notification": {
      "cancel": "Avbryt",
      "close": "Ja",
      "undo": "Angre"
    },
    "sections": {
      "sequence": "Fortelling",
      "immersive": "Dyptgående",
      "title": "Tittel"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "bilde",
        "webmap": "kart",
        "webscene": "scene",
        "video": "videosamlingen",
        "content": "innhold",
        "webpage": "webside"
      },
      "placeholders": {
        "generic": "Dette innholdet er ikke tilgjengelig.",
        "deleted": "Dette elementet er blitt slettet.",
        "inaccessible": "Dette innholdet er ikke tilgjengelig.",
        "unauthorized": "Du har ikke tilgang til å vise dette innholdet.",
        "unshared": "Dette elementet deles ikke på samme måte som historien din.",
        "othersUnshared": "Dette elementet deles ikke på samme måte som historien din.",
        "subscriptionContent": "Dette kartet inneholder et abonnentlag.",
        "premiumContent": "Dette kartet inneholder et premiumlag.",
        "secureService": "Dette kartet inneholder et sikkert lag."
      },
      "contentIssues": {
        "noAltImage": "Mediet støttes ikke på mobile enheter",
        "altImageBroken": "Det alternative bildet som er definert for dette elementet, er ikke tilgjengelig"
      },
      "contentWarnings": {
        "noAltImage": "Denne medietypen støttes ikke på mobile enheter. Angi et alternativt bilde som skal vises når historien vises på mobile enheter.",
        "noAltImageAlt": "Denne medietypen støttes ikke på mobile enheter. I fanen for mobil angir du et alternativt bilde som skal vises når historien vises på mobile enheter."
      },
      "mapIssues": {
        "fixButton": "Løs problemer",
        "nofixButton": "Problemer",
        "mapLabel": "Kart:",
        "summaries": {
          "unshared": "Innhold som ikke deles",
          "othersUnshared": "Andres innhold som ikke deles",
          "subscriptionContent": "Abonnementsinnhold",
          "premiumContent": "Premium-innhold",
          "secureContent": "Sikkert innhold",
          "deleted": "Slettet innhold",
          "inaccessible": "Utilgjengelig innhold",
          "unauthorized": "Uautorisert innhold"
        },
        "descriptions": {
          "unshared": "Dette innholdet deles ikke på samme måte som historien din.",
          "othersUnshared": "Dette innholdet eies av noen andre og deles ikke på samme måte som historien din.",
          "othersUnsharedAuthorized": "Dette innholdet eies av noen andre, men du er autorisert til å dele det.",
          "inaccessible": "Dette innholdet er ikke tilgjengelig.",
          "deleted": "Dette innholdet er blitt slettet.",
          "unauthorized": "Du har ikke tilgang til å vise dette innholdet.",
          "popupFeatureLayer": "Et fliselags popuper kommer fra et geoobjektslag som ikke deles ikke på samme måte som historien din.",
          "subscriptionContent": "Du må autorisere abonnentinnholdet for offentlig bruk.",
          "premiumContent": "Du må autorisere premiuminnholdet for offentlig bruk.",
          "secureService": "Sikkert innhold er ikke tilgjengelig for leserne dine.",
          "missingItemWarning": "Elementet som er knyttet til dette laget, er slettet."
        },
        "tooltips": {
          "unshared": "Klikk for å få mer informasjon om deling.",
          "othersUnshared": "Du har ikke tillatelse til å dele innhold som eies av andre. Spør eieren å dele det, fjern kartet fra historien eller rediger kartet for å fjerne lagene som ikke er dine. Klikk for å få mer informasjon om å redigere kart.",
          "inaccessible": "Fjern dette kartet fra historien eller rediger den for å fjerne de utilgjengelige lagene. Klikk for å lære mer om redigering av kart.",
          "deleted": "Fjern dette kartet fra historien eller rediger den for å fjerne de manglende lagene. Klikk for å lære mer om redigering av kart.",
          "unauthorized": "Fjern dette kartet fra historien eller rediger den for å fjerne de uautoriserte lagene. Klikk for å lære mer om redigering av kart.",
          "popupFeatureLayer": "Et fliselags popuper kommer fra et geoobjektslag som ikke deles ikke på samme måte som historien din.",
          "subscriptionContent": "Abonnementsinnhold bruker ikke credits. Klikk for å få mer informasjon.",
          "premiumContent": "Credits vil bli belastet din organisasjon hver gang noen viser et premiumlag i historien. Klikk for å lære mer.",
          "secureService": "Fjern sikkert innhold fra historien, eller klikk for å lære hvordan du autoriserer sikkert innhold for bruk av andre.",
          "missingItemWarning": "Dette laget fungerer fortsatt, men dets symboler, popups eller navnet kan ha endret seg. Bekreft at laget vises som forventet, eller fjern det fra historikken."
        },
        "fixButtons": {
          "share": "Del",
          "hide": "Skjul",
          "authorize": "Godkjenn",
          "remove": "Fjern",
          "help": "Få hjelp",
          "ignore": "Ignorer",
          "confirm": "Bekreft",
          "edit": "Rediger kart"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Enkelte kart og lag ble også delt.",
          "alsoSharedMaps": "Enkelte kart ble også delt.",
          "alsoSharedLayers": "Enkelte lag ble også delt.",
          "sharedOthersContent": "Du har brukt dine administrative rettigheter til å dele andres innhold."
        }
      },
      "storyHealth": {
        "healthy": "Ingen problemer",
        "notHealthy": "Løs problemer",
        "warnings": "Se advarsler"
      }
    }
  }
});