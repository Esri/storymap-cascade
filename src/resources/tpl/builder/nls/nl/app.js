/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Toepassen",
      "close": "Sluiten"
    },
    "header": {
      "sharingNotAvailable": "Dit is niet beschikbaar totdat u het verhaal deelt",
      "edit": "Bewerken"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Bladwijzers",
        "logoSharing": "Logo & Delen",
        "theme": "Weergave"
      },
      "bookmarks": {
        "title": "Sectie",
        "bookmark": "Bladwijzer",
        "intro": "Bladwijzers zijn links naar verhaalsecties die worden getoond in de header. Het creëren van beknopte bladwijzers voor de belangrijkste onderdelen van uw verhaal helpt lezers zich te oriënteren.",
        "sequentialDefault": "Verhaalsectie (geen tekst gevonden)",
        "immersiveDefault": "Meeslepende sectie (geen tekst gevonden)",
        "titleDefault": "Titelsectie (geen tekst gevonden)",
        "coverDefault": "Omslagsectie (geen tekst gevonden)",
        "coverAppendage": "(Omslag)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Gebruik ${ESRI} logo",
        "useOrgLogo": "Gebruik het logo van mijn organisatie",
        "useOrgLogoHelp": "Gebruik het logo opgegeven door uw beheerder",
        "logoLink": "Logolink",
        "logoUploadProgress": "Logo-upload bezig",
        "logoUploadSuccess": "Logo met succes geüpload",
        "logoUploadError": "Logo-upload mislukt, terug naar ${ESRI} logo",
        "customHeaderText": "Tagline",
        "taglineLinkDisabledTooltip": "Voer een tagline in om de koppeling in te schakelen",
        "link": "Taglinekoppeling",
        "enableSocialSharing": "Knop Delen weergeven"
      },
      "appearance": {
        "themeLabel": "Thema",
        "fontLabel": "Lettertypen",
        "previewLabel": "Voorbeeld",
        "fontsTitleLabel": "Titels",
        "fontsBodyLabel": "Hoofdtekst",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privé",
      "btnOrg": "Organisatie",
      "btnPublic": "Openbaar",
      "btnEveryone": "Iedereen"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Opslaan",
      "buttonSaved": "Opgeslagen",
      "buttonError": "Opslaan is mislukt",
      "buttonShare": "Delen",
      "buttonSettings": "Instellingen",
      "settingsLogoError": "Er is een probleem met uw logo. Klik voor meer informatie.",
      "buttonHelp": "Krijg hulp of Geef feedback op GeoNet",
      "buttonPreview": "Verhaal bekijken",
      "buttonHealth": "Gezondheidsrapport",
      "manageStories": "Mijn Verhalen beheren",
      "closeWithPendingChange": "Weet u zeker dat u deze actie wilt bevestigen? Uw wijzigingen gaan verloren.",
      "coverLabel": "Omslag",
      "creditsLabel": "Credits",
      "betaFeedback": "Feedback",
      "betaNote": "Laat ons weten wat u denkt van ${APP_NAME} of als er iets niet werkt zoals u verwacht.",
      "notSharedNote": "Uw verhaal is niet gedeeld, alleen u kunt het zien",
      "organizationWarning": "Om ervoor te zorgen dat dit verhaal kan worden bekeken door anderen moet u ook de scenes, scenelagen en embedded apps delen met uw organisatie. Kaarten en kaartlagen worden automatisch gedeeld.",
      "publicWarning": "Om ervoor te zorgen dat dit verhaal kan worden bekeken door anderen moet u ook de scenes, scenelagen en embedded apps delen met Iedereen. Kaarten en kaartlagen worden automatisch gedeeld.",
      "addTitleNote": "Voeg een titel toe aan de omslag om op te slaan",
      "saveError": "Er is een fout opgetreden met het opslaan van uw verhaal.",
      "duplicate": "Dupliceren",
      "organize": "Rangschikken",
      "done": "Gereed",
      "invite": "Terwijl u uw verhaal bouwt, zullen de secties hier verschijnen...",
      "mystoriestooltip": "Cascade Builder waarschuwt u voor problemen in uw verhaal en helpt u ze op te lossen. Scenes en embedded apps worden niet gecontroleerd, dus controleer ze handmatig."
    },
    "immersiveViewPanel": {
      "transition": "Transitie",
      "chooseTransition": "Kies overgang",
      "fade": "Vervagen",
      "fadeSlow": "Langzaam vervagen",
      "swipeVertical": "Verticaal vegen",
      "swipeHorizontal": "Horizontaal vegen",
      "none": "Geen",
      "disabledConsecutiveSameMedia": "Niet beschikbaar wanneer opeenvolgende weergaven gebruik maken van dezelfde media",
      "disabledTooltipMap": "Om deze transitie te gebruiken, moeten de zichtbare lagen in beide weergaven verschillend zijn en moeten de andere kaarteigenschappen hetzelfde zijn",
      "disabledConsecutiveSameMap": "Niet beschikbaar wanneer opeenvolgende weergaven gebruik maken van dezelfde kaart",
      "disabledNotInBeta": "Niet beschikbaar wanneer opeenvolgende weergaven gebruik maken van dezelfde kaart",
      "disabledNonConsecutive": "Niet beschikbaar als er nog een optreden van deze media is die niet opeenvolgend is",
      "addMedia": "Media toevoegen",
      "invite": "Terwijl u uw meeslepende sectie bouwt, zullen de weergaves hier verschijnen..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Weergave",
        "manage": "Beheren",
        "size": "Grootte",
        "background": "Achtergrond",
        "mobile": "Mobiel",
        "issues": "Problemen",
        "fixIssues": "Problemen oplossen"
      },
      "manage": {
        "changeMedia": "Media wijzigen",
        "edit": "Bewerken",
        "editAside": "Opent in een nieuw browsertabblad. Na het opslaan van uw bewerkingen, dit verhaal opslaan en opnieuw laden om de wijzigingen te zien.",
        "remove": "Verwijderen",
        "altTextPlaceholder": "Voeg voor slechtzienden een beschrijving van deze media toe...",
        "altTextHelptip": "Alternatieve tekst is een beschrijving van visuele media die worden gebruikt door ondersteunende technologieën zoals schermleessoftware. Dit is optioneel, maar wordt aanbevolen om te voldoen aan richtlijnen voor webtoegankelijkheid, zoals WCAG en sectie 508."
      },
      "appearance": {
        "homeView": "Initiële weergave",
        "audio": "Audio",
        "on": "Aan",
        "muted": "Gedempt",
        "volumeAside": "De video zal automatische worden afgespeeld als lezer arriveert bij deze weergave. Als u het geluid dempt, kan de lezer het geluid niet inschakelen.",
        "view": "Weergeven",
        "resetLocation": "Locatie resetten",
        "resetLayers": "Lagen resetten",
        "clearPopup": "Pop-up wissen",
        "interaction": "Interactie",
        "interactionDisabled": "Interactie uitgeschakeld",
        "buttonToEnable": "Knop voor inschakelen",
        "interactionEnabled": "interactie Ingeschakeld",
        "interactionAside": "* Touch-apparaten tonen een interactieknop.",
        "slide": "Dia",
        "noSlides": "Geen dia's beschikbaar.",
        "mapExtentPrompt": "Werk de kaart bij om uw verhaal te vertellen, klikt u op het vinkje om de wijzigingen op te slaan"
      },
      "sectionAppearance": {
        "layout": "Lay-out",
        "theme": "Thema"
      },
      "size": {
        "small": "Klein",
        "medium": "Middel",
        "large": "Groot",
        "noCrop": "Hoge afbeeldingen niet bijsnijden",
        "noCropTallTooltip": "Hoge afbeeldingen niet bijsnijden creëert een dramatisch effect voor lezers zodat ze moeten scrollen om de gehele afbeelding te kunnen zien."
      },
      "background": {
        "noCrop": "Niet bijsnijden",
        "mostImportantPart": "Kies het belangrijkste punt",
        "cropExplanationImmersive": "Selecteer een punt op de afbeelding om te kiezen hoe uw afbeelding wordt bijgesneden op verschillende schermformaten. Het punt dat u selecteert zal altijd zichtbaar zijn. Vink 'Niet bijsnijden' aan als uw afbeelding volledig zichtbaar moet zijn.",
        "cropExplanation": "Selecteer een punt op de afbeelding om te kiezen hoe uw afbeelding wordt bijgesneden op verschillende schermformaten. Het punt dat u selecteert zal altijd zichtbaar zijn.",
        "color": "Kleur",
        "previews": "Voorbeelden"
      },
      "altMedia": {
        "alternativeMedia": "Alternatieve afbeelding voor mobiel",
        "explanation": "Bepaalde media worden niet ondersteund of werken mogelijk niet goed op mobiele apparaten. Gebruik dit paneel om een afbeelding te kiezen die in plaats van deze media getoond zal worden als uw verhaal op een telefoon of tablet weergegeven wordt.",
        "changeAltImage": "Afbeelding wijzigen",
        "uploadAltImage": "Andere afbeelding toevoegen"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Koppelen aan Content",
        "urls_short": "Koppeling",
        "contentType": {
          "error": "Geen geautoriseerde media.",
          "imageOnly": "In dit deel van het verhaal kunt u een afbeelding toevoegen.",
          "imageAndVideo": "In dit deel van het verhaal kunt u een afbeelding of een video toevoegen.",
          "imageVideoWebpage": "In dit deel van het verhaal kunt u een audiobestand, een afbeelding, een video of een webpagina toevoegen."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Zoeken naar \"${searchterm}\"...",
          "searchedFor": "Zoekenresultaten voor \"${searchterm}\"",
          "albumsOf": "${username}'s albums",
          "noPhotosFound": "Er zijn geen foto's die overeenstemmen met uw zoekopdracht. Probeer het nogmaals.",
          "noItemsFound": "Er zijn geen items die overeenstemmen met uw zoekopdracht. Probeer het nogmaals.",
          "noItemsInThisStory": "Er is nog geen content van ArcGIS toegevoegd aan dit verhaal.",
          "limitReached": "Er worden 100 items getoond. Als u niet gevonden hebt wat u zocht, probeer dan te zoeken op een trefwoord.",
          "galleryItems": {
            "uploadError": "Onze excuses, dit item kon niet worden geüpload."
          },
          "agol": {
            "remove1": "Verwijder deze ongebruikte afbeelding van uw ArcGIS account.",
            "remove2": "(Als u ze later wenst te gebruiken, moet u ze opnieuw uploaden.)",
            "removeFailed": "Verwijder deze niet-toegankelijke afbeelding uit deze lijst.",
            "modified": "Gewijzigd op ${date}",
            "uploaded": "Geüploaded op ${date}",
            "contentByAuthor": "${contentType} door ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Foto's verkennen op ${Picasa} of ${Google+}"
          },
          "flickr": {
            "photostream": "Fotostream",
            "searchAndBrowse": "Foto's zoeken en verkennen op ${Flickr}",
            "captionStarter": "Foto door ${USERNAME} op ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Foto's zoeken op ${Unsplash}",
            "photoBy": "Foto door ${username}",
            "userLink": "Ga naar ${username}'s ${Unsplash} pagina",
            "captionStarter": "Foto door ${USERNAME} op ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Koppelen met content op het web",
              "imageOnly": "Koppelen met een afbeelding op het web",
              "imageAndVideo": "Koppelen met een afbeelding of video op het web"
            },
            "linkText": {
              "imageOnly": "In het bovenstaande vak kunt u een rechtstreekse koppeling maken met een foto.",
              "imageAndVideo1": "In het bovenstaande vak kunt u een koppeling of iframe-code plakken voor een video op ${YouTube} of ${Vimeo}.",
              "imageAndVideo2": "U kunt ook een rechtstreekse koppeling maken met een foto.",
              "imageVideoWebpage1": "In het bovenstaande vak kunt u een koppeling of iframe-code plakken voor web content zoals een dynamische grafiek of video op ${YouTube} of ${Vimeo}.",
              "imageVideoWebpage2": "U kunt ook een rechtstreekse koppeling maken met een foto, video, geluidsbestand, internetpagina of webapplicatie.",
              "ender": "Gebruik altijd veilige (https) links. Als uw content geen https ondersteunt, voeg dan een link toe in de tekst van uw verhaal, zodat de lezers het op een nieuw browsertabblad kunnen bekijken.",
              "httpsError": "Koppeling moet beginnen met HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Pagina laden d.m.v. een beveiligde verbinding (https)",
              "embedProtocolWarning1": "Als deze pagina niet in uw verhaal geladen wordt, kan hij geïnbed worden omwille van webbeveiligingsredenen.",
              "embedProtocolWarning2": "Als deze pagina niet in uw verhaal geladen wordt, vink deze optie dan uit en probeer nogmaals. Als de pagina nog steeds niet geladen kan worden, dan kan het niet geïnbed worden omwille van webbeveiligingsredenen.",
              "embedProtocolWarning3": "Als alternatief kunt u een koppeling in uw verhaal toevoegen om de pagina te openen in een nieuw browsertabblad. ${linkText}",
              "linkText": "Meer informatie."
            },
            "placeholder": "${https://}... of ${<iframe>}",
            "uploadErrors": {
              "generic": "Er is iets misgegaan met het ingevoerde adres. Probeer het nogmaals.",
              "imageOnly1": "In dit deel van het verhaal moet u een afbeelding gebruiken.",
              "imageOnly2": "Geef een koppeling naar een afbeelding op (.jpg, .png, .gif), of kies een afbeelding van ${ArcGIS}, ${Flickr}, ${Google+} of ${Unsplash}.",
              "imageAndVideo1": "In dit deel van het verhaal moet u een afbeelding of video gebruiken.",
              "imageAndVideo2": "Geef een koppeling naar een afbeelding op (.jpg, .png, .gif) of een video op ${YouTube} of ${Vimeo}, of kies een afbeelding van ${ArcGIS}, ${Flickr}, ${Google+} of ${Unsplash}.",
              "badFormat": "De koppeling naar het bestand dat u tracht toe te voegen is niet goed geformatteerd.",
              "inaccessible": "Het bestand dat u tracht toe te voegen ontbreekt of is niet toegankelijk.",
              "tryAgain": "Controleer het adres en probeer het nogmaals.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "image",
                "generic": "media"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Als u een dienst van derden gebruikt, gaat u akkoord met de servicevoorwaarden van die derden: ",
          "googlePhotos": {
            "placeholder": "E-mail of ${Picasa}/${Google+} ID",
            "helpText": "U kunt foto's aan uw verhaal toevoegen die geüploaded zijn naar ${Picasa} of ${Google+}. ${helpLinkText} over het gebruik van afbeeldingen in uw ${Google} account in uw verhalen.",
            "helpLinkText": "Meer weten",
            "cannotFindUser": "Kan gebruiker ${username} niet vinden. Probeer het nogmaals."
          },
          "unsplash": {
            "placeholder": "Foto's zoeken",
            "aboutText": "${Unsplash} is een gratis beheerde verzameling van hoogkwalitatieve foto's.",
            "copyrightText": "Alle foto's zijn gelicentieerd onder de licentie voor ${Unsplash}. Meer informatie op ${moreInfoLink}.",
            "moreInfoLink": "hier"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} account",
              "text": "Alle ${Flickr}"
            },
            "placeholders": {
              "user": "Account zoeken",
              "userText": "Dit account doorzoeken op foto's",
              "text": "Foto's zoeken"
            },
            "errors": {
              "cannotFindUser": "Kan gebruiker ${username} niet vinden.",
              "noUserPhotos": "${username} heeft geen openbare foto's.",
              "didYouMean": "Bedoelde u ${username}?",
              "generalUserError": "Er ging iets mis bij het zoeken naar gebruiker ${username}."
            },
            "licenses": {
              "licenseLabel": "Licentie: ",
              "public": "Openbaar domein",
              "commercial": "OK voor commercieel gebruik",
              "nonCommercial": "OK voor niet-commercieel gebruik",
              "reserved": "Alle rechten voorbehouden",
              "any": "Elke licentie"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Dit verhaal",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portaal",
              "myOrg": "${orgname} organisatie",
              "myContent": "Mijn Content"
            },
            "createContent": {
              "createNewMap": "Een Nieuwe kaart maken",
              "or": "OF",
              "dragAndDropImage": "Afbeeldingen verslepen",
              "dragAndDropImageAudio": "Afbeeldingen of audiobestanden verslepen",
              "uploadButton": "Bladeren",
              "agolInfo": "Geüploade beelden en audiobestanden zijn alleen toegankelijk binnen uw verhaal.",
              "saveBeforeUpload": "Zodra u dit verhaal opgeslagen hebt, kunt u hier afbeeldingen en geluidsbestanden uploaden naar ArcGIS.",
              "fileExtsImage": "Ondersteunde types: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Ondersteunde types: png, jpg, gif, bmp, mp3.",
              "maxSize": "Max 10 MB per bestand."
            },
            "filterAndSort": {
              "webmap": "Webmap",
              "webscene": "Webscene",
              "image": "Afbeelding",
              "audio": "Audiobestand",
              "date": "Datum",
              "sortByDate": "Sorteren op datum",
              "title": "Titel",
              "sortByTitle": "Sorteren op titel",
              "views": "Weergaven",
              "search": "Zoeken op trefwoord of ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Kaart bewerken",
      "unauthorizedDomain": "U bevindt zich niet op een gemachtigd domein om de kaarteditor te gebruiken",
      "loading": "Even geduld terwijl we de kaarteditor laden",
      "saving": "De kaart opslaan",
      "success": "Kaart opgeslagen",
      "cancelTitle": "Niet-bewaarde wijzigingen verwijderen?",
      "errorSave": "Kan de kaart niet opslaan. Probeer het opnieuw.",
      "loadFail": "Het spijt ons, de kaarteditor kan niet worden geladen",
      "close": "Sluiten",
      "save": "Opslaan",
      "confirm": "Ja, kaart sluiten",
      "deny": "Nee, blijf werken"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Ga hier verder met uw verhaal..."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Media",
        "title": "Titel",
        "immersive": "Meeslepend"
      },
      "link": {
        "invite": "Plak of typ een koppeling..."
      },
      "color": {
        "choose": "kies",
        "cancel": "annuleren",
        "clear": "Kleur wissen"
      }
    },
    "imageGallery": {
      "addImage": "Andere afbeelding toevoegen",
      "moveBackward": "Achteruit verplaatsen",
      "moveForward": "Vooruit verplaatsen"
    },
    "cover": {
      "titlePrompt": "Voer de titel van uw verhaal in...",
      "subtitlePrompt": "Scroll naar beneden om te beginnen of voer een optionele ondertitel in",
      "mediaPlaceholder": "Voeg uw afbeelding of video toe",
      "saveError": "Opslaan mislukt, u hebt al een item met deze titel"
    },
    "credits": {
      "sectionInvite": "Voeg een creditssectie toe",
      "warning": "Beide velden moeten worden ingevuld",
      "content": "Content...",
      "source": "Bron...",
      "linkPrompt": "Optionele koppeling...",
      "introductionPlaceholder": "Voer een optionele introductie toe aan uw creditssectie..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Thema"
      },
      "panelConfig": {
        "position": "Positie",
        "theme": "Thema",
        "size": "Grootte",
        "background": "Achtergrond",
        "layout": "Scrollen (voor alle panels)"
      }
    },
    "title": {
      "placeholder": "Voer een titel in..."
    },
    "media": {
      "mediaUpload": "Media-upload bezig...",
      "mediaUploadSuccess": "Media succesvol geüpload",
      "mediaUploadFail": "Uploaden media mislukt"
    },
    "controller": {
      "sectionOrganize": "U hebt de secties georganiseerd",
      "immersiveOrganize": "U hebt de weergaven georganiseerd",
      "sectionDelete": "U hebt een sectie verwijderd",
      "viewDelete": "U hebt een weergave verwijderd"
    },
    "notification": {
      "cancel": "Annuleren",
      "close": "Sluiten",
      "undo": "Ongedaan maken"
    },
    "sections": {
      "sequence": "Verhaal",
      "immersive": "Meeslepend",
      "title": "Titel"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "image",
        "audio": "audiobestand",
        "webmap": "kaart",
        "webscene": "scene",
        "video": "video",
        "content": "inhoud",
        "webpage": "webpagina"
      },
      "placeholders": {
        "generic": "Deze content is niet toegankelijk.",
        "deleted": "Dit item is verwijderd.",
        "inaccessible": "Deze content is niet toegankelijk.",
        "unauthorized": "U bent niet gemachtigd om deze content te bekijken.",
        "unshared": "Dit item wordt niet hetzelfde gedeeld als uw verhaal.",
        "othersUnshared": "Dit item wordt niet hetzelfde gedeeld als uw verhaal.",
        "subscriptionContent": "Deze kaart bevat een abonnementlaag.",
        "premiumContent": "Deze kaart bevat een premiumlaag.",
        "secureService": "Deze kaart bevat een beveiligde laag."
      },
      "contentIssues": {
        "noAltImage": "Media werken mogelijk niet op mobiele apparaten",
        "noAltImageUnsupported": "Media niet ondersteund op mobiele apparaten",
        "noAltImageWarning": "Media werken mogelijk niet op mobiele apparaten",
        "altImageBroken": "De alternatieve afbeelding die gedefinieerd is voor dit media-item is niet toegankelijk",
        "httpMedia": "Onbeveiligde media",
        "httpContent": "Onbeveiligde content"
      },
      "contentWarnings": {
        "noAltImage": "Zorg ervoor dat u uw verhaal op mobiele apparaten test voordat u het deelt. Als deze media niet werken zoals verwacht, gebruik dan de onderstaande knop om een ​​alternatieve afbeelding toe te voegen die wordt weergegeven wanneer het verhaal wordt bekeken op een telefoon of tablet.",
        "noAltImageUnsupported": "Deze media werken niet op mobiele apparaten. Gebruik de onderstaande knop om een alternatieve afbeelding toe te voegen die getoond zal worden als het verhaal wordt weergegeven op een telefoon of tablet.",
        "noAltImageWarning": "Zorg ervoor dat u uw verhaal op mobiele apparaten test voordat u het deelt. Als deze media niet werken zoals verwacht, gebruik dan de onderstaande knop om een ​​alternatieve afbeelding toe te voegen die wordt weergegeven wanneer het verhaal wordt bekeken op een telefoon of tablet.",
        "noAltImageAlt": "Dit type media wordt niet ondersteund of werkt mogelijk niet goed op mobiele apparaten. Selecteer in het tabblad Mobiel een alternatieve afbeelding die getoond zal worden als het verhaal wordt weergegeven op een telefoon of tablet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Deze audio biedt geen ondersteuning voor HTTPS. Verwijder deze uit uw verhaal of vervang deze door een koppeling.",
        "httpAudioUncheckable": "Deze audio heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om te proberen om een beveiligde HTTPS URL te gebruiken voor deze audio. Als dat niet werkt, verwijder de audio uit uw verhaal of vervang deze door een hyperlink.",
        "httpAudioFixable": "Deze audio heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om een beveiligde HTTPS URL te gebruiken voor deze audio.",
        "httpWebpageUnfixable": "Deze webpagina biedt geen ondersteuning voor HTTPS. Verwijder deze uit uw verhaal of vervang deze door schermafbeelding of een koppeling.",
        "httpWebpageUncheckable": "Deze webpagina heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om te proberen om een beveiligde HTTPS URL te gebruiken voor deze webpagina. Als dat niet werkt, verwijder de webpagina uit uw verhaal of vervang deze door een hyperlink.",
        "httpWebpageFixable": "Deze webpagina heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om een beveiligde HTTPS URL te gebruiken voor deze webpagina.",
        "httpVideoUnfixable": "Deze video biedt geen ondersteuning voor HTTPS. Verwijder deze uit uw verhaal of vervang deze door schermafbeelding of een koppeling.",
        "httpVideoUncheckable": "Deze video heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om te proberen om een beveiligde HTTPS URL te gebruiken voor deze video. Als dat niet werkt, verwijder de video uit uw verhaal of vervang deze door een hyperlink.",
        "httpVideoFixable": "Deze video heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om een beveiligde HTTPS URL te gebruiken voor deze video.",
        "httpImageUnfixable": "Deze afbeelding biedt geen ondersteuning voor HTTPS. Verwijder deze uit uw verhaal of vervang deze door een koppeling.",
        "httpImageUncheckable": "Deze afbeelding heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om te proberen om een beveiligde HTTPS URL te gebruiken voor deze afbeelding. Als dat niet werkt, verwijder de afbeelding uit uw verhaal of vervang deze door een hyperlink.",
        "httpImageFixable": "Deze afbeelding heeft een onbeveiligde (HTTP) URL. Klik op de onderstaande knop om een beveiligde HTTPS URL te gebruiken voor deze afbeelding.",
        "httpLayer": "Deze laag heeft een onbeveiligde (HTTP) URL.",
        "inaccessibleLogo": "Dit logo is niet toegankelijk. Vervang het door een andere afbeelding.",
        "httpLogoUnfixable": "Dit logo biedt geen ondersteuning voor HTTPS. Vervang het door een andere afbeelding.",
        "httpLogoFixable": "Dit logo heeft een onbeveiligde (HTTP) URL. Gebruik een HTTPS URL voor het logo.",
        "httpLogoUncheckable": "Dit logo heeft een onbeveiligde (HTTP) URL. Gebruik een HTTPS URL voor het logo, of vervang het door een andere afbeelding."
      },
      "tooltips": {
        "httpAudioFixable": "Klik op de knop om een beveiligde HTTPS URL te gebruiken voor deze audio.",
        "httpAudioUncheckable": "Probeer een beveiligde HTTPS URL te gebruiken voor deze audio. Als dat niet werkt, verwijder de audio uit uw verhaal of vervang deze door een koppeling.",
        "httpWebpageFixable": "Klik op de knop om een beveiligde HTTPS URL te gebruiken voor deze webpagina.",
        "httpWebpageUncheckable": "Probeer een HTTPS URL te gebruiken voor deze webpagina. Als dat niet werkt, verwijder de webpagina uit uw verhaal of vervang deze door een schermafbeelding of een koppeling.",
        "httpVideoFixable": "Klik op de knop om een beveiligde HTTPS URL te gebruiken voor deze video.",
        "httpVideoUncheckable": "Probeer een HTTPS URL te gebruiken voor deze video. Als dat niet werkt, verwijder de video uit uw verhaal of vervang deze door een schermafbeelding of een koppeling.",
        "httpImageFixable": "Klik op de knop om een beveiligde HTTPS URL te gebruiken voor deze afbeelding.",
        "httpImageUncheckable": "Probeer een HTTPS URL te gebruiken voor deze afbeelding. Als dat niet werkt, verwijder de afbeelding uit uw verhaal of vervang deze door een koppeling.",
        "httpLayerMyMap": "Bezoek de itempagina van de kaart om deze laag bij te werken voor gebruik met HTTPS. Als de laag niet kan worden bijgewerkt, verwijder deze dan uit de kaart.",
        "httpLayerNotMyMap": "Maak een kopie van de kaart en werk deze laag bij voor gebruik met HTTPS. Als de laag niet kan worden bijgewerkt, verwijder deze dan uit de kaart.",
        "clickLearnMore": "Klik voor meer informatie wilt."
      },
      "fixButtons": {
        "agolItemPage": "Itempagina",
        "openTheMap": "Kaart openen",
        "updateAudio": "Audio URL herstellen",
        "updateWebpages": "Webpagina URL herstellen",
        "updateVideos": "Video URL herstellen",
        "updateImages": "Afbeelding URL herstellen"
      },
      "mapIssues": {
        "fixButton": "Problemen oplossen",
        "nofixButton": "Problemen",
        "mapLabel": "Kaart:",
        "summaries": {
          "unshared": "Ongedeelde content",
          "othersUnshared": "Ongedeelde content van een ander",
          "subscriptionContent": "Abonnee content",
          "premiumContent": "Premium Content",
          "secureContent": "Beveiligde content",
          "deleted": "Verwijderde content",
          "inaccessible": "Ontoegankelijke content",
          "unauthorized": "Ongeautoriseerde content"
        },
        "descriptions": {
          "unshared": "Deze content wordt niet hetzelfde gedeeld als uw verhaal.",
          "othersUnshared": "Deze content is van iemand anders en wordt niet hetzelfde gedeeld als uw verhaal.",
          "othersUnsharedAuthorized": "Deze content is van iemand anders, maar u mag het delen.",
          "inaccessible": "Deze content is niet toegankelijk.",
          "deleted": "Deze content is verwijderd.",
          "unauthorized": "U bent niet gemachtigd om deze content te bekijken.",
          "popupFeatureLayer": "De pop-ups van een tiled laag komen uit een objectlaag die niet hetzelfde wordt gedeeld als uw verhaal.",
          "subscriptionContent": "U moet abonneecontent voor openbaar gebruik toestaan.",
          "premiumContent": "U moet premium content voor openbaar gebruik toestaan.",
          "secureService": "Beveiligde content is niet toegankelijk voor uw lezers.",
          "missingItemWarning": "Het item geassocieerd met deze laag is verwijderd."
        },
        "tooltips": {
          "unshared": "Klik hier voor meer informatie over het delen.",
          "othersUnshared": "U hebt geen rechten om content van anderen te delen. Vraag de eigenaar om het te delen, verwijder de kaart uit uw verhaal of bewerk de kaart om de lagen die niet van u zijn te verwijderen. Klik hier voor meer informatie over het bewerken van kaarten.",
          "inaccessible": "Verwijder deze kaart uit uw verhaal of bewerken het om de ontoegankelijke lagen te verwijderen. Klik voor meer informatie over het bewerken van kaarten.",
          "deleted": "Verwijder deze kaart uit uw verhaal of bewerken het om de ontbrekende lagen te verwijderen. Klik voor meer informatie over het bewerken van kaarten.",
          "unauthorized": "Verwijder deze kaart uit uw verhaal of bewerken het om de ongeautoriseerde lagen te verwijderen. Klik voor meer informatie over het bewerken van kaarten.",
          "popupFeatureLayer": "De pop-ups van een tiled laag komen uit een objectlaag die niet hetzelfde wordt gedeeld als uw verhaal.",
          "subscriptionContent": "Abonneecontent verbruikt geen credits. Klik om meer te leren.",
          "premiumContent": "Credits worden in rekening gebracht bij uw organisatie elke keer dat iemand een premium laag in uw verhaal bekijkt. Klik voor meer informatie.",
          "secureService": "Verwijder de beveiligde content van uw verhaal, of klik om te zien hoe het gebruik van veilige content door anderen kan worden toegestaan.",
          "missingItemWarning": "Deze laag werkt nog steeds, maar de symbolen, pop-ups of de naam kunnen zijn veranderd. Bevestig dat de laag wordt weergegeven zoals verwacht, of verwijder het uit uw verhaal."
        },
        "fixButtons": {
          "share": "Delen",
          "hide": "Verbergen",
          "authorize": "Autoriseren",
          "remove": "Verwijderen",
          "help": "Hulp vragen",
          "ignore": "Negeren",
          "confirm": "Bevestigen",
          "edit": "Kaart bewerken"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Bepaalde kaarten en kaartlagen werden ook gedeeld.",
          "alsoSharedMaps": "Bepaalde kaarten werden ook gedeeld.",
          "alsoSharedLayers": "Bepaalde lagen werden ook gedeeld.",
          "sharedOthersContent": "U hebt uw beheerdersrechten gebruikt om de content van iemand anders te delen."
        }
      },
      "storyHealth": {
        "healthy": "Geen problemen",
        "notHealthy": "Problemen oplossen",
        "warnings": "Zie waarschuwingen"
      }
    },
    "saveErrorSocial": {
      "title": "Delen op social media",
      "panel1": "Uw verhaal wordt mogelijk niet goed weergegeven op social media omdat de titel van uw ArcGIS webapplicatie-item niet dezelfde is als uw verhaaltitel.",
      "panel1tooltip": "Door het definiëren van een titel, samenvatting en thumbnail-afbeelding, komt uw verhaal er als volgt uit te zien:",
      "panel2": "Welke titel zou u willen gebruiken op social media:",
      "panel2q1": "Verhaaltitel (aanbevolen)",
      "panel2q1tooltip": "Door deze optie te kiezen, wordt uw itemtitel aangepast aan uw verhaaltitel en worden verdere veranderingen in de builder gesynchroniseerd.",
      "panel2q2": "Itemtitel",
      "panel3": "Gebruik ${MYSTORIES} om de weergave op social media verder te verbeteren en voeg een samenvatting en thumbnail-afbeelding toe.",
      "panel4": "Waarschuw me niet opnieuw voor dit verhaal",
      "save": "Opslaan",
      "mystories": "My Stories"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Belangrijk bericht over internetbeveiliging en Story Maps",
      "s1h1": "Esri verbetert de beveiliging van Story Maps",
      "s1p1": "Uw Story Maps zijn live op internet en de webgemeenschap is altijd bezig om betere beveiliging tot stand te brengen en te implementeren. HTTPS, dat een beveiligde verbinding biedt voor inhoud die via internet wordt uitgezonden, is in opkomst als de verwachte manier om toegang te krijgen tot webcontent. De meeste moderne browsers tonen nu waarschuwingsberichten wanneer HTTP in plaats van HTTPS wordt gebruikt. Vanwege deze nieuwe norm raden we u ten zeerste aan HTTPS-koppelingen te gebruiken voor het schrijven en delen van Story Maps en alleen HTTPS-URL's te gebruiken bij het insluiten van webinhoud of het linken naar afbeeldingen in een Story Map.",
      "s1p2": "Praktisch gezien betekent dit dat een Story Map en alle bijbehorende inhoud (inclusief afbeeldingen, lagen, ingesloten apps en websites) toegankelijk moeten zijn via koppelingen die beginnen met HTTPS in plaats van HTTP. Dit zorgt voor de beste ervaring voor uw lezers, omdat de meeste webbrowsers aangeven dat uw verhalen veilig zijn.",
      "s2h1": "Wat moet ik doen?",
      "s2p1": "Esri werkt eraan om dit een gemakkelijke overgang te maken voor makers en lezers van de Story Map. Er zijn nu tools beschikbaar in de builders van Story Map en My Stories die u helpen onveilige inhoud (HTTP) in uw verhalen te vinden en aanbevelingen te doen voor de aanpak ervan. Controleer uw verhalen op onveilige inhoud en werk zo snel mogelijk bij naar HTTPS.",
      "action1": "Sluiten",
      "action2": "Controleer nu mijn verhalen",
      "action3": "Meer weten",
      "floatingNotification": "Dit verhaal bevat onbeveiligde (HTTP) content. Controleer en corrigeer deze problemen."
    }
  }
});