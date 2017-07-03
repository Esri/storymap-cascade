/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Vínculo a contenido",
      "urls_short": "Vínculo",
      "contentType": {
        "error": "No hay contenido multimedia autorizado.",
        "imageOnly": "En esta parte de la historia, puede agregar una imagen.",
        "imageAndVideo": "En esta parte de la historia, puede agregar una imagen o un vídeo.",
        "imageVideoWebpage": "En esta parte de la historia, puede agregar una imagen, un vídeo o una página web."
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
          "searchAndBrowse": "Buscar y examinar fotos en ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Buscar fotos en ${Unsplash}",
          "photoBy": "Foto de ${username}",
          "userLink": "Ir a la página de ${Unsplash} de ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Vínculo a contenido de la Web",
            "imageOnly": "Vínculo a una imagen de la Web",
            "imageAndVideo": "Vínculo a una imagen o un vídeo de la Web"
          },
          "linkText": {
            "imageOnly": "En el cuadro anterior, puede vincular directamente con fotografías.",
            "imageAndVideo1": "En el cuadro anterior, puede pegar vínculos o código de iframe para vídeos de ${YouTube} y ${Vimeo}.",
            "imageAndVideo2": "También puede vincular directamente con fotografías.",
            "imageVideoWebpage1": "En el cuadro anterior, puede pegar vínculos o código de iframe para vídeos de ${YouTube} y ${Vimeo}.",
            "imageVideoWebpage2": "También puede vincular directamente con fotografías, páginas web o aplicaciones web.",
            "ender": "Siempre que sea posible, use vínculos seguros (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Cargar la página a través de una conexión segura (https)",
            "embedProtocolWarning1": "Si esta página no se carga en su historia, no se puede incorporar por motivos de seguridad relacionados con la Web.",
            "embedProtocolWarning2": "Si esta página no se carga en su historia, desactive esta opción e inténtelo de nuevo. Si la página sigue sin cargarse, no se puede incorporar por motivos de seguridad relacionados con la Web.",
            "embedProtocolWarning3": "Como alternativa, agregue un vínculo a la narración para abrir la página en una nueva pestaña de navegador. ${linkText}",
            "linkText": "Más información."
          },
          "placeholder": "${https://}... o ${http://}... o ${<iframe>}",
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
              "VIDEO": "vídeo",
              "IMAGE": "imagen",
              "generic": "contenido multimedia"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "Correo electrónico o Id. de ${Picasa}/${Google+}",
          "helpText": "Puede agregar fotos cargadas en ${Picasa} o ${Google+} a su historia. ${helpLinkText} acerca del uso de imágenes almacenadas en su cuenta de ${Google} en sus historias.",
          "helpLinkText": "Más información",
          "cannotFindUser": "No se puede encontrar el usuario ${username}. Vuelva a intentarlo."
        },
        "unsplash": {
          "placeholder": "Buscar fotos",
          "aboutText": "${Unsplash} es una colección seleccionada de fotografías gratuitas de alta calidad.",
          "copyrightText": "Todas las fotos publicadas en ${Unsplash} tienen licencia de ${CC0}. Puede encontrar más información en ${moreInfoLink}.",
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
            "or": "O",
            "dragAndDrop": "Soltar imágenes aquí",
            "uploadImage": "Buscar imágenes",
            "agolInfo": "Las imágenes se almacenarán en su cuenta de ArcGIS y solo podrá accederse a ellas dentro de su historia.",
            "saveBeforeUpload": "Una vez que guarde esta historia, podrá cargar imágenes en ArcGIS aquí.",
            "fileTypesImage": "Tipos de archivos compatibles: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Mapa web",
            "webscene": "Escena web",
            "image": "Imagen",
            "date": "fecha",
            "sortByDate": "Ordenar por fecha",
            "title": "Título",
            "sortByTitle": "Ordenar por título",
            "views": "Vistas",
            "search": "Buscar por palabra clave o Id."
          }
        }
      }
    }
  }
});