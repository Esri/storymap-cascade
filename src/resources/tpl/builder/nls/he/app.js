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
        "logoSharing": "לוגו ושיתוף",
        "theme": "הופעה"
      },
      "bookmarks": {
        "title": "קטע",
        "bookmark": "סימנייה",
        "intro": "סימניות וקישורים לקטעי סיפורים המוצגים בכותרת. יצירת סימניות תמציתיות עבור הקטעים העיקריים של הסיפור עוזרת לקוראים להתמצא.",
        "sequentialDefault": "קטע סיפור (לא נמצא טקסט)",
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
      },
      "appearance": {
        "themeLabel": "ערכת נושא",
        "fontLabel": "גופנים",
        "previewLabel": "תצוגה מקדימה",
        "fontsTitleLabel": "כותרות",
        "fontsBodyLabel": "גוף",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "שער",
      "creditsLabel": "קרדיטים",
      "betaFeedback": "משוב",
      "betaNote": "ספר לנו מה דעתך על ${APP_NAME} וציין אם משהו אינו פועל כשורה.",
      "notSharedNote": "הסיפור שלך לא משותף, רק אתה יכול לראות אותו.",
      "organizationWarning": "כדי שאנשים אחרים יוכלו לראות את הסיפור עליך גם לשתף את הסצנות, שכבות הסצנות והאפליקציות המוטבעות שלו עם הארגון שלך. מפות ושכבות של מפות משותפות באופן אוטומטי.",
      "publicWarning": "כדי שאנשים אחרים יוכלו לראות את הסיפור, עליך גם לשתף עם כולם את ה, שכבות ה והאפליקציות המוטבעות שלו. מפות ושכבות של מפות משותפות באופן אוטומטי.",
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
        "mobile": "מכשיר נייד",
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
        "large": "גדול",
        "noCrop": "אל תחתוך תמונות גבוהות",
        "noCropTallTooltip": "אי חיתוך של תמונה גבוהה יוצר השפעה דרמטית על הקוראים ודורש גלילה כדי לראות את התמונה כולה."
      },
      "background": {
        "noCrop": "אל תחתוך",
        "mostImportantPart": "בחר את הנקודה החשובה ביותר",
        "cropExplanationImmersive": "בחר נקודה בתמונה כדי לקבוע את אופן החיתוך שלה במסכים בגדלים שונים. הנקודה שתבחר תהיה גלויה תמיד. סמן את 'אל תחתוך' אם התמונה צריכה להיות גלויה במלואה.",
        "cropExplanation": "בחר נקודה בתמונה כדי לקבוע את אופן החיתוך שלה במסכים בגדלים שונים. הנקודה שתבחר תהיה גלויה תמיד.",
        "color": "צבע",
        "previews": "תצוגות מקדימות"
      },
      "altMedia": {
        "alternativeMedia": "מקורות מדיה חלופיים",
        "explanation": "מקורות מדיה מסוימים אינם נתמכים או ייתכן שלא יפעלו היטב במכשירים ניידים. השתמש בפאנל זה כדי לבחור פריט חלופי וידידותי יותר למכשיר נייד אשר יוצג במקום מקור מדיה זה כאשר הסיפור שלך יוצג בטלפון או בטאבלט.",
        "changeAltImage": "שנה תמונה",
        "uploadAltImage": "הוסף תמונה"
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
      "sequence": "סיפור",
      "immersive": "סוחף",
      "title": "כותרת"
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
        "deleted": "פריט זה נמחק.",
        "inaccessible": "אין גישה לתוכן זה.",
        "unauthorized": "אין לך הרשאה להציג תוכן זה.",
        "unshared": "פריט זה אינו משותף כמו הסיפור שלך.",
        "othersUnshared": "פריט זה אינו משותף כמו הסיפור שלך.",
        "subscriptionContent": "מפה זו מכילה שכבת מנוי.",
        "premiumContent": "מפה זו מכילה שכבת פרימיום.",
        "secureService": "מפה זו מכילה שכבה מאובטחת."
      },
      "contentIssues": {
        "noAltImage": "מדיה לא נתמכת במכשירים ניידים",
        "altImageBroken": "התמונה החלופית המוגדרת עבור פריט מדיה זה אינה נגישה"
      },
      "contentWarnings": {
        "noAltImage": "סוג מדיה זה אינו נתמך במכשירים ניידים. ספק תמונה חלופית שתוצג כאשר הסיפור יוצג במכשירים ניידים.",
        "noAltImageAlt": "סוג מדיה זה אינו נתמך במכשירים ניידים. בכרטיסיה 'נייד', ספק תמונה חלופית שתוצג כאשר הסיפור יוצג במכשירים ניידים."
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