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
    "share": {
      "btnPrivate": "Privat",
      "btnOrg": "Organisation",
      "btnPublic": "Offentlig",
      "btnEveryone": "Alle"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Gemmer",
      "buttonSaved": "Gemt",
      "buttonError": "Blev ikke gemt",
      "buttonShare": "Opdatér",
      "buttonSettings": "Indstillinger",
      "settingsLogoError": "Der er et problem med dit logo. Klik for at få flere oplysninger.",
      "buttonHelp": "Få hjælp eller send feedback på GeoNet",
      "buttonPreview": "Vis historie",
      "buttonHealth": "Tilstandsrapport",
      "manageStories": "Administrér mine historier",
      "closeWithPendingChange": "Er du sikker på, at du vil bekræfte denne handling? Dine ændringer vil gå tabt.",
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
      "chooseTransition": "Vælg Overgang",
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
        "remove": "Fjern",
        "altTextPlaceholder": "Tilføj en beskrivelse af dette medie til synshæmmede læsere...",
        "altTextHelptip": "Alternativ tekst er en beskrivelse af visuelle medier, der anvendes af hjælpeteknologier som skærmlæser-software. Det er valgfrit, men det anbefales at opfylde retningslinjerne for tilgængelighed, såsom WCAG og Section 508."
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
        "alternativeMedia": "Alternativt billede til mobil enhed",
        "explanation": "Nogle medier understøttes ikke eller fungerer måske ikke godt på mobile enheder. Brug dette panel til at vælge et billede, som vil blive vist i stedet for disse medier, når din historie vises på en telefon eller tablet.",
        "changeAltImage": "Skift billede",
        "uploadAltImage": "Tilføj alternativt billede"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Link til indhold",
        "urls_short": "Link",
        "contentType": {
          "error": "Ingen autoriserede medier.",
          "imageOnly": "Du kan tilføje et billede i denne del af din historie.",
          "imageAndVideo": "Du kan tilføje et billede eller en video i denne del af din historie.",
          "imageVideoWebpage": "Du kan tilføje et lydklip, et billede, en video eller en webside i denne del af din historie."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Søger efter \"${searchterm}\"...",
          "searchedFor": "Søgeresultater for \"${searchterm}\"...",
          "albumsOf": "${username}s albummer",
          "noPhotosFound": "Ingen fotos matchede din søgning. Prøv igen.",
          "noItemsFound": "Ingen elementer matchede din søgning. Prøv igen.",
          "noItemsInThisStory": "Intet indhold fra ArcGIS er blevet føjet til denne historie endnu.",
          "limitReached": "Viser 100 elementer. Hvis du ikke fandt det, du søgte, kan du prøve en nøgleordssøgning.",
          "galleryItems": {
            "uploadError": "Beklager, dette element kunne ikke overføres."
          },
          "agol": {
            "remove1": "Slet dette ubrugte billede fra din ArcGIS-konto.",
            "remove2": "(Du skal overføre det igen, hvis du beslutter at bruge det senere).",
            "removeFailed": "Fjern dette utilgængelige billede fra denne liste.",
            "modified": "Ændret ${date}",
            "uploaded": "Overført ${date}",
            "contentByAuthor": "${contentType} af ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Gennemse fotos på ${Picasa} eller ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Søg efter og find fotos på ${Flickr}",
            "captionStarter": "Foto af ${USERNAME} på ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Søg efter fotos på ${Unsplash}",
            "photoBy": "Foto af ${username}",
            "userLink": "Gå til ${username}s ${Unsplash} side",
            "captionStarter": "Foto af ${USERNAME} på ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Link til indhold på internettet",
              "imageOnly": "Link til et billede på internettet",
              "imageAndVideo": "Link til et billede eller en video på internettet"
            },
            "linkText": {
              "imageOnly": "I boksen ovenfor kan du linke direkte til et foto.",
              "imageAndVideo1": "I boksen ovenfor kan du indsætte et link eller en iframe-kode til en video på ${YouTube} og ${Vimeo}.",
              "imageAndVideo2": "Du kan også linke direkte til et foto.",
              "imageVideoWebpage1": "I boksen ovenfor kan du indsætte et link eller en iframe-kode til webindhold, såsom et dynamisk diagram eller en video på ${YouTube} og ${Vimeo}.",
              "imageVideoWebpage2": "Du kan også linke direkte til et foto, en video, en lydfil, en webside eller en webapplikation.",
              "ender": "Brug altid sikre (https)-links. Hvis dit indhold ikke understøtter https, skal du tilføje et link til det i din histories tekst, så læserne kan få indholdet vist i en ny browserfane.",
              "httpsError": "Links skal begynde med HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Indlæs side via en sikker forbindelse (https)",
              "embedProtocolWarning1": "Hvis denne side ikke indlæses i din historie, er det fordi, den ikke kan indlejres af sikkerhedsmæssige årsager.",
              "embedProtocolWarning2": "Hvis denne side ikke indlæses i din historie, skal du fjerne markeringen af denne indstilling og prøve igen. Hvis siden fortsat ikke indlæses, er det fordi, den ikke kan indlejres af sikkerhedsmæssige årsager.",
              "embedProtocolWarning3": "Som alternativ kan du tilføje et link i din fortælling for at åbne siden i en ny browserfane. ${linkText}",
              "linkText": "Lær mere."
            },
            "placeholder": "${https://}... eller ${<iframe>}",
            "uploadErrors": {
              "generic": "Noget gik galt med den angivne adresse. Prøv igen.",
              "imageOnly1": "Du skal bruge et billede i denne del af historien.",
              "imageOnly2": "Indsæt et link til et billede (.jpg, .png, .gif), eller vælg et billede fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
              "imageAndVideo1": "Du skal bruge et billede eller en video i denne del af historien.",
              "imageAndVideo2": "Indsæt et link til et billede (.jpg, .png, .gif) eller en video på ${YouTube} eller ${Vimeo}, eller vælg et billede fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
              "badFormat": "Linket til den fil, du forsøger at tilføje, er formateret forkert.",
              "inaccessible": "Den fil, du forsøger at tilføje, mangler eller er utilgængelig.",
              "tryAgain": "Tjek adressen, og prøv igen.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "billede",
                "generic": "medier"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Ved at benytte en tredjeparts-tjeneste accepterer du vilkårene for brug af den pågældende tjeneste: ",
          "googlePhotos": {
            "placeholder": "E-mail eller ${Picasa}/${Google+} ID",
            "helpText": "Du kan tilføje fotos, der er overført til ${Picasa} eller ${Google+}, til din historie. ${helpLinkText} om brug af billeder, der er lagret på din ${Google}-konto i dine historier.",
            "helpLinkText": "Lær mere",
            "cannotFindUser": "Kan ikke finde brugeren ${username}. Prøv igen."
          },
          "unsplash": {
            "placeholder": "Søg efter fotos",
            "aboutText": "${Unsplash} er en opdateret samling af gratis fotos af høj kvalitet.",
            "copyrightText": "Alle billeder er givet i licens i henhold til ${Unsplash} Licensen. Du finder yderligere oplysninger under ${moreInfoLink}.",
            "moreInfoLink": "her"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr}-konto",
              "text": "Alle ${Flickr}"
            },
            "placeholders": {
              "user": "Søg efter konto",
              "userText": "Søg på denne konto efter fotos",
              "text": "Søg efter fotos"
            },
            "errors": {
              "cannotFindUser": "Kan ikke finde brugeren ${username}.",
              "noUserPhotos": "${username} har ikke nogen offentlige fotos.",
              "didYouMean": "Mente du ${username}?",
              "generalUserError": "Noget gik galt under søgning efter brugeren ${username}."
            },
            "licenses": {
              "licenseLabel": "Licens: ",
              "public": "Offentligt domæne",
              "commercial": "OK for kommerciel anvendelse",
              "nonCommercial": "OK for ikke-kommerciel anvendelse",
              "reserved": "Alle rettigheder forbeholdes",
              "any": "Enhver licens"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Denne historie",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname} organisation",
              "myContent": "Mit indhold"
            },
            "createContent": {
              "createNewMap": "Opret et nyt kort",
              "or": "ELLER",
              "dragAndDropImage": "Slip billeder",
              "dragAndDropImageAudio": "Slip billeder eller lydklip",
              "uploadButton": "Gennemse",
              "agolInfo": "Uploadede billeder og lydklip er kun tilgængelige i denne historie.",
              "saveBeforeUpload": "Når du har gemt denne historie, kan du overføre billeder og lydklip til ArcGIS her.",
              "fileExtsImage": "Understøttede typer: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Understøttede typer: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maks. 10 MB pr. fil."
            },
            "filterAndSort": {
              "webmap": "Webkort",
              "webscene": "Webscene",
              "image": "Billede",
              "audio": "Lyd",
              "date": "Dato",
              "sortByDate": "Sortér efter dato",
              "title": "Titel",
              "sortByTitle": "Sortér efter titel",
              "views": "Visninger",
              "search": "Søg efter nøgleord eller ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Redigér kort",
      "unauthorizedDomain": "Du er ikke på et autoriseret domæne til at bruge korteditoren",
      "loading": "Vent, mens korteditoren indlæses",
      "saving": "Gemmer kortet",
      "success": "Kort gemt",
      "cancelTitle": "Slet eventuelle ikke-gemte ændringer?",
      "errorSave": "Kan ikke gemme kort. Prøv igen.",
      "loadFail": "Beklager, korteditoren kan ikke indlæses",
      "close": "Luk",
      "save": "Gem",
      "confirm": "Ja, luk kortet",
      "deny": "Nej, fortsæt med at arbejde"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Fortsæt din historie her..."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Medier",
        "title": "Titel",
        "immersive": "Fordybelse"
      },
      "link": {
        "invite": "Indsæt eller indtast et link..."
      },
      "color": {
        "choose": "vælg",
        "cancel": "annullér",
        "clear": "Ryd farve"
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
      "mediaUpload": "Overførsel af medier i gang...",
      "mediaUploadSuccess": "Overførsel af medier lykkedes",
      "mediaUploadFail": "Overførsel af medier mislykkedes"
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
        "audio": "audio",
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
        "noAltImage": "Medier fungerer muligvis ikke på mobile enheder",
        "noAltImageUnsupported": "Medier, der ikke understøttes på mobile enheder",
        "noAltImageWarning": "Medier fungerer muligvis ikke på mobile enheder",
        "altImageBroken": "Det alternative billede, der er defineret for dette medieelement, er ikke tilgængeligt",
        "httpMedia": "Usikre medier",
        "httpContent": "Usikkert indhold"
      },
      "contentWarnings": {
        "noAltImage": "Sørg for at teste din historie på mobile enheder, inden du begynder at dele den. Hvis disse medier ikke fungerer som forventet, skal du bruge knappen nedenfor til at tilføje et alternativt billede, som vil blive vist, når historien vises på en telefon eller tablet.",
        "noAltImageUnsupported": "Disse medier understøttes ikke på mobile enheder. Brug knappen nedenfor til at tilføje et alternativt billede, som vil blive vist, når historien vises på en telefon eller tablet.",
        "noAltImageWarning": "Sørg for at teste din historie på mobile enheder, inden du begynder at dele den. Hvis disse medier ikke fungerer som forventet, skal du bruge knappen nedenfor til at tilføje et alternativt billede, som vil blive vist, når historien vises på en telefon eller tablet.",
        "noAltImageAlt": "Denne type medier understøttes ikke eller fungerer måske ikke godt på mobile enheder. På den mobile fane skal du angive et alternativt billede, som skal vises, når historien vises på en telefon eller tablet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Denne lyd understøtter ikke HTTPS. Fjern den fra din historie eller erstat den med et link.",
        "httpAudioUncheckable": "Denne lyd har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til denne lyd. Hvis det ikke virker, skal du fjerne lyden fra din historie eller erstatte den med et link.",
        "httpAudioFixable": "Denne lyd har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til denne lyd.",
        "httpWebpageUnfixable": "Denne webside understøtter ikke HTTPS. Fjern den fra din historie eller erstat den med et screenshot eller et link.",
        "httpWebpageUncheckable": "Denne webside har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til denne webside. Hvis det ikke virker, skal du fjerne websiden fra din historie eller erstatte den med et screenshot eller et link.",
        "httpWebpageFixable": "Denne webside har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til denne webside.",
        "httpVideoUnfixable": "Denne video understøtter ikke HTTPS. Fjern den fra din historie eller erstat den med et screenshot eller et link.",
        "httpVideoUncheckable": "Denne video har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til denne video. Hvis det ikke virker, skal du fjerne videoen fra din historie eller erstatte den med et screenshot eller et link.",
        "httpVideoFixable": "Denne video har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til denne video.",
        "httpImageUnfixable": "Dette billede understøtter ikke HTTPS. Fjern det fra din historie eller erstat det med et link.",
        "httpImageUncheckable": "Dette billede har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til dette billede. Hvis det ikke virker, skal du fjerne billedet fra din historie eller erstatte det med et link.",
        "httpImageFixable": "Dette billede har en usikker (HTTP) URL. Klik på knappen nedenfor for at bruge en sikker HTTPS URL til dette billede.",
        "httpLayer": "Dette lag har en usikker (HTTP) URL.",
        "inaccessibleLogo": "Dette logo er ikke tilgængeligt. Erstat det med et andet billede.",
        "httpLogoUnfixable": "Dette logo understøtter ikke HTTPS. Erstat det med et andet billede.",
        "httpLogoFixable": "Dette logo har en usikker (HTTP) URL. Brug en HTTPS URL til logoet.",
        "httpLogoUncheckable": "Dette logo har en usikker (HTTP) URL. Brug en HTTPS URL til logoet, eller erstat det med et andet billede."
      },
      "tooltips": {
        "httpAudioFixable": "Klik på knappen for at bruge en sikker HTTPS URL til denne lyd.",
        "httpAudioUncheckable": "Prøv at bruge en sikker HTTPS URL til denne lyd. Hvis det ikke virker, skal du fjerne lyden fra din historie eller erstatte den med et link.",
        "httpWebpageFixable": "Klik på knappen for at bruge en sikker HTTPS URL til denne webside.",
        "httpWebpageUncheckable": "Prøv at bruge en sikker HTTPS URL til denne webside. Hvis det ikke virker, skal du fjerne websiden fra din historie eller erstatte den med et screenshot eller et link.",
        "httpVideoFixable": "Klik på knappen for at bruge en sikker HTTPS URL til denne video.",
        "httpVideoUncheckable": "Prøv at bruge en sikker HTTPS URL til denne video. Hvis det ikke virker, skal du fjerne videoen fra din historie eller erstatte den med et screenshot eller et link.",
        "httpImageFixable": "Klik på knappen for at bruge en sikker HTTPS URL til dette billede.",
        "httpImageUncheckable": "Prøv at bruge en sikker HTTPS URL til dette billede. Hvis det ikke virker, skal du fjerne billedet fra din historie eller erstatte det med et link.",
        "httpLayerMyMap": "Besøg kortets elementoplysningsside for at opdatere dette lag til at bruge HTTPS. Hvis laget ikke kan opdateres, skal du fjerne det fra kortet.",
        "httpLayerNotMyMap": "Lav en kopi af kortet og og opdater dette lag til at bruge HTTPS. Hvis laget ikke kan opdateres, skal du fjerne det fra kortet.",
        "clickLearnMore": "Klik for at få flere oplysninger."
      },
      "fixButtons": {
        "agolItemPage": "Elementoplysningsside",
        "openTheMap": "Åbn kort",
        "updateAudio": "Ret URL for lyd",
        "updateWebpages": "Ret URL for webside",
        "updateVideos": "Ret URL for video",
        "updateImages": "Ret URL for billede"
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
    },
    "saveErrorSocial": {
      "title": "Deling på sociale medier",
      "panel1": "Din historie vil muligvis ikke blive vist korrekt på de sociale medier, fordi din ArcGIS-webapplikations elementtitel er ikke identisk med historiens titel.",
      "panel1tooltip": "Ved at definere en titel, et resumé og et miniaturebillede kan din historie komme til at se sådan ud:",
      "panel2": "Hvilken titel vil du gerne bruge på de sociale medier:",
      "panel2q1": "Historietitel (anbefales)",
      "panel2q1tooltip": "Når du vælger denne indstilling, vil din elementtitel blive ændret, så den matcher din historietitel, og yderligere ændringer i builder-programmet vil blive synkroniserede.",
      "panel2q2": "Elementtitel",
      "panel3": "Hvis du vil forbedre visningen af din historie på de sociale medier yderligere, kan du bruge ${MYSTORIES} til at tilføje et resumé og et miniaturebillede.",
      "panel4": "Giv mig ikke igen besked om denne historie",
      "save": "Gem",
      "mystories": "Mine historier"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Vigtig meddelelse om internetsikkerhed og Story Maps",
      "s1h1": "Esri forbedrer sikkerheden for Story Maps",
      "s1p1": "Dine Story Maps lever på nettet, og internetfællesskabet arbejder altid for at skabe og implementere bedre sikkerhed. HTTPS som giver en sikker forbindelse til indhold, der sendes over internettet, bliver den mest almindelige måde at få adgang til webindhold på. De fleste moderne browsere viser nu advarselsmeddelelser, når der bruges HTTP i stedet for HTTPS. På grund af denne nye standard anbefaler vi kraftigt, at du bruger HTTPS-links til at redigere og dele Story Maps, og at du udelukkende bruger HTTPS-URL'er, når du integrerer webindhold eller linker til billeder i i et Story Map.",
      "s1p2": "I praksis betyder det, at et Story Map og alt dets indhold (herunder billeder, lag, indlejrede apps og websteder) bør åbnes ved hjælp af links, der starter med HTTPS i stedet for HTTP. Det sikrer den bedste oplevelse for dine læsere, fordi de fleste webbrowsere vil vise, at dine historier er sikre.",
      "s2h1": "Hvad skal jeg gøre?",
      "s2p1": "Esri arbejder på at gøre overgangen nem for Story Map- forfattere og -læsere. Der er værktøjer tilgængelige nu i Story Map builders og Mine historier, der hjælper dig med at finde usikkert indhold (HTTP) i dine historier og giver anbefalinger til, hvordan du ordner det. Kontrollér dine historier for usikkert indhold og opdatér til HTTPS snarest muligt.",
      "action1": "Luk",
      "action2": "Kontrollér mine historier nu",
      "action3": "Lær mere",
      "floatingNotification": "Denne historie indeholder usikkert indhold (HTTP). Gennemse og løs disse problemer."
    }
  }
});