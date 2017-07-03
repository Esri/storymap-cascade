/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Lien vers du contenu",
      "urls_short": "Lier",
      "contentType": {
        "error": "Aucun support autorisé.",
        "imageOnly": "Dans cette partie du récit, vous pouvez ajouter une image.",
        "imageAndVideo": "Dans cette partie du récit, vous pouvez ajouter une image ou une vidéo.",
        "imageVideoWebpage": "Dans cette partie du récit, vous pouvez ajouter une image, une vidéo ou une page web."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Recherche de \"${searchterm}\"...",
        "searchedFor": "Résultats de recherche pour \"${searchterm}\"...",
        "albumsOf": "Albums de ${username}",
        "noPhotosFound": "Aucune photo ne correspond à votre recherche. Réessayez.",
        "noItemsFound": "Aucun élément ne correspond à votre recherche. Réessayez.",
        "noItemsInThisStory": "Aucun contenu provenant d'ArcGIS n'a encore été ajouté dans ce récit.",
        "limitReached": "Affichage de 100 éléments. Si ce dont vous avez besoin n'apparaît pas, effectuez une recherche par mot-clé.",
        "galleryItems": {
          "uploadError": "Echec du chargement de cet élément."
        },
        "agol": {
          "remove1": "Supprimez cette image inutilisée de votre compte ArcGIS.",
          "remove2": "(Vous devrez la charger à nouveau si vous décidez de l'utiliser ultérieurement.)",
          "removeFailed": "Supprimez cette image inaccessible de la liste.",
          "modified": "Date de modification : ${date}",
          "uploaded": "Date de chargement : ${date}",
          "contentByAuthor": "${contentType} de ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Parcourir des photos sur ${Picasa} ou ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Rechercher ou parcourir des photos sur ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Rechercher des photos sur ${Unsplash}",
          "photoBy": "Photo de ${username}",
          "userLink": "Accéder à la page ${Unsplash} de ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Lien vers du contenu sur le web",
            "imageOnly": "Lien vers une image sur le web",
            "imageAndVideo": "Lien vers une image ou une vidéo sur le web"
          },
          "linkText": {
            "imageOnly": "Dans la zone ci-dessus, vous pouvez établir un lien direct vers des photos.",
            "imageAndVideo1": "Dans la zone ci-dessus, vous pouvez coller des liens ou un code iframe pour les vidéos de ${YouTube} et ${Vimeo}.",
            "imageAndVideo2": "Vous pouvez également établir un lien direct vers des photos.",
            "imageVideoWebpage1": "Dans la zone ci-dessus, vous pouvez coller des liens ou un code iframe pour les vidéos de ${YouTube} et ${Vimeo}.",
            "imageVideoWebpage2": "Vous pouvez également établir un lien direct vers des photos, des pages web ou des applications web.",
            "ender": "Lorsque cela est possible, utilisez des liens sécurisés (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Charger la page via une connexion sécurisée (https)",
            "embedProtocolWarning1": "Si cette page ne se charge pas dans votre récit, elle ne peut pas être incorporée pour des raisons de sécurité web.",
            "embedProtocolWarning2": "Si cette page ne se charge pas dans votre récit, désélectionnez cette option et réessayez. Si la page ne se charge toujours pas, elle ne peut pas être incorporée pour des raisons de sécurité web.",
            "embedProtocolWarning3": "Vous pouvez également ajouter un lien dans votre narration afin d'ouvrir la page dans un nouvel onglet du navigateur. ${linkText}",
            "linkText": "En savoir plus."
          },
          "placeholder": "${https://}... ou ${http://}... ou ${<iframe>}",
          "uploadErrors": {
            "generic": "Un problème est survenu avec l'adresse saisie. Réessayez.",
            "imageOnly1": "Vous devez utiliser une image dans cette partie du récit.",
            "imageOnly2": "Fournissez un lien vers une image (.jpg, .png, .gif) ou choisissez une image dans ${ArcGIS}, ${Flickr}, ${Google+} ou ${Unsplash}.",
            "imageAndVideo1": "Vous devez utiliser une image ou une vidéo dans cette partie du récit.",
            "imageAndVideo2": "Fournissez un lien vers une image (.jpg, .png, .gif) ou une vidéo sur ${YouTube} ou ${Vimeo}, ou choisissez une image dans ${ArcGIS}, ${Flickr}, ${Google+} ou ${Unsplash}.",
            "badFormat": "Le format du lien vers le fichier que vous tentez d'ajouter n'est pas correct.",
            "inaccessible": "Le fichier que vous tentez d'ajouter est manquant ou inaccessible.",
            "tryAgain": "Vérifiez l'adresse et réessayez.",
            "mediaTypes": {
              "VIDEO": "vidéo",
              "IMAGE": "image",
              "generic": "support"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "Courrier électronique ou ${Picasa}/${Google+} ID",
          "helpText": "Vous pouvez ajouter des photos chargées sur ${Picasa} ou ${Google+} dans votre récit. ${helpLinkText} sur l'utilisation des images stockées dans votre compte ${Google} dans vos récits.",
          "helpLinkText": "En savoir plus",
          "cannotFindUser": "L'utilisateur ${username} est introuvable. Réessayez."
        },
        "unsplash": {
          "placeholder": "Rechercher des photos",
          "aboutText": "${Unsplash} est un ensemble organisé de photos gratuites de haute qualité.",
          "copyrightText": "La licence ${CC0} est concédée à toutes les photos publiées sur ${Unsplash}. Vous trouverez plus d'informations ${moreInfoLink}.",
          "moreInfoLink": "ici"
        },
        "flickr": {
          "searchType": {
            "account": "Compte ${Flickr}",
            "text": "Tout ${Flickr}"
          },
          "placeholders": {
            "user": "Rechercher un compte",
            "userText": "Rechercher des photos sur ce compte",
            "text": "Rechercher des photos"
          },
          "errors": {
            "cannotFindUser": "L'utilisateur ${username} est introuvable.",
            "noUserPhotos": "${username} ne possède aucune photo publique.",
            "didYouMean": "Voulez-vous dire ${username} ?",
            "generalUserError": "Un problème est survenu lors de la recherche de l'utilisateur ${username}."
          },
          "licenses": {
            "licenseLabel": "Licence : ",
            "public": "Domaine public",
            "commercial": "OK pour une utilisation commerciale",
            "nonCommercial": "OK pour une utilisation non commerciale",
            "reserved": "Tous droits réservés",
            "any": "Toutes les licences"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Ce récit",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portail",
            "myOrg": "Organisation ${orgname}",
            "myContent": "Mon contenu"
          },
          "createContent": {
            "or": "OU",
            "dragAndDrop": "Déposez les images ici",
            "uploadImage": "Rechercher des images",
            "agolInfo": "Les images seront stockées dans votre compte ArcGIS et accessibles uniquement dans votre récit.",
            "saveBeforeUpload": "Une fois ce récit enregistré, vous pouvez charger des images dans ArcGIS ici.",
            "fileTypesImage": "Types de fichiers pris en charge : .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Carte web",
            "webscene": "Scène web",
            "image": "Image",
            "date": "Date",
            "sortByDate": "Trier par date",
            "title": "Titre",
            "sortByTitle": "Trier par titre",
            "views": "Vues",
            "search": "Rechercher par mot-clé ou ID"
          }
        }
      }
    }
  }
});