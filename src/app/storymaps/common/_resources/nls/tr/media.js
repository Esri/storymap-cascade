/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "İçerik Bağlantısı",
      "urls_short": "Bağlantı",
      "contentType": {
        "error": "Yetkilendirilmiş ortam yok.",
        "imageOnly": "Hikayenin bu bölümüne bir görüntü ekleyebilirsiniz.",
        "imageAndVideo": "Hikayenin bu bölümüne bir görüntü veya video ekleyebilirsiniz.",
        "imageVideoWebpage": "Hikayenin bu bölümüne bir görüntü, video veya web sayfası ekleyebilirsiniz."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "\"${searchterm}” aranıyor...",
        "searchedFor": "\"${searchterm}” için arama sonuçları",
        "albumsOf": "${Username} adlı kişinin albümleri",
        "noPhotosFound": "Aramanızla eşleşen fotoğraf yok. Yeniden deneyin.",
        "noItemsFound": "Aramanızla eşleşen öğe yok. Yeniden deneyin.",
        "noItemsInThisStory": "Bu hikayeye henüz herhangi bir ArcGIS içeriği eklenmedi.",
        "limitReached": "100 öğe gösteriliyor. Aradığınızı bulamadıysanız, bir anahtar sözcük araması yapmayı deneyin.",
        "galleryItems": {
          "uploadError": "Üzgünüz, bu öğe yüklenemedi."
        },
        "agol": {
          "remove1": "Kullanılmayan bu görüntüyü ArcGIS hesabınızdan silin.",
          "remove2": "(Daha sonra kullanmaya karar verirseniz, söz konusu öğeyi yeniden karşıya yüklemeniz gerekir.)",
          "removeFailed": "Bu erişilemeyen görüntüyü bu listeden kaldırın.",
          "modified": "Değiştirilme tarihi: ${date}",
          "uploaded": "Yüklenme tarihi: ${date}",
          "contentByAuthor": "${contentType}, yazan: ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "${Picasa} veya ${Google+} uygulamalarındaki fotoğraflara göz atın"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "${Flickr} uygulamasında fotoğraf arayın ve inceleyin"
        },
        "unsplash": {
          "searchAndBrowse": "${Unsplash} uygulamasında fotoğraf arayın",
          "photoBy": "Fotoğrafı çeken: ${username}",
          "userLink": "${username} adlı kişinin ${Unsplash} sayfasına gidin"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Web’deki içeriğe bağlanın",
            "imageOnly": "Web’deki görüntüye bağlanın",
            "imageAndVideo": "Web’deki görüntüye veya videoya bağlanın"
          },
          "linkText": {
            "imageOnly": "Yukarıdaki kutudan doğrudan fotoğraflara bağlanabilirsiniz.",
            "imageAndVideo1": "Yukarıdaki kutudan ${YouTube} ve ${Vimeo} videoları için bağlantı veya iframe kodu yapıştırabilirsiniz.",
            "imageAndVideo2": "Ayrıca doğrudan fotoğraflara da bağlanabilirsiniz.",
            "imageVideoWebpage1": "Yukarıdaki kutudan ${YouTube} ve ${Vimeo} videoları için bağlantı veya iframe kodu yapıştırabilirsiniz.",
            "imageVideoWebpage2": "Ayrıca doğrudan fotoğraflara, web sayfalarına veya web uygulamalarına da bağlanabilirsiniz.",
            "ender": "Mümkün olduğu kadar güvenli (https) bağlantı kullanın."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Sayfayı bir güvenli bağlantı (https) üzerinden yükleyin",
            "embedProtocolWarning1": "Bu sayfa hikayenizde yüklenmiyorsa, web güvenliği nedeniyle sayfayı ekleyemezsiniz.",
            "embedProtocolWarning2": "Bu sayfa hikayenizde yüklenmiyorsa, bu seçeneğin işaretini kaldırın ve yeniden deneyin. Sayfa yine de yüklenmiyorsa, web güvenliği nedeniyle sayfayı ekleyemezsiniz.",
            "embedProtocolWarning3": "Alternatif olarak, açıklamanıza bir bağlantı ekleyerek sayfayı yeni bir tarayıcı sekmesinde açabilirsiniz. ${linkText}",
            "linkText": "Daha Fazla Bilgi Edinin."
          },
          "placeholder": "${https://}... veya ${http://}... veya ${<iframe>}",
          "uploadErrors": {
            "generic": "Girilen adresle ilgili bir hata oluştu. Yeniden deneyin.",
            "imageOnly1": "Hikayenin bu bölümünde bir görüntü kullanmalısınız.",
            "imageOnly2": "Bir görüntü dosyası (.jpg, .png, .gif) bağlantısı girin veya ${ArcGIS}, ${Flickr}, ${Google+} veya ${Unsplash} uygulamalarından bir görüntü seçin.",
            "imageAndVideo1": "Hikayenin bu bölümünde bir görüntü veya video kullanmalısınız.",
            "imageAndVideo2": "Bir görüntü dosyası (.jpg, .png, .gif) ya da ${YouTube} veya ${Vimeo} uygulamasından bir video bağlantısı girin veya ${ArcGIS}, ${Flickr}, ${Google+} veya ${Unsplash} uygulamalarından bir görüntü seçin.",
            "badFormat": "Eklemeye çalıştığınız dosya bağlantısı hatalı biçimde yapılandırılmış.",
            "inaccessible": "Eklemeye çalıştığınız dosya yok veya erişilebilir değil.",
            "tryAgain": "Adresi kontrol edin ve yeniden deneyin.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "görüntü",
              "generic": "ortam"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-posta veya ${Picasa}/${Google+} Kimliği",
          "helpText": "Hikayenize ${Picasa} veya ${Google+} uygulamasına yüklenmiş olan fotoğraflar ekleyebilirsiniz. Hikayelerinizde ${Google} hesabınızda saklanan görüntüleri kullanma hakkında bilgi edinmek için bkz. ${helpLinkText}",
          "helpLinkText": "Daha fazla bilgi",
          "cannotFindUser": "${Username} kullanıcısı bulunamıyor. Yeniden deneyin."
        },
        "unsplash": {
          "placeholder": "Fotoğraf arayın",
          "aboutText": "${Unsplash}; ücretsiz ve kaliteli fotoğraflardan oluşan bir koleksiyondur.",
          "copyrightText": "${Unsplash} uygulamasında yayınlanmış olan fotoğrafların tümü ${CC0} Lisansı altında korunmaktadır. Daha fazla bilgi için bkz. ${moreInfoLink}.",
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
            "or": "OR",
            "dragAndDrop": "Görüntüleri buraya bırakın",
            "uploadImage": "Görüntü arayın",
            "agolInfo": "Görüntüler ArcGIS hesabınızda saklanır ve yalnızca hikayenizin içinden erişilebilir.",
            "saveBeforeUpload": "Bu hikayeyi kaydettikten sonra buradan ArcGIS uygulamasına görüntü yükleyebilirsiniz.",
            "fileTypesImage": "Desteklenen dosya türleri: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Web Haritası",
            "webscene": "Web Görünümü",
            "image": "Görüntü",
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
  }
});