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
    "share": {
      "btnPrivate": "Özel",
      "btnOrg": "Kuruluş",
      "btnPublic": "Genel",
      "btnEveryone": "Herkes"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Oluşturucu",
      "buttonSaving": "Kaydediliyor",
      "buttonSaved": "Kaydedildi",
      "buttonError": "Kaydetme başarısız",
      "buttonShare": "Paylaş",
      "buttonSettings": "Ayarlar",
      "settingsLogoError": "Logonuzda bir sorun var. Daha fazla öğrenmek için tıklayın.",
      "buttonHelp": "GeoNet Üzerinde Yardım Alın veya Geri Bildirim Gönderin",
      "buttonPreview": "Hikayeyi Görüntüle",
      "buttonHealth": "Sağlık Raporu",
      "manageStories": "Hikayelerimi Yönet",
      "closeWithPendingChange": "Bu eylemi onaylamak istediğinizden emin misiniz? Değişiklikleriniz silinecek.",
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
      "chooseTransition": "İşlem Seç",
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
        "remove": "Kaldır",
        "altTextPlaceholder": "Görme engelli okuyucular için bu medyanın bir açıklamasını ekleyin...",
        "altTextHelptip": "Alternatif metin, ekran okuyucu yazılımı gibi yardımcı teknolojiler tarafından kullanılan görsel medya açıklamasıdır. Bu, isteğe bağlıdır ancak WCAG ve Bölüm 508 gibi web erişilebilirlik kurallarını karşılamak için önerilir."
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
        "alternativeMedia": "Görüntüyü Mobil için Değiştir",
        "explanation": "Bazı ortamlar mobil cihazlarda desteklenmez veya düzgün çalışmayabilir. Bu paneli kullanarak hikayeniz bir telefonda veya tablette görüntülendiğinde bu ortamın yerine gösterilecek bir görüntü belirleyebilirsiniz.",
        "changeAltImage": "Görüntüyü değiştir",
        "uploadAltImage": "Alternatif bir görüntü ekle"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "İçerik Bağlantısı",
        "urls_short": "Bağlantı",
        "contentType": {
          "error": "Yetkilendirilmiş ortam yok.",
          "imageOnly": "Hikayenin bu bölümüne bir görüntü ekleyebilirsiniz.",
          "imageAndVideo": "Hikayenin bu bölümüne bir görüntü veya video ekleyebilirsiniz.",
          "imageVideoWebpage": "Hikayenin bu bölümüne ses, görüntü, video veya web sayfası ekleyebilirsiniz."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "\"${searchterm}” aranıyor...",
          "searchedFor": "\"${searchterm}” için arama sonuçları",
          "albumsOf": "${Username} adlı kişinin albümleri",
          "noPhotosFound": "Aramanızla eşleşen fotoğraf yok. Yeniden deneyin.",
          "noItemsFound": "Aramanızla eşleşen öge yok. Yeniden deneyin.",
          "noItemsInThisStory": "Bu hikayeye henüz herhangi bir ArcGIS içeriği eklenmedi.",
          "limitReached": "100 öge gösteriliyor. Aradığınızı bulamadıysanız, bir anahtar sözcük araması yapmayı deneyin.",
          "galleryItems": {
            "uploadError": "Üzgünüz, bu öge yüklenemedi."
          },
          "agol": {
            "remove1": "Kullanılmayan bu görüntüyü ArcGIS hesabınızdan silin.",
            "remove2": "(Daha sonra kullanmaya karar verirseniz, söz konusu ögeyi yeniden karşıya yüklemeniz gerekir.)",
            "removeFailed": "Erişilemeyen bu görüntüyü listeden kaldırın.",
            "modified": "Değiştirilme tarihi: ${date}",
            "uploaded": "Yükleme tarihi: ${date}",
            "contentByAuthor": "${contentType}, yazan: ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "${Picasa} veya ${Google+} uygulamalarındaki fotoğraflara göz atın"
          },
          "flickr": {
            "photostream": "Fotoğraf Yayını",
            "searchAndBrowse": "${Flickr} uygulamasında fotoğraf arayın ve göz atın",
            "captionStarter": "${Flickr} uygulamasındaki fotoğrafı çeken: ${USERNAME}"
          },
          "unsplash": {
            "searchAndBrowse": "${Unsplash} uygulamasında fotoğraf arayın",
            "photoBy": "Fotoğrafı çeken: ${username}",
            "userLink": "${username} adlı kişinin ${Unsplash} sayfasına gidin",
            "captionStarter": "${Unsplash} uygulamasındaki fotoğrafı çeken: ${USERNAME}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Web’deki içeriğe bağlanın",
              "imageOnly": "Web’deki görüntüye bağlanın",
              "imageAndVideo": "Web’deki görüntüye veya videoya bağlanın"
            },
            "linkText": {
              "imageOnly": "Yukarıdaki kutudan doğrudan fotoğrafa bağlanabilirsiniz.",
              "imageAndVideo1": "Yukarıdaki kutudan bir ${YouTube} veya ${Vimeo} videosuna bir bağlantı veya iframe kodu yapıştırabilirsiniz.",
              "imageAndVideo2": "Ayrıca doğrudan bir fotoğrafa da bağlanabilirsiniz.",
              "imageVideoWebpage1": "Yukarıdaki kutudan dinamik şemalar gibi web içeriği veya ${YouTube} veya ${Vimeo} videolarına bir bağlantı veya iframe kodu yapıştırabilirsiniz.",
              "imageVideoWebpage2": "Ayrıca doğrudan bir fotoğrafa, videoya, ses dosyasına, web sayfasına veya web uygulamasına da bağlanabilirsiniz.",
              "ender": "Her zaman güvenli (https) bağlantıları kullanın. İçeriğiniz https'yi desteklemiyorsa, okuyucuların yeni bir tarayıcı sekmesinde görüntüleyebilmesi için hikayenizin metninde ona bir bağlantı ekleyin.",
              "httpsError": "Bağlantı HTTPS ile başlamalıdır"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Sayfayı bir güvenli bağlantı (https) üzerinden yükleyin",
              "embedProtocolWarning1": "Bu sayfa hikayenizde yüklenmiyorsa, web güvenliği nedeniyle sayfayı ekleyemezsiniz.",
              "embedProtocolWarning2": "Bu sayfa hikayenizde yüklenmiyorsa, bu seçeneğin işaretini kaldırın ve yeniden deneyin. Sayfa yine de yüklenmiyorsa, web güvenliği nedeniyle sayfayı ekleyemezsiniz.",
              "embedProtocolWarning3": "Alternatif olarak, açıklamanıza bir bağlantı ekleyerek sayfayı yeni bir tarayıcı sekmesinde açabilirsiniz. ${linkText}",
              "linkText": "Daha Fazla Bilgi Edinin."
            },
            "placeholder": "${https://}... veya ${<iframe>}",
            "uploadErrors": {
              "generic": "Girilen adresle ilgili bir hata oluştu. Lütfen yeniden deneyin.",
              "imageOnly1": "Hikayenin bu bölümünde bir görüntü kullanmalısınız.",
              "imageOnly2": "Bir görüntü dosyası (.jpg, .png, .gif) bağlantısı girin veya ${ArcGIS}, ${Flickr}, ${Google+} veya ${Unsplash} uygulamalarından bir görüntü seçin.",
              "imageAndVideo1": "Hikayenin bu bölümünde bir görüntü veya video kullanmalısınız.",
              "imageAndVideo2": "Bir görüntü dosyası (.jpg, .png, .gif) ya da ${YouTube} veya ${Vimeo} uygulamasından bir video bağlantısı girin veya ${ArcGIS}, ${Flickr}, ${Google+} veya ${Unsplash} uygulamalarından bir görüntü seçin.",
              "badFormat": "Eklemeye çalıştığınız dosya bağlantısı hatalı biçimde yapılandırılmış.",
              "inaccessible": "Eklemeye çalıştığınız dosya yok veya erişilebilir değil.",
              "tryAgain": "Lütfen adresi kontrol edin ve yeniden deneyin.",
              "mediaTypes": {
                "VIDEO": "video",
                "IMAGE": "görüntü",
                "generic": "ortam"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "Bir üçüncü parti hizmetini kullanarak, hizmet şartlarını kabul etmiş olursunuz: ",
          "googlePhotos": {
            "placeholder": "E-posta veya ${Picasa}/${Google+} Kimliği",
            "helpText": "Hikayenize ${Picasa} veya ${Google+} uygulamasına yüklenmiş olan fotoğraflar ekleyebilirsiniz. Hikayelerinizde ${Google} hesabınızda saklanan görüntüleri kullanma hakkında bilgi edinmek için bkz. ${helpLinkText}.",
            "helpLinkText": "Daha fazla bilgi",
            "cannotFindUser": "${Username} kullanıcısı bulunamıyor. Lütfen yeniden deneyin."
          },
          "unsplash": {
            "placeholder": "Fotoğraf arayın",
            "aboutText": "${Unsplash}; ücretsiz ve kaliteli fotoğraflardan oluşan bir koleksiyondur.",
            "copyrightText": "Tüm fotoğraflar, ${Unsplash} Lisansı altında korunmaktadır. Daha fazla bilgi alın ${moreInfoLink}.",
            "moreInfoLink": "buraya"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} Hesabı",
              "text": "Tüm ${Flickr}"
            },
            "placeholders": {
              "user": "Hesap arayın",
              "userText": "Bu hesapta fotoğraf arayın",
              "text": "Fotoğraf arayın"
            },
            "errors": {
              "cannotFindUser": "${username} kullanıcısı bulunamıyor.",
              "noUserPhotos": "${username} kullanıcısının genel fotoğrafı yok.",
              "didYouMean": "${username} adlı kişi mi demek istediniz?",
              "generalUserError": "${username} kullanıcısı aranırken bir hata oluştu."
            },
            "licenses": {
              "licenseLabel": "Lisans: ",
              "public": "Genel Domain",
              "commercial": "Ticari Kullanıma Uygun",
              "nonCommercial": "Ticari Olmayan Kullanıma Uygun",
              "reserved": "Tüm Hakları Saklıdır",
              "any": "Herhangi Bir Lisans"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "Bu Hikaye",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname} Kuruluşu",
              "myContent": "İçeriğim"
            },
            "createContent": {
              "createNewMap": "Yeni Harita Oluştur",
              "or": "VEYA",
              "dragAndDropImage": "Görüntüleri bırak",
              "dragAndDropImageAudio": "Görüntüleri veya sesi bırak",
              "uploadButton": "Göz at",
              "agolInfo": "Yüklenen görüntüler ve ses sadece bu hikaye içinden erişilebilir olacak.",
              "saveBeforeUpload": "Bu hikayeyi kaydettikten sonra buradan ArcGIS uygulamasına görüntü ve ses yükleyebilirsiniz.",
              "fileExtsImage": "Desteklenen türler: .png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Desteklenen türler: png, jpg, gif, bmp, mp3.",
              "maxSize": "Dosya başına maksimum 10 MB."
            },
            "filterAndSort": {
              "webmap": "Web Haritası",
              "webscene": "Web Görünümü",
              "image": "Görüntü",
              "audio": "Ses",
              "date": "Tarih",
              "sortByDate": "Tarihe göre sırala",
              "title": "Başlık",
              "sortByTitle": "Başlığa göre sırala",
              "views": "Görünümler",
              "search": "Anahtar sözcüğe veya kimliğe göre arayın"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "Harita düzenle",
      "unauthorizedDomain": "Harita düzenleyiciyi kullanmak için yetkili bir etki alanında değilsiniz",
      "loading": "Harita düzenleyici yüklenirken bekleyin",
      "saving": "Harita kaydediliyor",
      "success": "Harita kaydedildi",
      "cancelTitle": "Kaydedilmemiş değişiklikler atılsın mı?",
      "errorSave": "Harita kaydedilemiyor. Lütfen yeniden deneyin.",
      "loadFail": "Üzgünüz, harita düzenleyici yüklenemiyor",
      "close": "Kapat",
      "save": "Kaydet",
      "confirm": "Evet, haritayı kapat",
      "deny": "Hayır, çalışmaya devam et"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Hikayenize burada devam edin..."
      },
      "blockAdd": {
        "text": "Metin",
        "media": "Ortam",
        "title": "Başlık",
        "immersive": "Ayrıntılar"
      },
      "link": {
        "invite": "Bir bağlantı yapıştırın veya yazın..."
      },
      "color": {
        "choose": "seçin",
        "cancel": "iptal",
        "clear": "Rengi temizle"
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
      "mediaUpload": "Medya yükleme sürüyor...",
      "mediaUploadSuccess": "Medya başarıyla yüklendi",
      "mediaUploadFail": "Medya yüklenemedi"
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
        "audio": "işitsel",
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
        "noAltImage": "Ortam Mobil Üzerinde Çalışmayabilir",
        "noAltImageUnsupported": "Ortam Mobil Üzerinde Desteklenmiyor",
        "noAltImageWarning": "Ortam Mobil Üzerinde Çalışmayabilir",
        "altImageBroken": "Bu medya ortamı için tanımlanan alternatif görüntü erişilebilir değil",
        "httpMedia": "Güvenli Olmayan Ortam",
        "httpContent": "Güvenli Olmayan İçerik"
      },
      "contentWarnings": {
        "noAltImage": "Hikayenizi paylaşmadan önce taşınabilir cihazlarda test ettiğinizden emin olun. Bu ortam beklendiği gibi çalışmazsa, hikaye bir telefonda veya tablette görüntülendiğinde gösterilecek alternatif bir görüntü eklemek için aşağıdaki düğmeyi kullanın.",
        "noAltImageUnsupported": "Bu ortam türü mobil cihazlarda çalışmayacak. Hikaye telefon veya tablette görüntülendiğinde gösterilecek alternatif bir görüntü eklemek için bu düğmeyi kullanın.",
        "noAltImageWarning": "Hikayenizi paylaşmadan önce taşınabilir cihazlarda test ettiğinizden emin olun. Bu ortam beklendiği gibi çalışmazsa, hikaye bir telefonda veya tablette görüntülendiğinde gösterilecek alternatif bir görüntü eklemek için aşağıdaki düğmeyi kullanın.",
        "noAltImageAlt": "Bu ortam türü mobil cihazlarda desteklenmiyor veya çalışmayabilir. Mobil sekmesinden hikaye telefon veya tablette görüntülendiğinde gösterilecek alternatif bir görüntü sağlayın."
      },
      "descriptions": {
        "httpAudioUnfixable": "Bu ses dosyası HTTPS'yi desteklemiyor. Hikayenizden kaldırın veya bir bağlantıyla değiştirin.",
        "httpAudioUncheckable": "Bu ses dosyasının URL'si güvenli değil (HTTP). Bu ses dosyasında bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın. Bu işe yaramazsa, ses dosyasını hikayenizden kaldırın veya bir köprü bağlantısı ile değiştirin.",
        "httpAudioFixable": "Bu ses dosyasının URL'si güvenli değil (HTTP). Bu ses dosyasında güvenli bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın.",
        "httpWebpageUnfixable": "Bu web sayfası HTTPS'yi desteklemiyor. Hikayenizden kaldırın veya bir ekran görüntüsü veya bağlantıyla değiştirin.",
        "httpWebpageUncheckable": "Bu web sayfasının URL'si güvenli değil (HTTP). Bu web sayfasında bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın. Bu işe yaramazsa, web sayfasını hikayenizden kaldırın veya bir ekran görüntüsü ya da köprü bağlantısı ile değiştirin.",
        "httpWebpageFixable": "Bu web sayfasının URL'si güvenli değil (HTTP). Bu web sayfasında güvenli HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın.",
        "httpVideoUnfixable": "Bu video HTTPS'yi desteklemiyor. Hikayenizden kaldırın veya bir ekran görüntüsü veya bağlantıyla değiştirin.",
        "httpVideoUncheckable": "Bu videonun URL'si güvenli değil (HTTP). Bu videoda bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın. Bu işe yaramazsa, videoyu hikayenizden kaldırın veya bir ekran görüntüsü ya da köprü bağlantısı ile değiştirin.",
        "httpVideoFixable": "Bu videonun URL'si güvenli değil (HTTP). Bu videoda güvenli bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın.",
        "httpImageUnfixable": "Bu görüntü HTTPS'yi desteklemiyor. Hikayenizden kaldırın veya bir bağlantıyla değiştirin.",
        "httpImageUncheckable": "Bu görüntünün URL'si güvenli değil (HTTP). Bu görüntüde bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın. Bu işe yaramazsa, görüntüyü hikayenizden kaldırın veya bir köprü bağlantısı ile değiştirin.",
        "httpImageFixable": "Bu görüntünün URL'si güvenli değil (HTTP). Bu görüntüde güvenli bir HTTPS URL'si kullanmak için aşağıdaki düğmeye tıklayın.",
        "httpLayer": "Bu katmanın URL'si güvenli değil (HTTP).",
        "inaccessibleLogo": "Bu logo erişilebilir değil. Başka bir görüntüyle değiştirin.",
        "httpLogoUnfixable": "Bu logo HTTPS'yi desteklemiyor. Başka bir görüntüyle değiştirin.",
        "httpLogoFixable": "Bu logonun URL'si güvenli değil (HTTP). Logo için bir HTTPS URL kullanın.",
        "httpLogoUncheckable": "Bu logonun URL'si güvenli değil (HTTP). Logo için bir HTTPS URL kullanın veya başka bir görüntüyle değiştirin."
      },
      "tooltips": {
        "httpAudioFixable": "Bu ses dosyasında güvenli HTTPS URL'si kullanmak için düğmeye tıklayın.",
        "httpAudioUncheckable": "Bu ses dosyasında bir HTTPS URL'si kullanmayı deneyin. Bu işe yaramazsa, ses dosyasını hikayenizden kaldırın veya bir bağlantı ile değiştirin.",
        "httpWebpageFixable": "Bu web sayfasında güvenli HTTPS URL'si kullanmak için düğmeye tıklayın.",
        "httpWebpageUncheckable": "Bu web sayfasında bir HTTPS URL'si kullanmayı deneyin. Bu işe yaramazsa, web sayfasını hikayenizden kaldırın veya bir ekran görüntüsü ya da bağlantı ile değiştirin.",
        "httpVideoFixable": "Bu videoda güvenli HTTPS URL'si kullanmak için düğmeye tıklayın.",
        "httpVideoUncheckable": "Bu videoda bir HTTPS URL'si kullanmayı deneyin. Bu işe yaramazsa, videoyu hikayenizden kaldırın veya bir ekran görüntüsü ya da bağlantı ile değiştirin.",
        "httpImageFixable": "Bu görüntüde güvenli HTTPS URL'si kullanmak için düğmeye tıklayın.",
        "httpImageUncheckable": "Bu görüntüde bir HTTPS URL'si kullanmayı deneyin. Bu işe yaramazsa, görüntüyü hikayenizden kaldırın veya bir bağlantı ile değiştirin.",
        "httpLayerMyMap": "HTTPS kullanmak amacıyla bu katmanı güncellemek için haritanın öğe sayfasını ziyaret edin. Katman güncellenemiyorsa, haritadan kaldırın.",
        "httpLayerNotMyMap": "Haritanın bir kopyasını alın ve HTTPS kullanmak için bu katmanı güncelleyin. Katman güncellenemiyorsa, haritadan kaldırın.",
        "clickLearnMore": "Daha fazla öğrenmek için tıklayın."
      },
      "fixButtons": {
        "agolItemPage": "Öğe Sayfası",
        "openTheMap": "Haritayı Aç",
        "updateAudio": "Ses Dosyasının URL'sini Düzelt",
        "updateWebpages": "Web Sayfasının URL'sini Düzelt",
        "updateVideos": "Videonun URL'sini Düzelt",
        "updateImages": "Görüntünün URL'sini Düzelt"
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
    },
    "saveErrorSocial": {
      "title": "Sosyal medya paylaşımı",
      "panel1": "ArcGIS web uygulaması ögenizin başlığı hikaye başlığınızla aynı olmadığından hikayeniz sosyal medyada düzgün görünmeyebilir.",
      "panel1tooltip": "Bir başlık, özet ve küçük resim tanımlandıktan sonra hikayeniz şöyle görüntülenir:",
      "panel2": "Sosyal medyada hangi başlığı kullanmak istersiniz?",
      "panel2q1": "Hikaye başlığı (önerilen)",
      "panel2q1tooltip": "Bu seçeneği tercih ettiğinizde, öğenizin başlığı hikaye başlığınızla eşleşecek biçimde değiştirilir ve oluşturucudaki ilave değişiklikler senkronize olacaktır.",
      "panel2q2": "Öge başlığı",
      "panel3": "Hikayenizin sosyal medyada görüntülenme biçimini daha da iyileştirmek için ${MYSTORIES} kullanarak bir özet ve küçük resim ekleyin.",
      "panel4": "Bu hikaye için beni bir daha uyarma",
      "save": "Kaydet",
      "mystories": "Hikayelerim"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Web Güvenliği ve Story Maps hakkında Önemli İleti",
      "s1h1": "Esri, Story Maps'in güvenliğini geliştiriyor",
      "s1p1": "Hikaye Haritanız web’de yayınlanır ve web topluluğu her zaman daha iyi güvenlik sağlamak ve uygulamak için çalışmaktadır. İnternet üzerinden iletilen içerik için güvenli bir bağlantı sağlayan HTTPS, web içeriğine erişmenin birincil yolu olarak kullanılmaktadır. Çoğu modern tarayıcı artık, HTTPS yerine HTTP kullanıldığında uyarı mesajları göstermektedir. Bu yeni standart nedeniyle, Hikaye Haritaları oluştururken ve paylaşırken HTTPS bağlantıları kullanmanızı ve Story Map’e web içeriği yerleştirirken veya görüntü bağlantısı yaparken yalnızca HTTPS URL’leri kullanmanızı öneririz.",
      "s1p2": "Pratik olarak, bu bir Hikaye Haritası anlamına gelir ve tüm içeriği (görüntüler, katmanlar, gömülü uygulamalar ve web siteleri dahil) HTTP yerine HTTPS ile başlayan bağlantılar kullanılarak erişilmelidir. Bu, okuyucularınız için en iyi deneyimi sağlar; çünkü çoğu web tarayıcısı hikayelerinizin güvenli olduğunu gösterecektir.",
      "s2h1": "Ne yapmam gerekiyor?",
      "s2p1": "Esri, Story Map sahipleri ve okuyucuları için bu geçişi kolaylaştırmaya çalışmaktadır. Artık Story Map oluşturucularında ve Hikayelerim’de, hikayelerinizdeki güvensiz içeriği (HTTP) bulmanıza yardımcı olacak ve bunları nasıl ele alacağınıza dair tavsiyelerde bulunacak araçlar mevcuttur. Lütfen hikayenizi güvenli olmayan içeriklere karşı kontrol edin ve bir an önce HTTPS’ye güncelleyin.",
      "action1": "Kapat",
      "action2": "Hikayelerimi şimdi kontrol et",
      "action3": "Daha fazla bilgi",
      "floatingNotification": "Bu hikaye güvenli olmayan (HTTP) içerik içeriyor. Lütfen inceleyin ve bu sorunları ele alın."
    }
  }
});