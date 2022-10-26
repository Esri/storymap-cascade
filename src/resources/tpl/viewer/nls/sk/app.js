/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Uložiť",
      "close": "Zatvoriť"
    },
    "errors": {
      "noConfigName": "V index.html > configOptions.story nie je zadaná žiadna konfigurácia",
      "configFormatError": "Zadanú konfiguráciu nebolo možné načítať kvôli chybe JSON syntax error.",
      "configNotFound": "Zadaná konfigurácia sa nenašla alebo sa nedala načítať kvôli chybe JSON syntax error.",
      "boxTitle": "Vyskytla sa chyba",
      "servedFromFile": "K aplikácii je potrebný prístup prostredníctvom webového servera. Podrobnosti nájdete v ${USER_GUIDE}.",
      "userGuide": "užívateľská príručka",
      "invalidConfig": "Neplatná konfigurácia.",
      "invalidConfigNoApp": "Identifikátor aplikácie webového mapovania nie je uvedený v index.html.",
      "invalidConfigNoAppDev": "V parametroch adresy URL (? Appid =) nie je zadaný žiadny identifikátor aplikácie webového mapovania. Vo vývojovom režime je ignorovaná appid konfigurácia v index.html.",
      "unspecifiedConfigOwner": "Nebol nakonfigurovaný autorizovaný vlastník.",
      "invalidConfigOwner": "Nebol autorizovaný vlastník príbehu.",
      "invalidConfignoOAuth": "Tento príbeh vyžaduje overenie. Nakonfigurujte prosím ArcGIS OAuth ID v index.html alebo príbeh zverejnite.",
      "invalidApp": "Nie je možné načítať príbeh.",
      "appLoadingFail": "Niečo sa pokazilo. {TPL_NAME} nebolo načítané správne.",
      "notConfiguredDesktop": "Príbeh nebol nakonfigurovaný.",
      "notConfiguredMobile": "Tvorca {TPL_NAME} nie je podporovaný pri tejto veľkosti zobrazenia. Ak je to možné, zmeňte veľkosť prehliadača, aby ste sa dostali do prostredia Builder, alebo svoj príbeh zostavte na zariadení s väčšou obrazovkou.",
      "notConfiguredMobile2": "Ak chcete použiť prostredie Builder {TPL_NAME}, otočte zariadenie na orientáciu na šírku.",
      "notAuthorized": "Nemáte oprávnenie na prístup k tomuto príbehu",
      "notAuthorizedBuilder": "Nemáte oprávnenie na používanie prostredia Builder {TPL_NAME}.",
      "noViewerIE": "Tento príbeh nie je v prehliadači Internet Explorer podporovaný pred verziou ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Pokúšate sa zobraziť tento príbeh pomocou staršieho, nepodporovaného prehliadača. Môžu existovať funkcie, ktoré nefungujú alebo iné neočakávané problémy. Odporúčame Vám aktualizovať na Internet Explorer 11 alebo použiť iný prehliadač, napríklad Chrome.",
      "noViewerIE3": "Koncom roku 2017 tento príbeh už nebude možné načítať v tomto prehliadači. V tom čase musíte na prezeranie tohto príbehu použiť podporovaný prehliadač.",
      "upgradeBrowser": "Prosím aktualizujte svoj prehliadač.",
      "mapLoadingFail": "Niečo sa pokazilo, mapa nebola načítaná správne.",
      "signOut": "Odhlásiť sa",
      "builderSupportFirefox": "Prostredie Builder pre tvorbu mapových príbehov Story Map Cascade teraz podporuje Firefox! <br><br>Podpora tvorby Cascade príbehov vo Firefoxe je momentálne vo verzii beta. Prosím vyskúšajte to a nahláste všetky problémy ${ESRI-SUPPORT} alebo ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Cascade príbehy si môžete prezerať v ktoromkoľvek modernom webovom prehliadači, ale prostredie Builder pre tvorbu mapových príbehov Story Map Cascade je podporovaný iba v prehliadači${CHROME}, ${SAFARI} a ${FIREFOX}.<br><br>Ak potrebujete prostredie Builder pre tvorbu Cascade na podporu iného prehliadača, prosím kontaktujte nás na${ESRI-SUPPORT} alebo ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Prostredie Builder pre tvorbu mapových príbehov Story Map Cascade nie je na iPad-e podporovaný. Na iPad-e budú fungovať príbehy Cascade, ktoré vytvoríte a zdieľate.",
      "launchBuilder": "Spustiť prostredie Builder pre tvorbu Cascade",
      "notAgain": "Nezobrazovať to znova",
      "sorry": "Upozornenie:",
      "nonOwnerOrgUrl": "%TPL_NAME%, ktorý sa pokúšate otvoriť, nepochádza z adresy URL, ktorú ste zadali.",
      "nonOwnerOrgProceedToGeneric": "Pokračovať na %HREF%",
      "advanced": "Rozšírené"
    },
    "mobileWarning": {
      "message1": "Čítali ste mobilnú verziu tohto príbehu. Pre plnú verziu s bohatšími mediálnymi prvkami to vyskúšajte na stolnom počítači.",
      "email": "Odoslať odkaz na tento príbeh e-mailom"
    },
    "cover": {
      "iosEmbedLink": "Ťuknutím si môžete prečítať celý príbeh"
    },
    "media": {
      "captionPlaceholder": "Váš titulok sem...",
      "loadingError": "Ľutujeme, tento obsah nie je prístupný",
      "explore": "Preskúmať",
      "exploreMap": "Preskúmať mapu",
      "exploreStop": "Zastaviť preskúmanie mapy",
      "sceneNotSupported": "Ľutujeme, táto 3D mapa nie je na Vašom zariadení podporovaná.",
      "loading1": "Načítava sa...",
      "loading2": "Mapa sa načítava...",
      "videoPlayPause": "prehrať/zastaviť",
      "videoMuteUnmute": "stlmiť/zapnúť"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Zdieľať alebo vytlačiť",
      "tooltipAutoplayDisabled": "Nie je k dispozícii v režime automatického prehrávania"
    },
    "shareFromCommon": {
      "copy": "Kopírovať",
      "copied": "Skopírované",
      "open": "Otvoriť",
      "embed": "Vložiť na webovú stránku",
      "embedExplain": "Pre vloženie príbehu na webovú stránku použite nasledujúci kód HTML.",
      "size": "Veľkosť (šírka/výška):",
      "autoplayLabel": "Režim automatického prehrávania",
      "autoplayExplain1": "Režim automatického prehrávania bude prechádzať Vaším príbehom v pravidelných intervaloch. Toto je ideálne riešenie pre kiosky alebo verejné inštalované obrazovky, ale je potrebné si uvedomiť, že v iných situáciách môže byť čítanie príbehu ťažšie. Táto funkcia nie je podporovaná na mobilných zariadeniach.",
      "autoplayExplain2": "Keď je tento režim aktívny, existujú ovládacie prvky na prehrávanie/zastavenie príbehu a úpravu rýchlosti navigácie.",
      "linksupdated": "Odkazy boli aktualizované!"
    },
    "theme": {
      "lightLabel": "Svetlá",
      "darkLabel": "Tmavá"
    },
    "autoplay": {
      "speedFast": "Rýchle",
      "speedMedium": "Stredné",
      "speedSlow": "Pomalé"
    },
    "bannerNotification": {
      "learnMore": "Zistiť viac",
      "close": "Zatvoriť",
      "dontShowAgain": "Túto správu znova nezobrazovať."
    },
    "embedBar": {
      "share": "Zdieľať",
      "fullScreen": "Režim celej obrazovky",
      "exitFullScreen": "Opustiť režim celej obrazovky",
      "enlarge": "Zväčšiť",
      "newTab": "Otvoriť na novej karte",
      "tagline": "Mapa s príbehom",
      "twitter": "Zdieľať na Twitteri",
      "facebook": "Zdieľať na Facebooku"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Pred tlačou počkajte, kým sa načíta celý príbeh",
      "printNotes": "Ak sa táto stránka načítava pomaly alebo sa niektoré médiá nezobrazujú, skúste nahradiť živé médiá obrázkami alebo vytlačte menší rozsah jednotlivých častí. Pre dosiahnutie najlepších výsledkov, bude možno potrebné povoliť tlač prvkov pozadia v nastavení tlače vo Vašom prehliadači.",
      "printOptions": "Možnosti",
      "makeTextBlack": "Zmeniť celý text na čierny",
      "showLinks": "Zobraziť adresy URL odkazov",
      "useAltMedia": "Ak sú k dispozícii, nahraďte živé médiá obrázkami.",
      "pageBreaks": "Začnite každú časť na novej stránke",
      "printRange": "Vytlačiť časť tohto príbehu",
      "sectionStart": "Časti:",
      "go": "Aplikovať",
      "reset": "Obnoviť celý príbeh",
      "print": "Tlačiť"
    },
    "page": {
      "appTagline": "Tento príbeh bol vytvorený s ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Cascade mapa s príbehom od Esri",
      "readItOnline": "Prečítajte si to na webe na adrese ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Časť ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Webová stránka:",
      "videoLabel": "Video:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Váš účet (%USER_NAME%) nemá licenciu na otváranie mapového príbehu, ktorý nie je verejný. Prosím požiadajte správcu Vašej organizácie, aby vám priradil typ používateľa, ktorý obsahuje mapové príbehy alebo doplnkovú licenciu na základné aplikácie."
    }
  }
});