/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Kobling til innhold",
      "urls_short": "Kobling",
      "contentType": {
        "error": "Ingen godkjente medier.",
        "imageOnly": "I denne delen av historien kan du legge til et bilde.",
        "imageAndVideo": "I denne delen av historien kan du legge til et bilde eller en video.",
        "imageVideoWebpage": "I denne delen av historien kan du legge til et bilde, en video eller en nettside."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Søker etter \"${searchterm}\"...",
        "searchedFor": "Søkeresultater for \"${searchterm}\"",
        "albumsOf": "${username} sine album",
        "noPhotosFound": "Ingen bilder samsvarer med søket. Prøv på nytt.",
        "noItemsFound": "Ingen elementer samsvarer med søket. Prøv på nytt.",
        "noItemsInThisStory": "Det har ikke blitt lagt til noe innhold fra ArcGIS i denne historien ennå.",
        "limitReached": "Viser 100 elementer. Hvis du ikke fant det du trengte, kan du prøve et søkeordbasert søk.",
        "galleryItems": {
          "uploadError": "Beklager, opplasting av dette elementet mislyktes."
        },
        "agol": {
          "remove1": "Slett dette ubrukte bildet fra ArcGIS-kontoen din.",
          "remove2": "(Du må laste det opp på nytt hvis du bestemmer deg for å bruke det senere.)",
          "removeFailed": "Fjern dette utilgjengelige bildet fra denne listen.",
          "modified": "Endret ${date}",
          "uploaded": "Lastet opp ${date}",
          "contentByAuthor": "${contentType} av ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Bla gjennom bilder på ${Picasa} eller ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Søk etter og bla gjennom bilder på ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Søk etter bilder på ${Unsplash}",
          "photoBy": "Bilde av ${username}",
          "userLink": "Gå til ${username} sin ${Unsplash}-side"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Opprett kobling til innhold på nettet",
            "imageOnly": "Opprett kobling til et bilde på nettet",
            "imageAndVideo": "Opprett kobling til et bilde eller en video på nettet"
          },
          "linkText": {
            "imageOnly": "I boksen over kan du opprette en kobling direkte til bilder.",
            "imageAndVideo1": "I boksen over kan du lime inn koblinger eller iframe-kode for videoer fra ${YouTube} og ${Vimeo}.",
            "imageAndVideo2": "Du kan også opprette en kobling direkte til bilder.",
            "imageVideoWebpage1": "I boksen over kan du lime inn koblinger eller iframe-kode for videoer fra ${YouTube} og ${Vimeo}.",
            "imageVideoWebpage2": "Du kan også opprette en kobling direkte til bilder, nettsider eller nettprogrammer.",
            "ender": "Bruk sikre koblinger (https) når det er mulig."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Last inn siden med en sikker tilkobling (https)",
            "embedProtocolWarning1": "Hvis denne siden ikke blir lastet inn i historien din, kan den av hensyn til nettsikkerheten ikke bygges inn.",
            "embedProtocolWarning2": "Hvis denne siden ikke lastes inn i historien, fjerner du merket for dette alternativet og prøver på nytt. Hvis den fremdeles ikke lastes inn, kan den ikke bygges inn av hensyn til nettsikkerheten.",
            "embedProtocolWarning3": "Et alternativ kan være å legge til en kobling i historien for å åpne siden i en ny nettleserfane. ${linkText}",
            "linkText": "Få mer informasjon."
          },
          "placeholder": "${https://}... eller ${http://}... eller ${<iframe>}",
          "uploadErrors": {
            "generic": "Noe gikk galt med adressen du skrev inn. Prøv på nytt.",
            "imageOnly1": "Du må bruke et bilde i denne delen av historien.",
            "imageOnly2": "Oppgi en kobling til et bilde (.jpg, .png, .gif), eller velg et bilde fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
            "imageAndVideo1": "Du må bruke et bilde eller en video i denne delen av historien.",
            "imageAndVideo2": "Oppgi en kobling til et bilde (.jpg, .png, .gif) eller en video på ${YouTube} eller ${Vimeo}, eller velg et bilde fra ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
            "badFormat": "Koblingen til filen du prøver å legge til, er ikke riktig formatert.",
            "inaccessible": "Filen du prøver å legge til, mangler eller er ikke tilgjengelig.",
            "tryAgain": "Kontroller adressen, og prøv på nytt.",
            "mediaTypes": {
              "VIDEO": "videosamlingen",
              "IMAGE": "bilde",
              "generic": "medier"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-postadresse eller ${Picasa}/${Google+}-ID",
          "helpText": "Du kan legge til bilder som er lastet opp til ${Picasa} eller ${Google+}, i historien. ${helpLinkText} om å bruke bilder lagret i ${Google}-kontoen din, i historiene dine.",
          "helpLinkText": "Lær mer",
          "cannotFindUser": "Finner ikke ${username}. Prøv på nytt."
        },
        "unsplash": {
          "placeholder": "Søk etter bilder",
          "aboutText": "${Unsplash} er en bearbeidet samling med gratis bilder av høy kvalitet.",
          "copyrightText": "Alle bilder som er publisert på ${Unsplash}, er lisensierte under ${CC0}-lisensen. Finn mer informasjon ${moreInfoLink}.",
          "moreInfoLink": "her"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr}-konto",
            "text": "Hele ${Flickr}"
          },
          "placeholders": {
            "user": "Søk etter konto",
            "userText": "Søk etter bilder i denne kontoen",
            "text": "Søk etter bilder"
          },
          "errors": {
            "cannotFindUser": "Finner ikke brukeren ${username}.",
            "noUserPhotos": "${username} har ingen offentlige bilder.",
            "didYouMean": "Mente du ${username}?",
            "generalUserError": "Noe gikk galt ved søk etter brukeren ${username}."
          },
          "licenses": {
            "licenseLabel": "Lisens: ",
            "public": "Offentlig domene",
            "commercial": "OK for kommersiell bruk",
            "nonCommercial": "OK for ikke-kommersiell bruk",
            "reserved": "Med enerett",
            "any": "Alle lisenser"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Denne historien",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Organisasjonen ${orgname}",
            "myContent": "Mitt innhold."
          },
          "createContent": {
            "or": "ELLER",
            "dragAndDrop": "Slipp bilde(r) her",
            "uploadImage": "Bla gjennom bilder",
            "agolInfo": "Bildene lagres i ArcGIS-kontoen og er kun tilgjengelige inne i historien.",
            "saveBeforeUpload": "Når du har lagret denne historien, kan du laste opp bilder til ArcGIS her.",
            "fileTypesImage": "Filtyper som støttes: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Webkart",
            "webscene": "Webscene",
            "image": "Bilde",
            "date": "Dato",
            "sortByDate": "Sorter etter dato",
            "title": "Tittel",
            "sortByTitle": "Sorter etter tittel",
            "views": "Visninger",
            "search": "Søk etter nøkkelord eller ID"
          }
        }
      }
    }
  }
});