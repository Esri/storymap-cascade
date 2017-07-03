/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Link zu Inhalten",
      "urls_short": "Link",
      "contentType": {
        "error": "Keine autorisierten Daten.",
        "imageOnly": "In diesem Teil der Story können Sie ein Bild hinzufügen.",
        "imageAndVideo": "In diesem Teil der Story können Sie ein Bild oder Video hinzufügen.",
        "imageVideoWebpage": "In diesem Teil der Story können Sie ein Bild, ein Video oder eine Webseite hinzufügen."
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
          "searchAndBrowse": "${Flickr} nach Fotos durchsuchen"
        },
        "unsplash": {
          "searchAndBrowse": "${Unsplash} nach Fotos durchsuchen",
          "photoBy": "Foto nach ${username}",
          "userLink": "Zur ${Unsplash}-Seite von ${username} wechseln"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Link zu Inhalt im Web",
            "imageOnly": "Link zu einem Bild im Web",
            "imageAndVideo": "Link zu einem Bild oder Video im Web"
          },
          "linkText": {
            "imageOnly": "Im Feld oben können Sie einen direkten Link zu Fotos bereitstellen.",
            "imageAndVideo1": "Im Feld oben können Sie Links oder iframe-Code für Videos aus ${YouTube} und ${Vimeo} einfügen.",
            "imageAndVideo2": "Sie können auch direkte Links zu Fotos bereitstellen.",
            "imageVideoWebpage1": "Im Feld oben können Sie Links oder iframe-Code für Videos aus ${YouTube} und ${Vimeo} einfügen.",
            "imageVideoWebpage2": "Sie können auch direkte Links zu Fotos, Webseiten oder Webanwendungen bereitstellen.",
            "ender": "Verwenden Sie nach Möglichkeit sichere Links (HTTPS)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Seite über eine sichere Verbindung (HTTPS) laden",
            "embedProtocolWarning1": "Wenn diese Seite nicht in Ihre Story geladen werden kann, kann sie aus Gründen der Websicherheit nicht eingebettet werden.",
            "embedProtocolWarning2": "Wenn diese Seite nicht in Ihre Story geladen werden kann, deaktivieren Sie diese Option, und versuchen Sie es erneut. Wenn die Seite trotzdem nicht geladen werden kann, kann sie aus Gründen der Websicherheit nicht eingebettet werden.",
            "embedProtocolWarning3": "Alternativ können Sie Ihrer Zusammenfassung einen Link hinzufügen, um die Seite in einer neuen Browser-Registerkarte zu öffnen. ${linkText}",
            "linkText": "Weitere Informationen."
          },
          "placeholder": "${https://}... oder ${http://}... oder ${<iframe>}",
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
              "VIDEO": "Video",
              "IMAGE": "Bild",
              "generic": "Medien"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-Mail-Adresse oder ${Picasa}/${Google+}-ID",
          "helpText": "Sie können Ihrer Story Fotos hinzufügen, die in ${Picasa} oder ${Google+} hochgeladen wurden. Weitere Informationen dazu, wie Sie in Ihrem ${Google}-Konto gespeicherte Bilder in Ihren Storys verwenden, finden Sie unter ${helpLinkText}.",
          "helpLinkText": "Weitere Informationen",
          "cannotFindUser": "${username} kann nicht gefunden werden. Versuchen Sie es erneut."
        },
        "unsplash": {
          "placeholder": "Fotos suchen",
          "aboutText": "${Unsplash} ist eine kuratierte Sammlung kostenloser, qualitativ hochwertiger Fotos.",
          "copyrightText": "Alle in ${Unsplash} veröffentlichten Fotos sind unter der ${CC0}-Lizenz lizenziert. Weitere Informationen finden Sie unter ${moreInfoLink}.",
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
            "or": "OR",
            "dragAndDrop": "Bild(er) hier ablegen",
            "uploadImage": "Bilder suchen",
            "agolInfo": "Bilder werden in Ihrem ArcGIS-Konto gespeichert und können nur innerhalb Ihrer Story abgerufen werden.",
            "saveBeforeUpload": "Nachdem Sie diese Story gespeichert haben, können Sie hier Bilder in ArcGIS hochladen.",
            "fileTypesImage": "Unterstützte Dateitypen: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Webkarte",
            "webscene": "Webszene",
            "image": "Bild",
            "date": "Datum",
            "sortByDate": "Nach Datum sortieren",
            "title": "Titel",
            "sortByTitle": "Nach Titel sortieren",
            "views": "Aufrufe",
            "search": "Nach Schlagwort oder ID suchen"
          }
        }
      }
    }
  }
});