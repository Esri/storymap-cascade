/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Verkställ",
      "close": "Stäng"
    },
    "header": {
      "sharingNotAvailable": "Detta är inte tillgängligt förrän du delar berättelsen",
      "edit": "Redigera"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Bokmärken",
        "logoSharing": "Logotyp och delning",
        "theme": "Utseende"
      },
      "bookmarks": {
        "title": "Sektion",
        "bookmark": "Bokmärke",
        "intro": "Bokmärken är länkar till berättelseavsnitt som visas i rubriken. Om du skapar korta och koncisa bokmärken för de viktigaste delarna av din berättelse, hjälper du läsarna att orientera sig.",
        "sequentialDefault": "Berättelseavsnitt (ingen text hittades)",
        "immersiveDefault": "Fördjupande avsnitt (ingen text hittades)",
        "titleDefault": "Titelavsnitt (ingen text hittades)",
        "coverDefault": "Omslagsavsnitt (ingen text hittades)",
        "coverAppendage": "(Omslag)"
      },
      "logoSharing": {
        "logo": "Logotyp",
        "logoButton": "Använda ${ESRI}-logotypen",
        "useOrgLogo": "Använda min organisations logotyp",
        "useOrgLogoHelp": "Använda den logotyp som du fått av administratören",
        "logoLink": "Logotyplänk",
        "logoUploadProgress": "Uppladdningen av logotypen pågår",
        "logoUploadSuccess": "Logotypen har laddats upp",
        "logoUploadError": "Uppladdningen av logotypen misslyckades, byter tillbaka till ${ESRI}-logotypen",
        "customHeaderText": "Motto",
        "taglineLinkDisabledTooltip": "Ange ett motto så att länken aktiveras",
        "link": "Länk till motto",
        "enableSocialSharing": "Visa delningsknapp"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Teckensnitt",
        "previewLabel": "Förhandsgranska",
        "fontsTitleLabel": "Rubriker",
        "fontsBodyLabel": "Huvudtext",
        "loremTitle": "Lorem ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Omslag",
      "creditsLabel": "Krediter",
      "betaFeedback": "Feedback",
      "betaNote": "Berätta vad du tycker om ${APP_NAME} eller om något inte fungerar som förväntat.",
      "notSharedNote": "Din berättelse är inte delad och bara du kan se den",
      "organizationWarning": "Om du vill se till att denna berättelse kan ses av andra måste du också dela dess scener, scenlager och inbäddade appar med din organisation. Kartor och kartlager delas automatiskt.",
      "publicWarning": "Om du vill att denna berättelse ska kunna ses av andra måste du också dela dess scener, scenlager och inbäddade appar med alla. Kartor och kartlager delas automatiskt.",
      "addTitleNote": "Lägg till en titel på omslaget som ska sparas",
      "saveError": "Det uppstod ett fel när din berättelse skulle sparas.",
      "duplicate": "Duplicera",
      "organize": "Organisera",
      "done": "Klar",
      "invite": "Avsnitten visas här allt eftersom du bygger upp din berättelse ...",
      "mystoriestooltip": "Cascade Builder varnar för problem i din berättelse och hjälper dig att åtgärda dem. Scener och inbäddade appar kontrolleras inte, så kontrollera dem manuellt."
    },
    "immersiveViewPanel": {
      "transition": "Övergång",
      "fade": "Tona",
      "fadeSlow": "Tona långsamt",
      "swipeVertical": "Svep lodrätt",
      "swipeHorizontal": "Svep vågrätt",
      "none": "Inga",
      "disabledConsecutiveSameMedia": "Inte tillgängligt när efterföljande vyer använder samma mediematerial",
      "disabledTooltipMap": "Om du vill använda den här övergången måste de synliga lagren i båda vyerna skilja sig åt och de andra kartegenskaperna måste vara desamma",
      "disabledConsecutiveSameMap": "Inte tillgängligt när efterföljande vyer använder samma karta",
      "disabledNotInBeta": "Inte tillgängligt när efterföljande vyer använder samma karta",
      "disabledNonConsecutive": "Inte tillgängligt eftersom det finns en annan förekomst av detta mediematerial som inte följer direkt efter",
      "addMedia": "Lägg till mediematerial",
      "invite": "Vyerna visas här allt eftersom du bygger upp ditt fördjupande avsnitt ..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Utseende",
        "manage": "Hantera",
        "size": "Storlek",
        "background": "Bakgrund",
        "mobile": "Mobil",
        "issues": "Problem",
        "fixIssues": "Åtgärda problem"
      },
      "manage": {
        "changeMedia": "Byt media",
        "edit": "Redigera",
        "editAside": "Öppnas i en ny flik i webbläsaren. När du har sparat dina ändringar sparar du och läser in denna berättelse igen så att ändringarna visas.",
        "remove": "Ta bort"
      },
      "appearance": {
        "homeView": "Inledande vy",
        "audio": "Ljud",
        "on": "På",
        "muted": "Avstängt",
        "volumeAside": "Videon spelas upp automatiskt när en läsare kommer till denna vy. Om du stänger av ljudet kan läsaren inte sätta på det.",
        "view": "Visa",
        "resetLocation": "Återställ plats",
        "resetLayers": "Återställ lager",
        "clearPopup": "Rensa popup",
        "interaction": "Interaktion",
        "interactionDisabled": "Interaktion inaktiverad",
        "buttonToEnable": "Knapp för att aktivera",
        "interactionEnabled": "Interaktion aktiverad",
        "interactionAside": "* På pekenheterna kommer det att visas en interaktionsknapp.",
        "slide": "Bild",
        "noSlides": "Inga bilder tillgängliga.",
        "mapExtentPrompt": "Uppdatera kartan för att berätta din historia; klicka på bocken för att spara ändringarna"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Tema"
      },
      "size": {
        "small": "Liten",
        "medium": "Medium",
        "large": "Stor",
        "noCrop": "Beskär inte höga bilder",
        "noCropTallTooltip": "Genom att låta bli att beskära en hög bild får man en dramatisk effekt för läsarna då man måste bläddra för att se hela bilden."
      },
      "background": {
        "noCrop": "Beskär inte",
        "mostImportantPart": "Välj den viktigaste punkten",
        "cropExplanationImmersive": "Välj en punkt i bilden för att välja hur din bild ska beskäras i olika skärmstorlekar. Den punkt som du väljer kommer alltid att visas. Markera Beskär inte om din bild måste vara fullt synlig.",
        "cropExplanation": "Välj en punkt i bilden för att välja hur din bild ska beskäras i olika skärmstorlekar. Den punkt som du väljer kommer alltid att visas.",
        "color": "Färg",
        "previews": "Förhandsgranskningar"
      },
      "altMedia": {
        "alternativeMedia": "Alternativt mediematerial",
        "explanation": "Vissa medier stöds inte eller fungerar inte så bra på mobila enheter. Använd denna panel för att välja ett alternativt, mer mobilvänligt objekt som visas i stället för detta mediematerial när din berättelse visas på en telefon eller surfplatta.",
        "changeAltImage": "Ändra bild",
        "uploadAltImage": "Lägg till bild"
      }
    },
    "imageGallery": {
      "addImage": "Lägg till en annan bild",
      "moveBackward": "Flytta bakåt",
      "moveForward": "Flytta framåt"
    },
    "cover": {
      "titlePrompt": "Ange din berättelses titel...",
      "subtitlePrompt": "Bläddra nedåt för att komma igång eller ange en valfri underrubrik",
      "mediaPlaceholder": "Lägg till din bild eller video",
      "saveError": "Det gick inte att spara; du har redan ett objekt med denna titel"
    },
    "credits": {
      "sectionInvite": "Lägg till ett avsnitt med eftertexter",
      "warning": "Båda fälten måste fyllas i",
      "content": "Innehåll...",
      "source": "Källa...",
      "linkPrompt": "Valfri länk...",
      "introductionPlaceholder": "Ange eventuellt en introduktion till dina eftertexter..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Position",
        "theme": "Tema",
        "size": "Storlek",
        "background": "Bakgrund",
        "layout": "Bläddring (för alla paneler)"
      }
    },
    "title": {
      "placeholder": "Ange en titel..."
    },
    "media": {
      "imageUpload": "Uppladdningen av bilder pågår ...",
      "imageUploadSuccess": "Bilden har laddats upp",
      "imageUploadFail": "Uppladdningen av bilden misslyckades"
    },
    "controller": {
      "sectionOrganize": "Du ordnade avsnitten",
      "immersiveOrganize": "Du ordnade vyerna",
      "sectionDelete": "Du tog bort ett avsnitt",
      "viewDelete": "Du tog bort en vy"
    },
    "notification": {
      "cancel": "Avbryt",
      "close": "Stäng",
      "undo": "Ångra"
    },
    "sections": {
      "sequence": "Berättelse",
      "immersive": "Fördjupning",
      "title": "Titel"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "bild",
        "webmap": "karta",
        "webscene": "scen",
        "video": "video",
        "content": "innehåll",
        "webpage": "webbsida"
      },
      "placeholders": {
        "generic": "Det här innehållet är inte tillgängligt.",
        "deleted": "Det här objektet har tagits bort.",
        "inaccessible": "Det här innehållet är inte tillgängligt.",
        "unauthorized": "Du är inte behörig att visa det här innehållet.",
        "unshared": "Det här objektet delas inte som din berättelse.",
        "othersUnshared": "Det här objektet delas inte som din berättelse.",
        "subscriptionContent": "Den här kartan innehåller ett abonnentlager.",
        "premiumContent": "Den här kartan innehåller ett premiumlager.",
        "secureService": "Den här kartan innehåller ett säkert lager."
      },
      "contentIssues": {
        "noAltImage": "Mediematerialet stöds inte på mobila enheter",
        "altImageBroken": "Den alternativa bild som definierats för detta medieobjekt är inte tillgänglig"
      },
      "contentWarnings": {
        "noAltImage": "Denna typ av mediematerial stöds inte på mobila enheter. Ange en alternativ bild som ska visas när berättelsen visas på mobila enheter.",
        "noAltImageAlt": "Denna typ av mediematerial stöds inte på mobila enheter. Ange en alternativ bild på mobilfliken som ska visas när berättelsen visas på mobila enheter."
      },
      "mapIssues": {
        "fixButton": "Åtgärda problem",
        "nofixButton": "Problem",
        "mapLabel": "Karta:",
        "summaries": {
          "unshared": "Odelat innehåll",
          "othersUnshared": "Någon annans odelade innehåll",
          "subscriptionContent": "Abonnemangsinnehåll",
          "premiumContent": "Premiuminnehåll",
          "secureContent": "Säkert innehåll",
          "deleted": "Borttaget innehåll",
          "inaccessible": "Oåtkomligt innehåll",
          "unauthorized": "Obehörigt innehåll"
        },
        "descriptions": {
          "unshared": "Det här innehållet delas inte som din berättelse.",
          "othersUnshared": "Det här innehållet ägs av någon annan och delas inte som din berättelse.",
          "othersUnsharedAuthorized": "Det här innehållet ägs av någon annan, men du är behörig att dela det.",
          "inaccessible": "Det här innehållet är inte tillgängligt.",
          "deleted": "Det här innehållet har tagits bort.",
          "unauthorized": "Du är inte behörig att visa det här innehållet.",
          "popupFeatureLayer": "Ett tileformaterat lagers popupfönster kommer från ett geoobjektslager som inte delas som din berättelse.",
          "subscriptionContent": "Du måste godkänna abonnentinnehåll för offentligt bruk.",
          "premiumContent": "Du måste godkänna premiuminnehåll för offentligt bruk.",
          "secureService": "Säkert innehåll är inte tillgängligt för dina läsare.",
          "missingItemWarning": "Det objekt som är associerat med det här lagret har tagits bort."
        },
        "tooltips": {
          "unshared": "Klicka för att få veta mer om delning.",
          "othersUnshared": "Du är inte behörig att dela innehåll som ägs av andra. Be ägaren att dela det, ta bort kartan från berättelsen eller redigera kartan för att ta bort de lager som inte är dina. Klicka för att få veta mer om redigering av kartor.",
          "inaccessible": "Ta bort den här kartan från din berättelse eller redigera den för att ta bort oåtkomliga lager. Klicka för att få veta mer om redigering av kartor.",
          "deleted": "Ta bort den här kartan från din berättelse eller redigera den för att ta bort lager som saknas. Klicka för att få veta mer om redigering av kartor.",
          "unauthorized": "Ta bort den här kartan från din berättelse eller redigera den för att ta bort obehöriga lager som saknas. Klicka för att få veta mer om redigering av kartor.",
          "popupFeatureLayer": "Ett tileformaterat lagers popupfönster kommer från ett geoobjektslager som inte delas som din berättelse.",
          "subscriptionContent": "Abonnentinnehåll förbrukar inte krediter. Klicka om du vill veta mer.",
          "premiumContent": "Krediter kommer att debiteras från din organisation varje gång någon visar ett premiumlager i din berättelse. Klicka om du vill veta mer.",
          "secureService": "Ta bort det säkra innehållet från din berättelse eller klicka för att få veta hur du tillåter att säkert innehåll kan användas av andra.",
          "missingItemWarning": "Det här lagret fungerar fortfarande, men dess symboler, popupfönster eller namn kan ha ändrats. Bekräfta lager som visas som förväntat eller ta bort dem från din berättelse."
        },
        "fixButtons": {
          "share": "Dela",
          "hide": "Dölj",
          "authorize": "Auktorisera",
          "remove": "Ta bort",
          "help": "Få hjälp",
          "ignore": "Ignorera",
          "confirm": "Bekräfta",
          "edit": "Redigera karta"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Vissa kartor och lager har också delats.",
          "alsoSharedMaps": "Vissa kartor har också delats.",
          "alsoSharedLayers": "Vissa lager har också delats.",
          "sharedOthersContent": "Du har använt din administratörsbehörighet till att dela någon annans innehåll."
        }
      },
      "storyHealth": {
        "healthy": "Inga problem",
        "notHealthy": "Åtgärda problem",
        "warnings": "Visa varningar"
      }
    }
  }
});