/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "שמירה",
      "close": "סגור"
    },
    "errors": {
      "noConfigName": "לא צוינה תצורה ב-index.html > configOptions.story",
      "configFormatError": "לא ניתן לטעון את התצורה שצוינה עקב שגיאה בתחביר JSON.",
      "configNotFound": "לא ניתן למצוא או לטעון את התצורה שצוינה עקב שגיאה בתחביר JSON.",
      "boxTitle": "אירעה שגיאה",
      "servedFromFile": "יש לגשת לאפליקציה דרך שרת אינטרנט. לפרטים, עיין ב${USER_GUIDE}.",
      "userGuide": "מדריך למשתמש",
      "invalidConfig": "תצורה לא חוקית",
      "invalidConfigNoApp": "מזהה אפליקציית המיפוי באינטרנט לא צוין ב-index.html.",
      "invalidConfigNoAppDev": "לא צוין בפרמטרי ה-URL מזהה של אפליקציית מיפוי אינטרנט‏ (‎?appid‎‎=‎). במצב פיתוח, המערכת מתעלמת מתצורת ה-appid ב-index.html.",
      "unspecifiedConfigOwner": "לא הוגדר בעלים מורשה.",
      "invalidConfigOwner": "הבעלים של הסיפור אינו מורשה.",
      "invalidConfignoOAuth": "יש לאמת את הסיפור. עליך להגדיר מזהה ArcGIS OAuth ב-index.html או לשתף את הסיפור באופן ציבורי.",
      "invalidApp": "לא ניתן לטעון את הסיפור.",
      "appLoadingFail": "משהו השתבש, אירעה בעיה בטעינה של {TPL_NAME}.",
      "notConfiguredDesktop": "הסיפור עדיין אינו מוגדר.",
      "notConfiguredMobile": "אשף הבנייה של {TPL_NAME} אינו נתמך בגודל תצוגה זה. אם ניתן, שנה את גודל הדפדפן שלך כדי לגשת לאשף הבנייה או בנה את הסיפור שלך בהתקן עם מסך גדול יותר.",
      "notConfiguredMobile2": "סובב את ההתקן שלך בכיוון לרוחב כדי להשתמש באשף הבנייה של {TPL_NAME}.",
      "notAuthorized": "אין לך הרשאה לגשת לסיפור זה",
      "notAuthorizedBuilder": "אינך מורשה להשתמש באשף הבנייה של {TPL_NAME}.",
      "noViewerIE": "סיפור זה אינו נתמך ב-Internet Explorer לפני גרסה ${VERSION}‏.‏ ${UPGRADE}",
      "noViewerIE2": "אתה מנסה להציג את הסיפור באמצעות דפדפן ישן שאינו נתמך. ייתכן כי חלק מהישויות לא יפעלו או שיתרחשו בעיות בלתי צפויות אחרות. מומלץ לשדרג ל-Internet Explorer 11 או להשתמש בדפדפן אחר, כגון Chrome.",
      "noViewerIE3": "בסוף שנת 2017, לא תוכל עוד לטעון את הסיפור בדפדפן זה. משלב זה ואילך תצטרך להשתמש בדפדפן נתמך כדי להציג את הסיפור.",
      "upgradeBrowser": "עדכן את הדפדפן",
      "mapLoadingFail": "משהו השתבש, המפה לא נטענה באופן תקין.",
      "signOut": "יציאה",
      "builderSupport1": "אשף הבנייה של מפל מפת סיפור נתמך ב-${CHROME} וב-${SAFARI} בלבד. עם זאת, תוכל להציג סיפורי מפל שתיצור בעזרת אשף הבנייה בדפדפנים הבאים: Internet Explorer 11 ואילך ו-Firefox.",
      "builderSupport2": "אשף הבנייה של מפל מפת סיפור אינו נתמך ב-iPad. סיפורי מפל שתיצור ותשתף יפעלו ב-iPad.",
      "builderSupport3": "ניתן להציג סיפורי מפל ב-Chrome, ב-Safari, ב-Firefox וב-Internet Explorer 11 ואילך, עם זאת אשף הבנייה של מפל מפת סיפור נתמך ב-${CHROME} וב-${SAFARI} בלבד.",
      "builderSupport4": "ניתן להציג סיפורי Cascade בכל דפדפן אינטרנט מודרני. עם זאת, אשף הבנייה של מפת Cascade הסיפור נתמך רק ב-${CHROME} וב-${SAFARI}.<br><br> אם אתה זקוק לאשף בניית סיפור Cascade כדי לתמוך בדפדפן אחר, צור קשר עם ${ESRI-SUPPORT} או ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "שים לב:"
    },
    "mobileWarning": {
      "message1": "קראת את הגרסה הניידת של הסיפור הזה. לקבלת הגרסה המלאה, שכוללת רכיבי מדיה עשירים יותר, מומלץ לעיין בגרסה למחשב השולחני.",
      "email": "שלח קישור לסיפור הזה בדואר אלקטרוני"
    },
    "cover": {
      "iosEmbedLink": "הקש כדי לקרוא סיפור מלא"
    },
    "media": {
      "captionPlaceholder": "הכותרת שלך כאן...",
      "loadingError": "אין גישה לתוכן זה.",
      "explore": "עיין",
      "exploreMap": "עיין במפה",
      "exploreStop": "הפסק לעיין",
      "sceneNotSupported": "מצטערים, ההתקן שלך לא תומך במפת התלת-ממד הזו.",
      "loading1": "טוען...",
      "loading2": "טוען מפה...",
      "videoPlayPause": "הפעל/השהה",
      "videoMuteUnmute": "השתק/בטל השתקה"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "שתף",
      "tooltipAutoplayDisabled": "זה לא זמין במצב ניגון אוטומטי"
    },
    "shareFromCommon": {
      "copy": "העתק",
      "copied": "הועתק",
      "open": "פתח",
      "embed": "הטמע בדף אינטרנט",
      "embedExplain": "השתמש בקוד ה- HTML הבא כדי להטמיע את הסיפור בדף אינטרנט.",
      "size": "גודל (רוחב/גובה):",
      "autoplayLabel": "מצב ניגון אוטומטי",
      "autoplayExplain1": "מצב ניגון אוטומטי יתקדם בסיפור שלך במרווחים קבועים. מצב זה אידיאלי לצג תצוגה בקיוסק או לצג ציבורי, אבל שים לב שבמצבים אחרים, הוא עשוי להקשות על קריאת הסיפור. ישות זו אינה נתמכת בתצוגות קטנות.",
      "autoplayExplain2": "כאשר מצב זה פעיל, קיימים פקדים להפעלה/הפסקה של הסיפור ולהתאמת מהירות הניווט.",
      "linksupdated": "הקישורים התעדכנו!"
    },
    "theme": {
      "lightLabel": "בהיר",
      "darkLabel": "כהה"
    }
  }
});