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
      "builderSupport1": "Story Map Cascade oluşturucu yalnızca ${CHROME} ve ${SAFARI} tarayıcıları tarafından desteklenir. Ancak, oluşturucu ile hazırladığınız Cascade hikayeleri bu tarayıcılar, Internet Explorer 11+ ve Firefox tarafından görüntülenebilir.",
      "builderSupport2": "Story Map Cascade oluşturucu iPad cihazında desteklenmez. Oluşturduğunuz ve paylaştığınız Cascade hikayeleri iPad üzerinde çalışır.",
      "builderSupport3": "Cascade hikayeleri Chrome, Safari, Firefox ve Internet Explorer 11+ tarayıcılarında görüntülenebilir, ancak Story Map Cascade oluşturucu yalnızca ${CHROME} ve ${SAFARI} tarafından desteklenir.",
      "builderSupport4": "Cascade hikayeleri her modern tarayıcıda görüntülenebilir, ancak Story Map Cascade oluşturucu yalnızca ${CHROME} ve ${SAFARI} tarafından desteklenir.<br><br>Cascade oluşturucunun farklı bir tarayıcıyı desteklemesi gerekiyorsa, ${ESRI-SUPPORT} veya ${BROWSER-SUPPORT-VOTE} ile iletişim kurun.",
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
      "share": "Paylaş",
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
    }
  }
});