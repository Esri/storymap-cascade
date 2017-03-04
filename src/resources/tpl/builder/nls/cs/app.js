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
        "logoSharing": "Logo & sdílení"
      },
      "bookmarks": {
        "title": "Část",
        "bookmark": "Záložka",
        "intro": "Záložky jsou odkazy na části příběhu, které se zobrazují v záhlaví. Vytvoření stručných záložek pro hlavní části vašeho příběhu pomůže uživatelům s orientací.",
        "sequentialDefault": "Sekvenční část (nenalezen žádný text)",
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
      }
    },
    "builderPanel": {
      "coverLabel": "Obal",
      "creditsLabel": "Kredity",
      "betaFeedback": "Zpětná vazba",
      "betaNote": "Dejte nám vědět, co si myslíte o aplikaci ${APP_NAME}, nebo pokud něco nefunguje podle vašeho očekávání.",
      "notSharedNote": "Váš příběh není sdílen, vidíte ho jenom vy.",
      "organizationWarning": "Abyste zajistili, že tento příběh budou moci zobrazit ostatní uživatelé, musíte se svou organizací sdílet také jeho scény, vrstvy scén a vložené aplikace. Mapy a mapové vrstvy se sdílejí automaticky.",
      "publicWarning": "Abyste zajistili, že tento příběh budou moci zobrazit ostatní uživatelé, musíte veřejně sdílet také jeho scény, vrstvy scén a vložené aplikace. Mapy a mapové vrstvy se sdílejí automaticky.",
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
        "issues": "Problémy",
        "fixIssues": "Vyřešit problémy"
      },
      "manage": {
        "changeMedia": "Změnit média",
        "edit": "Upravit",
        "editAside": "Otevře se na nové kartě prohlížeče. Po uložení vašich úprav uložte a znovu načtěte tento příběh, aby se zobrazily změny.",
        "remove": "Odstranit"
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
        "large": "Velká"
      },
      "background": {
        "noCrop": "Neořezávat obrázek",
        "mostImportantPart": "Zvolte nejdůležitější bod",
        "cropExplanationImmersive": "Zvolte bod na obrázku pro určení, jak bude obrázek oříznut na různě velkých obrazovkách. Vybraný bod bude vždy viditelný. Zaškrtněte níže uvedené pole, pokud vaše médium musí být zcela viditelné.",
        "cropExplanation": "Zvolte bod na obrázku pro určení, jak bude obrázek oříznut na různě velkých obrazovkách. Vybraný bod bude vždy viditelný.",
        "color": "Barva",
        "previews": "Náhledy"
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
      "imageUpload": "Obrázek se nahrává…",
      "imageUploadSuccess": "Obrázek byl úspěšně nahrán.",
      "imageUploadFail": "Nepodařilo se nahrát obrázek."
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
      "sequence": "Vyprávěčská část",
      "immersive": "Poutavá část",
      "title": "Titulní část"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "obraz",
        "webmap": "mapa",
        "webscene": "scéna",
        "video": "sbírku",
        "content": "obsah",
        "webpage": "webová stránka"
      },
      "placeholders": {
        "generic": "Tento obsah není přístupný.",
        "deleted": "Tento typ média ${media-type} byl odstraněn.",
        "inaccessible": "Tento typ média ${media-type} není přístupný.",
        "unauthorized": "Nemáte oprávnění k zobrazení tohoto typu média ${media-type}.",
        "unshared": "Tento typ média ${media-type} není sdílen stejným způsobem jako váš příběh.",
        "othersUnshared": "Tento typ média ${media-type} není sdílen stejným způsobem jako váš příběh.",
        "subscriptionContent": "Tento typ média ${media-type} obsahuje předplatitelskou vrstvu.",
        "premiumContent": "Tento typ média ${media-type} obsahuje prémiovou vrstvu.",
        "secureService": "Tento typ média ${media-type} obsahuje zabezpečenou vrstvu."
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
    }
  }
});