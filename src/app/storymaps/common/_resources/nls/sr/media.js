/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Link do sadržaja",
      "urls_short": "Link",
      "contentType": {
        "error": "Nema medija sa ovlašćenjem.",
        "imageOnly": "U ovom delu priče, možete da dodate snimak.",
        "imageAndVideo": "U ovom delu priče, možete da dodate snimak ili video zapis.",
        "imageVideoWebpage": "U ovom delu priče, možete da dodate snimak, video zapis ili veb stranicu."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Traženje „${searchterm}”...",
        "searchedFor": "Rezultati pretrage za „${searchterm}”",
        "albumsOf": "Albumi korisnika ${username}",
        "noPhotosFound": "Nijedna fotografija se ne podudara sa vašom pretragom. Pokušajte ponovo.",
        "noItemsFound": "Nijedna stavka se ne podudara sa vašom pretragom. Pokušajte ponovo.",
        "noItemsInThisStory": "Ovoj priči još uvek nije dodat nikakav sadržaj sa ArcGIS platforme.",
        "limitReached": "Prikazuje se 100 stavki. Ukoliko niste pronašli ono što vam je potrebno, pokušajte pretragu po ključnoj reči.",
        "galleryItems": {
          "uploadError": "Nažalost, otpremanje ove stavke nije uspelo."
        },
        "agol": {
          "remove1": "Izbrišite ovu nekorišćenu sliku sa svog ArcGIS naloga.",
          "remove2": "(Moraćete ponovo da je otpremite ako ponovo poželite da je upotrebite.)",
          "removeFailed": "Uklonite ovaj nedostupni snimak sa ove liste.",
          "modified": "Izmenjeno ${date}",
          "uploaded": "Otpremljeno ${date}",
          "contentByAuthor": "${contentType} od strane ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Pregledaj fotografije na ${Picasa} ili ${Google+}"
        },
        "flickr": {
          "photostream": "Prikaz fotografija",
          "searchAndBrowse": "Pretraži i pregledaj fotografije na ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Pretraži fotografije na ${Unsplash}",
          "photoBy": "Fotografija od strane korisnika ${username}",
          "userLink": "Idi na ${Unsplash} stranicu korisnika ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Link za sadržaj na vebu",
            "imageOnly": "Link za snimak na vebu",
            "imageAndVideo": "Link za snimak ili video zapis na vebu"
          },
          "linkText": {
            "imageOnly": "U polju iznad možete da postavite direktan link za fotografije.",
            "imageAndVideo1": "U polju iznad možete da nalepite linkove ili iframe kôd za video snimke sa ${YouTube} i ${Vimeo}.",
            "imageAndVideo2": "Takođe možete i da postavite direktan link za fotografije.",
            "imageVideoWebpage1": "U polju iznad možete da nalepite linkove ili iframe kôd za video snimke sa ${YouTube} i ${Vimeo}.",
            "imageVideoWebpage2": "Takođe možete i da postavite direktan link za fotografije, veb stranice ili veb aplikacije.",
            "ender": "Koristite bezbedne (https) linkove kada je to moguće."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Učitaj stranicu preko bezbedne veze (https)",
            "embedProtocolWarning1": "Ako se ova stranica ne učitava u vašoj priči, ne može da se ugradi iz veb bezbednosnih razloga.",
            "embedProtocolWarning2": "Ako se ova stranica ne učitava u vašoj priči, poništite izbor ove opcije i pokušajte ponovo. Ako se stranica i dalje ne učitava, ne može da bude ugrađena iz veb bezbednosnih razloga.",
            "embedProtocolWarning3": "Kao alternativu, dodajte link u svom narativu da biste otvorili stranicu u novoj kartici pregledača. ${linkText}",
            "linkText": "Saznajte više."
          },
          "placeholder": "${https://}... ili ${http://}... ili ${<iframe>}",
          "uploadErrors": {
            "generic": "Nešto nije u redu sa unetom adresom. Pokušajte ponovo.",
            "imageOnly1": "Morate da koristite snimak u ovom delu priče.",
            "imageOnly2": "Unesite link do snimka (.jpg, .png, .gif) ili odaberite snimak sa ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
            "imageAndVideo1": "Morate da koristite snimak ili video zapis u ovom delu priče.",
            "imageAndVideo2": "Unesite link do snimka (.jpg, .png, .gif) ili video zapisa na ${YouTube} ili ${Vimeo}, ili odaberite snimak sa ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
            "badFormat": "Link do datoteke koju pokušavate da dodate je nepravilno formatiran.",
            "inaccessible": "Datoteka koju pokušavate da dodate nedostaje ili je nepristupačna.",
            "tryAgain": "Proverite adresu i pokušajte ponovo.",
            "mediaTypes": {
              "VIDEO": "kolekciju",
              "IMAGE": "snimak",
              "generic": "mediji"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-pošta ili ${Picasa}/${Google+} ID",
          "helpText": "Možete da svojoj priči dodate fotografije koje su otpremljene na ${Picasa} ili ${Google+}. ${helpLinkText} u vezi sa korišćenjem u vašim pričama snimaka koji su sačuvani na vašem ${Google} nalogu.",
          "helpLinkText": "Saznaj više",
          "cannotFindUser": "Pronalaženje korisnika ${username} nije moguće. Pokušajte ponovo."
        },
        "unsplash": {
          "placeholder": "Traži fotografije",
          "aboutText": "${Unsplash} je odabrana kolekcija besplatnih fotografija visokog kvaliteta.",
          "copyrightText": "Sve fotografije koje su objavljene na ${Unsplash} podležu ${CC0} licenci. Pronađite dodatne informacije na ${moreInfoLink}.",
          "moreInfoLink": "ovde"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} nalog",
            "text": "Svi ${Flickr}"
          },
          "placeholders": {
            "user": "Traži nalog",
            "userText": "Pretraži fotografije na ovom nalogu",
            "text": "Traži fotografije"
          },
          "errors": {
            "cannotFindUser": "Pronalaženje korisnika ${username} nije moguće.",
            "noUserPhotos": "${username} nema nijednu javnu fotografiju.",
            "didYouMean": "Da li ste mislili ${username}?",
            "generalUserError": "Nešto nije u redu pri traženju korisnika ${username}."
          },
          "licenses": {
            "licenseLabel": "Licenca: ",
            "public": "Javni domen",
            "commercial": "U redu za komercijalnu upotrebu",
            "nonCommercial": "U redu za nekomercijalnu upotrebu",
            "reserved": "Sva prava zadržana",
            "any": "Bilo koja licenca"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Ova priča",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Organizacija ${orgname}",
            "myContent": "Moj sadržaj"
          },
          "createContent": {
            "or": "ILI",
            "dragAndDrop": "Otpustite snimak (snimke) ovde",
            "uploadImage": "Potraži snimak (snimke)",
            "agolInfo": "Slike se čuvaju na ArcGIS nalog i dostupne su samo u okviru priče.",
            "saveBeforeUpload": "Kada sačuvate ovu priču, možete da otpremite snimke na ArcGIS ovde.",
            "fileTypesImage": "Podržani tipovi datoteka: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Veb mapa",
            "webscene": "Veb scena",
            "image": "Snimak",
            "date": "Datum",
            "sortByDate": "Sortiraj po datumu",
            "title": "Naslov",
            "sortByTitle": "Sortiraj po naslovu",
            "views": "Prikazi",
            "search": "Pretraži po ključnoj reči ili ID-u"
          }
        }
      }
    }
  }
});