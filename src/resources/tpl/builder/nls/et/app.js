/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Rakenda",
      "close": "Sulge"
    },
    "header": {
      "sharingNotAvailable": "See pole saadaval enne, kui lugu jagate",
      "edit": "Muuda"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Järjehoidjad",
        "logoSharing": "Logo ja jagamine",
        "theme": "Välimus"
      },
      "bookmarks": {
        "title": "Jaotis",
        "bookmark": "Järjehoidja",
        "intro": "Järjehoidjad on päises kuvatavate lugude jaotiste lingid. Loo põhijaotiste konkreetsed järjehoidjad aitavad lugejatel loost parema ülevaate saada.",
        "sequentialDefault": "Narratiivjaotis (teksti ei leitud)",
        "immersiveDefault": "Detailsem jaotis (teksti ei leitud)",
        "titleDefault": "Pealkirja jaotis (teksti ei leitud)",
        "coverDefault": "Esilehe jaotis (teksti ei leitud)",
        "coverAppendage": "(Esileht)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Kasuta logo ${ESRI}",
        "useOrgLogo": "Kasuta minu ettevõtte logo",
        "useOrgLogoHelp": "Kasuta administraatorilt saadud logo",
        "logoLink": "Logo link",
        "logoUploadProgress": "Logo üleslaadimine",
        "logoUploadSuccess": "Logo laaditi üles",
        "logoUploadError": "Logo üleslaadimine nurjus, lülitutakse tagasi logole ${ESRI}",
        "customHeaderText": "Reklaamlause",
        "taglineLinkDisabledTooltip": "Lingi lubamiseks sisestage reklaamlause",
        "link": "Reklaamlause link",
        "enableSocialSharing": "Kuva jagamise nupp"
      },
      "appearance": {
        "themeLabel": "Kujundus",
        "fontLabel": "Fondid",
        "previewLabel": "Eelvaade",
        "fontsTitleLabel": "Pealkirjad",
        "fontsBodyLabel": "Sisu",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Privaatne",
      "btnOrg": "Ettevõte",
      "btnPublic": "Avalik",
      "btnEveryone": "Kõigiga"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Koostaja",
      "buttonSaving": "Salvestamine",
      "buttonSaved": "Salvestatud",
      "buttonError": "Salvestamine ebaõnnestus",
      "buttonShare": "Jaga",
      "buttonSettings": "Seaded",
      "settingsLogoError": "Teie logoga on probleem. Klõpsake lisateabe saamiseks.",
      "buttonHelp": "Abi otsimine või tagasiside esitamine GeoNetis",
      "buttonPreview": "Kuva lugu",
      "buttonHealth": "Seisundi raport",
      "manageStories": "Hallake minu lugusid",
      "closeWithPendingChange": "Kas olete kindel, et soovite tegevuse kinnitada? Teie tehtud muudatused lähevad kaotsi.",
      "coverLabel": "Esileht",
      "creditsLabel": "Krediidid",
      "betaFeedback": "Tagasiside",
      "betaNote": "Andke meile teada, mida rakendusest ${APP_NAME} arvate. Samuti teavitage meid ka sellest, kui miski ootustekohaselt ei tööta.",
      "notSharedNote": "Teie lugu pole jagatud, ainult teie näete seda.",
      "organizationWarning": "Selleks et teised saaksid seda lugu vaadata, peate loole lisatud vaateid, vaatekihte ja rakendusi oma ettevõttega jagama. Kaarte ja kaardikihte jagatakse automaatselt.",
      "publicWarning": "Selleks et teised saaksid seda lugu vaadata, peate loole lisatud vaateid, vaatekihte ja rakendusi kõigiga jagama. Kaarte ja kaardikihte jagatakse automaatselt.",
      "addTitleNote": "Salvestamiseks lisage esilehe pealkiri",
      "saveError": "Teie loo salvestamisel ilmnes tõrge.",
      "duplicate": "Duplikaat",
      "organize": "Paiguta",
      "done": "Valmis",
      "invite": "Loo täiendamisel kuvatakse jaotised siin...",
      "mystoriestooltip": "Juhul kui loos esineb probleeme, annab teile nendest teada kaskaadikoostur, mis aitab teil probleemid ka lahendada. Vaateid ja lisatud rakendusi ei kontrollita, neid peate ise kontrollima."
    },
    "immersiveViewPanel": {
      "transition": "Üleminek",
      "chooseTransition": "Vali üleminek",
      "fade": "Hajutus",
      "fadeSlow": "Aeglane hajutamine",
      "swipeVertical": "Vertikaalne rullimine",
      "swipeHorizontal": "Horisontaalne rullimine",
      "none": "Puudub",
      "disabledConsecutiveSameMedia": "See pole saadaval, kui järjestikuste vaadete jaoks kasutatakse sama meediumit",
      "disabledTooltipMap": "Selle ülemineku kasutamiseks peavad mõlema vaate nähtavad kihid olema erinevad ning muud kaardiatribuudid olema samad",
      "disabledConsecutiveSameMap": "See pole saadaval, kui järjestikuste vaadete jaoks kasutatakse sama kaarti",
      "disabledNotInBeta": "See pole saadaval, kui järjestikuste vaadete jaoks kasutatakse sama kaarti",
      "disabledNonConsecutive": "See pole saadaval, sest parajasti töötab veel üks sama meediumi eksemplar, mis pole järjestikune",
      "addMedia": "Lisa meedium",
      "invite": "Detailse jaotise täiendamisel kuvatakse vaated siia..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Välimus",
        "manage": "Halda",
        "size": "Suurus",
        "background": "Taust",
        "mobile": "Mobiil",
        "issues": "Probleemid",
        "fixIssues": "Lahenda probleeme"
      },
      "manage": {
        "changeMedia": "Vaheta meedia",
        "edit": "Muuda",
        "editAside": "See lugu avatakse uues brauseriaknas. Pärast muudatuste salvestamist salvestage lugu ja laadige see muudatuste nägemiseks uuesti.",
        "remove": "Eemalda"
      },
      "appearance": {
        "homeView": "Algvaade",
        "audio": "Heli",
        "on": "Sees",
        "muted": "Vaigistatud",
        "volumeAside": "Selles vaates esitatakse lugejale video automaatselt. Juhul kui te heli vaigistate, ei saa lugeja seda sisse lülitada.",
        "view": "Vaatamine",
        "resetLocation": "Lähtesta asukoht",
        "resetLayers": "Lähtesta kihid",
        "clearPopup": "Tühjenda hüpikaken",
        "interaction": "Interaktsioon",
        "interactionDisabled": "Interaktsioon on keelatud",
        "buttonToEnable": "Lubamise nupp",
        "interactionEnabled": "Interaktsioon on lubatud",
        "interactionAside": "*Interaktsiooninupp kuvatakse puuteekraaniga seadmete ekraanidel.",
        "slide": "Slaid",
        "noSlides": "Ühtegi slaidi pole saadaval.",
        "mapExtentPrompt": "Oma loo jutustamiseks värskenda kaarti ning muudatuste salvestamiseks klõpsake linnukest"
      },
      "sectionAppearance": {
        "layout": "Paigutus",
        "theme": "Kujundus"
      },
      "size": {
        "small": "Väike",
        "medium": "Keskmine",
        "large": "Suur",
        "noCrop": "Ära kärbi kõrgeid pilte",
        "noCropTallTooltip": "Kui jätate kõrge pildi kärpimata, jätab see lugejatele dramaatilise mulje, kui nad peavad kogu pildi nägemiseks alla kerima."
      },
      "background": {
        "noCrop": "Ära kärbi",
        "mostImportantPart": "Vali põhipunkt",
        "cropExplanationImmersive": "Selleks et valida, kuidas pilt eri ekraanisuuruste korral kärbitakse, valige pildil punkt. Valitud punkt on alati nähtav. Juhul, kui pilt peab täielikult nähtav olema, valige märkeruut „Ära kärbi”.",
        "cropExplanation": "Selleks et valida, kuidas pilt eri ekraanisuuruste korral kärbitakse, valige pildil punkt. Valitud punkt on alati nähtav.",
        "color": "Värv",
        "previews": "Eelvaated"
      },
      "altMedia": {
        "alternativeMedia": "Mobiiliseadme alternatiivne pilt",
        "explanation": "Teatud meediumisisu ei pruugi olla toetatud või ei pruugi töötada hästi mobiilsideseadmetes. Kasutage seda paneeli selle pildi määratlemiseks, mis kuvataks selle meediumisisu asemel, kui teie lugu vaadatakse mobiiltelefonis või tahvelarvutis.",
        "changeAltImage": "Muuda pilt",
        "uploadAltImage": "Lisa alternatiivne pilt"
      }
    },
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
            "searchAndBrowse": "Otsi ja sirvi fotosid rakendusega ${Flickr}",
            "captionStarter": "Foto autor: ${USERNAME}, asukoht: ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Otsi fotosid rakendusega ${Unsplash}",
            "photoBy": "Foto autor: ${username}",
            "userLink": "Mine kasutaja ${username} lehele rakenduses ${Unsplash}",
            "captionStarter": "Foto autor: ${USERNAME}, asukoht: ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Link veebisisule",
              "imageOnly": "Link veebipildile",
              "imageAndVideo": "Link pildile või videole veebis"
            },
            "linkText": {
              "imageOnly": "Ülalolevale väljale saate fotole lisada otselingi.",
              "imageAndVideo1": "Ülal olevale väljale saate kleepida rakenduste ${YouTube} või ${Vimeo} video lingi või IFrame’i koodi.",
              "imageAndVideo2": "Foto jaoks saab lisada ka otselingi.",
              "imageVideoWebpage1": "Ülalolevale väljale saate kleepida rakenduste ${YouTube} või ${Vimeo} veebisisu (nt dünaamiline diagramm või video) lingi või IFrame’i koodi.",
              "imageVideoWebpage2": "Foto, video, helifaili, veebilehe või veebirakenduse jaoks saab lisada ka otselingi.",
              "ender": "Kasutage alati turvalisi (https) linke. Kui sisu ei toeta https-i, lisage selle link oma loo teksti, et lugejad saaksid seda lugeda brauseri uuel vahekaardil.",
              "httpsError": "Lingi alguses peab olema HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Lehe laadimine turvalise ühendusega (https)",
              "embedProtocolWarning1": "Kui seda lehte teie loos ei laadita, siis ei saa seda veebilehe turvalisusega seotud põhjustel manustada.",
              "embedProtocolWarning2": "Kui seda lehte teie loos ei laadita, tühistage see valik ja proovige uuesti. Kui lehte ikkagi ei laadita, ei saa seda veebilehe turvalisusega seotud põhjustel manustada.",
              "embedProtocolWarning3": "Alternatiivne võimalus on lisada loole link, mis avaneb eraldi brauseriaknas. ${linkText}",
              "linkText": "Lisateave."
            },
            "placeholder": "${https://}... või ${<iframe>}",
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
                "VIDEO": "video",
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
              "commercial": "Võib kasutada ärilisel eesmärgil.",
              "nonCommercial": "Võib kasutada muul kui ärilisel eesmärgil.",
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
              "createNewMap": "Loo uus kaart",
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
    },
    "mapEditor": {
      "dialogTitle": "Muuda kaarti",
      "unauthorizedDomain": "Te ei asu kaardiredaktori kasutamiseks volitatud domeenis",
      "loading": "Oodake, kuni kaardiredaktor laadib",
      "saving": "Kaardi salvestamine",
      "success": "Kaart on salvestatud",
      "cancelTitle": "Kas hüljata kõik salvestamata muudatused?",
      "errorSave": "Kaardi salvestamine ebaõnnestus. Proovige uuesti.",
      "loadFail": "Kaardiredaktorit ei saa kahjuks laadida",
      "close": "Sule",
      "save": "Salvesta",
      "confirm": "Jah, sulge kaart",
      "deny": "Ei, jätka töötamist"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Jätkake oma lugu siit."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Meedia",
        "title": "Pealkiri",
        "immersive": "Detailne"
      },
      "link": {
        "invite": "Kleepige või sisestamise link."
      },
      "color": {
        "choose": "Vali",
        "cancel": "tühista",
        "clear": "Tühista värv"
      }
    },
    "imageGallery": {
      "addImage": "Lisa teine pilt",
      "moveBackward": "Liigu tagasi",
      "moveForward": "Liigu edasi"
    },
    "cover": {
      "titlePrompt": "Sisestage loo pealkiri...",
      "subtitlePrompt": "Alustamiseks liikuge kerides allapoole või lisage soovi korral alapealkiri",
      "mediaPlaceholder": "Lisage pilt või video",
      "saveError": "Salvestamine nurjus, sest selle pealkirjaga üksus on juba olemas"
    },
    "credits": {
      "sectionInvite": "Lisa krediitide jaotis",
      "warning": "Täita tuleb mõlemad väljad",
      "content": "Sisu...",
      "source": "Allikas...",
      "linkPrompt": "Valikuline link...",
      "introductionPlaceholder": "Lisage krediitide jaotisse valikuline tutvustus..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Kujundus"
      },
      "panelConfig": {
        "position": "Paigutus",
        "theme": "Kujundus",
        "size": "Suurus",
        "background": "Taust",
        "layout": "Kerimine (kõikide paneelide korral)"
      }
    },
    "title": {
      "placeholder": "Sisesta pealkiri..."
    },
    "media": {
      "imageUpload": "Pilti laaditakse üles",
      "imageUploadSuccess": "Pilt laaditi üles",
      "imageUploadFail": "Pildi üleslaadimine nurjus"
    },
    "controller": {
      "sectionOrganize": "Korraldasite jaotised",
      "immersiveOrganize": "Korraldasite vaated",
      "sectionDelete": "Kustutasite jaotise",
      "viewDelete": "Kustutasite vaate"
    },
    "notification": {
      "cancel": "Loobu",
      "close": "Sule",
      "undo": "Ennista"
    },
    "sections": {
      "sequence": "Narratiiv",
      "immersive": "Detailne",
      "title": "Pealkiri"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "pilt",
        "webmap": "kaart",
        "webscene": "stseen",
        "video": "videomaterjalide",
        "content": "sisu",
        "webpage": "veebileht"
      },
      "placeholders": {
        "generic": "See sisu pole kättesaadav.",
        "deleted": "See üksus on kustutatud.",
        "inaccessible": "See sisu pole kättesaadav.",
        "unauthorized": "Teil puudub õigus seda sisu vaadata.",
        "unshared": "Seda üksust jagatakse teie looga võrreldes muul viisil.",
        "othersUnshared": "Seda üksust jagatakse teie looga võrreldes muul viisil.",
        "subscriptionContent": "See kaart sisaldab tellijasisu kihti.",
        "premiumContent": "See kaart sisaldab kvaliteetsisu kihti.",
        "secureService": "See kaart sisaldab kaitstud kihti."
      },
      "contentIssues": {
        "noAltImage": "Meediumisisu ei pruugi mobiilis töötada",
        "noAltImageUnsupported": "Meediumisisu ei toetata mobiilis",
        "noAltImageWarning": "Meediumisisu ei pruugi mobiilis töötada",
        "altImageBroken": "Selle meediaüksuse jaoks määratud alternatiivne pilt pole ligipääsetav",
        "httpMedia": "Ebaturvaline meedium",
        "httpContent": "Ebaturvaline sisu"
      },
      "contentWarnings": {
        "noAltImage": "Enne jagamist kontrollige oma lugu kindlasti mobiilsideseadmes. Kui see meediumisisu ei tööta eeldatult, kasutage allolevat nuppu alternatiivse pildi lisamiseks, mis kuvatakse telefonis või tahvelarvutis loo vaatamisel.",
        "noAltImageUnsupported": "Mobiilsideseadmed ei toeta seda meediumisisu. Määrake vahekaardil Mobiil alternatiivne pilt, mida näidatakse, kui lugu kuvatakse mobiilsidega seadmetes. Kasutage allolevat nuppu alternatiivse pildi lisamiseks, mis kuvatakse telefonis või tahvelarvutis loo vaatamisel.",
        "noAltImageWarning": "Enne jagamist kontrollige oma lugu kindlasti mobiilsideseadmes. Kui see meediumisisu ei tööta eeldatult, kasutage allolevat nuppu alternatiivse pildi lisamiseks, mis kuvatakse telefonis või tahvelarvutis loo vaatamisel.",
        "noAltImageAlt": "Seda tüüpi meediumisisu ei pruugi olla toetatud või ei pruugi töötada hästi mobiilsideseadmetes. Sisestage vahekaardil Mobiil alternatiivne pilt, mis kuvataks selle meediumisisu asemel, kui teie lugu vaadatakse mobiiltelefonis või tahvelarvutis."
      },
      "descriptions": {
        "httpAudioUnfixable": "See heliklipp ei toeta HTTPS-i. Kustutage see oma loost või asendage lingiga.",
        "httpAudioUncheckable": "Sellel heliklipil on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et proovida selle heliklipi jaoks kasutada turvalist HTTPS URL-i. Kui see ei toimi, eemaldage heliklipp oma loost või asendage see hüperlingiga.",
        "httpAudioFixable": "Sellel heliklipil on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et kasutada selle heliklipi jaoks turvalist HTTPS URL-i.",
        "httpWebpageUnfixable": "See veebileht ei toeta HTTPS-i. Kustutage see oma loost või asendage kuvatõmmise või lingiga.",
        "httpWebpageUncheckable": "Sellel veebilehel on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et proovida selle veebilehe jaoks kasutada turvalist HTTPS URL-i. Kui see ei toimi, eemaldage veebileht oma loost või asendage see kuvatõmmise või hüperlingiga.",
        "httpWebpageFixable": "Sellel veebilehel on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et kasutada selle veebilehe jaoks turvalist HTTPS URL-i.",
        "httpVideoUnfixable": "See videoklipp ei toeta HTTPS-i. Kustutage see oma loost või asendage kuvatõmmise või lingiga.",
        "httpVideoUncheckable": "Sellel videoklipil on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et proovida selle video jaoks kasutada turvalist HTTPS URL-i. Kui see ei toimi, eemaldage video oma loost või asendage see kuvatõmmise või hüperlingiga.",
        "httpVideoFixable": "Sellel videoklipil on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et kasutada selle video jaoks turvalist HTTPS URL-i.",
        "httpImageUnfixable": "See pilt ei toeta HTTPS-i. Kustutage see oma loost või asendage lingiga.",
        "httpImageUncheckable": "Sellel pildil on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et proovida selle pildi jaoks kasutada turvalist HTTPS URL-i. Kui see ei toimi, eemaldage pilt oma loost või asendage see hüperlingiga.",
        "httpImageFixable": "Sellel pildil on ebaturvaline (HTTP) URL. Klõpsake allpool nuppu, et kasutada selle pildi jaoks turvalist HTTPS URL-i.",
        "httpLayer": "Sellel kihil on ebaturvaline (HTTP) URL.",
        "inaccessibleLogo": "See logo pole ligipääsetav. Asendage see mõne teise pildiga.",
        "httpLogoUnfixable": "See logo ei toeta HTTPS-i. Asendage see mõne teise pildiga.",
        "httpLogoFixable": "Sellel logol on ebaturvaline (HTTP) URL. Kasutage logo jaoks HTTPS URL-i.",
        "httpLogoUncheckable": "Sellel logol on ebaturvaline (HTTP) URL. Kasutage logo jaoks HTTPS URL-i või asendage see mõne teise pildiga."
      },
      "tooltips": {
        "httpAudioFixable": "Klõpsake nuppu, et kasutada selle heliklipi jaoks turvalist HTTPS URL-i.",
        "httpAudioUncheckable": "Proovige selle heliklipi jaoks kasutada HTTPS URL-i. Kui see ei toimi, eemaldage heliklipp oma loost või asendage see lingiga.",
        "httpWebpageFixable": "Klõpsake nuppu, et kasutada selle veebilehe jaoks turvalist HTTPS URL-i.",
        "httpWebpageUncheckable": "Proovige selle veebilehe jaoks kasutada HTTPS URL-i. Kui see ei toimi, eemaldage veebileht oma loost või asendage see kuvatõmmise või lingiga.",
        "httpVideoFixable": "Klõpsake nuppu, et kasutada selle videoklipi jaoks turvalist HTTPS URL-i.",
        "httpVideoUncheckable": "Proovige selle video jaoks kasutada HTTPS URL-i. Kui see ei toimi, eemaldage video oma loost või asendage see kuvatõmmise või lingiga.",
        "httpImageFixable": "Klõpsake nuppu, et kasutada selle pildi jaoks turvalist HTTPS URL-i.",
        "httpImageUncheckable": "Proovige selle pildi jaoks kasutada HTTPS URL-i. Kui see ei toimi, eemaldage pilt oma loost või asendage see lingiga.",
        "httpLayerMyMap": "Minge kaardi üksuse lehele ja värskendage kihti, et see kasutaks HTTPS-i. Kui kihti ei saa värskendada, kustutage see kaardilt.",
        "httpLayerNotMyMap": "Tehke kaardist koopia ja värskendage kihti, et see kasutaks HTTPS-i. Kui kihti ei saa värskendada, kustutage see kaardilt.",
        "clickLearnMore": "Klõpsake lisateabe saamiseks."
      },
      "fixButtons": {
        "agolItemPage": "Üksuse leht",
        "openTheMap": "Ava kaart",
        "updateAudio": "Paranda heliklipi URL",
        "updateWebpages": "Paranda veebilehe URL",
        "updateVideos": "Paranda video URL",
        "updateImages": "Paranda pildi URL"
      },
      "mapIssues": {
        "fixButton": "Teemade lahendamine",
        "nofixButton": "Teemad",
        "mapLabel": "Kaart:",
        "summaries": {
          "unshared": "Mittejagatud sisu",
          "othersUnshared": "Kellegi teise mittejagatud sisu",
          "subscriptionContent": "Tellija sisu",
          "premiumContent": "Kvaliteetsisu",
          "secureContent": "Kaitstud sisu",
          "deleted": "Kustutatud sisu",
          "inaccessible": "Kättesaamatu sisu",
          "unauthorized": "Volitamata sisu"
        },
        "descriptions": {
          "unshared": "Seda sisu jagatakse teie looga võrreldes muul viisil.",
          "othersUnshared": "Selle sisu omanik on muu isik ning seda sisu jagatakse teie looga võrreldes muul viisil.",
          "othersUnsharedAuthorized": "Selle sisu omanik on muu isik, kuid teil on õigus seda sisu jagada.",
          "inaccessible": "See sisu pole kättesaadav.",
          "deleted": "See sisu on kustutatud.",
          "unauthorized": "Teil puudub õigus seda sisu vaadata.",
          "popupFeatureLayer": "Pildiüksusega kihi hüpikaknad pärinevad objektikihist, mida jagatakse teie looga võrreldes muul viisil.",
          "subscriptionContent": "Tellijasisu avalikuks kasutamiseks peate andma loa.",
          "premiumContent": "Kvaliteetsisu avalikuks kasutamiseks peate andma loa.",
          "secureService": "Kaitstud sisu pole lugejatele kättesaadav.",
          "missingItemWarning": "Selle kihiga seotud üksus on kustutatud."
        },
        "tooltips": {
          "unshared": "Klõpsake jagamise kohta lisateabe saamiseks.",
          "othersUnshared": "Teil puudub õigus teistele isikutele kuuluva sisu jagamiseks. Paluge sisu omanikul sisu jagada, eemaldage kaart loost või muutke kaarti, et eemaldada teile mittekuuluvad kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "inaccessible": "Eemaldage see kaart loost või muutke seda, et eemaldada kättesaamatud kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "deleted": "Eemaldage see kaart loost või muutke seda, et eemaldada puuduolevad kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "unauthorized": "Eemaldage see kaart loost või muutke seda, et eemaldada lubamatud kihid. Klõpsake kaartide muutmise kohta lisateabe saamiseks.",
          "popupFeatureLayer": "Pildiüksusega kihi hüpikaknad pärinevad objektikihist, mida jagatakse teie looga võrreldes muul viisil.",
          "subscriptionContent": "Tellijasisu ei kasuta krediite. Klõpsake lisateabe saamiseks.",
          "premiumContent": "Krediidid kantakse teie ettevõttele üle iga kord, kui keegi vaatab teie loos kvaliteetsisu. Klõpsake lisateabe saamiseks.",
          "secureService": "Eemaldage loost kaitstud sisu või klõpsake, et saada teavet selle kohta, kuidas kaitstud sisu teistele isikutele kasutamiseks lubada.",
          "missingItemWarning": "Kiht toimib, kuid muutunud võivad olla selle sümbolid ja hüpikaknad ning muutunud võib olla ka selle nimi. Kinnitage, et kiht kuvatakse soovitud kujul või eemaldage kiht loost."
        },
        "fixButtons": {
          "share": "Jaga",
          "hide": "Peida",
          "authorize": "Luba",
          "remove": "Eemalda",
          "help": "Abi otsimine",
          "ignore": "Eira",
          "confirm": "Kinnita",
          "edit": "Muuda kaarti"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Jagati ka mõningaid kaarte ja kihte.",
          "alsoSharedMaps": "Jagati ka mõningaid kaarte.",
          "alsoSharedLayers": "Jagati ka mõningaid kihte.",
          "sharedOthersContent": "Kasutasite oma administraatoriõigusi kellegi teise sisu jagamiseks."
        }
      },
      "storyHealth": {
        "healthy": "Probleeme pole",
        "notHealthy": "Lahenda probleeme",
        "warnings": "Kuva hoiatused"
      }
    },
    "saveErrorSocial": {
      "title": "Sotsiaalmeedias jagamine",
      "panel1": "Teie loo ilme võib sotsiaalmeedias olla soovitust erinev, kuna teie ArcGIS-i veebirakenduse üksuse pealkiri ei ühti teie loo pealkirjaga.",
      "panel1tooltip": "Kui lisate pealkirja, kokkuvõtte ja pisipildi, näeb teie lugu välja järgmine:",
      "panel2": "Millist pealkirja soovite sotsiaalmeedias kasutada:",
      "panel2q1": "Loo pealkiri (soovitatav)",
      "panel2q1tooltip": "Selle suvandi valimisel muudetakse teie üksuse pealkiri loo pealkirjaga samasuguseks ning sünkroonitakse täiendavad koosturis tehtud muudatused.",
      "panel2q2": "Üksuse pealkiri",
      "panel3": "Selleks et oma loo ilmet sotsiaalmeedias veelgi täiustada, kasutage portaali ${MYSTORIES}, et lisada kokkuvõte ja pisipilt.",
      "panel4": "Ära hoiata mind enam selle loo puhul",
      "save": "Salvesta",
      "mystories": "Minu lood"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Oluline teade veebiturvalisuse ja kaardilugude kohta",
      "s1h1": "Esri tegeleb kaardilugude turvalisuse tõstmisega",
      "s1p1": "Teie kaardilood on veebis reaalajas ja veebikogukond töötab pidevalt selle nimel, et turvalisust parendada ja tõhustada. Interneti kaudu sisu turvalist edastamist võimaldav HTTPS on kujunemas veebisisule juurdepääsu eelistatud viisiks. Enamik moodsaid brausereid kuvavad hoiatusteate, kui HTTPS-i asemel kasutatakse HTTP-d. Selle uue standardi kujunemise tõttu on alates ArcGIS Online’i 2018. aasta juunikuu värskendusest teie kaardilugudel HTTPS-i kasutamine kohustuslik.",
      "s1p2": "See tähendab, et juurdepääs kaardiloole ja kogu selle sisule (sh piltidele, kihtidele, manusrakendustele ja veebilehtedele) peab toimuma linkidega, mille alguses on HTTPS ja mitte HTTP. Nii tagatakse teie lugejatele parim kasutuskogemus, kuna enamik veebibrausereid näitab, et teie lugude avamine on turvaline.",
      "s2h1": "Mida ma pean tegema?",
      "s2p1": "Esri töötab selle nimel, et kaardilugude autoritele ja lugejatele kulgeks üleminek võimalikult lihtsalt. Juba praegu on kaardiloo koosturites ja jaotises Minu lood saadaval tööriistad, mis aitavad leida lugudes ebaturvalist sisu (HTTP) ja annavad soovitusi, mida sellega ette võtta. Palun kontrollige enne 2018. aasta juunit oma lugude sisu üle ja värskendage kogu ebaturvaline sisu uuele standardile HTTPS.",
      "action1": "Sule",
      "action2": "Kontrolli minu lugusid kohe",
      "action3": "Lisateave",
      "floatingNotification": "See lugu sisaldab ebaturvalist (HTTP) sisu. Vaadake lugu üle ja kõrvaldage probleemid."
    }
  }
});