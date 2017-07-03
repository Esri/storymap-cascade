/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Link til indhold",
      "urls_short": "Link",
      "contentType": {
        "error": "Ingen autoriserede medier.",
        "imageOnly": "Du kan tilføje et billede i denne del af din historie.",
        "imageAndVideo": "Du kan tilføje et billede eller en video i denne del af din historie.",
        "imageVideoWebpage": "Du kan tilføje et billede, en video eller en webside i denne del af din historie."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Søger efter \"${searchterm}\"...",
        "searchedFor": "Søgeresultater for \"${searchterm}\"...",
        "albumsOf": "${username}s albummer",
        "noPhotosFound": "Ingen fotos matchede din søgning. Prøv igen.",
        "noItemsFound": "Ingen elementer matchede din søgning. Prøv igen.",
        "noItemsInThisStory": "Intet indhold fra ArcGIS er blevet føjet til denne historie endnu.",
        "limitReached": "Viser 100 elementer. Hvis du ikke fandt det, du søgte, kan du prøve en nøgleordssøgning.",
        "galleryItems": {
          "uploadError": "Beklager, dette element kunne ikke overføres."
        },
        "agol": {
          "remove1": "Slet dette ubrugte billede fra din ArcGIS-konto.",
          "remove2": "(Du skal overføre det igen, hvis du beslutter at bruge det senere).",
          "removeFailed": "Fjern dette utilgængelige billede fra denne liste.",
          "modified": "Ændret ${date}",
          "uploaded": "Overført ${date}",
          "contentByAuthor": "${contentType} af ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Gennemse fotos på ${Picasa} eller ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Søg efter og find fotos på ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Søg efter fotos på ${Unsplash}",
          "photoBy": "Foto af ${username}",
          "userLink": "Gå til ${username}s ${Unsplash} side"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Link til indhold på internettet",
            "imageOnly": "Link til et billede på internettet",
            "imageAndVideo": "Link til et billede eller en video på internettet"
          },
          "linkText": {
            "imageOnly": "I boksen ovenfor kan du linke direkte til fotos.",
            "imageAndVideo1": "I boksen ovenfor kan du indsætte links eller iframe-kode til videoer på ${YouTube} og ${Vimeo}.",
            "imageAndVideo2": "Du kan også linke direkte til fotos.",
            "imageVideoWebpage1": "I boksen ovenfor kan du indsætte links eller iframe-kode til videoer på ${YouTube} og ${Vimeo}.",
            "imageVideoWebpage2": "Du kan også linke direkte til fotos, websider eller webapplikationer.",
            "ender": "Brug sikre (https) links, når det er muligt."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Indlæs side via en sikker forbindelse (https)",
            "embedProtocolWarning1": "Hvis denne side ikke indlæses i din historie, er det fordi, den ikke kan indlejres af sikkerhedsmæssige årsager.",
            "embedProtocolWarning2": "Hvis denne side ikke indlæses i din historie, skal du fjerne markeringen af denne indstilling og prøve igen. Hvis siden fortsat ikke indlæses, er det fordi, den ikke kan indlejres af sikkerhedsmæssige årsager.",
            "embedProtocolWarning3": "Som alternativ kan du tilføje et link i din fortælling for at åbne siden i en ny browserfane. ${linkText}",
            "linkText": "Lær mere."
          },
          "placeholder": "${https://}... eller ${http://}... eller ${<iframe>}",
          "uploadErrors": {
            "generic": "Noget gik galt med den angivne adresse. Prøv igen.",
            "imageOnly1": "Du skal bruge et billede i denne del af historien.",
            "imageOnly2": "Indsæt et link til et billede (.jpg, .png, .gif), eller vælg et billede fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
            "imageAndVideo1": "Du skal bruge et billede eller en video i denne del af historien.",
            "imageAndVideo2": "Indsæt et link til et billede (.jpg, .png, .gif) eller en video på ${YouTube} eller ${Vimeo}, eller vælg et billede fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
            "badFormat": "Linket til den fil, du forsøger at tilføje, er formateret forkert.",
            "inaccessible": "Den fil, du forsøger at tilføje, mangler eller er utilgængelig.",
            "tryAgain": "Tjek adressen, og prøv igen.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "billede",
              "generic": "medier"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-mail eller ${Picasa}/${Google+} ID",
          "helpText": "Du kan tilføje fotos, der er overført til ${Picasa} eller ${Google+}, til din historie. ${helpLinkText} om brug af billeder, der er lagret på din ${Google}-konto i dine historier.",
          "helpLinkText": "Lær mere",
          "cannotFindUser": "Kan ikke finde brugeren ${username}. Prøv igen."
        },
        "unsplash": {
          "placeholder": "Søg efter fotos",
          "aboutText": "${Unsplash} er en opdateret samling af gratis fotos af høj kvalitet.",
          "copyrightText": "Alle fotos, der er publiceret på ${Unsplash}, er givet i licens i henhold til ${CC0} licensen. Find flere oplysninger på ${moreInfoLink}.",
          "moreInfoLink": "her"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr}-konto",
            "text": "Alle ${Flickr}"
          },
          "placeholders": {
            "user": "Søg efter konto",
            "userText": "Søg på denne konto efter fotos",
            "text": "Søg efter fotos"
          },
          "errors": {
            "cannotFindUser": "Kan ikke finde brugeren ${username}.",
            "noUserPhotos": "${username} har ikke nogen offentlige fotos.",
            "didYouMean": "Mente du ${username}?",
            "generalUserError": "Noget gik galt under søgning efter brugeren ${username}."
          },
          "licenses": {
            "licenseLabel": "Licens: ",
            "public": "Offentligt domæne",
            "commercial": "OK for kommerciel anvendelse",
            "nonCommercial": "OK for ikke-kommerciel anvendelse",
            "reserved": "Alle rettigheder forbeholdes",
            "any": "Enhver licens"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Denne historie",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "${orgname} organisation",
            "myContent": "Mit indhold"
          },
          "createContent": {
            "or": "ELLER",
            "dragAndDrop": "Slip billede(r) her",
            "uploadImage": "Søg efter billede(r)",
            "agolInfo": "Billeder vil blive gemt på din ArcGIS-konto og kun være tilgængelige inde i din historie.",
            "saveBeforeUpload": "Når du har gemt denne historie, kan du overføre billeder til ArcGIS her.",
            "fileTypesImage": "Understøttede fil typer: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Webkort",
            "webscene": "Webscene",
            "image": "Billede",
            "date": "Dato",
            "sortByDate": "Sortér efter dato",
            "title": "Titel",
            "sortByTitle": "Sortér efter titel",
            "views": "Visninger",
            "search": "Søg efter nøgleord eller ID"
          }
        }
      }
    }
  }
});