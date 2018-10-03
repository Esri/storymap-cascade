/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Alkalmaz",
      "close": "Bezárás"
    },
    "header": {
      "sharingNotAvailable": "Ez nem érhető el, amíg meg nem osztja a történetet.",
      "edit": "Szerkesztés"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Könyvjelzők",
        "logoSharing": "Logó és megosztás",
        "theme": "Megjelenés"
      },
      "bookmarks": {
        "title": "Szekció",
        "bookmark": "Könyvjelző",
        "intro": "A könyvjelzők a történet szekcióira mutató hivatkozások, amelyek a fejlécben jelennek meg. A történet főbb szekcióira mutató rövid hivatkozások létrehozásával segítheti az olvasók tájékozódását.",
        "sequentialDefault": "Narratíva szekciója (nem található szöveg)",
        "immersiveDefault": "Immerzív szekció (nem található szöveg)",
        "titleDefault": "Cím szekciója (nem található szöveg)",
        "coverDefault": "Címlap szekciója (nem található szöveg)",
        "coverAppendage": "(Címlap)"
      },
      "logoSharing": {
        "logo": "Logó",
        "logoButton": "${ESRI}-logó használata",
        "useOrgLogo": "Szervezet logójának használata",
        "useOrgLogoHelp": "Az adminisztrátor által megadott logó használata",
        "logoLink": "Logó hivatkozása",
        "logoUploadProgress": "A logó feltöltése folyamatban van",
        "logoUploadSuccess": "A logó feltöltése sikerült",
        "logoUploadError": "Nem sikerült a logó feltöltése, visszaváltás az ${ESRI}-logóra",
        "customHeaderText": "Bemutatkozó szöveg",
        "taglineLinkDisabledTooltip": "Adjon meg bemutatkozó szöveget a hivatkozás bekapcsolásához",
        "link": "Bemutatkozó szöveg hivatkozása",
        "enableSocialSharing": "Megosztás gomb megjelenítése"
      },
      "appearance": {
        "themeLabel": "Téma",
        "fontLabel": "Betűtípusok",
        "previewLabel": "Előnézet",
        "fontsTitleLabel": "Címek",
        "fontsBodyLabel": "Törzs",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Nem nyilvános",
      "btnOrg": "Szervezet",
      "btnPublic": "Nyilvános",
      "btnEveryone": "Mindenki"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Szerkesztő",
      "buttonSaving": "Mentés",
      "buttonSaved": "Mentve",
      "buttonError": "Nem sikerült a mentés",
      "buttonShare": "Megosztás",
      "buttonSettings": "Beállítások",
      "settingsLogoError": "Probléma adódott a logóval. Kattintson ide, ha további információkat szeretne.",
      "buttonHelp": "Segítség kérése vagy visszajelzés küldése a GeoNeten",
      "buttonPreview": "Történet megtekintése",
      "buttonHealth": "Állapotjelentés",
      "manageStories": "Saját történetek kezelése",
      "closeWithPendingChange": "Biztos, hogy megerősíti ezt a műveletet? A módosítások el fognak veszni.",
      "coverLabel": "Címlap",
      "creditsLabel": "Kreditek",
      "betaFeedback": "Visszajelzés",
      "betaNote": "Tudassa velünk, hogy mit gondol a(z) ${APP_NAME} alkalmazásról, vagy ha valami nem úgy működik, ahogy szeretné.",
      "notSharedNote": "A történet nincs megosztva, csak Ön láthatja",
      "organizationWarning": "Ahhoz, hogy mások is megtekinthessék a történetet, meg kell osztania a szervezetével a 3D térképeket, a 3D térképek rétegeit, valamint a beágyazott alkalmazásokat. A térképek és a térképrétegek megosztása automatikusan történik.",
      "publicWarning": "Ahhoz, hogy mások is megtekinthessék a történetet, meg kell osztania mindenkivel a 3D térképeket, a 3D térképek rétegeit, valamint a beágyazott alkalmazásokat. A térképek és a térképrétegek megosztása automatikusan történik.",
      "addTitleNote": "Vegyen fel címet a címlapra a mentéshez",
      "saveError": "Hiba történt a történet mentése közben.",
      "duplicate": "Másolat",
      "organize": "Rendezés",
      "done": "Kész",
      "invite": "A történet létrehozása közben itt jelennek meg a szekciók...",
      "mystoriestooltip": "A kaszkádolt szerkesztő figyelmezteti a történetben található hibákra, és segít a kijavításukban. A 3D térképet és a beágyazott alkalmazásokat azonban nem ellenőrzi, ezért Önnek kell ellenőriznie ezeket az elemeket."
    },
    "immersiveViewPanel": {
      "transition": "Áttűnés",
      "chooseTransition": "Válasszon áttűnést",
      "fade": "Elhalványítás",
      "fadeSlow": "Lassú elhalványítás",
      "swipeVertical": "Függőleges csúszka",
      "swipeHorizontal": "Vízszintes csúszka",
      "none": "Nincs",
      "disabledConsecutiveSameMedia": "Nem érhető el, amikor az egymás utáni nézetek ugyanazt a médiát használják",
      "disabledTooltipMap": "Ez az áttűnés akkor használható, ha a látható rétegek különbözőek mindkét rétegben, és a többi térképtulajdonság azonos.",
      "disabledConsecutiveSameMap": "Nem érhető el, amikor az egymás utáni nézetek ugyanazt a térképet használják",
      "disabledNotInBeta": "Nem érhető el, amikor az egymás utáni nézetek ugyanazt a térképet használják",
      "disabledNonConsecutive": "Nem érhető el, mivel a médiának van egy másik előfordulása, amely nem egymás utáni",
      "addMedia": "Média hozzáadása",
      "invite": "Az immerzív szekció létrehozásakor itt jelennek meg a nézetek..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Megjelenés",
        "manage": "Kezelés",
        "size": "Méret",
        "background": "Háttér",
        "mobile": "Mobil",
        "issues": "Problémák",
        "fixIssues": "Problémák megoldása"
      },
      "manage": {
        "changeMedia": "Média módosítása",
        "edit": "Szerkesztés",
        "editAside": "Új böngészőlapon nyílik meg. A módosítások mentése után a változtatások megtekintéséhez mentse és töltse be újból a történetet.",
        "remove": "Eltávolítás",
        "altTextPlaceholder": "Adja meg a média leírását a gyengén látó olvasók számára...",
        "altTextHelptip": "A helyettesítő szöveg a vizuális médiájának leírása, amelyet a kisegítő technológiák fognak használni, mint például a képernyőolvasó szoftverek. A leírás megadása nem kötelező, de ajánlott a webes hozzáférésre vonatkozó irányelveknek való megfelelés érdekében (ilyen például a WCAG és az 508. szakasz)."
      },
      "appearance": {
        "homeView": "Kezdeti nézet",
        "audio": "Hang",
        "on": "Be",
        "muted": "Némított",
        "volumeAside": "A videó lejátszása automatikusan elindul, amikor az olvasó ehhez a nézethez érkezik. Ha elnémítja a hangot, az olvasó nem fogja tudni engedélyezni.",
        "view": "Nézet",
        "resetLocation": "Hely visszaállítása",
        "resetLayers": "Réteg visszaállítása",
        "clearPopup": "Felugró ablak törlése",
        "interaction": "Interakció",
        "interactionDisabled": "Interakció letiltva",
        "buttonToEnable": "Gomb az engedélyezéshez",
        "interactionEnabled": "Interakció engedélyezve",
        "interactionAside": "*Az érintőképernyős eszközökön megjelenik egy interaktív gomb.",
        "slide": "Dia",
        "noSlides": "Nincs elérhető dia.",
        "mapExtentPrompt": "Frissítse a térképet a történet elmondásához, kattintson a pipa jelre a változtatások mentéséhez"
      },
      "sectionAppearance": {
        "layout": "Elrendezés",
        "theme": "Téma"
      },
      "size": {
        "small": "Kicsi",
        "medium": "Közepes",
        "large": "Nagy",
        "noCrop": "Ne vágja le a magas képeket",
        "noCropTallTooltip": "A magas képek levágásának mellőzése esetén az olvasóknak görgetniük kell a teljes kép megtekintéséhez."
      },
      "background": {
        "noCrop": "Ne vágja le",
        "mostImportantPart": "Válassza ki a legfontosabb pontot",
        "cropExplanationImmersive": "Jelöljön ki egy pontot a képen annak kiválasztásához, hogyan lesz levágva a különböző képernyőméretek esetében. A kijelölt pont mindig látható lesz. Ha azt szeretné, hogy a teljes kép látható legyen, jelölje be a „Ne vágja le” jelölőnégyzetet.",
        "cropExplanation": "Jelöljön ki egy pontot a képen annak kiválasztásához, hogyan lesz levágva a különböző képernyőméretek esetében. A kijelölt pont mindig látható lesz.",
        "color": "Szín",
        "previews": "Előnézetek"
      },
      "altMedia": {
        "alternativeMedia": "Helyettesítő kép mobil verzióhoz",
        "explanation": "Néhány média nem támogatott vagy nem működik megfelelően a mobileszközökön. Ezen a panelen adhatja meg azt a képet, amely a média helyett fog megjelenni, amikor az olvasók telefonon vagy táblagépen tekintik meg a történetet.",
        "changeAltImage": "Kép cseréje",
        "uploadAltImage": "Helyettesítő kép hozzáadása"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Tartalom hivatkozása",
        "urls_short": "Hivatkozás",
        "contentType": {
          "error": "Nincs engedélyezett média",
          "imageOnly": "A történet ezen részében vehet fel képet.",
          "imageAndVideo": "A történet ezen részében vehet fel képet vagy videót.",
          "imageVideoWebpage": "A történet ezen részében vehet fel hangot, képet, videót vagy weboldalt."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "\"${searchterm}” keresése...",
          "searchedFor": "Keresési eredmények \"${searchterm}” elemre",
          "albumsOf": "${username} albumai",
          "noPhotosFound": "Egy fénykép sem felelt meg a keresésnek. Próbálja meg újra.",
          "noItemsFound": "Egy elem sem felelt meg a keresésnek. Próbálja meg újra.",
          "noItemsInThisStory": "A történethez még nem lett hozzáadva semmilyen ArcGIS-tartalom.",
          "limitReached": "100 elem van megjelenítve. Ha nem találja a szükséges elemet, próbálja meg a kulcsszavas keresést.",
          "galleryItems": {
            "uploadError": "Nem sikerült feltölteni az elemet."
          },
          "agol": {
            "remove1": "Törölje ezt a nem használt képet az ArcGIS-fiókjából.",
            "remove2": "(Ha később mégis használni kívánja, újból fel kell majd töltenie.)",
            "removeFailed": "Távolítsa el ezt a nem elérhető képet a listáról.",
            "modified": "Módosítva: ${date}",
            "uploaded": "Feltöltve: ${date}",
            "contentByAuthor": "${contentType}, szerző: ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Fényképek böngészése a ${Picasa} vagy a ${Google+} webhelyen"
          },
          "flickr": {
            "photostream": "Fényképfolyam",
            "searchAndBrowse": "Fényképek keresése és böngészése a ${Flickr} webhelyen",
            "captionStarter": "${USERNAME} fényképe a(z) ${Flickr} webhelyen"
          },
          "unsplash": {
            "searchAndBrowse": "Fényképek keresése az ${Unsplash} webhelyen",
            "photoBy": "${username} fényképe",
            "userLink": "Ugrás ${username} ${Unsplash}-oldalára",
            "captionStarter": "${USERNAME} fényképe a(z) ${Unsplash} webhelyen"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Weben található tartalom hivatkozása",
              "imageOnly": "Weben található kép hivatkozása",
              "imageAndVideo": "Weben található kép vagy videó hivatkozása"
            },
            "linkText": {
              "imageOnly": "A fenti mezőben közvetlenül megadhatja egy fénykép hivatkozását.",
              "imageAndVideo1": "A fenti mezőben beillesztheti egy ${YouTube}-videó vagy egy ${Vimeo}-videó hivatkozását vagy iframe-kódját.",
              "imageAndVideo2": "Fénykép hivatkozását is megadhatja közvetlenül.",
              "imageVideoWebpage1": "A fenti mezőbe beillesztheti a webes tartalom, például egy dinamikus diagram vagy egy ${YouTube}-, illetve ${Vimeo}-videó hivatkozását vagy iframe-kódját.",
              "imageVideoWebpage2": "Fénykép, videó, hangfájl, weboldal vagy webes alkalmazás hivatkozását is megadhatja közvetlenül.",
              "ender": "Mindig biztonságos hivatkozásokat használjon (https). Ha a tartalom nem támogatja a https protokollt, helyezzen el egy hivatkozást a történet szövegében, hogy az olvasók új böngészőlapon tudják megtekinteni.",
              "httpsError": "A hivatkozásnak HTTPS-sel kell kezdődnie"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Oldal betöltése biztonságos kapcsolaton (https) keresztül",
              "embedProtocolWarning1": "Ha az oldalon nem töltődik be a történet, az azt jelenti, hogy webbiztonsági okok miatt nem ágyazható be.",
              "embedProtocolWarning2": "Ha az oldalon nem töltődik be a történet, kapcsolja ki ezt a beállítást, és próbálja újra. Ha az oldal továbbra sem töltődik be, az azt jelenti, hogy webbiztonsági okok miatt nem ágyazható be.",
              "embedProtocolWarning3": "Másik megoldásként helyezzen el egy hivatkozást az elbeszélésben, amellyel az oldal új böngészőlapon nyitható meg. ${linkText}",
              "linkText": "További információk."
            },
            "placeholder": "${https://}... vagy ${<iframe>}",
            "uploadErrors": {
              "generic": "Hiba történt a megadott címmel. Próbálja meg újra.",
              "imageOnly1": "A történet ezen részében képet kell használnia.",
              "imageOnly2": "Adja meg egy kép (.jpg, .png, .gif) hivatkozását, vagy válasszon egy képet az ${ArcGIS}, a ${Flickr}, a ${Google+} vagy az ${Unsplash} kínálatából.",
              "imageAndVideo1": "A történet ezen részében képet vagy videót kell használnia.",
              "imageAndVideo2": "Adja meg egy kép (.jpg, .png, .gif) vagy egy ${YouTube}-, illetve ${Vimeo}-videó hivatkozását, vagy válasszon egy képet az ${ArcGIS}, a ${Flickr}, a ${Google+} vagy az ${Unsplash} kínálatából.",
              "badFormat": "A felvenni próbált fájl hivatkozásának formátuma helytelen.",
              "inaccessible": "A felvenni próbált fájl hiányzik vagy nem érhető el.",
              "tryAgain": "Ellenőrizze a címet, és próbálja újra.",
              "mediaTypes": {
                "VIDEO": "videó",
                "IMAGE": "kép",
                "generic": "média"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Harmadik fél szolgáltatását használva Ön elfogadja a szolgáltatás feltételeit: ",
          "googlePhotos": {
            "placeholder": "E-mail vagy ${Picasa}-/${Google+}-azonosító",
            "helpText": "A történetbe felvehet a ${Picasa} vagy a ${Google+} webhelyre feltöltött fényképeket. ${helpLinkText} arról, hogyan használhatja fel a történetében a ${Google}-fiókjában tárolt képeket.",
            "helpLinkText": "További információk",
            "cannotFindUser": "${username} felhasználó nem található. Próbálja meg újra."
          },
          "unsplash": {
            "placeholder": "Fényképek keresése",
            "aboutText": "Az ${Unsplash} ingyenes, kiváló minőségű fényképek válogatott gyűjteménye.",
            "copyrightText": "Az összes fotó licence a(z) ${Unsplash} licenc alatt találhatók. További információ ${moreInfoLink}.",
            "moreInfoLink": "itt"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr}-fiók",
              "text": "Összes ${Flickr}"
            },
            "placeholders": {
              "user": "Fiók keresése",
              "userText": "Fényképek keresése ebben a fiókban",
              "text": "Fényképek keresése"
            },
            "errors": {
              "cannotFindUser": "${username} felhasználó nem található.",
              "noUserPhotos": "${username} felhasználónak nincs nyilvános fényképe.",
              "didYouMean": "${username} felhasználóra gondolt?",
              "generalUserError": "Hiba történt ${username} felhasználó keresése közben."
            },
            "licenses": {
              "licenseLabel": "Licenc: ",
              "public": "Nyilvános tartomány",
              "commercial": "OK a kereskedelmi használatra",
              "nonCommercial": "OK a non-profit használatra",
              "reserved": "Minden jog fenntartva",
              "any": "Bármely licenc"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Ez a történet",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname} szervezet",
              "myContent": "Saját tartalom"
            },
            "createContent": {
              "createNewMap": "Új térkép létrehozása",
              "or": "VAGY",
              "dragAndDropImage": "Képek áthelyezése",
              "dragAndDropImageAudio": "Képek vagy hang áthelyezése",
              "uploadButton": "Tallózás",
              "agolInfo": "A feltöltött kép vagy hang kizárólag e történeten belül lesz hozzáférhető.",
              "saveBeforeUpload": "Miután mentette a történetet, itt töltheti fel a képeket és a nagot az ArcGIS rendszerébe.",
              "fileExtsImage": "Támogatott típusok: PNG, JPG, GIF és BMP.",
              "fileExtsImageAudio": "Támogatott típusok: PNG, JPG, GIF, BMP és MP3.",
              "maxSize": "Legfeljebb 10 MB fájlonként."
            },
            "filterAndSort": {
              "webmap": "Webtérkép",
              "webscene": "Web 3D térkép",
              "image": "Kép",
              "audio": "Hang",
              "date": "Dátum",
              "sortByDate": "Rendezés dátum szerint",
              "title": "Cím",
              "sortByTitle": "Rendezés cím szerint",
              "views": "Megtekintések",
              "search": "Keresés kulcsszó vagy azonosító alapján"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Térkép szerkesztése",
      "unauthorizedDomain": "Olyan tartományban van, amelyhez nincs jogosultság megadva térképszerkesztő használatára.",
      "loading": "Várjon, amíg a térképszerkesztő betöltődik",
      "saving": "Térkép mentése",
      "success": "Térkép mentve",
      "cancelTitle": "Elveti a nem mentett módosításokat?",
      "errorSave": "Nem sikerült menteni a térképet. Próbálja meg újra.",
      "loadFail": "A térképszerkesztőt nem lehet betölteni",
      "close": "Bezárás",
      "save": "Mentés",
      "confirm": "Igen, bezárom a térképet",
      "deny": "Nem, folytatom a munkát"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Folytassa itt a történetet..."
      },
      "blockAdd": {
        "text": "Szöveg",
        "media": "Média",
        "title": "Cím",
        "immersive": "Lebilincselő"
      },
      "link": {
        "invite": "Illesszen be vagy írjon be egy hivatkozást..."
      },
      "color": {
        "choose": "válasszon",
        "cancel": "mégse",
        "clear": "Szín törlése"
      }
    },
    "imageGallery": {
      "addImage": "További kép hozzáadása",
      "moveBackward": "Mozgatás hátra",
      "moveForward": "Mozgatás előre"
    },
    "cover": {
      "titlePrompt": "Adja meg a történet címét...",
      "subtitlePrompt": "Görgessen lefelé a kezdéshez vagy adjon meg választható alcímet",
      "mediaPlaceholder": "Adjon hozzá képet vagy a videót",
      "saveError": "Nem sikerült a mentés, már van ilyen című elem"
    },
    "credits": {
      "sectionInvite": "Adja hozzá a kreditek szekcióját",
      "warning": "Mindkét mezőt ki kell tölteni",
      "content": "Tartalom...",
      "source": "Forrás...",
      "linkPrompt": "Választható hivatkozás...",
      "introductionPlaceholder": "Adjon meg egy választható bevezetést a kreditek szekciójához..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Téma"
      },
      "panelConfig": {
        "position": "Helyzet",
        "theme": "Téma",
        "size": "Méret",
        "background": "Háttér",
        "layout": "Görgetés (minden panelhez)"
      }
    },
    "title": {
      "placeholder": "Adjon meg egy címet..."
    },
    "media": {
      "mediaUpload": "A média feltöltése folyamatban van…",
      "mediaUploadSuccess": "A média feltöltése sikerült",
      "mediaUploadFail": "Nem sikerült a média feltöltése"
    },
    "controller": {
      "sectionOrganize": "Rendezte a szekciókat",
      "immersiveOrganize": "Rendezte a nézeteket",
      "sectionDelete": "Törölt egy szekciót",
      "viewDelete": "Törölt egy nézetet"
    },
    "notification": {
      "cancel": "Mégse",
      "close": "Bezárás",
      "undo": "Visszavonás"
    },
    "sections": {
      "sequence": "Narratíva",
      "immersive": "Immerzív",
      "title": "Cím"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "kép",
        "audio": "hang",
        "webmap": "térkép",
        "webscene": "3D térkép",
        "video": "videó",
        "content": "tartalom",
        "webpage": "weboldal"
      },
      "placeholders": {
        "generic": "Ez a tartalom nem érhető el.",
        "deleted": "Ez az elem törölve lett.",
        "inaccessible": "Ez a tartalom nem érhető el.",
        "unauthorized": "Ön nem jogosult a tartalom megtekintésére.",
        "unshared": "Ez az elem nincs megosztva a történettel azonos módon.",
        "othersUnshared": "Ez az elem nincs megosztva a történettel azonos módon.",
        "subscriptionContent": "Ez a térkép előfizetői réteget tartalmaz.",
        "premiumContent": "Ez a térkép prémium réteget tartalmaz.",
        "secureService": "Ez a térkép biztonságos réteget tartalmaz."
      },
      "contentIssues": {
        "noAltImage": "A média nem fog megfelelően működni mobileszközön",
        "noAltImageUnsupported": "A média nem támogatott mobileszközökön",
        "noAltImageWarning": "A média nem fog megfelelően működni mobileszközön",
        "altImageBroken": "A médiaelemhez megadott helyettesítő kép nem érhető el",
        "httpMedia": "Nem biztonságos média",
        "httpContent": "Nem biztonságos tartalom"
      },
      "contentWarnings": {
        "noAltImage": "Próbálja ki a történetet mobileszközökön a megosztása előtt. Ha a média nem a várt módon működik, az alábbi gomb segítségével vegyen fel egy helyettesítő képet, amely akkor jelenik meg, amikor az olvasók telefonon vagy táblagépen tekintik meg a történetet.",
        "noAltImageUnsupported": "Ez a média nem fog működni a mobileszközökön. Az alábbi gomb segítségével vegyen fel egy helyettesítő képet, amely akkor jelenik meg, amikor az olvasók telefonon vagy táblagépen tekintik meg a történetet.",
        "noAltImageWarning": "Próbálja ki a történetet mobileszközökön a megosztása előtt. Ha a média nem a várt módon működik, az alábbi gomb segítségével vegyen fel egy helyettesítő képet, amely akkor jelenik meg, amikor az olvasók telefonon vagy táblagépen tekintik meg a történetet.",
        "noAltImageAlt": "Ez a médiatípus nem támogatott, vagy nem fog megfelelően működni a mobileszközökön. A mobilverzió lapján vegyen fel egy helyettesítő képet, amely akkor jelenik meg, amikor az olvasók telefonon vagy táblagépen tekintik meg a történetet."
      },
      "descriptions": {
        "httpAudioUnfixable": "Ez a hangfájl nem támogat HTTPS-t. Távolítsa el a történetből, vagy helyettesítse egy hivatkozással.",
        "httpAudioUncheckable": "Ez a hangfájl nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a hangfájlhoz megpróbáljon HTTPS URL-t használni. Ha nem működik, távolítsa el a hangfájlt a történetből, vagy helyettesítse egy hiperhivatkozással.",
        "httpAudioFixable": "Ez a hangfájl nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez az hangfájlhoz megpróbáljon biztonságos HTTPS URL-t használni.",
        "httpWebpageUnfixable": "Ez a weboldal nem támogat HTTPS-t. Távolítsa el a történetből, vagy helyettesítse egy képernyőfelvétellel vagy hivatkozással.",
        "httpWebpageUncheckable": "Ez a weboldal nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a weboldalhoz megpróbáljon HTTPS URL-t használni. Ha nem működik, távolítsa el a weboldalt a történetből, vagy helyettesítse egy képernyőfelvétellel vagy hiperhivatkozással.",
        "httpWebpageFixable": "Ez a weboldal nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a weboldalhoz biztonságos HTTPS URL-t használjon.",
        "httpVideoUnfixable": "Ez a videó nem támogat HTTPS-t. Távolítsa el a történetből, vagy helyettesítse egy képernyőfelvétellel vagy hivatkozással.",
        "httpVideoUncheckable": "Ez a videó nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a videóhoz megpróbáljon HTTPS URL-t használni. Ha nem működik, távolítsa el a videót a történetből, vagy helyettesítse egy képernyőfelvétellel vagy hiperhivatkozással.",
        "httpVideoFixable": "Ez a videó nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a videóhoz biztonságos HTTPS URL-t használjon.",
        "httpImageUnfixable": "Ez a kép nem támogat HTTPS-t. Távolítsa el a történetből, vagy helyettesítse egy hivatkozással.",
        "httpImageUncheckable": "Ez a kép nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a képhez HTTPS URL-t használjon. Ha nem működik, távolítsa el a képet a történetből, vagy helyettesítse egy hiperhivatkozással.",
        "httpImageFixable": "Ez a kép nem biztonságos (HTTP) URL-t tartalmaz. Kattintson az alábbi gombra ahhoz, hogy ehhez a képhez biztonságos HTTPS URL-t használjon.",
        "httpLayer": "Ez a réteg nem biztonságos (HTTP) URL-t tartalmaz.",
        "inaccessibleLogo": "Ez a logó nem érhető el. Helyettesítse egy másik képpel.",
        "httpLogoUnfixable": "Ez a logó nem támogat HTTPS-t. Helyettesítse egy másik képpel.",
        "httpLogoFixable": "Ez a logó nem biztonságos (HTTP) URL-t tartalmaz. Használjon a logóhoz HTTPS URL-t.",
        "httpLogoUncheckable": "Ez a logó nem biztonságos (HTTP) URL-t tartalmaz. Használjon a logóhoz HTTPS URL-t, vagy helyettesítse egy másik képpel."
      },
      "tooltips": {
        "httpAudioFixable": "Kattintson az alábbi gombra ahhoz, hogy ehhez a hangfájlhoz biztonságos HTTPS URL-t használjon.",
        "httpAudioUncheckable": "Próbáljon HTTPS URL-t használni ehhez a hangfájlhoz. Ha nem működik, távolítsa el a hangfájlt a történetből, vagy helyettesítse egy hivatkozással.",
        "httpWebpageFixable": "Kattintson az alábbi gombra ahhoz, hogy ehhez a weboldalhoz biztonságos HTTPS URL-t használjon.",
        "httpWebpageUncheckable": "Próbáljon HTTPS URL-t használni ehhez a weboldalhoz. Ha nem működik, távolítsa el a weboldalt a történetből, vagy helyettesítse egy képernyőfelvétellel vagy hivatkozással.",
        "httpVideoFixable": "Kattintson az alábbi gombra ahhoz, hogy ehhez a videóhoz biztonságos HTTPS URL-t használjon.",
        "httpVideoUncheckable": "Próbáljon HTTPS URL-t használni ehhez a videóhoz. Ha nem működik, távolítsa el a videót a történetből, vagy helyettesítse egy képernyőfelvétellel vagy hivatkozással.",
        "httpImageFixable": "Kattintson az alábbi gombra ahhoz, hogy ehhez a képhez biztonságos HTTPS URL-t használjon.",
        "httpImageUncheckable": "Próbáljon HTTPS URL-t használni ehhez a képhez. Ha nem működik, távolítsa el a képet a történetből, vagy helyettesítse egy hivatkozással.",
        "httpLayerMyMap": "Látogasson el a térkép elemoldalára, ahol frissítheti ezt a réteget úgy, hogy HTTPS-t használjon. Ha a réteg nem frissíthető, távolítsa el a térképről.",
        "httpLayerNotMyMap": "Készítsen másolatot a térképről, majd frissítse ezt a réteget úgy, hogy HTTPS-t használjon. Ha a réteg nem frissíthető, távolítsa el a térképről.",
        "clickLearnMore": "Kattintson ide, ha további információkat szeretne."
      },
      "fixButtons": {
        "agolItemPage": "Elemoldal",
        "openTheMap": "Térkép megnyitása",
        "updateAudio": "Hangfájl URL-jének javítása",
        "updateWebpages": "Weboldal URL-jének javítása",
        "updateVideos": "Videó URL-jének javítása",
        "updateImages": "Kép URL-jének javítása"
      },
      "mapIssues": {
        "fixButton": "Problémák megoldása",
        "nofixButton": "Problémák",
        "mapLabel": "Térkép:",
        "summaries": {
          "unshared": "Nem megosztott tartalom",
          "othersUnshared": "Valaki más nem megosztott tartalma",
          "subscriptionContent": "Előfizetői tartalom",
          "premiumContent": "Prémium tartalom",
          "secureContent": "Biztonságos tartalom",
          "deleted": "Törölt tartalom",
          "inaccessible": "Nem elérhető tartalom",
          "unauthorized": "Nem engedélyezett tartalom"
        },
        "descriptions": {
          "unshared": "Ez a tartalom nincs megosztva a történettel az Ön történetével azonos módon.",
          "othersUnshared": "Ez a tartalom másvalaki tulajdona, és nincs megosztva az Ön történetével azonos módon.",
          "othersUnsharedAuthorized": "Ez a tartalom másvalaki tulajdona, de van engedélye a megosztására.",
          "inaccessible": "Ez a tartalom nem érhető el.",
          "deleted": "Ez a tartalom törölve lett.",
          "unauthorized": "Ön nem jogosult a tartalom megtekintésére.",
          "popupFeatureLayer": "A csempéket tartalmazó réteg felugró ablakai olyan vektoros rétegből származnak, amely nem a történettel azonos módon van megosztva.",
          "subscriptionContent": "Engedélyeznie kell az előfizetői tartalom nyilvános használatát.",
          "premiumContent": "Engedélyeznie kell a prémium tartalom nyilvános használatát.",
          "secureService": "A biztonságos tartalom nem érhető el az olvasók számára.",
          "missingItemWarning": "A réteghez társított elem törölve lett."
        },
        "tooltips": {
          "unshared": "Kattintson ide, ha további információkat szeretne kapni a megosztásról.",
          "othersUnshared": "Nincs engedélye arra, hogy megossza a mások tulajdonában lévő tartalmakat. Kérje meg a tulajdonost, hogy ossza meg, távolítsa el a térképet a történetéből, vagy szerkessze a térképet úgy, hogy eltávolítja azokat a rétegeket, amelynek nem Ön a tulajdonosa. Kattintson ide, ha további információkat szeretne kapni a térképek szerkesztéséről.",
          "inaccessible": "Távolítsa el ezt a térképet a történetéből, vagy szerkessze úgy, hogy eltávolítja a nem elérhető rétegeket. Kattintson ide, ha további információkat szeretne kapni a térképek szerkesztéséről.",
          "deleted": "Távolítsa el ezt a térképet a történetéből, vagy szerkessze úgy, hogy eltávolítja a hiányzó rétegeket. Kattintson ide, ha további információkat szeretne kapni a térképek szerkesztéséről.",
          "unauthorized": "Távolítsa el ezt a térképet a történetéből, vagy szerkessze úgy, hogy eltávolítja a nem engedélyezett rétegeket. Kattintson ide, ha további információkat szeretne kapni a térképek szerkesztéséről.",
          "popupFeatureLayer": "A csempéket tartalmazó réteg felugró ablakai olyan vektoros rétegből származnak, amely nem a történettel azonos módon van megosztva.",
          "subscriptionContent": "Az előfizetői tartalom nem használ fel krediteket. További információkért kattintson ide.",
          "premiumContent": "Minden alkalommal, amikor valaki megtekint egy prémium réteget a történetében krediteket számolunk fel a szervezetének. További információkért kattintson ide.",
          "secureService": "Távolítsa el a biztonságos tartalmat a történetéből, vagy kattintson ide, ha tájékozódni szeretne arról, hogyan engedélyezheti mások számára a biztonságos tartalom használatát.",
          "missingItemWarning": "Ez a réteg továbbra is működik, de lehet, hogy megváltoztak a szimbólumai, a felugró ablakai vagy a neve. Győződjön meg arról, hogy a réteg a kívánt módon jelenik meg, vagy távolítsa el a történetéből."
        },
        "fixButtons": {
          "share": "Megosztás",
          "hide": "Elrejtés",
          "authorize": "Engedélyezés",
          "remove": "Eltávolítás",
          "help": "Segítség kérése",
          "ignore": "Kihagyás",
          "confirm": "Megerősít",
          "edit": "Térkép szerkesztése"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Néhány térkép és réteg megosztott.",
          "alsoSharedMaps": "Néhány térkép megosztott.",
          "alsoSharedLayers": "Néhány réteg megosztott.",
          "sharedOthersContent": "Az adminisztrátori jogosultságait használta, hogy megossza másvalaki tartalmát."
        }
      },
      "storyHealth": {
        "healthy": "Nincs probléma",
        "notHealthy": "Problémák megoldása",
        "warnings": "Figyelmeztetések megtekintése"
      }
    },
    "saveErrorSocial": {
      "title": "Megosztás közösségi médiában",
      "panel1": "Lehet, hogy a története nem jelenik meg megfelelően a közösségi médiában, mivel az ArcGIS webes alkalmazás elemcíme nem azonos a történet címével.",
      "panel1tooltip": "Cím, összefoglalás és bélyegkép megadásával a történet így fog megjelenni:",
      "panel2": "Melyik címet kívánja használni a közösségi médiában:",
      "panel2q1": "Történet címe (ajánlott)",
      "panel2q1tooltip": "Ha ezt a beállítást választja, az elemcím módosítva lesz úgy, hogy megegyezzen a történet címével, és a szerkesztőben megadott további változtatások szinkronizálva lesznek.",
      "panel2q2": "Elem címe",
      "panel3": "Ha még tovább szeretné javítani a történet közösségi médiabeli megjelenését, a(z) ${MYSTORIES} használatával adjon meg összefoglalást és bélyegképet.",
      "panel4": "Ne figyelmeztessen újra ennél a történetnél",
      "save": "Mentés",
      "mystories": "Saját történetek"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Fontos üzenet a webbiztonságról és story mapekről",
      "s1h1": "Az Esri számára fontos a story mapek biztonsága",
      "s1p1": "Az ön story map-jei jelen vannak az interneten, és az internetes közösség folyamatosan a biztonság javítására törekszik. A HTTPS biztonságos kapcsolatot biztosít az internetes tartalmakhoz, ezért egyre inkább ez az internetes tartalmakhoz való kapcsolódás elvárt módja. A legmodernebb böngészők most már hibaüzeneteket küldenek, ha HTTPS helyett HTTP kerül használatra. Mivel a HTTPS használata egyre inkább normává válik, erősen ajánlott HTTPS hivatkozásokat használni a story mapek létrehozásához és megosztásához, továbbá kizárólag HTTPS URL-címek használatát javasoljuk internetes tartalmaknak beágyazására és képek hivatkozására a story mapeken belül.",
      "s1p2": "Ez a gyakorlatban azt jelenti, hogy egy story maphez és annak összes tartalmához (pl. képek, rétegek, beágyazott applikációk és weboldalak) HTTP-vel kezdődő hivatkozások helyett HTTPS-sel kezdődő hivatkozással kell hozzáférni. Ez a legjobb felhasználói tapasztalatokat biztosítja olvasói számára, mivel a legtöbb böngésző ki fogja írni, hogy az ön története biztonságos.",
      "s2h1": "Mit a teendőm?",
      "s2p1": "Az Esri azon dolgozik, hogy az átállás könnyű legyen a story mapek szerzőinek és olvasóinak. A Story Map szerkesztőkben és a Saját történetek alatt elérhetők azok az eszközök, amelyek segítenek önnek megtalálni a nem biztonságos tartalmakat (HTTP) a történeteiben, valamint javaslatokat is tesznek a problémák javítására. Kérjük, ellenőrizze történeteit nem biztonságos tartalmak szempontjából, és frissítsen HTTPS-re a lehető leghamarabb.",
      "action1": "Bezárás",
      "action2": "Saját történetek megtekintése most",
      "action3": "További információk",
      "floatingNotification": "Ez a történet nem biztonságos (HTTP) tartalmat tartalmaz. Kérjük, ellenőrizze és javítsa ki a problámákat."
    }
  }
});