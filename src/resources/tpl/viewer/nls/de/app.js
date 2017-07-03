/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Speichern",
      "close": "Schließen"
    },
    "errors": {
      "noConfigName": "Keine Konfiguration in index.html > configOptions.story angegeben",
      "configFormatError": "Die angegebene Konfiguration konnte aufgrund eines JSON-Syntaxfehlers nicht geladen werden.",
      "configNotFound": "Die angegebene Konfiguration wurde nicht gefunden oder konnte aufgrund eines JSON-Syntaxfehlers nicht geladen werden.",
      "boxTitle": "Ein Fehler ist aufgetreten",
      "servedFromFile": "Die Anwendung muss über einen Webserver aufgerufen werden. Weitere Informationen finden Sie unter ${USER_GUIDE}.",
      "userGuide": "Dokumentation",
      "invalidConfig": "Ungültige Konfiguration",
      "invalidConfigNoApp": "Keine Web Mapping-Anwendungskennung in index.html angegeben.",
      "invalidConfigNoAppDev": "In den URL-Parametern (?appid=) ist keine Kennung einer Web Mapping-Anwendung angegeben. Im Entwicklungsmodus wird die appid-Konfiguration in index.html ignoriert.",
      "unspecifiedConfigOwner": "Autorisierter Besitzer wurde nicht konfiguriert.",
      "invalidConfigOwner": "Besitzer der Story ist nicht autorisiert.",
      "invalidConfignoOAuth": "Für diese Story ist eine Authentifizierung erforderlich. Konfigurieren Sie eine ArcGIS OAuth-ID in index.html, oder veröffentlichen Sie die Story.",
      "invalidApp": "Diese Story kann nicht geladen werden.",
      "appLoadingFail": "Ein Fehler ist aufgetreten. {TPL_NAME} wurde nicht korrekt geladen.",
      "notConfiguredDesktop": "Die Story ist noch nicht konfiguriert.",
      "notConfiguredMobile": "Der {TPL_NAME} Builder wird bei dieser Anzeigegröße nicht unterstützt. Ändern Sie nach Möglichkeit die Browser-Größe, um auf den Builder zuzugreifen, oder erstellen Sie Ihre Story auf einem Gerät mit größerem Bildschirm.",
      "notConfiguredMobile2": "Halten Sie das Gerät im Querformat, wenn Sie den {TPL_NAME} Builder verwenden.",
      "notAuthorized": "Sie sind nicht autorisiert, auf diese Story zuzugreifen.",
      "notAuthorizedBuilder": "Sie sind nicht autorisiert, den {TPL_NAME} Builder zu verwenden.",
      "noViewerIE": "Diese Story wird von Internet Explorer vor Version ${VERSION} nicht unterstützt. ${UPGRADE}.",
      "noViewerIE2": "Sie versuchen, diese Story mit einem älteren, nicht unterstützten Browser anzuzeigen. Einige Features funktionieren möglicherweise nicht, oder es können andere nicht erwartete Probleme auftreten. Wir empfehlen, ein Upgrade auf Internet Explorer 11 durchzuführen oder einen anderen Browser wie Chrome zu verwenden.",
      "noViewerIE3": "Ende 2017 kann diese Story nicht mehr in diesem Browser geladen werden. Zu diesem Zeitpunkt müssen Sie einen anderen unterstützten Browser zum Darstellen dieser Story nutzen.",
      "upgradeBrowser": "Aktualisieren Sie Ihren Browser.",
      "mapLoadingFail": "Ein Fehler ist aufgetreten. Die Karte wurde nicht korrekt geladen.",
      "signOut": "Abmelden",
      "builderSupport1": "Story Map Cascade-Builder wird nur in ${CHROME} und ${SAFARI} unterstützt. Cascade-Storys, die Sie mit Builder erstellen, können jedoch in diesen Browsern, Internet Explorer 11+ und Firefox, angezeigt werden.",
      "builderSupport2": "Story Map Cascade-Builder wird nicht auf dem iPad unterstützt. Cascade-Storys, die Sie laden und freigeben hingegen schon.",
      "builderSupport3": "Erstellte und freigegebene Cascade-Storys können in Chrome, Safari, Internet Explorer 11+ angezeigt werden, Story Map Cascade-Builder wird in ${CHROME} und ${SAFARI} jedoch nicht unterstützt.",
      "builderSupport4": "Cascade-Storys können in jedem modernen Webbrowser angezeigt werden. Story Map Cascade-Builder wird jedoch nur in ${CHROME} und ${SAFARI} unterstützt.<br><br>Falls Cascade-Builder einen anderen Browser unterstützen soll, wenden Sie sich an den ${ESRI-SUPPORT} oder ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Achtung:"
    },
    "mobileWarning": {
      "message1": "Sie haben die mobile Version dieser Story angezeigt. Die vollständige Version mit umfangreicheren Medienelementen können Sie auf einem Desktop-Computer testen.",
      "email": "Einen Link zu dieser App per E-Mail senden"
    },
    "cover": {
      "iosEmbedLink": "Hier tippen, um mehr zu erfahren"
    },
    "media": {
      "captionPlaceholder": "Ihre Beschriftung hier...",
      "loadingError": "Auf diesen Inhalt kann nicht zugegriffen werden.",
      "explore": "Erkunden",
      "exploreMap": "Karte erkunden",
      "exploreStop": "Erkundung beenden",
      "sceneNotSupported": "Diese 3D-Karte wird nicht auf Ihrem Gerät unterstützt.",
      "loading1": "Wird geladen...",
      "loading2": "Karte wird geladen...",
      "videoPlayPause": "Wiedergabe/Anhalten",
      "videoMuteUnmute": "Stummschaltung/Stummschaltung aufheben"
    },
    "headerFromCommon": {
      "defaultTagline": "Eine ${STORY_MAP}",
      "share": "Freigeben",
      "tooltipAutoplayDisabled": "Dies ist im Modus für automatische Wiedergabe nicht verfügbar"
    },
    "shareFromCommon": {
      "copy": "Kopieren",
      "copied": "Kopiert",
      "open": "Öffnen Sie",
      "embed": "In Webseite einbetten",
      "embedExplain": "Verwenden Sie den folgenden HTML-Code, um die Story in eine Webseite einzubetten.",
      "size": "Größe (Breite/Höhe):",
      "autoplayLabel": "Modus für automatische Wiedergabe",
      "autoplayExplain1": "Im Modus für automatische Wiedergabe wird die Story regelmäßig fortgesetzt. Er ist ideal für Kiosks oder öffentliche Monitore. In anderen Situationen wird dadurch allerdings die Lesbarkeit der Story beeinträchtigt. Dieses Feature wird für kleine Anzeigegrößen nicht unterstützt.",
      "autoplayExplain2": "Ist dieser Modus aktiviert, stehen Steuerelemente für Wiedergabe/Pause der Story und zum Einstellen der Navigationsgeschwindigkeit zur Verfügung.",
      "linksupdated": "Links wurden aktualisiert!"
    },
    "theme": {
      "lightLabel": "Hell",
      "darkLabel": "Dunkel"
    }
  }
});