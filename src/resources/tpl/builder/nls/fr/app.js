/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Appliquer",
      "close": "Fermer"
    },
    "header": {
      "sharingNotAvailable": "Cet élément n’est pas disponible tant que vous n’avez pas partagé le récit",
      "edit": "Modifier"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Géosignets",
        "logoSharing": "Logo et partage",
        "theme": "Apparence"
      },
      "bookmarks": {
        "title": "Section",
        "bookmark": "Géosignet",
        "intro": "Les géosignets sont des liens vers les sections de récits affichés dans l’en-tête. La création de géosignets concis pour les principales sections de votre récit permet aux lecteurs de s’orienter.",
        "sequentialDefault": "Section narrative (aucun texte trouvé)",
        "immersiveDefault": "Section immersive (aucun texte trouvé)",
        "titleDefault": "Section de titre (aucun texte trouvé)",
        "coverDefault": "Section de couverture (aucun texte trouvé)",
        "coverAppendage": "(Couverture)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Utiliser le logo ${ESRI}",
        "useOrgLogo": "Utiliser le logo de mon organisation",
        "useOrgLogoHelp": "Utiliser le logo fourni par votre administrateur",
        "logoLink": "Lien vers le logo",
        "logoUploadProgress": "Chargement du logo en cours",
        "logoUploadSuccess": "Chargement du logo réussi",
        "logoUploadError": "Echec de chargement du logo, retour au logo ${ESRI}",
        "customHeaderText": "Balise",
        "taglineLinkDisabledTooltip": "Saisissez une balise pour activer le lien",
        "link": "Lien vers la balise",
        "enableSocialSharing": "Afficher le bouton de partage"
      },
      "appearance": {
        "themeLabel": "Thème",
        "fontLabel": "Polices",
        "previewLabel": "Aperçu",
        "fontsTitleLabel": "Titres",
        "fontsBodyLabel": "Corps",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privé",
      "btnOrg": "Organisation",
      "btnPublic": "Public",
      "btnEveryone": "Tout le monde"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Enregistrement",
      "buttonSaved": "Enregistré",
      "buttonError": "Échec de l’enregistrement",
      "buttonShare": "Partage",
      "buttonSettings": "Réglages",
      "settingsLogoError": "Votre logo a un problème. Cliquez pour en savoir plus.",
      "buttonHelp": "Obtenir de l'aide et envoyer des commentaires sur GeoNet",
      "buttonPreview": "Afficher le récit",
      "buttonHealth": "Rapport d'intégrité",
      "manageStories": "Gérer mes récits",
      "closeWithPendingChange": "Voulez-vous vraiment confirmer cette opération ? Vos modifications seront perdues.",
      "coverLabel": "Couvrir",
      "creditsLabel": "Crédits",
      "betaFeedback": "Commentaires",
      "betaNote": "Faites-nous part de vos remarques concernant ${APP_NAME} ou informez-nous si quelque chose ne fonctionne pas comme prévu.",
      "notSharedNote": "Votre récit n'est pas partagé, vous seul pouvez le voir.",
      "organizationWarning": "Pour vous assurer que d’autres utilisateurs peuvent afficher ce récit, vous devez également partager ses scènes, couches de scène et applications intégrées dans votre organisation. Les cartes et les couches de carte sont partagées automatiquement.",
      "publicWarning": "Pour vous assurer que d’autres utilisateurs peuvent afficher ce récit, vous devez également partager ses scènes, couches de scène et applications intégrées avec tout le monde. Les cartes et les couches de carte sont partagées automatiquement.",
      "addTitleNote": "Ajouter un titre sur la couverture pour enregistrer",
      "saveError": "Erreur d’enregistrement de votre récit.",
      "duplicate": "Dupliquer",
      "organize": "Organiser",
      "done": "Terminé",
      "invite": "A mesure que vous créez votre récit, les sections apparaitront ici...",
      "mystoriestooltip": "Le générateur Cascade vous alerte quant à des problèmes dans votre récit et vous aide à les corriger. Les scènes et les applications intégrées ne sont pas vérifiées, vous devez les vérifier manuellement."
    },
    "immersiveViewPanel": {
      "transition": "Transition",
      "chooseTransition": "Choisir la transition",
      "fade": "Fondu",
      "fadeSlow": "Fondu lent",
      "swipeVertical": "Balayage vertical",
      "swipeHorizontal": "Balayage horizontal",
      "none": "Aucun",
      "disabledConsecutiveSameMedia": "Non disponible lorsque des vues consécutives utilisent le même support",
      "disabledTooltipMap": "Pour utiliser cette transition, les couches visibles dans les deux vues doivent être différentes et les autres propriétés de la carte doivent être identiques",
      "disabledConsecutiveSameMap": "Non disponible lorsque des vues consécutives utilisent la même carte",
      "disabledNotInBeta": "Non disponible lorsque des vues consécutives utilisent la même carte",
      "disabledNonConsecutive": "Non disponible car une autre occurrence de ce support n’est pas consécutive",
      "addMedia": "Ajouter un support",
      "invite": "A mesure que vous créez votre section immersive, les vues apparaitront ici..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Apparence",
        "manage": "Gérer",
        "size": "Taille",
        "background": "Arrière-plan",
        "mobile": "Mobile",
        "issues": "Problèmes",
        "fixIssues": "Résoudre les problèmes"
      },
      "manage": {
        "changeMedia": "Modifier l'élément multimédia",
        "edit": "Modifier",
        "editAside": "S’ouvre dans un nouvel onglet de navigateur. Après avoir enregistré vos modifications, enregistrez et rechargez ce récit pour voir vos changements",
        "remove": "Supprimer",
        "altTextPlaceholder": "Ajouter une description de ce support pour les lecteurs malvoyants...",
        "altTextHelptip": "Le texte de remplacement est une description de supports visuels utilisée par les technologies d’assistance, telles que les logiciels de lecteur d’écran. Cette description est facultative mais conseillée à des fins de compatibilité avec les directives en matière d’accessibilité Web, telles que WCAG et Section 508."
      },
      "appearance": {
        "homeView": "Vue initiale",
        "audio": "Audio",
        "on": "Activé",
        "muted": "Muet",
        "volumeAside": "La vidéo se lancera automatiquement lorsqu’un utilisateur arrivera à cette vue. Si vous définissez le son comme étant muet, l’utilisateur ne pourra pas l’activer.",
        "view": "Afficher",
        "resetLocation": "Réinitialiser l’emplacement",
        "resetLayers": "Réinitialiser les couches",
        "clearPopup": "Effacer la fenêtre contextuelle",
        "interaction": "Interaction",
        "interactionDisabled": "Interaction désactivée",
        "buttonToEnable": "Bouton à activer",
        "interactionEnabled": "Interaction activée",
        "interactionAside": "*Les appareils tactiles affichent un bouton d’interaction.",
        "slide": "Diapositive",
        "noSlides": "Aucune diapositive disponible.",
        "mapExtentPrompt": "Mettez à jour la carte pour raconter votre récit, cliquez sur la coche pour enregistrer les changements"
      },
      "sectionAppearance": {
        "layout": "Mise en page",
        "theme": "Thème"
      },
      "size": {
        "small": "Petite",
        "medium": "Moyenne",
        "large": "Grande",
        "noCrop": "Ne pas rogner les grandes images",
        "noCropTallTooltip": "Si vous ne rognez pas une grande image, les lecteurs devront faire défiler la page pour voir l'image dans son intégralité."
      },
      "background": {
        "noCrop": "Ne pas rogner",
        "mostImportantPart": "Choisir le point le plus important",
        "cropExplanationImmersive": "Sélectionnez un point sur l'image pour choisir la façon dont elle sera rognée à différentes tailles d'écran. Le point que vous sélectionnez sera toujours visible. Activez la case à cocher \"Ne pas rogner\" si votre image doit être visible dans sa totalité.",
        "cropExplanation": "Sélectionnez un point sur l'image pour choisir la façon dont elle sera rognée à différentes tailles d'écran. Le point que vous sélectionnez sera toujours visible.",
        "color": "Couleur",
        "previews": "Aperçus"
      },
      "altMedia": {
        "alternativeMedia": "Autre image pour le mobile",
        "explanation": "Certains médias ne sont pas pris en charge ou risquent de ne pas fonctionner correctement sur les appareils mobiles. Utilisez ce volet pour spécifier l’image à afficher à la place de ce média lors de la visualisation de votre récit sur un téléphone ou une tablette.",
        "changeAltImage": "Modifier l'image",
        "uploadAltImage": "Ajouter une autre image"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Lien vers du contenu",
        "urls_short": "Lier",
        "contentType": {
          "error": "Aucun support autorisé.",
          "imageOnly": "Dans cette partie du récit, vous pouvez ajouter une image.",
          "imageAndVideo": "Dans cette partie du récit, vous pouvez ajouter une image ou une vidéo.",
          "imageVideoWebpage": "Dans cette partie du récit, vous pouvez ajouter un fichier audio, une image, une vidéo ou une page web."
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
            "searchAndBrowse": "Rechercher ou parcourir des photos sur ${Flickr}",
            "captionStarter": "Photo de ${USERNAME} sur ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Rechercher des photos sur ${Unsplash}",
            "photoBy": "Photo de ${username}",
            "userLink": "Accéder à la page ${Unsplash} de ${username}",
            "captionStarter": "Photo de ${USERNAME} sur ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Lien vers du contenu sur le web",
              "imageOnly": "Lien vers une image sur le web",
              "imageAndVideo": "Lien vers une image ou une vidéo sur le web"
            },
            "linkText": {
              "imageOnly": "Dans la zone ci-dessus, vous pouvez établir un lien direct vers une photo.",
              "imageAndVideo1": "Dans la zone ci-dessus, vous pouvez coller le lien ou le code iframe d’une vidéo sur ${YouTube} ou ${Vimeo}.",
              "imageAndVideo2": "Vous pouvez également établir un lien direct vers une photo.",
              "imageVideoWebpage1": "Dans la zone ci-dessus, vous pouvez coller le lien ou le code iframe d’un contenu Web comme un diagramme dynamique ou une vidéo sur ${YouTube} ou ${Vimeo}.",
              "imageVideoWebpage2": "Vous pouvez également établir un lien direct vers une photo, un fichier audio une page Web ou une application Web.",
              "ender": "Utilisez toujours des connexions sécurisées (https). Si votre contenu ne prend pas en charge les connexions https, ajoutez un lien dans le texte de votre récit pour permettre la consultation du contenu dans un nouvel onglet de navigateur.",
              "httpsError": "Le lien doit commencer par HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Charger la page via une connexion sécurisée (https)",
              "embedProtocolWarning1": "Si cette page ne se charge pas dans votre récit, elle ne peut pas être incorporée pour des raisons de sécurité web.",
              "embedProtocolWarning2": "Si cette page ne se charge pas dans votre récit, désélectionnez cette option et réessayez. Si la page ne se charge toujours pas, elle ne peut pas être incorporée pour des raisons de sécurité web.",
              "embedProtocolWarning3": "Vous pouvez également ajouter un lien dans votre narration afin d'ouvrir la page dans un nouvel onglet du navigateur. ${linkText}",
              "linkText": "En savoir plus."
            },
            "placeholder": "${https://}... ou ${<iframe>}",
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
          "thirdPartyTerms": "En utilisant un service tiers, vous acceptez ses conditions d’utilisation : ",
          "googlePhotos": {
            "placeholder": "Courrier électronique ou ${Picasa}/${Google+} ID",
            "helpText": "Vous pouvez ajouter des photos chargées sur ${Picasa} ou ${Google+} dans votre récit. ${helpLinkText} sur l'utilisation des images stockées dans votre compte ${Google} dans vos récits.",
            "helpLinkText": "En savoir plus",
            "cannotFindUser": "L'utilisateur ${username} est introuvable. Réessayez."
          },
          "unsplash": {
            "placeholder": "Rechercher des photos",
            "aboutText": "${Unsplash} est un ensemble organisé de photos gratuites de haute qualité.",
            "copyrightText": "La licence ${Unsplash} est concédée à toutes les photos. Vous trouverez plus d’informations ici : ${moreInfoLink}.",
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
              "createNewMap": "Créer une carte",
              "or": "OU",
              "dragAndDropImage": "Supprimer des images",
              "dragAndDropImageAudio": "Supprimer des images ou un fichier audio",
              "uploadButton": "Parcourir",
              "agolInfo": "Les images et le fichier audio chargés seront uniquement accessibles dans ce récit.",
              "saveBeforeUpload": "Une fois ce récit enregistré, vous pouvez charger des images et un fichier audio dans ArcGIS ici.",
              "fileExtsImage": "Types pris en charge : png, jpg, gif, bmp",
              "fileExtsImageAudio": "Types pris en charge : png, jpg, gif, bmp, mp3.",
              "maxSize": "Maximum de 10 Mo par fichier."
            },
            "filterAndSort": {
              "webmap": "Carte web",
              "webscene": "Scène web",
              "image": "Image",
              "audio": "Audio",
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
    },
    "mapEditor": {
      "dialogTitle": "Modifier la carte",
      "unauthorizedDomain": "Vous n’êtes pas sur un domaine autorisé à utiliser l’éditeur de carte",
      "loading": "Patientez pendant le chargement de l'éditeur de carte",
      "saving": "Enregistrement de la carte",
      "success": "Carte enregistrée",
      "cancelTitle": "Ignorer les modifications non enregistrées ?",
      "errorSave": "Impossible d'enregistrer la carte. Réessayez.",
      "loadFail": "Désolé, impossible de charger l’éditeur de carte",
      "close": "Fermer",
      "save": "Enregistrer",
      "confirm": "Oui, fermer la carte",
      "deny": "Non, continuer à travailler"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Poursuivez votre récit ici..."
      },
      "blockAdd": {
        "text": "Texte",
        "media": "Elément multimédia",
        "title": "Titre",
        "immersive": "Immersif"
      },
      "link": {
        "invite": "Collez ou saisissez un lien..."
      },
      "color": {
        "choose": "choisir",
        "cancel": "annuler",
        "clear": "Effacer la couleur"
      }
    },
    "imageGallery": {
      "addImage": "Ajouter une autre image",
      "moveBackward": "Reculer",
      "moveForward": "Avancer"
    },
    "cover": {
      "titlePrompt": "Entrez le titre de votre récit...",
      "subtitlePrompt": "Faites défiler vers le bas pour démarrer ou saisir un sous-titre facultatif",
      "mediaPlaceholder": "Ajouter votre image ou vidéo",
      "saveError": "Echec de l’enregistrement, vous avez déjà un élément portant ce titre"
    },
    "credits": {
      "sectionInvite": "Ajouter une section de crédits",
      "warning": "Les deux champs doivent être renseignés",
      "content": "Contenu...",
      "source": "Source...",
      "linkPrompt": "Lien facultatif...",
      "introductionPlaceholder": "Saisissez une introduction facultative pour votre section de crédits..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Thème"
      },
      "panelConfig": {
        "position": "Position",
        "theme": "Thème",
        "size": "Taille",
        "background": "Arrière-plan",
        "layout": "Défilement (pour tous les panneaux)"
      }
    },
    "title": {
      "placeholder": "Saisissez un titre..."
    },
    "media": {
      "mediaUpload": "Chargement du média en cours...",
      "mediaUploadSuccess": "Le média a été chargé",
      "mediaUploadFail": "Le chargement du média a échoué"
    },
    "controller": {
      "sectionOrganize": "Vous avez organisé les sections",
      "immersiveOrganize": "Vous avez organisé les vues",
      "sectionDelete": "Vous avez supprimé une section",
      "viewDelete": "Vous avez supprimé une vue"
    },
    "notification": {
      "cancel": "Annuler",
      "close": "Fermer",
      "undo": "Annuler"
    },
    "sections": {
      "sequence": "Narratif",
      "immersive": "Immersif",
      "title": "Titre"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "image",
        "audio": "audio",
        "webmap": "carte",
        "webscene": "scène",
        "video": "&quot;1démarrage rapide&quot;2",
        "content": "contenu",
        "webpage": "page web"
      },
      "placeholders": {
        "generic": "Ce contenu n’est pas accessible.",
        "deleted": "Cet élément a été supprimé.",
        "inaccessible": "Ce contenu n’est pas accessible.",
        "unauthorized": "Vous n'êtes pas autorisé à afficher ce contenu.",
        "unshared": "Cet élément n'est pas partagé de la même façon que votre récit.",
        "othersUnshared": "Cet élément n'est pas partagé de la même façon que votre récit.",
        "subscriptionContent": "Cette carte contient une couche abonné.",
        "premiumContent": "Cette carte contient une couche premium.",
        "secureService": "Cette carte contient une couche sécurisée."
      },
      "contentIssues": {
        "noAltImage": "Média risquant de ne pas fonctionner sur un mobile",
        "noAltImageUnsupported": "Média non pris en charge sur un mobile",
        "noAltImageWarning": "Média risquant de ne pas fonctionner sur un mobile",
        "altImageBroken": "L'autre image définie pour cet élément multimédia n'est pas accessible",
        "httpMedia": "Supports non sécurisés",
        "httpContent": "Contenu non sécurisé"
      },
      "contentWarnings": {
        "noAltImage": "Prenez soin de tester votre récit sur des appareils mobiles avant de le partager. Si ce média ne fonctionne pas comme prévu, utilisez le bouton ci-dessous pour ajouter l’image alternative à afficher lors de la visualisation du récit sur un téléphone ou une tablette.",
        "noAltImageUnsupported": "Ce média ne fonctionne pas sur les appareils mobiles. Utilisez le bouton ci-dessous pour ajouter l’image alternative à afficher lors de la visualisation du récit sur un téléphone ou une tablette.",
        "noAltImageWarning": "Prenez soin de tester votre récit sur des appareils mobiles avant de le partager. Si ce média ne fonctionne pas comme prévu, utilisez le bouton ci-dessous pour ajouter l’image alternative à afficher lors de la visualisation du récit sur un téléphone ou une tablette.",
        "noAltImageAlt": "Ce type de média n’est pas pris en charge ou risque de ne pas fonctionner correctement sur les appareils mobiles. Dans l’onglet Mobile, spécifiez l’image alternative à afficher lors de la visualisation du récit sur un téléphone ou une tablette."
      },
      "descriptions": {
        "httpAudioUnfixable": "Ce contenu audio ne prend pas en charge HTTPS. Supprimez-le de votre récit ou remplacez-le par un lien.",
        "httpAudioUncheckable": "L’URL de ce contenu audio n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour essayer d’utiliser une URL HTTPS pour ce contenu audio. Si cela ne fonctionne pas, supprimez le contenu audio de votre récit ou remplacez-le par un hyperlien.",
        "httpAudioFixable": "L’URL de ce contenu audio n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour utiliser une URL HTTPS sécurisée pour ce contenu audio.",
        "httpWebpageUnfixable": "Cette page web ne prend pas en charge HTTPS. Supprimez-la de votre récit ou remplacez-la par une capture d’écran ou par un lien.",
        "httpWebpageUncheckable": "L’URL de cette page web n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour essayer d’utiliser une URL HTTPS pour cette page web. Si cela ne fonctionne pas, supprimez la page web de votre récit ou remplacez-la par une capture d'écran ou un hyperlien.",
        "httpWebpageFixable": "L’URL de cette page web n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour utiliser une URL HTTPS sécurisée pour cette page web.",
        "httpVideoUnfixable": "Cette vidéo ne prend pas en charge HTTPS. Supprimez-la de votre récit ou remplacez-la par une capture d’écran ou par un lien.",
        "httpVideoUncheckable": "L’URL de cette vidéo n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour essayer d’utiliser une URL HTTPS pour cette vidéo. Si cela ne fonctionne pas, supprimez la vidéo de votre récit ou remplacez-la par une capture d’écran ou un hyperlien.",
        "httpVideoFixable": "L’URL de cette vidéo n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour utiliser une URL HTTPS sécurisée pour cette vidéo.",
        "httpImageUnfixable": "Cette image ne prend pas en charge HTTPS. Supprimez-la de votre récit ou remplacez-la par un lien.",
        "httpImageUncheckable": "L’URL de cette image n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour essayer d’utiliser une URL HTTPS pour cette image. Si cela ne fonctionne pas, supprimez l’image de votre récit ou remplacez-la par un hyperlien.",
        "httpImageFixable": "L’URL de cette image n’est pas sécurisée (HTTP). Cliquez sur le bouton ci-dessous pour utiliser une URL HTTPS sécurisée pour cette image.",
        "httpLayer": "L’URL de cette couche n’est pas sécurisée (HTTP).",
        "inaccessibleLogo": "Ce logo est inaccessible. Remplacez-le par une une autre image.",
        "httpLogoUnfixable": "Ce logo ne prend pas en charge HTTPS. Remplacez-le par une une autre image.",
        "httpLogoFixable": "L’URL de ce logo n’est pas sécurisée (HTTP). Utilisez une URL HTTPS pour le logo.",
        "httpLogoUncheckable": "L’URL de ce logo n’est pas sécurisée (HTTP). Utilisez une URL HTTPS pour le logo ou remplacez-le par une autre image."
      },
      "tooltips": {
        "httpAudioFixable": "Cliquez sur le bouton pour utiliser une URL HTTPS sécurisée pour ce contenu audio.",
        "httpAudioUncheckable": "Essayez d’utiliser une URL HTTPS pour ce contenu audio. Si cela ne fonctionne pas, supprimez le contenu audio de votre récit ou remplacez-le par un lien.",
        "httpWebpageFixable": "Cliquez sur le bouton pour utiliser une URL HTTPS sécurisée pour cette page web.",
        "httpWebpageUncheckable": "Essayez d’utiliser une URL HTTPS pour cette page web. Si cela ne fonctionne pas, supprimez la page web de votre récit ou remplacez-la par une capture d'écran ou un lien.",
        "httpVideoFixable": "Cliquez sur le bouton pour utiliser une URL HTTPS sécurisée pour cette vidéo.",
        "httpVideoUncheckable": "Essayez d’utiliser une URL HTTPS pour cette vidéo. Si cela ne fonctionne pas, supprimez la vidéo de votre récit ou remplacez-la par une capture d’écran ou un lien.",
        "httpImageFixable": "Cliquez sur le bouton pour utiliser une URL HTTPS sécurisée pour cette image.",
        "httpImageUncheckable": "Essayez d’utiliser une URL HTTPS pour cette image. Si cela ne fonctionne pas, supprimez l'image de votre récit ou remplacez-la par un lien.",
        "httpLayerMyMap": "Visitez la page des éléments de la carte pour mettre à jour cette couche et faire en sorte qu’elle utilise HTTPS. S’il n’est pas possible de mettre à jour la couche, supprimez-la de la carte.",
        "httpLayerNotMyMap": "Effectuez une copie de la carte et mettez à jour cette couche pour faire en sorte qu’elle utilise HTTPS. S’il n’est pas possible de mettre à jour la couche, supprimez-la de la carte.",
        "clickLearnMore": "Cliquez pour en savoir plus."
      },
      "fixButtons": {
        "agolItemPage": "Page des éléments",
        "openTheMap": "Ouvrir la carte",
        "updateAudio": "Corriger l’URL du contenu audio",
        "updateWebpages": "Corriger l’URL de la page web",
        "updateVideos": "Corriger l’URL de la vidéo",
        "updateImages": "Corriger l’URL de l'image"
      },
      "mapIssues": {
        "fixButton": "Résoudre les problèmes",
        "nofixButton": "Problèmes",
        "mapLabel": "Carte :",
        "summaries": {
          "unshared": "Contenu non partagé",
          "othersUnshared": "Contenu non partagé d’un autre utilisateur",
          "subscriptionContent": "Contenu Abonné",
          "premiumContent": "Contenu Premium",
          "secureContent": "Contenu sécurisé",
          "deleted": "Contenu supprimé",
          "inaccessible": "Contenu inaccessible",
          "unauthorized": "Contenu non autorisé"
        },
        "descriptions": {
          "unshared": "Ce contenu n’est pas partagé de la même façon que votre récit.",
          "othersUnshared": "Ce contenu est la propriété d'un autre utilisateur. Il n’est pas partagé de la même façon que votre récit.",
          "othersUnsharedAuthorized": "Ce contenu est la propriété d'un autre utilisateur, mais vous êtes autorisé à le partager.",
          "inaccessible": "Ce contenu n’est pas accessible.",
          "deleted": "Ce contenu a été supprimé.",
          "unauthorized": "Vous n'êtes pas autorisé à afficher ce contenu.",
          "popupFeatureLayer": "Les fenêtres contextuelles d’une couche tuilée viennent d'une couche d’entités qui n’est pas partagée de la même façon que votre récit.",
          "subscriptionContent": "Vous devez autoriser le contenu Abonné pour une utilisation publique.",
          "premiumContent": "Vous devez autoriser le contenu Premium pour une utilisation publique.",
          "secureService": "Le contenu sécurisé n’est pas accessible à vos lecteurs.",
          "missingItemWarning": "L’élément associé à cette couche a été supprimé."
        },
        "tooltips": {
          "unshared": "Cliquez ici pour en savoir plus sur le partage.",
          "othersUnshared": "Vous n’êtes pas autorisé à partager du contenu qui est la propriété d’autres utilisateurs. Demandez au propriétaire de supprimer les couches qui ne vous appartiennent pas. Cliquez ici pour en savoir plus sur la modification de cartes.",
          "inaccessible": "Supprimez cette carte de votre récit ou modifiez-la pour supprimer les couches inaccessibles. Cliquez ici pour en savoir plus sur la modification de cartes.",
          "deleted": "Supprimez cette carte de votre récit ou modifiez-la pour supprimer les couches manquantes. Cliquez ici pour en savoir plus sur la modification de cartes.",
          "unauthorized": "Supprimez cette carte de votre récit ou modifiez-la pour supprimer les couches non autorisées. Cliquez ici pour en savoir plus sur la modification de cartes.",
          "popupFeatureLayer": "Les fenêtres contextuelles d’une couche tuilée viennent d'une couche d’entités qui n’est pas partagée de la même façon que votre récit.",
          "subscriptionContent": "Le contenu abonné ne consomme pas de crédits. Cliquez ici pour en savoir plus.",
          "premiumContent": "Des crédits seront facturés à votre organisation chaque fois qu'un utilisateur affichera une couche premium dans votre récit. Cliquez ici pour en savoir plus.",
          "secureService": "Supprimez le contenu sécurisé de votre récit, ou cliquez ici pour savoir comment autoriser le contenu sécurisé pour qu'il soit utilisé par d’autres utilisateurs.",
          "missingItemWarning": "Cette couche fonctionne toujours, mais ses symboles, ses fenêtres contextuelles ou son nom ont peut-être changé.Confirmez que l’apparence de la couche est celle attendue ou supprimez-la de votre récit."
        },
        "fixButtons": {
          "share": "Partager",
          "hide": "Masquer",
          "authorize": "Autorisez",
          "remove": "Supprimer",
          "help": "Obtenir de l'aide",
          "ignore": "Ignorer",
          "confirm": "Confirmer",
          "edit": "Modifier la carte"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Certaines cartes et couches ont également été partagées",
          "alsoSharedMaps": "Certaines cartes ont également été partagées",
          "alsoSharedLayers": "Certaines couches ont également été partagées",
          "sharedOthersContent": "Vous avez utilisé vos privilèges d’administrateur pour partager le contenu d'un autre utilisateur."
        }
      },
      "storyHealth": {
        "healthy": "Aucune erreur",
        "notHealthy": "Résoudre les problèmes",
        "warnings": "Voir les avertissements"
      }
    },
    "saveErrorSocial": {
      "title": "Partage sur les réseaux sociaux",
      "panel1": "Il est possible que votre récit ne s'affiche pas correctement sur les réseaux sociaux, car le titre de votre élément d'application web ArcGIS n'est pas le même que le titre de votre récit.",
      "panel1tooltip": "Si vous définissez un titre, un résumé et une image miniature, votre récit ressemblera à ceci :",
      "panel2": "Quel titre voulez-vous utiliser sur les réseaux sociaux :",
      "panel2q1": "Titre du récit (recommandé)",
      "panel2q1tooltip": "Si vous choisissez cette option, le titre de votre élément sera modifié afin de correspondre au titre de votre récit et les autres modifications apportées dans le générateur seront synchronisées.",
      "panel2q2": "Titre de l'élément",
      "panel3": "Pour encore améliorer l'apparence de votre récit sur les réseaux sociaux, utilisez ${MYSTORIES} pour ajouter un résumé et une image miniature.",
      "panel4": "Ne plus m'avertir pour ce récit",
      "save": "Enregistrer",
      "mystories": "Mes récits"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Message important sur la sécurité web et les Story Maps",
      "s1h1": "Esri améliore la sécurité des Story Maps",
      "s1p1": "Vos Story Maps vivent sur le web, et la communauté web s’efforce en permanence d’établir et de mettre en œuvre une meilleure sécurité. HTTPS, qui offre une connexion sécurisée pour le contenu transmis via Internet, émerge en tant que mode d’accès normal au contenu web. La plupart des navigateurs actuels affichent à présent un avertissement lorsque HTTP est utilisé au lieu de HTTPS. En raison de cette nouvelle norme, nous vous recommandons vivement d’utiliser des liens HTTPS pour la création et le partage de Story Maps, et d’utiliser des URL HTTPS uniquement en cas d’intégration de contenu web ou de lien vers des images avec une Story Map.",
      "s1p2": "Concrètement, cela signifie que l’accès à une Story Map et à la totalité de son contenu (y compris les images, les couches, les applications et les sites web incorporés) doit s’effectuer via des liens qui commencent par HTTPS et non plus par HTTP. Ceci garantit à vos lecteurs la meilleure expérience, car la plupart des navigateurs web indiqueront que vos narrations sont sécurisées.",
      "s2h1": "Que dois-je faire ?",
      "s2p1": "Esri œuvre afin que ceci soit une transition facile pour les auteurs et les lecteurs de Story Map. Les générateurs Story Map et Mes récits proposent maintenant des outils vous aidant à repérer le contenu non sécurisé (HTTP) de vos narrations et vous donnant des conseils sur la manière de traiter ce contenu. Il convient de vérifier le contenu non sécurisé de vos récits et de le mettre à jour vers le protocole HTTPS dès que possible.",
      "action1": "Fermer",
      "action2": "Vérifier mes récits maintenant",
      "action3": "En savoir plus",
      "floatingNotification": "Ce récit comporte du contenu non sécurisé (HTTP). Veuillez examiner et résoudre ces problèmes."
    }
  }
});