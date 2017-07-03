/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Link la conţinut",
      "urls_short": "Link",
      "contentType": {
        "error": "Niciun mediu autorizat.",
        "imageOnly": "În această parte a relatării puteţi adăuga o imagine.",
        "imageAndVideo": "În această parte a relatării puteţi adăuga o imagine sau un videoclip.",
        "imageVideoWebpage": "În această parte a relatării puteţi adăuga o imagine, un videoclip sau o pagină web."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Se caută „${searchterm}”...",
        "searchedFor": "Se caută rezultate pentru „${searchterm}”",
        "albumsOf": "Albume ${username}",
        "noPhotosFound": "Nicio fotografie nu se potriveşte căutării dvs. Încercaţi din nou.",
        "noItemsFound": "Niciun element nu se potriveşte căutării dvs. Încercaţi din nou.",
        "noItemsInThisStory": "Până acum, la această relatare nu a fost adăugat conţinut din ArcGIS.",
        "limitReached": "Se afişează 100 de elemente. Dacă nu aţi găsit ce doreaţi, încercaţi o căutare după cuvinte cheie.",
        "galleryItems": {
          "uploadError": "Ne pare rău, încărcarea acestui element a eşuat."
        },
        "agol": {
          "remove1": "Ştergeţi această imagine neutilizată din contul dvs. ArcGIS.",
          "remove2": "(Va trebui să o încărcaţi din nou, dacă decideţi să o folosiţi ulterior.)",
          "removeFailed": "Eliminaţi această imagine inaccesibilă din această listă.",
          "modified": "Modificat ${date}",
          "uploaded": "Încărcat ${date}",
          "contentByAuthor": "${contentType} de ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Răsfoiţi fotografii pe ${Picasa} sau ${Google+}"
        },
        "flickr": {
          "photostream": "Flux foto",
          "searchAndBrowse": "Căutaţi şi răsfoiţi fotografii pe ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Căutaţi fotografii pe ${Unsplash}",
          "photoBy": "Fotografie de ${username}",
          "userLink": "Accesaţi pagina ${Unsplash} a ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Link către conţinut de pe web",
            "imageOnly": "Link către o imagine de pe web",
            "imageAndVideo": "Link către o imagine sau un videoclip de pe web"
          },
          "linkText": {
            "imageOnly": "În caseta de mai sus, puteţi face o legătură directă la fotografii.",
            "imageAndVideo1": "În caseta de mai sus, puteţi lipi linkuri sau cod iframe din videoclipuri de pe ${YouTube} şi ${Vimeo}.",
            "imageAndVideo2": "De asemenea, puteţi face o legătură directă la fotografii.",
            "imageVideoWebpage1": "În caseta de mai sus, puteţi lipi linkuri sau cod iframe din videoclipuri de pe ${YouTube} şi ${Vimeo}.",
            "imageVideoWebpage2": "De asemenea, puteţi face o legătură directă la fotografii, pagini web sau aplicaţii web.",
            "ender": "Dacă este posibil, folosiţi linkuri sigure (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Încărcaţi pagina printr-o conexiune securizată (https)",
            "embedProtocolWarning1": "Dacă pagina nu se încarcă în relatarea dvs., nu poate fi încorporată din motive de securitate web.",
            "embedProtocolWarning2": "Dacă pagina nu se încarcă în relatarea dvs., debifaţi această opţiune şi încercaţi din nou. Dacă pagina tot nu se încarcă, nu poate fi încorporată din motive de securitate web.",
            "embedProtocolWarning3": "Ca alternativă, adăugaţi un link la naraţiunea dvs. pentru a deschide pagina într-o filă de browser nouă. ${linkText}",
            "linkText": "Aflaţi mai multe."
          },
          "placeholder": "${https://}... sau ${http://}... sau ${<iframe>}",
          "uploadErrors": {
            "generic": "Ceva nu a mers cum trebuie cu privire la adresa introdusă. Încercaţi din nou.",
            "imageOnly1": "Trebuie să utilizaţi o imagine în această parte a relatării.",
            "imageOnly2": "Furnizaţi un link către o imagine (.jpg, .png, .gif) sau alegeţi o imagine de pe ${ArcGIS}, ${Flickr}, ${Google+} sau ${Unsplash}.",
            "imageAndVideo1": "Trebuie să utilizaţi o imagine sau un videoclip în această parte a relatării.",
            "imageAndVideo2": "Furnizaţi un link către o imagine (.jpg, .png, .gif) sau un videoclip de pe ${YouTube} sau ${Vimeo} sau alegeţi o imagine de pe ${ArcGIS}, ${Flickr}, ${Google+} sau ${Unsplash}.",
            "badFormat": "Linkul către fişier pe care încercaţi să îl adăugaţi este formatat incorect.",
            "inaccessible": "Fişierul pe care încercaţi să îl adăugaţi lipseşte sau nu este accesibil.",
            "tryAgain": "Verificaţi adresa şi încercaţi din nou.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "imagine",
              "generic": "media"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-mail sau ID ${Picasa}/${Google+}",
          "helpText": "Puteţi adăuga la relatarea dvs. fotografii încărcate în ${Picasa} sau ${Google+}. ${helpLinkText} despre utilizarea imaginilor stocate în contul ${Google} în relatările dvs.",
          "helpLinkText": "Aflaţi mai multe",
          "cannotFindUser": "Nu se poate găsi utilizatorul ${username}. Încercaţi din nou."
        },
        "unsplash": {
          "placeholder": "Căutaţi fotografii",
          "aboutText": "${Unsplash} este o colecţie întreţinută de fotografii de înaltă calitate, gratuite.",
          "copyrightText": "Toate fotografiile publicate pe ${Unsplash} sunt licenţiate în baza unei licenţe ${CC0}. Aflaţi mai multe informaţii ${moreInfoLink}.",
          "moreInfoLink": "aici"
        },
        "flickr": {
          "searchType": {
            "account": "Cont ${Flickr}",
            "text": "Toate ${Flickr}"
          },
          "placeholders": {
            "user": "Căutaţi contul",
            "userText": "Căutaţi fotografii în acest cont",
            "text": "Căutaţi fotografii"
          },
          "errors": {
            "cannotFindUser": "Nu se poate găsi utilizatorul ${username}.",
            "noUserPhotos": "${username} nu are fotografii publice.",
            "didYouMean": "Aţi vrut să spuneţi ${username}?",
            "generalUserError": "Ceva nu a mers cum trebuie la căutarea utilizatorului ${username}."
          },
          "licenses": {
            "licenseLabel": "Licenţă: ",
            "public": "Domeniu public",
            "commercial": "OK pentru utilizare comercială",
            "nonCommercial": "OK pentru utilizare necomercială",
            "reserved": "Toate drepturile rezervate",
            "any": "Orice licenţă"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Această relatare",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Organizaţie ${orgname}",
            "myContent": "Resursele mele"
          },
          "createContent": {
            "or": "'SAU'",
            "dragAndDrop": "Fixaţi imaginile aici",
            "uploadImage": "Răsfoiţi imagini",
            "agolInfo": "Imaginile vor fi stocate în contul ArcGIS şi vor fi accesibile doar în relatarea dvs.",
            "saveBeforeUpload": "Odată ce aţi salvat relatarea, puteţi încărca imagini în ArcGIS aici.",
            "fileTypesImage": "Tipuri de fişier acceptate: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Hartă Web",
            "webscene": "Scenă web",
            "image": "Imagine",
            "date": "Data",
            "sortByDate": "Sortare după dată",
            "title": "Titlu",
            "sortByTitle": "Sortare după titlu",
            "views": "Vizualizări",
            "search": "Căutarea după cuvânt cheie sau ID"
          }
        }
      }
    }
  }
});