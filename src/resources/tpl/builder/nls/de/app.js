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
    "builderPanel": {
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
        "remove": "Entfernen"
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
        "alternativeMedia": "Alternative Medien",
        "explanation": "Einige Medien werden nicht unterstützt oder laufen möglicherweise nicht gut auf Mobilgeräten. Verwenden Sie dieses Fenster, um ein alternatives, für mobile Geräte optimiertes Element festzulegen, das anstelle dieses Mediums bei der Anzeige Ihrer Story auf einem Telefon oder Tablet dargestellt wird.",
        "changeAltImage": "Bild ändern",
        "uploadAltImage": "Bild hinzufügen"
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
      "imageUpload": "Bild wird hochgeladen...",
      "imageUploadSuccess": "Bild wurde erfolgreich hochgeladen",
      "imageUploadFail": "Bild wurde erfolgreich hochgeladen"
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
        "noAltImage": "Medien werden auf Mobilgeräten nicht unterstützt",
        "altImageBroken": "Auf das für diese Medien definierte alternative Bild kann nicht zugegriffen werden."
      },
      "contentWarnings": {
        "noAltImage": "Dieser Medientyp wird auf Mobilgeräten nicht unterstützt. Legen Sie ein alternatives Bild fest, das bei der Anzeige der Story auf Mobilgeräten dargestellt wird.",
        "noAltImageAlt": "Dieser Medientyp wird auf Mobilgeräten nicht unterstützt. Legen Sie auf der Registerkarte \"Mobil\" ein alternatives Bild fest, das bei der Anzeige der Story auf Mobilgeräten dargestellt wird."
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
    }
  }
});