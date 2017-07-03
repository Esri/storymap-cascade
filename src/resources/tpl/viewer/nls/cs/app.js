/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Uložit",
      "close": "Zavřít"
    },
    "errors": {
      "noConfigName": "V souboru index.html > configOptions.story není zadána žádná konfigurace.",
      "configFormatError": "Zadanou konfiguraci se nepodařilo načíst z důvodu chyby syntaxe JSON.",
      "configNotFound": "Zadanou konfiguraci se nepodařilo nalézt nebo načíst z důvodu chyby syntaxe JSON.",
      "boxTitle": "Došlo k chybě",
      "servedFromFile": "K aplikaci je nutné přistupovat přes webový server. Pro podrobnosti viz ${USER_GUIDE}.",
      "userGuide": "uživatelská příručka",
      "invalidConfig": "Neplatná konfigurace",
      "invalidConfigNoApp": "V souboru index.html není zadán identifikátor aplikace pro webové mapování.",
      "invalidConfigNoAppDev": "V parametrech adresy URL nebyl zadán identifikátor webové mapovací aplikace (?appid=). V režimu vývoje je konfigurace ID aplikace v souboru index.html ignorována.",
      "unspecifiedConfigOwner": "Nebyl nakonfigurován autorizovaný vlastník.",
      "invalidConfigOwner": "Vlastník příběhu není autorizován.",
      "invalidConfignoOAuth": "Tento příběh vyžaduje ověření, nakonfigurujte identifikátor OAuth ArcGIS v souboru index.html nebo příběh zveřejněte.",
      "invalidApp": "Tento příběh nelze načíst.",
      "appLoadingFail": "Něco se pokazilo, {TPL_NAME} se nenahrálo správně.",
      "notConfiguredDesktop": "Příběh zatím není nakonfigurován.",
      "notConfiguredMobile": "Nástroj pro tvorbu {TPL_NAME} není v této velikosti zobrazení podporován. Pokud je to možné, zvětšete velikost prohlížeče nebo příběh vytvořte na zařízení s větší obrazovkou.",
      "notConfiguredMobile2": "Aby bylo možné použít nástroj pro tvorbu {TPL_NAME}, otočte své zařízení na šířku.",
      "notAuthorized": "Nejste oprávněni přistupovat k tomuto příběhu",
      "notAuthorizedBuilder": "Nejste oprávněni používat nástroj pro tvorbu {TPL_NAME}.",
      "noViewerIE": "Tento příběh není podporován v prohlížeči Internet Explorer ve verzi nižší než ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Pokoušíte se tento příběh prohlížet pomocí staršího, nepodporovaného prohlížeče. Některé funkce nemusí fungovat nebo se mohou vyskytnout jiné nečekané problémy. Doporučujeme přejít na Internet Explorer 11 nebo použít jiný prohlížeč, například Chrome.",
      "noViewerIE3": "Koncem roku 2017 se tento příběh v tomto prohlížeči již nenačte. Bude nutné pro jeho prohlížení použít podporovaný prohlížeč.",
      "upgradeBrowser": "Proveďte prosím aktualizaci prohlížeče.",
      "mapLoadingFail": "Něco se pokazilo, mapa se nenahrála správně.",
      "signOut": "Odhlásit",
      "builderSupport1": "Nástroj pro tvorbu kaskádové mapy s příběhem je podporován pouze v prohlížečích ${CHROME} a ${SAFARI}. Nicméně kaskádové příběhy, které v nástroji pro tvorbu vytvoříte, lze kromě těchto prohlížečů prohlížet i v prohlížečích Internet Explorer 11+ a Firefox.",
      "builderSupport2": "Nástroj pro tvorbu kaskádové mapy s příběhem není na iPadu podporován. Vytvořené a sdílené kaskádové příběhy budou na iPadu fungovat.",
      "builderSupport3": "Kaskádové příběhy lze prohlížet v prohlížečích Chrome, Safari, Firefox a Internet Explorer 11+, ale nástroj pro tvorbu kaskádové mapy s příběhem je podporován pouze v prohlížečích ${CHROME} a ${SAFARI}.",
      "builderSupport4": "Kaskádové příběhy lze prohlížet v jakémkoliv moderním webovém prohlížeči, ale nástroj pro tvorbu kaskádové mapy s příběhem je podporován pouze v prohlížečích ${CHROME} a ${SAFARI}.<br><br>Pokud potřebujete, aby nástroj pro tvorbu kaskád podporoval jiný prohlížeč, kontaktujte ${ESRI-SUPPORT} nebo ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Upozornění:"
    },
    "mobileWarning": {
      "message1": "Četli jste mobilní verzi tohoto příběhu. Pro plnou verzi s bohatšími mediálními prvky ho vyzkoušejte na stolním počítači.",
      "email": "Odeslat odkaz na tento příběh"
    },
    "cover": {
      "iosEmbedLink": "Ťuknutím zobrazíte celý příběh"
    },
    "media": {
      "captionPlaceholder": "Váš popisek zde…",
      "loadingError": "Je nám líto, tento obsah není přístupný.",
      "explore": "Prozkoumat",
      "exploreMap": "Procházet mapu",
      "exploreStop": "Ukončit procházení",
      "sceneNotSupported": "Je nám líto, ale vaše zařízení tuto 3D mapu nepodporuje.",
      "loading1": "Načítání……",
      "loading2": "Načítám mapu…",
      "videoPlayPause": "přehrát/pozastavit",
      "videoMuteUnmute": "ztlumit / zrušit ztlumení"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Sdílet",
      "tooltipAutoplayDisabled": "Není k dispozici v režimu automatického přehrávání."
    },
    "shareFromCommon": {
      "copy": "Kopírovat (Copy)",
      "copied": "Zkopírováno",
      "open": "Otevřeno",
      "embed": "Vložit do webové stránky",
      "embedExplain": "Chcete-li příběh vložit do webové stránky, použijte následující kód HTML.",
      "size": "Velikost (šířka/výška):",
      "autoplayLabel": "Režim automatického přehrávání",
      "autoplayExplain1": "Režim automatického přehrávání bude příběhem procházet v pravidelných intervalech. Ideální pro použití na výstavních stáncích nebo veřejných monitorech, buďte si však vědomi toho, že v některých případech to může znesnadnit čtení příběhu. Tato funkce není podporována na malých obrazovkách.",
      "autoplayExplain2": "Je-li tento režim aktivní, budou k dispozici ovládací prvky ke spuštění/pozastavení přehrávání příběhu a k nastavení rychlosti procházení.",
      "linksupdated": "Odkazy aktualizovány!"
    },
    "theme": {
      "lightLabel": "Světlý",
      "darkLabel": "Tmavý"
    }
  }
});