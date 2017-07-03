/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Uygula",
      "close": "Kapat"
    },
    "header": {
      "sharingNotAvailable": "Hikayeyi paylaşana kadar bunu kullanamazsınız",
      "edit": "Düzenle"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Yer işaretleri",
        "logoSharing": "Logo ve Paylaşım",
        "theme": "Görünüm"
      },
      "bookmarks": {
        "title": "Bölüm",
        "bookmark": "Yer İşareti",
        "intro": "Yer işaretleri başlıkta gösterilen hikaye bölümlerine giden bağlantılardır. Hikayenizin ana bölümleri için doğru yer işaretleri oluşturma okuyucularınıza kolaylık sağlar.",
        "sequentialDefault": "Açıklama bölümü (metin yok)",
        "immersiveDefault": "Ayrıntılı bölüm (metin bulunmaz)",
        "titleDefault": "Başlık bölümü (metin bulunmaz)",
        "coverDefault": "Kapak bölümü (metin bulunmaz)",
        "coverAppendage": "(Kapak)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "${ESRI} Logosunu Kullan",
        "useOrgLogo": "Kuruluşumun logosunu kullan",
        "useOrgLogoHelp": "Yöneticinizin verdiği logoyu kullanın",
        "logoLink": "Logo bağlantısı",
        "logoUploadProgress": "Logo yükleme sürüyor",
        "logoUploadSuccess": "Logo başarıyla yüklendi",
        "logoUploadError": "Logo yüklenemedi, ${ESRI} logosuna geçiş yapılıyor",
        "customHeaderText": "Etiket satırı",
        "taglineLinkDisabledTooltip": "Bağlantıyı etkinleştirmek için bir etiket satırı girin",
        "link": "Etiket satırı bağlantısı",
        "enableSocialSharing": "Paylaşım düğmesini görüntüle"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Yazı Tipleri",
        "previewLabel": "Önizleme",
        "fontsTitleLabel": "Başlıklar",
        "fontsBodyLabel": "Gövde",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Kapak",
      "creditsLabel": "Katkı Yapanlar",
      "betaFeedback": "Geri Bildirim",
      "betaNote": "${APP_NAME} hakkında ne düşündüğünüzü ya da beklediğiniz gibi çalışmayan bir öğe olup olmadığını bizimle paylaşın.",
      "notSharedNote": "Hikayeniz paylaşılmamış, onu yalnızca siz görebilirsiniz",
      "organizationWarning": "Bu hikayenin başkaları tarafından da görüntülenmesini sağlamak için içindeki sahneleri, sahne katmanlarını ve kuruluşunuzda yerleşik uygulamaları da paylaşmanız gerekir. Haritalar ve harita katmanları otomatik olarak paylaşılır.",
      "publicWarning": "Bu hikayenin başkaları tarafından da görüntülenmesini sağlamak için içindeki sahneleri, sahne katmanlarını ve yerleşik uygulamaları da herkesle paylaşmanız gerekir. Haritalar ve harita katmanları otomatik olarak paylaşılır.",
      "addTitleNote": "Kaydetmek için kapağa bir başlık ekleyin",
      "saveError": "Hikayeniz kaydedilirken bir hata oluştu.",
      "duplicate": "Çoğalt",
      "organize": "Düzenle",
      "done": "Bitti",
      "invite": "Hikayenizi oluştururken bölümler burada görüntülenir...",
      "mystoriestooltip": "Cascade Builder hikayenizdeki sorunlar hakkında sizi uyarır ve bunları çözmenize yardım eder. Görünümler ve yerleşik uygulamalar denetlenmez, bu nedenle bunları manuel olarak denetleyin."
    },
    "immersiveViewPanel": {
      "transition": "Geçiş",
      "fade": "Sönümle",
      "fadeSlow": "Yavaş Sönümle",
      "swipeVertical": "Dikey Kaydır",
      "swipeHorizontal": "Yatay Kaydır",
      "none": "Yok",
      "disabledConsecutiveSameMedia": "Ardışık görünümler aynı medyayı kullandığında kullanılamaz",
      "disabledTooltipMap": "Bu geçişin kullanılabilmesi için her iki görünümdeki görünür katmanların farklı ve diğer harita özelliklerinin aynı olması gerekir",
      "disabledConsecutiveSameMap": "Ardışık görünümler aynı haritayı kullandığında kullanılamaz",
      "disabledNotInBeta": "Ardışık görünümler aynı haritayı kullandığında kullanılamaz",
      "disabledNonConsecutive": "Bu medyanın ardışık olmayan başka bir örneği olduğu için kullanılamıyor",
      "addMedia": "Medya ekle",
      "invite": "Ayrıntılı bölümünüzü oluştururken görünümler burada görüntülenir..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Görünüm",
        "manage": "Yönet",
        "size": "Boyut",
        "background": "Arka Plan",
        "mobile": "Mobil",
        "issues": "Sorunlar",
        "fixIssues": "Sorunları Gider"
      },
      "manage": {
        "changeMedia": "Medyayı değiştir",
        "edit": "Düzenle",
        "editAside": "Yeni bir tarayıcı penceresinde açılır. Düzeltmelerinizi kaydettikten sonra değişikliklerinizi görmek için bu hikayeyi kaydedin ve yeniden yükleyin.",
        "remove": "Kaldır"
      },
      "appearance": {
        "homeView": "Başlangıç görünümü",
        "audio": "Ses",
        "on": "Açık",
        "muted": "Sessiz",
        "volumeAside": "Bir okuyucu bu görünüme geldiğinde video otomatik olarak oynatılır. Sesi kapatırsanız, okuyucu sesi yeniden açamaz.",
        "view": "Görüntüle",
        "resetLocation": "Konumu Sıfırla",
        "resetLayers": "Katmanları Sıfırla",
        "clearPopup": "Açılır Pencereyi Sil",
        "interaction": "Etkileşim",
        "interactionDisabled": "Etkileşim Devre Dışı",
        "buttonToEnable": "Etkinleştirme Düğmesi",
        "interactionEnabled": "Etkileşim Devrede",
        "interactionAside": "*Dokunmatik cihazlarda bir etkileşim düğmesi gösterilir.",
        "slide": "Slayt",
        "noSlides": "Kullanılabilir slayt yok.",
        "mapExtentPrompt": "Hikayenizi anlatmak için haritayı güncelleyin, değişiklikleri kaydetmek için onay işaretine tıklayın"
      },
      "sectionAppearance": {
        "layout": "Düzen",
        "theme": "Tema"
      },
      "size": {
        "small": "Küçük",
        "medium": "Orta",
        "large": "Büyük",
        "noCrop": "Büyük resimleri kırpma",
        "noCropTallTooltip": "Büyük bir resmin kırpılmaması, resmin tamamını görmek için ekran kaydırmak zorunda kalan okuyucular üzerinde olumsuz etki yapabilir."
      },
      "background": {
        "noCrop": "Kırpmadan bırak",
        "mostImportantPart": "En önemli noktayı seçin",
        "cropExplanationImmersive": "Farklı ekran boyutlarında görüntünün kırpılma biçimini belirlemek için görüntü üzerinde bir nokta seçin. Seçtiğiniz nokta her zaman için görünür olur. Ortamınızın tam olarak görünür olması gerekiyorsa ‘Kırpmadan Bırak’ kutusunu işaretleyin.",
        "cropExplanation": "Farklı ekran boyutlarında görüntünün kırpılma biçimini belirlemek için görüntü üzerinde bir nokta seçin. Seçtiğiniz nokta her zaman için görünür olur.",
        "color": "Renkli",
        "previews": "Önizlemeler"
      },
      "altMedia": {
        "alternativeMedia": "Alternatif Ortam",
        "explanation": "Bazı ortamlar mobil cihazlarda desteklenmez veya düzgün çalışmayabilir. Bu paneli kullanarak hikayeniz bir telefonda veya tablette görüntülendiğinde bu ortamın yerine gösterilecek alternatif ve daha kullanıcı dostu bir öge belirleyebilirsiniz.",
        "changeAltImage": "Görüntüyü değiştir",
        "uploadAltImage": "Görüntü ekle"
      }
    },
    "imageGallery": {
      "addImage": "Başka bir görüntü ekle",
      "moveBackward": "Geriye doğru taşı",
      "moveForward": "İleri doğru taşı"
    },
    "cover": {
      "titlePrompt": "Hikaye başlığınızı girin...",
      "subtitlePrompt": "Başlamak için aşağı kaydırın veya isteğe bağlı bir altyazı girin",
      "mediaPlaceholder": "Görüntünüzü veya videonuzu ekleyin",
      "saveError": "Kaydetme başarısız oldu, bu başlığa sahip bir öğeniz zaten var"
    },
    "credits": {
      "sectionInvite": "Krediler bölümü ekleyin",
      "warning": "Her iki alanın da doldurulması gerekir",
      "content": "İçerik...",
      "source": "Kaynak...",
      "linkPrompt": "İsteğe bağlı bağlantı...",
      "introductionPlaceholder": "Krediler bölümünüze isteğe bağlı bir giriş ekleyin..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Konum",
        "theme": "Tema",
        "size": "Boyut",
        "background": "Arka Plan",
        "layout": "Kaydırma (tüm panolar için)"
      }
    },
    "title": {
      "placeholder": "Bir başlık girin..."
    },
    "media": {
      "imageUpload": "Görüntü yükleme sürüyor...",
      "imageUploadSuccess": "Görüntüler başarıyla yüklendi",
      "imageUploadFail": "Görüntü yüklenemedi"
    },
    "controller": {
      "sectionOrganize": "Bölümleri düzenlediniz",
      "immersiveOrganize": "Görünümleri düzenlediniz",
      "sectionDelete": "Bir bölüm sildiniz",
      "viewDelete": "Bir görüntü sildiniz"
    },
    "notification": {
      "cancel": "İptal",
      "close": "Kapat",
      "undo": "Geri Al"
    },
    "sections": {
      "sequence": "Açıklama",
      "immersive": "Ayrıntılar",
      "title": "Başlık"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "görüntü",
        "webmap": "harita",
        "webscene": "sahne",
        "video": "görüntü",
        "content": "içerik",
        "webpage": "web sayfası"
      },
      "placeholders": {
        "generic": "Bu içeriğe erişilemiyor.",
        "deleted": "Bu öge silinmiş.",
        "inaccessible": "Bu içeriğe erişilemiyor.",
        "unauthorized": "Bu içeriği görüntüleme yetkiniz yok.",
        "unshared": "Bu öge hikayenizle aynı biçimde paylaşılmıyor.",
        "othersUnshared": "Bu öge hikayenizle aynı biçimde paylaşılmıyor.",
        "subscriptionContent": "Bu haritada bir abone katmanı var.",
        "premiumContent": "Bu haritada bir premium katmanı var.",
        "secureService": "Bu haritada güvenli bir katman var."
      },
      "contentIssues": {
        "noAltImage": "Ortam Mobil Cihazlarda Desteklenmiyor",
        "altImageBroken": "Bu medya ortamı için tanımlanan alternatif görüntü erişilebilir değil"
      },
      "contentWarnings": {
        "noAltImage": "Bu ortam türü mobil cihazlarda desteklenmiyor. Hikaye mobil cihazlarda görüntülendiğinde gösterilecek alternatif bir görüntü sağlayın.",
        "noAltImageAlt": "Bu ortam türü mobil cihazlarda desteklenmiyor. Mobil sekmesinden hikaye mobil cihazlarda görüntülendiğinde gösterilecek alternatif bir görüntü sağlayın."
      },
      "mapIssues": {
        "fixButton": "Sorunları Gider",
        "nofixButton": "Sorunlar",
        "mapLabel": "Harita:",
        "summaries": {
          "unshared": "Paylaşılmayan İçerik",
          "othersUnshared": "Başkasının Paylaşılmamış İçeriği",
          "subscriptionContent": "Abone İçeriği",
          "premiumContent": "Ayrıcalıklı İçerik",
          "secureContent": "Güvenli İçerik",
          "deleted": "Silinen İçerik",
          "inaccessible": "Erişilemeyen İçerik",
          "unauthorized": "Yetkisiz İçerik"
        },
        "descriptions": {
          "unshared": "Bu içerik hikayenizle aynı biçimde paylaşılmıyor.",
          "othersUnshared": "Bu içerik başka birisine ait ve hikayenizle aynı biçimde paylaşılmıyor.",
          "othersUnsharedAuthorized": "Bu içerik başka birisine ait, ancak onu paylaştırma yetkiniz var.",
          "inaccessible": "Bu içeriğe erişilemiyor.",
          "deleted": "Bu içerik silinmiş.",
          "unauthorized": "Bu içeriği görüntüleme yetkiniz yok.",
          "popupFeatureLayer": "Döşenmiş bir katmanın açılan menüleri, hikayenizle aynı biçimde paylaştırılmamış olan bir detay katmanından geliyor.",
          "subscriptionContent": "Abone içeriğini genel kullanım için yetkilendirmelisiniz.",
          "premiumContent": "Ayrıcalıklı içeriği genel kullanım için yetkilendirmelisiniz.",
          "secureService": "Okuyucularınızın güvenli içerik erişimi yok.",
          "missingItemWarning": "Bu katmanla ilişkilendirilmiş olan öğe silinmiş."
        },
        "tooltips": {
          "unshared": "Paylaşım hakkında daha fazla bilgi edinmek için tıklayın.",
          "othersUnshared": "Başkalarının sahip olduğu içeriği paylaşma izniniz yok. İçerik sahibinden paylaştırmasını isteyin, haritayı hikayenizden kaldırın veya sizin olmayan katmanları kaldırmak üzere haritayı düzenleyin. Haritaları düzenleme hakkında daha fazla bilgi edinmek için tıklayın.",
          "inaccessible": "Bu haritayı hikayenizden kaldırın veya erişilemeyen katmanları kaldırmak için düzenleyin. Haritaları düzenleme hakkında daha fazla bilgi edinmek için tıklayın.",
          "deleted": "Bu haritayı hikayenizden kaldırın veya eksik katmanları kaldırmak için düzenleyin. Haritaları düzenleme hakkında daha fazla bilgi edinmek için tıklayın.",
          "unauthorized": "Bu haritayı hikayenizden kaldırın veya yetkisiz katmanları kaldırmak için düzenleyin. Haritaları düzenleme hakkında daha fazla bilgi edinmek için tıklayın.",
          "popupFeatureLayer": "Döşenmiş bir katmanın açılan menüleri, hikayenizle aynı biçimde paylaştırılmamış olan bir detay katmanından geliyor.",
          "subscriptionContent": "Abonelik içeriği kredi kullanmaz. Daha fazla bilgi için tıklayın.",
          "premiumContent": "Hikayenizdeki bir ayrıcalıklı katman her görüntülendiğinde kuruluşunuzun kredilerinden düşülür. Daha fazla bilgi için tıklayın.",
          "secureService": "Güvenli içeriği hikayenizden kaldırın veya güvenli içeriğin başkaları tarafından kullanılmasını nasıl yetkilendireceğinizi öğrenmek için tıklayın.",
          "missingItemWarning": "Bu katman çalışmayı sürdürüyor, ancak sembolleri, açılır menüleri veya adı değişmiş olabilir. Katmanın beklendiği gibi göründüğünü onaylayın veya katmanı hikayenizden kaldırın."
        },
        "fixButtons": {
          "share": "Paylaş",
          "hide": "Gizle",
          "authorize": "Yetkilendir",
          "remove": "Kaldır",
          "help": "Yardım Al",
          "ignore": "Yoksay",
          "confirm": "Onayla",
          "edit": "Harita Düzenle"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Bazı haritalar ve katmanlar da paylaşıldı.",
          "alsoSharedMaps": "Bazı haritalar da paylaşıldı.",
          "alsoSharedLayers": "Bazı katmanlar da paylaşıldı.",
          "sharedOthersContent": "Yönetici ayrıcalıklarınızı başka birisinin içeriğini paylaşmak için kullandınız."
        }
      },
      "storyHealth": {
        "healthy": "Sorun bulunmadı",
        "notHealthy": "Sorunları gider",
        "warnings": "Uyarıları incele"
      }
    }
  }
});