/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Länka till innehåll",
      "urls_short": "Länk",
      "contentType": {
        "error": "Inga auktoriserade medier.",
        "imageOnly": "I den här delen av berättelsen kan du lägga till en bild.",
        "imageAndVideo": "I den här delen av berättelsen kan du lägga till en bild eller en video.",
        "imageVideoWebpage": "I den här delen av berättelsen kan du lägga till en bild, en video eller en webbsida."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Söker efter \"${searchterm}\"...",
        "searchedFor": "Sökresultat för \"${searchterm}\"",
        "albumsOf": "${username}s album",
        "noPhotosFound": "Inga foton matchade din sökning. Försök igen.",
        "noItemsFound": "Inga objekt matchade din sökning. Försök igen.",
        "noItemsInThisStory": "Inget innehåll från ArcGIS har lagts till i berättelsen än.",
        "limitReached": "Visar 100 objekt. Om du inte hittade vad du behöver kan du söka efter nyckelord.",
        "galleryItems": {
          "uploadError": "Det gick inte att överföra objektet."
        },
        "agol": {
          "remove1": "Ta bort den oanvända bilden från ditt ArcGIS-konto.",
          "remove2": "(Du måste överföra den igen om du vill använda den senare.)",
          "removeFailed": "Ta bort den oåtkomliga bilden från listan.",
          "modified": "Ändrad ${date}",
          "uploaded": "Överförd ${date}",
          "contentByAuthor": "${contentType} av ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Bläddra bland foton på ${Picasa} eller ${Google+}"
        },
        "flickr": {
          "photostream": "Fotoström",
          "searchAndBrowse": "Sök och bläddra bland foton på ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Sök foton på ${Unsplash}",
          "photoBy": "Foto av ${username}",
          "userLink": "Gå till ${username}s ${Unsplash}-sida"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Länka till innehåll på webben",
            "imageOnly": "Länka till en bild på webben",
            "imageAndVideo": "Länka till en bild eller video på webben"
          },
          "linkText": {
            "imageOnly": "I rutan ovan kan du länka direkt till foton.",
            "imageAndVideo1": "I rutan ovan kan du klistra in länkar eller iframe-kod för videor från ${YouTube} och ${Vimeo}.",
            "imageAndVideo2": "Du kan också länka direkt till foton.",
            "imageVideoWebpage1": "I rutan ovan kan du klistra in länkar eller iframe-kod för videor från ${YouTube} och ${Vimeo}.",
            "imageVideoWebpage2": "Du kan också länka direkt till foton, webbsidor eller webbapplikationer.",
            "ender": "Använd säkra länkar (https) om möjligt."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Läs in sidan via en säker anslutning (https)",
            "embedProtocolWarning1": "Om sidan inte läses in i din berättelse kan den inte bäddas in av webbsäkerhetsskäl.",
            "embedProtocolWarning2": "Om sidan inte läses in till din berättelse avmarkerar du alternativet och försöker igen. Om sidan fortfarande inte läses in kan den inte bäddas in av webbsäkerhetsskäl.",
            "embedProtocolWarning3": "Som ett alternativ kan du lägga till en länk i din berättelse för att öppna sidan på en ny webbläsarflik. ${linkText}",
            "linkText": "Läs mer."
          },
          "placeholder": "${https://}... eller ${http://}... eller ${<iframe>}",
          "uploadErrors": {
            "generic": "Det uppstod ett fel med den angivna adressen. Försök igen.",
            "imageOnly1": "Du måste använda en bild i den här delen av berättelsen.",
            "imageOnly2": "Ange en länk till en bild (.jpg, .png, .gif) eller välj en bild från ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
            "imageAndVideo1": "Du måste använda en bild eller video i den här delen av berättelsen.",
            "imageAndVideo2": "Ange en länk till en bild (.jpg, .png, .gif) eller en video på ${YouTube} eller ${Vimeo}, eller välj en bild från ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
            "badFormat": "Länken till den fil du försöker lägga till är felaktigt formaterad.",
            "inaccessible": "Den fil du försöker lägga till saknas eller är inte åtkomlig.",
            "tryAgain": "Kontrollera adressen och försök igen.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "bild",
              "generic": "media"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-postadress eller ${Picasa}/${Google+}-ID",
          "helpText": "Du kan lägga till bilder som överförts till ${Picasa} eller ${Google+} i din berättelse. ${helpLinkText} om att använda bilder som sparats i ditt ${Google}-konto i dina berättelser.",
          "helpLinkText": "Läs mer",
          "cannotFindUser": "Det går inte att hitta användaren ${username}. Försök igen."
        },
        "unsplash": {
          "placeholder": "Sök efter foton",
          "aboutText": "${Unsplash} är en utvald samling av kostnadsfria foton med hög kvalitet.",
          "copyrightText": "Alla foton som publiceras på ${Unsplash} är licensierade under ${CC0}-licensen. Läs mer ${moreInfoLink}.",
          "moreInfoLink": "här"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr}-konto",
            "text": "Hela ${Flickr}"
          },
          "placeholders": {
            "user": "Sök efter konto",
            "userText": "Sök efter foton i det här kontot",
            "text": "Sök efter foton"
          },
          "errors": {
            "cannotFindUser": "Det går inte att hitta användaren ${username}.",
            "noUserPhotos": "${username} har inga offentliga foton.",
            "didYouMean": "Menade du ${username}?",
            "generalUserError": "Något gick fel när du sökte efter användaren ${username}."
          },
          "licenses": {
            "licenseLabel": "Licens: ",
            "public": "Offentlig domän",
            "commercial": "OK för kommersiell användning",
            "nonCommercial": "OK för icke-kommersiell användning",
            "reserved": "Med ensamrätt",
            "any": "Alla licenser"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Den här berättelsen",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "${orgname}-organisation",
            "myContent": "Mitt innehåll"
          },
          "createContent": {
            "or": "ELLER",
            "dragAndDrop": "Släpp bild(er) här",
            "uploadImage": "Bläddra efter bild(er)",
            "agolInfo": "Bilderna lagras i ditt ArcGIS-konto och är endast tillgängliga i din berättelse.",
            "saveBeforeUpload": "När du har sparat berättelsen kan du överföra bilder till ArcGIS här.",
            "fileTypesImage": "Filtyper som stöds: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Webbkarta",
            "webscene": "Webbscen",
            "image": "Bild",
            "date": "Datum",
            "sortByDate": "Sortera efter datum",
            "title": "Titel",
            "sortByTitle": "Sortera efter titel",
            "views": "Vyer",
            "search": "Sök med sökord eller ID"
          }
        }
      }
    }
  }
});