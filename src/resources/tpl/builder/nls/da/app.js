/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Anvend",
      "close": "Luk"
    },
    "header": {
      "sharingNotAvailable": "Dette er ikke tilgængeligt, før du deler historien",
      "edit": "Redigér"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Bogmærker",
        "logoSharing": "Logo og deling",
        "theme": "Udseende"
      },
      "bookmarks": {
        "title": "Sektion",
        "bookmark": "Bogmærke",
        "intro": "Bogmærker og links til historieafsnit, der vises i headeren. Når du opretter nøjagtige bogmærker til hovedafsnittene i din historie, hjælper det læserne, så de kan orientere sig.",
        "sequentialDefault": "Fortællingsafsnit (ingen tekst fundet)",
        "immersiveDefault": "Fordybelsesafsnit (ingen tekst fundet)",
        "titleDefault": "Titelafsnit (ingen tekst fundet)",
        "coverDefault": "Forsideafsnit (ingen tekst fundet)",
        "coverAppendage": "(Forside)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Brug ${ESRI} logo",
        "useOrgLogo": "Brug min organisations logo",
        "useOrgLogoHelp": "Brug logo, du har modtaget fra din administrator",
        "logoLink": "Logo-link",
        "logoUploadProgress": "Overførsel af logo i gang",
        "logoUploadSuccess": "Overførsel af logo lykkedes",
        "logoUploadError": "Overførsel af logo mislykkedes, skifter tilbage til ${ESRI} logo",
        "customHeaderText": "Tagline:",
        "taglineLinkDisabledTooltip": "Indtast en tagline for at aktivere linket",
        "link": "Tagline-link",
        "enableSocialSharing": "Vis delingsknappen"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Skrifttyper",
        "previewLabel": "Eksempel",
        "fontsTitleLabel": "Titler",
        "fontsBodyLabel": "Brødtekst",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Forside",
      "creditsLabel": "Credits",
      "betaFeedback": "Feedback",
      "betaNote": "Fortæl os, hvad du synes om ${APP_NAME}, eller om der er noget, der ikke fungerer, som du forventede.",
      "notSharedNote": "Din historie er ikke delt. Kun du kan se den",
      "organizationWarning": "For at sikre, at denne historie kan ses af andre, skal du også dele dens scener, scenelag og indlejrede apps med din organisation. Kort og kortlag deles automatisk.",
      "publicWarning": "For at sikre, at denne historie kan ses af andre, skal du også dele dens scener, scenelag og indlejrede apps med Alle. Kort og kortlag deles automatisk.",
      "addTitleNote": "Tilføj en titel på forsiden til lagring",
      "saveError": "Der opstod en fejl under lagring af din historie.",
      "duplicate": "Duplikér",
      "organize": "Organisér",
      "done": "Udført",
      "invite": "Mens du udvikler din historie, bliver afsnittene vist her...",
      "mystoriestooltip": "Cascade-builder-programmet gør dig opmærksom på problemer i din historie og hjælper dig med at rette dem. Scener og indlejrede apps kontrolleres ikke, så du skal selv kontrollere dem manuelt."
    },
    "immersiveViewPanel": {
      "transition": "Overgang",
      "fade": "Udtoning",
      "fadeSlow": "Langsom udtoning",
      "swipeVertical": "Stryg lodret",
      "swipeHorizontal": "Stryg vandret",
      "none": "Ingen",
      "disabledConsecutiveSameMedia": "Ikke tilgængelig, når visninger, der følger efter hinanden, benytter de samme medier",
      "disabledTooltipMap": "Hvis du vil bruge denne overgang, skal de synlige lag i begge visninger være forskellige, og de andre kortegenskaber skal være ens",
      "disabledConsecutiveSameMap": "Ikke tilgængelig, når visninger, der følger efter hinanden, benytter det samme kort",
      "disabledNotInBeta": "Ikke tilgængelig, når visninger, der følger efter hinanden, benytter det samme kort",
      "disabledNonConsecutive": "Ikke tilgængelig, fordi der er endnu en forekomst af disse medier, som ikke er umiddelbart efterfølgende",
      "addMedia": "Tilføj medier",
      "invite": "Mens du udvikler dit fordybelsesafsnit, kan visningerne ses her..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Udseende",
        "manage": "Håndter",
        "size": "Størrelse",
        "background": "Baggrund",
        "mobile": "Mobil",
        "issues": "Problemer",
        "fixIssues": "Løs problemer"
      },
      "manage": {
        "changeMedia": "Redigér medier",
        "edit": "Redigér",
        "editAside": "Åbnes i en ny browserfane. Når du har gemt dine redigeringer, skal du gemme og genindlæse denne historie for at se dine ændringer.",
        "remove": "Fjern"
      },
      "appearance": {
        "homeView": "Første visning",
        "audio": "Lyd",
        "on": "Til",
        "muted": "Lyd slået fra",
        "volumeAside": "Videoen afspilles automatisk, når læseren kommer til denne visning. Hvis du slår lyden fra, kan læseren ikke slå den til.",
        "view": "Vis",
        "resetLocation": "Nulstil position",
        "resetLayers": "Nulstil lag",
        "clearPopup": "Ryd pop-up",
        "interaction": "Interaktion",
        "interactionDisabled": "Interaktion deaktiveret",
        "buttonToEnable": "Knap til at aktivere",
        "interactionEnabled": "Interaktion aktiveret",
        "interactionAside": "*Berøringsenheder vil vise en interaktionsknap.",
        "slide": "Dias",
        "noSlides": "Ingen tilgængelige dias.",
        "mapExtentPrompt": "Opdatér kortet for at fortælle din historie, klik på afkrydsningen for at gemme ændringerne"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Tema"
      },
      "size": {
        "small": "Lille",
        "medium": "Mellem",
        "large": "Stor",
        "noCrop": "Beskær ikke høje billeder",
        "noCropTallTooltip": "Når du undlader at beskære høje billeder, fremkommer der en dramatisk virkning, som kræver, at læserne skal rulle for at se hele billedet."
      },
      "background": {
        "noCrop": "Beskær ikke",
        "mostImportantPart": "Vælg det vigtigste punkt",
        "cropExplanationImmersive": "Vælg et punkt på billedet for at angive, hvordan billedet skal beskæres ved forskellige skærmstørrelser. Det punkt, du vælger, vil altid være synligt. Markér 'Beskær ikke', hvis dit billede skal være fuldt synligt.",
        "cropExplanation": "Vælg et punkt på billedet for at angive, hvordan billedet skal beskæres ved forskellige skærmstørrelser. Det punkt, du vælger, vil altid være synligt.",
        "color": "Farve",
        "previews": "Forhåndsvisninger"
      },
      "altMedia": {
        "alternativeMedia": "Alternative medier",
        "explanation": "Nogle medier understøttes ikke eller fungerer måske ikke godt på mobile enheder. Brug dette panel til at vælge et alternativt, mere mobilvenligt element, som vil blive vist i stedet for dette medie, når din historie vises på en telefon eller tablet.",
        "changeAltImage": "Skift billede",
        "uploadAltImage": "Tilføj billede"
      }
    },
    "imageGallery": {
      "addImage": "Tilføj endnu et billede",
      "moveBackward": "Gå tilbage",
      "moveForward": "Gå fremad"
    },
    "cover": {
      "titlePrompt": "Indtast din historietitel...",
      "subtitlePrompt": "Rul ned for at gå i gang, eller indtast en undertitel efter eget valg",
      "mediaPlaceholder": "Tilføj billede eller video",
      "saveError": "Lagring mislykkedes, du har allerede et element med denne titel"
    },
    "credits": {
      "sectionInvite": "Tilføj et afsnit med credits",
      "warning": "Begge felter skal være udfyldt",
      "content": "Indhold...",
      "source": "Kilde...",
      "linkPrompt": "Valgfrit link...",
      "introductionPlaceholder": "Indtast en valgfri introduktion til dit afsnit med credits..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Position",
        "theme": "Tema",
        "size": "Størrelse",
        "background": "Baggrund",
        "layout": "Rulning (for alle paneler)"
      }
    },
    "title": {
      "placeholder": "Indtast en titel..."
    },
    "media": {
      "imageUpload": "Overførsel af billede i gang...",
      "imageUploadSuccess": "Overførsel af billede lykkedes",
      "imageUploadFail": "Overførsel af billede mislykkedes"
    },
    "controller": {
      "sectionOrganize": "Du har struktureret afsnittene",
      "immersiveOrganize": "Du har struktureret visningerne",
      "sectionDelete": "Du har slettet et afsnit",
      "viewDelete": "Du har slettet en visning"
    },
    "notification": {
      "cancel": "Annullér",
      "close": "Luk",
      "undo": "Fortryd"
    },
    "sections": {
      "sequence": "Fortælling",
      "immersive": "Fordybelse",
      "title": "Titel"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "billede",
        "webmap": "kort",
        "webscene": "scene",
        "video": "video",
        "content": "indhold",
        "webpage": "webside"
      },
      "placeholders": {
        "generic": "Dette indhold er utilgængeligt.",
        "deleted": "Dette element er blevet slettet.",
        "inaccessible": "Dette indhold er utilgængeligt.",
        "unauthorized": "Du er ikke autoriseret til at vise dette indhold.",
        "unshared": "Dette element deles ikke på samme måde som din historie.",
        "othersUnshared": "Dette element deles ikke på samme måde som din historie.",
        "subscriptionContent": "Dette kort indeholder et abonnentlag.",
        "premiumContent": "Dette kort indeholder et premium-lag.",
        "secureService": "Dette kort indeholder et sikkert lag."
      },
      "contentIssues": {
        "noAltImage": "Medier, der ikke understøttes på mobile enheder",
        "altImageBroken": "Det alternative billede, der er defineret for dette medieelement, er ikke tilgængeligt"
      },
      "contentWarnings": {
        "noAltImage": "Denne type medier understøttes ikke på mobile enheder. Angiv et alternativt billede, som skal vises, når historien vises på mobile enheder.",
        "noAltImageAlt": "Denne type medier understøttes ikke på mobile enheder. På den mobile fane skal du angive et alternativt billede, som skal vises, når historien vises på mobile enheder."
      },
      "mapIssues": {
        "fixButton": "Løs problemer",
        "nofixButton": "Problemer",
        "mapLabel": "Kort:",
        "summaries": {
          "unshared": "Ikke-delt indhold",
          "othersUnshared": "En andens ikke-delte indhold",
          "subscriptionContent": "Abonnentindhold",
          "premiumContent": "Premium-indhold",
          "secureContent": "Sikkert indhold",
          "deleted": "Slettet indhold",
          "inaccessible": "Utilgængeligt indhold",
          "unauthorized": "Uautoriseret indhold"
        },
        "descriptions": {
          "unshared": "Dette indhold deles ikke på samme måde som din historie.",
          "othersUnshared": "Dette indhold ejes af en anden og deles ikke på samme måde som din historie.",
          "othersUnsharedAuthorized": "Dette indhold ejes af en anden, men du har autorisation til at dele det.",
          "inaccessible": "Dette indhold er utilgængeligt.",
          "deleted": "Dette indhold er blevet slettet.",
          "unauthorized": "Du er ikke autoriseret til at vise dette indhold.",
          "popupFeatureLayer": "Et tile-lags pop-ups kommer fra et vektorlag, der ikke deles på samme måde som din historie.",
          "subscriptionContent": "Du skal autorisere abonnentindhold til offentlig anvendelse.",
          "premiumContent": "Du skal autorisere premium-indhold til offentlig anvendelse.",
          "secureService": "Sikkert indhold er ikke tilgængeligt for læserne.",
          "missingItemWarning": "Det element, der er knyttet til dette lag, er blevet slettet."
        },
        "tooltips": {
          "unshared": "Klik for at lære mere om deling.",
          "othersUnshared": "Du har ikke tilladelse til at dele indhold, der ejes af andre. Bed ejeren om at dele det, fjern kortet fra din historie, eller redigér kortet for at fjerne de lag, der ikke tilhører dig. Klik for at lære mere om at redigere kort.",
          "inaccessible": "Fjern dette kort fra din historie, eller redigér det for at fjerne utilgængelige lag. Klik for at lære mere om at redigere kort.",
          "deleted": "Fjern dette kort fra din historie, eller redigér det for at fjerne manglende lag. Klik for at lære mere om at redigere kort.",
          "unauthorized": "Fjern dette kort fra din historie, eller redigér det for at fjerne uautoriserede lag. Klik for at lære mere om at redigere kort.",
          "popupFeatureLayer": "Et tile-lags pop-ups kommer fra et vektorlag, der ikke deles på samme måde som din historie.",
          "subscriptionContent": "Abonnentindhold forbruger ikke credits. Klik for at lære mere.",
          "premiumContent": "Der opkræves credits fra din organisation, hver gang nogen viser et premium-lag i din historie. Klik for at lære mere.",
          "secureService": "Fjern det sikre indhold fra din historie, eller klik for at lære, hvordan du skal autorisere sikkert indhold, så andre kan bruge det.",
          "missingItemWarning": "Dette lag fungerer stadig, men dets symboler, pop-ups eller navn kan være ændret. Bekræft, at laget fremstår som forventet, eller fjern det fra din historie."
        },
        "fixButtons": {
          "share": "Opdatér",
          "hide": "Skjul",
          "authorize": "Autorisér",
          "remove": "Fjern",
          "help": "Få hjælp",
          "ignore": "Ignorér",
          "confirm": "Bekræft",
          "edit": "Redigér kort"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Nogle kort og lag blev også delt.",
          "alsoSharedMaps": "Nogle kort blev også delt.",
          "alsoSharedLayers": "Nogle lag blev også delt.",
          "sharedOthersContent": "Du har brugt dine administratorrettigheder til at dele en anden brugers indhold."
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