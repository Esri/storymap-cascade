/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Poveznica na sadržaj",
      "urls_short": "Poveznica",
      "contentType": {
        "error": "Nema ovlaštenih medija.",
        "imageOnly": "U ovom dijelu priče možete dodati sliku.",
        "imageAndVideo": "U ovom dijelu priče možete dodati sliku ili videozapis.",
        "imageVideoWebpage": "U ovom dijelu priče možete dodati sliku, videozapis ili web-stranicu."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Pretraživanje „${searchterm}”...",
        "searchedFor": "Rezultati pretraživanja za „${searchterm}”",
        "albumsOf": "Albumi korisnika ${username}",
        "noPhotosFound": "Nema fotografija koje se podudaraju s vašim pretraživanjem. Pokušajte ponovno kasnije.",
        "noItemsFound": "Nema stavki koje se podudaraju s vašim pretraživanjem. Pokušajte ponovno kasnije.",
        "noItemsInThisStory": "Sadržaj s ArcGIS-a još nije dodan priči.",
        "limitReached": "Prikazuje se 100 stavki. Ako ne pronađete ono što trebate, pokušajte pretraživati po ključnoj riječi.",
        "galleryItems": {
          "uploadError": "Nažalost, ova se stavka nije uspjela učitati."
        },
        "agol": {
          "remove1": "Izbrišite ovu neupotrijebljenu sliku s ArcGIS računa.",
          "remove2": "(Trebat ćete je ponovno učitati ako je odlučite kasnije iskoristiti.)",
          "removeFailed": "Uklonite ovu nedostupnu sliku s popisa.",
          "modified": "Izmijenjeno ${date}",
          "uploaded": "Učitano ${date}",
          "contentByAuthor": "${contentType} od ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Pregledavaj fotografije na uslugama ${Picasa} ili ${Google+}"
        },
        "flickr": {
          "photostream": "Prijenos fotografija",
          "searchAndBrowse": "Pretraži i pregledavaj fotografije na usluzi ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Traži fotografije na usluzi ${Unsplash}",
          "photoBy": "Fotografija od ${username}",
          "userLink": "Idi na stranicu ${Unsplash} korisnika ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Poveznica na sadržaj na webu",
            "imageOnly": "Poveznica na sliku na webu",
            "imageAndVideo": "Poveznica na sliku ili videozapis na webu"
          },
          "linkText": {
            "imageOnly": "U prethodnom okviru možete staviti poveznicu izravno na fotografije.",
            "imageAndVideo1": "U prethodnom okviru možete zalijepiti poveznice ili koda iframea za videozapise s usluga ${YouTube} i ${Vimeo}.",
            "imageAndVideo2": "Također možete stavit poveznicu izravno na fotografije.",
            "imageVideoWebpage1": "U prethodnom okviru možete zalijepiti poveznice ili koda iframea za videozapise s usluga ${YouTube} i ${Vimeo}.",
            "imageVideoWebpage2": "Također možete staviti poveznicu izravno na fotografije, web-stranice ili web-aplikacije.",
            "ender": "Kada je moguće, upotrijebite, sigurne (https) poveznice."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Učitajte stranicu preko sigurne veze (https)",
            "embedProtocolWarning1": "Ako se ova stranica ne učita u vašoj priči, ne može se umetnuti iz sigurnosnih razloga.",
            "embedProtocolWarning2": "Ako se ova stranica ne učita u vašoj priči, odznačite ovu opciju i pokušajte ponovno. Ako se stranica i dalje ne želi učitati, ne može se umetnuti iz sigurnosnih razloga.",
            "embedProtocolWarning3": "Umjesto toga, dodajte poveznicu u priču za otvaranje stranice u novoj kartici preglednika. ${linkText}",
            "linkText": "Saznajte više."
          },
          "placeholder": "${https://}... ili ${http://}... ili ${<iframe>}",
          "uploadErrors": {
            "generic": "Nešto je pošlo krivo s unesenom adresom. Pokušajte ponovno kasnije.",
            "imageOnly1": "Morate upotrijebiti sliku u ovom dijelu priče.",
            "imageOnly2": "Stavite poveznicu na sliku (.jpg, .png, .gif) ili izaberite sliku s usluge ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
            "imageAndVideo1": "Morate upotrijebiti sliku ili videozapis u ovom dijelu priče.",
            "imageAndVideo2": "Stavite poveznicu na sliku (.jpg, .png, .gif) ili videozapis na ${YouTube} ili ${Vimeo} ili izaberite sliku s usluge ${ArcGIS}, ${Flickr}, ${Google+} ili ${Unsplash}.",
            "badFormat": "Poveznica na datoteku koju pokušavate dodati nije ispravno formatirana.",
            "inaccessible": "Datoteka koju pokušavate dodati nedostaje ili nije dostupna.",
            "tryAgain": "Provjerite adresu i pokušajte ponovno.",
            "mediaTypes": {
              "VIDEO": "videozapis",
              "IMAGE": "slika",
              "generic": "mediji"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-pošta ili ${Picasa}/${Google+} ID",
          "helpText": "Možete dodati fotografije učitane na ${Picasa} ili ${Google+} svojoj priči . ${helpLinkText} o upotrebi slika pohranjenih na vašem ${Google} računu u vašu priču.",
          "helpLinkText": "Saznajte više",
          "cannotFindUser": "Nije moguće pronaći korisnika ${username}. Pokušajte ponovno kasnije."
        },
        "unsplash": {
          "placeholder": "Traži fotografije",
          "aboutText": "${Unsplash} je probrana zbirka besplatnih fotografija visoke kvalitete.",
          "copyrightText": "Sve fotografije objavljene na usluzi ${Unsplash} licencirane su pod licencom ${CC0}. Pronađite više informacija na ${moreInfoLink}.",
          "moreInfoLink": "ovdje"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} račun",
            "text": "Svi ${Flickr}"
          },
          "placeholders": {
            "user": "Traži račun",
            "userText": "Pretraži ovaj račun za fotografije",
            "text": "Traži fotografije"
          },
          "errors": {
            "cannotFindUser": "Nije moguće pronaći korisnika ${username}.",
            "noUserPhotos": "${username} nema javne fotografije.",
            "didYouMean": "Jeste li mislili ${username}?",
            "generalUserError": "Nešto je pošlo krivo pri traženju korisnika ${username}."
          },
          "licenses": {
            "licenseLabel": "Licenca: ",
            "public": "Javna domena",
            "commercial": "U redu za komercijalnu upotrebu",
            "nonCommercial": "U redu za nekomercijalnu upotrebu",
            "reserved": "Sva prava pridržana",
            "any": "Sve licence"
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
            "dragAndDrop": "Spusti sliku/e ovdje",
            "uploadImage": "Traži sliku/e",
            "agolInfo": "Slike će se pohraniti u vašem ArcGIS računu i bit će dostupne samo unutar vaše priče.",
            "saveBeforeUpload": "Kada spremite ovu priču, ovdje možete učitati slike na ArcGIS.",
            "fileTypesImage": "Podržane vrste datoteke: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Web-karta",
            "webscene": "Web-scena",
            "image": "Slika",
            "date": "Datum",
            "sortByDate": "Sortiraj po datumu",
            "title": "Naziv",
            "sortByTitle": "Sortiraj po naslovu",
            "views": "Prikazi",
            "search": "Traži po ključnoj riječi ili ID-u"
          }
        }
      }
    }
  }
});