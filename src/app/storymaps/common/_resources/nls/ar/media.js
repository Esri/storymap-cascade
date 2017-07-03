/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "رابط للمحتوى",
      "urls_short": "رابط",
      "contentType": {
        "error": "لا توجد وسائط معتمدة.",
        "imageOnly": "في هذا الجزء من القصة، يمكنك إضافة صورة.",
        "imageAndVideo": "في هذا الجزء من القصة، يمكنك إضافة صورة أو مقطع فيديو.",
        "imageVideoWebpage": "في هذا الجزء من القصة، يمكنك إضافة صورة أو مقطع فيديو أو صفحة ويب."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "جارِ البحث عن \"${searchterm}\"...",
        "searchedFor": "نتائج البحث عن \"${searchterm}\"",
        "albumsOf": "ألبومات ${username}",
        "noPhotosFound": "لا توجد صور مطابقة للبحث. يرجى إعادة المحاولة.",
        "noItemsFound": "لا توجد عناصر مطابقة للبحث. يرجى إعادة المحاولة.",
        "noItemsInThisStory": "لم يتم إضافة محتوى من ArcGIS إلى هذه القصة حتى الآن.",
        "limitReached": "يتم عرض 100 عنصر. إذا لم تجد ما تريده، حاول البحث بواسطة الكلمة الأساسية.",
        "galleryItems": {
          "uploadError": "عذرًا، فشل تحميل هذا العنصر."
        },
        "agol": {
          "remove1": "احذف هذه الصورة غير المستخدمة من حساب ArcGIS.",
          "remove2": "(يجب عليك تحميلها مجددًا إذا قررت استخدامها لاحقًا.)",
          "removeFailed": "قم بإزالة هذه الصورة التي لا يمكن الوصول إليها من هذه القائمة.",
          "modified": "تم التعديل في ${date}",
          "uploaded": "تم التحميل في ${date}",
          "contentByAuthor": "${contentType} بواسطة ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "استعرض الصور في ${Picasa} أو ${Google+}"
        },
        "flickr": {
          "photostream": "مجموعة الصور",
          "searchAndBrowse": "ابحث عن الصور واستعرضها في ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "ابحث عن الصور في ${Unsplash}",
          "photoBy": "الصورة بواسطة ${username}",
          "userLink": "انتقل إلىصفحة ${username} الخاصة بـ ${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "رابط للمحتوى على الويب",
            "imageOnly": "رابط لصورة على الويب",
            "imageAndVideo": "رابط لصورة أو مقطع فيديو على الويب"
          },
          "linkText": {
            "imageOnly": "في الصندوق أعلاه، يمكنك الربط بالصور مباشرةً",
            "imageAndVideo1": "في الصندوق أعلاه، يمكن لصق الارتباطات أو كود iframe الخاصين بمقاطع الفيديو من ${YouTube} و${Vimeo}.",
            "imageAndVideo2": "يمكنك أيضًا الربط بالصور مباشرةً.",
            "imageVideoWebpage1": "في الصندوق أعلاه، يمكن لصق الارتباطات أو كود iframe الخاصين بمقاطع الفيديو من ${YouTube} و${Vimeo}.",
            "imageVideoWebpage2": "يمكنك أيضًا الربط بالصور أو صفحات الويب أو تطبيقات الويب مباشرةً.",
            "ender": "استخدم ارتباطات (https) الآمنة إذا أمكن."
          },
          "embedProtocol": {
            "embedProtocolLabel": "تحميل الصفحة عبر اتصال آمن (https)",
            "embedProtocolWarning1": "إذا لم تُحمّل هذه الصفحة في القصة، لا يمكن تضمينها لأسباب تتعلق بأمان الويب.",
            "embedProtocolWarning2": "إذا لم يتم تحميل هذه الصفحة في القصة الخاصة بك، قم بإلغاء التأشير على هذا الخيار وحاول مرة أخرى. إذا ظلت الصفحة بدون تحميل، يتعذر تضمينها لأسباب تتعلق بأمان الويب.",
            "embedProtocolWarning3": "وكبديل، أضف رابطًا في السرد لفتح الصفحة في علامة تبويب مستعرض جديدة. ${linkText}",
            "linkText": "تعلّم المزيد."
          },
          "placeholder": "${https://}... أو ${http://}... أو ${<iframe>}",
          "uploadErrors": {
            "generic": "حدث خطأ ما في ال",
            "imageOnly1": "يجب أن تستخدم صورة في هذا الجزء من القصة.",
            "imageOnly2": "يرجى توفير رابط إلى الصورة (.jpg, .png, .gif) أو اختيار صورة من ${ArcGIS} أو ${Flickr} أو ${Google+} أو ${Unsplash}.",
            "imageAndVideo1": "يجب أن تستخدم صورة أو مقطع فيديو في هذا الجزء من القصة.",
            "imageAndVideo2": "يرجى توفير رابط إلى الصورة (.jpg, .png, .gif) أو مقطع فيديو على ${YouTube} أو ${Vimeo} أو اختيار صورة من ${ArcGIS} أو ${Flickr} أو ${Google+} أو ${Unsplash}.",
            "badFormat": "تم تنسيق رابط الملف الذي تريد تحاول إضافته بشكل غير صحيح.",
            "inaccessible": "الملف الذي تحاول إضافته مفقود أو أنه لا يمكن الوصول إليه.",
            "tryAgain": "يرجى التحقق من العنوان وإعادة المحاولة.",
            "mediaTypes": {
              "VIDEO": "فيديو",
              "IMAGE": "صورة",
              "generic": "الوسائط"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "البريد الإلكتروني أو معرف ${Picasa}/${Google+} ID",
          "helpText": "يمكنك إضافة الصور المحملة إلى ${Picasa} أو ${Google+} إلى القصة.  ${helpLinkText} عن استخدام الصور المخزنة في حساب ${Google} في القصص.",
          "helpLinkText": "معرفة المزيد",
          "cannotFindUser": "يتعذر البحث عن مستخدم ${username}. يرجى إعادة المحاولة."
        },
        "unsplash": {
          "placeholder": "بحث عن الصور",
          "aboutText": "${Unsplash} هو مجموعة مختارة بعناية من صور مجانية عالية الجودة.",
          "copyrightText": "يتم ترخيص كل الصور المنشورة في ${Unsplash} أدنى ترخيص ${CC0}. ابحث عن المزيد من المعلومات في ${moreInfoLink}.",
          "moreInfoLink": "هنا"
        },
        "flickr": {
          "searchType": {
            "account": "حساب ${Flickr}",
            "text": "كل ${Flickr}"
          },
          "placeholders": {
            "user": "بحث عن الحساب",
            "userText": "بحث عن الصور في هذا الحساب",
            "text": "بحث عن الصور"
          },
          "errors": {
            "cannotFindUser": "يتعذر العثور على اسم مستخدم ${username}.",
            "noUserPhotos": "${username} لا يحتوي على أي صور عامة.",
            "didYouMean": "هل تعني ${username}؟",
            "generalUserError": "حدث خطأ عند البحث عن مستخدم ${username}."
          },
          "licenses": {
            "licenseLabel": "الترخيص: ",
            "public": "مجال عام",
            "commercial": "موافق للاستخدام التجاري",
            "nonCommercial": "موافق للاستخدام غير التجاري",
            "reserved": "جميع الحقوق محفوظة",
            "any": "أي ترخيص"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "هذه القصة",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "بوابة إلكترونية",
            "myOrg": "مؤسسة ${username}",
            "myContent": "الخاص"
          },
          "createContent": {
            "or": "'أو'",
            "dragAndDrop": "أفلت الصور هنا",
            "uploadImage": "استعراض صورة",
            "agolInfo": "سيتم تخزين الصور في حساب ArcGIS، ولا يمكن الوصول إليه إلا في الحدث.",
            "saveBeforeUpload": "بمجرد حفظ هذه القصة، يمكنك تحميل الصور إلى ArcGIS هنا.",
            "fileTypesImage": "أنواع الملف المدعومة: .png و.jpeg و.jpg و.gif و.bmp"
          },
          "filterAndSort": {
            "webmap": "خريطة الويب",
            "webscene": "مشهد الويب",
            "image": "صورة",
            "date": "تاريخ",
            "sortByDate": "فرز بواسطة التاريخ",
            "title": "عنوان",
            "sortByTitle": "فرز بواسطة العنوان",
            "views": "عمليات عرض",
            "search": "البحث باستخدام الكلمة الأساسية أو المعرف"
          }
        }
      }
    }
  }
});