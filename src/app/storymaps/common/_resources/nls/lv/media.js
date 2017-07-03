/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Saite uz saturu",
      "urls_short": "Saite",
      "contentType": {
        "error": "Nav autorizēta datu nesēja.",
        "imageOnly": "Šajā stāsta daļā varat pievienot attēlu.",
        "imageAndVideo": "Šajā stāsta daļā varat pievienot attēlu vai video.",
        "imageVideoWebpage": "Šajā stāsta daļā varat pievienot attēlu, video vai tīmekļa lapu."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Tiek meklēts termins \"${searchterm}\"...",
        "searchedFor": "Termina \"${searchterm}” meklēšanas rezultāti",
        "albumsOf": "Lietotāja ${Username} albumi",
        "noPhotosFound": "Neviens fotoattēls neatbilst jūsu meklētajam. Lūdzu, mēģiniet vēlreiz.",
        "noItemsFound": "Neviena vienība neatbilst jūsu meklētajam. Lūdzu, mēģiniet vēlreiz.",
        "noItemsInThisStory": "Šim stāstam vēl nav pievienots saturs no ArcGIS.",
        "limitReached": "Tiek rādītas 100 vienības. Ja neatradāt meklēto, mēģiniet meklēt ar atslēgvārdu.",
        "galleryItems": {
          "uploadError": "Diemžēl šo vienību neizdevās augšupielādēt."
        },
        "agol": {
          "remove1": "Izdzēsiet šo neizmantoto attēlu no jūsu ArcGIS konta.",
          "remove2": "(Ja izlemsiet vēlāk to lietot, tas būs jāaugšupielādē vēlreiz.)",
          "removeFailed": "Noņemiet no saraksta šo attēlu, kam nevar piekļūt.",
          "modified": "Mainīšanas datums: ${date}",
          "uploaded": "Augšupielādes datums: ${date}",
          "contentByAuthor": "${contentType}, autors ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Pārlūkot fotoattēlus vietnē ${Picasa} vai ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Meklēt un pārlūkot fotoattēlus vietnē ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Meklēt fotoattēlus vietnē ${Unsplash}",
          "photoBy": "Fotoattēls pēc lietotājvārda ${username}",
          "userLink": "Doties uz lietotāja ${username} ${Unsplash} lapu"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Saite uz saturu tīmeklī",
            "imageOnly": "Saite uz attēlu tīmeklī",
            "imageAndVideo": "Saite uz attēlu vai video tīmeklī"
          },
          "linkText": {
            "imageOnly": "Augstāk esošajā lodziņā varat piesaistīt tieši fotoattēliem.",
            "imageAndVideo1": "Augstāk esošajā lodziņā varat ielīmēt saites vai iframe kodu videoklipiem no ${YouTube} un ${Vimeo}.",
            "imageAndVideo2": "Varat arī piesaistīt tieši fotoattēliem.",
            "imageVideoWebpage1": "Augstāk esošajā lodziņā varat ielīmēt saites vai iframe kodu videoklipiem no ${YouTube} un ${Vimeo}.",
            "imageVideoWebpage2": "Varat arī piesaistīt tieši fotoattēliem, tīmekļa lapām vai tīmekļa lietotnēm.",
            "ender": "Ja iespējams, izmantojiet drošās (https) saites."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Ielādēt lapu, izmantojot drošu savienojumu (https)",
            "embedProtocolWarning1": "Ja šī lapa jūsu stāstā neielādējas, to nevar iegult tīmekļa drošības iemeslu dēļ.",
            "embedProtocolWarning2": "Ja šī lapa jūsu stāstā neielādējas, noņemiet atzīmi no šīs iespējas un mēģiniet vēlreiz. Ja lapa joprojām neielādējas, to nevar iegult tīmekļa drošības iemeslu dēļ.",
            "embedProtocolWarning3": "Alternatīva iespēja — stāstījumam pievienojiet saiti, lai lapu atvērtu jaunā pārlūka cilnē. ${linkText}",
            "linkText": "Uzziniet vairāk."
          },
          "placeholder": "${https://}... vai ${http://}... vai ${<iframe>}",
          "uploadErrors": {
            "generic": "Ar ievadīto adresi radās problēma. Lūdzu, mēģiniet vēlreiz.",
            "imageOnly1": "Šajā stāsta daļā ir jāizmanto attēls.",
            "imageOnly2": "Lūdzu, sniedziet saiti uz attēlu (.jpg, .png, .gif) vai izvēlieties attēlu no ${ArcGIS}, ${Flickr}, ${Google+} vai  ${Unsplash}.",
            "imageAndVideo1": "Šajā stāsta daļā ir jāizmanto attēls vai video.",
            "imageAndVideo2": "Lūdzu, sagādājiet saiti uz attēlu (.jpg, .png, .gif), uz video vietnē ${YouTube} vai ${Vimeo} vai izvēlieties attēlu no ${ArcGIS}, ${Flickr}, ${Google+} vai ${Unsplash}.",
            "badFormat": "Saite uz failu, ko mēģināt pievienot, ir nepareizi formatēta.",
            "inaccessible": "Trūkst faila, ko mēģināt pievienot, vai tam nevar piekļūt.",
            "tryAgain": "Pārbaudiet ievadīto adresi un mēģiniet vēlreiz.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "attēls",
              "generic": "multivides fails"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-pasta adrese vai ${Picasa}/${Google+} ID",
          "helpText": "Savam stāstam varat pievienot ${Picasa} vai ${Google+} augšupielādētos attēlus. ${helpLinkText} par tādu attēlu izmantošanu stāstos, kas ir glabāti jūsu ${Google} kontā.",
          "helpLinkText": "Papildinformācija",
          "cannotFindUser": "Nevar atrast lietotāju ${username}. Lūdzu, mēģiniet vēlreiz."
        },
        "unsplash": {
          "placeholder": "Meklēt fotoattēlus",
          "aboutText": "${Unsplash} ir pārraudzīta bezmaksas, augstas kvalitātes fotoattēlu kolekcija.",
          "copyrightText": "Visi ${Unsplash} publicētie fotoattēli ir licencēti atbilstoši ${CC0} licencei. Papildinformāciju skatiet saitē ${moreInfoLink}.",
          "moreInfoLink": "šeit"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} konts",
            "text": "Viss ${Flickr}"
          },
          "placeholders": {
            "user": "Meklēt kontu",
            "userText": "Meklēt šajā kontā fotoattēlus",
            "text": "Meklēt fotoattēlus"
          },
          "errors": {
            "cannotFindUser": "Nevar atrast lietotāju ${username}.",
            "noUserPhotos": "Lietotājam ${username} nav neviena publiska fotoattēla.",
            "didYouMean": "Vai domājāt ${username}?",
            "generalUserError": "Meklējot lietotāju ${username}, radās problēma."
          },
          "licenses": {
            "licenseLabel": "Licence: ",
            "public": "Neaizsargātie darbi",
            "commercial": "Labi komerciālai lietošanai",
            "nonCommercial": "Labi nekomerciālai lietošanai",
            "reserved": "Visas tiesības paturētas",
            "any": "Jebkura licence"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Šis stāsts",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Organizācija ${orgname}",
            "myContent": "Mans Saturs"
          },
          "createContent": {
            "or": "VAI",
            "dragAndDrop": "Nometiet attēlu(s) šeit",
            "uploadImage": "Pārlūkot attēlu(s)",
            "agolInfo": "attēli tiks glabāti jūsu ArcGIS kontā un būs pieejami tikai jūsu stāstā.",
            "saveBeforeUpload": "Pēc šī stāsta saglabāšanas šeit varat augšupielādēt attēlus ArcGIS.",
            "fileTypesImage": "Atbalstītie failu tipi: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Tīmekļa karte",
            "webscene": "Tīmekļa scēna",
            "image": "Attēls",
            "date": "Datums",
            "sortByDate": "Šķirot pēc datuma",
            "title": "Virsraksts",
            "sortByTitle": "Šķirot pēc virsraksta",
            "views": "Skatījumi",
            "search": "Meklēt pēc atslēgvārda vai ID"
          }
        }
      }
    }
  }
});