/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "कन्टेन्ट के लिए लिंक",
      "urls_short": "लिंक",
      "contentType": {
        "error": "कोई अधिकृत मीडिया नहीं है।",
        "imageOnly": "कहानी के इस भाग में, आप एक छवि जोड़ सकते हैं।",
        "imageAndVideo": "कहानी के इस भाग में, आप एक छवि या एक वीडियो जोड़ सकते हैं।",
        "imageVideoWebpage": "कहानी के इस भाग में, आप एक छवि, वीडियो, या एक वेबपेज जोड़ सकते हैं।"
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "\"${searchterm}\" के लिए खोज रहें हैं...",
        "searchedFor": "\"${searchterm}\" के लिए परिणाम",
        "albumsOf": "${username} की एलबम",
        "noPhotosFound": "कोई भी तस्वीर आपकी खोज से नहीं मिली। कृपया पुन: प्रयास करें।",
        "noItemsFound": "कोई भी आइटम आपकी खोज से नहीं मिला। कृपया पुन: प्रयास करें।",
        "noItemsInThisStory": "अभी तक इस कहानी में ArcGIS से कोई भी सामग्री नहीं जोड़ी गयी है।",
        "limitReached": "100 आइटम दिखा रहे हैं। यदि आप वह नहीं पाते है जो आपको चहिए, तो कीवर्ड से खोज का प्रयास करें।",
        "galleryItems": {
          "uploadError": "क्षमा करें, यह आइटम अपलोड होने में विफल रहा।"
        },
        "agol": {
          "remove1": "अपने ArcGIS खाते से इस अप्रयुक्त छवि को हटा दें।",
          "remove2": "(यदि आप इसका उपयोग बाद में करने का निर्णय करते हैं तो आपको इसे पुनः अपलोड करना होगा।)",
          "removeFailed": "इस अप्राप्य छवि को इस सूची से निकाल दें।",
          "modified": "संशोधित ${date}",
          "uploaded": "अपलोड की गई ${date}",
          "contentByAuthor": "${author} से ${contentType}"
        },
        "googlePhotos": {
          "searchAndBrowse": "${Picasa} या ${Google+} पर फ़ोटो ब्राउज़ करें"
        },
        "flickr": {
          "photostream": "फोटोस्ट्रीम",
          "searchAndBrowse": "${Flickr} पर फ़ोटो खोजें और ब्राउज़ करें"
        },
        "unsplash": {
          "searchAndBrowse": "${Unsplash} पर तस्वीरें खोजें",
          "photoBy": "${username} से फोटो",
          "userLink": "${username} के ${Unsplash} पेज पर जाएँ"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "वेब पर कन्टेन्ट के लिए लिंक",
            "imageOnly": "वेब पर एक छवि के लिए लिंक",
            "imageAndVideo": "एक छवि या वेब पर वीडियो के लिए लिंक"
          },
          "linkText": {
            "imageOnly": "ऊपर दिये बॉक्स में, आप तस्वीरों पर सीधे लिंक कर सकते हैं।",
            "imageAndVideo1": "ऊपर दिये बॉक्स में, आप ${YouTube} और ${Vimeo} से विडियो के लिए लिंक या आईफ्रेम कोड पेस्ट कर सकते हैं।",
            "imageAndVideo2": "आप तस्वीरों पर सीधे लिंक भी कर सकते हैं।",
            "imageVideoWebpage1": "ऊपर दिये बॉक्स में, आप ${YouTube} और ${Vimeo} से विडियो के लिए लिंक या आईफ्रेम कोड पेस्ट कर सकते हैं।",
            "imageVideoWebpage2": "आप फोटो, वेब पेज, या वेब ऐप्लिकेशनों पर सीधे लिंक कर सकते हैं।",
            "ender": "जब संभव हो, सुरक्षित (https) लिंक का उपयोग करें।"
          },
          "embedProtocol": {
            "embedProtocolLabel": "किसी सुरक्षित कनेक्शन (https) पर पेज लोड करें",
            "embedProtocolWarning1": "यदि यह पेज आपकी कहानी में लोड नहीं होता है, तो इसे वेब सुरक्षा कारणों से एम्बेडेड नहीं किया जा सकता।",
            "embedProtocolWarning2": "यदि यह पेज आपकी कहानी में लोड नहीं होता है, तो इस विकल्प को अचयनित करें और पुनः कोशिश करें। यदि पेज अभी भी लोड नहीं होता है, तो इसे वेब सुरक्षा कारणों से एम्बेडेड नहीं किया जा सकता।",
            "embedProtocolWarning3": "एक विकल्प के रूप में, किसी नया ब्राउज़र टैब में पेज खोलने के लिए अपनी कहानी में एक लिंक जोड़ें। ${linkText}",
            "linkText": "और अधिक जानें।"
          },
          "placeholder": "${https://}... या ${http://}... या ${<iframe>}",
          "uploadErrors": {
            "generic": "दर्ज किये गए पते के साथ कुछ गलत हो गया। कृपया पुन: प्रयास करें।",
            "imageOnly1": "आपको कहानी के इस भाग में एक छवि का उपयोग करना आवश्यक है।",
            "imageOnly2": "कृपया एक छवि (.jpg, .png, .gif) के लिए एक लिंक प्रदान करें या ${ArcGIS}, ${Flickr}, ${Google+}, या ${Unsplash} से एक छवि चुनें।",
            "imageAndVideo1": "आपको कहानी के इस भाग में किसी छवि या वीडियो का उपयोग करना आवश्यक है।",
            "imageAndVideo2": "कृपया एक छवि (.jpg, .png, .gif) या ${YouTube} या ${Vimeo} पर एक वीडियो के लिए एक लिंक प्रदान करें, ${ArcGIS}, ${Flickr}, ${Google+}, या ${Unsplash} से एक छवि चुनें।",
            "badFormat": "फ़ाइल के लिए जो लिंक आप जोड़ने की कोशिश कर रहे हैं उसका प्रारूप गलत है।",
            "inaccessible": "आप जिस फ़ाइल को जोड़ने की कोशिश कर रहे हैं, वह अनुपस्थित है या पहुँच योग्य नहीं है।",
            "tryAgain": "कृपया पते की जांच करें और पुनः प्रयास करें।",
            "mediaTypes": {
              "VIDEO": "वीडियो",
              "IMAGE": "छवि",
              "generic": "मीडिया"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "ईमेल या ${Picasa}/${Google+} आईडी",
          "helpText": "आप अपनी कहानी के लिए ${Picasa} या ${Google+} पर अपलोड की गए तस्वीरों को जोड़ सकते हैं। अपनी कहानियों में अपने ${Google} खाते में संग्रहीत छवियों का उपयोग करने के बारे में ${helpLinkText}।",
          "helpLinkText": "और अधिक जानें",
          "cannotFindUser": "प्रयोक्ता ${username} नहीं मिला। कृपया पुन: प्रयास करें।"
        },
        "unsplash": {
          "placeholder": "तस्वीरों के लिए खोजें",
          "aboutText": "${Unsplash} उच्च गुणवत्ता फोटो वाली एक मुफ्त क्यूरेट संग्रह है।",
          "copyrightText": "${Unsplash} पर प्रकाशित सभी तस्वीरें ${CC0} लाइसेंस के अन्तर्गत लाइसेंस प्राप्त है। अधिक जानकारी के लिए ${moreInfoLink} देखें।",
          "moreInfoLink": "यहाँ"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} खाता",
            "text": "सभी ${Flickr}"
          },
          "placeholders": {
            "user": "खाता खोजें",
            "userText": "इस खाते को तस्वीरों के लिए खोजें",
            "text": "तस्वीरों के लिए खोजें"
          },
          "errors": {
            "cannotFindUser": "उपयोगकर्ता ${username} नहीं मिला।",
            "noUserPhotos": "${username} की कोई सार्वजनिक तस्वीरें नहीं हैं।",
            "didYouMean": "क्या आपका मतलब ${username} था?",
            "generalUserError": "उपयोगकर्ता ${username} की खोज करते समय कुछ गलत हो गया।"
          },
          "licenses": {
            "licenseLabel": "लाइसेंस: ",
            "public": "सार्वजनिक डोमेन",
            "commercial": "वाणिज्यिक उपयोग के लिए ठीक",
            "nonCommercial": "गैर-वाणिज्यिक उपयोग के लिए ठीक",
            "reserved": "सर्वाधिकार सुरक्षित",
            "any": "कोई भी लाइसेंस"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "यह कहानी",
            "agol": "ArcGIS Online",
            "portalArcGIS": "ArcGIS का पोर्टल",
            "portal": "पोर्टल",
            "myOrg": "${orgname} संगठन",
            "myContent": "मेरी सामग्री"
          },
          "createContent": {
            "or": "या",
            "dragAndDrop": "छवि(ओं) को यहाँ डालें",
            "uploadImage": "छवि(ओं) के लिए ब्राउज करें",
            "agolInfo": "छवियाँ आपके ArcGIS खाते में संग्रहित होंगी और केवल आपकी कहानी के अंदर ही सुलभ होंगी।",
            "saveBeforeUpload": "एक बार आप इस कहानी को सहेज लेते हैं, आप यहाँ ArcGIS में छवियों को अपलोड कर सकते हैं।",
            "fileTypesImage": "समर्थित फ़ाइल टाइप: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "वेब मैप",
            "webscene": "वेब सीन",
            "image": "छवि",
            "date": "तिथि",
            "sortByDate": "तिथि के अनुसार छांटें",
            "title": "शीर्षक",
            "sortByTitle": "शीर्षक के अनुसार छांटें",
            "views": "दृश्य",
            "search": "कीवर्ड या आईडी के आधार पर खोजें"
          }
        }
      }
    }
  }
});