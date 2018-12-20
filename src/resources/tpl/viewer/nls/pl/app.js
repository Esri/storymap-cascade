/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Zapisz",
      "close": "Zamknij"
    },
    "errors": {
      "noConfigName": "Nie określono konfiguracji w sekcji index.html > configOptions.story",
      "configFormatError": "Nie można wczytać określonej konfiguracji z powodu błędu składni JSON.",
      "configNotFound": "Nie znaleziono określonej konfiguracji lub nie można jej wczytać z powodu błędu składni JSON.",
      "boxTitle": "Wystąpił błąd",
      "servedFromFile": "Dostęp do aplikacji musi być uzyskiwany za pośrednictwem serwera WWW. Szczegółowe informacje zawiera ${USER_GUIDE}.",
      "userGuide": "podręcznik użytkownika",
      "invalidConfig": "Nieprawidłowa konfiguracja",
      "invalidConfigNoApp": "Identyfikator aplikacji tworzenia map internetowych nie został określony w pliku index.html.",
      "invalidConfigNoAppDev": "W parametrach adresu URL nie określono identyfikatora aplikacji map internetowych (?appid=). W trybie deweloperskim konfiguracja parametru appid w pliku index.html jest ignorowana.",
      "unspecifiedConfigOwner": "Nie skonfigurowano autoryzowanego właściciela.",
      "invalidConfigOwner": "Właściciel narracji nie jest autoryzowany.",
      "invalidConfignoOAuth": "Ta narracja wymaga uwierzytelnienia. Skonfiguruj identyfikator OAuth systemu ArcGIS w pliku index.html lub udostępnij narrację publicznie.",
      "invalidApp": "Nie można wczytać tej narracji.",
      "appLoadingFail": "Wystąpił pewien problem. Nie wczytano prawidłowo kreatora {TPL_NAME}.",
      "notConfiguredDesktop": "Narracja nie została jeszcze skonfigurowana.",
      "notConfiguredMobile": "Kreator {TPL_NAME} nie jest obsługiwany dla wyświetlacza w tym rozmiarze. Jeśli to możliwe, zmień rozmiar okna przeglądarki, aby uzyskać dostęp do kreatora, lub buduj narrację na urządzeniu z większym ekranem.",
      "notConfiguredMobile2": "Aby korzystać z kreatora {TPL_NAME}, obróć urządzenie do orientacji poziomej.",
      "notAuthorized": "Nie masz uprawnień dostępu do tej narracji",
      "notAuthorizedBuilder": "Nie masz uprawnień do korzystania z kreatora {TPL_NAME}.",
      "noViewerIE": "Ta narracja nie jest obsługiwana przez przeglądarkę Internet Explorer w wersji starszej niż ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Próbujesz wyświetlić tę narrację za pomocą starszej, nieobsługiwanej przeglądarki. Niektóre funkcje mogą nie działać lub mogą wystąpić inne nieoczekiwane problemy. Zalecamy zaktualizowanie przeglądarki do programu Internet Explorer 11 lub użycie innej przeglądarki, na przykład Chrome.",
      "noViewerIE3": "Pod koniec 2017 roku ta narracja nie będzie się już wczytywała w tej przeglądarce. Do jej wyświetlenia konieczne będzie użycie obsługiwanej przeglądarki.",
      "upgradeBrowser": "Prosimy o zaktualizowanie przeglądarki",
      "mapLoadingFail": "Wystąpił pewien problem, nie wczytano mapy prawidłowo.",
      "signOut": "Wyloguj się",
      "builderSupportFirefox": "Kreator Story Map Cascade (Mapa narracyjna — Kaskada) obecnie obsługuje przeglądarkę Firefox!<br><br>Obsługa tworzenia narracji kaskadowych w przeglądarce Firefox jest obecnie w wersji beta. Wypróbuj ją i zgłoś napotkane problemy działowi ${ESRI-SUPPORT} lub ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Narracje kaskadowe można wyświetlać w każdej współczesnej przeglądarce internetowej, ale kreator Kaskada map narracyjnych jest obsługiwany tylko w przeglądarkach ${CHROME}, ${SAFARI} i ${FIREFOX}.<br><br>Jeśli chcesz, aby kreator Kaskada map narracyjnych obsługiwał inną przeglądarkę, skontaktuj się z ${ESRI-SUPPORT} lub ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Kreator Kaskada map narracyjnych nie jest obsługiwany na tablecie iPad. Utworzone i udostępnione narracje kaskadowe będą działały na tablecie iPad.",
      "launchBuilder": "Uruchamianie kreatora kaskadowego",
      "notAgain": "Nie pokazuj tego ponownie",
      "sorry": "Uwaga:"
    },
    "mobileWarning": {
      "message1": "Przeczytano mobilną wersję tej narracji. Pełną wersję z bogatszymi elementami multimedialnymi można wypróbować na komputerze stacjonarnym.",
      "email": "Wyślij wiadomość e-mail z łączem do tej narracji"
    },
    "cover": {
      "iosEmbedLink": "Naciśnij, aby przeczytać całą narrację"
    },
    "media": {
      "captionPlaceholder": "Twój podpis tutaj...",
      "loadingError": "Niestety, te zasoby są niedostępne",
      "explore": "Badaj",
      "exploreMap": "Badaj mapę",
      "exploreStop": "Zakończ badanie",
      "sceneNotSupported": "Niestety, ta mapa 3D nie jest obsługiwana na Twoim urządzeniu.",
      "loading1": "Wczytywanie...",
      "loading2": "Wczytywanie mapy...",
      "videoPlayPause": "odtwarzanie/pauza",
      "videoMuteUnmute": "wyciszenie/anulowanie wyciszenia"
    },
    "headerFromCommon": {
      "defaultTagline": "Mapa ${STORY_MAP}",
      "share": "Udostępnij lub drukuj",
      "tooltipAutoplayDisabled": "To nie jest dostępne w trybie automatycznego odtwarzania"
    },
    "shareFromCommon": {
      "copy": "Kopiuj",
      "copied": "Skopiowane",
      "open": "Otwórz",
      "embed": "Osadzono na stronie internetowej",
      "embedExplain": "Aby umieścić narrację w witrynie internetowej, skorzystaj z poniższego kodu HTML.",
      "size": "Rozmiar (szerokość/wysokość):",
      "autoplayLabel": "Tryb automatycznego odtwarzania",
      "autoplayExplain1": "W trybie automatycznego odtwarzania narracja jest prezentowana w stałym tempie. Ten tryb doskonale nadaje się do monitora kiosku internetowego lub wyświetlacza publicznego, ale należy pamiętać, że w innych sytuacjach może pogorszyć czytelność narracji. Ta funkcja nie jest obsługiwana na małych wyświetlaczach.",
      "autoplayExplain2": "Po włączeniu tego trybu udostępniane są elementy sterujące do włączania odtwarzania/wstrzymywania narracji oraz do regulacji szybkości nawigacji.",
      "linksupdated": "Zaktualizowano łącza!"
    },
    "theme": {
      "lightLabel": "Jasny",
      "darkLabel": "Ciemny"
    },
    "autoplay": {
      "speedFast": "Szybkie",
      "speedMedium": "Średnie",
      "speedSlow": "Wolne"
    },
    "bannerNotification": {
      "learnMore": "Dowiedz się więcej",
      "close": "Zamknij",
      "dontShowAgain": "Nie pokazuj tej wiadomości ponownie"
    },
    "embedBar": {
      "share": "Udostępnij",
      "fullScreen": "Pełny ekran",
      "exitFullScreen": "Opuść tryb pełnoekranowy",
      "enlarge": "Powiększ",
      "newTab": "Otwórz w nowej karcie",
      "tagline": "Mapa narracyjna",
      "twitter": "Udostępnij na Twitterze",
      "facebook": "Udostępnij na Facebooku"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Zaczekaj na wczytanie całej narracji przed wydrukowaniem",
      "printNotes": "Jeśli strona wolno się wczytuje lub jakieś dane multimedialne nie są wyświetlane, spróbuj zastąpić multimedia na żywo obrazami lub wydrukować węższy zakres sekcji. Aby uzyskać najlepsze efekty, można włączyć drukowanie elementów tła w ustawieniach wydruku przeglądarki.",
      "printOptions": "Opcje",
      "makeTextBlack": "Ustaw cały tekst jako czarny",
      "showLinks": "Pokaż adresy URL łączy",
      "useAltMedia": "Zastąp multimedia na żywo obrazami, jeśli są dostępne",
      "pageBreaks": "Zacznij każdą sekcję na nowej stronie",
      "printRange": "Drukuj część tej narracji",
      "sectionStart": "Sekcje:",
      "go": "Zastosuj",
      "reset": "Przywróć całą narrację",
      "print": "Drukuj"
    },
    "page": {
      "appTagline": "Ta narracja została utworzona za pomocą ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Story Map Cascade (Mapa narracyjna — Kaskada) firmy Esri",
      "readItOnline": "Czytaj ją w Internecie pod adresem ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Sekcja ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Witryna:",
      "videoLabel": "Wideo:",
      "audioLabel": "Audio:"
    },
    "licenseChange2018": {
      "noAccess": "Twoje konto (%USER_NAME%) nie jest licencjonowane do otwierania mapy narracyjnej, która nie jest publiczna. Poproś administratora instytucji o przypisanie typu użytkownika, który obejmuje licencję na mapy narracyjne lub licencję na kluczowe aplikacje dodatkowe."
    }
  }
});