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
    "share": {
      "btnPrivate": "Privat",
      "btnOrg": "Organisation",
      "btnPublic": "Allmän",
      "btnEveryone": "Alla"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Byggverktyg",
      "buttonSaving": "Sparar",
      "buttonSaved": "Sparad",
      "buttonError": "Det gick inte att spara",
      "buttonShare": "Dela",
      "buttonSettings": "Inställningar",
      "settingsLogoError": "Det finns ett problem med din logotyp. Klicka om du vill veta mer.",
      "buttonHelp": "Få hjälp med eller lämna feedback om GeoNet",
      "buttonPreview": "Visa berättelse",
      "buttonHealth": "Hälsorapport",
      "manageStories": "Hantera mina berättelser",
      "closeWithPendingChange": "Är du säker på att du vill bekräfta åtgärden? Dina ändringar sparas inte.",
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
      "chooseTransition": "Välj övergång",
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
        "remove": "Ta bort",
        "altTextPlaceholder": "Lägg till en beskrivning av mediematerialet för personer med nedsatt syn…",
        "altTextHelptip": "Alternativ text är en beskrivning av grafiskt material som används av hjälpmedelstekniker som skärmläsarprogramvara. Beskrivningen är inte obligatorisk men rekommenderas om man vill vara säker på att man följer Riktlinjer för tillgängligt webbinnehåll och amerikanska Section 508."
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
        "alternativeMedia": "Alternativ bild för mobil",
        "explanation": "Vissa mediematerial stöds inte eller fungerar inte så bra på mobila enheter. Använd denna panel för att välja en bild som ska visas i stället för detta mediematerial när din berättelse visas på en telefon eller surfplatta.",
        "changeAltImage": "Ändra bild",
        "uploadAltImage": "Lägg till alternativ bild"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Länka till innehåll",
        "urls_short": "Länk",
        "contentType": {
          "error": "Inga auktoriserade medier.",
          "imageOnly": "I den här delen av berättelsen kan du lägga till en bild.",
          "imageAndVideo": "I den här delen av berättelsen kan du lägga till en bild eller en video.",
          "imageVideoWebpage": "I den här delen av berättelsen kan du lägga till ljud, en bild, en video eller en webbsida."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Söker efter \"${searchterm}\"...",
          "searchedFor": "Sökresultat för \"${searchterm}\"",
          "albumsOf": "${username}s album",
          "noPhotosFound": "Inga foton matchade din sökning. Försök igen.",
          "noItemsFound": "Inga objekt matchade din sökning. Försök igen.",
          "noItemsInThisStory": "Inget innehåll från ArcGIS har lagts till i berättelsen än.",
          "limitReached": "Visar 100 objekt. Om du inte hittade vad du behöver kan du söka efter nyckelord.",
          "galleryItems": {
            "uploadError": "Det gick inte att överföra objektet."
          },
          "agol": {
            "remove1": "Ta bort den oanvända bilden från ditt ArcGIS-konto.",
            "remove2": "(Du måste överföra den igen om du vill använda den senare.)",
            "removeFailed": "Ta bort den oåtkomliga bilden från listan.",
            "modified": "Ändrad ${date}",
            "uploaded": "Överförd ${date}",
            "contentByAuthor": "${contentType} av ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Bläddra bland foton på ${Picasa} eller ${Google+}"
          },
          "flickr": {
            "photostream": "Fotoström",
            "searchAndBrowse": "Sök och bläddra bland foton på ${Flickr}",
            "captionStarter": "Foto av ${USERNAME} på ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Sök foton på ${Unsplash}",
            "photoBy": "Foto av ${username}",
            "userLink": "Gå till ${username}s ${Unsplash}-sida",
            "captionStarter": "Foto av ${USERNAME} på ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Länka till innehåll på webben",
              "imageOnly": "Länka till en bild på webben",
              "imageAndVideo": "Länka till en bild eller video på webben"
            },
            "linkText": {
              "imageOnly": "I rutan ovan kan du länka direkt till ett foto.",
              "imageAndVideo1": "I rutan ovan kan du klistra in en länk eller iframe-kod för en video på ${YouTube} eller ${Vimeo}.",
              "imageAndVideo2": "Du kan också länka direkt till ett foto.",
              "imageVideoWebpage1": "I rutan ovan kan du klistra in en länk eller iframe-kod för webbinnehåll, till exempel en dynamisk tabell eller video på ${YouTube} eller ${Vimeo}.",
              "imageVideoWebpage2": "Du kan också länka direkt till ett foto, en video, en ljudfil, en webbsida eller en webbapp.",
              "ender": "Använd alltid säkra (https) länkar. Om innehållet inte har stöd för https lägger du till en länk i texten för berättelsen så att läsarna kan visa den på en ny flik i webbläsaren.",
              "httpsError": "Länken måste börja med HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Läs in sidan via en säker anslutning (https)",
              "embedProtocolWarning1": "Om sidan inte läses in i din berättelse kan den inte bäddas in av webbsäkerhetsskäl.",
              "embedProtocolWarning2": "Om sidan inte läses in till din berättelse avmarkerar du alternativet och försöker igen. Om sidan fortfarande inte läses in kan den inte bäddas in av webbsäkerhetsskäl.",
              "embedProtocolWarning3": "Som ett alternativ kan du lägga till en länk i din berättelse för att öppna sidan på en ny webbläsarflik. ${linkText}",
              "linkText": "Läs mer."
            },
            "placeholder": "${https://}... eller ${<iframe>}",
            "uploadErrors": {
              "generic": "Det uppstod ett fel med den angivna adressen. Försök igen.",
              "imageOnly1": "Du måste använda en bild i den här delen av berättelsen.",
              "imageOnly2": "Ange en länk till en bild (.jpg, .png, .gif) eller välj en bild från ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
              "imageAndVideo1": "Du måste använda en bild eller video i den här delen av berättelsen.",
              "imageAndVideo2": "Ange en länk till en bild (.jpg, .png, .gif) eller en video på ${YouTube} eller ${Vimeo}, eller välj en bild från ${ArcGIS}, ${Flickr}, ${Google+} eller ${Unsplash}.",
              "badFormat": "Länken till den fil du försöker lägga till är felaktigt formaterad.",
              "inaccessible": "Den fil du försöker lägga till saknas eller är inte åtkomlig.",
              "tryAgain": "Kontrollera adressen och försök igen.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "bild",
                "generic": "media"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Genom att använda en tredje parts tjänst samtycker du till dess användarvillkor: ",
          "googlePhotos": {
            "placeholder": "E-postadress eller ${Picasa}/${Google+}-ID",
            "helpText": "Du kan lägga till bilder som överförts till ${Picasa} eller ${Google+} i din berättelse. ${helpLinkText} om att använda bilder som sparats i ditt ${Google}-konto i dina berättelser.",
            "helpLinkText": "Läs mer",
            "cannotFindUser": "Det går inte att hitta användaren ${username}. Försök igen."
          },
          "unsplash": {
            "placeholder": "Sök efter foton",
            "aboutText": "${Unsplash} är en utvald samling av kostnadsfria foton med hög kvalitet.",
            "copyrightText": "Alla bilder licensieras under ${Unsplash}-licensen. Läs mer ${moreInfoLink}.",
            "moreInfoLink": "här"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr}-konto",
              "text": "Hela ${Flickr}"
            },
            "placeholders": {
              "user": "Sök efter konto",
              "userText": "Sök efter foton i det här kontot",
              "text": "Sök efter foton"
            },
            "errors": {
              "cannotFindUser": "Det går inte att hitta användaren ${username}.",
              "noUserPhotos": "${username} har inga offentliga foton.",
              "didYouMean": "Menade du ${username}?",
              "generalUserError": "Något gick fel när du sökte efter användaren ${username}."
            },
            "licenses": {
              "licenseLabel": "Licens: ",
              "public": "Offentlig domän",
              "commercial": "OK för kommersiell användning",
              "nonCommercial": "OK för icke-kommersiell användning",
              "reserved": "Med ensamrätt",
              "any": "Alla licenser"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Den här berättelsen",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname}-organisation",
              "myContent": "Mitt innehåll"
            },
            "createContent": {
              "createNewMap": "Skapa en ny karta",
              "or": "ELLER",
              "dragAndDropImage": "Släpp bilder",
              "dragAndDropImageAudio": "Släpp bilder eller ljud",
              "uploadButton": "Bläddra",
              "agolInfo": "Bilder och ljud som överförts är bara tillgängliga inom denna berättelse.",
              "saveBeforeUpload": "När du har sparat berättelsen kan du överföra bilder och ljud till ArcGIS här.",
              "fileExtsImage": "Typer som stöds: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Typer som stöds: png, jpg, gif, bmp, mp3.",
              "maxSize": "Max. 10 MB per fil."
            },
            "filterAndSort": {
              "webmap": "Webbkarta",
              "webscene": "Webbscen",
              "image": "Bild",
              "audio": "Ljud",
              "date": "Datum",
              "sortByDate": "Sortera efter datum",
              "title": "Titel",
              "sortByTitle": "Sortera efter titel",
              "views": "Vyer",
              "search": "Sök med sökord eller ID"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Redigera karta",
      "unauthorizedDomain": "Den aktuella domänen har inte behörighet att använda kartredigeraren",
      "loading": "Vänta medan kartredigeraren läses in",
      "saving": "Sparar kartan",
      "success": "Kartan har sparats",
      "cancelTitle": "Ignorera alla osparade ändringar?",
      "errorSave": "Det gick inte att spara kartan. Försök igen.",
      "loadFail": "Kartredigeraren kunde inte läsas in",
      "close": "Stäng",
      "save": "Spara",
      "confirm": "Ja, stäng kartan",
      "deny": "Nej, fortsätt arbeta"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Fortsätt din berättelse här..."
      },
      "blockAdd": {
        "text": "Text",
        "media": "Media",
        "title": "Titel",
        "immersive": "Fördjupning"
      },
      "link": {
        "invite": "Klistra in eller skriv en länk..."
      },
      "color": {
        "choose": "välj",
        "cancel": "avbryt",
        "clear": "Rensa färg"
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
      "mediaUpload": "Uppladdningen av media pågår...",
      "mediaUploadSuccess": "Media har laddats upp",
      "mediaUploadFail": "Uppladdningen av media misslyckades"
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
        "audio": "ljud",
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
        "noAltImage": "Mediematerialet kanske inte fungerar på mobil",
        "noAltImageUnsupported": "Mediematerialet kanske inte stöds på mobil",
        "noAltImageWarning": "Mediematerialet kanske inte fungerar på mobil",
        "altImageBroken": "Den alternativa bild som definierats för detta medieobjekt är inte tillgänglig",
        "httpMedia": "Osäkra medier",
        "httpContent": "Osäkert innehåll"
      },
      "contentWarnings": {
        "noAltImage": "Se till att testa din berättelse på mobila enheter innan du delar den. Om detta mediematerial inte fungerar som förväntat, kan du använda knappen nedan för att lägga till en alternativ bild som ska visas när berättelsen visas på en telefon eller surfplatta.",
        "noAltImageUnsupported": "Denna typ av mediematerial fungerar inte på mobila enheter. Använd knappen nedan för att lägga till en alternativ bild som ska visas när berättelsen visas på en telefon eller surfplatta.",
        "noAltImageWarning": "Se till att testa din berättelse på mobila enheter innan du delar den. Om detta mediematerial inte fungerar som förväntat, kan du använda knappen nedan för att lägga till en alternativ bild som ska visas när berättelsen visas på en telefon eller surfplatta.",
        "noAltImageAlt": "Denna typ av mediematerial stöds inte eller fungerar kanske inte som den ska på mobila enheter. Ange en alternativ bild som ska visas när berättelsen visas på en telefon eller surfplatta."
      },
      "descriptions": {
        "httpAudioUnfixable": "Det här ljudspåret har inte stöd för HTTPS. Ta bort det från din berättelse eller ersätt det med en länk.",
        "httpAudioUncheckable": "Det här ljudspåret har en osäker (HTTP) URL. Klicka på knappen nedan för att försöka att använda en HTTPS URL för det här ljudspåret. Om det inte fungerar tar du bort ljudspåret från din berättelse eller ersätter det med en hyperlänk.",
        "httpAudioFixable": "Det här ljudspåret har en osäker (HTTP) URL. Klicka på knappen nedan för att använda en säker HTTPS URL för det här ljudspåret.",
        "httpWebpageUnfixable": "Den här webbsidan har inte stöd för HTTPS. Ta bort den från din berättelse eller ersätt den med en skärmbild eller länk.",
        "httpWebpageUncheckable": "Den här webbsidan har en osäker (HTTP) URL. Klicka på knappen nedan för att försöka att använda en HTTPS URL för den här webbsidan. Om det inte fungerar tar du bort webbsidan från din berättelse eller ersätter den med en skärmbild eller hyperlänk.",
        "httpWebpageFixable": "Den här webbsidan har en osäker (HTTP) URL. Klicka på knappen nedan för att använda en säker HTTPS URL för den här webbsidan.",
        "httpVideoUnfixable": "Den här videon har inte stöd för HTTPS. Ta bort den från din berättelse eller ersätt den med en skärmbild eller länk.",
        "httpVideoUncheckable": "Den här videon har en osäker (HTTP) URL. Klicka på knappen nedan för att försöka att använda en HTTPS URL för den här videon. Om det inte fungerar tar du bort videon från din berättelse eller ersätter den med en skärmbild eller hyperlänk.",
        "httpVideoFixable": "Den här videon har en osäker (HTTP) URL. Klicka på knappen nedan för att använda en säker HTTPS URL för den här videon.",
        "httpImageUnfixable": "Den här bilden har inte stöd för HTTPS. Ta bort den från din berättelse eller ersätt den med en länk.",
        "httpImageUncheckable": "Den här bilden har en osäker (HTTP) URL. Klicka på knappen nedan för att försöka att använda en HTTPS URL för den här bilden. Om det inte fungerar tar du bort bilden från din berättelse eller ersätter den med en hyperlänk.",
        "httpImageFixable": "Den här bilden har en osäker (HTTP) URL. Klicka på knappen nedan för att använda en säker HTTPS URL för den här bilden.",
        "httpLayer": "Det här lagret har en osäker (HTTP) URL.",
        "inaccessibleLogo": "Den här logotypen är inte tillgänglig. Ersätt den med en annan bild.",
        "httpLogoUnfixable": "Den här logotypen har inte stöd för HTTPS. Ersätt den med en annan bild.",
        "httpLogoFixable": "Den här logotypen har en osäker (HTTP) URL. Använd en HTTPS URL för logotypen.",
        "httpLogoUncheckable": "Den här logotypen har en osäker (HTTP) URL. Använd en HTTPS URL för logotypen eller ersätt den med en annan bild."
      },
      "tooltips": {
        "httpAudioFixable": "Klicka på knappen för att använda en säker HTTPS URL för det här ljudspåret.",
        "httpAudioUncheckable": "Försök att använda en HTTPS URL för det här ljudspåret. Om det inte fungerar tar du bort ljudspåret från din berättelse eller ersätter det med en länk.",
        "httpWebpageFixable": "Klicka på knappen för att använda en säker HTTPS URL för den här webbsidan.",
        "httpWebpageUncheckable": "Försök att använda en HTTPS URL för den här webbsidan. Om det inte fungerar tar du bort webbsidan från din berättelse eller ersätter den med en skärmbild eller länk.",
        "httpVideoFixable": "Klicka på knappen för att använda en säker HTTPS URL för den här videon.",
        "httpVideoUncheckable": "Försök att använda en HTTPS URL för den här videon. Om det inte fungerar tar du bort videon från din berättelse eller ersätter den med en skärmbild eller länk.",
        "httpImageFixable": "Klicka på knappen för att använda en säker HTTPS URL för den här bilden.",
        "httpImageUncheckable": "Försök att använda en HTTPS URL för den här bilden. Om det inte fungerar tar du bort bilden från din berättelse eller ersätter den med en länk.",
        "httpLayerMyMap": "Besök kartans objektsida för att uppdatera det här lagret för användning av HTTPS. Om lagret inte kan uppdateras tar du bort det från kartan.",
        "httpLayerNotMyMap": "Gör en kopia av kartan och uppdatera det här lagret för användning av HTTPS. Om lagret inte kan uppdateras tar du bort det från kartan.",
        "clickLearnMore": "Klicka om du vill veta mer."
      },
      "fixButtons": {
        "agolItemPage": "Objektsida",
        "openTheMap": "Öppna karta",
        "updateAudio": "Åtgärda URL för ljudspår",
        "updateWebpages": "Åtgärda URL för webbsida",
        "updateVideos": "Åtgärda URL för video",
        "updateImages": "Åtgärda URL för bild"
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
    },
    "saveErrorSocial": {
      "title": "Delning på sociala medier",
      "panel1": "Din berättelse kanske inte visas korrekt på sociala medier eftersom objekttiteln på ArcGIS-webbapplikationen inte är samma som berättelsens titel.",
      "panel1tooltip": "Om du definierar en titel, sammanfattning och miniatyrbild kommer din berättelse att se ut så här:",
      "panel2": "Vilken titel skulle du vilja använda på sociala medier:",
      "panel2q1": "Titel på berättelsen (rekommenderas)",
      "panel2q1tooltip": "Om du väljer det här alternativet ändras titeln på objektet så att den överensstämmer med titeln på berättelsen. Även övriga ändringar i byggverktyget synkroniseras.",
      "panel2q2": "Titel på objektet",
      "panel3": "Om du vill förbättra presentationen av din berättelse på sociala medier ännu mer använder du ${MYSTORIES} för att lägga till en sammanfattning och en miniatyrbild.",
      "panel4": "Varna mig inte igen för den här berättelsen",
      "save": "Spara",
      "mystories": "Mina berättelser"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Viktigt meddelande om webbsäkerhet och Story Maps",
      "s1h1": "Esri höjer säkerheten för Story Maps",
      "s1p1": "Story Maps live på webben och vårt webbforum arbetar ständigt med att etablera och implementera bättre säkerhetsfunktioner. HTTPS, som ger en säker anslutning för överföring av innehåll via internet, börjar bli standard för åtkomst till webbinnehåll. De flesta moderna webbläsare visar nu varningsmeddelanden när HTTP används istället för HTTPS. På grund av denna framväxande standard rekommenderar vi starkt att du använder HTTPS-länkar när du skapar och delar Story Maps, och att du bara använder HTTPS-URL:er när du bäddar in webbmaterial eller länkar till bilder i en Story Map.",
      "s1p2": "I praktiken innebär detta att man för att få åtkomst till en Story Map och allt dess innehåll (inklusive bilder, lager, inbäddade appar och webbplatser) måste använda länkar som börjar med HTTPS istället för HTTP. Detta ger dina läsare den bästa upplevelsen, eftersom de flesta webbläsare kommer att ange att dina berättelser är säkra.",
      "s2h1": "Vad behöver jag göra?",
      "s2p1": "Esri strävar efter att förenkla övergången för författare och läsare av Story Maps. Vi erbjuder verktyg som hjälper dig att hitta osäkert innehåll (HTTP) i dina berättelser och ger råd om hur du ska hantera det. Dessa finns nu tillgängliga i byggverktyget för Story Map och Mina berättelser. Kontrollera om dina berättelser har osäkert innehåll och uppdatera till HTTPS så snart som möjligt.",
      "action1": "Stäng",
      "action2": "Kontrollera mina berättelser nu",
      "action3": "Läs mer",
      "floatingNotification": "Den här berättelsen innehåller osäkert innehåll (HTTP). Granska och åtgärda problemen."
    }
  }
});