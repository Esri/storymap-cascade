/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Übernehmen",
      "close": "Schließen"
    },
    "header": {
      "sharingNotAvailable": "Dies ist erst beim Freigeben der Story verfügbar",
      "edit": "Bearbeiten"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Lesezeichen",
        "logoSharing": "Logo & Freigabe",
        "theme": "Darstellung"
      },
      "bookmarks": {
        "title": "Abschnitt",
        "bookmark": "Lesezeichen",
        "intro": "Lesezeichen sind Links zu Story-Abschnitten, die in der Kopfzeile angezeigt werden. Durch die Erstellung präziser Lesezeichen für die Hauptabschnitte Ihrer Story können sich die Leser Ihrer Story besser orientieren.",
        "sequentialDefault": "Zusammenfassungsabschnitt (kein Text gefunden)",
        "immersiveDefault": "Immersiver Abschnitt (kein Text gefunden)",
        "titleDefault": "Titelabschnitt (kein Text gefunden)",
        "coverDefault": "Titelabschnitt (kein Text gefunden)",
        "coverAppendage": "(Deckblatt)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "${ESRI} Logo verwenden",
        "useOrgLogo": "Loge der eigenen Organisation verwenden",
        "useOrgLogoHelp": "Das von Ihrem Administrator verwendete Logo verwenden",
        "logoLink": "Logo-Link",
        "logoUploadProgress": "Logo wird hochgeladen",
        "logoUploadSuccess": "Logo wurde erfolgreich hochgeladen",
        "logoUploadError": "Logo konnte nicht hochgeladen werden, es wird zurück zum ${ESRI} Logo gewechselt",
        "customHeaderText": "Tag-Zeile",
        "taglineLinkDisabledTooltip": "Geben Sie eine Tag-Zeile ein, um den Link zu aktivieren",
        "link": "Tag-Zeilen-Link",
        "enableSocialSharing": "Schaltflächen für Freigabe anzeigen"
      },
      "appearance": {
        "themeLabel": "Design",
        "fontLabel": "Schriftarten",
        "previewLabel": "Vorschau",
        "fontsTitleLabel": "Titel",
        "fontsBodyLabel": "Textkörper",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privat",
      "btnOrg": "Organisation",
      "btnPublic": "Öffentlich",
      "btnEveryone": "Alle"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Wird gespeichert",
      "buttonSaved": "Gespeichert",
      "buttonError": "Speichern fehlgeschlagen",
      "buttonShare": "Freigeben",
      "buttonSettings": "Einstellungen",
      "settingsLogoError": "Bei Ihrem Logo ist ein Problem aufgetreten. Klicken Sie, um weitere Informationen zu erhalten.",
      "buttonHelp": "Fordern Sie Unterstützung an oder senden Sie Feedback über GeoNet",
      "buttonPreview": "Story anzeigen",
      "buttonHealth": "Statusbericht",
      "manageStories": "Eigene Storys verwalten",
      "closeWithPendingChange": "Möchten Sie die Aktion wirklich bestätigen? Ihre Änderungen gehen dabei verloren.",
      "coverLabel": "Überdecken",
      "creditsLabel": "Quellennachweis",
      "betaFeedback": "Feedback",
      "betaNote": "Teilen Sie uns Ihre Meinung zu ${APP_NAME} mit, oder ob etwas nicht so funktioniert, wie Sie es erwartet haben.",
      "notSharedNote": "Ihre Story ist nicht freigegeben, nur Sie können sie anzeigen",
      "organizationWarning": "Um sicherzustellen, dass diese Story von anderen Benutzern angezeigt werden kann, müssen ihre Szenen, Szenen-Layer und eingebetteten Apps ebenfalls für Ihre Organisation freigegeben sein. Karten und Karten-Layer werden automatisch freigegeben.",
      "publicWarning": "Um sicherzustellen, dass diese Story von anderen Benutzern angezeigt werden kann, müssen ihre Szenen, Szenen-Layer und eingebetteten Apps ebenfalls für alle Benutzer freigegeben sein. Karten und Karten-Layer werden automatisch freigegeben.",
      "addTitleNote": "Fügen Sie dem Deckblatt einen zu speichernden Titel hinzu",
      "saveError": "Beim Speichern der Story ist ein Fehler aufgetreten.",
      "duplicate": "Duplizieren",
      "organize": "Organisieren",
      "done": "Fertig",
      "invite": "Beim Erstellen der Story werden die Abschnitte hier angezeigt...",
      "mystoriestooltip": "Cascade-Builder warnt Sie bei Problemen in Ihrer Story und unterstützt Sie bei deren Behebung. Aktivieren Sie Szenen und eingebettete Apps manuell, da sie nicht aktiviert sind."
    },
    "immersiveViewPanel": {
      "transition": "Übergang",
      "chooseTransition": "Übergang auswählen",
      "fade": "Überblenden",
      "fadeSlow": "Langsam überblenden",
      "swipeVertical": "Vertikal überblenden",
      "swipeHorizontal": "Horizontal überblenden",
      "none": "Keine",
      "disabledConsecutiveSameMedia": "Nicht verfügbar, wenn aufeinanderfolgende Ansichten dieselben Medien verwenden",
      "disabledTooltipMap": "Um diesen Übergang zu verwenden, müssen sich die Layer in beiden Ansichten unterscheiden und die anderen Karteneigenschaften müssen identisch sein",
      "disabledConsecutiveSameMap": "Nicht verfügbar, wenn aufeinanderfolgende Ansichten dieselbe Karte verwenden",
      "disabledNotInBeta": "Nicht verfügbar, wenn aufeinanderfolgende Ansichten dieselbe Karte verwenden",
      "disabledNonConsecutive": "Nicht verfügbar, da ein anderes nicht aufeinanderfolgendes Medium vorhanden ist",
      "addMedia": "Medien hinzufügen",
      "invite": "Beim Erstellen des immersiven Abschnitts werden die Abschnitte hier angezeigt..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aussehen",
        "manage": "Verwalten",
        "size": "Größe",
        "background": "Hintergrund",
        "mobile": "Mobil",
        "issues": "Probleme",
        "fixIssues": "Probleme beheben"
      },
      "manage": {
        "changeMedia": "Medien ändern",
        "edit": "Bearbeiten",
        "editAside": "Wird auf einer neuen Browser-Registerkarte geöffnet. Speichern und laden Sie diese Story nach dem Speichern Ihrer Änderungen, um Ihre Änderungen anzuzeigen.",
        "remove": "Entfernen",
        "altTextPlaceholder": "Fügen Sie für sehbehinderte Leser eine Beschreibung dieser Medien hinzu...",
        "altTextHelptip": "Alternativtext ist eine Beschreibung visueller Medien, die von Hilfstechnologien wie Sprachausgabe-Software verwendet wird. Dieser ist optional, wird jedoch empfohlen, um den Richtlinien für barrierefreie Webinhalte gemäß WCAG und Section 508 zu entsprechen."
      },
      "appearance": {
        "homeView": "Ursprüngliche Ansicht",
        "audio": "Audio",
        "on": "Ein",
        "muted": "Stummgeschaltet",
        "volumeAside": "Das Video wird automatisch angezeigt, wenn ein Leser diese Ansicht erreicht hat. Wenn Sie den Ton stummschalten, kann er vom Leser nicht aktiviert werden.",
        "view": "Sicht",
        "resetLocation": "Position zurücksetzen",
        "resetLayers": "Layer zurücksetzen",
        "clearPopup": "Pop-up löschen",
        "interaction": "Interaktion",
        "interactionDisabled": "Interaktion deaktiviert",
        "buttonToEnable": "Schaltfläche zum Aktivieren",
        "interactionEnabled": "Interaktion aktiviert",
        "interactionAside": "*Auf Touchscreen-Geräten wird eine Interaktionsschaltfläche angezeigt.",
        "slide": "Folie",
        "noSlides": "Keine Folien verfügbar.",
        "mapExtentPrompt": "Aktualisieren Sie die Karte, um Ihre Informationen zu vermitteln, klicken Sie auf Häkchen, um die Änderungen zu speichern"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Design"
      },
      "size": {
        "small": "Klein",
        "medium": "Mittel",
        "large": "Groß",
        "noCrop": "Große Bilder nicht zuschneiden",
        "noCropTallTooltip": "Nichtzuschneiden eines großen Bilds hat drastische Auswirkungen für die Leser. Um das gesamte Bild betrachten zu können, müssen sie scrollen."
      },
      "background": {
        "noCrop": "Nicht zuschneiden",
        "mostImportantPart": "Wählen Sie den wichtigsten Punkt aus",
        "cropExplanationImmersive": "Wählen Sie einen Punkt auf dem Bild aus, um festzulegen, wie das Bild bei unterschiedlichen Bildschirmgrößen zugeschnitten wird. Der Punkt, den Sie ausgewählt haben, ist immer sichtbar. Aktivieren Sie das Kontrollkästchen \"Nicht zuschneiden\", wenn Ihr Bild vollständig sichtbar sein soll.",
        "cropExplanation": "Wählen Sie einen Punkt auf dem Bild aus, um festzulegen, wie das Bild bei unterschiedlichen Bildschirmgrößen zugeschnitten wird. Der Punkt, den Sie ausgewählt haben, ist immer sichtbar.",
        "color": "Farbe",
        "previews": "Vorschau"
      },
      "altMedia": {
        "alternativeMedia": "Alternatives Bild für mobile Geräte",
        "explanation": "Einige Medien werden nicht unterstützt oder funktionieren möglicherweise auf mobilen Geräten nicht gut. Verwenden Sie dieses Fenster, um ein alternatives Bild festzulegen, das anstelle dieser Medien bei der Anzeige Ihrer Story auf einem Smartphone oder Tablet dargestellt wird.",
        "changeAltImage": "Bild ändern",
        "uploadAltImage": "Alternatives Bild hinzufügen"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Link zu Inhalten",
        "urls_short": "Verknüpfen",
        "contentType": {
          "error": "Keine autorisierten Daten.",
          "imageOnly": "In diesem Teil der Story können Sie ein Bild hinzufügen.",
          "imageAndVideo": "In diesem Teil der Story können Sie ein Bild oder Video hinzufügen.",
          "imageVideoWebpage": "In diesem Teil der Story können Sie ein Audio, Bild, Video oder eine Webseite hinzufügen."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "\"${searchterm}\" wird gesucht...",
          "searchedFor": "Suchergebnisse für \"${searchterm}\"",
          "albumsOf": "Alben von ${username}",
          "noPhotosFound": "Keine Fotos stimmen mit Ihrer Suche überein. Versuchen Sie es erneut.",
          "noItemsFound": "Keine Elemente stimmen mit Ihrer Suche überein. Versuchen Sie es erneut.",
          "noItemsInThisStory": "Dieser Story wurde noch kein Inhalt aus ArcGIS hinzugefügt.",
          "limitReached": "Es werden 100 Elemente angezeigt. Wenn das gewünschte Element nicht gefunden wurde, können Sie es mit einer Schlagwortsuche versuchen.",
          "galleryItems": {
            "uploadError": "Dieses Element konnte nicht hochgeladen werden."
          },
          "agol": {
            "remove1": "Löschen Sie dieses nicht verwendete Bild aus Ihrem ArcGIS-Konto.",
            "remove2": "(Sie müssen es erneut hochladen, wenn Sie es später verwenden möchten.)",
            "removeFailed": "Entfernen Sie dieses nicht aufrufbare Bild aus dieser Liste.",
            "modified": "Geändert am ${date}",
            "uploaded": "Hochgeladen am ${date}",
            "contentByAuthor": "${contentType} nach ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "${Picasa} oder ${Google+} nach Fotos durchsuchen"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "${Flickr} nach Fotos durchsuchen",
            "captionStarter": "Foto von ${USERNAME} auf ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "${Unsplash} nach Fotos durchsuchen",
            "photoBy": "Foto nach ${username}",
            "userLink": "Zur ${Unsplash}-Seite von ${username} wechseln",
            "captionStarter": "Foto von ${USERNAME} auf ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Link zu Inhalt im Web",
              "imageOnly": "Link zu einem Bild im Web",
              "imageAndVideo": "Link zu einem Bild oder Video im Web"
            },
            "linkText": {
              "imageOnly": "Im Feld oben können Sie einen direkten Link zu einem Foto bereitstellen.",
              "imageAndVideo1": "Im Feld oben können Sie einen Link oder iframe-Code für ein Video aus ${YouTube} oder ${Vimeo} einfügen.",
              "imageAndVideo2": "Sie können auch einen direkten Link zu einem Foto bereitstellen.",
              "imageVideoWebpage1": "Im Feld oben können Sie einen Link oder iframe-Code für Webinhalt wie ein dynamisches Diagramm oder ein Video aus ${YouTube} oder ${Vimeo} einfügen.",
              "imageVideoWebpage2": "Sie können auch einen direkten Link zu einem Foto, einem Video, einer Audiodatei, einer Webseite oder einer Web-App bereitstellen.",
              "ender": "Verwenden Sie immer sichere Links (HTTPS). Wenn der Inhalt HTTPS nicht unterstützt, fügen Sie im Text der Story einen entsprechenden Link hinzu, damit die Leser ihn auf einer neuen Browser-Registerkarte anzeigen können.",
              "httpsError": "Link muss mit HTTPS beginnen"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Seite über eine sichere Verbindung (HTTPS) laden",
              "embedProtocolWarning1": "Wenn diese Seite nicht in Ihre Story geladen werden kann, kann sie aus Gründen der Websicherheit nicht eingebettet werden.",
              "embedProtocolWarning2": "Wenn diese Seite nicht in Ihre Story geladen werden kann, deaktivieren Sie diese Option, und versuchen Sie es erneut. Wenn die Seite trotzdem nicht geladen werden kann, kann sie aus Gründen der Websicherheit nicht eingebettet werden.",
              "embedProtocolWarning3": "Alternativ können Sie Ihrer Zusammenfassung einen Link hinzufügen, um die Seite in einer neuen Browser-Registerkarte zu öffnen. ${linkText}",
              "linkText": "Weitere Informationen."
            },
            "placeholder": "${https://}... oder ${<iframe>}",
            "uploadErrors": {
              "generic": "Bei der eingegebenen Adresse ist ein Fehler aufgetreten. Versuchen Sie es erneut.",
              "imageOnly1": "Sie müssen in diesem Teil der Story ein Bild verwenden.",
              "imageOnly2": "Stellen Sie einen Link zu einem Bild (.jpg, .png, .gif) bereit, oder wählen Sie ein Bild von ${ArcGIS}, ${Flickr}, ${Google+} oder ${Unsplash} aus.",
              "imageAndVideo1": "Sie müssen in diesem Teil der Story ein Bild oder Video verwenden.",
              "imageAndVideo2": "Stellen Sie einen Link zu einem Bild (.jpg, .png, .gif) oder Video auf ${YouTube} oder ${Vimeo} bereit, oder wählen Sie ein Bild von ${ArcGIS}, ${Flickr}, ${Google+} oder ${Unsplash} aus.",
              "badFormat": "Der Link zur hinzuzufügenden Datei ist falsch formatiert.",
              "inaccessible": "Die Datei, die Sie hinzufügen möchten, fehlt oder es kann nicht darauf zugegriffen werden.",
              "tryAgain": "Überprüfen Sie die Adresse, und versuchen Sie es erneut.",
              "mediaTypes": {
                "VIDEO": "Videosammlung",
                "IMAGE": "Bild",
                "generic": "Medien"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Durch die Verwendung eines Drittanbieter-Service stimmen Sie dessen Geschäftsbedingungen zu: ",
          "googlePhotos": {
            "placeholder": "E-Mail-Adresse oder ${Picasa}/${Google+}-ID",
            "helpText": "Sie können Ihrer Story Fotos hinzufügen, die in ${Picasa} oder ${Google+} hochgeladen wurden. Weitere Informationen dazu, wie Sie in Ihrem ${Google}-Konto gespeicherte Bilder in Ihren Storys verwenden, finden Sie unter ${helpLinkText}.",
            "helpLinkText": "Weitere Informationen",
            "cannotFindUser": "${username} kann nicht gefunden werden. Versuchen Sie es erneut."
          },
          "unsplash": {
            "placeholder": "Fotos suchen",
            "aboutText": "${Unsplash} ist eine kuratierte Sammlung kostenloser, qualitativ hochwertiger Fotos.",
            "copyrightText": "Alle Fotos sind unter der ${Unsplash}-Lizenz lizenziert. Weitere Informationen finden Sie unter ${moreInfoLink}.",
            "moreInfoLink": "hier"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr}-Konto",
              "text": "${Flickr} gesamt"
            },
            "placeholders": {
              "user": "Konto suchen",
              "userText": "Dieses Konto nach Fotos durchsuchen",
              "text": "Fotos suchen"
            },
            "errors": {
              "cannotFindUser": "${username} kann nicht gefunden werden.",
              "noUserPhotos": "${username} verfügt über keine öffentlichen Fotos.",
              "didYouMean": "Meinten Sie ${username}?",
              "generalUserError": "Bei der Suche nach ${username} ist ein Fehler aufgetreten."
            },
            "licenses": {
              "licenseLabel": "Lizenz: ",
              "public": "Öffentliche Domäne",
              "commercial": "Für kommerzielle Verwendung geeignet",
              "nonCommercial": "Für nicht kommerzielle Verwendung geeignet",
              "reserved": "Alle Rechte vorbehalten",
              "any": "Jede Lizenz"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Diese Story",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname}-Organisation",
              "myContent": "Eigene Inhalte"
            },
            "createContent": {
              "createNewMap": "Eine neue Karte erstellen",
              "or": "OR",
              "dragAndDropImage": "Bilder ablegen",
              "dragAndDropImageAudio": "Bilder oder Audio ablegen",
              "uploadButton": "Durchsuchen",
              "agolInfo": "Auf hochgeladene Bilder und Audios kann nur in dieser Story zugegriffen werden.",
              "saveBeforeUpload": "Nachdem Sie diese Story gespeichert haben, können Sie hier Bilder und Audios in ArcGIS hochladen.",
              "fileExtsImage": "Unterstützte Typen: PNG, JPG, GIF, BMP.",
              "fileExtsImageAudio": "Unterstützte Typen: PNG, JPG, GIF, BMP, MP3.",
              "maxSize": "Max. 10 MB pro Datei."
            },
            "filterAndSort": {
              "webmap": "Webkarte",
              "webscene": "Webszene",
              "image": "Bilddaten",
              "audio": "Audio",
              "date": "Datum",
              "sortByDate": "Nach Datum sortieren",
              "title": "Titel",
              "sortByTitle": "Nach Titel sortieren",
              "views": "Ansichten",
              "search": "Nach Schlagwort oder ID suchen"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Karte bearbeiten",
      "unauthorizedDomain": "Sie befinden sich nicht in einer Domäne, die für die Verwendung des Karten-Editors autorisiert ist",
      "loading": "Bitte warten. Der Karten-Editor wird geladen.",
      "saving": "Karte wird gespeichert",
      "success": "Karte wurde gespeichert",
      "cancelTitle": "Alle nicht gespeicherten Änderungen verwerfen?",
      "errorSave": "Die Karte kann nicht gespeichert werden. Versuchen Sie es erneut.",
      "loadFail": "Der Karten-Editor kann nicht geladen werden",
      "close": "Schließen",
      "save": "Speichern",
      "confirm": "Ja, Karte schließen",
      "deny": "Nein, weiterarbeiten"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Setzen Sie Ihre Story hier fort..."
      },
      "blockAdd": {
        "text": "Text",
        "media": "Medien",
        "title": "Titel",
        "immersive": "Immersiv"
      },
      "link": {
        "invite": "Fügen oder geben Sie einen Link ein..."
      },
      "color": {
        "choose": "Auswählen",
        "cancel": "Abbrechen",
        "clear": "Farbe löschen"
      }
    },
    "imageGallery": {
      "addImage": "Ein anderes Bild hinzufügen",
      "moveBackward": "Vorwärts bewegen",
      "moveForward": "Rückwärts bewegen"
    },
    "cover": {
      "titlePrompt": "Geben Sie den Story-Titel ein...",
      "subtitlePrompt": "Führen Sie zunächst den Bildlauf nach unten durch, oder geben Sie einen optionalen Untertitel ein",
      "mediaPlaceholder": "Fügen Sie Ihr Bild oder Video hinzu",
      "saveError": "Konnte nicht gespeichert werden, da Sie bereits über ein Element mit diesem Titel verfügen"
    },
    "credits": {
      "sectionInvite": "Fügen Sie einen Abschnitt für Quellennachweise hinzu",
      "warning": "Beide Felder müssen ausgefüllt sein",
      "content": "Inhalt...",
      "source": "Quelle...",
      "linkPrompt": "Optionaler Link...",
      "introductionPlaceholder": "Geben Sie eine optionale Einleitung im Abschnitt für Quellennachweise ein..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Design"
      },
      "panelConfig": {
        "position": "Position",
        "theme": "Design",
        "size": "Größe",
        "background": "Hintergrund",
        "layout": "Bildlauf (für alle Bereiche)"
      }
    },
    "title": {
      "placeholder": "Geben Sie einen Titel ein..."
    },
    "media": {
      "mediaUpload": "Medien werden hochgeladen...",
      "mediaUploadSuccess": "Medien wurden erfolgreich hochgeladen",
      "mediaUploadFail": "Medien konnten nicht hochgeladen werden"
    },
    "controller": {
      "sectionOrganize": "Sie haben die Abschnitte organisiert",
      "immersiveOrganize": "Sie haben die Ansichten organisiert",
      "sectionDelete": "Sie haben einen Abschnitt gelöscht",
      "viewDelete": "Sie haben eine Ansicht gelöscht"
    },
    "notification": {
      "cancel": "Abbrechen",
      "close": "Schließen",
      "undo": "Rückgängig"
    },
    "sections": {
      "sequence": "Narrativ",
      "immersive": "Immersiv",
      "title": "Titel"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "Bild",
        "audio": "Audio",
        "webmap": "Karte",
        "webscene": "Szene",
        "video": "Videosammlung",
        "content": "Inhalt",
        "webpage": "Webseite"
      },
      "placeholders": {
        "generic": "Auf diesen Inhalt kann nicht zugegriffen werden.",
        "deleted": "Dieses Element wurde gelöscht.",
        "inaccessible": "Auf diesen Inhalt kann nicht zugegriffen werden.",
        "unauthorized": "Sie sind nicht autorisiert, diesen Inhalt anzuzeigen.",
        "unshared": "Dieses Element ist nicht auf die gleiche Weise wie Ihre Story freigegeben.",
        "othersUnshared": "Dieses Element ist nicht auf die gleiche Weise wie Ihre Story freigegeben.",
        "subscriptionContent": "Diese Karte enthält einen Abonnenten-Layer.",
        "premiumContent": "Diese Karte enthält einen Premium-Layer.",
        "secureService": "Diese Karte enthält einen sicheren Layer."
      },
      "contentIssues": {
        "noAltImage": "Medien funktionieren möglicherweise auf mobilen Geräten nicht",
        "noAltImageUnsupported": "Auf mobilen Geräten nicht unterstützte Medien",
        "noAltImageWarning": "Medien funktionieren möglicherweise auf mobilen Geräten nicht",
        "altImageBroken": "Auf das für diese Medien definierte alternative Bild kann nicht zugegriffen werden.",
        "httpMedia": "Unsichere Medien",
        "httpContent": "Unsicherer Inhalt"
      },
      "contentWarnings": {
        "noAltImage": "Sie sollten die Story vor der Freigabe auf mobilen Geräten testen. Wenn diese Medien nicht wie erwartet funktionieren, verwenden Sie die Schaltfläche unten, um ein alternatives Bild hinzuzufügen, das bei der Anzeige Ihrer Story auf einem Smartphone oder Tablet dargestellt wird.",
        "noAltImageUnsupported": "Diese Medien funktionieren auf mobilen Geräten nicht. Verwenden Sie die Schaltfläche unten, um ein alternatives Bild hinzuzufügen, das bei der Anzeige Ihrer Story auf einem Smartphone oder Tablet dargestellt wird.",
        "noAltImageWarning": "Sie sollten die Story vor der Freigabe auf mobilen Geräten testen. Wenn diese Medien nicht wie erwartet funktionieren, verwenden Sie die Schaltfläche unten, um ein alternatives Bild hinzuzufügen, das bei der Anzeige Ihrer Story auf einem Smartphone oder Tablet dargestellt wird.",
        "noAltImageAlt": "Dieser Medientyp wird auf mobilen Geräten nicht unterstützt oder funktioniert auf mobilen Geräten möglicherweise nicht richtig. Legen Sie auf der Registerkarte \"Mobil\" ein alternatives Bild fest, das bei der Anzeige der Story auf einem Smartphone oder Tablet dargestellt wird."
      },
      "descriptions": {
        "httpAudioUnfixable": "Dieses Audio unterstützt HTTPS nicht. Entfernen Sie es aus der Story, oder ersetzen Sie es durch einen Link.",
        "httpAudioUncheckable": "Dieses Audio hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für dieses Audio eine sichere HTTPS-URL zu verwenden. Falls dies nicht funktioniert, entfernen Sie das Audio aus der Story oder ersetzen Sie es durch einen Hyperlink.",
        "httpAudioFixable": "Dieses Audio hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für dieses Audio eine sichere HTTPS-URL zu verwenden.",
        "httpWebpageUnfixable": "Diese Webseite unterstützt HTTPS nicht. Entfernen Sie sie aus der Story, oder ersetzen Sie sie durch einen Screenshot oder Link.",
        "httpWebpageUncheckable": "Diese Webseite hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für diese Webseite eine sichere HTTPS-URL zu verwenden. Falls dies nicht funktioniert, entfernen Sie die Webseite aus der Story oder ersetzen Sie sie durch einen Screenshot oder Hyperlink.",
        "httpWebpageFixable": "Diese Webseite hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für diese Webseite eine sichere HTTPS-URL zu verwenden.",
        "httpVideoUnfixable": "Dieses Video unterstützt HTTPS nicht. Entfernen Sie es aus der Story, oder ersetzen Sie es durch einen Screenshot oder Link.",
        "httpVideoUncheckable": "Dieses Video hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für dieses Video eine sichere HTTPS-URL zu verwenden. Falls dies nicht funktioniert, entfernen Sie das Video aus der Story oder ersetzen Sie es durch einen Screenshot oder Hyperlink.",
        "httpVideoFixable": "Dieses Video hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für dieses Video eine sichere HTTPS-URL zu verwenden.",
        "httpImageUnfixable": "Dieses Bild unterstützt HTTPS nicht. Entfernen Sie es aus der Story, oder ersetzen Sie es durch einen Link.",
        "httpImageUncheckable": "Dieses Bild hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für dieses Bild eine sichere HTTPS-URL zu verwenden. Falls dies nicht funktioniert, entfernen Sie das Bild aus der Story oder ersetzen Sie es durch einen Hyperlink.",
        "httpImageFixable": "Dieses Bild hat eine unsichere URL (HTTP). Klicken Sie auf die unten stehende Schaltfläche, um für dieses Bild eine sichere HTTPS-URL zu verwenden.",
        "httpLayer": "Dieser Layer hat eine unsichere URL (HTTP).",
        "inaccessibleLogo": "Auf dieses Logo kann nicht zugegriffen werden. Ersetzen Sie es durch ein anderes Bild.",
        "httpLogoUnfixable": "Dieses Logo unterstützt HTTPS nicht. Ersetzen Sie es durch ein anderes Bild.",
        "httpLogoFixable": "Dieses Logo hat eine unsichere URL (HTTP). Verwenden Sie für das Logo eine HTTPS-URL.",
        "httpLogoUncheckable": "Dieses Logo hat eine unsichere URL (HTTP). Verwenden Sie für das Logo eine HTTPS-URL, oder ersetzen Sie es durch ein anderes Bild."
      },
      "tooltips": {
        "httpAudioFixable": "Klicken Sie auf die Schaltfläche, um für dieses Audio eine sichere HTTPS-URL zu verwenden.",
        "httpAudioUncheckable": "Verwenden Sie für dieses Audio eine sichere HTTPS-URL. Falls dies nicht funktioniert, entfernen Sie das Audio aus der Story oder ersetzen Sie es durch einen Link.",
        "httpWebpageFixable": "Klicken Sie auf die Schaltfläche, um für diese Webseite eine sichere HTTPS-URL zu verwenden.",
        "httpWebpageUncheckable": "Verwenden Sie für diese Webseite eine sichere HTTPS-URL. Falls dies nicht funktioniert, entfernen Sie die Webseite aus der Story oder ersetzen Sie sie durch einen Screenshot oder Link.",
        "httpVideoFixable": "Klicken Sie auf die Schaltfläche, um für dieses Video eine sichere HTTPS-URL zu verwenden.",
        "httpVideoUncheckable": "Verwenden Sie für dieses Video eine sichere HTTPS-URL. Falls dies nicht funktioniert, entfernen Sie das Video aus der Story oder ersetzen Sie es durch einen Screenshot oder Link.",
        "httpImageFixable": "Klicken Sie auf die Schaltfläche, um für dieses Bild eine sichere HTTPS-URL zu verwenden.",
        "httpImageUncheckable": "Verwenden Sie für dieses Bild eine sichere HTTPS-URL. Falls dies nicht funktioniert, entfernen Sie das Bild aus der Story oder ersetzen Sie es durch einen Link.",
        "httpLayerMyMap": "Aktualisieren Sie den Layer auf der Elementseite der Karte, um HTTPS zu verwenden. Falls der Layer nicht aktualisiert werden kann, entfernen Sie ihn aus der Karte.",
        "httpLayerNotMyMap": "Erstellen Sie eine Kopie der Karte, und aktualisieren Sie den Layer, um HTTPS zu verwenden. Falls der Layer nicht aktualisiert werden kann, entfernen Sie ihn aus der Karte.",
        "clickLearnMore": "Klicken Sie, um weitere Informationen zu erhalten."
      },
      "fixButtons": {
        "agolItemPage": "Elementseite",
        "openTheMap": "Karte öffnen",
        "updateAudio": "Audio-URL korrigieren",
        "updateWebpages": "Webseiten-URL korrigieren",
        "updateVideos": "Video-URL korrigieren",
        "updateImages": "Bild-URL korrigieren"
      },
      "mapIssues": {
        "fixButton": "Probleme beheben",
        "nofixButton": "Probleme",
        "mapLabel": "Karte:",
        "summaries": {
          "unshared": "Nicht freigegebener Inhalt",
          "othersUnshared": "Nicht freigegebener Inhalt einer anderen Person",
          "subscriptionContent": "Abonnenteninhalt",
          "premiumContent": "Premium-Inhalte",
          "secureContent": "Sicherer Inhalt",
          "deleted": "Gelöschter Inhalt",
          "inaccessible": "Nicht aufrufbarer Inhalt",
          "unauthorized": "Nicht autorisierter Inhalt"
        },
        "descriptions": {
          "unshared": "Dieser Inhalt wird nicht auf die gleiche Weise freigegeben wie Ihre Story.",
          "othersUnshared": "Dieser Inhalt befindet sich im Besitz einer anderen Person und wird nicht auf die gleiche Weise freigegeben wie Ihre Story.",
          "othersUnsharedAuthorized": "Dieser Inhalt befindet sich im Besitz einer anderen Person, Sie sind jedoch berechtigt, ihn freizugeben.",
          "inaccessible": "Auf diesen Inhalt kann nicht zugegriffen werden.",
          "deleted": "Dieser Inhalt wurde gelöscht.",
          "unauthorized": "Sie sind nicht autorisiert, diesen Inhalt anzuzeigen.",
          "popupFeatureLayer": "Die Pop-ups eines gekachelten Layers stammen aus einem Feature-Layer, der nicht auf die gleiche Weise freigegeben wurde wie Ihre Story.",
          "subscriptionContent": "Sie müssen Abonnenteninhalt zur öffentlichen Verwendung autorisieren.",
          "premiumContent": "Sie müssen Premium-Inhalt zur öffentlichen Verwendung autorisieren.",
          "secureService": "Ihre Leser können nicht auf gesicherte Inhalte zugreifen.",
          "missingItemWarning": "Das mit diesem Layer verknüpfte Element wurde gelöscht."
        },
        "tooltips": {
          "unshared": "Klicken Sie hier, um weitere Informationen zum Freigeben zu erhalten.",
          "othersUnshared": "Sie sind nicht berechtigt, Inhalte freizugeben, die sich im Besitz anderer Benutzer befinden. Bitten Sie den Besitzer, den Inhalt für Sie freizugeben, entfernen Sie die Karte aus Ihrer Story, oder bearbeiten Sie die Karte, um die Layer zu entfernen, die sich nicht in Ihrem Besitz befinden. Klicken Sie hier, um weitere Informationen zum Bearbeiten von Karten zu erhalten.",
          "inaccessible": "Entfernen Sie diese Karte aus Ihrer Story, oder bearbeiten Sie sie, um die nicht aufrufbaren Layer zu entfernen. Klicken Sie hier, um weitere Informationen zum Bearbeiten von Karten zu erhalten.",
          "deleted": "Entfernen Sie diese Karte aus Ihrer Story, oder bearbeiten Sie sie, um die fehlenden Layer zu entfernen. Klicken Sie hier, um weitere Informationen zum Bearbeiten von Karten zu erhalten.",
          "unauthorized": "Entfernen Sie diese Karte aus Ihrer Story, oder bearbeiten Sie sie, um die nicht autorisierten Layer zu entfernen. Klicken Sie hier, um weitere Informationen zum Bearbeiten von Karten zu erhalten.",
          "popupFeatureLayer": "Die Pop-ups eines gekachelten Layers stammen aus einem Feature-Layer, der nicht auf die gleiche Weise freigegeben wurde wie Ihre Story.",
          "subscriptionContent": "Abonnenteninhalte verbrauchen keine Credits. Klicken Sie hier, um weitere Informationen zu erhalten.",
          "premiumContent": "Für Ihre Organisation fallen für jede Anzeige eines Premium-Layers in Ihrer Story Credits an. Klicken Sie hier, um weitere Informationen zu erhalten.",
          "secureService": "Entfernen Sie den gesicherten Inhalt aus Ihrer Story, oder klicken Sie hier, um weitere Informationen zum Autorisieren von Inhalten zur Verwendung durch andere Benutzer zu erhalten.",
          "missingItemWarning": "Dieser Layer funktioniert weiterhin, dessen Symbole, Pop-ups und Name wurden jedoch möglicherweise geändert. Überprüfen Sie, ob der Layer wie erwartet dargestellt wird, oder entfernen Sie ihn aus Ihrer Story."
        },
        "fixButtons": {
          "share": "Freigeben",
          "hide": "Ausblenden",
          "authorize": "Autorisieren Sie",
          "remove": "Entfernen",
          "help": "Hilfe aufrufen",
          "ignore": "Ignorieren",
          "confirm": "Bestätigen",
          "edit": "Karte bearbeiten"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Einige Karten und Layer wurden auch freigegeben",
          "alsoSharedMaps": "Einige Karten wurden auch freigegeben",
          "alsoSharedLayers": "Einige Layer wurden auch freigegeben",
          "sharedOthersContent": "Sie haben Ihre Administratorberechtigungen verwendet, um den Inhalt eines anderen Benutzers freizugeben."
        }
      },
      "storyHealth": {
        "healthy": "Keine Probleme",
        "notHealthy": "Probleme beheben",
        "warnings": "Warnungen anzeigen"
      }
    },
    "saveErrorSocial": {
      "title": "Freigabe für Social Media",
      "panel1": "Ihre Story wird in Social Media möglicherweise nicht ordnungsgemäß dargestellt, da der Titel Ihres ArcGIS-Webanwendungselements nicht mit dem Titel der Story übereinstimmt.",
      "panel1tooltip": "Wenn Sie einen Titel, eine Zusammenfassung und eine Miniaturansicht definieren, sieht Ihre Story wie folgt aus:",
      "panel2": "Welchen Titel möchten Sie in den Social Media verwenden?",
      "panel2q1": "Titel der Story (empfohlen)",
      "panel2q1tooltip": "Wenn Sie diese Option wählen, wird der Elementtitel in den Titel Ihrer Story geändert und alle weitere Änderungen im Builder werden synchronisiert.",
      "panel2q2": "Elementtitel",
      "panel3": "Wenn Sie das Aussehen Ihrer Story in den Social Media zusätzlich verbessern möchten, fügen Sie mithilfe von ${MYSTORIES} eine Zusammenfassung und eine Miniaturansicht hinzu.",
      "panel4": "Für diese Story keine Warnmeldung mehr anzeigen",
      "save": "Speichern",
      "mystories": "Eigene Storys"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Wichtige Informationen zur Websicherheit von Story-Maps",
      "s1h1": "Esri verbessert die Sicherheit von Story-Maps",
      "s1p1": "Das Internet bildet den Rahmen für Ihre Story-Maps, und daher arbeitet die Web-Community stets daran, bessere Sicherheitsvorkehrungen zu entwickeln und umzusetzen. HTTPS, womit eine sichere Verbindung für im Internet übermittelte Inhalte hergestellt wird, setzt sich zunehmend als die Standardmethode für den Zugriff auf Webinhalte durch. Der Großteil der modernen Browser zeigt nun eine Warnmeldung an, wenn HTTP anstelle von HTTPS verwendet wird. Aufgrund dieses neuen Standards empfehlen wir dringend, für das Erstellen und Freigeben von Story-Maps HTTPS-Links zu verwenden und ausschließlich HTTPS URLs zu verwenden, wenn Sie in eine Story-Map Webinhalt einbetten oder Links zu Bildern hinzufügen.",
      "s1p2": "Konkret bedeutet dies, dass auf eine Story-Map und alle zugehörigen Inhalte (Bilder, Layer, eingebettete Apps und Websites) über HTTPS-Links anstelle von HTTP-Links zugegriffen werden sollte. Auf diese Weise wird eine gute Benutzererfahrung für Ihre Leser sichergestellt, da die meisten Webbrowser anzeigen, dass Ihre Storys sicher sind.",
      "s2h1": "Was muss ich tun?",
      "s2p1": "Esri arbeitet daran, einen einfachen Übergang für Autoren und Leser von Story-Maps sicherzustellen. In den Story-Map-Buildern und in \"Eigene Storys\" stehen nun Werkzeuge zur Verfügung, mit denen Sie unsichere Inhalte (HTTP) in Ihren Storys finden können. Es werden ebenfalls Empfehlungen für die Problembehebung gegeben. Überprüfen Sie Ihre Storys auf unsichere Inhalte, und wechseln Sie so bald wie möglich zu HTTPS.",
      "action1": "Schließen",
      "action2": "Eigene Storys jetzt überprüfen",
      "action3": "Weitere Informationen",
      "floatingNotification": "Diese Story enthält unsichere Inhalte (HTTP). Überprüfen und beheben Sie diese Probleme."
    }
  }
});