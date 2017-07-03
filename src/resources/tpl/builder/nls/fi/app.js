/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Käytä",
      "close": "Sulje"
    },
    "header": {
      "sharingNotAvailable": "Tämä toiminto ei ole käytettävissä, ennen kuin jaat tarinan",
      "edit": "Muokkaa"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Kirjanmerkit",
        "logoSharing": "Logo ja jakaminen",
        "theme": "Ulkoasu"
      },
      "bookmarks": {
        "title": "Osio",
        "bookmark": "Kirjanmerkki",
        "intro": "Kirjanmerkit ovat tarinan osioiden linkkejä, jotka näkyvät otsikkorivillä. Ytimekkäiden kirjanmerkkien luonti tarinan pääosioita varten auttaa lukijoita perehtymisessä.",
        "sequentialDefault": "Kerrontaosio (tekstiä ei löytynyt)",
        "immersiveDefault": "Immersiivinen osio (tekstiä ei löytynyt)",
        "titleDefault": "Otsikko-osio (tekstiä ei löytynyt)",
        "coverDefault": "Kansi-osio (tekstiä ei löytynyt)",
        "coverAppendage": "(Kansi)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Käytä ${ESRI}-logoa",
        "useOrgLogo": "Käytä oman organisaation logoa",
        "useOrgLogoHelp": "Käytä pääkäyttäjän toimittamaa logoa",
        "logoLink": "Logolinkki",
        "logoUploadProgress": "Logon lataus on meneillään",
        "logoUploadSuccess": "Logon lataaminen onnistui",
        "logoUploadError": "Logon lataaminen epäonnistui. Vaihdetaan takaisin ${ESRI}-logoon",
        "customHeaderText": "Iskulause",
        "taglineLinkDisabledTooltip": "Ota linkki käyttöön kirjoittamalla iskulause",
        "link": "Iskulauselinkki",
        "enableSocialSharing": "Näytä jakamispainike"
      },
      "appearance": {
        "themeLabel": "Teema",
        "fontLabel": "Fontit",
        "previewLabel": "Esikatselu",
        "fontsTitleLabel": "Otsikot",
        "fontsBodyLabel": "Runko-osa",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Kansi",
      "creditsLabel": "Krediitit",
      "betaFeedback": "Palaute",
      "betaNote": "Kerro meille, mitä pidät sovelluksesta ${APP_NAME}, tai jos jokin ei toimi odottamallasi tavalla.",
      "notSharedNote": "Tarinaasi ei ole jaettu. Vain sinä näet sen.",
      "organizationWarning": "Jos haluat varmistaa, että muut näkevät tarinasi, sinun on jaettava organisaatiosi kanssa myös tarinan maisemat, maisemakarttatasot ja upotetut sovellukset.",
      "publicWarning": "Jos haluat varmistaa, että muut näkevät tarinasi, sinun on jaettava kaikkien kanssa myös tarinan maisemat, maisemakarttatasot ja upotetut sovellukset.",
      "addTitleNote": "Tallenna lisäämällä otsikko kanteen",
      "saveError": "Tarinan tallennuksessa tapahtui virhe.",
      "duplicate": "Tee kopio",
      "organize": "Järjestä",
      "done": "Valmis",
      "invite": "Kun luot tarinaasi, osiot tulevat näkyviin tähän...",
      "mystoriestooltip": "Cascade Builder ilmoittaa tarinassa olevista ongelmista ja auttaa niiden korjaamisessa. Maisemia ja upotettuja sovelluksia ei tarkisteta, joten tarkista ne manuaalisesti."
    },
    "immersiveViewPanel": {
      "transition": "Siirtymä",
      "fade": "Häivytä",
      "fadeSlow": "Häivytä hitaasti",
      "swipeVertical": "Pyyhkäise pystysuunnassa",
      "swipeHorizontal": "Pyyhkäise vaakasuunnassa",
      "none": "Ei mitään",
      "disabledConsecutiveSameMedia": "Ei ole käytettävissä, kun peräkkäisissä näkymissä käytetään samaa mediaa",
      "disabledTooltipMap": "Tämän siirtymän käyttö edellyttää, että molempien näkymien näkyvien karttatasojen on oltava erilaisia ja että muiden kartan ominaisuuksien on oltava samat",
      "disabledConsecutiveSameMap": "Ei ole käytettävissä, kun peräkkäisissä näkymissä käytetään samaa karttaa",
      "disabledNotInBeta": "Ei ole käytettävissä, kun peräkkäisissä näkymissä käytetään samaa karttaa",
      "disabledNonConsecutive": "Ei ole käytettävissä, koska tästä mediasta on toinen esiintymä, joka ei ole peräkkäinen",
      "addMedia": "Lisää media",
      "invite": "Kun luot immersiivistä osaa, näkymät tulevat näkyviin tähän..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Ulkoasu",
        "manage": "Hallitse",
        "size": "Koko",
        "background": "Tausta",
        "mobile": "Mobiili",
        "issues": "Ongelmia",
        "fixIssues": "Korjaa ongelmat"
      },
      "manage": {
        "changeMedia": "Vaihda media",
        "edit": "Muokkaa",
        "editAside": "Avautuu uuteen selaimen välilehteen. Kun olet tallentanut muokkaukset, tallenna ja lataa uudelleen tämä tarina, jotta näet tekemäsi muutokset.",
        "remove": "Poista"
      },
      "appearance": {
        "homeView": "Alkuperäinen näkymä",
        "audio": "Audio",
        "on": "Käytössä",
        "muted": "Vaimennettu",
        "volumeAside": "Video toistetaan automaattisesti, kun lukija siirtyy tähän näkymään. Jos vaimennat äänen, lukija ei voi ottaa ääntä käyttöön.",
        "view": "Näytä",
        "resetLocation": "Palauta sijainti",
        "resetLayers": "Palauta karttatasot",
        "clearPopup": "Tyhjennä ponnahdusikkuna",
        "interaction": "Vuorovaikutus",
        "interactionDisabled": "Vuorovaikutus on poistettu käytöstä",
        "buttonToEnable": "Käyttöönoton painike",
        "interactionEnabled": "Vuorovaikutus on käytössä",
        "interactionAside": "*Kosketuslaitteissa näkyy vuorovaikutuspainike.",
        "slide": "Dia",
        "noSlides": "Yhtään diaa ei ole käytettävissä.",
        "mapExtentPrompt": "Kerro tarinasi päivittämällä kartta ja tallenna muutokset napsauttamalla valintamerkkiä"
      },
      "sectionAppearance": {
        "layout": "Asettelu",
        "theme": "Teema"
      },
      "size": {
        "small": "Pieni",
        "medium": "Keskitaso",
        "large": "Suuri",
        "noCrop": "Älä rajaa korkeita kuvia",
        "noCropTallTooltip": "Jos et rajaa korkeaa kuvaa, lukijat joutuvat vierittämään kuvaa nähdäkseen sen kokonaan, mikä ei ole suotavaa."
      },
      "background": {
        "noCrop": "Älä rajaa",
        "mostImportantPart": "Valitse tärkein piste",
        "cropExplanationImmersive": "Määritä, miten kuva rajataan erikokoisissa näytöissä, valitsemalla piste kuvasta. Valitsemasi piste näkyy aina. Valitse Älä raja -valintaruutu, jos kuvan on näyttävä kokonaan.",
        "cropExplanation": "Määritä, miten kuva rajataan erikokoisissa näytöissä, valitsemalla piste kuvasta. Valitsemasi piste näkyy aina.",
        "color": "Väri",
        "previews": "Esikatselut"
      },
      "altMedia": {
        "alternativeMedia": "Vaihtoehtoinen media",
        "explanation": "Joitakin mediatyyppejä ei tueta tai ne eivät toimi hyvin mobiililaitteissa. Tässä paneelissa voit valita vaihtoehtoisen, mobiiliystävällisemmän kohteen, joka näytetään tämän median tilalla, kun tarinaasi tarkastellaan puhelimessa tai tabletilla.",
        "changeAltImage": "Vaihda kuva",
        "uploadAltImage": "Lisää kuva"
      }
    },
    "imageGallery": {
      "addImage": "Lisää toinen kuva",
      "moveBackward": "Siirrä taakse",
      "moveForward": "Siirrä eteen"
    },
    "cover": {
      "titlePrompt": "Anna tarinan otsikko...",
      "subtitlePrompt": "Aloita vierittämällä alaspäin tai kirjoita valinnainen alaotsikko",
      "mediaPlaceholder": "Lisää kuva tai video",
      "saveError": "Tallennus epäonnistui. Sinulla on jo kohde, jonka otsikko on tämä."
    },
    "credits": {
      "sectionInvite": "Lisää Krediitit-osio",
      "warning": "Molemmat kentät on täytettävä",
      "content": "Sisältö...",
      "source": "Lähde...",
      "linkPrompt": "Valinnainen linkki...",
      "introductionPlaceholder": "Kirjoita valinnainen Krediitit-osion esittely..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Teema"
      },
      "panelConfig": {
        "position": "Sijainti",
        "theme": "Teema",
        "size": "Koko",
        "background": "Tausta",
        "layout": "Vieritys (kaikille paneeleille)"
      }
    },
    "title": {
      "placeholder": "Anna otsikko..."
    },
    "media": {
      "imageUpload": "Kuvan lataus on meneillään...",
      "imageUploadSuccess": "Kuvan lataaminen onnistui",
      "imageUploadFail": "Kuvan lataaminen epäonnistui"
    },
    "controller": {
      "sectionOrganize": "Osiot on järjestetty",
      "immersiveOrganize": "Näkymät on järjestetty",
      "sectionDelete": "Olet poistanut osion",
      "viewDelete": "Olet poistanut näkymän"
    },
    "notification": {
      "cancel": "Peruuta",
      "close": "Sulje",
      "undo": "Kumoa"
    },
    "sections": {
      "sequence": "Kerronta",
      "immersive": "Immersiivinen",
      "title": "Otsikko"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "kuva",
        "webmap": "kartta",
        "webscene": "maisema",
        "video": "video",
        "content": "sisältö",
        "webpage": "Web-sivu"
      },
      "placeholders": {
        "generic": "Tätä sisältöä ei voi käyttää.",
        "deleted": "Tämä kohde on poistettu.",
        "inaccessible": "Tätä sisältöä ei voi käyttää.",
        "unauthorized": "Sinulla ei ole tämän sisällön tarkasteluoikeuksia.",
        "unshared": "Tätä kohdetta ei jaeta samalla tavalla tarinan kanssa.",
        "othersUnshared": "Tätä kohdetta ei jaeta samalla tavalla tarinan kanssa.",
        "subscriptionContent": "Tämä kartta sisältää Tilaaja-karttatason.",
        "premiumContent": "Tämä kartta sisältää Premium-karttatason.",
        "secureService": "Tämä kartta sisältää suojatun karttatason."
      },
      "contentIssues": {
        "noAltImage": "Mobiililaitteet eivät tue mediaa",
        "altImageBroken": "Tälle medialle määritetty vaihtoehtoinen kuva ei ole käytettävissä"
      },
      "contentWarnings": {
        "noAltImage": "Mobiililaitteet eivät tue tämäntyyppistä mediaa. Määritä vaihtoehtoinen kuva, joka näytetään, kun tarinaa tarkastellaan mobiililaitteissa.",
        "noAltImageAlt": "Mobiililaitteet eivät tue tämäntyyppistä mediaa. Määritä mobiilivälilehdellä vaihtoehtoinen kuva, joka näytetään, kun tarinaa tarkastellaan mobiililaitteissa."
      },
      "mapIssues": {
        "fixButton": "Korjaa ongelmat",
        "nofixButton": "Ongelmia",
        "mapLabel": "Kartta:",
        "summaries": {
          "unshared": "Sisältö, jota ei ole jaettu",
          "othersUnshared": "Jonkun muun sisältö, jota ei ole jaettu",
          "subscriptionContent": "Tilaaja-sisältö",
          "premiumContent": "Premium-sisältö",
          "secureContent": "Suojattu sisältö",
          "deleted": "Poistettu sisältö",
          "inaccessible": "Sisältö, jota ei voi käyttää",
          "unauthorized": "Luvaton sisältö"
        },
        "descriptions": {
          "unshared": "Tätä sisältöä ei jaeta yhdessä tarinan kanssa.",
          "othersUnshared": "Joku muu omistaa tämän sisällön, eikä sitä jaeta yhdessä tarinan kanssa.",
          "othersUnsharedAuthorized": "Joku muu omistaa tämän sisällön, mutta sinulla on oikeus jakaa se.",
          "inaccessible": "Tätä sisältöä ei voi käyttää.",
          "deleted": "Tämä sisältö on poistettu.",
          "unauthorized": "Sinulla ei ole tämän sisällön tarkasteluoikeuksia.",
          "popupFeatureLayer": "Tiilitetyn karttatason ponnahdusikkunat ovat peräisin kohdekarttatasosta, jota ei ole jaettu yhdessä tarinan kanssa.",
          "subscriptionContent": "Tilaaja-sisältö on valtuutettava julkista käyttöä varten.",
          "premiumContent": "Premium-sisältö on valtuutettava julkista käyttöä varten.",
          "secureService": "Suojattu sisältö ei ole lukijoiden käytettävissä.",
          "missingItemWarning": "Tähän karttatasoon liitetty kohde on poistettu."
        },
        "tooltips": {
          "unshared": "Saat lisätietoja jakamisesta napsauttamalla.",
          "othersUnshared": "Sinulla ei ole käyttöoikeuksia jakaa muiden omistamaa sisältöä. Pyydä omistajaa jakamaan sisältö, poista kartta tarinastasi tai poista karttatasot, joita et omista, muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "inaccessible": "Poista tämä kartta tarinastasi tai poista ylimääräiset karttatasot muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "deleted": "Poista tämä kartta tarinastasi tai poista puuttuvat karttatasot muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "unauthorized": "Poista tämä kartta tarinastasi tai poista luvattomat karttatasot muokkaamalla karttaa. Saat lisätietoja karttojen muokkaamisesta napsauttamalla.",
          "popupFeatureLayer": "Tiilitetyn karttatason ponnahdusikkunat ovat peräisin kohdekarttatasosta, jota ei ole jaettu yhdessä tarinan kanssa.",
          "subscriptionContent": "Tilaaja-sisältö ei kuluta krediittejä. Saat lisätietoja napsauttamalla.",
          "premiumContent": "Krediitit veloitetaan organisaatioltasi aina, kun joku tarkastelee tarinasi Premium-karttatasoa. Saat lisätietoja napsauttamalla.",
          "secureService": "Poista suojattu sisältö tarinastasi tai tutustu napsauttamalla siihen, miten voit valtuuttaa suojatun sisällön käytön muille.",
          "missingItemWarning": "Tämä karttataso toimii edelleen, mutta sen symbolit, ponnahdusikkunat tai nimi voivat olla muuttuneet. Vahvista, että karttataso näkyy odotusten mukaisena, tai poista se tarinastasi."
        },
        "fixButtons": {
          "share": "Jaa",
          "hide": "Piilota",
          "authorize": "Valtuuta",
          "remove": "Poista",
          "help": "Hanki ohjeita",
          "ignore": "Ohita",
          "confirm": "Vahvista",
          "edit": "Muokkaa karttaa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Jotkin kartat ja karttatasot on myös jaettu.",
          "alsoSharedMaps": "Jotkin kartat on myös jaettu.",
          "alsoSharedLayers": "Jotkin karttatasot on myös jaettu.",
          "sharedOthersContent": "Olet käyttänyt pääkäyttäjän oikeuksia jonkun toisen sisällön jakamiseen."
        }
      },
      "storyHealth": {
        "healthy": "Ei ongelmia",
        "notHealthy": "Korjaa ongelmat",
        "warnings": "Näytä varoitukset"
      }
    }
  }
});