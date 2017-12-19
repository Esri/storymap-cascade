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
      "builderSupport1": "Graditelj Kaskadnih kart z zgodbo je podprt samo v brskalnikih ${CHROME} in ${SAFARI}. Kaskadne zgodbe, ki jih ustvarite z graditeljem, si boste vseeno lahko ogledali v brskalnikih Internet Explorer 11+ in Firefox.",
      "builderSupport2": "Graditelj Kaskadnih kart z zgodbo ni podprt na iPadu. Na iPadu bodo delovale kaskadne zgodbe, ki jih boste ustvarili ali delili.",
      "builderSupport3": "Kaskadne zgodbe si bo mogoče ogledati v brskalnikih Chrome, Safari, Firefox in Internet Explorer 11+, vendar je graditelj Kaskadnih kart z zgodbo podprt samo v brskalnikih ${CHROME} in ${SAFARI}.",
      "builderSupport4": "Kaskadne zgodbe si lahko ogledate v katerem koli sodobnem spletnem brskalniku, vendar je graditelj Kaskadnih kart z zgodbo podprt samo v brskalnikih ${CHROME} in ${SAFARI}.<br><br>Če potrebujete kaskadnega graditelja za podporo drugemu brskalniku, se obrnite na ${ESRI-SUPPORT} ali ${BROWSER-SUPPORT-VOTE}.",
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
      "share": "Deli",
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
    }
  }
});