/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "בצע",
      "close": "סגור"
    },
    "header": {
      "sharingNotAvailable": "אפשרות זו אינה זמינה עד שתשתף את הסיפור",
      "edit": "ערוך"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "סימניות",
        "logoSharing": "לוגו ושיתוף"
      },
      "bookmarks": {
        "title": "קטע",
        "bookmark": "סימנייה",
        "intro": "סימניות וקישורים לקטעי סיפורים המוצגים בכותרת. יצירת סימניות תמציתיות עבור הקטעים העיקריים של הסיפור עוזרת לקוראים להתמצא.",
        "sequentialDefault": "קטע סדרתי (לא נמצא טקסט)",
        "immersiveDefault": "קטע סוחף (לא נמצא טקסט)",
        "titleDefault": "קטע כותרת (לא נמצא טקסט)",
        "coverDefault": "קטע שער (לא נמצא טקסט)",
        "coverAppendage": "(שער)"
      },
      "logoSharing": {
        "logo": "לוגו",
        "logoButton": "השתמש בלוגו של ${ESRI}",
        "useOrgLogo": "השתמש בלוגו של הארגון שלי",
        "useOrgLogoHelp": "השתמש בלוגו שסיפק מנהל המערכת",
        "logoLink": "קישור ללוגו",
        "logoUploadProgress": "העלאת לוגו מתבצעת",
        "logoUploadSuccess": "הלוגו הועלה בהצלחה",
        "logoUploadError": "העלאת הלוגו נכשלה, חוזר ללוגו של ${ESRI}",
        "customHeaderText": "שורת תגים",
        "taglineLinkDisabledTooltip": "הזן שורת תגים כדי להפעיל את הקישור",
        "link": "קישור עם שורת תגים",
        "enableSocialSharing": "הצג לחצן שיתוף"
      }
    },
    "builderPanel": {
      "coverLabel": "שער",
      "creditsLabel": "קרדיטים",
      "betaFeedback": "משוב",
      "betaNote": "ספר לנו מה דעתך על ${APP_NAME} וציין אם משהו אינו פועל כשורה.",
      "notSharedNote": "הסיפור שלך לא משותף, רק אתה יכול לראות אותו.",
      "organizationWarning": "כדי שאנשים אחרים יוכלו לראות את הסיפור עליך גם לשתף את הסצנות, שכבות הסצנות והאפליקציות המוטבעות שלו עם הארגון שלך. מפות ושכבות של מפות משותפות באופן אוטומטי.",
      "publicWarning": "כדי שאנשים אחרים יוכלו לראות את הסיפור עליך גם לשתף באופן ציבורי את הסצנות, שכבות הסצנות והאפליקציות המוטבעות שלו. מפות ושכבות של מפות משותפות באופן אוטומטי.",
      "addTitleNote": "הוסף כותרת בשער כדי לשמור",
      "saveError": "אירעה שגיאה בשמירת הסיפור.",
      "duplicate": "שכפול",
      "organize": "ארגן",
      "done": "סיום",
      "invite": "בתהליך הכנת הסיפור, הקטעים יופיעו כאן...",
      "mystoriestooltip": "אשף בניית המפלים מתריע על בעיות בסיפור ועוזר לתקן אותן. סצנות ואפליקציות מוטבעות אינן נבדקות ולכן עליך לבדוק אותן ידנית."
    },
    "immersiveViewPanel": {
      "transition": "מעבר",
      "fade": "עמעום",
      "fadeSlow": "עמעום איטי",
      "swipeVertical": "החלקה אנכית",
      "swipeHorizontal": "החלקה אופקית",
      "none": "ללא",
      "disabledConsecutiveSameMedia": "האפשרות אינה זמינה כאשר תצוגות עוקבות משתמשות באותה מדיה",
      "disabledTooltipMap": "כדי להשתמש במעבר זה, השכבות הגלויות בשתי התצוגות חייבות להיות שונות זו מזו ושאר מאפייני המפה צריכים להיות זהים",
      "disabledConsecutiveSameMap": "האפשרות אינה זמינה כאשר תצוגות עוקבות משתמשות באותה מפה",
      "disabledNotInBeta": "האפשרות אינה זמינה כאשר תצוגות עוקבות משתמשות באותה מפה",
      "disabledNonConsecutive": "האפשרות אינה זמינה מכיוון שקיים מופע נוסף של מדיה זו שאינו עוקב",
      "addMedia": "הוסף מדיה",
      "invite": "בתהליך הכנת הקטע הסוחף, התצוגות יופיעו כאן..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "הופעה",
        "manage": "נהל",
        "size": "גודל",
        "background": "רקע",
        "issues": "בעיות",
        "fixIssues": "תקן בעיות"
      },
      "manage": {
        "changeMedia": "שנה מדיה",
        "edit": "ערוך",
        "editAside": "נפתח בכרטיסיית דפדפן חדשה. לאחר שמירת שינויי העריכה, שמור וטען מחדש את הסיפור כדי לראות את השינויים.",
        "remove": "הסר"
      },
      "appearance": {
        "homeView": "תצוגה ראשונית",
        "audio": "צליל",
        "on": "ב-",
        "muted": "מושתק",
        "volumeAside": "הווידאו יופעל באופן אוטומטי כאשר הקורא יגיע לתצוגה זו. אם תשתיק את הקול, הקורא לא יוכל להפעיל אותו.",
        "view": "הצג",
        "resetLocation": "איפוס מיקום",
        "resetLayers": "איפוס שכבות",
        "clearPopup": "נקה פריט מוקפץ",
        "interaction": "אינטראקציה",
        "interactionDisabled": "אינטראקציה מושבתת",
        "buttonToEnable": "לחצן להפעלה",
        "interactionEnabled": "אינטראקציה מופעלת",
        "interactionAside": "*התקנים תומכי מגע יציגו לחצן אינטראקציה",
        "slide": "שקף",
        "noSlides": "אין שקפים זמינים.",
        "mapExtentPrompt": "עדכן את המפה כדי לספר את הסיפור שלך, לחץ על סימן הביקורת כדי לשמור את השינויים"
      },
      "sectionAppearance": {
        "layout": "פריסת עמוד",
        "theme": "ערכת נושא"
      },
      "size": {
        "small": "קטן",
        "medium": "בינונית",
        "large": "גדול"
      },
      "background": {
        "noCrop": "אל תחתוך את התמונה",
        "mostImportantPart": "בחר את הנקודה החשובה ביותר",
        "cropExplanationImmersive": "בחר נקודה בתמונה כדי לקבוע את אופן חיתוך התמונה במסכים בגדלים שונים. הנקודה שתבחר תהיה גלויה תמיד. סמן את התיבה מתחת אם המדיה צריכה להיות גלויה במלואה.",
        "cropExplanation": "בחר נקודה בתמונה כדי לקבוע את אופן חיתוך התמונה במסכים בגדלים שונים. הנקודה שתבחר תהיה גלויה תמיד.",
        "color": "צבע",
        "previews": "תצוגות מקדימות"
      }
    },
    "imageGallery": {
      "addImage": "הוסף תמונה",
      "moveBackward": "הזז אחורה",
      "moveForward": "הזז קדימה"
    },
    "cover": {
      "titlePrompt": "הזן את כותרת הסיפור...",
      "subtitlePrompt": "גלול למטה כדי להתחיל או הזן כותרת משנה אופציונלית",
      "mediaPlaceholder": "הוסף תמונה או וידאו",
      "saveError": "השמירה נכשלה, כבר קיים פריט עם כותרת כזו"
    },
    "credits": {
      "sectionInvite": "הוסף קטע של קרדיטים",
      "warning": "יש למלא את שני השדות",
      "content": "תוכן...",
      "source": "מקור...",
      "linkPrompt": "קישור אופציונלי...",
      "introductionPlaceholder": "הוסף מבוא אופציונלי לקטע הקרדיטים..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "ערכת נושא"
      },
      "panelConfig": {
        "position": "מיקום",
        "theme": "ערכת נושא",
        "size": "גודל",
        "background": "רקע",
        "layout": "גלילה (בכל החלוניות)"
      }
    },
    "title": {
      "placeholder": "הזן כותרת..."
    },
    "media": {
      "imageUpload": "העלאת תמונה מתבצעת...",
      "imageUploadSuccess": "התמונה הועלתה בהצלחה",
      "imageUploadFail": "העלאת התמונה נכשלה"
    },
    "controller": {
      "sectionOrganize": "סידרת את הקטעים",
      "immersiveOrganize": "סידרת את התצוגות",
      "sectionDelete": "מחקת קטע",
      "viewDelete": "מחקת תצוגה"
    },
    "notification": {
      "cancel": "בטל",
      "close": "סגור",
      "undo": "בטל"
    },
    "sections": {
      "sequence": "קטע עלילתי",
      "immersive": "קטע סוחף",
      "title": "קטע כותרת"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "תמונה",
        "webmap": "מפה",
        "webscene": "סצנה",
        "video": "וידאו",
        "content": "תוכן",
        "webpage": "דף אינטרנט"
      },
      "placeholders": {
        "generic": "אין גישה לתוכן זה.",
        "deleted": "פריט המדיה ${media-type} נמחק.",
        "inaccessible": "אין גישה לפריט המדיה ${media-type}.",
        "unauthorized": "אין לך הרשאה להציג את פריט המדיה ${media-type}.",
        "unshared": "פריט המדיה ${media-type} אינו משותף כמו הסיפור שלך.",
        "othersUnshared": "פריט המדיה ${media-type} אינו משותף כמו הסיפור שלך.",
        "subscriptionContent": "פריט המדיה ${media-type} מכיל שכבת מנוי.",
        "premiumContent": "פריט המדיה ${media-type} מכיל שכבת פרימיום.",
        "secureService": "פריט המדיה ${media-type} מכיל שכבה מאובטחת."
      },
      "mapIssues": {
        "fixButton": "תקן בעיות",
        "nofixButton": "בעיות",
        "mapLabel": "מפה:",
        "summaries": {
          "unshared": "תוכן לא משותף",
          "othersUnshared": "תוכן לא משותף של מישהו אחר",
          "subscriptionContent": "תוכן למנויים",
          "premiumContent": "תוכן פרימיום",
          "secureContent": "תוכן מאובטח",
          "deleted": "תוכן שנמחק",
          "inaccessible": "תוכן לא נגיש",
          "unauthorized": "תוכן לא מורשה"
        },
        "descriptions": {
          "unshared": "תוכן זה אינו משותף כמו הסיפור שלך.",
          "othersUnshared": "תוכן זה שייך למישהו אחר ואינו משותף כמו הסיפור שלך.",
          "othersUnsharedAuthorized": "תוכן זה שייך למישהו אחר, אך יש לך הרשאה לשתף אותו.",
          "inaccessible": "אין גישה לתוכן זה.",
          "deleted": "תוכן זה נמחק.",
          "unauthorized": "אין לך הרשאה להציג תוכן זה.",
          "popupFeatureLayer": "פריטים מוקפצים של שכבת אריחים מגיעים משכבת ישויות שאינה משותפת כמו הסיפור שלך.",
          "subscriptionContent": "עליך לאשר שימוש ציבורי בתוכן למנויים.",
          "premiumContent": "עליך לאשר שימוש ציבורי בתוכן פרימיום.",
          "secureService": "תוכן מאובטח אינו נגיש לקוראים.",
          "missingItemWarning": "הפריט המשויך לשכבה זו נמחק."
        },
        "tooltips": {
          "unshared": "לחץ כאן לקבלת מידע נוסף על שיתוף.",
          "othersUnshared": "אין לך הרשאה לשתף תוכן השייך לאחרים. בקש מהבעלים לשתף את התוכן, הסר את המפה מהסיפור שלך או ערוך את המפה כדי להסיר את השכבות שאינן בבעלותך. לחץ לקבלת מידע נוסף על עריכת מפות.",
          "inaccessible": "הסר את המפה מהסיפור שלך או ערוך אותה כדי להסיר שכבות בלתי נגישות. לחץ לקבלת מידע נוסף על עריכת מפות.",
          "deleted": "הסר את המפה מהסיפור שלך או ערוך אותה כדי להסיר שכבות חסרות. לחץ לקבלת מידע נוסף על עריכת מפות.",
          "unauthorized": "הסר את המפה מהסיפור שלך או ערוך אותה כדי להסיר שכבות בלתי מורשות. לחץ לקבלת מידע נוסף על עריכת מפות.",
          "popupFeatureLayer": "פריטים מוקפצים של שכבת אריחים מגיעים משכבת ישויות שאינה משותפת כמו הסיפור שלך.",
          "subscriptionContent": "תוכן למנויים אינו צורך קרדיטים. לחץ לקבלת מידע נוסף.",
          "premiumContent": "הארגון שלך יחויב בגין קרדיטים בכל פעם שמישהו מציג שכבת פרימיום בסיפור שלך. לחץ לקבלת מידע נוסף.",
          "secureService": "הסר את התוכן המאובטח מהסיפור או לחץ כדי ללמוד כיצד לאשר לאחרים להשתמש בתוכן מאובטח.",
          "missingItemWarning": "שכבה זו עדיין פועלת, אך ייתכן כי חל שינוי בסמלים, בפריטים המוקפצים או בשם שלה. אשר כי מראה השכבה תקין או הסר אותה מהסיפור."
        },
        "fixButtons": {
          "share": "שתף",
          "hide": "הסתר",
          "authorize": "אשר",
          "remove": "הסר",
          "help": "קבל עזרה",
          "ignore": "התעלם",
          "confirm": "אישור",
          "edit": "ערוך מפה"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "חלק מהמפות ומהשכבות שותפו גם הן.",
          "alsoSharedMaps": "חלק מהמפות שותפו גם הן.",
          "alsoSharedLayers": "חלק מהשכבות שותפו גם הן.",
          "sharedOthersContent": "השתמשת בהרשאות הניהול שלך כדי לשתף תוכן של מישהו אחר."
        }
      },
      "storyHealth": {
        "healthy": "אין בעיות",
        "notHealthy": "תקן בעיות",
        "warnings": "ראה אזהרות"
      }
    }
  }
});