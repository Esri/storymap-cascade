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
    "builderPanel": {
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
        "remove": "Quitar"
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
        "alternativeMedia": "Alternar contenido multimedia",
        "explanation": "Algunos contenidos multimedia no se admiten o pueden no funcionar bien en los dispositivos móviles. Use este panel para elegir un elemento alternativo que se adapte mejor a los dispositivos móviles y que se mostrará en lugar de este contenido multimedia cuando la historia se visualice en un teléfono o en una tablet.",
        "changeAltImage": "Cambiar imagen",
        "uploadAltImage": "Agregar imagen"
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
      "imageUpload": "Carga de la imagen en curso...",
      "imageUploadSuccess": "Imagen cargada correctamente",
      "imageUploadFail": "Error de carga de la imagen"
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
        "noAltImage": "El contenido multimedia no se admite en los dispositivos móviles",
        "altImageBroken": "La imagen alternativa definida para este elemento multimedia no está disponible"
      },
      "contentWarnings": {
        "noAltImage": "Este tipo de contenido multimedia no se admite en los dispositivos móviles. Proporcione una imagen alternativa que se mostrará cuando la historia se visualice en dispositivos móviles.",
        "noAltImageAlt": "Este tipo de contenido multimedia no se admite en los dispositivos móviles. En la pestaña Móvil, proporcione una imagen alternativa que se mostrará cuando la historia se visualice en dispositivos móviles."
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
    }
  }
});