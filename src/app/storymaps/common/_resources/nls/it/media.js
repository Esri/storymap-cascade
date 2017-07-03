/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Collegamento al contenuto",
      "urls_short": "Collega",
      "contentType": {
        "error": "Nessun supporto autorizzato.",
        "imageOnly": "In questa parte della storia è possibile aggiungere un'immagine.",
        "imageAndVideo": "In questa parte della storia è possibile aggiungere un'immagine o un video.",
        "imageVideoWebpage": "In questa parte della storia è possibile aggiungere un'immagine, un video o una pagina Web."
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
          "searchAndBrowse": "Cerca e sfoglia foto su ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Cerca foto su ${Unsplash}",
          "photoBy": "Foto per ${username}",
          "userLink": "Vai alla pagina ${Unsplash} di ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Collega a contenuto sul Web",
            "imageOnly": "Collega a un'immagine sul Web",
            "imageAndVideo": "Collega a un'immagine o video sul Web"
          },
          "linkText": {
            "imageOnly": "Nella casella precedente, è possibile collegarsi direttamente a foto.",
            "imageAndVideo1": "Nella casella precedente, è possibile incollare collegamenti o codice iframe per video da ${YouTube} e ${Vimeo}.",
            "imageAndVideo2": "È anche possibile collegarsi direttamente alle foto.",
            "imageVideoWebpage1": "Nella casella precedente, è possibile incollare collegamenti o codice iframe per video da ${YouTube} e ${Vimeo}.",
            "imageVideoWebpage2": "È anche possibile collegarsi direttamente a foto, pagine Web o applicazioni Web.",
            "ender": "Quando possibile, utilizzare collegamenti sicuri (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Carica pagina su una connessione protetta (https)",
            "embedProtocolWarning1": "Se questa pagina non viene caricata nella storia, non può essere incorporata per motivi di sicurezza Web.",
            "embedProtocolWarning2": "Se questa pagina non viene caricata nella storia, deselezionare questa opzione e riprovare. Se il problema persiste, significa che non può essere incorporata per motivi di sicurezza Web.",
            "embedProtocolWarning3": "In alternativa, aggiungere un collegamento al racconto per aprire la pagina in una nuova scheda del browser. ${linkText}",
            "linkText": "Ulteriori informazioni."
          },
          "placeholder": "${https://}... o ${http://}... o ${<iframe>}",
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
              "IMAGE": "immagine",
              "generic": "supporti"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-mail o ID ${Picasa}/${Google+}",
          "helpText": "È possibile aggiungere foto caricate in ${Picasa} o ${Google+} alla storia. ${helpLinkText} sull'utilizzo di immagini memorizzate nell'account ${Google} nelle storie.",
          "helpLinkText": "Ulteriori informazioni",
          "cannotFindUser": "Impossibile trovare utente ${username}. Riprovare."
        },
        "unsplash": {
          "placeholder": "Cerca foto",
          "aboutText": "${Unsplash} è una raccolta curata di foto di alta qualità, gratuite.",
          "copyrightText": "Tutte le foto pubblicate su ${Unsplash} sono concesse in licenza in virtù della licenza ${CC0}. Ulteriori informazioni ${moreInfoLink}.",
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
            "myContent": "Contenuto personale"
          },
          "createContent": {
            "or": "O",
            "dragAndDrop": "Rilascia immagine(i) qui",
            "uploadImage": "Cerca immagine(i)",
            "agolInfo": "Le immagini verranno memorizzate nell'account ArcGIS e saranno accessibili solo all'interno della storia.",
            "saveBeforeUpload": "Dopo che la storia è stata salvata, è possibile caricare immagini in ArcGIS qui.",
            "fileTypesImage": "Tipi di file supportati: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Mappa Web",
            "webscene": "Scena Web",
            "image": "Immagine",
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
  }
});