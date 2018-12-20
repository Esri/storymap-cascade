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
      "builderSupportFirefox": "Nástroj pro tvorbu kaskádové mapy s příběhem nyní podporuje Firefox!<br><br>Podpora vytváření kaskádových příběhů ve Firefoxu je momentálně ve verzi beta. Aplikaci si neváhejte vyzkoušet a s případnými problémy se obraťte na ${ESRI-SUPPORT} nebo ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Kaskádové příběhy lze prohlížet v libovolném moderním webovém prohlížeči, ale nástroj pro tvorbu kaskádové mapy s příběhem je podporován pouze v prohlížečích ${CHROME} a ${SAFARI}.<br><br>Pokud potřebujete, aby nástroj pro tvorbu kaskádové mapy podporoval jiný webový prohlížeč, kontaktujte ${ESRI-SUPPORT} nebo ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Nástroj pro tvorbu kaskádové mapy s příběhem není na iPadu podporován. Vytvořené a sdílené kaskádové příběhy budou na iPadu fungovat.",
      "launchBuilder": "Spustit nástroj pro tvorbu kaskádové mapy",
      "notAgain": "Toto dialogové okno příště nezobrazovat",
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
      "share": "Sdílet či vytisknout",
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
    },
    "autoplay": {
      "speedFast": "Rychle",
      "speedMedium": "Střední",
      "speedSlow": "Pomalu"
    },
    "bannerNotification": {
      "learnMore": "Více informací",
      "close": "Zavřít",
      "dontShowAgain": "Toto hlášení příště nezobrazovat"
    },
    "embedBar": {
      "share": "Sdílet",
      "fullScreen": "Celá obrazovka",
      "exitFullScreen": "Ukončit režim celé obrazovky",
      "enlarge": "Zvětšit",
      "newTab": "Otevřít na nové kartě.",
      "tagline": "Mapa s příběhem",
      "twitter": "Sdílet na Twitteru",
      "facebook": "Sdílet na Facebooku"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Před tiskem prosím počkejte, dokud nedojde k načtení celého příběhu",
      "printNotes": "Pokud se stránka načítá pomalu nebo se některá média nezobrazují, zkuste nahradit videa obrázky nebo tisknout menší část příběhu. Abyste dosáhli co nejlepších výsledků, možná bude třeba povolit tisk prvků pozadí v nastavení tisku v prohlížeči.",
      "printOptions": "Možnosti",
      "makeTextBlack": "Zobrazit veškerý text černě",
      "showLinks": "Zobrazit odkazy URL",
      "useAltMedia": "Nahraďte video obrázky, jsou-li k dispozici",
      "pageBreaks": "Zahájit každou část příběhu na nové stránce",
      "printRange": "Vytisknout část příběhu",
      "sectionStart": "Části:",
      "go": "Použít",
      "reset": "Zvolit celý příběh",
      "print": "Tisk"
    },
    "page": {
      "appTagline": "Tento příběh byl vytvořen pomocí ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Kaskádová mapa s příběhem od společnosti Esri",
      "readItOnline": "Přečtěte si tento příběh na ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Část ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Webové stránky:",
      "videoLabel": "Video:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Váš účet (%USER_NAME%) nevlastní licenci k otevření mapy s příběhem, která není veřejná. Požádejte prosím správce své organizace, aby vám přidělil typ uživatele, jehož součástí jsou mapy s příběhem nebo doplňková licence základních aplikací."
    }
  }
});