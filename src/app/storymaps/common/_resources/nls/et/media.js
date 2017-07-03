/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Link sisule",
      "urls_short": "Link",
      "contentType": {
        "error": "Lubatud meediamaterjali pole.",
        "imageOnly": "Loo selles osas saate lisada pildi.",
        "imageAndVideo": "Loo selles osas saate lisada pildi või video.",
        "imageVideoWebpage": "Loo selles osas saate lisada pildi, video või veebilehe."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Otsing: \"${searchterm}\"...",
        "searchedFor": "Otsingutulemid: \"${searchterm}\"...",
        "albumsOf": "Kasutaja ${username} albumid",
        "noPhotosFound": "Teie otsingule ei vasta ükski foto. Proovige uuesti.",
        "noItemsFound": "Teie otsingule ei vasta ükski üksus. Proovige uuesti.",
        "noItemsInThisStory": "Sellele loole ei ole veel programmist ArcGIS sisu lisatud.",
        "limitReached": "Kuvatakse 100 üksust. Kui te ei leia, mida vajate, proovige märksõnaotsingut.",
        "galleryItems": {
          "uploadError": "Vabandame. Selle üksuse üleslaadimine ebaõnnestus."
        },
        "agol": {
          "remove1": "Kustuta see kasutamata pilt programmi ArcGIS kontolt.",
          "remove2": "(Kui soovite seda hiljem uuesti kasutada, peate selle uuesti üles laadima.)",
          "removeFailed": "Eemalda see juurdepääsmatu pilt loendist.",
          "modified": "Muudetud ${date}",
          "uploaded": "Üles laaditud ${date}",
          "contentByAuthor": "Sisutüübi ${contentType} autor: ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Sirvi fotosid rakendusega ${Picasa} või ${Google+}"
        },
        "flickr": {
          "photostream": "Fotovoog",
          "searchAndBrowse": "Otsi ja sirvi fotosid rakendusega ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Otsi fotosid rakendusega ${Unsplash}",
          "photoBy": "Foto autor: ${username}",
          "userLink": "Mine kasutaja ${username} lehele rakenduses ${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Link veebisisule",
            "imageOnly": "Link veebipildile",
            "imageAndVideo": "Link pildile või videole veebis"
          },
          "linkText": {
            "imageOnly": "Ülal oleval väljal saate lisada fotodele otselingi.",
            "imageAndVideo1": "Ülal olevale väljale saate kleepida rakenduste ${YouTube} ja ${Vimeo} video lingi või IFrame’i koodi.",
            "imageAndVideo2": "Fotode jaoks saab lisada ka otselingi.",
            "imageVideoWebpage1": "Ülal olevale väljale saate kleepida rakenduste ${YouTube} ja ${Vimeo} video lingi või IFrame’i koodi.",
            "imageVideoWebpage2": "Fotode, veebilehtede või veebirakenduste jaoks saab lisada ka otselingi.",
            "ender": "Võimalusel kasutage turvalisi (https) linke."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Lehe laadimine turvalise ühendusega (https)",
            "embedProtocolWarning1": "Kui seda lehte teie loos ei laadita, siis ei saa seda veebilehe turvalisusega seotud põhjustel manustada.",
            "embedProtocolWarning2": "Kui seda lehte teie loos ei laadita, tühistage see valik ja proovige uuesti. Kui lehte ikkagi ei laadita, ei saa seda veebilehe turvalisusega seotud põhjustel manustada.",
            "embedProtocolWarning3": "Alternatiivne võimalus on lisada loole link, mis avaneb eraldi brauseriaknas. ${linkText}",
            "linkText": "Lisateave."
          },
          "placeholder": "${https://}... või ${http://}... või ${<iframe>}",
          "uploadErrors": {
            "generic": "Sisestatud aadressiga läks midagi valesti. Proovige uuesti.",
            "imageOnly1": "Loo selles osas tuleb kasutada pilti.",
            "imageOnly2": "Lisage pildi (.jpg, .png, .gif) link või valige pilt rakendusest ${ArcGIS}, ${Flickr}, ${Google+}, või ${Unsplash}.",
            "imageAndVideo1": "Loo selles osas tuleb kasutada pilti või videot.",
            "imageAndVideo2": "Lisage pildi (.jpg, .png, .gif) link või valige video rakendusest ${ArcGIS} või ${Flickr} või valige pilt rakendusest ${ArcGIS}, ${Flickr}, ${Google+} või ${Unsplash}.",
            "badFormat": "Faili link, mida lisada püüate, ei ole õiges vormingus.",
            "inaccessible": "Fail, mida lisada püüate, ei ole leitav või avatav.",
            "tryAgain": "Kontrollige aadressi ja proovige uuesti.",
            "mediaTypes": {
              "VIDEO": "videomaterjalide",
              "IMAGE": "pilt",
              "generic": "meedia"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-posti aadress või ${Picasa}/${Google+} ID",
          "helpText": "Saate lisada oma loole pilte, mille olete üles laadinud rakendustesse ${Picasa} või ${Google+}. Vaadake siit ${helpLinkText}, kuidas kasutada lugudes ${Google}’i kontol talletatavaid fotosid.",
          "helpLinkText": "Lisateave",
          "cannotFindUser": "Kasutajat ${username} ei leitud. Proovige uuesti."
        },
        "unsplash": {
          "placeholder": "Otsi fotosid",
          "aboutText": "${Unsplash} pakub tasuta (kontrollitud) kvaliteetseid fotosid.",
          "copyrightText": "Kõik rakenduse ${Unsplash} fotod on litsentsiga (${CC0} License). Lisateave ${moreInfoLink}.",
          "moreInfoLink": "siit"
        },
        "flickr": {
          "searchType": {
            "account": "Rakenduse ${Flickr} konto",
            "text": "Kõik ${Flickr}"
          },
          "placeholders": {
            "user": "Otsi kontot",
            "userText": "Otsi fotosid sellelt kontolt",
            "text": "Otsi fotosid"
          },
          "errors": {
            "cannotFindUser": "Kasutajat ${username} ei leitud.",
            "noUserPhotos": "Kasutajal ${username} ei ole avalikke fotosid.",
            "didYouMean": "Kas mõtlesite kasutajat ${username}?",
            "generalUserError": "Kasutaja ${username} otsimisel läks midagi valesti."
          },
          "licenses": {
            "licenseLabel": "Litsents: ",
            "public": "Avalik domeen",
            "commercial": "Võib kasutada ärieesmärgil.",
            "nonCommercial": "Võib kasutada muul kui ärieesmärgil.",
            "reserved": "Kõik õigused kaitstud",
            "any": "Litsents"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "See lugu",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Ettevõte ${orgname}",
            "myContent": "Minu sisu"
          },
          "createContent": {
            "or": "VÕI",
            "dragAndDrop": "Pane pilt (pildid) siia",
            "uploadImage": "Sirvi pilte",
            "agolInfo": "Pildid salvestatakse teie ArcGIS-i kontole ja need on ligipääsetavad ainult teie loos.",
            "saveBeforeUpload": "Kui loo salvestate, saate siit laadida pildi programmi ArcGIS.",
            "fileTypesImage": "Toetatud failitüübid: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Veebikaart",
            "webscene": "Veebivaade",
            "image": "Pilt",
            "date": "Kuupäev",
            "sortByDate": "Sordi kuupäeva järgi",
            "title": "Pealkiri",
            "sortByTitle": "Sordi pealkirja järgi",
            "views": "Vaatamised",
            "search": "Otsi märksõna või ID järgi"
          }
        }
      }
    }
  }
});