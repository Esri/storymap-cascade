/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplica",
      "close": "Tanca"
    },
    "header": {
      "sharingNotAvailable": "No estarà disponible fins que compartiu la història",
      "edit": "Edita"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Marcadors",
        "logoSharing": "Logotip i ús compartit",
        "theme": "Aparença"
      },
      "bookmarks": {
        "title": "Secció",
        "bookmark": "Marcador",
        "intro": "Els marcadors són enllaços a seccions de la història que es mostren a la capçalera. Si creeu marcadors concisos per a les seccions principals de la història, ajudareu als lectors a orientar-se.",
        "sequentialDefault": "Secció narrativa (no s'ha trobat cap text)",
        "immersiveDefault": "Secció immersiva (no s'ha trobat cap text)",
        "titleDefault": "Secció de títol (no s'ha trobat cap text)",
        "coverDefault": "Secció de portada (no s'ha trobat cap text)",
        "coverAppendage": "(Portada)"
      },
      "logoSharing": {
        "logo": "Logotip",
        "logoButton": "Utilitza el logotip d'${ESRI}",
        "useOrgLogo": "Utilitza el logotip de la meva organització",
        "useOrgLogoHelp": "Utilitza el logotip que ha proporcionat l'administrador",
        "logoLink": "Enllaç del logotip",
        "logoUploadProgress": "Pujada del logotip en curs",
        "logoUploadSuccess": "Logotip pujat correctament",
        "logoUploadError": "Error en pujar el logotip. Es tornarà a canviar pel logotip d'${ESRI}",
        "customHeaderText": "Eslògan",
        "taglineLinkDisabledTooltip": "Introduïu un eslògan per habilitar l'enllaç",
        "link": "Enllaç de l'eslògan",
        "enableSocialSharing": "Mostra el botó d'ús compartit"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fonts",
        "previewLabel": "Visualització prèvia",
        "fontsTitleLabel": "Títols",
        "fontsBodyLabel": "Cos",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privada",
      "btnOrg": "Organització",
      "btnPublic": "Pública",
      "btnEveryone": "Tothom"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "S'està desant",
      "buttonSaved": "S'ha desat",
      "buttonError": "Error en desar",
      "buttonShare": "Comparteix",
      "buttonSettings": "Configuració",
      "settingsLogoError": "El logotip té un problema. Feu clic per obtenir més informació.",
      "buttonHelp": "Obteniu ajuda o envieu comentaris sobre el GeoNet",
      "buttonPreview": "Visualitza la història",
      "buttonHealth": "Informe d'estat",
      "manageStories": "Administra les meves històries",
      "closeWithPendingChange": "Segur que voleu confirmar aquesta acció? Es perdran els canvis.",
      "coverLabel": "Portada",
      "creditsLabel": "Crèdits",
      "betaFeedback": "Comentaris",
      "betaNote": "Indiqueu què penseu de ${APP_NAME} o si alguna cosa no funciona com esperàveu.",
      "notSharedNote": "La història no s'ha compartit i només vós la podeu veure",
      "organizationWarning": "Per garantir que altres usuaris puguin veure aquesta història, també n'heu de compartir amb la vostra organització les escenes, capes d'escenes i aplicacions incrustades. Els mapes i les capes de mapes es comparteixen automàticament.",
      "publicWarning": "Per garantir que altres usuaris puguin veure aquesta història, també n'heu de compartir amb tothom les escenes, capes d'escenes i aplicacions incrustades. Els mapes i les capes de mapes es comparteixen automàticament.",
      "addTitleNote": "Afegiu un títol a la portada per desar-la",
      "saveError": "S'ha produït un error en desar la història.",
      "duplicate": "Duplica",
      "organize": "Organitza",
      "done": "Fet",
      "invite": "A mesura que creeu la història, les seccions apareixeran aquí...",
      "mystoriestooltip": "El Builder del Cascade us avisa dels problemes que hi ha a la història i us ajuda a solucionar-los. Les escenes i les aplicacions integrades no es comproven i les heu de comprovar manualment."
    },
    "immersiveViewPanel": {
      "transition": "Transició",
      "chooseTransition": "Trieu una transició",
      "fade": "Esvaeix",
      "fadeSlow": "Esvaeix lentament",
      "swipeVertical": "Swipe vertical",
      "swipeHorizontal": "Swipe horitzontal",
      "none": "Cap",
      "disabledConsecutiveSameMedia": "No està disponible quan hi ha visualitzacions consecutives que fan servir el mateix contingut multimèdia",
      "disabledTooltipMap": "Per utilitzar aquesta transició, les capes visibles de totes dues visualitzacions han de ser diferents i les altres propietats del mapa han de coincidir",
      "disabledConsecutiveSameMap": "No està disponible quan hi ha visualitzacions consecutives que fan servir el mateix mapa",
      "disabledNotInBeta": "No està disponible quan hi ha visualitzacions consecutives que fan servir el mateix mapa",
      "disabledNonConsecutive": "No està disponible perquè hi ha una altra repetició d'aquest contingut multimèdia que no és consecutiva",
      "addMedia": "Afegeix contingut multimèdia",
      "invite": "A mesura que creeu la secció immersiva, les visualitzacions apareixeran aquí..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aparença",
        "manage": "Administra",
        "size": "Mida",
        "background": "Fons",
        "mobile": "Mòbil",
        "issues": "Problemes",
        "fixIssues": "Soluciona els problemes"
      },
      "manage": {
        "changeMedia": "Canvia el contingut multimèdia",
        "edit": "Edita",
        "editAside": "S'obre en una nova pestanya del navegador. Després de desar les edicions, deseu i torneu a carregar aquesta història per veure els canvis.",
        "remove": "Elimina",
        "altTextPlaceholder": "Afegiu una descripció d'aquest contingut multimèdia per als lectors amb dificultats visuals...",
        "altTextHelptip": "El text alternatiu és una descripció del contingut multimèdia visual que utilitzen les tecnologies d'assistència, com ara el programari de lectura de pantalla. És opcional, però es recomana per complir les instruccions d'accessibilitat web, com ara les directrius WCAG i la Secció 508."
      },
      "appearance": {
        "homeView": "Visualització inicial",
        "audio": "Àudio",
        "on": "Activat",
        "muted": "Silenciat",
        "volumeAside": "El vídeo es reproduirà automàticament quan un lector arribi a aquesta visualització. Si desactiveu el so, el lector no el podrà habilitar.",
        "view": "Visualitza",
        "resetLocation": "Restableix la ubicació",
        "resetLayers": "Restableix les capes",
        "clearPopup": "Esborra la finestra emergent",
        "interaction": "Interacció",
        "interactionDisabled": "Interacció deshabilitada",
        "buttonToEnable": "Botó per habilitar",
        "interactionEnabled": "Interacció habilitada",
        "interactionAside": "* Els dispositius tàctils mostraran un botó d'interacció.",
        "slide": "Diapositiva",
        "noSlides": "No hi ha cap diapositiva disponible.",
        "mapExtentPrompt": "Actualitzeu el mapa per explicar la vostra història i feu clic a la marca de verificació per desar els canvis"
      },
      "sectionAppearance": {
        "layout": "Disseny",
        "theme": "Tema"
      },
      "size": {
        "small": "Petit",
        "medium": "Mitjà",
        "large": "Gran",
        "noCrop": "No retallis les imatges altes",
        "noCropTallTooltip": "Si no es retalla una imatge alta, es produeix un efecte perceptible per als lectors, ja que els obliga a desplaçar-se verticalment per veure la imatge completa."
      },
      "background": {
        "noCrop": "No la retallis",
        "mostImportantPart": "Trieu el punt més important",
        "cropExplanationImmersive": "Seleccioneu un punt de la imatge per triar com es retallarà per a les diferents mides de pantalla. El punt que seleccioneu estarà sempre visible. Activeu la casella \"No la retallis\" si la imatge ha de quedar totalment visible.",
        "cropExplanation": "Seleccioneu un punt de la imatge per triar com es retallarà per a les diferents mides de pantalla. El punt que seleccioneu estarà sempre visible.",
        "color": "Color",
        "previews": "Visualitzacions prèvies"
      },
      "altMedia": {
        "alternativeMedia": "Imatge alternativa per a mòbil",
        "explanation": "Alguns continguts multimèdia no són compatibles o és possible que no funcionin correctament en dispositius mòbils. Feu servir aquesta subfinestra per especificar una imatge que es mostrarà en lloc d'aquest contingut multimèdia quan la història es visualitzi des d'un telèfon o una tauleta.",
        "changeAltImage": "Canvia la imatge",
        "uploadAltImage": "Afegeix una imatge alternativa"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Enllaç al contingut",
        "urls_short": "Enllaç",
        "contentType": {
          "error": "No hi ha cap contingut multimèdia autoritzat.",
          "imageOnly": "En aquesta part de la història, podeu afegir una imatge.",
          "imageAndVideo": "En aquesta part de la història, podeu afegir una imatge o un vídeo.",
          "imageVideoWebpage": "En aquesta part de la història, podeu afegir àudio, una imatge, un vídeo o una pàgina web."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "S'està cercant \"${searchterm}\"...",
          "searchedFor": "Resultats de la cerca de \"${searchterm}\"",
          "albumsOf": "Àlbums de ${username}",
          "noPhotosFound": "No hi ha cap foto que coincideixi amb la cerca. Torneu-ho a provar.",
          "noItemsFound": "No hi ha cap element que coincideixi amb la cerca. Torneu-ho a provar.",
          "noItemsInThisStory": "Encara no s'ha afegit cap contingut de l'ArcGIS a aquesta història.",
          "limitReached": "Es mostren 100 elements. Si no heu trobat el que necessiteu, proveu de fer una cerca de paraula clau.",
          "galleryItems": {
            "uploadError": "No s'ha pogut pujar aquest element."
          },
          "agol": {
            "remove1": "Suprimiu aquesta imatge no utilitzada del vostre compte de l'ArcGIS.",
            "remove2": "(L'haureu de tornar a pujar si decidiu fer-la servir més endavant.)",
            "removeFailed": "Elimineu de la llista aquesta imatge inaccessible.",
            "modified": "Data de modificació: ${date}",
            "uploaded": "Data de pujada: ${date}",
            "contentByAuthor": "${contentType} de ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Examina fotos al ${Picasa} o al ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Cerca i examina fotos al ${Flickr}",
            "captionStarter": "Foto de ${USERNAME} al ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Cerca fotos a l'${Unsplash}",
            "photoBy": "Foto de ${username}",
            "userLink": "Ves a la pàgina de l'${Unsplash} de ${username}",
            "captionStarter": "Foto de ${USERNAME} a l'${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Enllaç a contingut de la web",
              "imageOnly": "Enllaç a una imatge de la web",
              "imageAndVideo": "Enllaç a una imatge o un vídeo de la web"
            },
            "linkText": {
              "imageOnly": "Al quadre anterior, podeu definir un enllaç a una foto directament.",
              "imageAndVideo1": "Al quadre anterior, podeu enganxar un enllaç o codi d'iframe d'un vídeo del ${YouTube} o del ${Vimeo}.",
              "imageAndVideo2": "També podeu definir un enllaç a una foto directament.",
              "imageVideoWebpage1": "Al quadre anterior, podeu enganxar un enllaç o codi d'iframe de contingut web, com ara un gràfic dinàmic o un vídeo del ${YouTube} o del ${Vimeo}.",
              "imageVideoWebpage2": "També podeu definir un enllaç a una fotografia, un vídeo, un fitxer d'àudio, una pàgina web o una aplicació web directament.",
              "ender": "Utilitzeu sempre enllaços segurs (HTTPS). Si el contingut no és compatible amb HTTPS, afegiu un enllaç al text de la història perquè els lectors puguin visualitzar-lo en una nova pestanya del navegador.",
              "httpsError": "L'enllaç ha de començar amb HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Carrega la pàgina a través d'una connexió segura (HTTPS)",
              "embedProtocolWarning1": "Si aquesta pàgina no es carrega a la vostra història, significa que no es pot incrustar per motius de seguretat web.",
              "embedProtocolWarning2": "Si aquesta pàgina no es carrega a la vostra història, desactiveu aquesta opció i torneu-ho a provar. Si la pàgina segueix sense carregar-se, significa que no es pot incrustar per motius de seguretat web.",
              "embedProtocolWarning3": "Com a alternativa, afegiu un enllaç a la narració per obrir la pàgina en una nova pestanya del navegador. ${linkText}",
              "linkText": "Més informació."
            },
            "placeholder": "${https://}... o ${<iframe>}",
            "uploadErrors": {
              "generic": "S'ha produït un problema relacionat amb l'adreça que s'ha introduït. Torneu-ho a provar.",
              "imageOnly1": "Heu de fer servir una imatge en aquesta part de la història.",
              "imageOnly2": "Proporcioneu un enllaç a una imatge (.jpg, .png o .gif) o trieu una imatge de l'${ArcGIS}, el ${Flickr}, el ${Google+} o l'${Unsplash}.",
              "imageAndVideo1": "Heu de fer servir una imatge o un vídeo en aquesta part de la història.",
              "imageAndVideo2": "Proporcioneu un enllaç a una imatge (.jpg, .png o .gif) o a un vídeo del ${YouTube} o del ${Vimeo}, o bé trieu una imatge de l'${ArcGIS}, el ${Flickr}, el ${Google+} o l'${Unsplash}.",
              "badFormat": "L'enllaç al fitxer que esteu intentant afegir té un format incorrecte.",
              "inaccessible": "El fitxer que esteu intentant afegir no es troba o no s'hi pot accedir.",
              "tryAgain": "Comproveu l'adreça i torneu-ho a provar.",
              "mediaTypes": {
                "VIDEO": "vídeo",
                "IMAGE": "imatge",
                "generic": "multimèdia"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "En utilitzar un servei de tercers, accepteu les seves condicions del servei: ",
          "googlePhotos": {
            "placeholder": "Correu electrònic o ID del ${Picasa} o del ${Google+}",
            "helpText": "Podeu afegir fotos que s'hagin pujat al ${Picasa} o al ${Google+} a la vostra història. ${helpLinkText} sobre l'ús d'imatges emmagatzemades al compte del ${Google} a les vostres històries.",
            "helpLinkText": "Més informació",
            "cannotFindUser": "No es troba l'usuari ${username}. Torneu-ho a provar."
          },
          "unsplash": {
            "placeholder": "Cerca fotos",
            "aboutText": "L'${Unsplash} és una col·lecció seleccionada de fotografies gratuïtes d'alta qualitat.",
            "copyrightText": "Totes les fotos tenen llicència de l'${Unsplash}. Podeu trobar més informació ${moreInfoLink}.",
            "moreInfoLink": "aquí"
          },
          "flickr": {
            "searchType": {
              "account": "Compte del ${Flickr}",
              "text": "Tot el ${Flickr}"
            },
            "placeholders": {
              "user": "Cerca un compte",
              "userText": "Cerca fotos en aquest compte",
              "text": "Cerca fotos"
            },
            "errors": {
              "cannotFindUser": "No es troba l'usuari ${username}.",
              "noUserPhotos": "${username} no té cap foto pública.",
              "didYouMean": "Volíeu dir ${username}?",
              "generalUserError": "S'ha produït un problema en cercar l'usuari ${username}."
            },
            "licenses": {
              "licenseLabel": "Llicència: ",
              "public": "Domini públic",
              "commercial": "Vàlid per a ús comercial",
              "nonCommercial": "Vàlid per a ús no comercial",
              "reserved": "Tots els drets reservats",
              "any": "Qualsevol llicència"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Aquesta història",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organització ${orgname}",
              "myContent": "El meu contingut"
            },
            "createContent": {
              "createNewMap": "Crea un mapa nou",
              "or": "OR",
              "dragAndDropImage": "Suprimeix imatges",
              "dragAndDropImageAudio": "Suprimeix imatges o àudio",
              "uploadButton": "Navega",
              "agolInfo": "Només podreu accedir a les imatges i l'àudio que s'hagin pujat dins d'aquesta història.",
              "saveBeforeUpload": "Quan deseu aquesta història, podreu pujar imatges i àudio a l'ArcGIS aquí.",
              "fileExtsImage": "Tipus admesos: PNG, JPG, GIF i BMP.",
              "fileExtsImageAudio": "Tipus admesos: PNG, JPG, GIF, BMP i MP3.",
              "maxSize": "10 MB per fitxer com a màxim."
            },
            "filterAndSort": {
              "webmap": "Mapa web",
              "webscene": "Escena web",
              "image": "Imatge",
              "audio": "Àudio",
              "date": "Data",
              "sortByDate": "Ordena per data",
              "title": "Títol",
              "sortByTitle": "Ordena per títol",
              "views": "Visualitzacions",
              "search": "Cerca per paraula clau o ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Edita el mapa",
      "unauthorizedDomain": "No us trobeu en un domini autoritzat per utilitzar l'editor del mapa",
      "loading": "Espereu mentre es carrega l'editor del mapa",
      "saving": "S'està desant el mapa",
      "success": "Mapa desat",
      "cancelTitle": "Voleu descartar tots els canvis sense desar?",
      "errorSave": "No es pot desar el mapa. Torneu-ho a provar.",
      "loadFail": "L'editor del mapa no es pot carregar",
      "close": "Tanca",
      "save": "Desa",
      "confirm": "Sí, tanca el mapa",
      "deny": "No, continua treballant"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Continueu aquí la vostra història..."
      },
      "blockAdd": {
        "text": "Text",
        "media": "Multimèdia",
        "title": "Títol",
        "immersive": "Immersiva"
      },
      "link": {
        "invite": "Enganxeu o escriviu un enllaç..."
      },
      "color": {
        "choose": "tria",
        "cancel": "cancel·la",
        "clear": "Esborra el color"
      }
    },
    "imageGallery": {
      "addImage": "Afegeix una altra imatge",
      "moveBackward": "Mou cap enrere",
      "moveForward": "Mou cap endavant"
    },
    "cover": {
      "titlePrompt": "Introduïu el títol de la història...",
      "subtitlePrompt": "Desplaceu-vos cap avall per començar o introduïu un subtítol opcional",
      "mediaPlaceholder": "Afegiu una imatge o un vídeo",
      "saveError": "Error en desar; ja teniu un element amb aquest títol"
    },
    "credits": {
      "sectionInvite": "Afegeix una secció de crèdits",
      "warning": "Tots dos camps s'han d'emplenar",
      "content": "Contingut...",
      "source": "Origen...",
      "linkPrompt": "Enllaç opcional...",
      "introductionPlaceholder": "Especifiqueu una introducció opcional per a la secció de crèdits..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posició",
        "theme": "Tema",
        "size": "Mida",
        "background": "Fons",
        "layout": "Desplaçament (per a totes les subfinestres)"
      }
    },
    "title": {
      "placeholder": "Introduïu un títol..."
    },
    "media": {
      "mediaUpload": "Pujada de contingut multimèdia en curs...",
      "mediaUploadSuccess": "Contingut multimèdia pujat correctament",
      "mediaUploadFail": "Error de pujada de contingut multimèdia"
    },
    "controller": {
      "sectionOrganize": "Heu organitzat les seccions",
      "immersiveOrganize": "Heu organitzat les visualitzacions",
      "sectionDelete": "Heu suprimit una secció",
      "viewDelete": "Heu suprimit una visualització"
    },
    "notification": {
      "cancel": "Cancel·la",
      "close": "Tanca",
      "undo": "Desfés"
    },
    "sections": {
      "sequence": "Narrativa",
      "immersive": "Immersiva",
      "title": "Títol"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "imatge",
        "audio": "àudio",
        "webmap": "mapa",
        "webscene": "escena",
        "video": "vídeo",
        "content": "contingut",
        "webpage": "pàgina web"
      },
      "placeholders": {
        "generic": "No es pot accedir a aquest contingut.",
        "deleted": "Aquest element s'ha suprimit.",
        "inaccessible": "No es pot accedir a aquest contingut.",
        "unauthorized": "No teniu autorització per veure aquest contingut.",
        "unshared": "Aquest element no s'ha compartit de la mateixa manera que la vostra història.",
        "othersUnshared": "Aquest element no s'ha compartit de la mateixa manera que la vostra història.",
        "subscriptionContent": "Aquest mapa conté una capa de subscriptor.",
        "premiumContent": "Aquest mapa conté una capa Premium.",
        "secureService": "Aquest mapa conté una capa segura."
      },
      "contentIssues": {
        "noAltImage": "És possible que el contingut multimèdia no funcioni en dispositius mòbils",
        "noAltImageUnsupported": "El contingut multimèdia no és compatible amb dispositius mòbils",
        "noAltImageWarning": "És possible que el contingut multimèdia no funcioni en dispositius mòbils",
        "altImageBroken": "No es pot accedir a la imatge alternativa definida per a aquest element multimèdia",
        "httpMedia": "Contingut multimèdia no segur",
        "httpContent": "Contingut no segur"
      },
      "contentWarnings": {
        "noAltImage": "Assegureu-vos de provar la història en dispositius mòbils abans de compartir-la. Si aquest contingut multimèdia no funciona com s'esperava, utilitzeu el botó que apareix a continuació per afegir una imatge alternativa que es mostrarà quan la història es visualitzi des d'un telèfon o una tauleta.",
        "noAltImageUnsupported": "Aquest contingut multimèdia no funcionarà en dispositius mòbils. Utilitzeu el botó que apareix a continuació per afegir una imatge alternativa que es mostrarà quan la història es visualitzi des d'un telèfon o una tauleta.",
        "noAltImageWarning": "Assegureu-vos de provar la història en dispositius mòbils abans de compartir-la. Si aquest contingut multimèdia no funciona com s'esperava, utilitzeu el botó que apareix a continuació per afegir una imatge alternativa que es mostrarà quan la història es visualitzi des d'un telèfon o una tauleta.",
        "noAltImageAlt": "Aquest tipus de contingut multimèdia no és compatible o és possible que no funcioni bé en dispositius mòbils. A la pestanya Mòbil, proporcioneu una imatge alternativa que es mostrarà quan la història es visualitzi des d'un telèfon o una tauleta."
      },
      "descriptions": {
        "httpAudioUnfixable": "Aquest àudio no és compatible amb HTTPS. L'heu d'eliminar de la història o substituir-lo per un enllaç.",
        "httpAudioUncheckable": "Aquest àudio té una URL (HTTP) no segura. Feu clic al botó següent per intentar utilitzar una URL HTTPS per a aquest àudio. Si això no funciona, elimineu l'àudio de la història o substituïu-lo per un enllaç.",
        "httpAudioFixable": "Aquest àudio té una URL (HTTP) no segura. Feu clic al botó següent per utilitzar una URL HTTPS segura per a aquest àudio.",
        "httpWebpageUnfixable": "Aquesta pàgina web no és compatible amb HTTPS. L'heu d'eliminar de la història o substituir-la per una captura de pantalla o un enllaç.",
        "httpWebpageUncheckable": "Aquesta pàgina web té una URL (HTTP) no segura. Feu clic al botó següent per intentar utilitzar una URL HTTPS per a aquesta pàgina web. Si això no funciona, elimineu la pàgina web de la història o substituïu-la per una captura de pantalla o un enllaç.",
        "httpWebpageFixable": "Aquesta pàgina web té una URL (HTTP) no segura. Feu clic al botó següent per utilitzar una URL HTTPS segura per a aquesta pàgina web.",
        "httpVideoUnfixable": "Aquest vídeo no és compatible amb HTTPS. L'heu d'eliminar de la història o substituir-lo per una captura de pantalla o un enllaç.",
        "httpVideoUncheckable": "Aquest vídeo té una URL (HTTP) no segura. Feu clic al botó següent per intentar utilitzar una URL HTTPS per a aquest vídeo. Si això no funciona, elimineu el vídeo de la història o substituïu-lo per una captura de pantalla o un enllaç.",
        "httpVideoFixable": "Aquest vídeo té una URL (HTTP) no segura. Feu clic al botó següent per utilitzar una URL HTTPS segura per a aquest vídeo.",
        "httpImageUnfixable": "Aquesta imatge no és compatible amb HTTPS. L'heu d'eliminar de la història o substituir-la per un enllaç.",
        "httpImageUncheckable": "Aquesta imatge té una URL (HTTP) no segura. Feu clic al botó següent per intentar utilitzar una URL HTTPS per a aquesta imatge. Si això no funciona, elimineu la imatge de la història o substituïu-la per un enllaç.",
        "httpImageFixable": "Aquesta imatge té una URL (HTTP) no segura. Feu clic al botó següent per utilitzar una URL HTTPS segura per a aquesta imatge.",
        "httpLayer": "Aquesta capa té una URL (HTTP) no segura.",
        "inaccessibleLogo": "No es pot accedir a aquest logotip. Substituïu-lo per una altra imatge.",
        "httpLogoUnfixable": "Aquest logotip no és compatible amb HTTPS. Substituïu-lo per una altra imatge.",
        "httpLogoFixable": "Aquest logotip té una URL (HTTP) no segura. Utilitzeu una URL HTTPS per al logotip.",
        "httpLogoUncheckable": "Aquest logotip té una URL (HTTP) no segura. Utilitzeu una URL HTTPS per al logotip o substituïu-lo per una altra imatge."
      },
      "tooltips": {
        "httpAudioFixable": "Feu clic al botó per utilitzar una URL HTTPS segura per a aquest àudio.",
        "httpAudioUncheckable": "Intenteu utilitzar una URL HTTPS per a aquest àudio. Si això no funciona, elimineu l'àudio de la història o substituïu-lo per un enllaç.",
        "httpWebpageFixable": "Feu clic al botó per utilitzar una URL HTTPS segura per a aquesta pàgina web.",
        "httpWebpageUncheckable": "Intenteu utilitzar una URL HTTPS per a aquesta pàgina web. Si això no funciona, elimineu la pàgina web de la història o substituïu-la per una captura de pantalla o un enllaç.",
        "httpVideoFixable": "Feu clic al botó per utilitzar una URL HTTPS segura per a aquest vídeo.",
        "httpVideoUncheckable": "Intenteu utilitzar una URL HTTPS per a aquest vídeo. Si això no funciona, elimineu el vídeo de la història o substituïu-lo per una captura de pantalla o un enllaç.",
        "httpImageFixable": "Feu clic al botó per utilitzar una URL HTTPS segura per a aquesta imatge.",
        "httpImageUncheckable": "Intenteu utilitzar una URL HTTPS per a aquesta imatge. Si això no funciona, elimineu la imatge de la història o substituïu-la per un enllaç.",
        "httpLayerMyMap": "Visiteu la pàgina de l'element del mapa i actualitzeu aquesta capa perquè utilitzi HTTPS. La capa no es pot actualitzar. Elimineu-la del mapa.",
        "httpLayerNotMyMap": "Feu una còpia del mapa i actualitzeu aquesta capa perquè utilitzi HTTPS. La capa no es pot actualitzar. Elimineu-la del mapa.",
        "clickLearnMore": "Feu clic per obtenir més informació."
      },
      "fixButtons": {
        "agolItemPage": "Pàgina de l'element",
        "openTheMap": "Obre el mapa",
        "updateAudio": "Corregeix la URL de l'àudio",
        "updateWebpages": "Corregeix la URL de la pàgina web",
        "updateVideos": "Corregeix la URL del vídeo",
        "updateImages": "Corregeix la URL de la imatge"
      },
      "mapIssues": {
        "fixButton": "Soluciona els problemes",
        "nofixButton": "Problemes",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Contingut no compartit",
          "othersUnshared": "Contingut no compartit d'un altre usuari",
          "subscriptionContent": "Contingut de subscriptor",
          "premiumContent": "Contingut Premium",
          "secureContent": "Contingut protegit",
          "deleted": "Contingut suprimit",
          "inaccessible": "Contingut inaccessible",
          "unauthorized": "Contingut no autoritzat"
        },
        "descriptions": {
          "unshared": "Aquest contingut no s'ha compartit de la mateixa manera que la vostra història.",
          "othersUnshared": "Aquest contingut pertany a un altre usuari i no s'ha compartit de la mateixa manera que la vostra història.",
          "othersUnsharedAuthorized": "Aquest contingut pertany a un altre usuari, però teniu autorització per compartir-lo.",
          "inaccessible": "No es pot accedir a aquest contingut.",
          "deleted": "Aquest contingut s'ha suprimit.",
          "unauthorized": "No teniu autorització per veure aquest contingut.",
          "popupFeatureLayer": "Les finestres emergents d'una capa amb tessel·les procedeixen d'una capa d'entitats que no s'ha compartit de la mateixa manera que la vostra història.",
          "subscriptionContent": "Heu de concedir autorització al contingut de subscriptor per a l'ús públic.",
          "premiumContent": "Heu de concedir autorització al contingut Premium per a l'ús públic.",
          "secureService": "Els vostres lectors no poden accedir al contingut protegit.",
          "missingItemWarning": "L'element associat amb aquesta capa s'ha suprimit."
        },
        "tooltips": {
          "unshared": "Feu clic per obtenir més informació sobre l'ús compartit.",
          "othersUnshared": "No teniu permisos per compartir contingut que pertany a altres persones. Demaneu al propietari que el comparteixi, que elimini el mapa de la vostra història o que l'editi per eliminar les capes que no us pertanyen. Feu clic per obtenir més informació sobre l'edició de mapes.",
          "inaccessible": "Elimineu aquest mapa de la vostra història o editeu-lo per eliminar les capes que no són accessibles. Feu clic per obtenir més informació sobre l'edició de mapes.",
          "deleted": "Elimineu aquest mapa de la vostra història o editeu-lo per eliminar les capes que falten. Feu clic per obtenir més informació sobre l'edició de mapes.",
          "unauthorized": "Elimineu aquest mapa de la vostra història o editeu-lo per eliminar les capes no autoritzades. Feu clic per obtenir més informació sobre l'edició de mapes.",
          "popupFeatureLayer": "Les finestres emergents d'una capa amb tessel·les procedeixen d'una capa d'entitats que no s'ha compartit de la mateixa manera que la vostra història.",
          "subscriptionContent": "El contingut de subscriptor no consumeix crèdits. Feu clic per obtenir més informació.",
          "premiumContent": "Es cobraran crèdits a la vostra organització cada vegada que algú vegi una capa Premium de la vostra història. Feu clic per obtenir més informació.",
          "secureService": "Elimineu el contingut protegit de la història o feu clic per veure com concedir autorització al contingut protegit perquè l'utilitzin altres usuaris.",
          "missingItemWarning": "Aquesta capa encara funciona, però és possible que s'hi hagin fet canvis als símbols, les finestres emergents o el nom. Confirmeu que la capa es mostra com s'esperava o elimineu-la de la història."
        },
        "fixButtons": {
          "share": "Comparteix",
          "hide": "Amaga",
          "authorize": "Autoritza",
          "remove": "Elimina",
          "help": "Obtén ajuda",
          "ignore": "Ignora",
          "confirm": "Confirma",
          "edit": "Edita el mapa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Alguns mapes i capes també s'han compartit.",
          "alsoSharedMaps": "Alguns mapes també s'han compartit.",
          "alsoSharedLayers": "Algunes capes també s'han compartit.",
          "sharedOthersContent": "Heu fet servir els permisos administratius per compartir el contingut d'un altre usuari."
        }
      },
      "storyHealth": {
        "healthy": "No hi ha problemes",
        "notHealthy": "Soluciona els problemes",
        "warnings": "Mostra els avisos"
      }
    },
    "saveErrorSocial": {
      "title": "Ús compartit a les xarxes socials",
      "panel1": "És possible que la vostra història no aparegui correctament a les xarxes socials, ja que el títol de l'element d'aplicació web de l'ArcGIS no coincideix amb el títol de la història.",
      "panel1tooltip": "Quan definiu un títol, un resum i una imatge en miniatura, la història tindrà l'aspecte següent:",
      "panel2": "Títol que voleu utilitzar a les xarxes socials:",
      "panel2q1": "Títol de la història (recomanat)",
      "panel2q1tooltip": "Si trieu aquesta opció, el títol de l'element es modificarà perquè coincideixi amb el títol de la història i se sincronitzaran els canvis posteriors del builder.",
      "panel2q2": "Títol de l'element",
      "panel3": "Per millorar l'aspecte de la vostra història a les xarxes socials, utilitzeu ${MYSTORIES} per afegir un resum i una imatge en miniatura.",
      "panel4": "No em tornis a mostrar avisos d'aquesta història",
      "save": "Desa",
      "mystories": "Les meves històries"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Missatge important sobre la seguretat web i l'Story Maps",
      "s1h1": "Esri està millorant la seguretat de l'Story Maps",
      "s1p1": "L'Story Maps resideix a Internet i la comunitat web treballa constantment per establir i implementar mesures de seguretat millorades. HTTPS, que proporciona una connexió segura per al contingut que es transmet per Internet, sorgeix com a mitjà previst per accedir a contingut web. La majoria dels navegadors moderns mostren ara missatges d'avís quan s'utilitza HTTP en lloc d'HTTPS. A causa d'aquest estàndard emergent, es recomana que utilitzeu enllaços HTTPS per crear i compartir Story Maps, i que només utilitzeu adreces URL HTTPS quan incrusteu contingut web o establiu enllaços a imatges en un Story Map.",
      "s1p2": "Això vol dir simplement que s'ha d'accedir a un Story Map i a tot el seu contingut (imatges i capes, així com aplicacions i llocs web incrustats) per mitjà dels enllaços que comencen per HTTPS en lloc d'HTTP. Això garanteix la millor experiència per als lectors, ja que la majoria dels navegadors web indicaran que les vostres històries són segures.",
      "s2h1": "Què he de fer?",
      "s2p1": "Esri treballa per facilitar la transició als autors i lectors de l'Story Maps. Ja hi ha eines disponibles als builders de l'Story Maps i a Les meves històries que us ajuden a identificar contingut (HTTP) no segur a les vostres històries, a la vegada que us ofereixen recomanacions per al seu tractament. Comproveu si hi ha contingut no segur a les vostres històries i actualitzeu-lo a HTTPS com abans millor.",
      "action1": "Tanca",
      "action2": "Comprova les meves històries ara",
      "action3": "Més informació",
      "floatingNotification": "Aquesta història conté contingut (HTTP) no segur. Reviseu i tracteu aquests problemes."
    }
  }
});