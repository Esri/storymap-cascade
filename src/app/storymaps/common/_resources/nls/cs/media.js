/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Odkaz na obsah",
      "urls_short": "Odkaz",
      "contentType": {
        "error": "Žádné autorizované médium.",
        "imageOnly": "V této části příběhu můžete přidat obrázek.",
        "imageAndVideo": "V této části příběhu můžete přidat obrázek nebo video.",
        "imageVideoWebpage": "V této části příběhu můžete přidat obrázek, video nebo webovou stránku."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Vyhledávání \"${searchterm}\"...",
        "searchedFor": "Výsledky vyhledávání \"${searchterm}\"...",
        "albumsOf": "Alba uživatele ${username}",
        "noPhotosFound": "Vašemu vyhledávání neodpovídají žádné fotografie. Zkuste to prosím znovu.",
        "noItemsFound": "Vašemu vyhledávání neodpovídají žádné položky. Zkuste to prosím znovu.",
        "noItemsInThisStory": "K vašemu příběhu nebyl zatím přidán žádný obsah z ArcGIS.",
        "limitReached": "Zobrazeno 100 položek. Pokud jste nenašli, co potřebujete, zkuste vyhledávat podle klíčových slov.",
        "galleryItems": {
          "uploadError": "Tato položka se bohužel nenačetla."
        },
        "agol": {
          "remove1": "Odstraňte tento nepoužívaný obrázek ze svého účtu ArcGIS.",
          "remove2": "(Pokud se jej rozhodnete používat později, bude jej třeba znovu načíst.)",
          "removeFailed": "Odstraňte tento nedostupný obrázek z tohoto seznamu.",
          "modified": "Upraveno ${date}",
          "uploaded": "Načteno ${date}",
          "contentByAuthor": "${contentType}, autor: ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Vyhledávat fotografie ve službě ${Picasa} nebo ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Vyhledávat a procházet fotografie ve službě ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Vyhledávat fotografie ve službě ${Unsplash}",
          "photoBy": "Fotografie podle uživatele ${username}",
          "userLink": "Přejít na stránku ${Unsplash} uživatele ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Propojit s obsahem na webu",
            "imageOnly": "Propojit s obrázkem na webu",
            "imageAndVideo": "Propojit s obrázkem nebo videem na webu"
          },
          "linkText": {
            "imageOnly": "V poli výše můžete vytvořit propojení přímo na fotografie.",
            "imageAndVideo1": "V poli výše můžete vložit propojení nebo kód iframe pro videa ze služeb ${YouTube} a ${Vimeo}.",
            "imageAndVideo2": "Můžete také vytvořit propojení přímo na fotografie.",
            "imageVideoWebpage1": "V poli výše můžete vložit propojení nebo kód iframe pro videa ze služeb ${YouTube} a ${Vimeo}.",
            "imageVideoWebpage2": "Můžete také vložit propojení přímo na fotografie, webové stránky nebo webové aplikace.",
            "ender": "Je-li to možné, použijte zabezpečená propojení (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Nahrát stránku přes zabezpečené připojení (https)",
            "embedProtocolWarning1": "Pokud se tato stránka nenahrála do vašeho příběhu, nelze ji z důvodu zabezpečení webu vložit.",
            "embedProtocolWarning2": "Pokud se tato stránka nevložila do vašeho příběhu, zrušte zaškrtnutí této možnosti a zkuste to znovu. Jestliže se stránka opět nenahraje, nelze ji vložit z důvodu zabezpečení webu.",
            "embedProtocolWarning3": "Alternativní možností je přidat do vašeho vyprávění odkaz na otevření stránky v nové záložce prohlížeče. ${linkText}",
            "linkText": "Více informací."
          },
          "placeholder": "${https://}... or ${http://}... or ${<iframe>}",
          "uploadErrors": {
            "generic": "U zadané adresy se něco nezdařilo. Zkuste to prosím znovu.",
            "imageOnly1": "V této části příběhu musíte použít obrázek.",
            "imageOnly2": "Zadejte odkaz na obrázek (.jpg, .png, .gif) nebo vyberte obrázek ze služby ${ArcGIS}, ${Flickr}, ${Google+} nebo ${Unsplash}.",
            "imageAndVideo1": "V této části příběhu musíte použít obrázek nebo video.",
            "imageAndVideo2": "Zadejte odkaz na obrázek (.jpg, .png, .gif) nebo video ze služby ${YouTube} or ${Vimeo} nebo vyberte obrázek ze služby ${ArcGIS}, ${Flickr}, ${Google+} nebo ${Unsplash}.",
            "badFormat": "Odkaz na soubor, který se pokoušíte přidat, je zformátován nesprávně.",
            "inaccessible": "Soubor, který se pokoušíte přidat, chybí nebo je nedostupný.",
            "tryAgain": "Zkontrolujte adresu a zkuste to znovu",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "obrázek",
              "generic": "média"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-mail nebo ${Picasa}/${Google+} ID",
          "helpText": "Do svého příběhu můžete přidat fotografie načtené ve službě ${Picasa} nebo ${Google+}. ${helpLinkText}: použití obrázků uložených na účtu ${Google} ve vašich příbězích.",
          "helpLinkText": "Více informací",
          "cannotFindUser": "Uživatel ${username} nebyl nalezen. Zkuste to znovu."
        },
        "unsplash": {
          "placeholder": "Vyhledat fotografie",
          "aboutText": "${Unsplash} je kontrolovaná sbírka bezplatných, vysoce kvalitních snímků.",
          "copyrightText": "Všechny fotografie publikované ve službě ${Unsplash} jsou licencovány na základě licence ${CC0}. Další informace naleznete na adrese ${moreInfoLink}.",
          "moreInfoLink": "zde"
        },
        "flickr": {
          "searchType": {
            "account": "Účet ${Flickr}",
            "text": "Vše ${Flickr}"
          },
          "placeholders": {
            "user": "Vyhledat účet",
            "userText": "Vyhledat fotografie na tomto účtu",
            "text": "Vyhledat fotografie"
          },
          "errors": {
            "cannotFindUser": "Uživatel ${username} nebyl nalezen.",
            "noUserPhotos": "Uživatel ${username} nemá žádné veřejné fotografie.",
            "didYouMean": "Měli jste na mysli uživatele ${username}?",
            "generalUserError": "Vyhledávání uživatele ${username} se nezdařilo."
          },
          "licenses": {
            "licenseLabel": "Licence: ",
            "public": "Veřejná doména",
            "commercial": "OK pro komerční využití",
            "nonCommercial": "OK pro nekomerční využití",
            "reserved": "Všechna práva vyhrazena",
            "any": "Jakákoli licence"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Tento příběh",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portál",
            "myOrg": "Organizace ${orgname}",
            "myContent": "Můj obsah"
          },
          "createContent": {
            "or": "NEBO",
            "dragAndDrop": "Přetáhněte snímek (snímky) sem",
            "uploadImage": "Procházet snímky",
            "agolInfo": "Obrázky se uloží do vašeho účtu ArcGIS a bude možné k nim přistupovat pouze ve vašem příběhu.",
            "saveBeforeUpload": "Po uložení tohoto příběhu můžete snímky načíst do služby ArcGIS zde.",
            "fileTypesImage": "Podporované typy souborů: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Webová mapa",
            "webscene": "Webová scéna",
            "image": "Obrázek",
            "date": "Datum",
            "sortByDate": "Seřadit podle data",
            "title": "Název",
            "sortByTitle": "Seřadit podle názvu",
            "views": "Zobrazení",
            "search": "Hledat podle klíčového slova nebo ID"
          }
        }
      }
    }
  }
});