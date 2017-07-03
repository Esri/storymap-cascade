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
    "builderPanel": {
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
        "remove": "Supprimer"
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
        "alternativeMedia": "Autre média",
        "explanation": "Certains médias ne sont pas pris en charge ou risquent de ne pas fonctionner correctement sur les appareils mobiles. Utilisez ce volet pour choisir un autre élément plus adapté aux mobiles, qui s'affichera à la place de ce média lorsque votre récit sera visualisé sur un téléphone ou une tablette.",
        "changeAltImage": "Modifier l'image",
        "uploadAltImage": "Ajouter une image"
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
      "imageUpload": "Chargement de l’image en cours...",
      "imageUploadSuccess": "Chargement de l’image réussi",
      "imageUploadFail": "Echec de chargement de l’image"
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
        "noAltImage": "Média non pris en charge sur les appareils mobiles",
        "altImageBroken": "L'autre image définie pour cet élément multimédia n'est pas accessible"
      },
      "contentWarnings": {
        "noAltImage": "Ce type de média n'est pas pris en charge sur les appareils mobiles. Indiquez une autre image qui s'affichera lorsque le récit sera visualisé sur des appareils mobiles.",
        "noAltImageAlt": "Ce type de média n'est pas pris en charge sur les appareils mobiles. Dans l'onglet Mobile, indiquez une autre image qui s'affichera lorsque le récit sera visualisé sur des appareils mobiles."
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
    }
  }
});