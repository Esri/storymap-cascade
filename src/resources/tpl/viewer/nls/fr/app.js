/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Enregistrer",
      "close": "Fermer"
    },
    "errors": {
      "noConfigName": "Aucune configuration spécifiée dans index.html > configOptions.story",
      "configFormatError": "Impossible de charger la configuration spécifiée à cause d'une erreur de syntaxe JSON.",
      "configNotFound": "Impossible de trouver ou de charger la configuration spécifiée à cause d'une erreur de syntaxe JSON.",
      "boxTitle": "Une erreur s’est produite",
      "servedFromFile": "L’application doit être accessible via un serveur web. Consultez le ${USER_GUIDE} pour plus de détails.",
      "userGuide": "Guide de l'utilisateur",
      "invalidConfig": "Configuration non valide",
      "invalidConfigNoApp": "Identifiant de l'application cartographique web non spécifié dans index.html.",
      "invalidConfigNoAppDev": "Aucun identifiant d'application cartographique web n'est spécifié dans les paramètres de l'URL (?appid=). En mode de développement, la configuration d'appid dans index.html est ignorée.",
      "unspecifiedConfigOwner": "Le propriétaire autorisé n'est pas configuré.",
      "invalidConfigOwner": "Le propriétaire du récit n'est pas autorisé.",
      "invalidConfignoOAuth": "Ce récit nécessite une authentification, configurez un identifiant OAuth ArcGIS dans index.html ou rendez le récit public.",
      "invalidApp": "Impossible de charger ce récit.",
      "appLoadingFail": "Une erreur s'est produite et le chargement de {TPL_NAME} ne s'est pas déroulé correctement.",
      "notConfiguredDesktop": "Le récit n'est pas encore configuré.",
      "notConfiguredMobile": "Le générateur {TPL_NAME} n'est pas pris en charge à cette taille d'affichage. Si possible, redimensionnez votre navigateur pour pouvoir accéder au générateur ou élaborez votre récit sur un appareil doté d'un écran plus grand.",
      "notConfiguredMobile2": "Veuillez tourner votre appareil en orientation paysage pour utiliser le générateur {TPL_NAME}.",
      "notAuthorized": "Vous n'êtes pas autorisé à accéder à ce récit.",
      "notAuthorizedBuilder": "Vous n'êtes pas autorisé à utiliser le générateur {TPL_NAME}.",
      "noViewerIE": "Ce récit n'est pas pris en charge dans Internet Explorer avant la version  ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Vous tentez d’afficher ce récit dans un navigateur plus ancien, non pris en charge. Certaines fonctionnalités peuvent ne pas fonctionner ou d’autres problèmes peuvent survenir. Nous vous suggérons de mettre à niveau à Internet Explorer 11 ou d'utiliser une autre navigateur, comme Chrome.",
      "noViewerIE3": "Fin 2017, ce récit ne se chargera plus dans ce navigateur. Vous devrez alors utiliser un navigateur pris en charge pour afficher ce récit.",
      "upgradeBrowser": "Mettez à jour votre navigateur",
      "mapLoadingFail": "Une erreur s'est produite et la carte n'a pas été chargée correctement.",
      "signOut": "Se déconnecter",
      "builderSupportFirefox": "Le générateur de Story Map Cascade prend désormais en charge Firefox !<br><br>La prise en charge de la création d’un récit Cascade dans Firefox est actuellement en version bêta. Essayez-la et signalez tous les problèmes au ${ESRI-SUPPORT} ou à la ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Les récits Cascade peuvent être affichés dans tout navigateur web moderne, mais le générateur Story Map Cascade est pris en charge uniquement dans ${CHROME}, ${SAFARI} et ${FIREFOX}.<br><br>Pour que le générateur Cascade prenne en charge un autre navigateur, contactez ${ESRI-SUPPORT} ou ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Le générateur Story Map Cascade n’est pas pris en charge sur iPad. Les récits Cascade que vous créez et partagez fonctionneront sur iPad.",
      "launchBuilder": "Lancer le générateur de Cascade",
      "notAgain": "Ne plus afficher",
      "sorry": "Attention :"
    },
    "mobileWarning": {
      "message1": "Vous avez lu la version mobile de ce récit. Pour voir la version complète, avec ses éléments multimédias plus sophistiqués, essayez sur un ordinateur de bureau.",
      "email": "Envoyer un lien vers ce récit par e-mail"
    },
    "cover": {
      "iosEmbedLink": "Toucher pour lire le récit complet"
    },
    "media": {
      "captionPlaceholder": "Votre légende ici...",
      "loadingError": "Désolé, ce contenu n’est pas accessible.",
      "explore": "Explorer",
      "exploreMap": "Explorer la carte",
      "exploreStop": "Arrêter l’exploration",
      "sceneNotSupported": "Désolé, cette carte 3D n’est pas prise en charge sur cet appareil.",
      "loading1": "Chargement en cours...",
      "loading2": "Chargement de la carte...",
      "videoPlayPause": "Lecture/pause",
      "videoMuteUnmute": "Désactiver le son/Réactiver le son"
    },
    "headerFromCommon": {
      "defaultTagline": "Une ${STORY_MAP}",
      "share": "Partager ou imprimer",
      "tooltipAutoplayDisabled": "Ceci n'est pas disponible en mode de lecture automatique"
    },
    "shareFromCommon": {
      "copy": "Copier",
      "copied": "Copié",
      "open": "Ouvert",
      "embed": "Incorporer dans une page web",
      "embedExplain": "Utilisez le code HTML suivant pour incorporer le récit dans une page web.",
      "size": "Taille (largeur/hauteur):",
      "autoplayLabel": "Mode de lecture automatique",
      "autoplayExplain1": "Le mode de lecture automatique fait avancer votre récit à intervalle régulier. Il est idéal pour les écrans publics, mais, dans d'autres cas, il peut compliquer la lecture du récit. Cette fonctionnalité n'est pas prise en charge sur les petits écrans.",
      "autoplayExplain2": "Lorsque ce mode est actif, vous disposez de contrôles pour lire le récit ou le mettre en pause, ainsi que régler la vitesse de navigation.",
      "linksupdated": "Liens mis à jour"
    },
    "theme": {
      "lightLabel": "Clair",
      "darkLabel": "Foncé"
    },
    "autoplay": {
      "speedFast": "Rapide",
      "speedMedium": "Moyenne",
      "speedSlow": "Lent"
    },
    "bannerNotification": {
      "learnMore": "En savoir plus",
      "close": "Fermer",
      "dontShowAgain": "Ne plus afficher ce message"
    },
    "embedBar": {
      "share": "Partage",
      "fullScreen": "Plein écran",
      "exitFullScreen": "Quitter le mode Plein écran",
      "enlarge": "Agrandir",
      "newTab": "Ouvrir dans un nouvel onglet",
      "tagline": "Une Story Map",
      "twitter": "Partager sur Twitter",
      "facebook": "Partager sur Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Attendez que le récit soit entièrement chargé avant de l’imprimer",
      "printNotes": "Si le chargement de cette page est lent ou si certains supports n’apparaissent pas, essayez de remplacer les supports animés par des images ou d’imprimer une plage de sections plus petite. Dans un souci d’optimisation des résultats, il se peut que vous deviez activer l’impression des éléments d’arrière-plan dans les paramètres d’impression de votre navigateur.",
      "printOptions": "options",
      "makeTextBlack": "Mettre tout le texte en noir",
      "showLinks": "Afficher les URL des liens",
      "useAltMedia": "Remplacer les supports animés par des images, le cas échéant",
      "pageBreaks": "Commencer chaque section sur une nouvelle page",
      "printRange": "Imprimer une partie de ce récit",
      "sectionStart": "Sections :",
      "go": "Appliquer",
      "reset": "Réinitialiser sur la totalité du récit",
      "print": "Imprimer"
    },
    "page": {
      "appTagline": "Ce récit a été réalisé avec ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esri Story Map Cascade",
      "readItOnline": "À lire sur le Web à l’adresse ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Section ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Site Web :",
      "videoLabel": "Vidéo :",
      "audioLabel": "Audio :"
    },
    "licenseChange2018": {
      "noAccess": "La licence de votre compte (%USER_NAME%) ne permet pas d’ouvrir une Story Map non publique. Demandez à l’administrateur de votre organisation de vous attribuer un type d’utilisateur qui inclut les Story Maps ou une licence Essential Apps sous forme de complément."
    }
  }
});