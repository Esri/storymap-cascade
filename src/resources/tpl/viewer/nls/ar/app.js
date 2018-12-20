/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "حفظ",
      "close": "إغلاق"
    },
    "errors": {
      "noConfigName": "لا يوجد تكوين محدد في index.html > configOptions.story",
      "configFormatError": "يتعذر تحميل التكوين المحدد لوجود خطأ في بناء جملة JSON.",
      "configNotFound": "لم يتم العثور على التكوين المحدد أو يتعذر تحميله لوجود خطأ في بناء جملة JSON.",
      "boxTitle": "حدث خطأ",
      "servedFromFile": "يجب الوصول إلى هذا التطبيق من خلال خادم ويب. راجع ${USER_GUIDE} للتفاصيل.",
      "userGuide": "دليل المستخدم",
      "invalidConfig": "تكوين غير صحيح",
      "invalidConfigNoApp": "مُعرّف تطبيق تخطيط الويب غير محدد في index.html.",
      "invalidConfigNoAppDev": "لم يتم تحديد مُعرّف تطبيق تخطيط الويب في معلمات عنوان URL (?appid=). في وضع التطوير، يتم تجاهل تكوين المُعرف في index.html.",
      "unspecifiedConfigOwner": "لم يتم تكوين المالك المعتمد.",
      "invalidConfigOwner": "مالك القصة غير مُعتمد.",
      "invalidConfignoOAuth": "تتطلب هذه القصة مصادقة، يرجى تكوين ArcGIS OAuth ID في index.htm أو اجعل القصة عامة.",
      "invalidApp": "يتعذر تحميل هذه القصة.",
      "appLoadingFail": "‏‏حدث خطأ ما، لم يتم تحميل {TPL_NAME} بشكل صحيح.",
      "notConfiguredDesktop": "لم يتم تكوين القصة بعد.",
      "notConfiguredMobile": "مُنشئ {TPL_NAME} غير مدعوم في حجم العرض الحالي. إذا أمكن، قم بتغيير حجم المستعرض للوصول إلى المُنشئ أو يرجى إنشاء القصة على جهاز بشاشة أكبر.",
      "notConfiguredMobile2": "يُرجى تدوير الجهاز للتوجيه الأفقي لاستخدام مُنشئ {TPL_NAME}.",
      "notAuthorized": "يجب أن تكون مُعتمدًا للوصول إلى هذه القصة",
      "notAuthorizedBuilder": "أنت غير معتمد لاستخدام منشئ {TPL_NAME}.",
      "noViewerIE": "هذه القصة غير مدعومة في Internet Explorer قبل الإصدار ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "أنت تحاول عرض هذه القصة باستخدام مستعرض قديم غير مدعوم، وقد توجد مزايا لا تعمل أو مشكلات أخرى غير متوقعة. إننا نقترح الترقية إلى Internet Explorer 11 أو استخدام مستعرض آخر مثل Chrome.",
      "noViewerIE3": "في أواخر 2017، لن يعد يتم تحويل هذه القصة بعد الآن في هذا المستعرض. وفي ذلك الوقت، يجب استخدام مستعرض مدعوم لعرض هذه القصة.",
      "upgradeBrowser": "يرجى تحديث المستعرض",
      "mapLoadingFail": "‏‏حدث خطأ ما، لم يتم تحميل الخريطة بشكل صحيح.",
      "signOut": "تسجيل الخروج",
      "builderSupportFirefox": "يدعم الآن منشيء تتالي خريطة القصة!<br><br>الدعم لتأليف تتالي القصص في Forex يكون بالبيتا حاليًا. الرجاء محاولة ورفع تقارير بأي مسائل متعلقة بـ ${ESRI-SUPPORT} أو ${ESRI-COMMUNITY}.",
      "builderSupportOther": "يمكن عرض قصص التتالي أي مستعرض ويب حديث، ولكن منشئ \"تتالي خريطة القصة\" مدعوم فقط في ${CHROME} و${SAFARI} و${FIREFOX}.<br><br>إذا أردت منشئ Cascade لدعم مستعرض آخر، يرجى الاتصال بـ  ${ESRI-SUPPORT} أو ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "منشئ \"تتالي خريطة القصة\" غير مدعوم في iPad، وستعمل قصص التتالي التي تنشئها وتشاركها في iPad.",
      "launchBuilder": "إطلاق \"منشئ التتالي\"",
      "notAgain": "لا تظهر هذا مرة أخرى",
      "sorry": "انتبه:"
    },
    "mobileWarning": {
      "message1": "لقد قرأت إصدار الجوال لهذه القصة. وللإصدار الكامل المزود بعناصر وسائط أكثر، جربه على كمبيوتر سطح المكتب.",
      "email": "إرسال رابط عبر البريد الإلكتروني إلى هذه القصة"
    },
    "cover": {
      "iosEmbedLink": "اضغط لقراءة القصة كاملةً"
    },
    "media": {
      "captionPlaceholder": "التسمية التوضيحية هنا...",
      "loadingError": "عذرًا، لا يمكن الوصول إلى هذا المحتوى",
      "explore": "استكشاف",
      "exploreMap": "استكشاف الخريطة",
      "exploreStop": "إيقاف الاستكشاف",
      "sceneNotSupported": "عذرًا، هذه الخريطة ثلاثية الأبعاد غير مدعومة على الجهاز.",
      "loading1": "جارِ التنزيل",
      "loading2": "جارِ تحميل الخريطة...",
      "videoPlayPause": "تشغيل/إيقاف مؤقت",
      "videoMuteUnmute": "كتم/إلغاء الكتم"
    },
    "headerFromCommon": {
      "defaultTagline": "A ${STORY_MAP}",
      "share": "مشاركة أو طباعة",
      "tooltipAutoplayDisabled": "وهو غير متوفر في عرض التشغيل التلقائي"
    },
    "shareFromCommon": {
      "copy": "نسخ",
      "copied": "تم النسخ",
      "open": "فتح",
      "embed": "تضمين في صفحة الويب",
      "embedExplain": "استخدم كود HTML التالي لتضمين القصة في صفحة الويب.",
      "size": "الحجم (الاتساع/الارتفاع):",
      "autoplayLabel": "وضع التشغيل التلقائي",
      "autoplayExplain1": "يتقدّم وضع التشغيل التلقائي خلال القصة في فواصل منتظمة، وهو مثالي في عارض بيانات أو مراقبة عرض عام، ولكن انتبه، ففي مواقف أخرى، قد يجعل القصة أصعب في القراءة. ولا يتم دعم هذا المعلم في عروض صغيرة.",
      "autoplayExplain2": "عندما يكون هذا الوضع نشطًا، تتوفر عناصر تحكم تشغيل/إيقاف تشغيل القصة وتعديل سرعة الانتقال.",
      "linksupdated": "تم تحديث الروابط!"
    },
    "theme": {
      "lightLabel": "فاتح",
      "darkLabel": "داكن"
    },
    "autoplay": {
      "speedFast": "سريع",
      "speedMedium": "متوسط",
      "speedSlow": "بطيء"
    },
    "bannerNotification": {
      "learnMore": "التعرف على المزيد",
      "close": "إغلاق",
      "dontShowAgain": "عدم إظهار هذه الرسالة مجددًا"
    },
    "embedBar": {
      "share": "مشاركة",
      "fullScreen": "ملء الشاشة",
      "exitFullScreen": "خروج من ملء الشاشة",
      "enlarge": "توسيع",
      "newTab": "فتح في علامة تبويب جديدة",
      "tagline": "خريطة قصة",
      "twitter": "مشاركة على Twitter",
      "facebook": "مشاركة على Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "الرجاء انتظار القصة بالكامل للتحميل قبل الطباعة",
      "printNotes": "إذا كانت هذه الصفحة تقوم بالتحميل ببطئ أو لا تظهر بعض الوسائط، حاول استبدال الوسائط المباشرة مع الصور أو طباعة مجموعة أجزاء أصغر. للحصول على أفضل النتائج، قد يتعين عليك تمكين طباعة عناصر الخلفية في إعدادات طباعة المستعرض.",
      "printOptions": "خيارات",
      "makeTextBlack": "جعل كل النص باللون الأسود",
      "showLinks": "إظهار عناوين URL للرابط",
      "useAltMedia": "استبدل وسائط مباشرة مع الصور، إن توفرت",
      "pageBreaks": "بدء كل جزء في الصفحة الجديدة",
      "printRange": "جزء طباعة هذه القصة",
      "sectionStart": "الأقسام:",
      "go": "تطبيق",
      "reset": "إعادة تعيين القصة بالكامل",
      "print": "طباعة"
    },
    "page": {
      "appTagline": "تم إنشاء هذه القصة مع ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "تتالي خريطة القصة الخاصة بـ Esri",
      "readItOnline": "يمكنك قراءته على الويب على ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "القسم ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "موقع ويب:",
      "videoLabel": "مقطع فيديو:",
      "audioLabel": "مقطع صوت:"
    },
    "licenseChange2018": {
      "noAccess": "حسابك (%USER_NAME%) غير مرخص لفتح خريطة قصة غير عامة. رجاءً اطلب من مسئولي المؤسسة تعيينك كنوع مستخدم يتضمن خرائط القصة أو ترخيص التطبيقات الأساسية المضافة."
    }
  }
});