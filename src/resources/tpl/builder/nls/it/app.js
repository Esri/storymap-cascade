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
    "share": {
      "btnPrivate": "Privato",
      "btnOrg": "Organizzazione",
      "btnPublic": "Pubblico",
      "btnEveryone": "Tutti"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Generatore",
      "buttonSaving": "Salvataggio in corso",
      "buttonSaved": "Salvato",
      "buttonError": "Salvataggio non riuscito",
      "buttonShare": "Condividere",
      "buttonSettings": "Impostazioni",
      "settingsLogoError": "È stato riscontrato un problema con il logo. Fare clic per ulteriori informazioni.",
      "buttonHelp": "Ottieni assistenza o invia feedback on GeoNet",
      "buttonPreview": "Visualizza storia",
      "buttonHealth": "Report integrità",
      "manageStories": "Gestisci My Stories",
      "closeWithPendingChange": "Confermare l'azione? Le modifiche apportate andranno perse.",
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
      "chooseTransition": "Scegli transizione",
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
        "remove": "Rimuovi",
        "altTextPlaceholder": "Aggiungere una descrizione di questo contenuto multimediale per i lettori con disabilità visive...",
        "altTextHelptip": "Il testo alternativo è una descrizione dei supporti visivi utilizzati da tecnologie assistive, come il software di lettura dello schermo. Ciò è facoltativo, ma consigliato per soddisfare le linee guida di accessibilità del web come la WCAG e la Sezione 508."
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
        "alternativeMedia": "Immagine alternativa per dispositivi mobili",
        "explanation": "Alcuni file multimediali non sono supportati o potrebbero non funzionare correttamente sui dispositivi mobili. Impiegare questo riquadro per specificare un’immagine che sarà mostrata al posto di questi file multimediali quando la storia viene visualizzata su un telefono o un tablet.",
        "changeAltImage": "Modifica immagine",
        "uploadAltImage": "Aggiungi immagine alternativa"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Collegamento al contenuto",
        "urls_short": "Collega",
        "contentType": {
          "error": "Nessun supporto autorizzato.",
          "imageOnly": "In questa parte della storia è possibile aggiungere un'immagine.",
          "imageAndVideo": "In questa parte della storia è possibile aggiungere un'immagine o un video.",
          "imageVideoWebpage": "In questa parte della storia è possibile aggiungere un audio, un’immagine, un video o una pagina Web."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Ricerca di \"${searchterm}\" in corso...",
          "searchedFor": "Risultati della ricerca per \"${searchterm}\"",
          "albumsOf": "Album di ${username}",
          "noPhotosFound": "Nessuna foto corrisponde alla ricerca. Riprovare.",
          "noItemsFound": "Nessun elemento corrisponde alla ricerca. Riprovare.",
          "noItemsInThisStory": "Nessun contenuto di ArcGIS è stato ancora aggiunto alla storia.",
          "limitReached": "Visualizzazione di 100 elementi. Se la ricerca non ha restituito risultati, provare una ricerca con parola chiave.",
          "galleryItems": {
            "uploadError": "Spiacenti, impossibile caricare questo elemento."
          },
          "agol": {
            "remove1": "Eliminare l'immagine non utilizzata dall'account ArcGIS.",
            "remove2": "(Sarà necessario caricarla nuovamente se si decide di utilizzarla in seguito.)",
            "removeFailed": "Rimuovere questa immagine non accessibile dall'elenco.",
            "modified": "Modificata ${date}",
            "uploaded": "Aggiornata ${date}",
            "contentByAuthor": "${contentType} di ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Sfoglia foto su ${Picasa} o ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Cerca e sfoglia foto su ${Flickr}",
            "captionStarter": "Foto di ${USERNAME} su ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Cerca foto su ${Unsplash}",
            "photoBy": "Foto per ${username}",
            "userLink": "Vai alla pagina ${Unsplash} di ${username}",
            "captionStarter": "Foto di ${USERNAME} su ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Collega a contenuto sul Web",
              "imageOnly": "Collega a un'immagine sul Web",
              "imageAndVideo": "Collega a un'immagine o video sul Web"
            },
            "linkText": {
              "imageOnly": "Nella casella precedente, è possibile collegarsi direttamente a una foto.",
              "imageAndVideo1": "Nella casella precedente, è possibile incollare un collegamento o un codice iframe per un video su ${YouTube} o ${Vimeo}.",
              "imageAndVideo2": "È anche possibile collegarsi direttamente a una foto.",
              "imageVideoWebpage1": "Nella casella precedente, è possibile incollare un collegamento o un codice iframe per un contenuto Web come un grafico dinamico o un video su ${YouTube} o ${Vimeo}.",
              "imageVideoWebpage2": "È anche possibile collegarsi direttamente a una foto, un video, un file audio, una pagina Web o un’applicazione Web.",
              "ender": "Utilizzare sempre collegamenti sicuri (https). Se il contenuto non supporta https, integrare un collegamento nel testo della Story Map in modo che i lettori possano visualizzarla in una nuova scheda browser.",
              "httpsError": "Il link deve iniziare con HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Carica pagina su una connessione protetta (https)",
              "embedProtocolWarning1": "Se questa pagina non viene caricata nella storia, non può essere incorporata per motivi di sicurezza Web.",
              "embedProtocolWarning2": "Se questa pagina non viene caricata nella storia, deselezionare questa opzione e riprovare. Se il problema persiste, significa che non può essere incorporata per motivi di sicurezza Web.",
              "embedProtocolWarning3": "In alternativa, aggiungere un collegamento al racconto per aprire la pagina in una nuova scheda del browser. ${linkText}",
              "linkText": "Ulteriori informazioni."
            },
            "placeholder": "${https://}... o ${<iframe>}",
            "uploadErrors": {
              "generic": "Si è verificato un errore con l'indirizzo immesso. Riprovare.",
              "imageOnly1": "Utilizzare un'immagine in questa parte della storia.",
              "imageOnly2": "Fornire un collegamento a un'immagine (.jpg, .png, .gif) o scegliere un'immagine da ${ArcGIS}, ${Flickr}, ${Google+} o ${Unsplash}.",
              "imageAndVideo1": "Utilizzare un'immagine o un video in questa parte della storia.",
              "imageAndVideo2": "Fornire un collegamento a un'immagine (.jpg, .png, .gif) o a un video su ${YouTube} o ${Vimeo} o scegliere un'immagine da ${ArcGIS}, ${Flickr}, ${Google+} o ${Unsplash}.",
              "badFormat": "Il collegamento al file che si sta cercando di aggiungere non è formattato correttamente.",
              "inaccessible": "Il file che si sta cercando di aggiungere è mancante o non accessibile.",
              "tryAgain": "Verificare l'indirizzo e riprovare.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "Immagine",
                "generic": "supporti"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Utilizzando un servizio di terzi, si accettano i termini di servizio relativi: ",
          "googlePhotos": {
            "placeholder": "E-mail o ID ${Picasa}/${Google+}",
            "helpText": "È possibile aggiungere foto caricate in ${Picasa} o ${Google+} alla storia. ${helpLinkText} sull'utilizzo di immagini memorizzate nell'account ${Google} nelle storie.",
            "helpLinkText": "Ulteriori informazioni",
            "cannotFindUser": "Impossibile trovare utente ${username}. Riprovare."
          },
          "unsplash": {
            "placeholder": "Cerca foto",
            "aboutText": "${Unsplash} è una raccolta curata di foto di alta qualità, gratuite.",
            "copyrightText": "Tutte le foto sono autorizzate dalla licenza ${Unsplash}. Trova ulteriori informazioni su ${moreInfoLink}.",
            "moreInfoLink": "qui"
          },
          "flickr": {
            "searchType": {
              "account": "Account ${Flickr",
              "text": "Tutto ${Flickr}"
            },
            "placeholders": {
              "user": "Cerca account",
              "userText": "Cerca foto nell'account",
              "text": "Cerca foto"
            },
            "errors": {
              "cannotFindUser": "Impossibile trovare utente ${username}.",
              "noUserPhotos": "${username} non dispone di foto pubbliche.",
              "didYouMean": "Intendevi ${username}?",
              "generalUserError": "Si è verificato un errore durante la ricerca dell'utente ${username}."
            },
            "licenses": {
              "licenseLabel": "Licenza: ",
              "public": "Dominio pubblico",
              "commercial": "OK per uso commerciale",
              "nonCommercial": "OK per uso non commerciale",
              "reserved": "Tutti i diritti riservati",
              "any": "Qualsiasi licenza"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Questa storia",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portale",
              "myOrg": "Organizzazione ${orgname",
              "myContent": "I miei contenuti"
            },
            "createContent": {
              "createNewMap": "Crea una nuova mappa",
              "or": "OPPURE",
              "dragAndDropImage": "Rilascia immagini",
              "dragAndDropImageAudio": "Rilascia immagini o audio",
              "uploadButton": "Sfoglia",
              "agolInfo": "Le immagini e gli audio caricati saranno accessibili solo all'interno di questa storia.",
              "saveBeforeUpload": "Una volta salvata la storia, sarà possibile caricare qui immagini e audio in ArcGIS.",
              "fileExtsImage": "Formati supportati: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Formati supportati: png, jpg, gif, bmp, mp3.",
              "maxSize": "Max 10 MB per file."
            },
            "filterAndSort": {
              "webmap": "Web Map",
              "webscene": "Web Scene",
              "image": "Immagine",
              "audio": "Audio",
              "date": "Data",
              "sortByDate": "Ordina per data",
              "title": "Titolo",
              "sortByTitle": "Ordina per titolo",
              "views": "Visualizzazioni",
              "search": "Ricerca per parole chiave o ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Modifica mappa",
      "unauthorizedDomain": "Il dominio attuale non è autorizzato per l’uso dell’editor della mappa",
      "loading": "Attendere. Caricamento editor mappa in corso...",
      "saving": "Salvataggio della mappa",
      "success": "Mappa salvata",
      "cancelTitle": "Ignorare le modifiche non salvate?",
      "errorSave": "Impossibile salvare la mappa. Riprovare.",
      "loadFail": "Impossibile caricare l’editor della mappa.",
      "close": "Chiudi",
      "save": "Salva",
      "confirm": "Sì, chiudi mappa",
      "deny": "No, continua a lavorare"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Continua la storia qui..."
      },
      "blockAdd": {
        "text": "Testo",
        "media": "File multimediali",
        "title": "Titolo",
        "immersive": "A schermo intero"
      },
      "link": {
        "invite": "Incolla o digita un collegamento..."
      },
      "color": {
        "choose": "scegli",
        "cancel": "annulla",
        "clear": "Cancella colore"
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
      "mediaUpload": "Caricamento degli elementi multimediali in corso...",
      "mediaUploadSuccess": "Elementi multimediali caricati con successo",
      "mediaUploadFail": "Impossibile caricare gli elementi multimediali"
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
        "audio": "audio",
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
        "noAltImage": "Il file multimediale potrebbe non funzionare sul dispositivo mobile",
        "noAltImageUnsupported": "File multimediale non supportato sui dispositivi mobili",
        "noAltImageWarning": "Il file multimediale potrebbe non funzionare sul dispositivo mobile",
        "altImageBroken": "L'immagine alternativa definita per quest'elemento multimediale non è accessibile",
        "httpMedia": "File multimediali non sicuri",
        "httpContent": "Contenuti non sicuri"
      },
      "contentWarnings": {
        "noAltImage": "Assicurarsi di provare la storia sui dispositivi mobili prima di condividerla. Se il file multimediale non funziona come previsto, utilizzare il tasto di seguito per aggiungere un’immagine alternativa da mostrare quando la storia viene visualizzata su un telefono o un tablet.",
        "noAltImageUnsupported": "Questo file multimediale non funziona sui dispositivi mobili. Utilizzare il tasto di seguito per aggiungere un'immagine alternativa da mostrare quando la Story Map viene visualizzata sui dispositivi mobili.",
        "noAltImageWarning": "Assicurarsi di provare la storia sui dispositivi mobili prima di condividerla. Se il file multimediale non funziona come previsto, utilizzare il tasto di seguito per aggiungere un’immagine alternativa da mostrare quando la storia viene visualizzata su un telefono o un tablet.",
        "noAltImageAlt": "Questo tipo di elemento multimediale non è supportato o potrebbe non funzionare sui dispositivi mobili. Nella scheda dei dispositivi mobili, fornire un'immagine alternativa da mostrare quando la Story Map viene visualizzata su un telefono o un tablet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Il file audio non supporta l’HTTPS. Rimuoverlo dalla storia o sostituirlo con un link.",
        "httpAudioUncheckable": "Il file audio ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per provare a usare un URL HTTPS per il file audio. Se non funziona, rimuovere il file audio dalla storia o sostituirlo con un collegamento ipertestuale.",
        "httpAudioFixable": "Il file audio ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per usare un URL HTTPS sicuro per il file audio.",
        "httpWebpageUnfixable": "La pagina Web non supporta l’HTTPS. Rimuoverla dalla storia o sostituirla con uno screenshot o con un link.",
        "httpWebpageUncheckable": "La pagina Web ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per provare a usare un URL HTTPS per la pagina Web. Se non funziona, rimuovere la pagina Web dalla storia o sostituirla con uno screenshot o con un collegamento ipertestuale.",
        "httpWebpageFixable": "La pagina Web ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per usare un URL HTTPS per la pagina Web.",
        "httpVideoUnfixable": "Il file video non supporta l’HTTPS. Rimuoverlo dalla storia o sostituirlo con uno screenshot o con un link.",
        "httpVideoUncheckable": "Il file video ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per provare a usare un URL HTTPS per il file video. Se non funziona, rimuovere il file video dalla storia o sostituirlo con uno screenshot o con un collegamento ipertestuale.",
        "httpVideoFixable": "Il file video ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per usare un URL HTTPS sicuro per il file video.",
        "httpImageUnfixable": "L’immagine non supporta l’HTTPS. Rimuoverla dalla storia o sostituirla con un link.",
        "httpImageUncheckable": "L’immagine ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per provare a usare un URL HTTPS per l’immagine. Se non funziona, rimuovere l’immagine dalla storia o sostituirla con un collegamento ipertestuale.",
        "httpImageFixable": "L’immagine ha un URL non sicuro (HTTP). Fare clic sul pulsante riportato di seguito per usare un URL HTTPS sicuro per l’immagine.",
        "httpLayer": "Il Layer ha un URL non sicuro (HTTP).",
        "inaccessibleLogo": "Impossibile accedere al logo. Sostituirlo con un’altra immagine.",
        "httpLogoUnfixable": "Il logo non supporta l’HTTPS. Sostituirlo con un’altra immagine.",
        "httpLogoFixable": "Il logo ha un URL non sicuro (HTTP). Usare un URL HTTPS per il logo.",
        "httpLogoUncheckable": "Il logo ha un URL non sicuro (HTTP). Usare un URL HTTPS per il logo, oppure sostituirlo con un’altra immagine."
      },
      "tooltips": {
        "httpAudioFixable": "Fare clic sul pulsante per usare un URL HTTPS sicuro per il file audio.",
        "httpAudioUncheckable": "Provare a usare un URL HTTPS per il file audio. Se non funziona, rimuovere il file audio dalla storia o sostituirlo con un collegamento.",
        "httpWebpageFixable": "Fare clic sul pulsante per usare un URL HTTPS sicuro per la pagina Web.",
        "httpWebpageUncheckable": "Provare a usare un URL HTTPS per la pagina Web. Se non funziona, rimuovere la pagina Web dalla storia o sostituirla con uno screenshot o con un collegamento.",
        "httpVideoFixable": "Fare clic sul pulsante per usare un URL HTTPS sicuro per il file video.",
        "httpVideoUncheckable": "Provare a usare un URL HTTPS per il file video. Se non funziona, rimuovere il file video dalla storia o sostituirlo con uno screenshot o con un collegamento.",
        "httpImageFixable": "Fare clic sul pulsante per usare un URL HTTPS sicuro per l’immagine.",
        "httpImageUncheckable": "Provare a usare un URL HTTPS per l’immagine. Se non funziona, rimuovere l’immagine dalla storia o sostituirla con un collegamento.",
        "httpLayerMyMap": "Visitare la pagina degli elementi della mappa per aggiornare il Layer e usare l’HTTPS. Qualora il Layer non possa essere aggiornato, rimuoverlo dalla mappa.",
        "httpLayerNotMyMap": "Effettuare una copia della mappa e aggiornare il Layer per usare l’HTTPS. Qualora il Layer non possa essere aggiornato, rimuoverlo dalla mappa.",
        "clickLearnMore": "Fare clic per maggiori informazioni."
      },
      "fixButtons": {
        "agolItemPage": "Pagina degli elementi",
        "openTheMap": "Apri mappa",
        "updateAudio": "Correggi URL del file audio",
        "updateWebpages": "Correggi URL della pagina Web",
        "updateVideos": "Correggi URL del file video",
        "updateImages": "Correggi URL dell’immagine"
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
    },
    "saveErrorSocial": {
      "title": "Condivisione sui social media",
      "panel1": "È possibile che l'aspetto della storia sui social media non sia corretto poiché il titolo dell'elemento applicazione Web ArcGIS è diverso dal titolo della storia.",
      "panel1tooltip": "Se si definisce un titolo, un riepilogo e un'immagine di anteprima, l'aspetto della storia sarà:",
      "panel2": "Specificare il titolo che si desidera utilizzare sui social media:",
      "panel2q1": "Titolo della storia (consigliato)",
      "panel2q1tooltip": "Se si sceglie questa opzione, il titolo dell'elemento verrà modificato per corrispondere al titolo della storia e ulteriori modifiche nel generatore verranno sincronizzate.",
      "panel2q2": "Titolo elemento",
      "panel3": "Per migliorare ulteriormente l'aspetto della storia sui social media utilizzare ${MYSTORIES} per aggiungere un riepilogo e un'immagine di anteprima.",
      "panel4": "Non visualizzare più avvisi per questa storia",
      "save": "Salva",
      "mystories": "My Stories"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Messaggio importante riguardante la sicurezza Web e le Story Map",
      "s1h1": "Esri sta migliorando la sicurezza delle Story Map",
      "s1p1": "Le Story Map vivono nel Web e la comunità Web è costantemente impegnata nella formulazione e nell’implementazione di misure volte a migliorare la sicurezza. Il protocollo HTTPS, che fornisce una connessione sicura per i contenuti trasmessi su Internet, si sta affermando come metodo di accesso più comune ai contenuti Web. Molti dei browser moderni mostrano un messaggio di avviso nei casi in cui viene usato l’HTTP anziché l’HTTPS. A causa di questo standard emergente, consigliamo vivamente di utilizzare i link HTTPS per la creazione e la condivisione di Story Maps e di utilizzare solo gli URL HTTPS per incorporare il contenuto Web o il collegamento a immagini all'interno di una Story Map.",
      "s1p2": "In pratica, ciò significa che una Story Map e tutto il suo contenuto (inclusi immagini, layer, app incorporate e siti Web) devono essere accessibili utilizzando i collegamenti che iniziano con HTTPS anziché con HTTP. Ciò garantisce la migliore esperienza per i lettori perché la maggior parte dei browser Web indica che le tue storie sono al sicuro.",
      "s2h1": "Cosa occorre fare?",
      "s2p1": "Esri sta lavorando per rendere questa transizione facile per autori e lettori di Story Map. I generatori di Story Map e My Stories contengono strumenti che possono essere impiegati per trovare contenuti non sicuri (HTTP) all’interno delle storie e che forniscono indicazioni utili sulla loro gestione. Si prega di verificare la presenza di contenuti non sicuri all’interno delle storie e di aggiornarli all’HTTPS prima possibile.",
      "action1": "Chiudi",
      "action2": "Controlla subito le mie storie",
      "action3": "Ulteriori informazioni",
      "floatingNotification": "Questa storia contiene contenuti non sicuri (HTTP). Verificare e risolvere il problema."
    }
  }
});