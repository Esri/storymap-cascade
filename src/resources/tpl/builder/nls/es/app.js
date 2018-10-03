/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplicar",
      "close": "Cerrar"
    },
    "header": {
      "sharingNotAvailable": "Esto no estará disponible hasta que comparta la historia",
      "edit": "Editar"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Marcadores",
        "logoSharing": "Logotipo y uso compartido",
        "theme": "Apariencia"
      },
      "bookmarks": {
        "title": "Sección",
        "bookmark": "Marcador",
        "intro": "Los marcadores son vínculos a secciones de la historia que se muestran en el encabezado. Crear marcadores concisos para las principales secciones de la historia ayudará a sus lectores a orientarse.",
        "sequentialDefault": "Sección narrativa (no se ha encontrado texto)",
        "immersiveDefault": "Sección inmersiva (no se ha encontrado texto)",
        "titleDefault": "Sección de título (no se ha encontrado texto)",
        "coverDefault": "Sección de portada (no se ha encontrado texto)",
        "coverAppendage": "(Portada)"
      },
      "logoSharing": {
        "logo": "Logotipo",
        "logoButton": "Usar logotipo de ${ESRI}",
        "useOrgLogo": "Usar logotipo de mi organización",
        "useOrgLogoHelp": "Usar el logotipo proporcionado por el administrador",
        "logoLink": "Vínculo del logotipo",
        "logoUploadProgress": "Carga del logotipo en curso",
        "logoUploadSuccess": "Logotipo cargado correctamente",
        "logoUploadError": "Error al cargar el logotipo, se volverá a cambiar al logotipo de ${ESRI}",
        "customHeaderText": "Eslogan",
        "taglineLinkDisabledTooltip": "Introduzca un eslogan para habilitar el vínculo",
        "link": "Vínculo del eslogan",
        "enableSocialSharing": "Mostrar botón de uso compartido"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fuentes",
        "previewLabel": "Previsualización",
        "fontsTitleLabel": "Títulos",
        "fontsBodyLabel": "Cuerpo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privada",
      "btnOrg": "Organización",
      "btnPublic": "Pública",
      "btnEveryone": "Todos"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Guardando",
      "buttonSaved": "Guardado",
      "buttonError": "Error al guardar",
      "buttonShare": "Compartir",
      "buttonSettings": "Ajustes",
      "settingsLogoError": "Su logotipo tiene un problema. Haga clic para obtener más información.",
      "buttonHelp": "Obtener ayuda o enviar comentarios en GeoNet",
      "buttonPreview": "Ver historia",
      "buttonHealth": "Informe de estado",
      "manageStories": "Administrar mis historias",
      "closeWithPendingChange": "¿Está seguro de que desea confirmar esta acción? Los cambios se perderán.",
      "coverLabel": "Portada",
      "creditsLabel": "Créditos",
      "betaFeedback": "Comentarios",
      "betaNote": "Indique lo que piensa sobre ${APP_NAME} o si algo no está funcionando del modo esperado.",
      "notSharedNote": "Su historia no se ha compartido, solo usted puede verla",
      "organizationWarning": "Para garantizar que otros usuarios pueden ver esta historia, debe compartir también con su organización sus escenas, capas de escenas y aplicaciones integradas. Los mapas y las capas de mapas se comparten automáticamente.",
      "publicWarning": "Para asegurarse de que otros usuarios puedan ver esta historia, deberá compartir también sus escenas, capas de escena y aplicaciones integradas con Todos. Los mapas y las capas de mapas se comparten automáticamente.",
      "addTitleNote": "Agregue un título en la portada para guardar",
      "saveError": "Se ha producido un error al guardar la historia.",
      "duplicate": "Duplicar",
      "organize": "Organizar",
      "done": "Listo",
      "invite": "A medida que cree la historia, las secciones aparecerán aquí...",
      "mystoriestooltip": "El Builder Cascade le avisa de los problemas que hay en la historia y le ayuda a solucionarlos. Las escenas y las aplicaciones integradas no se comprueban, por lo que debe comprobarlas manualmente."
    },
    "immersiveViewPanel": {
      "transition": "Transición",
      "chooseTransition": "Elegir transición",
      "fade": "Fundido",
      "fadeSlow": "Fundido lento",
      "swipeVertical": "Barrido vertical",
      "swipeHorizontal": "Barrido horizontal",
      "none": "Ninguna",
      "disabledConsecutiveSameMedia": "No está disponible cuando hay vistas consecutivas que usan el mismo contenido multimedia",
      "disabledTooltipMap": "Para usar esta transición, las capas visibles de las dos vistas deben ser diferentes y las otras propiedades del mapa deben coincidir",
      "disabledConsecutiveSameMap": "No está disponible cuando hay vistas consecutivas que usan el mismo mapa",
      "disabledNotInBeta": "No está disponible cuando hay vistas consecutivas que usan el mismo mapa",
      "disabledNonConsecutive": "No está disponible, ya que hay otra repetición de este contenido multimedia que no es consecutiva",
      "addMedia": "Agregar contenido multimedia",
      "invite": "A medida que cree la sección inmersiva, las vistas aparecerán aquí..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Apariencia",
        "manage": "Administrar",
        "size": "Tamaño",
        "background": "Fondo",
        "mobile": "Mobile",
        "issues": "Problemas",
        "fixIssues": "Solucionar problemas"
      },
      "manage": {
        "changeMedia": "Cambiar contenido multimedia",
        "edit": "Editar",
        "editAside": "Se abre en una nueva pestaña del navegador. Después de guardar las ediciones, guarde y vuelva a cargar esta historia para ver los cambios.",
        "remove": "Quitar",
        "altTextPlaceholder": "Agregue una descripción de este contenido multimedia para invidentes...",
        "altTextHelptip": "El texto alternativo es una descripción de un contenido multimedia visual y está destinado a tecnologías de asistencia tales como el software de lectura de pantallas. Es opcional, pero recomendada para satisfacer las directrices de accesibilidad web, por ejemplo, WCAG y la Sección 508."
      },
      "appearance": {
        "homeView": "Vista inicial",
        "audio": "Audio",
        "on": "Activado",
        "muted": "Silenciado",
        "volumeAside": "El vídeo se reproducirá automáticamente cuando un lector llegue a esta vista. Si silencia el sonido, el lector no podrá habilitarlo.",
        "view": "Vista",
        "resetLocation": "Restablecer ubicación",
        "resetLayers": "Restablecer capas",
        "clearPopup": "Borrar ventana emergente",
        "interaction": "Interacción",
        "interactionDisabled": "Interacción deshabilitada",
        "buttonToEnable": "Botón para habilitar",
        "interactionEnabled": "Interacción habilitada",
        "interactionAside": "*Los dispositivos táctiles mostrarán un botón de interacción.",
        "slide": "Diapositiva",
        "noSlides": "No hay ninguna diapositiva disponible.",
        "mapExtentPrompt": "Actualice el mapa para contar su historia, haga clic en la marca de verificación para guardar los cambios"
      },
      "sectionAppearance": {
        "layout": "Diseño",
        "theme": "Tema"
      },
      "size": {
        "small": "Pequeño",
        "medium": "Mediano",
        "large": "Grande",
        "noCrop": "No recortar las imágenes altas",
        "noCropTallTooltip": "No recortar una imagen alta tiene un efecto perceptible para los lectores, ya que hace necesario un desplazamiento para ver la imagen completa."
      },
      "background": {
        "noCrop": "No recortar",
        "mostImportantPart": "Elija el punto más importante",
        "cropExplanationImmersive": "Seleccione un punto de la imagen para elegir cómo se recortará para diferentes tamaños de pantalla. El punto seleccionado estará siempre visible. Active la casilla \"No recortar\" si la imagen tiene que estar totalmente visible.",
        "cropExplanation": "Seleccione un punto de la imagen para elegir cómo se recortará para diferentes tamaños de pantalla. El punto seleccionado estará siempre visible.",
        "color": "Color",
        "previews": "Vistas previas"
      },
      "altMedia": {
        "alternativeMedia": "Imagen alternativa para móvil",
        "explanation": "Algunos contenidos multimedia no son compatibles o pueden no funcionar bien en los dispositivos móviles. Use este panel para especificar una imagen que se mostrará en lugar de este contenido multimedia cuando la historia se visualice en un teléfono o tablet.",
        "changeAltImage": "Cambiar imagen",
        "uploadAltImage": "Agregar imagen alternativa"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Vínculo a contenido",
        "urls_short": "Vínculo",
        "contentType": {
          "error": "No hay contenido multimedia autorizado.",
          "imageOnly": "En esta parte de la historia, puede agregar una imagen.",
          "imageAndVideo": "En esta parte de la historia, puede agregar una imagen o un vídeo.",
          "imageVideoWebpage": "En esta parte de la historia, puede agregar un audio, una imagen, un vídeo o una página web."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Buscando \"${searchterm}\"...",
          "searchedFor": "Resultados de búsqueda de \"${searchterm}\"",
          "albumsOf": "Álbumes de ${username}",
          "noPhotosFound": "No hay ninguna foto que coincida con su búsqueda. Vuelva a intentarlo.",
          "noItemsFound": "No hay ningún elemento que coincida con su búsqueda. Vuelva a intentarlo.",
          "noItemsInThisStory": "Aún no se ha agregado contenido de ArcGIS a esta historia.",
          "limitReached": "Se muestran 100 elementos. Si no ha encontrado lo que necesita, inténtelo con una búsqueda de palabra clave.",
          "galleryItems": {
            "uploadError": "Lo lamentamos, no se puede cargar este elemento."
          },
          "agol": {
            "remove1": "Elimine esta imagen que no se utiliza de su cuenta de ArcGIS.",
            "remove2": "(Tendrá que cargarla de nuevo si decide usarla posteriormente).",
            "removeFailed": "Elimine de la lista esta imagen a la que no se puede acceder.",
            "modified": "Se modificó el ${date}",
            "uploaded": "Se actualizó el ${date}",
            "contentByAuthor": "${contentType} de ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Examinar fotos en ${Picasa} o en ${Google+}"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "Buscar y examinar fotos en ${Flickr}",
            "captionStarter": "Foto de ${USERNAME} en ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Buscar fotos en ${Unsplash}",
            "photoBy": "Foto de ${username}",
            "userLink": "Ir a la página de ${Unsplash} de ${username}",
            "captionStarter": "Foto de ${USERNAME} en ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Vínculo a contenido de la Web",
              "imageOnly": "Vínculo a una imagen de la Web",
              "imageAndVideo": "Vínculo a una imagen o un vídeo de la Web"
            },
            "linkText": {
              "imageOnly": "En el cuadro anterior, puede vincular directamente con una foto.",
              "imageAndVideo1": "En el cuadro anterior, puede pegar un vínculo o código de iframe para un vídeo de ${YouTube} o ${Vimeo}.",
              "imageAndVideo2": "También puede vincular directamente con una fotografía.",
              "imageVideoWebpage1": "En el cuadro anterior, puede pegar un vínculo o código de iframe para contenidos web, tales como un gráfico dinámico o un vídeo de ${YouTube} o ${Vimeo}.",
              "imageVideoWebpage2": "También puede vincular directamente con una fotografía, vídeo, archivo de audio, página web o aplicación web.",
              "ender": "Utilice siempre vínculos seguros (https). Si su contenido no es compatible con https, agréguele un vínculo en el texto de su historia para que los lectores puedan visualizarlo en una nueva pestaña de navegador.",
              "httpsError": "El vínculo debe comenzar por HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Cargar la página a través de una conexión segura (https)",
              "embedProtocolWarning1": "Si esta página no se carga en su historia, no se puede incorporar por motivos de seguridad relacionados con la Web.",
              "embedProtocolWarning2": "Si esta página no se carga en su historia, desactive esta opción e inténtelo de nuevo. Si la página sigue sin cargarse, no se puede incorporar por motivos de seguridad relacionados con la Web.",
              "embedProtocolWarning3": "Como alternativa, agregue un vínculo a la narración para abrir la página en una nueva pestaña de navegador. ${linkText}",
              "linkText": "Más información."
            },
            "placeholder": "${https://}... o ${<iframe>}",
            "uploadErrors": {
              "generic": "Se ha producido un error relacionado con la dirección introducida. Vuelva a intentarlo.",
              "imageOnly1": "Debe usar una imagen en esta parte de la historia.",
              "imageOnly2": "Proporcione un vínculo a una imagen (.jpg, .png, .gif) o elija una imagen de ${ArcGIS}, ${Flickr}, ${Google+} o ${Unsplash}.",
              "imageAndVideo1": "Debe usar una imagen o un vídeo en esta parte de la historia.",
              "imageAndVideo2": "Proporcione un vínculo a una imagen (.jpg, .png, .gif) o un vídeo de ${YouTube} o ${Vimeo}, o elija una imagen de ${ArcGIS}, ${Flickr}, ${Google+} o ${Unsplash}.",
              "badFormat": "El vínculo al archivo que está intentando agregar tiene un formato incorrecto.",
              "inaccessible": "El archivo que está intentando agregar no se puede encontrar o no está disponible.",
              "tryAgain": "Compruebe la dirección y vuelva a intentarlo.",
              "mediaTypes": {
                "VIDEO": "vídeos.",
                "IMAGE": "image",
                "generic": "contenido multimedia"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Al utilizar un servicio de terceros, usted acepta sus condiciones de servicio: ",
          "googlePhotos": {
            "placeholder": "Correo electrónico o Id. de ${Picasa}/${Google+}",
            "helpText": "Puede agregar fotos cargadas en ${Picasa} o ${Google+} a su historia. ${helpLinkText} acerca del uso de imágenes almacenadas en su cuenta de ${Google} en sus historias.",
            "helpLinkText": "Más información",
            "cannotFindUser": "No se puede encontrar el usuario ${username}. Vuelva a intentarlo."
          },
          "unsplash": {
            "placeholder": "Buscar fotos",
            "aboutText": "${Unsplash} es una colección seleccionada de fotografías gratuitas de alta calidad.",
            "copyrightText": "Todas las fotografías se utilizan con licencia en virtud de la licencia ${Unsplash}. Buscar más información ${moreInfoLink}.",
            "moreInfoLink": "aquí"
          },
          "flickr": {
            "searchType": {
              "account": "Cuenta de ${Flickr}",
              "text": "Todo ${Flickr}"
            },
            "placeholders": {
              "user": "Buscar cuenta",
              "userText": "Buscar fotos en esta cuenta",
              "text": "Buscar fotos"
            },
            "errors": {
              "cannotFindUser": "No se puede encontrar el usuario ${username}.",
              "noUserPhotos": "${username} no tiene ninguna foto pública.",
              "didYouMean": "¿Quiere decir ${username}?",
              "generalUserError": "Se ha producido un error al buscar el usuario ${username}."
            },
            "licenses": {
              "licenseLabel": "Licencia: ",
              "public": "Dominio público",
              "commercial": "Válido para uso comercial",
              "nonCommercial": "Válido para uso no comercial",
              "reserved": "Todos los derechos reservados",
              "any": "Cualquier licencia"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Esta historia",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Organización de ${orgname}",
              "myContent": "Mi contenido"
            },
            "createContent": {
              "createNewMap": "Crear un mapa nuevo",
              "or": "O",
              "dragAndDropImage": "Eliminar imágenes",
              "dragAndDropImageAudio": "Eliminar imágenes o audio",
              "uploadButton": "Examinar",
              "agolInfo": "Solo se podrá acceder a las imágenes o el audio cargados dentro de esta historia.",
              "saveBeforeUpload": "Una vez que guarde esta historia, podrá cargar imágenes y audio en ArcGIS aquí.",
              "fileExtsImage": "Tipos compatibles: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Tipos compatibles: png, jpg, gif, bmp, mp3.",
              "maxSize": "Máx. 10 MB por archivo."
            },
            "filterAndSort": {
              "webmap": "Mapa web",
              "webscene": "Escena web",
              "image": "Imagen",
              "audio": "Audio",
              "date": "Date",
              "sortByDate": "Ordenar por fecha",
              "title": "Título",
              "sortByTitle": "Ordenar por título",
              "views": "Vistas",
              "search": "Buscar por palabra clave o Id."
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Editar mapa",
      "unauthorizedDomain": "No está en un dominio autorizado a utilizar el editor de mapa",
      "loading": "Espere mientras se carga el editor de mapa...",
      "saving": "Guardando el mapa",
      "success": "Mapa guardado",
      "cancelTitle": "¿Quiere descartar los cambios no guardados?",
      "errorSave": "No se puede guardar el mapa. Vuelva a intentarlo.",
      "loadFail": "Lo sentimos, no se puede cargar el editor de mapa",
      "close": "Cerrar",
      "save": "Guardar",
      "confirm": "Sí, cerrar el mapa",
      "deny": "No, seguir trabajando"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Continúe aquí su historia..."
      },
      "blockAdd": {
        "text": "Texto",
        "media": "Multimedia",
        "title": "Título",
        "immersive": "Inmersiva"
      },
      "link": {
        "invite": "Pegue o escriba un vínculo..."
      },
      "color": {
        "choose": "elegir",
        "cancel": "cancelar",
        "clear": "Borrar color"
      }
    },
    "imageGallery": {
      "addImage": "Agregar otra imagen",
      "moveBackward": "Mover hacia atrás",
      "moveForward": "Mover hacia delante"
    },
    "cover": {
      "titlePrompt": "Introduzca el título de la historia...",
      "subtitlePrompt": "Desplácese hacia abajo para empezar o introduzca un subtítulo opcional",
      "mediaPlaceholder": "Agregue una imagen o un vídeo",
      "saveError": "Error al guardar, ya tiene un elemento con este título"
    },
    "credits": {
      "sectionInvite": "Agregar una sección de créditos",
      "warning": "Los dos campos se deben rellenar",
      "content": "Contenido...",
      "source": "Origen...",
      "linkPrompt": "Vínculo opcional...",
      "introductionPlaceholder": "Especifique una introducción opcional para la sección de créditos..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posición",
        "theme": "Tema",
        "size": "Tamaño",
        "background": "Fondo",
        "layout": "Desplazamiento (para todos los paneles)"
      }
    },
    "title": {
      "placeholder": "Introduzca un título..."
    },
    "media": {
      "mediaUpload": "Carga del contenido multimedia en curso...",
      "mediaUploadSuccess": "Contenido multimedia cargado correctamente",
      "mediaUploadFail": "Error al cargar contenido multimedia"
    },
    "controller": {
      "sectionOrganize": "Ha organizado las secciones",
      "immersiveOrganize": "Ha organizado las vistas",
      "sectionDelete": "Ha eliminado una sección",
      "viewDelete": "Ha eliminado una vista"
    },
    "notification": {
      "cancel": "Cancelar",
      "close": "Cerrar",
      "undo": "Deshacer"
    },
    "sections": {
      "sequence": "Narrativa",
      "immersive": "Inmersiva",
      "title": "Título"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "imagen",
        "audio": "audio",
        "webmap": "mapa",
        "webscene": "escena",
        "video": "vídeo",
        "content": "contenido",
        "webpage": "página web"
      },
      "placeholders": {
        "generic": "No se puede acceder a este contenido.",
        "deleted": "Este elemento se ha eliminado.",
        "inaccessible": "No se puede acceder a este contenido.",
        "unauthorized": "No tiene autorización para ver este contenido.",
        "unshared": "Este elemento no se ha compartido del mismo modo que la historia.",
        "othersUnshared": "Este elemento no se ha compartido del mismo modo que la historia.",
        "subscriptionContent": "Este mapa contiene una capa de suscriptor.",
        "premiumContent": "Este mapa contiene una capa Premium.",
        "secureService": "Este mapa contiene una capa segura."
      },
      "contentIssues": {
        "noAltImage": "El contenido multimedia podría no funcionar en un móvil",
        "noAltImageUnsupported": "Contenido multimedia no compatible en un móvil",
        "noAltImageWarning": "El contenido multimedia podría no funcionar en un móvil",
        "altImageBroken": "La imagen alternativa definida para este elemento multimedia no está disponible",
        "httpMedia": "Contenido multimedia no seguro",
        "httpContent": "Contenido no seguro"
      },
      "contentWarnings": {
        "noAltImage": "Asegúrese de probarlo en dispositivos móviles antes de compartirlo. Si este contenido multimedia no funciona de la forma esperada, utilice el botón que aparece a continuación para agregar una imagen alternativa que se visualizará cuando la historia se visualice en un teléfono o tablet.",
        "noAltImageUnsupported": "El contenido multimedia no funcionará en dispositivos móviles, utilice el botón que aparece a continuación para agregar una imagen alternativa que se mostrará cuando la historia se visualice en un teléfono o tablet.",
        "noAltImageWarning": "Asegúrese de probarlo en dispositivos móviles antes de compartirlo. Si este contenido multimedia no funciona de la forma esperada, utilice el botón que aparece a continuación para agregar una imagen alternativa que se visualizará cuando la historia se visualice en un teléfono o tablet.",
        "noAltImageAlt": "Este tipo de contenido multimedia no es compatible o podría no funcionar bien en los dispositivos móviles. En la pestaña Móvil, proporcione una imagen alternativa que se mostrará cuando la historia se visualice en un teléfono o tablet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Este audio no es compatible con HTTPS. Elimínelo de su historia o sustitúyalo por un vínculo.",
        "httpAudioUncheckable": "Este audio tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para intentar utilizar una URL HTTPS para este audio. Si no funciona, elimine el audio de su historia o sustitúyalo por un hipervínculo.",
        "httpAudioFixable": "Este audio tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para usar una URL HTTPS segura para este audio.",
        "httpWebpageUnfixable": "Esta página web no es compatible con HTTPS. Elimínela de su historia o sustitúyala por una captura de pantalla o un vínculo.",
        "httpWebpageUncheckable": "Esta página web tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para intentar utilizar una URL HTTPS para esta página web. Si no funciona, elimine la página web de su historia o sustitúyala por una captura de pantalla o un hipervínculo.",
        "httpWebpageFixable": "Esta página web tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para usar una URL HTTPS segura para esta página web.",
        "httpVideoUnfixable": "Este vídeo no es compatible con HTTPS. Elimínelo de su historia o sustitúyalo por un vínculo.",
        "httpVideoUncheckable": "Este vídeo tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para intentar utilizar una URL HTTPS para este vídeo. Si no funciona, elimine el vídeo de su historia o sustitúyalo por una captura de pantalla o un hipervínculo.",
        "httpVideoFixable": "Este vídeo tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para usar una URL HTTPS segura para este vídeo.",
        "httpImageUnfixable": "Esta imagen no es compatible con HTTPS. Elimínela de su historia o sustitúyala por un vínculo.",
        "httpImageUncheckable": "Esta imagen tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para intentar utilizar una URL HTTPS para esta imagen. Si no funciona, elimine la imagen de su historia o sustitúyala por un hipervínculo.",
        "httpImageFixable": "Esta imagen tiene una URL no segura (HTTP). Haga clic en el botón que aparece a continuación para usar una URL HTTPS segura para esta imagen.",
        "httpLayer": "Esta capa tiene una URL no segura (HTTP).",
        "inaccessibleLogo": "No es posible acceder al logotipo. Sustitúyalo por otra imagen.",
        "httpLogoUnfixable": "Este logotipo no es compatible con HTTPS. Sustitúyalo por otra imagen.",
        "httpLogoFixable": "Este logotipo tiene una URL no segura (HTTP). Utilice una URL HTTPS para el logotipo.",
        "httpLogoUncheckable": "Este logotipo tiene una URL no segura (HTTP). Utilice una URL HTTPS para el logotipo o sustitúyalo por otra imagen."
      },
      "tooltips": {
        "httpAudioFixable": "Haga clic en el botón para usar una URL HTTPS segura para este audio.",
        "httpAudioUncheckable": "Intente utilizar una URL HTTPS para este audio. Si no funciona, elimine el audio de su historia o sustitúyalo por un vínculo.",
        "httpWebpageFixable": "Haga clic en el botón para usar una URL HTTPS segura para esta página web.",
        "httpWebpageUncheckable": "Intente utilizar una URL HTTPS para esta página web. Si no funciona, elimine la página web de su historia o sustitúyala por una captura de pantalla o un vínculo.",
        "httpVideoFixable": "Haga clic en el botón para usar una URL HTTPS segura para este vídeo.",
        "httpVideoUncheckable": "Intente utilizar una URL HTTPS para este vídeo. Si no funciona, elimine el vídeo de su historia o sustitúyalo por una captura de pantalla o un vínculo.",
        "httpImageFixable": "Haga clic en el botón para usar una URL HTTPS segura para esta imagen.",
        "httpImageUncheckable": "Intente utilizar una URL HTTPS para esta imagen. Si no funciona, elimine la imagen de su historia o sustitúyala por un vínculo.",
        "httpLayerMyMap": "Visite la página de elemento del mapa y actualice esta capa para usar HTTPS. Si no es posible actualizar la capa, elimínela del mapa.",
        "httpLayerNotMyMap": "Realice una copia del mapa y actualice esta capa para usar HTTPS. Si no es posible actualizar la capa, elimínela del mapa.",
        "clickLearnMore": "Haga clic para obtener más información."
      },
      "fixButtons": {
        "agolItemPage": "Página de elemento",
        "openTheMap": "Abrir mapa",
        "updateAudio": "Arreglar la URL del audio",
        "updateWebpages": "Arreglar la URL de la página web",
        "updateVideos": "Arreglar la URL del vídeo",
        "updateImages": "Arreglar la URL de la imagen"
      },
      "mapIssues": {
        "fixButton": "Solucionar problemas",
        "nofixButton": "Problemas",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Contenido no compartido",
          "othersUnshared": "Contenido no compartido de otro usuario",
          "subscriptionContent": "Contenido de suscriptor",
          "premiumContent": "Contenido Premium",
          "secureContent": "Contenido protegido",
          "deleted": "Contenido eliminado",
          "inaccessible": "Contenido inaccesible",
          "unauthorized": "Contenido no autorizado"
        },
        "descriptions": {
          "unshared": "Este contenido no se ha compartido del mismo modo que su historia.",
          "othersUnshared": "Este contenido pertenece a otro usuario y no se ha compartido del mismo modo que su historia.",
          "othersUnsharedAuthorized": "Este contenido pertenece a otro usuario, pero tiene autorización para compartirlo.",
          "inaccessible": "No se puede acceder a este contenido.",
          "deleted": "Este contenido se ha eliminado.",
          "unauthorized": "No tiene autorización para ver este contenido.",
          "popupFeatureLayer": "Una ventana emergente de una capa en teselas procede de una capa de entidades que no se ha compartido del mismo modo que su historia.",
          "subscriptionContent": "Debe autorizar el contenido de suscriptor para el uso público.",
          "premiumContent": "Debe autorizar el contenido Premium para el uso público.",
          "secureService": "Sus lectores no pueden acceder al contenido protegido.",
          "missingItemWarning": "El elemento asociado con esta capa se ha eliminado."
        },
        "tooltips": {
          "unshared": "Haga clic para obtener más información sobre el uso compartido.",
          "othersUnshared": "No tiene permisos para compartir contenido perteneciente a otras personas. Pida al propietario que lo comparta, que elimine el mapa de su historia o que edite el mapa para eliminar las capas que no le pertenecen. Haga clic para obtener más información sobre la edición de mapas.",
          "inaccessible": "Elimine este mapa de su historia o edítelo para eliminar las capas a las que no se puede acceder. Haga clic para obtener más información sobre la edición de mapas.",
          "deleted": "Elimine este mapa de su historia o edítelo para eliminar las capas que faltan. Haga clic para obtener más información sobre la edición de mapas.",
          "unauthorized": "Elimine este mapa de su historia o edítelo para eliminar las capas no autorizadas. Haga clic para obtener más información sobre la edición de mapas.",
          "popupFeatureLayer": "Una ventana emergente de una capa en teselas procede de una capa de entidades que no se ha compartido del mismo modo que su historia.",
          "subscriptionContent": "El contenido de suscriptor no consume créditos. Haga clic para obtener más información.",
          "premiumContent": "Se cobrarán créditos a su organización cada vez que alguien vea una capa Premium en su historia. Haga clic para obtener más información.",
          "secureService": "Elimine el contenido protegido de la historia o haga clic para ver cómo puede autorizar el contenido protegido para que lo utilicen otros usuarios.",
          "missingItemWarning": "Esta capa funciona, pero sus símbolos, sus ventanas emergentes o su nombre pueden haber cambiado. Confirme que la capa se visualiza del modo esperado o elimínela de su historia."
        },
        "fixButtons": {
          "share": "Compartir",
          "hide": "Ocultar",
          "authorize": "Autorizar",
          "remove": "Quitar",
          "help": "Obtener ayuda",
          "ignore": "Ignorar",
          "confirm": "Confirmar",
          "edit": "Editar mapa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Algunos mapas y capas también se han compartido.",
          "alsoSharedMaps": "Algunos mapas también se han compartido.",
          "alsoSharedLayers": "Algunas capas también se han compartido.",
          "sharedOthersContent": "Ha usado sus privilegios administrativos para compartir contenido de otro usuario."
        }
      },
      "storyHealth": {
        "healthy": "No hay problemas",
        "notHealthy": "Solucionar problemas",
        "warnings": "Ver advertencias"
      }
    },
    "saveErrorSocial": {
      "title": "Compartir en redes sociales",
      "panel1": "Es posible que su historia no aparezca correctamente en las redes sociales, ya que el título del elemento de la aplicación web de ArcGIS no coincide con el título de su historia.",
      "panel1tooltip": "Al definir un título, un resumen y una imagen de vista en miniatura, la historia tendrá el siguiente aspecto:",
      "panel2": "Título que desea usar en las redes sociales:",
      "panel2q1": "Título de la historia (recomendado)",
      "panel2q1tooltip": "Al elegir esta opción, el título del elemento se modificará para que coincida con el título de la historia y los cambios posteriores del builder se sincronizarán.",
      "panel2q2": "Título del elemento",
      "panel3": "Para mejorar el aspecto de su historia en las redes sociales, use ${MYSTORIES} para agregar un resumen y una imagen de vista en miniatura.",
      "panel4": "No volver a mostrar advertencias para esta historia",
      "save": "Guardar",
      "mystories": "Mis historias"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Mensaje importante sobre seguridad web y Story Maps",
      "s1h1": "Esri está mejorando la seguridad de Story Maps",
      "s1p1": "Sus Story Maps viven en la web y la comunidad web siempre está trabajando para establecer e implementar una mejor seguridad. HTTPS, que ofrece una conexión segura al contenido transmitido por Internet, está emergiendo como la forma esperada de acceder a contenido web. La mayoría de navegadores modernos ahora muestran mensajes de advertencia cuando se utiliza HTTP en lugar de HTTPS. Debido a este estándar emergente, recomendamos encarecidamente que utilice vínculos HTTPS para crear y compartir Story Maps y usar únicamente URL de HTTPS al integrar contenido de web o vincular a imágenes de un Story Map.",
      "s1p2": "Desde el punto de vista práctico, significa que se debería acceder a un Story Map y todo su contenido (incluidas imágenes, capas, aplicaciones y sitios web integrados) por medio de vínculos que comiencen por HTTPS en lugar de HTTP. Con ello garantiza una experiencia óptima a sus lectores, ya que la mayoría de navegadores web indicarán que sus historias son seguras.",
      "s2h1": "¿Qué tengo que hacer?",
      "s2p1": "Esri está trabajando para que esta sea una transición fácil para los autores y lectores de Story Maps. Ahora, los builders de Story Maps y Mis historias cuentan con herramientas que le ayudarán a encontrar contenido no seguro (HTTP) en sus historias y le harán recomendaciones para actuar al respecto. Compruebe si sus historias tienen contenido no seguro y actualícese a HTTPS lo antes posible.",
      "action1": "Cerrar",
      "action2": "Comprobar mis historias ahora",
      "action3": "Más información",
      "floatingNotification": "Esta historia contiene contenido no seguro (HTTP). Examine los problemas y solvéntelos."
    }
  }
});