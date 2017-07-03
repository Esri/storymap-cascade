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
    "builderPanel": {
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
        "remove": "Verwijderen"
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
        "alternativeMedia": "Alternatieve media",
        "explanation": "Bepaalde media wordt niet ondersteund of werkt mogelijk niet goed op mobiele apparaten. Gebruik dit paneel om een alternatief, meer mobielvriendelijk alternatief te kiezen dat in plaats van deze media getoond zal worden als uw verhaal op een telefoon of tablet weergegeven wordt.",
        "changeAltImage": "Afbeelding wijzigen",
        "uploadAltImage": "Afbeelding toevoegen"
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
      "imageUpload": "Afbeelding-upload bezig...",
      "imageUploadSuccess": "Afbeelding met succes geüpload",
      "imageUploadFail": "Uploaden afbeelding mislukt"
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
        "webmap": "kaart",
        "webscene": "scene",
        "video": "video",
        "content": "content",
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
        "noAltImage": "Media niet ondersteund op mobiele apparaten",
        "altImageBroken": "De alternatieve afbeelding die gedefinieerd is voor dit media-item is niet toegankelijk"
      },
      "contentWarnings": {
        "noAltImage": "Dit type van media wordt niet ondersteund op mobiele apparaten. Selecteer een alternatieve afbeelding die getoond zal worden als het verhaal wordt weergegeven op mobiele apparaten.",
        "noAltImageAlt": "Dit type van media wordt niet ondersteund op mobiele apparaten. Selecteer in het tabblad Mobiel een alternatieve afbeelding die getoond zal worden als het verhaal wordt weergegeven op mobiele apparaten."
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
    }
  }
});