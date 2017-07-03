/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "קישור לתוכן",
      "urls_short": "קישור",
      "contentType": {
        "error": "אין מדיה מאושרת.",
        "imageOnly": "בחלק הזה של הסיפור ניתן להוסיף תמונה.",
        "imageAndVideo": "בחלק הזה של הסיפור ניתן להוסיף תמונה או סרטון.",
        "imageVideoWebpage": "בחלק הזה של הסיפור ניתן להוסיף תמונה, סרטון או דף אינטרנט."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "מחפש \"${searchterm}\"...",
        "searchedFor": "תוצאות החיפוש עבור \"${searchterm}\"",
        "albumsOf": "האלבומים של ${username}",
        "noPhotosFound": "לא נמצאו תמונות שתאמו לחיפוש שלך. נסה שוב.",
        "noItemsFound": "לא נמצאו פריטים שתאמו לחיפוש שלך. נסה שוב.",
        "noItemsInThisStory": "לחלק הזה של הסיפור לא נוסף עדיין תוכן מ-ArcGIS.",
        "limitReached": "מציג 100 פריטים. אם לא מצאת את הפריט שחיפשת, נסה חיפוש לפי מילות מפתח.",
        "galleryItems": {
          "uploadError": "מצטערים, ההעלאה של הפריט הזה נכשלה."
        },
        "agol": {
          "remove1": "מחק את התמונה הזו, שלא נמצאת בשימוש, מחשבון ArcGIS שלך.",
          "remove2": "(יהיה עליך להעלות אותה מחדש אם תחליט להשתמש בה במועד מאוחר יותר.)",
          "removeFailed": "הסר מהרשימה את התמונה הזו, שלא ניתן לגשת אליה.",
          "modified": "תאריך שינוי: ${date}",
          "uploaded": "תאריך העלאה: ${date}",
          "contentByAuthor": "${contentType} מאת ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "עיין בתמונות ב-${Picasa} או ב-${Google+}"
        },
        "flickr": {
          "photostream": "זרם תמונות",
          "searchAndBrowse": "חפש תמונות ועיין בהן ב-${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "חפש תמונות ב-${Unsplash}",
          "photoBy": "התמונה צולמה על-ידי ${username}",
          "userLink": "עבור אל הדף של ${username} ב-${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "קשר לתוכן באינטרנט",
            "imageOnly": "קשר לתמונה באינטרנט",
            "imageAndVideo": "קשר לתמונה או לסרטון באינטרנט"
          },
          "linkText": {
            "imageOnly": "בתיבה לעיל ניתן לקשר ישירות לתמונות.",
            "imageAndVideo1": "בתיבה לעיל ניתן להדביק קישורים או קוד iframe לסרטונים מ-${YouTube} ומ-${Vimeo}.",
            "imageAndVideo2": "ניתן גם לקשר ישירות לתמונות.",
            "imageVideoWebpage1": "בתיבה לעיל ניתן להדביק קישורים או קוד iframe לסרטונים מ-${YouTube} ומ-${Vimeo}.",
            "imageVideoWebpage2": "בנוסף, ניתן לקשר ישירות לתמונות, לדפי אינטרנט או ליישומי אינטרנט.",
            "ender": "במידת האפשר, השתמש בקישורים מאובטחים (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "טען דף באמצעות חיבור מאובטח (https)",
            "embedProtocolWarning1": "אם הדף הזה לא נטען בסיפור שלך, לא ניתן לשבץ אותו משיקולי אבטחת אינטרנט.",
            "embedProtocolWarning2": "אם הדף הזה לא נטען בסיפור שלך, בטל את סימון האפשרות ונסה שוב. אם הדף עדיין לא נטען, לא ניתן לשבץ אותו משיקולי אבטחת אינטרנט.",
            "embedProtocolWarning3": "לחלופין, הוסף קישור בסיפור שלך לפתיחת הדף בכרטיסיית דפדפן חדשה. ${linkText}",
            "linkText": "למידע נוסף."
          },
          "placeholder": "${https://}... או ${http://}... או ${<iframe>}",
          "uploadErrors": {
            "generic": "משהו השתבש בקשר לכתובת שהוזנה. נסה שוב.",
            "imageOnly1": "בחלק הזה של הסיפור עליך להשתמש בתמונה.",
            "imageOnly2": "ספק קישור לתמונה (‎.jpg,‏ ‎.png,‏ ‎.gif), או בחר תמונה מ-${ArcGIS}, ‏${Flickr}, ‏${Google+}או ${Unsplash}.",
            "imageAndVideo1": "בחלק הזה של הסיפור עליך להשתמש בתמונה או בסרטון.",
            "imageAndVideo2": "ספק קישור לתמונה (‎.jpg,‏ ‎.png,‏ ‎.gif) או לסרטון ב-${YouTube} או ב-${Vimeo}, או בחר תמונה מ-${ArcGIS}, ‏${Flickr}, ‏${Google+}או ${Unsplash}.",
            "badFormat": "הקישור לקובץ שאתה מנסה להוסיף מעוצב בצורה שגויה.",
            "inaccessible": "אין גישה לקובץ שאתה מנסה להוסיף, או שהמדיה חסרה.",
            "tryAgain": "בדוק את הכתובת ונסה שוב.",
            "mediaTypes": {
              "VIDEO": "סרטון",
              "IMAGE": "תמונה",
              "generic": "מדיה"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "דואר אלקטרוני או מזהה ${Picasa}/‏${Google+}",
          "helpText": "ניתן להוסיף לסיפור שלך תמונות שהועלו ל-${Picasa} או ל-${Google+}.‏ ${helpLinkText} על שימוש בתמונות מחשבון ${Google} בסיפורים שלך.",
          "helpLinkText": "מידע נוסף",
          "cannotFindUser": "לא ניתן למצוא את ${username}. נסה שוב."
        },
        "unsplash": {
          "placeholder": "חפש תמונות",
          "aboutText": "${Unsplash} הוא אוסף מנוהל של תמונות באיכות גבוהה הזמינות ללא תשלום.",
          "copyrightText": "כל התמונות ב-${Unsplash} מתפרסמות בכפוף לרישיון ${CC0}. מידע נוסף זמין ${moreInfoLink}.",
          "moreInfoLink": "כאן"
        },
        "flickr": {
          "searchType": {
            "account": "חשבון ${Flickr}",
            "text": "כל ${Flickr}"
          },
          "placeholders": {
            "user": "חפש חשבון",
            "userText": "חפש תמונות בחשבון הזה",
            "text": "חפש תמונות"
          },
          "errors": {
            "cannotFindUser": "לא ניתן למצוא את ${username}.",
            "noUserPhotos": "למשתמש ${username} אין תמונות ציבוריות.",
            "didYouMean": "האם התכוונת למשתמש ${username}?",
            "generalUserError": "משהו השתבש בזמן הניסיון לחפש את ${username}."
          },
          "licenses": {
            "licenseLabel": "רישיון: ",
            "public": "דומיין ציבורי",
            "commercial": "מאושר לשימוש מסחרי",
            "nonCommercial": "מאושר לשימוש לא מסחרי",
            "reserved": "כל הזכויות שמורות",
            "any": "כל רישיון"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "הסיפור הזה",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "פורטל",
            "myOrg": "הארגון ${orgname}",
            "myContent": "התוכן שלי"
          },
          "createContent": {
            "or": "או",
            "dragAndDrop": "גרור תמונות לכאן",
            "uploadImage": "עיין כדי למצוא תמונות",
            "agolInfo": "תמונות יאוחסנו בחשבון ArcGIS שלך והגישה אליהן תהיה רק מחוץ לסיפור.",
            "saveBeforeUpload": "אחרי שמירת הסיפור, תוכל להעלות מכאן תמונות ל-ArcGIS.",
            "fileTypesImage": "סוגי קבצים נתמכים: ‎.png,‏ ‎.jpeg,‏ ‎.jpg,‏ ‎.gif,‏ ‎.bmp"
          },
          "filterAndSort": {
            "webmap": "מפת Web",
            "webscene": "סצנת Web",
            "image": "תמונה",
            "date": "תאריך",
            "sortByDate": "מיון לפי תאריך",
            "title": "כותרת",
            "sortByTitle": "מיון לפי כותרת",
            "views": "תצוגות",
            "search": "חפש לפי מזהה או מילת מפתח"
          }
        }
      }
    }
  }
});