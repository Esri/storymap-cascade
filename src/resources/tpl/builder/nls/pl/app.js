/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Zastosuj",
      "close": "Zamknij"
    },
    "header": {
      "sharingNotAvailable": "Niedostępne do czasu udostępnienia narracji",
      "edit": "Edytuj"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Zakładki",
        "logoSharing": "Logotyp i udostępnianie",
        "theme": "Wygląd"
      },
      "bookmarks": {
        "title": "Sekcja",
        "bookmark": "Zakładka",
        "intro": "Zakładki to łącza do sekcji narracji widoczne w nagłówku. Utworzenie podręcznych zakładek do głównych sekcji narracji ułatwia czytelnikom orientację.",
        "sequentialDefault": "Sekcja narracji (nie znaleziono tekstu)",
        "immersiveDefault": "Sekcja imersyjna (nie znaleziono tekstu)",
        "titleDefault": "Sekcja tytułu (nie znaleziono tekstu)",
        "coverDefault": "Sekcja okładki (nie znaleziono tekstu)",
        "coverAppendage": "(Okładka)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Użyj logotypu ${ESRI}",
        "useOrgLogo": "Użyj logotypu mojej instytucji",
        "useOrgLogoHelp": "Użyj logotypu dostarczonego przez administratora",
        "logoLink": "Łącze do logotypu",
        "logoUploadProgress": "Trwa przesyłanie logotypu",
        "logoUploadSuccess": "Przesłanie logotypu powiodło się",
        "logoUploadError": "Przesłanie logotypu nie powiodło się. Powrót do logotypu ${ESRI}",
        "customHeaderText": "Motto",
        "taglineLinkDisabledTooltip": "Wprowadź motto, aby włączyć łącze",
        "link": "Łącze do motta",
        "enableSocialSharing": "Wyświetl przycisk udostępniania"
      },
      "appearance": {
        "themeLabel": "Motyw",
        "fontLabel": "Czcionki",
        "previewLabel": "Zobacz podgląd",
        "fontsTitleLabel": "Tytuły",
        "fontsBodyLabel": "Treść",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Prywatna",
      "btnOrg": "Instytucja",
      "btnPublic": "Publiczna",
      "btnEveryone": "Wszyscy"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Kreator",
      "buttonSaving": "Zapisywanie",
      "buttonSaved": "Zapisano",
      "buttonError": "Zapisywanie się nie powiodło",
      "buttonShare": "Udostępnianie",
      "buttonSettings": "Parametry",
      "settingsLogoError": "Wystąpił problem z logotypem. Kliknij, aby dowiedzieć się więcej.",
      "buttonHelp": "Uzyskaj pomoc lub prześlij opinię na temat GeoNet",
      "buttonPreview": "Wyświetl narrację",
      "buttonHealth": "Raport dotyczący stanu",
      "manageStories": "Zarządzaj moimi narracjami",
      "closeWithPendingChange": "Czy na pewno chcesz potwierdzić tę operację? Zmiany zostaną utracone.",
      "coverLabel": "Okładka",
      "creditsLabel": "Kredyty",
      "betaFeedback": "Opinia",
      "betaNote": "Przekaż nam swoją opinię o aplikacji ${APP_NAME} lub poinformuj nas, jeśli jakieś funkcje nie działają zgodnie z oczekiwaniami.",
      "notSharedNote": "Twoja narracja nie jest udostępniana. Tylko Ty ją widzisz",
      "organizationWarning": "Aby się upewnić, że ta narracja może być wyświetlana przez inne osoby, musisz także udostępnić w swojej instytucji jej sceny, warstwy scen i osadzone aplikacje. Mapy i warstwy map są udostępniane automatycznie.",
      "publicWarning": "Aby się upewnić, że ta narracja może być wyświetlana przez inne osoby, musisz także udostępnić wszystkim użytkownikom jej sceny, warstwy scen i osadzone aplikacje. Mapy i warstwy map są udostępniane automatycznie.",
      "addTitleNote": "Dodaj tytuł do okładki, aby zapisać",
      "saveError": "Wystąpił błąd podczas zapisywania narracji.",
      "duplicate": "Duplikuj",
      "organize": "Organizuj",
      "done": "Zakończono",
      "invite": "Podczas tworzenia narracji w tym miejscu będą wyświetlane jej sekcje...",
      "mystoriestooltip": "Kreator kaskadowy informuje o błędach znalezionych w narracji i pomaga w ich naprawieniu. Sceny i osadzone aplikacje nie są sprawdzane, dlatego należy je sprawdzić ręcznie."
    },
    "immersiveViewPanel": {
      "transition": "Przejście",
      "chooseTransition": "Wybierz przejście",
      "fade": "Wygaszanie",
      "fadeSlow": "Wygaszanie powolne",
      "swipeVertical": "Zwijanie pionowe",
      "swipeHorizontal": "Zwijanie poziome",
      "none": "Brak",
      "disabledConsecutiveSameMedia": "Niedostępne, jeśli kolejne widoki korzystają z tych samych multimediów",
      "disabledTooltipMap": "Aby móc skorzystać z tego przejścia, widoczne warstwy w obu widokach muszą być różne, a pozostałe właściwości mapy muszą być takie same",
      "disabledConsecutiveSameMap": "Niedostępne, jeśli kolejne widoki korzystają z tej samej mapy",
      "disabledNotInBeta": "Niedostępne, jeśli kolejne widoki korzystają z tej samej mapy",
      "disabledNonConsecutive": "Niedostępne, ponieważ istnieje inne wystąpienie tych multimediów i nie następują one kolejno po sobie",
      "addMedia": "Dodaj multimedia",
      "invite": "Podczas tworzenia sekcji imersyjnej w tym miejscu będą wyświetlane jej widoki..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Wygląd",
        "manage": "Zarządzaj",
        "size": "Rozmiar",
        "background": "Tło",
        "mobile": "Mobilne",
        "issues": "Problemy",
        "fixIssues": "Rozwiąż problemy"
      },
      "manage": {
        "changeMedia": "Zmień media",
        "edit": "Edytuj",
        "editAside": "Otwierane na nowej karcie przeglądarki. Po zapisaniu modyfikacji zapisz i wczytaj ponownie tę narrację, aby zobaczyć zmiany.",
        "remove": "Usuń",
        "altTextPlaceholder": "Dodaj opis tego medium dla odbiorców niedowidzących...",
        "altTextHelptip": "Tekst alternatywny jest opisem medium wizualnego używanym przez technologie wspomagające, takie jak oprogramowanie do czytania tekstu z ekranu. Opis jest opcjonalny, ale zalecany w celu spełnienia wytycznych dotyczących dostępności zawartości internetowej, takich jak WCAG oraz artykuł 508."
      },
      "appearance": {
        "homeView": "Widok początkowy",
        "audio": "Dźwięk",
        "on": "Włącz",
        "muted": "Wyciszony",
        "volumeAside": "Ten materiał wideo zostanie automatycznie odtworzony, kiedy czytelnik otworzy ten widok. Jeśli wyciszysz dźwięk, czytelnik nie będzie mógł go włączyć.",
        "view": "Wyświetl",
        "resetLocation": "Resetuj lokalizację",
        "resetLayers": "Resetuj warstwy",
        "clearPopup": "Wyczyść okno podręczne",
        "interaction": "Interakcja",
        "interactionDisabled": "Interakcja wyłączona",
        "buttonToEnable": "Przycisk do włączania",
        "interactionEnabled": "Interakcja włączona",
        "interactionAside": "*Na urządzeniach dotykowych będzie wyświetlany przycisk interakcji.",
        "slide": "Slajd",
        "noSlides": "Brak dostępnych slajdów.",
        "mapExtentPrompt": "Zaktualizuj mapę, aby zaprezentować narrację. Kliknij znacznik wyboru, aby zapisać zmiany"
      },
      "sectionAppearance": {
        "layout": "Kompozycja",
        "theme": "Motyw"
      },
      "size": {
        "small": "Mały",
        "medium": "Średnie",
        "large": "Duży",
        "noCrop": "Nie przycinaj wysokich obrazów",
        "noCropTallTooltip": "Nieprzycinanie wysokich obrazów tworzy interesujący efekt i zachęca czytelników do przewinięcia ekranu w celu wyświetlenia całego obrazu."
      },
      "background": {
        "noCrop": "Nie przycinaj",
        "mostImportantPart": "Wybierz najważniejszy punkt",
        "cropExplanationImmersive": "Zaznacz punkt na obrazie, aby wybrać sposób przycięcia obrazu w zależności od rozmiaru ekranu. Wybrany punkt będzie zawsze widoczny. Zaznacz opcję 'Nie przycinaj', jeśli obraz ma być widoczny w całości.",
        "cropExplanation": "Zaznacz punkt na obrazie, aby wybrać sposób przycięcia obrazu w zależności od rozmiaru ekranu. Wybrany punkt będzie zawsze widoczny.",
        "color": "Kolor",
        "previews": "Widoki podglądu"
      },
      "altMedia": {
        "alternativeMedia": "Obraz alternatywny dla urządzenia przenośnego",
        "explanation": "Niektóre elementy multimedialne mogą nie być obsługiwane lub nie działać poprawnie na urządzeniach przenośnych. Ten panel umożliwia wybranie obrazu, który będzie widoczny zamiast tego elementu multimedialnego podczas wyświetlania narracji na telefonie lub tablecie.",
        "changeAltImage": "Zmień obraz",
        "uploadAltImage": "Dodaj obraz alternatywny"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Łącze do zasobów",
        "urls_short": "Połącz",
        "contentType": {
          "error": "Brak autoryzowanego zasobu multimedialnego.",
          "imageOnly": "W tej części narracji można dodać obraz.",
          "imageAndVideo": "W tej części narracji można dodać obraz lub film.",
          "imageVideoWebpage": "W tej części narracji można dodać dźwięk, obraz, film lub witrynę internetową."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Wyszukiwanie słowa kluczowego „${searchterm}”...",
          "searchedFor": "Wyniki wyszukiwania słowa kluczowego „${searchterm}”",
          "albumsOf": "Albumy użytkownika ${username}",
          "noPhotosFound": "Brak zdjęć spełniających kryteria wyszukiwania. Spróbuj ponownie.",
          "noItemsFound": "Brak elementów spełniających kryteria wyszukiwania. Spróbuj ponownie.",
          "noItemsInThisStory": "Do tej narracji nie dodano jeszcze żadnych zasobów z platformy ArcGIS.",
          "limitReached": "Wyświetlanie 100 elementów. Jeśli nie znaleziono potrzebnych informacji, spróbuj wyszukiwania według słów kluczowych.",
          "galleryItems": {
            "uploadError": "Niestety ten element nie został przesłany."
          },
          "agol": {
            "remove1": "Usuń ten nieużywany obraz z konta na platformie ArcGIS.",
            "remove2": "(Jeśli zdecydujesz się używać go w przyszłości, konieczne będzie ponowne jego przesłanie).",
            "removeFailed": "Usuń ten niedostępny obraz z listy.",
            "modified": "Data modyfikacji: ${date}",
            "uploaded": "Data przesłania: ${date}",
            "contentByAuthor": "Zasób: ${contentType}, autor: ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "Przeglądanie zdjęć w serwisie ${Picasa} lub ${Google+}"
          },
          "flickr": {
            "photostream": "Strumień zdjęć",
            "searchAndBrowse": "Wyszukiwanie i przeglądanie zdjęć w serwisie ${Flickr}",
            "captionStarter": "Autor zdjęcia: ${USERNAME} w serwisie ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Wyszukiwanie zdjęć w serwisie ${Unsplash}",
            "photoBy": "Autor zdjęcia: ${username}",
            "userLink": "Przejdź na stronę użytkownika ${username} w serwisie ${Unsplash}",
            "captionStarter": "Autor zdjęcia: ${USERNAME} w serwisie ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Łącze do zasobu w Internecie",
              "imageOnly": "Łącze do zdjęcia w Internecie",
              "imageAndVideo": "Łącze do zdjęcia lub filmu w Internecie"
            },
            "linkText": {
              "imageOnly": "W powyższym polu można wstawić bezpośrednie łącze do zdjęcia.",
              "imageAndVideo1": "W powyższym polu można wkleić łącze lub kod ramki iframe filmu w witrynie ${YouTube} lub ${Vimeo}.",
              "imageAndVideo2": "Można także wstawić bezpośrednie łącze do zdjęcia.",
              "imageVideoWebpage1": "W powyższym polu można wkleić łącze lub kod ramki iframe zasobu internetowego, takiego jak diagram dynamiczny lub film w witrynie ${YouTube} lub ${Vimeo}.",
              "imageVideoWebpage2": "Można także wstawić bezpośrednie łącze do zdjęcia, filmu, pliku dźwiękowego, strony internetowej lub aplikacji internetowej.",
              "ender": "Zawsze korzystaj z bezpiecznych łączy (https). Jeśli dany zasób nie obsługuje protokołu https, dodaj łącze do zasobu w tekście narracji, aby czytelnicy mogli wyświetlić go na nowej karcie przeglądarki.",
              "httpsError": "Łącze musi rozpoczynać się od HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Wczytaj stronę przez bezpieczne połączenie (https)",
              "embedProtocolWarning1": "Jeśli ta strona nie jest wczytywana w narracji, nie można jej osadzać ze względów bezpieczeństwa internetowego.",
              "embedProtocolWarning2": "Jeśli ta strona nie jest wczytywana w narracji, wyłącz zaznaczenie tej opcji i spróbuj ponownie. Jeśli ta strona nadal nie jest wczytywana, nie można jej osadzać ze względów bezpieczeństwa internetowego.",
              "embedProtocolWarning3": "Alternatywnie można dodać w narracji łącze umożliwiające otwarcie tej strony na nowej karcie przeglądarki. ${linkText}",
              "linkText": "Dowiedz się więcej."
            },
            "placeholder": "${https://}... lub ${<iframe>}",
            "uploadErrors": {
              "generic": "Wystąpił problem z wprowadzonym adresem. Spróbuj ponownie.",
              "imageOnly1": "W tej części narracji należy użyć obrazu.",
              "imageOnly2": "Podaj łącze do obrazu (.jpg, .png, .gif) lub wybierz obraz z serwisu ${ArcGIS}, ${Flickr}, ${Google+} bądź ${Unsplash}.",
              "imageAndVideo1": "W tej części narracji należy użyć obrazu lub filmu.",
              "imageAndVideo2": "Podaj łącze do obrazu (.jpg, .png, .gif) lub filmu w serwisie ${YouTube} bądź ${Vimeo} albo wybierz obraz z serwisu ${ArcGIS}, ${Flickr}, ${Google+} bądź ${Unsplash}.",
              "badFormat": "Łącze do pliku, które próbujesz dodać, jest niepoprawnie sformatowane.",
              "inaccessible": "Plik, który próbujesz dodać, nie istnieje lub jest niedostępny.",
              "tryAgain": "Sprawdź adres i spróbuj ponownie.",
              "mediaTypes": {
                "VIDEO": "wideo",
                "IMAGE": "image",
                "generic": "multimedia"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Używając usługi innych producentów, zgadzasz się na warunki jej użytkowania: ",
          "googlePhotos": {
            "placeholder": "Adres e-mail lub identyfikator w serwisie ${Picasa}/${Google+}",
            "helpText": "Możesz dodać do narracji zdjęcia przesłane do serwisu ${Picasa} lub ${Google+}. ${helpLinkText} na temat używania w narracji obrazów przechowywanych na koncie ${Google}.",
            "helpLinkText": "Dowiedz się więcej",
            "cannotFindUser": "Nie można znaleźć użytkownika ${username}. Spróbuj ponownie."
          },
          "unsplash": {
            "placeholder": "Wyszukaj zdjęcia",
            "aboutText": "Serwis ${Unsplash} jest obsługiwanym zbiorem starannie wybranych bezpłatnych zdjęć wysokiej jakości.",
            "copyrightText": "Wszystkie zdjęcia podlegają warunkom licencji ${Unsplash}. Więcej informacji ${moreInfoLink}.",
            "moreInfoLink": "tutaj"
          },
          "flickr": {
            "searchType": {
              "account": "Konto ${Flickr}",
              "text": "Cały serwis ${Flickr}"
            },
            "placeholders": {
              "user": "Wyszukaj konto",
              "userText": "Wyszukaj zdjęcia na tym koncie",
              "text": "Wyszukaj zdjęcia"
            },
            "errors": {
              "cannotFindUser": "Nie można znaleźć użytkownika ${username}.",
              "noUserPhotos": "Użytkownik ${username} nie ma żadnych publicznych zdjęć.",
              "didYouMean": "Czy masz na myśli użytkownika ${username}?",
              "generalUserError": "Wystąpił problem podczas wyszukiwania użytkownika ${username}."
            },
            "licenses": {
              "licenseLabel": "Licencja: ",
              "public": "Domena publiczna",
              "commercial": "Dostępne do użytku komercyjnego",
              "nonCommercial": "Dostępne do użytku niekomercyjnego",
              "reserved": "Wszelkie prawa zastrzeżone.",
              "any": "Dowolna licencja"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Ta narracja",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "Instytucja ${orgname}",
              "myContent": "Moje zasoby"
            },
            "createContent": {
              "createNewMap": "Utwórz nową mapę",
              "or": "OR",
              "dragAndDropImage": "Upuść obrazy",
              "dragAndDropImageAudio": "Upuść obrazy lub dźwięk",
              "uploadButton": "Przeglądaj",
              "agolInfo": "Przesłane obrazy i dźwięk będą dostępne tylko w ramach tej narracji.",
              "saveBeforeUpload": "Po zapisaniu tej narracji można w tym miejscu przesyłać obrazy i dźwięk na platformę ArcGIS.",
              "fileExtsImage": "Obsługiwane typy plików: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Obsługiwane typy plików: png, jpg, gif, bmp, mp3.",
              "maxSize": "Maksymalnie 10 MB na plik."
            },
            "filterAndSort": {
              "webmap": "mapa internetowa",
              "webscene": "Scena internetowa",
              "image": "Obraz",
              "audio": "Audio",
              "date": "Data",
              "sortByDate": "Sortuj wg daty",
              "title": "Tytuł",
              "sortByTitle": "Sortuj wg tytułu",
              "views": "Liczba wyświetleń",
              "search": "Szukaj według słowa kluczowego lub identyfikatora"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Edytuj mapę",
      "unauthorizedDomain": "Nie znajdujesz się w domenie, która jest autoryzowana do korzystania z edytora map",
      "loading": "Trwa wczytywanie edytora map. Czekaj.",
      "saving": "Trwa zapisywanie mapy",
      "success": "Mapa została zapisana",
      "cancelTitle": "Odrzucić wszystkie niezapisane zmiany?",
      "errorSave": "Nie można zapisać mapy. Spróbuj ponownie.",
      "loadFail": "Niestety, nie można wczytać edytora map",
      "close": "Zamknij",
      "save": "Zapisz",
      "confirm": "Tak, zamknij mapę",
      "deny": "Nie, nie przerywaj pracy"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Kontynuuj narrację tutaj..."
      },
      "blockAdd": {
        "text": "Tekst",
        "media": "Nośnik",
        "title": "Tytuł",
        "immersive": "Imersyjne"
      },
      "link": {
        "invite": "Wklej lub wpisz łącze..."
      },
      "color": {
        "choose": "wybierz",
        "cancel": "anuluj",
        "clear": "Wyczyść kolor"
      }
    },
    "imageGallery": {
      "addImage": "Dodaj inny obraz",
      "moveBackward": "Wstecz",
      "moveForward": "Dalej"
    },
    "cover": {
      "titlePrompt": "Wprowadź tytuł narracji...",
      "subtitlePrompt": "Przewiń w dół, aby rozpocząć, lub wprowadź opcjonalny podtytuł",
      "mediaPlaceholder": "Dodaj obraz lub film wideo",
      "saveError": "Zapisywanie nie powiodło się. Masz już element o takim tytule"
    },
    "credits": {
      "sectionInvite": "Dodaj sekcję dla udostępniających zasoby",
      "warning": "Oba pola muszą zostać wypełnione",
      "content": "Zasoby...",
      "source": "Źródło...",
      "linkPrompt": "Opcjonalne łącze...",
      "introductionPlaceholder": "Wprowadź opcjonalne wprowadzenie do sekcji dla udostępniających zasoby..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Motyw"
      },
      "panelConfig": {
        "position": "Położenie",
        "theme": "Motyw",
        "size": "Rozmiar",
        "background": "Tło",
        "layout": "Przewijanie (dla wszystkich paneli)"
      }
    },
    "title": {
      "placeholder": "Wpisz tytuł..."
    },
    "media": {
      "mediaUpload": "Trwa przesyłanie multimediów...",
      "mediaUploadSuccess": "Pomyślnie przesłano multimedia",
      "mediaUploadFail": "Przesyłanie multimediów nie powiodło się"
    },
    "controller": {
      "sectionOrganize": "Zorganizowano sekcje",
      "immersiveOrganize": "Zorganizowano widoki",
      "sectionDelete": "Usunięto sekcję",
      "viewDelete": "Usunięto widok"
    },
    "notification": {
      "cancel": "Anuluj",
      "close": "Zamknij",
      "undo": "Cofnij"
    },
    "sections": {
      "sequence": "Narracyjne",
      "immersive": "Imersyjne",
      "title": "Tytuł"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "image",
        "audio": "dźwięk",
        "webmap": "mapa",
        "webscene": "scena",
        "video": "wideo",
        "content": "zasoby",
        "webpage": "strona internetowa"
      },
      "placeholders": {
        "generic": "Te zasoby są niedostępne.",
        "deleted": "Ten element został usunięty.",
        "inaccessible": "Te zasoby są niedostępne.",
        "unauthorized": "Nie masz uprawnień do wyświetlania tych zasobów.",
        "unshared": "Ten element nie jest udostępniany w taki sam sposób jak narracja.",
        "othersUnshared": "Ten element nie jest udostępniany w taki sam sposób jak narracja.",
        "subscriptionContent": "Ta mapa zawiera warstwę subskrybenta.",
        "premiumContent": "Ta mapa zawiera warstwę premium.",
        "secureService": "Ta mapa zawiera warstwę zabezpieczoną."
      },
      "contentIssues": {
        "noAltImage": "Multimedia mogą nie działać na urządzeniu przenośnym",
        "noAltImageUnsupported": "Multimedia nieobsługiwane na urządzeniu przenośnym",
        "noAltImageWarning": "Multimedia mogą nie działać na urządzeniu przenośnym",
        "altImageBroken": "Obraz alternatywny zdefiniowany dla tego elementu multimedialnego jest niedostępny",
        "httpMedia": "Niezabezpieczone multimedia",
        "httpContent": "Niezabezpieczony zasób"
      },
      "contentWarnings": {
        "noAltImage": "Przed udostępnieniem narracji sprawdź ją na urządzeniach przenośnych. Jeżeli element multimedialny nie będzie działać prawidłowo, za pomocą przycisku poniżej można dodać obraz alternatywny, który będzie widoczny podczas wyświetlania narracji na telefonie lub tablecie.",
        "noAltImageUnsupported": "Ten element multimedialny nie będzie działać na urządzeniach przenośnych. Za pomocą przycisku poniżej można dodać obraz alternatywny, który będzie widoczny podczas wyświetlania narracji na telefonie lub tablecie.",
        "noAltImageWarning": "Przed udostępnieniem narracji sprawdź ją na urządzeniach przenośnych. Jeżeli element multimedialny nie będzie działać prawidłowo, za pomocą przycisku poniżej można dodać obraz alternatywny, który będzie widoczny podczas wyświetlania narracji na telefonie lub tablecie.",
        "noAltImageAlt": "Ten typ multimediów nie jest obsługiwany lub może nie działać prawidłowo na urządzeniach przenośnych. Na karcie Mobilne zdefiniuj obraz alternatywny, który będzie widoczny podczas wyświetlania narracji na telefonie lub tablecie."
      },
      "descriptions": {
        "httpAudioUnfixable": "Te dane audio nie obsługują protokołu HTTPS. Usuń je z narracji lub zastąp łączem.",
        "httpAudioUncheckable": "Te dane audio mają niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby spróbować użyć adresu URL HTTPS tych danych audio. Jeśli to nie zadziała, usuń dane audio z narracji lub zastąp je hiperłączem.",
        "httpAudioFixable": "Te dane audio mają niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby użyć bezpiecznego adresu URL HTTPS tych danych audio.",
        "httpWebpageUnfixable": "Ta witryna internetowa nie obsługuje protokołu HTTPS. Usuń ją z narracji lub zastąp zrzutem ekranu albo łączem.",
        "httpWebpageUncheckable": "Ta witryna internetowa ma niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby spróbować użyć adresu URL HTTPS tej witryny internetowej. Jeśli to nie zadziała, usuń witrynę internetową z narracji lub zastąp ją zrzutem ekranu albo hiperłączem.",
        "httpWebpageFixable": "Ta witryna internetowa ma niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby użyć bezpiecznego adresu URL HTTPS tej witryny internetowej.",
        "httpVideoUnfixable": "Te dane wideo nie obsługują protokołu HTTPS. Usuń je z narracji lub zastąp zrzutem ekranu albo łączem.",
        "httpVideoUncheckable": "Te dane wideo mają niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby spróbować użyć adresu URL HTTPS tych danych wideo. Jeśli to nie zadziała, usuń dane wideo z narracji lub zastąp je zrzutem ekranu albo hiperłączem.",
        "httpVideoFixable": "Te dane wideo mają niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby użyć bezpiecznego adresu URL HTTPS tych danych wideo.",
        "httpImageUnfixable": "Ten obraz nie obsługuje protokołu HTTPS. Usuń go z narracji lub zastąp łączem.",
        "httpImageUncheckable": "Ten obraz ma niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby spróbować użyć adresu URL HTTPS tego obrazu. Jeśli to nie zadziała, usuń obraz z narracji lub zastąp go hiperłączem.",
        "httpImageFixable": "Ten obraz ma niezabezpieczony adres URL (HTTP). Kliknij poniższy przycisk, aby użyć bezpiecznego adresu URL HTTPS tego obrazu.",
        "httpLayer": "Ta warstwa ma niezabezpieczony adres URL (HTTP).",
        "inaccessibleLogo": "Ten logotyp jest niedostępny. Zastąp go innym obrazem.",
        "httpLogoUnfixable": "Ten logotyp nie obsługuje protokołu HTTPS. Zastąp go innym obrazem.",
        "httpLogoFixable": "Ten logotyp ma niezabezpieczony adres URL (HTTP). Użyj adresu URL HTTPS logotypu.",
        "httpLogoUncheckable": "Ten logotyp ma niezabezpieczony adres URL (HTTP). Użyj adresu URL HTTPS logotypu lub zastąp go innym obrazem."
      },
      "tooltips": {
        "httpAudioFixable": "Kliknij przycisk, aby użyć bezpiecznego adresu URL HTTPS tych danych audio.",
        "httpAudioUncheckable": "Spróbuj użyć bezpiecznego adresu URL HTTPS tych danych audio. Jeśli to nie zadziała, usuń dane audio z narracji lub zastąp je łączem.",
        "httpWebpageFixable": "Kliknij przycisk, aby użyć bezpiecznego adresu URL HTTPS tej witryny internetowej.",
        "httpWebpageUncheckable": "Spróbuj użyć adresu URL HTTPS tej witryny internetowej. Jeśli to nie zadziała, usuń witrynę internetową z narracji lub zastąp ją zrzutem ekranu albo łączem.",
        "httpVideoFixable": "Kliknij przycisk, aby użyć bezpiecznego adresu URL HTTPS tych danych wideo.",
        "httpVideoUncheckable": "Spróbuj użyć bezpiecznego adresu URL HTTPS tych danych wideo. Jeśli to nie zadziała, usuń dane wideo z narracji lub zastąp je zrzutem ekranu albo łączem.",
        "httpImageFixable": "Kliknij przycisk, aby użyć bezpiecznego adresu URL HTTPS tego obrazu.",
        "httpImageUncheckable": "Spróbuj użyć bezpiecznego adresu URL HTTPS tego obrazu. Jeśli to nie zadziała, usuń obraz z narracji lub zastąp go łączem.",
        "httpLayerMyMap": "Odwiedź stronę elementów mapy, aby zaktualizować tę warstwę do użycia protokołu HTTPS. Jeśli nie można zaktualizować warstwy, usuń ją z mapy.",
        "httpLayerNotMyMap": "Utwórz kopię mapy i zaktualizuj tę warstwę do wersji wykorzystującej protokół HTTPS. Jeśli nie można zaktualizować warstwy, usuń ją z mapy.",
        "clickLearnMore": "Kliknij, aby dowiedzieć się więcej."
      },
      "fixButtons": {
        "agolItemPage": "Strona elementów",
        "openTheMap": "Otwórz mapę",
        "updateAudio": "Napraw adres URL danych audio",
        "updateWebpages": "Napraw adres URL witryny internetowej",
        "updateVideos": "Napraw adres URL danych wideo",
        "updateImages": "Napraw adres URL obrazu"
      },
      "mapIssues": {
        "fixButton": "Rozwiąż problemy",
        "nofixButton": "Problemy",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Zasoby nieudostępnione",
          "othersUnshared": "Zasoby nieudostępnione innej osoby",
          "subscriptionContent": "Zasoby posiadaczy subskrypcji",
          "premiumContent": "Zasoby Premium",
          "secureContent": "Zasoby zabezpieczone",
          "deleted": "Zasoby usunięte",
          "inaccessible": "Zasoby niedostępne",
          "unauthorized": "Zasoby nieautoryzowane"
        },
        "descriptions": {
          "unshared": "Te zasoby nie są udostępniane w taki sam sposób jak narracja.",
          "othersUnshared": "Te zasoby należą do innej osoby i nie są udostępniane w taki sam sposób jak narracja.",
          "othersUnsharedAuthorized": "Te zasoby należą do innej osoby, ale masz uprawnienia do ich udostępniania.",
          "inaccessible": "Te zasoby są niedostępne.",
          "deleted": "Te zasoby zostały usunięte.",
          "unauthorized": "Nie masz uprawnień do wyświetlania tych zasobów.",
          "popupFeatureLayer": "Okna podręczne warstwy kafelkowej pochodzą z warstwy obiektowej, która nie jest udostępniana w taki sam sposób jak narracja.",
          "subscriptionContent": "Musisz autoryzować zasoby posiadaczy subskrypcji do użytku publicznego.",
          "premiumContent": "Musisz autoryzować zasoby premium do użytku publicznego.",
          "secureService": "Zasoby zabezpieczone nie są dostępne dla czytelników.",
          "missingItemWarning": "Usunięto element powiązany z tą warstwą."
        },
        "tooltips": {
          "unshared": "Kliknij, aby dowiedzieć się więcej na temat udostępniania.",
          "othersUnshared": "Nie masz uprawnień do udostępniania zasobów należących do innych osób. Poproś właściciela o ich udostępnienie, usuń mapę ze swojej narracji lub edytuj mapę w celu usunięcia warstw należących do innych. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "inaccessible": "Usuń tę mapę ze swojej narracji lub edytuj ją, aby usunąć niedostępne warstwy. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "deleted": "Usuń tę mapę ze swojej narracji lub edytuj ją, aby usunąć brakujące warstwy. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "unauthorized": "Usuń tę mapę ze swojej narracji lub edytuj ją, aby usunąć nieautoryzowane warstwy. Kliknij, aby dowiedzieć się więcej na temat edytowania map.",
          "popupFeatureLayer": "Okna podręczne warstwy kafelkowej pochodzą z warstwy obiektowej, która nie jest udostępniana w taki sam sposób jak narracja.",
          "subscriptionContent": "Zasoby posiadaczy subskrypcji nie wykorzystują kredytów. Kliknij, aby dowiedzieć się więcej.",
          "premiumContent": "Kredyty zostaną naliczone dla instytucji za każdym razem, gdy ktoś wyświetli warstwę premium Twojej narracji. Kliknij, aby dowiedzieć się więcej.",
          "secureService": "Usuń zasoby zabezpieczone z narracji lub kliknij, aby dowiedzieć się, jak autoryzować zasoby zabezpieczone w celu użycia ich przez inne osoby.",
          "missingItemWarning": "Ta warstwa nadal działa, ale jej symbole, okna podręczne lub nazwa mogły zostać zmienione. Potwierdź, że warstwa wygląda zgodnie z oczekiwaniami, lub usuń ją z narracji."
        },
        "fixButtons": {
          "share": "Udostępnianie",
          "hide": "Ukryj",
          "authorize": "Autoryzuj",
          "remove": "Usuń",
          "help": "Uzyskaj pomoc",
          "ignore": "Ignoruj",
          "confirm": "Potwierdź",
          "edit": "Edytuj mapę"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Niektóre mapy i warstwy zostały również udostępnione.",
          "alsoSharedMaps": "Niektóre mapy zostały również udostępnione.",
          "alsoSharedLayers": "Niektóre warstwy zostały również udostępnione.",
          "sharedOthersContent": "Użyto uprawnień administracyjnych w celu udostępnienia zasobów należących do innej osoby."
        }
      },
      "storyHealth": {
        "healthy": "Brak problemów",
        "notHealthy": "Rozwiąż problemy",
        "warnings": "Zobacz ostrzeżenia"
      }
    },
    "saveErrorSocial": {
      "title": "Udostępnianie w serwisach społecznościowych",
      "panel1": "Wygląd narracji w serwisach społecznościowych może być niepoprawny, ponieważ tytuł elementu aplikacji internetowej ArcGIS jest inny niż tytuł narracji.",
      "panel1tooltip": "Po zdefiniowaniu tytułu, podsumowania i obrazu miniatury, narracja będzie wyglądała następująco:",
      "panel2": "Którego tytułu chcesz używać w serwisach społecznościowych:",
      "panel2q1": "Tytuł narracji (zalecane)",
      "panel2q1tooltip": "Po wybraniu tej opcji tytuł elementu zostanie zmodyfikowany zgodnie z tytułem narracji, a dodatkowe zmiany w kreatorze zostaną zsynchronizowane.",
      "panel2q2": "Tytuł elementu",
      "panel3": "Aby dodatkowo poprawić wygląd narracji w serwisach społecznościowych, użyj karty ${MYSTORIES} w celu dodania podsumowania i obrazu miniatury.",
      "panel4": "Nie ostrzegaj ponownie dla tej narracji",
      "save": "Zapisz",
      "mystories": "Moje narracje"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Istotny komunikat dotyczący bezpieczeństwa internetowego i aplikacji Story Maps (Mapy narracyjne)",
      "s1h1": "Firma Esri rozbudowuje zabezpieczenia map narracyjnych (Story Maps)",
      "s1p1": "Mapy narracyjne funkcjonują w Internecie i społeczność internetowa stale pracuje nad opracowaniem i zaimplementowaniem lepszych zabezpieczeń. Protokół HTTPS, który udostępnia bezpieczne połączenie dla zasobów przesyłanych przez Internet, pojawia się jako oczekiwany sposób dostępu do zasobów internetowych Większość nowoczesnych przeglądarek obecnie wyświetla komunikaty ostrzegawcze, gdy jest używany protokół HTTP, a nie HTTPS. Z uwagi na ten nowy standard zdecydowanie zaleca się stosowanie łączy HTTPS podczas tworzenia i udostępniania map narracyjnych, a także używanie tylko adresów URL odwołujących się do protokołu HTTPS podczas osadzania zasobów internetowych lub łączenia się z obrazami zawartymi na mapie narracyjnej.",
      "s1p2": "W praktyce oznacza to, że dostęp do mapy narracyjnej i jej zasobów (w tym obrazów, warstw, osadzonych aplikacji i witryn internetowych) powinien być uzyskiwany za pomocą łączy rozpoczynających się od HTTPS, a nie od HTTP. Jest to najlepsze rozwiązanie dla czytelników, ponieważ większość przeglądarek internetowych wskaże, że narracje są bezpieczne.",
      "s2h1": "Co mam zrobić?",
      "s2p1": "Firma Esri pracuje nad tym, aby niniejsza zmiana w jak najmniejszym stopniu wpływała na pracę autorów i użytkowników map narracyjnych. Obecnie w kreatorach map narracyjnych i w elemencie Moje narracje są dostępne narzędzia pomagające znaleźć niezabezpieczone zasoby (HTTP) w narracjach i przedstawiające zalecenia dotyczące sposobu odwoływania się do nich. Należy sprawdzić narracje pod kątem niezabezpieczonych zasobów i możliwie najszybciej zaktualizować je do protokołu HTTPS.",
      "action1": "Zamknij",
      "action2": "Sprawdź teraz moje narracje",
      "action3": "Dowiedz się więcej",
      "floatingNotification": "Ta narracja zawiera niezabezpieczone zasoby (HTTP). Przejrzyj te problemy i zajmij się nimi."
    }
  }
});