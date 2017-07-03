/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Guardar",
      "close": "Cerrar"
    },
    "errors": {
      "noConfigName": "No se ha especificado ninguna configuración en index.html > configOptions.story",
      "configFormatError": "La configuración especificada no se puede cargar a causa de un error de sintaxis de JSON.",
      "configNotFound": "La configuración especificada no se ha encontrado o no se puede cargar a causa de un error de sintaxis de JSON.",
      "boxTitle": "Se ha producido un error",
      "servedFromFile": "Debe acceder a la aplicación a través de un servidor web. Consulte la ${USER_GUIDE} para obtener información detallada.",
      "userGuide": "guía del usuario",
      "invalidConfig": "Configuración no válida",
      "invalidConfigNoApp": "No se ha especificado el identificador de la aplicación de representación cartográfica en la red en index.html.",
      "invalidConfigNoAppDev": "No se ha especificado ningún identificador de la aplicación de representación cartográfica en la red en los parámetros de la dirección URL (?appid=). En el modo de desarrollo, la configuración de appid en index.html se pasa por alto.",
      "unspecifiedConfigOwner": "El propietario autorizado no se ha configurado.",
      "invalidConfigOwner": "El propietario de la historia no está autorizado.",
      "invalidConfignoOAuth": "Esta historia requiere autenticación. Configure un Id. de OAuth de ArcGIS en index.html o haga pública la historia.",
      "invalidApp": "Esta historia no se puede cargar.",
      "appLoadingFail": "Se ha producido un error, {TPL_NAME} no se ha cargado correctamente.",
      "notConfiguredDesktop": "La historia no se ha configurado todavía.",
      "notConfiguredMobile": "El Builder {TPL_NAME} no es compatible con este tamaño de pantalla. Si es posible, cambie el tamaño de su navegador para acceder al Builder o cree la historia en un dispositivo con una pantalla más grande.",
      "notConfiguredMobile2": "Gire el dispositivo a la orientación horizontal para usar el Builder {TPL_NAME}.",
      "notAuthorized": "No tiene autorización para acceder a esta historia",
      "notAuthorizedBuilder": "No tiene autorización para usar el Builder {TPL_NAME}.",
      "noViewerIE": "Esta historia no es compatible con versiones de Internet Explorer anteriores a la ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Está intentando ver esta historia con un navegador antiguo no compatible. Es posible que algunas características no funcionen o que se produzcan otros problemas inesperados. Es recomendable actualizar a Internet Explorer 11 o usar otro navegador como Chrome.",
      "noViewerIE3": "A finales de 2017, esta historia no se podrá cargar en este navegador. Cuando eso ocurra, deberá usar un navegador compatible para ver la historia.",
      "upgradeBrowser": "Actualice el navegador",
      "mapLoadingFail": "Se ha producido un error, el mapa no se ha cargado correctamente.",
      "signOut": "Cerrar sesión",
      "builderSupport1": "El Builder de Story Map Cascade solo es compatible con ${CHROME} y ${SAFARI}. Sin embargo, las historias de Cascade que se crean con el Builder se pueden visualizar en esos navegadores, en Internet Explorer 11+ y en Firefox.",
      "builderSupport2": "El Builder de Story Map Cascade no es compatible con un iPad. Las historias de Cascade que cree y comparta sí funcionarán en un iPad.",
      "builderSupport3": "Las historias de Cascade se pueden visualizar en Chrome, Safari, Firefox e Internet Explorer 11+, pero el Builder de Story Map Cascade solo es compatible con ${CHROME} y ${SAFARI}.",
      "builderSupport4": "Las historias de Cascade se pueden visualizar en cualquier navegador web moderno, pero el builder de Story Map Cascade solo es compatible con ${CHROME} y ${SAFARI}.<br><br>Si necesita que el builder de Cascade sea compatible con un navegador diferente, póngase en contacto con ${ESRI-SUPPORT} o con ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Atención:"
    },
    "mobileWarning": {
      "message1": "Ha leído la versión para móvil de esta historia. Para ver la versión completa, con más elementos multimedia, ábrala en un equipo de sobremesa.",
      "email": "Enviar por correo electrónico un vínculo a esta historia"
    },
    "cover": {
      "iosEmbedLink": "Tocar para leer la historia completa"
    },
    "media": {
      "captionPlaceholder": "El título debe aparecer aquí...",
      "loadingError": "Lo lamentamos, no se puede acceder a este contenido.",
      "explore": "Explorar",
      "exploreMap": "Explorar el mapa",
      "exploreStop": "Detener exploración",
      "sceneNotSupported": "Lo lamentamos, este mapa 3D no es compatible con su dispositivo.",
      "loading1": "Cargando...",
      "loading2": "Cargando mapa...",
      "videoPlayPause": "reproducir/pausa",
      "videoMuteUnmute": "silenciar/reactivar audio"
    },
    "headerFromCommon": {
      "defaultTagline": "Un ${STORY_MAP}",
      "share": "Compartir",
      "tooltipAutoplayDisabled": "Esto no está disponible en el modo de reproducción automática"
    },
    "shareFromCommon": {
      "copy": "Copiar",
      "copied": "Copiado",
      "open": "Abrir",
      "embed": "Integrar en página web",
      "embedExplain": "Use el siguiente código HTML para integrar la historia en una página web.",
      "size": "Tamaño (ancho/alto):",
      "autoplayLabel": "Modo de reproducción automática",
      "autoplayExplain1": "El modo de reproducción automática avanzará por la historia a intervalos regulares. Esto resulta idóneo para un quiosco o un monitor público, pero en otras situaciones puede dificultar la lectura de la historia. Esta característica no es compatible con pantallas pequeñas.",
      "autoplayExplain2": "Cuando este modo está activo, aparecen controles para reproducir y poner en pausa la historia, así como para ajustar la velocidad de navegación.",
      "linksupdated": "Los vínculos se han actualizado."
    },
    "theme": {
      "lightLabel": "Claro",
      "darkLabel": "Oscuro"
    }
  }
});