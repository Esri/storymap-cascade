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
    "share": {
      "btnPrivate": "Privat",
      "btnOrg": "Organisasjon",
      "btnPublic": "Felles",
      "btnEveryone": "Alle"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Byggeverktøy",
      "buttonSaving": "Lagrer",
      "buttonSaved": "Lagret",
      "buttonError": "Lagring mislyktes",
      "buttonShare": "Del",
      "buttonSettings": "Innstillinger",
      "settingsLogoError": "Det er et problem med logoen.  Klikk for mer informasjon.",
      "buttonHelp": "Få hjelp eller send tilbakemelding på GeoNet",
      "buttonPreview": "Vis historie",
      "buttonHealth": "Tilstandsrapport",
      "manageStories": "Administrer mine fortellinger",
      "closeWithPendingChange": "Er du sikker på at du vil bekrefte denne handlingen? Du mister endringene du har gjort.",
      "coverLabel": "Forside",
      "creditsLabel": "Credits",
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
      "chooseTransition": "Velg overgang",
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
        "remove": "Fjern",
        "altTextPlaceholder": "Legg til en beskrivelse av dette mediet for brukere med nedsatt syn ...",
        "altTextHelptip": "Alternativ tekst er en beskrivelse av visuelle medier som brukes av hjelpeteknologi som skjermleserprogramvare. Dette er valgfritt, men anbefales for å oppfylle retningslinjene for universell utforming av nettinnhold, som WCAG og Section 508."
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
        "alternativeMedia": "Alternativt bilde for mobil",
        "explanation": "Enkelte medier støttes ikke eller fungerer ikke så godt på mobile enheter. Bruk dette panelet til å spesifisere et bilde som skal vises i stedet for dette mediet når historien vises på en telefon eller et nettbrett.",
        "changeAltImage": "Endre bilde",
        "uploadAltImage": "Legg til et alternativt bilde"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Kobling til innhold",
        "urls_short": "Kobling",
        "contentType": {
          "error": "Ingen godkjente medier.",
          "imageOnly": "I denne delen av historien kan du legge til et bilde.",
          "imageAndVideo": "I denne delen av historien kan du legge til et bilde eller en video.",
          "imageVideoWebpage": "I denne delen av fortellingen kan du legge til lyd, et bilde, en video eller en nettside."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Søker etter \"${searchterm}\"...",
          "searchedFor": "Søkeresultater for \"${searchterm}\"",
          "albumsOf": "${username} sine album",
          "noPhotosFound": "Ingen bilder samsvarer med søket. Prøv på nytt.",
          "noItemsFound": "Ingen elementer samsvarer med søket. Prøv på nytt.",
          "noItemsInThisStory": "Det har ikke blitt lagt til noe innhold fra ArcGIS i denne historien ennå.",
          "limitReached": "Viser 100 elementer. Hvis du ikke fant det du trengte, kan du prøve et søkeordbasert søk.",
          "galleryItems": {
            "uploadError": "Beklager, opplasting av dette elementet mislyktes."
          },
          "agol": {
            "remove1": "Slett dette ubrukte bildet fra ArcGIS-kontoen din.",
            "remove2": "(Du må laste det opp på nytt hvis du bestemmer deg for å bruke det senere.)",
            "removeFailed": "Fjern dette utilgjengelige bildet fra denne listen.",
            "modified": "Endret ${date}",
            "uploaded": "Lastet opp ${date}",
            "contentByAuthor": "${contentType} av ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Bla gjennom bilder på ${Picasa} eller ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Søk etter og bla gjennom bilder på ${Flickr}",
            "captionStarter": "Bilde av ${USERNAME} på ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Søk etter bilder på ${Unsplash}",
            "photoBy": "Bilde av ${username}",
            "userLink": "Gå til ${username} sin ${Unsplash}-side",
            "captionStarter": "Bilde av ${USERNAME} på ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Opprett kobling til innhold på nettet",
              "imageOnly": "Opprett kobling til et bilde på nettet",
              "imageAndVideo": "Opprett kobling til et bilde eller en video på nettet"
            },
            "linkText": {
              "imageOnly": "I boksen over kan du opprette en kobling direkte til et bilde.",
              "imageAndVideo1": "I boksen over kan du lime inn en kobling eller iframe-kode for en video fra ${YouTube} eller ${Vimeo}.",
              "imageAndVideo2": "Du kan også opprette en kobling direkte til et bilde.",
              "imageVideoWebpage1": "I boksen over kan du lime inn en kobling eller iframe-kode for webinnhold, f.eks. et dynamisk diagram eller en video på ${YouTube} eller ${Vimeo}.",
              "imageVideoWebpage2": "Du kan også opprette en kobling direkte til et bilde, en video, lydfil, webside eller en webapplikasjon.",
              "ender": "Bruk alltid sikre (https)-koblinger. Hvis innholdet ditt ikke støtter https, legger du til en kobling til det i teksten i historien din, slik at leserne kan se det i en ny webleserfane.",
              "httpsError": "Koblingen må begynne med HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Last inn siden med en sikker tilkobling (https)",
              "embedProtocolWarning1": "Hvis denne siden ikke blir lastet inn i historien din, kan den av hensyn til nettsikkerheten ikke bygges inn.",
              "embedProtocolWarning2": "Hvis denne siden ikke lastes inn i historien, fjerner du merket for dette alternativet og prøver på nytt. Hvis den fremdeles ikke lastes inn, kan den ikke bygges inn av hensyn til nettsikkerheten.",
              "embedProtocolWarning3": "Et alternativ kan være å legge til en kobling i historien for å åpne siden i en ny nettleserfane. ${linkText}",
              "linkText": "Få mer informasjon."
            },
            "placeholder": "${https://}... eller ${<iframe>}",
            "uploadErrors": {
              "generic": "Noe gikk galt med adressen du skrev inn. Prøv på nytt.",
              "imageOnly1": "Du må bruke et bilde i denne delen av historien.",
              "imageOnly2": "Oppgi en kobling til et bilde (.jpg, .png, .gif), eller velg et bilde fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
              "imageAndVideo1": "Du må bruke et bilde eller en video i denne delen av historien.",
              "imageAndVideo2": "Oppgi en kobling til et bilde (.jpg, .png, .gif) eller en video på ${YouTube} eller ${Vimeo}, eller velg et bilde fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
              "badFormat": "Koblingen til filen du prøver å legge til, er ikke riktig formatert.",
              "inaccessible": "Filen du prøver å legge til, mangler eller er ikke tilgjengelig.",
              "tryAgain": "Kontroller adressen, og prøv på nytt.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "bilde",
                "generic": "medier"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Når du bruker en tredjepartstjeneste, godtar du dennes tjenestevilkår: ",
          "googlePhotos": {
            "placeholder": "E-postadresse eller ${Picasa}/${Google+}-ID",
            "helpText": "Du kan legge til bilder som er lastet opp til ${Picasa} eller ${Google+}, i historien. ${helpLinkText} om å bruke bilder lagret i ${Google}-kontoen din, i historiene dine.",
            "helpLinkText": "Mer informasjon",
            "cannotFindUser": "Finner ikke ${username}. Prøv på nytt."
          },
          "unsplash": {
            "placeholder": "Søk etter bilder",
            "aboutText": "${Unsplash} er en bearbeidet samling med gratis bilder av høy kvalitet.",
            "copyrightText": "Alle bilder er lisensierte under ${Unsplash}-lisensen. Finn mer informasjon ${moreInfoLink}.",
            "moreInfoLink": "her"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr}-konto",
              "text": "Hele ${Flickr}"
            },
            "placeholders": {
              "user": "Søk etter konto",
              "userText": "Søk etter bilder i denne kontoen",
              "text": "Søk etter bilder"
            },
            "errors": {
              "cannotFindUser": "Finner ikke brukeren ${username}.",
              "noUserPhotos": "${username} har ingen offentlige bilder.",
              "didYouMean": "Mente du ${username}?",
              "generalUserError": "Noe gikk galt ved søk etter brukeren ${username}."
            },
            "licenses": {
              "licenseLabel": "Lisens: ",
              "public": "Offentlig domene",
              "commercial": "OK for kommersiell bruk",
              "nonCommercial": "OK for ikke-kommersiell bruk",
              "reserved": "Med enerett",
              "any": "Alle lisenser"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Denne historien",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organisasjonen ${orgname}",
              "myContent": "Mitt innhold."
            },
            "createContent": {
              "createNewMap": "Opprett et nytt kart",
              "or": "ELLER",
              "dragAndDropImage": "Slipp bilder",
              "dragAndDropImageAudio": "Slipp bilder eller lyd",
              "uploadButton": "Bla gjennom",
              "agolInfo": "Opplastede bilder og lyd blir tilgjengelig bare i denne fortellingen.",
              "saveBeforeUpload": "Når du har lagret denne fortellingen, kan du laste opp bilder og lyd til ArcGIS her.",
              "fileExtsImage": "Filtyper som støttes: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Filtyper som støttes: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maks. 10 MB per fil."
            },
            "filterAndSort": {
              "webmap": "Webkart",
              "webscene": "Webscene",
              "image": "Bilde",
              "audio": "Lyd",
              "date": "Dato",
              "sortByDate": "Sorter etter dato",
              "title": "Tittel",
              "sortByTitle": "Sorter etter tittel",
              "views": "Visninger",
              "search": "Søk etter nøkkelord eller ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Rediger kart",
      "unauthorizedDomain": "Du er ikke på et domene som har tillatelse til å bruke redigeringsprogrammet for kart",
      "loading": "Vent litt mens redigeringsprogrammet for kart lastes inn",
      "saving": "Lagrer kartet",
      "success": "Kartet er lagret",
      "cancelTitle": "Vil du forkaste endringer som ikke er lagret?",
      "errorSave": "Kan ikke lagre kartet. Prøv på nytt.",
      "loadFail": "Kan ikke laste inn redigeringsprogrammet for kart",
      "close": "Ja",
      "save": "Lagre",
      "confirm": "Ja, lukk kartet",
      "deny": "Nei, fortsett å arbeide"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Fortsett historien her..."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Medier",
        "title": "Tittel",
        "immersive": "Dyptgående"
      },
      "link": {
        "invite": "Lim inn eller skriv inn en kobling..."
      },
      "color": {
        "choose": "velg",
        "cancel": "avbryt",
        "clear": "Fjern farge"
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
      "mediaUpload": "Medieopplasting pågår ...",
      "mediaUploadSuccess": "Medieopplastingen var vellykket",
      "mediaUploadFail": "Medieopplastingen mislyktes"
    },
    "controller": {
      "sectionOrganize": "Du organiserte seksjonene",
      "immersiveOrganize": "Du organiserte visningene",
      "sectionDelete": "Du slettet en seksjon",
      "viewDelete": "Du slettet en visning"
    },
    "notification": {
      "cancel": "Avbryt",
      "close": "Lukk",
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
        "audio": "lyd",
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
        "noAltImage": "Mediet fungerer kanskje ikke på mobil",
        "noAltImageUnsupported": "Mediet støttes ikke på mobil",
        "noAltImageWarning": "Mediet fungerer kanskje ikke på mobil",
        "altImageBroken": "Det alternative bildet som er definert for dette elementet, er ikke tilgjengelig",
        "httpMedia": "Usikre medier",
        "httpContent": "Usikkert innhold"
      },
      "contentWarnings": {
        "noAltImage": "Pass på å teste historien din på mobile enheter før du deler den. Hvis dette mediet ikke virker som forventet, bruker du knappen nedenfor til å legge til et alternativt bilde som vil bli vist når historien vises på en telefon eller nettbrett.",
        "noAltImageUnsupported": "Dette mediet fungerer ikke på mobile enheter. Bruk knappen nedenfor til å legge til et alternativt bilde som vil bli vist når historien vises på en telefon eller nettbrett.",
        "noAltImageWarning": "Pass på å teste historien din på mobile enheter før du deler den. Hvis dette mediet ikke virker som forventet, bruker du knappen nedenfor til å legge til et alternativt bilde som vil bli vist når historien vises på en telefon eller nettbrett.",
        "noAltImageAlt": "Denne medietypen støttes ikke eller fungerer dårlig på mobile enheter. I fanen for mobil angir du et alternativt bilde som skal vises når historien vises på en telefon eller et nettbrett."
      },
      "descriptions": {
        "httpAudioUnfixable": "Lyden støtter ikke HTTPS.  Fjern den fra fortellingen, eller erstatt den med en kobling.",
        "httpAudioUncheckable": "Lyden har usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en HTTPS URL for denne lyden. Hvis det ikke fungerer, fjerner du lyden fra fortellingen eller erstatter den med en hyperkobling.",
        "httpAudioFixable": "Lyden har usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en sikker HTTPS URL for denne lyden.",
        "httpWebpageUnfixable": "Nettsiden støtter ikke HTTPS.  Fjern den fra fortellingen, eller erstatt den med et skjermbilde eller en kobling.",
        "httpWebpageUncheckable": "Denne nettsiden har en usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en HTTPS URL for denne nettsiden. Hvis det ikke fungerer, fjerner du nettsiden fra fortellingen eller erstatter den med et skjermbilde eller en hyperkobling.",
        "httpWebpageFixable": "Denne nettsiden har en usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en sikker HTTPS URL for denne nettsiden.",
        "httpVideoUnfixable": "Videoen støtter ikke HTTPS.  Fjern den fra fortellingen, eller erstatt den med et skjermbilde eller en kobling.",
        "httpVideoUncheckable": "Denne lyden har en usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en HTTPS URL for denne videoen. Hvis det ikke fungerer, fjerner du videoen fra fortellingen eller erstatter den med et skjermbilde eller en hyperkobling.",
        "httpVideoFixable": "Denne lyden har en usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en sikker HTTPS URL for denne videoen.",
        "httpImageUnfixable": "Bildet støtter ikke HTTPS.  Fjern det fra fortellingen, eller erstatt det med en kobling.",
        "httpImageUncheckable": "Dette bildet har en usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en HTTPS URL for dette bildet. Hvis det ikke fungerer, fjerner du bildet fra fortellingen eller erstatter den med en hyperkobling.",
        "httpImageFixable": "Dette bildet har en usikker (HTTP) URL. Klikk på knappen nedenfor for å bruke en sikker HTTPS URL for dette bildet.",
        "httpLayer": "Dette laget har en usikker (HTTP) URL.",
        "inaccessibleLogo": "Denne logoen er ikke tilgjengelig. Erstatt den med et annet bilde.",
        "httpLogoUnfixable": "Denne logoen støtter ikke HTTPS. Erstatt den med et annet bilde.",
        "httpLogoFixable": "Denne logoen har en usikker (HTTP) URL. Bruk en HTTPS URL for logoen.",
        "httpLogoUncheckable": "Denne logoen har en usikker (HTTP) URL. Bruk en HTTPS URL for logoen, eller erstatt den med et annet bilde."
      },
      "tooltips": {
        "httpAudioFixable": "Klikk på knappen for å bruke en sikker HTTPS URL for denne lyden.",
        "httpAudioUncheckable": "Prøv å bruke en HTTPS URL for denne lyden. Hvis det ikke fungerer, fjerner du lyden fra fortellingen eller erstatter den med en kobling.",
        "httpWebpageFixable": "Klikk på knappen for å bruke en sikker HTTPS URL for denne nettsiden.",
        "httpWebpageUncheckable": "Prøv å bruke en HTTPS URL for denne nettsiden. Hvis det ikke fungerer, fjerner du nettsiden fra fortellingen eller erstatter den med et skjermbilde eller en kobling.",
        "httpVideoFixable": "Klikk på knappen for å bruke en sikker HTTPS URL for denne videoen.",
        "httpVideoUncheckable": "Prøv å bruke en HTTPS URL for denne videoen. Hvis det ikke fungerer, fjerner du videoen fra fortellingen eller erstatter den med et skjermbilde eller en kobling.",
        "httpImageFixable": "Klikk på knappen for å bruke en sikker HTTPS URL for dette bildet.",
        "httpImageUncheckable": "Prøv å bruke en HTTPS URL for dette bildet. Hvis det ikke fungerer, fjerner du bildet fra fortellingen eller erstatter den med en kobling.",
        "httpLayerMyMap": "Gå til elementsiden for kartet for å oppdatere dette laget til å bruke HTTPS. Hvis det ikke er mulig å oppdatere laget, fjerner du det fra kartet.",
        "httpLayerNotMyMap": "Lag en kopi av kartet, og oppdater laget til å bruke HTTPS. Hvis det ikke er mulig å oppdatere laget, fjerner du det fra kartet.",
        "clickLearnMore": "Klikk for mer informasjon"
      },
      "fixButtons": {
        "agolItemPage": "Elementside",
        "openTheMap": "Åpne kart",
        "updateAudio": "Korriger URL for lyd",
        "updateWebpages": "Korriger URL for nettside",
        "updateVideos": "Korriger URL for video",
        "updateImages": "Korriger URL for bilde"
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
    },
    "saveErrorSocial": {
      "title": "Deling på sosiale medier",
      "panel1": "Det kan hende historien ikke vises riktig i sosiale medier, ettersom tittelen på ArcGIS-webapplikasjonen ikke er den samme som historietittelen.",
      "panel1tooltip": "Når du angir en tittel, et sammendrag og et miniatyrbilde, vil historien se slik ut:",
      "panel2": "Hvilken tittel vil du bruke på sosiale medier:",
      "panel2q1": "Historietittel (anbefales)",
      "panel2q1tooltip": "Når du velger dette alternativet, endres elementtittelen slik at den er identisk med historietittelen og andre endringer i byggeverktøyet synkroniseres.",
      "panel2q2": "Elementtittel",
      "panel3": "Hvis du vil forbedre hvordan historien vises på sosiale medier, bruker du ${MYSTORIES} til å legge til et sammendrag og et miniatyrbilde.",
      "panel4": "Ikke vis denne advarselen igjen for denne historien",
      "save": "Lagre",
      "mystories": "Mine historier"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Viktig informasjon om websikkerhet og fortellingskart",
      "s1h1": "Esri forbedrer sikkerheten for fortellingskart",
      "s1p1": "Fortellingskartene lever på nettet, og Internett-fellesskapet jobber hele tiden med å forbedre sikkerheten. HTTPS, som gir en sikker forbindelse til innhold som sendes over Internett, begynner å bli den vanligste måten å få tilgang til Internett-innhold på. De fleste moderne nettlesere viser en advarsel når det brukes HTTP i stedet for HTTPS. Som følge av denne nye standarden anbefaler vi på det sterkeste å bruke HTTPS-koblinger når du utarbeider og deler fortellingskart, og bare bruke HTTPS-URL-er når du bygger inn webinnhold eller oppretter koblinger til bilder i et fortellingskart.",
      "s1p2": "Det betyr at du får tilgang til et fortellingskart og alt innholdet i det (inkludert bilder, lag, innebygde apper og nettsteder) ved hjelp av koblinger som begynner med HTTPS i stedet for HTTP. Dette gir leserne dine den beste opplevelsen siden de fleste nettleserne viser at fortellingene dine er sikre.",
      "s2h1": "Hva må jeg gjøre?",
      "s2p1": "Esri arbeider for at det skal bli en enkel overgang for alle som lager og bruker fortellingskart. Byggeverktøyene for Story Map og My Stories inneholder nå verktøy som hjelper deg med å finne usikkert innhold (HTTP) i fortellingene dine, og gir råd om hvordan du ordner dette. Kontroller om fortellingene dine har usikkert innhold, og oppdater til HTTPS så snart som mulig.",
      "action1": "Lukk",
      "action2": "Kontroller mine fortellinger nå",
      "action3": "Mer informasjon",
      "floatingNotification": "Denne fortellingen inneholder usikkert innhold (HTTP). Se gjennom og rett opp i disse problemene."
    }
  }
});