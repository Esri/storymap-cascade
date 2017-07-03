/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Nuoroda į turinį",
      "urls_short": "Nuoroda",
      "contentType": {
        "error": "Nėra autorizuotos medijos.",
        "imageOnly": "Šioje pasakojimo dalyje galite pridėti atvaizdą.",
        "imageAndVideo": "Šioje pasakojimo dalyje galite pridėti atvaizdą arba vaizdo įrašą.",
        "imageVideoWebpage": "Šioje pasakojimo dalyje galite pridėti atvaizdą, vaizdo įrašą arba tinklalapį."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Ieškoma ${searchterm}...",
        "searchedFor": "${searchterm} paieškos rezultatai",
        "albumsOf": "${username} albumai",
        "noPhotosFound": "Nėra jūsų paiešką atitinkančių nuotraukų. Bandykite dar kartą.",
        "noItemsFound": "Nėra jūsų paiešką atitinkančių elementų. Bandykite dar kartą.",
        "noItemsInThisStory": "Nėra turinio iš ArcGIS, kuris jau būtų įtrauktas į šį pasakojimą.",
        "limitReached": "Rodoma 100 elementų. Jei nerandate to, ko jums reikia, išbandykite raktažodžių paiešką.",
        "galleryItems": {
          "uploadError": "Deja, šio elemento nepavyko įkelti."
        },
        "agol": {
          "remove1": "Panaikinkite šį nenaudojamą paveikslėlį iš ArcGIS paskyros.",
          "remove2": "(Turėsite vėl jį įkelti, jei nuspręsite naudoti jį vėliau.)",
          "removeFailed": "Pašalinkite šį nepasiekiamą atvaizdą iš sąrašo.",
          "modified": "Keitimo data: ${date}",
          "uploaded": "Įkėlimo data: ${date}",
          "contentByAuthor": "${contentType} sukūrė ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Ieškokite nuotraukų ${Picasa} arba ${Google+}"
        },
        "flickr": {
          "photostream": "Nuotraukų srautas",
          "searchAndBrowse": "Ieškokite ir naršykite nuotraukas ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Ieškokite nuotraukų ${Unsplash}",
          "photoBy": "Nuotrauką sukūrė ${username}",
          "userLink": "Eikite į ${username} ${Unsplash} puslapį"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Nuoroda į turinį internete",
            "imageOnly": "Nuoroda į atvaizdą internete",
            "imageAndVideo": "Nuoroda į atvaizdą arba vaizdo įrašą internete"
          },
          "linkText": {
            "imageOnly": "Aukščiau pateiktame laukelyje galite tiesiogiai nurodyti nuotraukas.",
            "imageAndVideo1": "Aukščiau pateiktame laukelyje galite įklijuoti nuorodas arba vaizdo įrašų iš ${YouTube} ir ${Vimeo} „iframe“ kodą.",
            "imageAndVideo2": "Galite tiesiogiai nurodyti nuotraukas.",
            "imageVideoWebpage1": "Aukščiau pateiktame laukelyje galite įklijuoti nuorodas arba vaizdo įrašų iš ${YouTube} ir ${Vimeo} „iframe“ kodą.",
            "imageVideoWebpage2": "Galite tiesiogiai nurodyti nuotraukas, tinklalapius arba internetines aplikacijas.",
            "ender": "Kur galima, naudokite saugias (https) nuorodas."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Įkelkite puslapį naudojant saugų ryšį (https)",
            "embedProtocolWarning1": "Jei šis puslapis neįkelia jūsų pasakojimo, vadinasi, jo negalima įdėti interneto saugos sumetimais.",
            "embedProtocolWarning2": "Jei šis puslapis neįkelia jūsų pasakojimo, panaikinkite šios parinkties žymėjimą ir bandykite dar kartą. Jei puslapio vis dar negalima įkelti, vadinasi, jo negalima įdėti interneto saugos sumetimais.",
            "embedProtocolWarning3": "Kaip alternatyvą įtraukite savo pasakojime nuorodą, kad atidarytumėte puslapį naujos naršyklės skirtuke. ${linkText}",
            "linkText": "Sužinokite daugiau."
          },
          "placeholder": "${https://}... arba ${http://}... arba ${<iframe>}",
          "uploadErrors": {
            "generic": "Įvedant adresą įvyko klaida. Bandykite dar kartą.",
            "imageOnly1": "Šioje pasakojimo dalyje turite naudoti atvaizdą.",
            "imageOnly2": "Pateikite nuorodą į atvaizdą (.jpg, .png, .gif) arba pasirinkite atvaizdą iš ${ArcGIS}, ${Flickr}, ${Google+} arba ${Unsplash}.",
            "imageAndVideo1": "Šioje pasakojimo dalyje turite naudoti atvaizdą arba vaizdo įrašą.",
            "imageAndVideo2": "Pateikite nuorodą į atvaizdą (.jpg, .png, .gif) arba vaizdo įrašą ${YouTube} ar ${Vimeo}, arba pasirinkite atvaizdą iš ${ArcGIS}, ${Flickr}, ${Google+} ar ${Unsplash}.",
            "badFormat": "Nuoroda į failą, kurį bandote pridėti, suformatuota netinkamai.",
            "inaccessible": "Failo, kurį bandote pridėti, trūksta arba jis nepasiekiamas.",
            "tryAgain": "Patikrinkite adresą ir bandykite iš naujo.",
            "mediaTypes": {
              "VIDEO": "vaizdo įrašas",
              "IMAGE": "atvaizdas",
              "generic": "medija"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E. pašto arba ${Picasa} / ${Google+} ID",
          "helpText": "Į savo pasakojimą galite pridėti nuotraukų, įkeltų į ${Picasa} arba ${Google+}. ${helpLinkText} apie atvaizdų, saugomų jūsų ${Google} paskyroje, naudojimą jūsų pasakojimuose.",
          "helpLinkText": "Sužinokite daugiau",
          "cannotFindUser": "Nepavyko rasti naudotojo ${username}. Bandykite dar kartą."
        },
        "unsplash": {
          "placeholder": "Nuotraukų paieška",
          "aboutText": "${Unsplash} – tai prižiūrimas nemokamų, aukštos kokybės nuotraukų rinkinys.",
          "copyrightText": "Visoms nuotraukoms, paskelbtoms ${Unsplash},  suteikta ${CC0} licencija. Daugiau informacijos rasite ${moreInfoLink}.",
          "moreInfoLink": "čia"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} paskyra",
            "text": "Visos ${Flickr}"
          },
          "placeholders": {
            "user": "Paskyros paieška",
            "userText": "Ieškoti šios nuotraukų paskyros",
            "text": "Nuotraukų paieška"
          },
          "errors": {
            "cannotFindUser": "Nepavyko rasti naudotojo ${username}.",
            "noUserPhotos": "${username} neturi jokių viešų nuotraukų.",
            "didYouMean": "Turite omenyje ${username}?",
            "generalUserError": "Įvyko klaida ieškant naudotojo ${username}."
          },
          "licenses": {
            "licenseLabel": "Licencija: ",
            "public": "Viešasis domenas",
            "commercial": "Tinkamas komerciniam naudojimui",
            "nonCommercial": "Tinkamas nekomerciniam naudojimui",
            "reserved": "Visos teisės saugomos.",
            "any": "Bet kokia licencija"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Šis pasakojimas",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portalas",
            "myOrg": "${orgname} organizacija",
            "myContent": "Mano turinys"
          },
          "createContent": {
            "or": "ARBA",
            "dragAndDrop": "Nuvilkite atvaizdą (-us) čia",
            "uploadImage": "Ieškokite atvaizdo (-ų)",
            "agolInfo": "Atvaizdai bus saugomi jūsų ArcGIS paskyroje ir pasiekiami tik jūsų pasakojimo viduje.",
            "saveBeforeUpload": "Įrašę šį pasakojimą, galite įkelti atvaizdus į ArcGIS čia.",
            "fileTypesImage": "Palaikomi failų tipai: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Internetinis žemėlapis",
            "webscene": "Internetinė scena",
            "image": "Vaizdas",
            "date": "Data",
            "sortByDate": "Rūšiuoti pagal datą",
            "title": "Pavadinimas",
            "sortByTitle": "Rūšiuoti pagal pavadinimą",
            "views": "Peržiūros",
            "search": "Ieškoti pagal raktažodį arba ID"
          }
        }
      }
    }
  }
});