/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Shrani",
      "close": "Zapri"
    },
    "errors": {
      "noConfigName": "Konfiguracija ni navedena v index.html > configOptions.story",
      "configFormatError": "Navedene konfiguracije ni bilo mogoče naložiti zaradi napake v sintaksi JSON.",
      "configNotFound": "Navedena konfiguracija ni najdena ali je ni bilo mogoče naložiti zaradi napake v sintaksi JSON.",
      "boxTitle": "Prišlo je do napake",
      "servedFromFile": "Do aplikacije je treba dostopati prek spletnega strežnika. Za podrobnosti si oglejte ${USER_GUIDE}.",
      "userGuide": "uporabniški priročnik",
      "invalidConfig": "Neveljavna konfiguracija",
      "invalidConfigNoApp": "Identifikator aplikacije za spletno kartiranje ni naveden v index.html.",
      "invalidConfigNoAppDev": "Identifikator aplikacije za spletno kartiranje je naveden v parametrih URL (?appid=). V razvijalskem načinu je prezrta konfiguracija za appid v index.html.",
      "unspecifiedConfigOwner": "Pooblaščeni lastnik ni bil konfiguriran.",
      "invalidConfigOwner": "Lastnik zgodbe ni pooblaščen.",
      "invalidConfignoOAuth": "Zgodba zahteva avtentikacijo. Konfigurirajte ArcGIS OAuth ID v index.html ali zgodbo javno objavite.",
      "invalidApp": "Zgodbe ni bilo mogoče naložiti.",
      "appLoadingFail": "Nekaj ni v redu, {TPL_NAME} se ni pravilno naložil.",
      "notConfiguredDesktop": "Zgodba še ni konfigurirana.",
      "notConfiguredMobile": "Graditelj {TPL_NAME} ni podprt pri tej velikosti prikaza. Če je mogoče, ponovno nastavite velikost brskalnika, da dosežete graditelja ali izdelajte svojo zgodbo na napravi z večjim zaslonom.",
      "notConfiguredMobile2": "Obrnite svojo napravo v vodoraven položaj, če želite uporabiti graditelja {TPL_NAME}.",
      "notAuthorized": "Niste pooblaščeni za dostop do te zgodbe",
      "notAuthorizedBuilder": "Niste pooblaščeni za uporabo graditelja {TPL_NAME}.",
      "noViewerIE": "Ta zgodba ni podprta v Internet Explorerju pred različico ${VERSION} ${UPGRADE}.",
      "noViewerIE2": "To zgodbo si želite ogledati s staro, nepodprto različico brskalnika. Morda nekatere funkcionalnosti ne bodo delovale ali pa bo prišlo do drugih nepričakovanih težav. Predlagamo, da ga nadgradite na Internet Explorer 11 ali uporabite drug brskalnik, recimo Chrome.",
      "noViewerIE3": "Konec leta 2017 se ta zgodba v tem brskalniku ne bo več naložila. Takrat boste za ogled te zgodbe morali uporabiti podprti brskalnik.",
      "upgradeBrowser": "Nadgradite svoj brskalnik",
      "mapLoadingFail": "Nekaj ni v redu, karta se ni pravilno naložila.",
      "signOut": "Odjava",
      "builderSupportFirefox": "Graditelj kaskadnih kart z zgodbo sedaj podpira Firefox!<br><br>Podpora za ustvarjanje kaskadnih zgodb v Firefoxu je trenutno v beta. Preizkusite jo in prijavite morebitne težave na ${ESRI-SUPPORT} ali ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Kaskadne zgodbe si bo mogoče ogledati v vseh sodobnih brskalnikih, vendar je graditelj Kaskadnih kart z zgodbo podprt samo v brskalnikih ${CHROME}, ${SAFARI} in ${FIREFOX}.<br><br>Če potrebujete kaskadnega graditelja podprtega v drugem brskalniku, se obrnite na ${ESRI-SUPPORT} ali ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Graditelj Kaskadnih kart z zgodbo ni podprt na iPadu. Na iPadu bodo delovale kaskadne zgodbe, ki jih boste ustvarili ali delili.",
      "launchBuilder": "Zaženi kaskadnega graditelja",
      "notAgain": "Tega ne kaži več",
      "sorry": "Pozor:"
    },
    "mobileWarning": {
      "message1": "Prebrali ste mobilno različico te zgodbe. Polno različico z bogatejšimi medijskimi elementi lahko preskusite na namiznem računalniku.",
      "email": "Pošljite povezavo do te zgodbe po e-pošti"
    },
    "cover": {
      "iosEmbedLink": "Tapnite, da preberete celotno zgodbo"
    },
    "media": {
      "captionPlaceholder": "Vaš napis tukaj...",
      "loadingError": "Oprostite, do te vsebine ni mogoče dostopati",
      "explore": "Razišči",
      "exploreMap": "Raziščite karto",
      "exploreStop": "Prekini raziskovanje",
      "sceneNotSupported": "Oprostite, ta 3D-karta ni podprta na vaši napravi.",
      "loading1": "Nalaganje...",
      "loading2": "Nalaganje karte...",
      "videoPlayPause": "predvajaj/začasno ustavi",
      "videoMuteUnmute": "izklopi/vklopi zvok"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Deli ali tiskaj",
      "tooltipAutoplayDisabled": "Ni na voljo v načinu samodejnega predvajanja"
    },
    "shareFromCommon": {
      "copy": "Kopiraj",
      "copied": "Kopirano",
      "open": "Odpri",
      "embed": "Vdelaj v spletno stran",
      "embedExplain": "Uporabi naslednjo kodo HTML za vdelavo zgodbe v spletno stran.",
      "size": "Velikost (širina/višina):",
      "autoplayLabel": "Način samodejnega predvajanja",
      "autoplayExplain1": "Način samodejnega predvajanja bo vašo zgodbo prikazoval v rednih intervalih. To je idealno za kiosk ali javno prikazovan zaslon, vendar vedite, da bo zgodbe v drugih situacijah morda težje brati. Ta funkcionalnost ni podprta na majhnih zaslonih.",
      "autoplayExplain2": "Ko je ta način dejaven, so prikazani ukazi za predvajanje/začasno ustavitev zgodbe in prilagoditev hitrosti navigacije.",
      "linksupdated": "Povezave so posodobljene!"
    },
    "theme": {
      "lightLabel": "Svetla",
      "darkLabel": "Temna"
    },
    "autoplay": {
      "speedFast": "Hitro",
      "speedMedium": "Srednje",
      "speedSlow": "Počasi"
    },
    "bannerNotification": {
      "learnMore": "Izvedi več",
      "close": "Zapri",
      "dontShowAgain": "Tega sporočila ne kaži več"
    },
    "embedBar": {
      "share": "Deli",
      "fullScreen": "Celozaslonski način",
      "exitFullScreen": "Izhod iz celozaslonskega načina",
      "enlarge": "Povečaj",
      "newTab": "Odpri v novem zavihku",
      "tagline": "Karta z zgodbo",
      "twitter": "Deli na Twitterju",
      "facebook": "Deli na Facebooku"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Pred tiskanjem počakajte, da se naloži celotna zgodba",
      "printNotes": "Če se ta stran nalaga počasi ali se nekateri mediji ne prikažejo, poskusite zamenjati žive medije s slikami ali natisnite manjši obseg odsekov. Za najboljše rezultate boste morda morali omogočiti tiskanje elementov v ozadju v nastavitvah tiskanja vašega brskalnika.",
      "printOptions": "Možnosti",
      "makeTextBlack": "Počrnite vso besedilo",
      "showLinks": "Prikaži URL povezave",
      "useAltMedia": "Zamenjaj žive medije s slikami, če so na voljo",
      "pageBreaks": "Začnite vsak razdelek na novi strani",
      "printRange": "Natisni del te zgodbe",
      "sectionStart": "Razdelki:",
      "go": "Uporabi",
      "reset": "Ponastavi na celotno zgodbo",
      "print": "Tiskanje"
    },
    "page": {
      "appTagline": "Ta zgodba je bila narejena z ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Kaskadna karta z zgodbo podjetja Esri",
      "readItOnline": "Preberite na spletu na ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Razdelek ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Spletna stran:",
      "videoLabel": "Video:",
      "audioLabel": "Zvok:"
    },
    "licenseChange2018": {
      "noAccess": "Vaš račun (%USER_NAME%) ni licenciran za odpiranje Karte z zgodbo, ki ni javna. Prosite administratorja v vaši organizaciji, da vam dodeli tip uporabnika, ki vsebuje aplikacije Karto z zgodbo ali licenco za dodatne aplikacije Essential Apps."
    }
  }
});