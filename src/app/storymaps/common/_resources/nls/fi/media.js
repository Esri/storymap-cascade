/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Linkki sisältöön",
      "urls_short": "Linkki",
      "contentType": {
        "error": "Ei valtuutettua mediaa.",
        "imageOnly": "Tässä tarinan osassa voit lisätä kuvan.",
        "imageAndVideo": "Tässä tarinan osassa voit lisätä kuvan tai videon.",
        "imageVideoWebpage": "Tässä tarinan osassa voit lisätä kuvan, videon tai verkkosivun."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Etsitään kohdetta ${searchterm}...",
        "searchedFor": "Kohteen ${searchterm} hakutulokset",
        "albumsOf": "Käyttäjän ${username} albumit",
        "noPhotosFound": "Yksikään valokuva ei täsmännyt hakuasi. Yritä uudelleen.",
        "noItemsFound": "Yksikään kohde ei täsmännyt hakuasi. Yritä uudelleen.",
        "noItemsInThisStory": "ArcGISista ei ole lisätty vielä yhtään sisältöä tähän tarinaan.",
        "limitReached": "Näytetään 100 kohdetta. Jos et löytänyt tarvitsemaasi, kokeile avainsanahakua.",
        "galleryItems": {
          "uploadError": "Valitettavasti tämän kohteen lataus palvelimeen epäonnistui."
        },
        "agol": {
          "remove1": "Poista tämä käyttämätön kuva ArcGIS-tilistäsi.",
          "remove2": "(Joudut lataamaan kuvan uudelleen, jos haluat käyttää sitä myöhemmin.)",
          "removeFailed": "Poista luettelosta tämä kuva, jota et voi käyttää.",
          "modified": "Muokkauspäivämäärä: ${date}",
          "uploaded": "Latauspäivämäärä: ${date}",
          "contentByAuthor": "${contentType}, tekijä: ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Selaa valokuvia ${Picasa}ssa tai ${Google+}:ssa"
        },
        "flickr": {
          "photostream": "Valokuvavirta",
          "searchAndBrowse": "Etsi ja selaa valokuvia ${Flickr}ssä"
        },
        "unsplash": {
          "searchAndBrowse": "Etsi valokuvia ${Unsplash}issa",
          "photoBy": "Käyttäjän ${username} valokuva",
          "userLink": "Siirry käyttäjän ${username} ${Unsplash}-sivulle"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Linkki verkkosisältöön",
            "imageOnly": "Linkki verkossa olevaan valokuvaan",
            "imageAndVideo": "Linkki verkossa olevaan valokuvaan tai videoon"
          },
          "linkText": {
            "imageOnly": "Yllä olevassa ruudussa voit luoda linkin suoraan valokuviin.",
            "imageAndVideo1": "Yllä olevassa ruudussa voit liittää ${YouTube}- ja ${Vimeo}-videoiden linkkejä tai iframe-koodeja.",
            "imageAndVideo2": "Voit myös luoda linkkejä suoraan valokuviin.",
            "imageVideoWebpage1": "Yllä olevassa ruudussa voit liittää ${YouTube}- ja ${Vimeo}-videoiden linkkejä tai iframe-koodeja.",
            "imageVideoWebpage2": "Voit myös luoda linkkejä suoraan valokuviin, verkkosivuihin tai web-sovelluksiin.",
            "ender": "Käytä mahdollisuuksien mukaan suojattuja (https) linkkejä."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Lataa sivu suojatun yhteyden kautta (https)",
            "embedProtocolWarning1": "Jos tämä sivu ei lataudu tarinassa, sitä ei voi upottaa suojaussyistä.",
            "embedProtocolWarning2": "Jos tämä sivu ei lataudu tarinassa, poista tämän valintaruudun valinta ja yritä uudelleen. Jos sivu ei edelleenkään lataudu, sitä ei voi upottaa suojaussyistä.",
            "embedProtocolWarning3": "Voit vaihtoehtoisesti lisätä linkin tarinaan, jolloin sivu avautuu uudella välilehdellä selaimessa. ${linkText}",
            "linkText": "Lisätietoja."
          },
          "placeholder": "${https://}... tai ${http://}... tai ${<iframe>}",
          "uploadErrors": {
            "generic": "Annettu osoite on virheellinen. Yritä uudelleen.",
            "imageOnly1": "Tässä tarinan osassa on käytettävä kuvaa.",
            "imageOnly2": "Määritä linkki kuvaan (.jpg, .png tai .gif) tai valitse ${ArcGIS}-, ${Flickr}-, ${Google+}- tai ${Unsplash}-palvelun kuva.",
            "imageAndVideo1": "Tässä tarinan osassa on käytettävä kuvaa tai videota.",
            "imageAndVideo2": "Määritä linkki kuvaan (.jpg, .png tai .gif) tai ${YouTube}- tai ${Vimeo}-palvelun videoon. Voit vaihtoehtoisesti valita ${ArcGIS}-, ${Flickr}-, ${Google+}- tai ${Unsplash}-palvelun kuvan.",
            "badFormat": "Linkki tiedostoon, jota yrität lisätä, on muotoiltu väärin.",
            "inaccessible": "Tiedosto, jota yrität lisätä, puuttuu tai sitä ei voi käyttää.",
            "tryAgain": "Tarkista osoite ja yritä uudelleen.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "kuva",
              "generic": "media"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "Sähköpostiosoite tai ${Picasa}-/${Google+}-tunnus",
          "helpText": "Voit lisätä tarinaasi valokuvia, jotka on ladattu ${Picasa}- tai ${Google+}-palveluun. ${helpLinkText} ${Google}-tiliisi tallennettujen kuvien käytöstä tarinoissa.",
          "helpLinkText": "Lisätietoja",
          "cannotFindUser": "Käyttäjää ${username} ei löydy. Yritä uudelleen."
        },
        "unsplash": {
          "placeholder": "Etsi valokuvia",
          "aboutText": "${Unsplash} on ilmaisten ja korkealaatuisten valokuvien järjestetty kokoelma.",
          "copyrightText": "Kaikki ${Unsplash}-palvelussa julkaistut valokuvat ovat ${CC0}-lisenssin alaisia. Lisätietoja on kohdassa ${moreInfoLink}.",
          "moreInfoLink": "tätä"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr}-tili",
            "text": "Kaikki – ${Flickr}"
          },
          "placeholders": {
            "user": "Etsi tiliä",
            "userText": "Etsi valokuvia tästä tilistä",
            "text": "Etsi valokuvia"
          },
          "errors": {
            "cannotFindUser": "Käyttäjää ${username} ei löydy.",
            "noUserPhotos": "Käyttäjällä ${username} ei ole julkisia valokuvia.",
            "didYouMean": "Tarkoititko käyttäjää ${username}?",
            "generalUserError": "Käyttäjän ${username} etsinnässä tapahtui virhe."
          },
          "licenses": {
            "licenseLabel": "Lisenssi: ",
            "public": "Public Domain",
            "commercial": "Kaupallinen käyttö – OK",
            "nonCommercial": "Muu kuin kaupallinen käyttö – OK",
            "reserved": "Kaikki oikeudet pidätetään",
            "any": "Mikä tahansa lisenssi"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Tämä tarina",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portaali",
            "myOrg": "Organisaatio ${orgname}",
            "myContent": "Oma sisältö"
          },
          "createContent": {
            "or": "TAI",
            "dragAndDrop": "Pudota kuva(t) tähän",
            "uploadImage": "Etsi kuvia selaamalla",
            "agolInfo": "Kuvat tallennetaan ArcGIS-tilillesi. Niitä voi käyttää vain tarinassasi.",
            "saveBeforeUpload": "Kun tallennat tämän tarinan, voit ladata kuvat ArcGISiin tässä.",
            "fileTypesImage": "Tuetut tiedostotyypit: .png, .jpeg, .jpg, .gif ja .bmp"
          },
          "filterAndSort": {
            "webmap": "Web-kartta",
            "webscene": "Web-maisema",
            "image": "kuva",
            "date": "päivämäärä",
            "sortByDate": "Lajittele päivämäärän perusteella",
            "title": "Otsikko",
            "sortByTitle": "Lajittele otsikon perusteella",
            "views": "Katselukerrat",
            "search": "Hae avainsanan tai tunnuksen perusteella"
          }
        }
      }
    }
  }
});