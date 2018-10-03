/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Použít",
      "close": "Zavřít"
    },
    "header": {
      "sharingNotAvailable": "Toto není k dispozici, dokud svůj příběh nebudete sdílet.",
      "edit": "Upravit"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Záložky",
        "logoSharing": "Logo & sdílení",
        "theme": "Vzhled"
      },
      "bookmarks": {
        "title": "Část",
        "bookmark": "Záložka",
        "intro": "Záložky jsou odkazy na části příběhu, které se zobrazují v záhlaví. Vytvoření stručných záložek pro hlavní části vašeho příběhu pomůže uživatelům s orientací.",
        "sequentialDefault": "Část příběhu (nenalezen žádný text)",
        "immersiveDefault": "Poutavá část (nenalezen žádný text)",
        "titleDefault": "Titulní část (nenalezen žádný text)",
        "coverDefault": "Úvodní část (nenalezen žádný text)",
        "coverAppendage": "(Obal)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Použít logo ${ESRI}",
        "useOrgLogo": "Použít logo mé organizace",
        "useOrgLogoHelp": "Použít logo poskytnuté vaším administrátorem",
        "logoLink": "Odkaz na logo",
        "logoUploadProgress": "Logo se nahrává.",
        "logoUploadSuccess": "Logo bylo úspěšně nahráno.",
        "logoUploadError": "Logo se nepodařilo nahrát, přepíná se zpět na logo ${ESRI}.",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Zadejte slogan pro aktivaci odkazu",
        "link": "Odkaz na slogan",
        "enableSocialSharing": "Zobrazit tlačítko sdílení"
      },
      "appearance": {
        "themeLabel": "Téma",
        "fontLabel": "Písma",
        "previewLabel": "Náhled",
        "fontsTitleLabel": "Názvy",
        "fontsBodyLabel": "Tělo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Soukromý",
      "btnOrg": "Organizační",
      "btnPublic": "Veřejný",
      "btnEveryone": "Všichni"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Nástroj pro tvorbu",
      "buttonSaving": "Ukládání",
      "buttonSaved": "Uloženo",
      "buttonError": "Uložení se nezdařilo",
      "buttonShare": "Sdílet",
      "buttonSettings": "Nastavení",
      "settingsLogoError": "Vyskytl se problém s vaším logem. Kliknutím zde se dozvíte více.",
      "buttonHelp": "Získat nápovědu nebo odeslat zpětnou vazbu v síti GeoNet",
      "buttonPreview": "Zobrazit příběh",
      "buttonHealth": "Zpráva o zdraví",
      "manageStories": "Spravovat moje příběhy",
      "closeWithPendingChange": "Opravdu chcete potvrdit tuto akci? Vaše změny budou ztraceny.",
      "coverLabel": "Obal",
      "creditsLabel": "Kredity",
      "betaFeedback": "Zpětná vazba",
      "betaNote": "Dejte nám vědět, co si myslíte o aplikaci ${APP_NAME}, nebo pokud něco nefunguje podle vašeho očekávání.",
      "notSharedNote": "Váš příběh není sdílen, vidíte ho jenom vy.",
      "organizationWarning": "Abyste zajistili, že tento příběh budou moci zobrazit ostatní uživatelé, musíte se svou organizací sdílet také jeho scény, vrstvy scén a vložené aplikace. Mapy a mapové vrstvy se sdílejí automaticky.",
      "publicWarning": "Aby tento příběh mohli zobrazit ostatní uživatelé, musíte se všemi sdílet také jeho scény, vrstvy scén a vložené aplikace. Mapy a mapové vrstvy se sdílejí automaticky.",
      "addTitleNote": "Pro uložení přidejte na obal nadpis",
      "saveError": "Při ukládání vašeho příběhu došlo k chybě.",
      "duplicate": "Duplikovat",
      "organize": "Organizovat",
      "done": "Hotovo",
      "invite": "V průběhu tvorby vašeho příběhu se jednotlivé části zobrazí zde…",
      "mystoriestooltip": "Nástroj pro tvorbu kaskád vás upozorní na problémy s vaším příběhem a pomůže vám je napravit. Scény a vložené aplikace se nekontrolují, je nutné je zkontrolovat ručně."
    },
    "immersiveViewPanel": {
      "transition": "Přechod",
      "chooseTransition": "Zvolte přechod",
      "fade": "Stmívání",
      "fadeSlow": "Pomalé stmívání",
      "swipeVertical": "Vertikální překrytí",
      "swipeHorizontal": "Horizontální překrytí",
      "none": "Žádná",
      "disabledConsecutiveSameMedia": "Není k dispozici, když sousedící zobrazení používají stejná média.",
      "disabledTooltipMap": "K použití tohoto přechodu se musí lišit viditelné vrstvy v obou zobrazeních a ostatní vlastnosti map musí být stejné.",
      "disabledConsecutiveSameMap": "Není k dispozici, když sousedící zobrazení používají stejnou mapu.",
      "disabledNotInBeta": "Není k dispozici, když sousedící zobrazení používají stejnou mapu.",
      "disabledNonConsecutive": "Není k dispozici, protože existuje jiný výskyt tohoto média, který není sousedící.",
      "addMedia": "Přidat média",
      "invite": "V průběhu tvorby vaší poutavé části se zobrazení zobrazí zde…"
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Vzhled",
        "manage": "Spravovat",
        "size": "Velikost",
        "background": "Pozadí",
        "mobile": "Mobilní",
        "issues": "Problémy",
        "fixIssues": "Vyřešit problémy"
      },
      "manage": {
        "changeMedia": "Změnit média",
        "edit": "Upravit",
        "editAside": "Otevře se na nové kartě prohlížeče. Po uložení vašich úprav uložte a znovu načtěte tento příběh, aby se zobrazily změny.",
        "remove": "Odstranit",
        "altTextPlaceholder": "Přidejte popis tohoto média pro zrakově postižené čtenáře...",
        "altTextHelptip": "Alternativním textem je popis vizuálního média za použití pomocných technologií, jako je software čtečky obrazovky. Je volitelný, nicméně se doporučuje, aby splňoval směrnice upravující dostupnost webu, jako například WCAG a článek 508."
      },
      "appearance": {
        "homeView": "Počáteční zobrazení",
        "audio": "Zvuk",
        "on": "Zap.",
        "muted": "Ztlumeno",
        "volumeAside": "Video se automaticky spustí, když uživatel dorazí k tomuto zobrazení. Pokud ztlumíte zvuk, uživatel ho nebude moci zapnout.",
        "view": "Zobrazit",
        "resetLocation": "Resetovat umístění",
        "resetLayers": "Resetovat vrstvy",
        "clearPopup": "Vymazat vyskakovací okno",
        "interaction": "Interakce",
        "interactionDisabled": "Interakce vypnuta",
        "buttonToEnable": "Tlačítko pro zapnutí",
        "interactionEnabled": "Interakce zapnuta",
        "interactionAside": "* Na dotykových zařízeních se zobrazí tlačítko interakce.",
        "slide": "Snímek",
        "noSlides": "Nejsou k dispozici žádné snímky.",
        "mapExtentPrompt": "Aktualizujte mapu, aby vyprávěla váš příběh. Klikněte na zaškrtávací znaménko pro uložení změn."
      },
      "sectionAppearance": {
        "layout": "Rozvržení",
        "theme": "Téma"
      },
      "size": {
        "small": "Malá",
        "medium": "Střední",
        "large": "Velká",
        "noCrop": "Neořezávat vysoké obrázky",
        "noCropTallTooltip": "Pokud neořežete vysoký obrázek, docílíte dramatického efektu pro čtenáře, kteří si budou muset posunout zobrazení, aby viděli celý obrázek."
      },
      "background": {
        "noCrop": "Neořezávat",
        "mostImportantPart": "Zvolte nejdůležitější bod",
        "cropExplanationImmersive": "Zvolte bod na obrázku pro určení, jak bude obrázek oříznut na různě velkých obrazovkách. Vybraný bod bude vždy viditelný. Pole Neořezávat zaškrtněte, pokud váš obrázek musí být zcela viditelný.",
        "cropExplanation": "Zvolte bod na obrázku pro určení, jak bude obrázek oříznut na různě velkých obrazovkách. Vybraný bod bude vždy viditelný.",
        "color": "Barva",
        "previews": "Náhledy"
      },
      "altMedia": {
        "alternativeMedia": "Alternativní obrázek pro mobilní zařízení",
        "explanation": "Některá média nejsou podporována nebo nemusejí na mobilních zařízeních fungovat správně. Na tomto panelu zvolte obrázek, který se zobrazí namísto tohoto média při prohlížení vašeho příběhu na telefonu nebo tabletu.",
        "changeAltImage": "Změnit obrázek",
        "uploadAltImage": "Přidat alternativní obrázek"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Odkaz na obsah",
        "urls_short": "Odkaz",
        "contentType": {
          "error": "Žádné autorizované médium.",
          "imageOnly": "V této části příběhu můžete přidat obrázek.",
          "imageAndVideo": "V této části příběhu můžete přidat obrázek nebo video.",
          "imageVideoWebpage": "V této části příběhu můžete přidat zvuk, obrázek, video nebo webovou stránku."
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
            "searchAndBrowse": "Vyhledávat a procházet fotografie ve službě ${Flickr}",
            "captionStarter": "Fotka od ${USERNAME} na ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Vyhledávat fotografie ve službě ${Unsplash}",
            "photoBy": "Fotografie podle uživatele ${username}",
            "userLink": "Přejít na stránku ${Unsplash} uživatele ${username}",
            "captionStarter": "Fotka od ${USERNAME} na ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Propojit s obsahem na webu",
              "imageOnly": "Propojit s obrázkem na webu",
              "imageAndVideo": "Propojit s obrázkem nebo videem na webu"
            },
            "linkText": {
              "imageOnly": "V poli výše můžete vložit odkaz přímo na fotografii.",
              "imageAndVideo1": "V poli výše můžete vložit odkaz nebo kód iframe pro videa na ${YouTube} nebo ${Vimeo}.",
              "imageAndVideo2": "Můžete se také odkazovat přímo na fotografie.",
              "imageVideoWebpage1": "V poli výše můžete vložit odkaz nebo kód iframe pro webový obsah jako dynamický graf nebo video na ${YouTube} nebo ${Vimeo}.",
              "imageVideoWebpage2": "Můžete se také odkazovat přímo na fotografii, video, audio soubor, webovou stránku nebo webovou aplikaci.",
              "ender": "Vždy používejte zabezpečené připojení (odkazy s https). Pokud váš obsah nepodporuje https, přidejte k němu odkaz v textu vašeho příběhu, aby si jej čtenáři mohli zobrazit v nové záložce prohlížeče.",
              "httpsError": "Odkaz musí začínat řetězcem HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Nahrát stránku přes zabezpečené připojení (https)",
              "embedProtocolWarning1": "Pokud se tato stránka nenahrála do vašeho příběhu, nelze ji z důvodu zabezpečení webu vložit.",
              "embedProtocolWarning2": "Pokud se tato stránka nevložila do vašeho příběhu, zrušte zaškrtnutí této možnosti a zkuste to znovu. Jestliže se stránka opět nenahraje, nelze ji vložit z důvodu zabezpečení webu.",
              "embedProtocolWarning3": "Alternativní možností je přidat do vašeho vyprávění odkaz na otevření stránky v nové záložce prohlížeče. ${linkText}",
              "linkText": "Více informací."
            },
            "placeholder": "${https://}... nebo ${<iframe>}",
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
          "thirdPartyTerms": "Použitím služby třetí strany souhlasíte s jejími podmínkami: ",
          "googlePhotos": {
            "placeholder": "E-mail nebo ${Picasa}/${Google+} ID",
            "helpText": "Do svého příběhu můžete přidat fotografie načtené ve službě ${Picasa} nebo ${Google+}. ${helpLinkText}: použití obrázků uložených na účtu ${Google} ve vašich příbězích.",
            "helpLinkText": "Více informací",
            "cannotFindUser": "Uživatel ${username} nebyl nalezen. Zkuste to znovu."
          },
          "unsplash": {
            "placeholder": "Vyhledat fotografie",
            "aboutText": "${Unsplash} je kontrolovaná sbírka bezplatných, vysoce kvalitních snímků.",
            "copyrightText": "Veškeré fotografie jsou licencovány dle licence ${Unsplash}. Více informací ${moreInfoLink}.",
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
              "createNewMap": "Vytvořit novou mapu",
              "or": "'NEBO'",
              "dragAndDropImage": "Přidat obrázky",
              "dragAndDropImageAudio": "Přidat obrázky nebo zvuk",
              "uploadButton": "Procházet",
              "agolInfo": "Nahrané obrázky a zvuky budou přístupné pouze v rámci tohoto příběhu.",
              "saveBeforeUpload": "Po uložení tohoto příběhu můžete snímky a zvuky načíst do služby ArcGIS zde.",
              "fileExtsImage": "Podporované typy souborů: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Podporované typy souborů: png, jpg, gif, bmp, mp3.",
              "maxSize": "Každý soubor může mít maximálně 10 MB."
            },
            "filterAndSort": {
              "webmap": "Webová mapa",
              "webscene": "Webová scéna",
              "image": "Snímek",
              "audio": "Audio",
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
    },
    "mapEditor": {
      "dialogTitle": "Upravit mapu",
      "unauthorizedDomain": "Doména, na které se nacházíte, nemá povolení používat editor mapy",
      "loading": "Počkejte, dokud se nenahraje editor mapy",
      "saving": "Ukládání mapy",
      "success": "Mapa uložena",
      "cancelTitle": "Zrušit všechny neuložené změny?",
      "errorSave": "Nepodařilo se uložit mapu. Zkuste to prosím znovu.",
      "loadFail": "Omlouváme se, editor mapy se nezdařilo nahrát",
      "close": "Zavřít",
      "save": "Uložit",
      "confirm": "Ano, chci mapu zavřít",
      "deny": "Ne, chci pokračovat v práci"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Pokračovat v příběhu zde..."
      },
      "blockAdd": {
        "text": "Text",
        "media": "Média",
        "title": "Název",
        "immersive": "Poutavé"
      },
      "link": {
        "invite": "Vložte nebo zadejte odkaz..."
      },
      "color": {
        "choose": "zvolit",
        "cancel": "zrušit",
        "clear": "Odstranit barvu"
      }
    },
    "imageGallery": {
      "addImage": "Přidat další obrázek",
      "moveBackward": "Posunout dozadu",
      "moveForward": "Posunout dopředu"
    },
    "cover": {
      "titlePrompt": "Zadejte název svého příběhu…",
      "subtitlePrompt": "Začněte posunutím dolů nebo zadejte volitelný podnázev",
      "mediaPlaceholder": "Přidat svůj obrázek nebo video",
      "saveError": "Uložení se nezdařilo, položku s tímto názvem již máte."
    },
    "credits": {
      "sectionInvite": "Přidat část s titulky",
      "warning": "Obě pole musí být vyplněna.",
      "content": "Obsah…",
      "source": "Zdroj…",
      "linkPrompt": "Volitelný odkaz…",
      "introductionPlaceholder": "Zadejte volitelný úvod pro část s titulky…"
    },
    "immersive": {
      "titleConfig": {
        "theme": "Téma"
      },
      "panelConfig": {
        "position": "Pozice",
        "theme": "Téma",
        "size": "Velikost",
        "background": "Pozadí",
        "layout": "Posouvání (pro všechny panely)"
      }
    },
    "title": {
      "placeholder": "Zadejte nadpis…"
    },
    "media": {
      "mediaUpload": "Média se nahrávají…",
      "mediaUploadSuccess": "Média byla úspěšně nahrána",
      "mediaUploadFail": "Nepodařilo se nahrát média"
    },
    "controller": {
      "sectionOrganize": "Uspořádali jste části.",
      "immersiveOrganize": "Uspořádali jste zobrazení.",
      "sectionDelete": "Odstranili jste část.",
      "viewDelete": "Odstranili jste zobrazení."
    },
    "notification": {
      "cancel": "Storno",
      "close": "Zavřít",
      "undo": "Vrátit"
    },
    "sections": {
      "sequence": "Vyprávění",
      "immersive": "Poutavé",
      "title": "Název"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "obraz",
        "audio": "audio",
        "webmap": "mapa",
        "webscene": "scéna",
        "video": "sbírku",
        "content": "obsah",
        "webpage": "webová stránka"
      },
      "placeholders": {
        "generic": "Tento obsah není přístupný.",
        "deleted": "Tato položka byla vymazána.",
        "inaccessible": "Tento obsah není přístupný.",
        "unauthorized": "Nejste oprávněni zobrazit tento obsah.",
        "unshared": "Tato položka není sdílena stejně jako váš příběh.",
        "othersUnshared": "Tato položka není sdílena stejně jako váš příběh.",
        "subscriptionContent": "Tato mapa obsahuje předplatitelskou vrstvu.",
        "premiumContent": "Tato mapa obsahuje prémiovou vrstvu.",
        "secureService": "Tato mapa obsahuje zabezpečenou vrstvu."
      },
      "contentIssues": {
        "noAltImage": "Médium nemusí pracovat na mobilním zařízení",
        "noAltImageUnsupported": "Médium není podporováno na mobilních zařízeních",
        "noAltImageWarning": "Médium nemusí pracovat na mobilním zařízení",
        "altImageBroken": "Alternativní obrázek definovaný pro toto médium je nedostupný.",
        "httpMedia": "Nezabezpečená média",
        "httpContent": "Nezabezpečený obsah"
      },
      "contentWarnings": {
        "noAltImage": "Před sdílením vašeho příběhu jej vyzkoušejte na mobilních zařízeních. Pokud toto médium nefunguje podle očekávání, použijte tlačítko níže pro přidání alternativního obrázku, který bude zobrazen při zobrazení příběhu na mobilním telefonu či tabletu.",
        "noAltImageUnsupported": "Toto médium není podporováno na mobilních zařízeních. Použijte tlačítko níže pro přidání alternativního obrázku, který bude zobrazen při zobrazení příběhu na mobilním telefonu či tabletu.",
        "noAltImageWarning": "Před sdílením vašeho příběhu jej vyzkoušejte na mobilních zařízeních. Pokud toto médium nefunguje podle očekávání, použijte tlačítko níže pro přidání alternativního obrázku, který bude zobrazen při zobrazení příběhu na mobilním telefonu či tabletu.",
        "noAltImageAlt": "Tento typ média není podporován nebo nemusí fungovat správně na mobilních zařízeních. Na záložce pro mobilní zařízení poskytněte alternativní obrázek, který se zobrazí při prohlížení příběhu na mobilním telefonu nebo tabletu."
      },
      "descriptions": {
        "httpAudioUnfixable": "Audio nepodporuje protokol HTTPS. Odstraňte audio z příběhu nebo ho nahraďte odkazem.",
        "httpAudioUncheckable": "Audio má nezabezpečenou (HTTP) adresu URL. Pokud chcete pro audio zkusit použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže. Pokud toto řešení nefunguje, odstraňte audio z příběhu nebo ho nahraďte odkazem.",
        "httpAudioFixable": "Audio má nezabezpečenou (HTTP) adresu URL. Pokud chcete pro audio použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže.",
        "httpWebpageUnfixable": "Webová stránka nepodporuje protokol HTTPS. Odstraňte ji z příběhu nebo ji nahraďte snímkem obrazovky či odkazem.",
        "httpWebpageUncheckable": "Webová stránka má nezabezpečenou (HTTP) adresu URL . Pokud chcete pro webovou stránku zkusit použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže. Pokud toto řešení nefunguje, odstraňte webovou stránku z příběhu nebo ji nahraďte snímkem obrazovky nebo odkazem.",
        "httpWebpageFixable": "Webová stránka má nezabezpečenou (HTTP) adresu URL . Pokud chcete pro webovou stránku použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže.",
        "httpVideoUnfixable": "Video nepodporuje protokol HTTPS. Odstraňte ho z příběhu nebo ho nahraďte snímkem obrazovky či odkazem.",
        "httpVideoUncheckable": "Video má nezabezpečenou (HTTP) adresu URL. Pokud chcete pro video zkusit použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže. Pokud toto řešení nefunguje, odstraňte video z příběhu nebo ho nahraďte snímkem obrazovky nebo odkazem.",
        "httpVideoFixable": "Video má nezabezpečenou (HTTP) adresu URL. Pokud chcete pro video použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže.",
        "httpImageUnfixable": "Obrázek nepodporuje protokol HTTPS. Odstraňte ho z příběhu nebo ho nahraďte odkazem.",
        "httpImageUncheckable": "Obrázek má nezabezpečenou (HTTP) adresu URL. Pokud chcete pro snímek zkusit použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže. Pokud toto řešení nefunguje, odstraňte snímek z příběhu nebo ho nahraďte odkazem.",
        "httpImageFixable": "Obrázek má nezabezpečenou (HTTP) adresu URL. Pokud chcete pro snímek použít zabezpečenou adresu URL s protokolem HTTPS, stiskněte tlačítko níže.",
        "httpLayer": "Vrstva má nezabezpečenou (HTTP) adresu URL.",
        "inaccessibleLogo": "Logo není přístupné. Nahraďte ho jiným obrázkem.",
        "httpLogoUnfixable": "Logo nepodporuje protokol HTTPS. Nahraďte ho jiným obrázkem.",
        "httpLogoFixable": "Logo má nezabezpečenou (HTTP) URL adresu. Použijte adresu URL používající protokol HTTPS.",
        "httpLogoUncheckable": "Logo má nezabezpečenou (HTTP) adresu URL. Použijte adresu URL používající protokol HTTPS nebo logo nahraďte jiným obrázkem."
      },
      "tooltips": {
        "httpAudioFixable": "Stiskněte toto tlačítko, pokud chcete pro audio použít zabezpečenou adresu URL s protokolem HTTPS.",
        "httpAudioUncheckable": "Pokuste se pro audio použít zabezpečenou adresu URL s protokolem HTTPS. Pokud toto řešení nefunguje, odstraňte audio z příběhu nebo ho nahraďte odkazem.",
        "httpWebpageFixable": "Stiskněte toto tlačítko, pokud chcete pro webovou stránku použít zabezpečenou adresu URL s protokolem HTTPS.",
        "httpWebpageUncheckable": "Pokuste se pro webovou stránku použít zabezpečenou adresu URL s protokolem HTTPS. Pokud toto řešení nefunguje, odstraňte webovou stránku z příběhu nebo ji nahraďte snímkem obrazovky nebo odkazem.",
        "httpVideoFixable": "Stiskněte toto tlačítko, pokud chcete pro video použít zabezpečenou adresu URL s protokolem HTTPS.",
        "httpVideoUncheckable": "Pokuste se pro video použít zabezpečenou adresu URL s protokolem HTTPS. Pokud toto řešení nefunguje, odstraňte video z příběhu nebo ho nahraďte snímkem obrazovky nebo odkazem.",
        "httpImageFixable": "Stiskněte toto tlačítko, pokud chcete pro obrázek použít zabezpečenou adresu URL s protokolem HTTPS.",
        "httpImageUncheckable": "Pokuste se pro snímek použít zabezpečenou adresu URL s protokolem HTTPS. Pokud toto řešení nefunguje, odstraňte snímek z příběhu nebo ho nahraďte odkazem.",
        "httpLayerMyMap": "Přejděte na stránku položek mapy a aktualizujte tuto vrstvu, aby používala protokol HTTPS. Pokud vrstvu nelze aktualizovat, odstraňte ji z mapy.",
        "httpLayerNotMyMap": "Mapu zkopírujte a aktualizujte tuto vrstvu, aby používala protokol HTTPS. Pokud vrstvu nelze aktualizovat, odstraňte ji z mapy.",
        "clickLearnMore": "Kliknutím zde se dozvíte více."
      },
      "fixButtons": {
        "agolItemPage": "Stránka položek",
        "openTheMap": "Otevřít mapu",
        "updateAudio": "Opravit adresu URL audia",
        "updateWebpages": "Opravit adresu URL webové stránky",
        "updateVideos": "Opravit adresu URL videa",
        "updateImages": "Opravit adresu URL snímku"
      },
      "mapIssues": {
        "fixButton": "Vyřešit problémy",
        "nofixButton": "Problémy",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Nesdílený obsah",
          "othersUnshared": "Cizí nesdílený obsah",
          "subscriptionContent": "Předplatitelský obsah",
          "premiumContent": "Prémiový obsah",
          "secureContent": "Zabezpečený obsah",
          "deleted": "Smazaný obsah",
          "inaccessible": "Nepřístupný obsah",
          "unauthorized": "Neautorizovaný obsah"
        },
        "descriptions": {
          "unshared": "Tento obsah není sdílen stejným způsobem jako váš příběh.",
          "othersUnshared": "Tento obsah patří někomu jinému a není sdílen stejným způsobem jako váš příběh.",
          "othersUnsharedAuthorized": "Tento obsah patří někomu jinému, ale máte oprávnění ho sdílet.",
          "inaccessible": "Tento obsah není přístupný.",
          "deleted": "Tento obsah byl odstraněn.",
          "unauthorized": "Nejste oprávněni zobrazit tento obsah.",
          "popupFeatureLayer": "Vyskakovací okna dlaždicové vrstvy pochází z vrstvy prvků, která není sdílena stejným způsobem jako váš příběh.",
          "subscriptionContent": "Předplatitelský obsah musíte autorizovat pro veřejné použití.",
          "premiumContent": "Prémiový obsah musíte autorizovat pro veřejné použití.",
          "secureService": "Zabezpečený obsah není přístupný vašim uživatelům.",
          "missingItemWarning": "Položka spojená s touto vrstvou byla odstraněna."
        },
        "tooltips": {
          "unshared": "Kliknutím zobrazíte další informace o sdílení.",
          "othersUnshared": "Nemáte oprávnění sdílet obsah vlastněný jinými uživateli. Požádejte jeho vlastníka, aby ho sdílel, odstraňte mapu ze svého příběhu nebo mapu upravte odstraněním vrstev, které nejsou vaše. Kliknutím zobrazíte další informace o úpravách map.",
          "inaccessible": "Odstraňte tuto mapu ze svého příběhu nebo ji upravte odstraněním nepřístupných vrstev. Kliknutím zobrazíte další informace o úpravách map.",
          "deleted": "Odstraňte tuto mapu ze svého příběhu nebo ji upravte odstraněním chybějících vrstev. Kliknutím zobrazíte další informace o úpravách map.",
          "unauthorized": "Odstraňte tuto mapu ze svého příběhu nebo ji upravte odstraněním neautorizovaných vrstev. Kliknutím zobrazíte další informace o úpravách map.",
          "popupFeatureLayer": "Vyskakovací okna dlaždicové vrstvy pochází z vrstvy prvků, která není sdílena stejným způsobem jako váš příběh.",
          "subscriptionContent": "Předplatitelský obsah nespotřebovává kredity. Kliknutím zobrazíte další informace.",
          "premiumContent": "Vaší organizaci budou účtovány kredity vždy, když někdo ve vašem příběhu zobrazí prémiovou vrstvu. Kliknutím zobrazíte další informace.",
          "secureService": "Odstraňte zabezpečený obsah ze svého příběhu nebo kliknutím zobrazte informace o tom, jak autorizovat zabezpečený obsah pro použití jinými osobami.",
          "missingItemWarning": "Tato vrstva stále funguje, ale její symboly, vyskakovací okna nebo název se mohly změnit. Ověřte, že se vrstva zobrazuje podle očekávání, nebo ji ze svého příběhu odstraňte."
        },
        "fixButtons": {
          "share": "Sdílet",
          "hide": "Skrýt",
          "authorize": "Autorizovat",
          "remove": "Odstranit",
          "help": "Žádost o pomoc",
          "ignore": "Ignorovat",
          "confirm": "Potvrdit",
          "edit": "Upravit mapu"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Některé mapy a vrstvy byly také sdíleny.",
          "alsoSharedMaps": "Některé mapy byly také sdíleny.",
          "alsoSharedLayers": "Některé vrstvy byly také sdíleny.",
          "sharedOthersContent": "Použili jste svá administrátorská oprávnění pro sdílení cizího obsahu."
        }
      },
      "storyHealth": {
        "healthy": "Žádné problémy",
        "notHealthy": "Vyřešit problémy",
        "warnings": "Zobrazit varování"
      }
    },
    "saveErrorSocial": {
      "title": "Sdílení na sociálních sítích",
      "panel1": "Vzhled vašeho příběhu na sociálních sítích nemusí odpovídat, protože název položky ve vaší webové aplikaci ArcGIS se neshoduje s názvem vašeho příběhu.",
      "panel1tooltip": "Pokud definujete název, shrnutí a náhledový obrázek, váš příběh bude vypadat následovně:",
      "panel2": "Název, který chcete použít na sociálních sítích:",
      "panel2q1": "Název příběhu (doporučeno)",
      "panel2q1tooltip": "Pokud zvolíte tuto možnost, název položky se změní tak, aby se shodoval s názvem příběhu, a následující změny provedené v nástroji pro tvorbu se synchronizují.",
      "panel2q2": "Název položky",
      "panel3": "Chcete-li dále vylepšit vzhled příběhu na sociálních sítích, přejděte na ${MYSTORIES} a přidejte shrnutí a náhledový obrázek.",
      "panel4": "Příště již neupozorňovat u tohoto příběhu",
      "save": "Uložit",
      "mystories": "Moje příběhy"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Důležité upozornění týkající se webové bezpečnosti a map s příběhem",
      "s1h1": "Společnost Esri zvyšuje zabezpečení map s příběhem",
      "s1p1": "Vaše mapy s příběhem žijí na webu a webová komunita neustále pracuje na zajištění a implementaci lepší bezpečnosti. Protokol HTTPS, který poskytuje zabezpečené připojení pro obsah přenášený přes internet se stává standardním způsobem přístupu na web. Většina moderních prohlížečů nyní zobrazí varování, pokud se použije protokol HTTP místo HTTPS. Díky této rozvíjející se normě vám důrazně doporučujeme pro tvorbu a sdílení map s příběhem používat odkazy HTTPS a používat pouze adresy URL s protokolem HTTPS při vkládání webového obsahu či odkazů na snímky v mapách s příběhem.",
      "s1p2": "V praxi to znamená, že k mapě s příběhem a veškerému jejímu obsahu (včetně snímků, vrstev, vložených aplikací a webových stránek) by měly vést odkazy začínající na HTTPS místo HTTP. To zajistí maximální spokojenost vašich čtenářů, protože většina webových prohlížečů vaše příběhy označí jako bezpečné.",
      "s2h1": "Co mám udělat?",
      "s2p1": "Esri provádí kroky, aby to pro autory a čtenáře map s příběhem znamenalo hladký přechod. V nástrojích pro tvorbu map s příběhem a v sekci Moje příběhy jsou nyní k dispozici pomůcky, které vám umožní najít nezabezpečený obsah (HTTP) ve vašich příbězích a které vám poradí, jak postupovat dál. Zkontrolujte prosím zabezpečení svých příběhů a přejděte na protokol HTTPS co nejdříve.",
      "action1": "Zavřít",
      "action2": "Chci si prohlédnout svoje příběhy",
      "action3": "Více informací",
      "floatingNotification": "Příběh obsahuje nezabezpečený (HTTP) obsah. Prosím zkontrolujte a vyřešte tyto problémy se zabezpečením."
    }
  }
});