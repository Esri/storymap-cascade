/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Koppelen aan Content",
      "urls_short": "Koppeling",
      "contentType": {
        "error": "Geen geautoriseerde media.",
        "imageOnly": "In dit deel van het verhaal kunt u een afbeelding toevoegen.",
        "imageAndVideo": "In dit deel van het verhaal kunt u een afbeelding of een video toevoegen.",
        "imageVideoWebpage": "In dit deel van het verhaal kunt u een afbeelding, een video of een webpagina toevoegen."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Zoeken naar \"${searchterm}\"...",
        "searchedFor": "Zoekenresultaten voor \"${searchterm}\"",
        "albumsOf": "${username}'s albums",
        "noPhotosFound": "Er zijn geen foto's die overeenstemmen met uw zoekopdracht. Probeer het nogmaals.",
        "noItemsFound": "Er zijn geen items die overeenstemmen met uw zoekopdracht. Probeer het nogmaals.",
        "noItemsInThisStory": "Er is nog geen content van ArcGIS toegevoegd aan dit verhaal.",
        "limitReached": "Er worden 100 items getoond. Als u niet gevonden hebt wat u zocht, probeer dan te zoeken op een trefwoord.",
        "galleryItems": {
          "uploadError": "Onze excuses, dit item kon niet worden geüpload."
        },
        "agol": {
          "remove1": "Verwijder deze ongebruikte afbeelding van uw ArcGIS account.",
          "remove2": "(Als u ze later wenst te gebruiken, moet u ze opnieuw uploaden.)",
          "removeFailed": "Verwijder deze niet-toegankelijke afbeelding uit deze lijst.",
          "modified": "Gewijzigd op ${date}",
          "uploaded": "Geüploaded op ${date}",
          "contentByAuthor": "${contentType} door ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Foto's verkennen op ${Picasa} of ${Google+}"
        },
        "flickr": {
          "photostream": "Fotostream",
          "searchAndBrowse": "Foto's zoeken en verkennen op ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Foto's zoeken op ${Unsplash}",
          "photoBy": "Foto door ${username}",
          "userLink": "Ga naar ${username}'s ${Unsplash} pagina"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Koppelen met content op het web",
            "imageOnly": "Koppelen met een afbeelding op het web",
            "imageAndVideo": "Koppelen met een afbeelding of video op het web"
          },
          "linkText": {
            "imageOnly": "In het bovenstaande vak kunt u een rechtstreekse koppeling maken met foto's.",
            "imageAndVideo1": "In het bovenstaande vak kunt u koppelingen of iframe-codes voor video's van ${YouTube} en ${Vimeo} plakken.",
            "imageAndVideo2": "U kunt ook een rechtstreekse koppeling maken met foto's.",
            "imageVideoWebpage1": "In het bovenstaande vak kunt u koppelingen of iframe-codes voor video's van ${YouTube} en ${Vimeo} plakken.",
            "imageVideoWebpage2": "U kunt ook een rechtstreekse koppeling maken met foto's, webpagina's of webapplicaties.",
            "ender": "Indien mogelijk, gebruik beveiligde (https) koppelingen."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Pagina laden d.m.v. een beveiligde verbinding (https)",
            "embedProtocolWarning1": "Als deze pagina niet in uw verhaal geladen wordt, kan hij geïnbed worden omwille van webbeveiligingsredenen.",
            "embedProtocolWarning2": "Als deze pagina niet in uw verhaal geladen wordt, vink deze optie dan uit en probeer nogmaals. Als de pagina nog steeds niet geladen kan worden, dan kan het niet geïnbed worden omwille van webbeveiligingsredenen.",
            "embedProtocolWarning3": "Als alternatief kunt u een koppeling in uw verhaal toevoegen om de pagina te openen in een nieuw browsertabblad. ${linkText}",
            "linkText": "Meer informatie."
          },
          "placeholder": "${https://}... of ${http://}... of ${<iframe>}",
          "uploadErrors": {
            "generic": "Er is iets misgegaan met het ingevoerde adres. Probeer het nogmaals.",
            "imageOnly1": "In dit deel van het verhaal moet u een afbeelding gebruiken.",
            "imageOnly2": "Geef een koppeling naar een afbeelding op (.jpg, .png, .gif), of kies een afbeelding van ${ArcGIS}, ${Flickr}, ${Google+} of ${Unsplash}.",
            "imageAndVideo1": "In dit deel van het verhaal moet u een afbeelding of video gebruiken.",
            "imageAndVideo2": "Geef een koppeling naar een afbeelding op (.jpg, .png, .gif) of een video op ${YouTube} of ${Vimeo}, of kies een afbeelding van ${ArcGIS}, ${Flickr}, ${Google+} of ${Unsplash}.",
            "badFormat": "De koppeling naar het bestand dat u tracht toe te voegen is niet goed geformatteerd.",
            "inaccessible": "Het bestand dat u tracht toe te voegen ontbreekt of is niet toegankelijk.",
            "tryAgain": "Controleer het adres en probeer het nogmaals.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "image",
              "generic": "media"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-mail of ${Picasa}/${Google+} ID",
          "helpText": "U kunt foto's aan uw verhaal toevoegen die geüploaded zijn naar ${Picasa} of ${Google+}. ${helpLinkText} over het gebruik van afbeeldingen in uw ${Google} account in uw verhalen.",
          "helpLinkText": "Meer weten",
          "cannotFindUser": "Kan gebruiker ${username} niet vinden. Probeer het nogmaals."
        },
        "unsplash": {
          "placeholder": "Foto's zoeken",
          "aboutText": "${Unsplash} is een gratis beheerde verzameling van hoogkwalitatieve foto's.",
          "copyrightText": "Alle foto's die op ${Unsplash} gepubliceerd zijn, zijn onderhevig aan de ${CC0} Licentie. Voor meer informatie ${moreInfoLink}.",
          "moreInfoLink": "hier"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} account",
            "text": "Alle ${Flickr}"
          },
          "placeholders": {
            "user": "Account zoeken",
            "userText": "Dit account doorzoeken op foto's",
            "text": "Foto's zoeken"
          },
          "errors": {
            "cannotFindUser": "Kan gebruiker ${username} niet vinden.",
            "noUserPhotos": "${username} heeft geen openbare foto's.",
            "didYouMean": "Bedoelde u ${username}?",
            "generalUserError": "Er ging iets mis bij het zoeken naar gebruiker ${username}."
          },
          "licenses": {
            "licenseLabel": "Licentie: ",
            "public": "Openbaar domein",
            "commercial": "OK voor commercieel gebruik",
            "nonCommercial": "OK voor niet-commercieel gebruik",
            "reserved": "Alle rechten voorbehouden",
            "any": "Elke licentie"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Dit verhaal",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portaal",
            "myOrg": "${orgname} organisatie",
            "myContent": "Mijn Content"
          },
          "createContent": {
            "or": "OF",
            "dragAndDrop": "Plaats de afbeelding(en) hier",
            "uploadImage": "Zoeken naar afbeelding(en)",
            "agolInfo": "Afbeeldingen worden opgeslagen in uw ArcGIS-account en zijn alleen toegankelijk in uw verhaal.",
            "saveBeforeUpload": "Zodra u dit verhaal opgeslagen hebt, kunt u hier afbeeldingen uploaden naar ArcGIS.",
            "fileTypesImage": "Ondersteunde bestandstypes: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Webmap",
            "webscene": "Webscene",
            "image": "Afbeelding",
            "date": "Datum",
            "sortByDate": "Sorteren op datum",
            "title": "Titel",
            "sortByTitle": "Sorteren op titel",
            "views": "Weergaven",
            "search": "Zoeken op trefwoord of ID"
          }
        }
      }
    }
  }
});