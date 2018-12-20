/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Kaydet",
      "close": "Kapat"
    },
    "errors": {
      "noConfigName": "Yapılandırma belirtilmemiş: index.html > configOptions.story",
      "configFormatError": "Bir JSON sözdizimi hatası nedeniyle belirtilen yapılandırma yüklenemedi.",
      "configNotFound": "Bir JSON sözdizimi hatası nedeniyle belirtilen yapılandırma bulunamadı veya yüklenemedi.",
      "boxTitle": "Bir hata oluştu",
      "servedFromFile": "Uygulamaya bir web sunucusu üzerinden erişilmesi gerekir. Ayrıntılar için bkz. ${USER_GUIDE}.",
      "userGuide": "Kullanıcı kılavuzu",
      "invalidConfig": "Geçersiz yapılandırma",
      "invalidConfigNoApp": "Web Mapping Application tanımlayıcısı index.html dosyasında tanımlı değil.",
      "invalidConfigNoAppDev": "Web Haritalama Uygulaması belirteci URL parametrelerinde (?appid=) belirtilmiştir. Geliştirme modunda index.html dosyasındaki appid yapılandırması yoksayılır.",
      "unspecifiedConfigOwner": "Yetkili sahip yapılandırılmamış.",
      "invalidConfigOwner": "Hikaye sahibi yetkilendirilmemiş.",
      "invalidConfignoOAuth": "Bu hikaye için kimlik doğrulaması gerekir, index.html içinde bir ArcGIS OAuth ID yapılandırın veya hikayeyi genel yapın.",
      "invalidApp": "Bu hikaye yüklenemiyor.",
      "appLoadingFail": "Hata oluştu, {TPL_NAME} düzgün yüklenmedi.",
      "notConfiguredDesktop": "Hikaye henüz yapılandırılmadı.",
      "notConfiguredMobile": "{TPL_NAME} oluşturucu, bu ekran boyutunda desteklenmez. Mümkünse, oluşturucu erişimi için tarayıcınızı yeniden boyutlandırın veya hikayenizi daha büyük ekranı olan bir cihazda oluşturun.",
      "notConfiguredMobile2": "Cihazınızı yatay konuma döndürerek {TPL_NAME} oluşturucuyu kullanın.",
      "notAuthorized": "Bu hikayeye erişme yetkiniz yok",
      "notAuthorizedBuilder": "{TPL_NAME} oluşturucuyu kullanma yetkiniz yok.",
      "noViewerIE": "Bu hikaye ${VERSION} öncesindeki Internet Explorer sürümlerinde desteklenmez. ${UPGRADE}.",
      "noViewerIE2": "Bu hikayeyi daha eski ve desteklenmeyen bir tarayıcı kullanarak görüntülemeye çalışıyorsunuz. Çalışmayan özellikler olabilir veya başka beklenmedik sorunlarla karşılaşılabilir. Internet Explorer 11 sürümüne yükseltme yapmanız veya Chrome gibi başka bir tarayıcı kullanmanız önerilir.",
      "noViewerIE3": "2017’nin sonuna doğru bu hikaye artık bu tarayıcıda yüklenemeyecek. Hikayeyi o zaman görüntülemek için desteklenen bir tarayıcı kullanmanız gerekecek.",
      "upgradeBrowser": "Tarayıcınızı güncelleyin",
      "mapLoadingFail": "Hata oluştu, harita düzgün şekilde yüklenmedi.",
      "signOut": "Oturumu Kapat",
      "builderSupportFirefox": "Story Map Cascade oluşturucu artık Firefox'u destekliyor!<br><br>Firefox'ta Cascade hikayelerini yazma desteği beta'da mevcut durumda. Lütfen deneyin ve varsa sorunları ${ESRI-SUPPORT} veya ${ESRI-COMMUNITY} ile iletişim kurun.",
      "builderSupportOther": "Cascade hikayeleri herhangi bir modern web tarayıcısında görüntülenebilir, ancak Story Map Cascade oluşturucu yalnızca ${CHROME}, ${SAFARI} ve ${FIREFOX} tarafından desteklenir.<br><br>Farklı bir tarayıcıyı desteklemek için Cascade oluşturucuya ihtiyacınız varsa, lütfen ${ESRI-SUPPORT} veya ${BROWSER-SUPPORT-VOTE} ile iletişime geçin.",
      "builderSupportIpad": "Story Map Cascade oluşturucu iPad cihazında desteklenmez. Oluşturduğunuz ve paylaştığınız Cascade hikayeleri iPad üzerinde çalışır.",
      "launchBuilder": "Cascade oluşturucuyu başlat",
      "notAgain": "Bunu tekrar gösterme",
      "sorry": "Dikkat:"
    },
    "mobileWarning": {
      "message1": "Bu hikayenin mobil sürümünü okudunuz. Daha zengin medya öğeleri içeren tam sürüm için hikayeyi bir masaüstü bilgisayarda görüntüleyin.",
      "email": "Hikaye bağlantısını e-posta ile gönder"
    },
    "cover": {
      "iosEmbedLink": "Hikayenin tamamını okumak için dokunun"
    },
    "media": {
      "captionPlaceholder": "Resim yazınız buraya gelir...",
      "loadingError": "Üzgünüz, bu içeriğe erişilemiyor",
      "explore": "Keşfet",
      "exploreMap": "Haritayı Keşfedin",
      "exploreStop": "Keşfetmeyi Durdur",
      "sceneNotSupported": "Üzgünüz, bu 3D harita cihazınızda desteklenmiyor.",
      "loading1": "Yükleniyor...",
      "loading2": "Harita yükleniyor...",
      "videoPlayPause": "oynat/duraklat",
      "videoMuteUnmute": "ses kapalı/ses açık"
    },
    "headerFromCommon": {
      "defaultTagline": "Bir ${STORY_MAP}",
      "share": "Paylaş veya yazdır",
      "tooltipAutoplayDisabled": "Bu özellik otomatik oynatma modunda kullanılamaz"
    },
    "shareFromCommon": {
      "copy": "Kopyala",
      "copied": "Kopyalandı",
      "open": "Aç",
      "embed": "Web sayfasının içine yerleştir",
      "embedExplain": "Hikayeyi bir web sayfasının içine yerleştirmek için aşağıdaki HTML kodunu kullanın.",
      "size": "Boyut (genişlik/yükseklik):",
      "autoplayLabel": "Otomatik oynatma modu",
      "autoplayExplain1": "Otomatik oynatma modu düzenli aralıklarla hikayenizde ilerler. Bu özellik, bir kiosk ya da genel ekran için idealdir, ancak bunun bazı durumlarda hikayenin okunmasını güçleştirebileceğini unutmayın. Bu özellik küçük ekranlarda desteklenmez.",
      "autoplayExplain2": "Bu etkin durumdayken hikayeyi oynatacak/duraklatacak ve gezinme hızını ayarlayacak kontroller vardır.",
      "linksupdated": "Bağlantılar güncellendi!"
    },
    "theme": {
      "lightLabel": "Açık",
      "darkLabel": "Koyu"
    },
    "autoplay": {
      "speedFast": "Hızlı",
      "speedMedium": "Orta",
      "speedSlow": "Yavaş"
    },
    "bannerNotification": {
      "learnMore": "Daha Fazla Bilgi",
      "close": "Kapat",
      "dontShowAgain": "Bu iletiyi tekrar gösterme"
    },
    "embedBar": {
      "share": "Paylaş",
      "fullScreen": "Tam ekran",
      "exitFullScreen": "Tam ekrandan çık",
      "enlarge": "Genişlet",
      "newTab": "Yeni sekmede aç",
      "tagline": "Bir Hikaye Haritası",
      "twitter": "Twitter'da Paylaş",
      "facebook": "Facebook'ta Paylaş"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Lütfen yazdırmadan önce tüm hikayenin yüklenmesini bekleyin",
      "printNotes": "Bu sayfa yavaş yükleniyorsa veya bazı ortamlar görünmüyorsa, canlı ortamı görüntülerle değiştirmeyi veya daha küçük bir bölüm aralığını yazdırmayı deneyin. En iyi sonuçlar için tarayıcınızın yazdırma ayarlarından arka plan öğelerinin yazdırılmasını etkinleştirmeniz gerekebilir.",
      "printOptions": "Seçenekler",
      "makeTextBlack": "Metnin tamamını siyah yap",
      "showLinks": "Bağlantı URL'lerini göster",
      "useAltMedia": "Canlı ortamı varsa görüntülerle değiştirin",
      "pageBreaks": "Her bölümü yeni sayfada başlat",
      "printRange": "Bu hikayenin bir kısmını yazdır",
      "sectionStart": "Bölümler:",
      "go": "Uygula",
      "reset": "Tüm hikayeyi sıfırla",
      "print": "Yazdır"
    },
    "page": {
      "appTagline": "Bu hikaye ${CASCADE_LINK_TEXT} ile yapıldı.",
      "cascadeLinkText": "Esri Story Map Cascade",
      "readItOnline": "Web'de ${STORY_URL} bağlantısından okuyun."
    },
    "sections": {
      "sectionLabel": "Bölüm ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Web Sitesi:",
      "videoLabel": "Video:",
      "audioLabel": "Ses:"
    },
    "licenseChange2018": {
      "noAccess": "Hesabınız (%USER_NAME%) herkese açık olmayan bir Hikaye Haritasını açmak için lisanslandırılmamış. Lütfen kuruluş yöneticinizden Hikaye Haritaları veya eklenti Temel Uygulamalar lisansı içeren bir kullanıcı türü atamasını isteyin."
    }
  }
});