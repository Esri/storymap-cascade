/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Povezava do vsebine",
      "urls_short": "Povezava",
      "contentType": {
        "error": "Ni pooblaščenega medija.",
        "imageOnly": "V tem delu zgodbe lahko dodate sliko.",
        "imageAndVideo": "V tem delu zgodbe lahko dodate sliko ali videoposnetek.",
        "imageVideoWebpage": "V tem delu zgodbe lahko dodate sliko, videoposnetek ali spletno stran."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Iskanje »${searchterm}«...",
        "searchedFor": "Rezultati iskanja za »${searchterm}«",
        "albumsOf": "Albumi uporabnika ${username}",
        "noPhotosFound": "Ni slik, ki ustrezajo vaši poizvedbi. Poskusite znova.",
        "noItemsFound": "Ni elementov, ki ustrezajo vaši poizvedbi. Poskusite znova.",
        "noItemsInThisStory": "V to zgodbo še ni dodana nobena vsebina ArcGIS.",
        "limitReached": "Prikazujem 100 elementov. Če niste našli, kar potrebujete, poskusite z iskanjem s ključnimi besedami.",
        "galleryItems": {
          "uploadError": "Oprostite, tega elementa ni bilo mogoče naložiti."
        },
        "agol": {
          "remove1": "Izbrišite neuporabljeno sliko z računa ArcGIS.",
          "remove2": "(Morali jo boste znova naložiti, če se boste kasneje odločili, da jo želite uporabiti.)",
          "removeFailed": "Odstranite nedostopno sliko s tega seznama.",
          "modified": "Spremenjeno ${date}",
          "uploaded": "Naloženo ${date}",
          "contentByAuthor": "${contentType} od ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Brskajte po fotografijah na straneh ${Picasa} ali ${Google+}"
        },
        "flickr": {
          "photostream": "Photo stream",
          "searchAndBrowse": "Poiščite in brskajte po fotografijah na strani ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Poiščite slike na strani ${Unsplash}",
          "photoBy": "Avtor fotografije je uporabnik ${username}",
          "userLink": "Pojdi na stran ${Unsplash} uporabnika ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Povezava do vsebine na spletu",
            "imageOnly": "Povezava do slike na spletu",
            "imageAndVideo": "Povezava do slike ali videoposnetka na spletu"
          },
          "linkText": {
            "imageOnly": "V zgornjem polju lahko določite neposredno povezavo s fotografijo.",
            "imageAndVideo1": "V zgornjem polju lahko prilepite povezavo ali kodo iframe za video na ${YouTube} in ${Vimeo}.",
            "imageAndVideo2": "Prav tako lahko določite neposredno povezavo s fotografijo.",
            "imageVideoWebpage1": "V zgornjem polju lahko prilepite povezavo ali kodo iframe za spletno vsebino, kot npr. dinamični graf ali video na ${YouTube} in ${Vimeo}.",
            "imageVideoWebpage2": "Prav tako lahko določite neposredno povezavo s fotografijo, videom, zvočno datoteko, spletno stranjo ali spletno aplikacijo.",
            "ender": "Vedno uporabljajte varne (https) povezave. Če jih vaša vsebina ne podpira, v besedilu svoje zgodbe dodajte povezavo, da si jih bodo lahko bralci ogledali v novem zavihku brskalnika."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Naložite stran prek varne povezave (https)",
            "embedProtocolWarning1": "Če se stran v vaši zgodbi ne naloži, je ni mogoče vdelati zaradi varnostnih razlogov.",
            "embedProtocolWarning2": "Če se stran v vaši zgodbi ne naloži, odkljukajte to možnost in poskusite znova. Če se stran še vedno ne naloži, je ni mogoče vdelati zaradi razlogov spletne varnosti.",
            "embedProtocolWarning3": "Namesto tega dodajte povezavo v zgodbo, da odprete stran v novem zavihku brskalnika. ${linkText}",
            "linkText": "Izvedite več."
          },
          "placeholder": "${https://}... ali ${http://}... ali ${<iframe>}",
          "uploadErrors": {
            "generic": "Nekaj ni v redu z vnesenim naslovom. Poskusite znova.",
            "imageOnly1": "V tem delu zgodbe morate uporabiti sliko.",
            "imageOnly2": "Navedite povezavo do slike (.jpg, .png, .gif) ali izberite sliko s strani ${ArcGIS}, ${Flickr}, ${Google+} ali ${Unsplash}.",
            "imageAndVideo1": "V tem delu zgodbe morate uporabiti sliko ali videoposnetek.",
            "imageAndVideo2": "Navedite povezavo do slike (.jpg, .png, .gif) ali videoposnetka na strani ${YouTube} ali ${Vimeo} ali izberite sliko s strani ${ArcGIS}, ${Flickr}, ${Google+} ali ${Unsplash}.",
            "badFormat": "Povezava do datoteke, ki jo poskušate dodati, ni pravilno oblikovana.",
            "inaccessible": "Ni datoteke, ki jo želite dodati, ali ni dostopna.",
            "tryAgain": "Preverite naslov in poskusite znova.",
            "mediaTypes": {
              "VIDEO": "videoposnetek",
              "IMAGE": "slika",
              "generic": "mediji"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-pošta ali ID za ${Picasa}/${Google+}",
          "helpText": "V svojo zgodbo lahko dodate slike, naložene v storitvi ${Picasa} ali ${Google+}. ${helpLinkText} o uporabi slik, shranjenih v vašem računu ${Google} v vaših zgodbah.",
          "helpLinkText": "Izvedite več",
          "cannotFindUser": "Uporabnika ${username} ni bilo mogoče najti. Poskusite znova."
        },
        "unsplash": {
          "placeholder": "Poiščite fotografije",
          "aboutText": "${Unsplash} je skrbno zbrana zbirka brezplačnih fotografij izjemne kakovosti.",
          "copyrightText": "Vse fotografije, objavljene na ${Unsplash}, so licencirane pod licenco ${CC0}. Več informacij dobite na ${moreInfoLink}.",
          "moreInfoLink": "tukaj"
        },
        "flickr": {
          "searchType": {
            "account": "Račun ${Flickr}",
            "text": "Vse na ${Flickr}"
          },
          "placeholders": {
            "user": "Poiščite račun",
            "userText": "Poiščite fotografije v tem računu",
            "text": "Poiščite fotografije"
          },
          "errors": {
            "cannotFindUser": "Uporabnika ${username} ni bilo mogoče najti.",
            "noUserPhotos": "Uporabnik ${username} nima javnih fotografij.",
            "didYouMean": "Ste mislili uporabnika ${username}?",
            "generalUserError": "Prišlo je do težav pri iskanju uporabnika ${username}."
          },
          "licenses": {
            "licenseLabel": "Licenca: ",
            "public": "Javna domena",
            "commercial": "V redu za komercialno uporabo",
            "nonCommercial": "V redu za nekomercialno uporabo",
            "reserved": "Vse pravice pridržane",
            "any": "Katera koli licenca"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Ta zgodba",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Organizacija ${orgname}",
            "myContent": "Moje vsebine"
          },
          "createContent": {
            "or": "ALI",
            "dragAndDrop": "Odložite slike tukaj",
            "uploadImage": "Poiščite slike",
            "agolInfo": "Slike bodo shranjene v vašem računu ArcGIS in dostopne samo znotraj vaše zgodbe.",
            "saveBeforeUpload": "Ko shranite to zgodbo, lahko naložite slike v ArcGIS tukaj.",
            "fileTypesImage": "Podprte vrste datotek: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Spletna karta",
            "webscene": "Spletni 3D-prizor",
            "image": "Slika",
            "date": "Datum",
            "sortByDate": "Razvrsti po datumu",
            "title": "Ime",
            "sortByTitle": "Razvrsti po imenu",
            "views": "Ogledi",
            "search": "Iskanje po ključni besedi ali ID-ju"
          }
        }
      }
    }
  }
});