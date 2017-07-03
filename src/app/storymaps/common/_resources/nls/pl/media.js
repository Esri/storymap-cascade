/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Łącze do zasobów",
      "urls_short": "Połącz",
      "contentType": {
        "error": "Brak autoryzowanego zasobu multimedialnego.",
        "imageOnly": "W tej części narracji można dodać obraz.",
        "imageAndVideo": "W tej części narracji można dodać obraz lub film.",
        "imageVideoWebpage": "W tej części narracji można dodać obraz, film lub witrynę internetową."
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
          "searchAndBrowse": "Wyszukiwanie i przeglądanie zdjęć w serwisie ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Wyszukiwanie zdjęć w serwisie ${Unsplash}",
          "photoBy": "Autor zdjęcia: ${username}",
          "userLink": "Przejdź na stronę użytkownika ${username} w serwisie ${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Łącze do zasobu w Internecie",
            "imageOnly": "Łącze do zdjęcia w Internecie",
            "imageAndVideo": "Łącze do zdjęcia lub filmu w Internecie"
          },
          "linkText": {
            "imageOnly": "W powyższym polu możesz utworzyć łącza bezpośrednio do zdjęć.",
            "imageAndVideo1": "W powyższym polu możesz wkleić łącza lub kod ramki iFrame dla filmów z serwisów ${YouTube} i ${Vimeo}.",
            "imageAndVideo2": "Możesz także utworzyć łącza bezpośrednio do zdjęć.",
            "imageVideoWebpage1": "W powyższym polu możesz wkleić łącza lub kod ramki iFrame dla filmów z serwisów ${YouTube} i ${Vimeo}.",
            "imageVideoWebpage2": "Możesz także utworzyć łącza bezpośrednio do zdjęć, stron internetowych lub aplikacji internetowych.",
            "ender": "Jeśli to możliwe, używaj bezpiecznych łączy (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Wczytaj stronę przez bezpieczne połączenie (https)",
            "embedProtocolWarning1": "Jeśli ta strona nie jest wczytywana w narracji, nie można jej osadzać ze względów bezpieczeństwa internetowego.",
            "embedProtocolWarning2": "Jeśli ta strona nie jest wczytywana w narracji, wyłącz zaznaczenie tej opcji i spróbuj ponownie. Jeśli ta strona nadal nie jest wczytywana, nie można jej osadzać ze względów bezpieczeństwa internetowego.",
            "embedProtocolWarning3": "Alternatywnie można dodać w narracji łącze umożliwiające otwarcie tej strony na nowej karcie przeglądarki. ${linkText}",
            "linkText": "Dowiedz się więcej."
          },
          "placeholder": "${https://}... lub ${http://}... lub ${<iframe>}",
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
        "googlePhotos": {
          "placeholder": "Adres e-mail lub identyfikator w serwisie ${Picasa}/${Google+}",
          "helpText": "Możesz dodać do narracji zdjęcia przesłane do serwisu ${Picasa} lub ${Google+}. ${helpLinkText} na temat używania w narracji obrazów przechowywanych na koncie ${Google}.",
          "helpLinkText": "Dowiedz się więcej",
          "cannotFindUser": "Nie można znaleźć użytkownika ${username}. Spróbuj ponownie."
        },
        "unsplash": {
          "placeholder": "Wyszukaj zdjęcia",
          "aboutText": "Serwis ${Unsplash} jest obsługiwanym zbiorem starannie wybranych bezpłatnych zdjęć wysokiej jakości.",
          "copyrightText": "Wszystkie zdjęcia opublikowane w serwisie ${Unsplash} podlegają warunkom licencji ${CC0}. Więcej informacji: ${moreInfoLink}.",
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
            "or": "LUB",
            "dragAndDrop": "Upuść obrazy tutaj",
            "uploadImage": "Przeglądaj w poszukiwaniu obrazów",
            "agolInfo": "Obrazy zostaną zapisane na Twoim koncie na platformie ArcGIS i będą dostępne tylko w narracji.",
            "saveBeforeUpload": "Po zapisaniu tej narracji można w tym miejscu przesyłać obrazy na platformę ArcGIS.",
            "fileTypesImage": "Obsługiwane typy plików: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "mapa internetowa",
            "webscene": "Scena internetowa",
            "image": "Obraz",
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
  }
});