/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Applica",
      "close": "Chiudi"
    },
    "header": {
      "sharingNotAvailable": "Opzione non disponibile fino alla condivisione della storia",
      "edit": "Modifica"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Segnalibri",
        "logoSharing": "Logo e condivisione",
        "theme": "Aspetto"
      },
      "bookmarks": {
        "title": "Sezione",
        "bookmark": "Segnalibro",
        "intro": "I segnalibri sono collegamenti a sezioni di storie mostrati nell'intestazione. La creazione di segnalibri concisi per le sezioni principali della storia aiuta i lettori a orientarsi.",
        "sequentialDefault": "Sezione narrativa (testo non trovato)",
        "immersiveDefault": "Sezione immersiva (testo non trovato)",
        "titleDefault": "Sezione del titolo (testo non trovato)",
        "coverDefault": "Sezione della copertina (testo non trovato)",
        "coverAppendage": "(Copertina)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Usa il logo ${ESRI}",
        "useOrgLogo": "Usa il logo della mia organizzazione",
        "useOrgLogoHelp": "Usa il logo fornito dall'amministratore",
        "logoLink": "Collegamento al logo",
        "logoUploadProgress": "Caricamento del logo in corso",
        "logoUploadSuccess": "Logo caricato",
        "logoUploadError": "Impossibile caricare il logo. Si tornerà al logo ${ESRI}",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Inserire uno slogan per abilitare il collegamento",
        "link": "Collegamento allo slogan",
        "enableSocialSharing": "Visualizza il pulsante di condivisione"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Caratteri",
        "previewLabel": "Anteprima",
        "fontsTitleLabel": "Titoli",
        "fontsBodyLabel": "Corpo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Copertina",
      "creditsLabel": "Crediti",
      "betaFeedback": "Commenti e suggerimenti",
      "betaNote": "Esprimi la tua opinione su ${APP_NAME} oppure indica se qualcosa non funziona come previsto.",
      "notSharedNote": "La storia non è condivisa, è visualizzabile solo dall'utente corrente.",
      "organizationWarning": "Affinché la storia possa essere visualizzata da altri, è anche necessario condividerne scene, layer delle scene e app integrate della propria organizzazione. Le mappe e i layer delle mappe vengono condivisi automaticamente.",
      "publicWarning": "Affinché la storia possa essere visualizzata dagli altri, è anche necessario condividerne scene, layer delle scene e app integrate con tutti. Le mappe e i layer delle mappe vengono condivisi automaticamente.",
      "addTitleNote": "Aggiungi un titolo alla copertina da salvare",
      "saveError": "Si è verificato un errore durante il salvataggio della storia.",
      "duplicate": "Duplica",
      "organize": "Organizza",
      "done": "Fine",
      "invite": "Una volta creata la storia, le sezioni saranno visualizzate qui...",
      "mystoriestooltip": "Il generatore Cascade avvisa in caso di problemi nella storia fornendo indicazioni per risolverli. Le scene e le app incorporate non vengono controllate, quindi occorre controllarle manualmente."
    },
    "immersiveViewPanel": {
      "transition": "Transizione",
      "fade": "Dissolvenza",
      "fadeSlow": "Dissolvenza lenta",
      "swipeVertical": "Scorrimento verticale",
      "swipeHorizontal": "Scorrimento orizzontale",
      "none": "Nessuno",
      "disabledConsecutiveSameMedia": "Non disponibile quando viste consecutive utilizzano gli stessi elementi multimediali",
      "disabledTooltipMap": "Per utilizzare questa transizione, i layer visibili in entrambe le viste devono essere diversi e le proprietà dell'altra mappa devono essere uguali",
      "disabledConsecutiveSameMap": "Non disponibile quando due viste consecutive utilizzano la stessa mappa",
      "disabledNotInBeta": "Non disponibile quando due viste consecutive utilizzano la stessa mappa",
      "disabledNonConsecutive": "Non disponibile in quanto è presente un'altra occorrenza di questi elementi multimediali che non è consecutiva",
      "addMedia": "Aggiungi elementi multimediali",
      "invite": "Una volta creata la sezione immersiva, le viste saranno visualizzate qui..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aspetto",
        "manage": "Gestisci",
        "size": "Dimensione",
        "background": "Sfondo",
        "mobile": "Mobile",
        "issues": "Problemi",
        "fixIssues": "Risolvi i problemi"
      },
      "manage": {
        "changeMedia": "Cambia elementi multimediali",
        "edit": "Modifica",
        "editAside": "Si apre in una nuova finestra del browser. Dopo aver salvato le modifiche, salvare e ricaricare la storia per vedere le modifiche.",
        "remove": "Rimuovi"
      },
      "appearance": {
        "homeView": "Vista iniziale",
        "audio": "Audio",
        "on": "Sì",
        "muted": "Muto",
        "volumeAside": "Il video viene riprodotto automaticamente quando un lettore arriva in questa vista. Se l'audio viene disattivato, il lettore non sarà in grado di abilitarlo.",
        "view": "Visualizza",
        "resetLocation": "Reimposta posizione",
        "resetLayers": "Reimposta layer",
        "clearPopup": "Cancella popup",
        "interaction": "Interazione",
        "interactionDisabled": "Interazione disabilitata",
        "buttonToEnable": "Pulsante per abilitare",
        "interactionEnabled": "Interazione abilitata",
        "interactionAside": "* I dispositivi touch mostreranno un pulsante di interazione.",
        "slide": "Diapositiva",
        "noSlides": "Nessuna diapositiva disponibile.",
        "mapExtentPrompt": "Aggiornare la mappa per raccontare la storia e fare clic sul segno di spunta per salvare le modifiche"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Tema"
      },
      "size": {
        "small": "Piccolo",
        "medium": "Medio",
        "large": "Grande",
        "noCrop": "Non tagliare immagini alte",
        "noCropTallTooltip": "La mancata riduzione in altezza di immagini grandi è un fattore di disturbo per i lettori, che devono così scorrere l'immagine per visualizzarla per intero."
      },
      "background": {
        "noCrop": "Non ritagliare",
        "mostImportantPart": "Scegliere il punto più importante",
        "cropExplanationImmersive": "Selezionare un punto sull'immagine per decidere in che modo sarà ritagliata in base alle diverse dimensioni dello schermo. Il punto selezionato sarà sempre visibile. Selezionare la casella Non ritagliare se è necessario visualizzare l'immagine intera.",
        "cropExplanation": "Selezionare un punto sull'immagine per decidere in che modo sarà ritagliata in base alle diverse dimensioni dello schermo. Il punto selezionato sarà sempre visibile.",
        "color": "Colore",
        "previews": "Anteprime"
      },
      "altMedia": {
        "alternativeMedia": "File multimediali alternativi",
        "explanation": "Alcuni file multimediali non sono supportati o potrebbero non funzionare correttamente sui dispositivi mobili. Impiegare questo riquadro per selezionare un elemento alternativo e compatibile con i dispositivi mobili, che sarà mostrato al posto di questi file multimediali quando la storia viene visualizzata su un telefono o un tablet.",
        "changeAltImage": "Modifica immagine",
        "uploadAltImage": "Aggiungi immagine"
      }
    },
    "imageGallery": {
      "addImage": "Aggiungi altra immagine",
      "moveBackward": "Sposta indietro",
      "moveForward": "Sposta avanti"
    },
    "cover": {
      "titlePrompt": "Immetti il titolo della storia...",
      "subtitlePrompt": "Scorrere verso il basso per iniziare o immettere un sottotitolo opzionale",
      "mediaPlaceholder": "Aggiungere un'immagine o un video",
      "saveError": "Salvataggio non riuscito. È già presente un elemento con questo titolo"
    },
    "credits": {
      "sectionInvite": "Aggiungi una sezione dei crediti",
      "warning": "È necessario compilare entrambi i campi",
      "content": "Contenuto...",
      "source": "Origine...",
      "linkPrompt": "Collegamento opzionale...",
      "introductionPlaceholder": "Immetti un'introduzione opzionale nella sezione dei crediti..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posizione",
        "theme": "Tema",
        "size": "Dimensione",
        "background": "Sfondo",
        "layout": "Scorrimento (per tutti i pannelli)"
      }
    },
    "title": {
      "placeholder": "Immetti un titolo..."
    },
    "media": {
      "imageUpload": "Caricamento dell'immagine in corso...",
      "imageUploadSuccess": "Immagine caricata",
      "imageUploadFail": "Impossibile caricare l'immagine"
    },
    "controller": {
      "sectionOrganize": "Le sezioni sono state organizzate",
      "immersiveOrganize": "Le viste sono state organizzate",
      "sectionDelete": "Una sezione è stata eliminata",
      "viewDelete": "Una vista è stata eliminata"
    },
    "notification": {
      "cancel": "Annulla",
      "close": "Chiudi",
      "undo": "Annulla"
    },
    "sections": {
      "sequence": "Narrativo",
      "immersive": "A schermo intero",
      "title": "Titolo"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "immagine",
        "webmap": "mappa",
        "webscene": "scena",
        "video": "video",
        "content": "contenuto",
        "webpage": "pagina Web"
      },
      "placeholders": {
        "generic": "Il contenuto non è accessibile.",
        "deleted": "Questo elemento è stato eliminato.",
        "inaccessible": "Il contenuto non è accessibile.",
        "unauthorized": "Non si è autorizzati a visualizzare questo contenuto.",
        "unshared": "Questo elemento non è condiviso come la storia.",
        "othersUnshared": "Questo elemento non è condiviso come la storia.",
        "subscriptionContent": "Questa mappa contiene un layer abbonati.",
        "premiumContent": "Questa mappa contiene un layer premium.",
        "secureService": "Questa mappa contiene un layer di protezione."
      },
      "contentIssues": {
        "noAltImage": "File multimediale non supportato sui dispositivi mobili",
        "altImageBroken": "L'immagine alternativa definita per quest'elemento multimediale non è accessibile"
      },
      "contentWarnings": {
        "noAltImage": "Questo tipo di elemento multimediale non è supportato sui dispositivi mobili. Fornire un'immagine alternativa da mostrare quando la storia viene visualizzata sui dispositivi mobili.",
        "noAltImageAlt": "Questo tipo di elemento multimediale non è supportato sui dispositivi mobili. Nella scheda dei dispositivi mobili, fornire un'immagine alternativa da mostrare quando la storia viene visualizzata sui dispositivi mobili."
      },
      "mapIssues": {
        "fixButton": "Risolvi i problemi",
        "nofixButton": "Problemi",
        "mapLabel": "Mappa:",
        "summaries": {
          "unshared": "Contenuto non condiviso",
          "othersUnshared": "Contenuto non condiviso di un altro utente",
          "subscriptionContent": "Contenuto per abbonati",
          "premiumContent": "Contenuto Premium",
          "secureContent": "Contenuto protetto",
          "deleted": "Contenuto eliminato",
          "inaccessible": "Contenuto non accessibile",
          "unauthorized": "Contenuto non autorizzato"
        },
        "descriptions": {
          "unshared": "Questo contenuto non è condiviso nello stesso modo della storia.",
          "othersUnshared": "Questo contenuto appartiene a un altro utente e non è condiviso nello stesso modo della storia.",
          "othersUnsharedAuthorized": "Questo contenuto appartiene a un altro utente, ma si è autorizzati a condividerlo.",
          "inaccessible": "Il contenuto non è accessibile.",
          "deleted": "Questo contenuto è stato eliminato.",
          "unauthorized": "Non si è autorizzati a visualizzare questo contenuto.",
          "popupFeatureLayer": "Le finestre popup affiancate del layer derivano da un feature layer che non è condiviso nello stesso modo della storia.",
          "subscriptionContent": "È necessario autorizzare il contenuto per abbonati per l'uso pubblico.",
          "premiumContent": "È necessario autorizzare il contenuto Premium per l'uso pubblico.",
          "secureService": "Il contenuto protetto non è accessibile ai propri lettori.",
          "missingItemWarning": "L'elemento associato a questo layer è stato eliminato."
        },
        "tooltips": {
          "unshared": "Fare clic per ulteriori informazioni sulla condivisione.",
          "othersUnshared": "Non si dispone delle autorizzazioni per condividere il contenuto di altri. Chiedere al proprietario di condividerlo, rimuovere la mappa dalla storia o modificare la mappa per rimuovere i layer di cui non si è proprietari. Fare clic per ulteriori informazioni sulla modifica delle mappe.",
          "inaccessible": "Rimuovere questa mappa dalla storia o modificarla per rimuovere i layer non accessibili. Fare clic per ulteriori informazioni sulla modifica delle mappe.",
          "deleted": "Rimuovere questa mappa dalla storia o modificarla per rimuovere i layer mancanti. Fare clic per ulteriori informazioni sulla modifica delle mappe.",
          "unauthorized": "Rimuovere questa mappa dalla storia o modificarla per rimuovere i layer non autorizzati. Fare clic per ulteriori informazioni sulla modifica delle mappe.",
          "popupFeatureLayer": "Le finestre popup affiancate del layer derivano da un feature layer che non è condiviso nello stesso modo della storia.",
          "subscriptionContent": "Il contenuto per abbonati non utilizza crediti. Fare clic per ulteriori informazioni.",
          "premiumContent": "I crediti verranno addebitati all'organizzazione ogni volta che qualcuno visualizzata un layer Premium nella storia. Fare clic per ulteriori informazioni.",
          "secureService": "Rimuovere il contenuto protetto dalla storia o fare clic per informazioni su come autorizzare l'utilizzo di contenuto protetto da parte di altri.",
          "missingItemWarning": "Questo layer funziona comunque, ma è possibile che i relativi simboli, popup o il nome siano stati modificati. Confermare che la visualizzazione del layer risponde alle attese o rimuoverlo dalla storia."
        },
        "fixButtons": {
          "share": "Condividi",
          "hide": "Nascondi",
          "authorize": "Autorizza",
          "remove": "Rimuovi",
          "help": "Visualizza Guida",
          "ignore": "Ignora",
          "confirm": "Conferma",
          "edit": "Modifica mappa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Anche alcuni layer e mappe sono stati condivisi.",
          "alsoSharedMaps": "Anche alcune mappe sono state condivise.",
          "alsoSharedLayers": "Anche alcuni layer sono stati condivisi.",
          "sharedOthersContent": "Sono stati utilizzati i privilegi amministrativi per condividere il contenuto di un altro utente."
        }
      },
      "storyHealth": {
        "healthy": "Nessun problema",
        "notHealthy": "Risolvi i problemi",
        "warnings": "Vedi gli avvisi"
      }
    }
  }
});