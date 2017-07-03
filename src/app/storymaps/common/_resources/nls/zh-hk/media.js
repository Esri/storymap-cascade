/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "連結至內容",
      "urls_short": "連結",
      "contentType": {
        "error": "無授權的媒體。",
        "imageOnly": "在故事的此部分中，您可以新增圖像。",
        "imageAndVideo": "在故事的此部分中，您可以新增圖像或影片。",
        "imageVideoWebpage": "在故事的此部分中，您可以新增圖像、影片或網頁。"
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "正在搜尋 \"${searchterm}\"...",
        "searchedFor": "搜尋 \"${searchterm}” 的結果",
        "albumsOf": "${username} 的圖片集",
        "noPhotosFound": "無符合搜尋的相片。請再試一次。",
        "noItemsFound": "無符合搜尋的項目。請再試一次。",
        "noItemsInThisStory": "尚未將 ArcGIS 的內容新增至此故事。",
        "limitReached": "正在顯示 100 個項目。如果找不到需要的項目，請嘗試關鍵字搜尋。",
        "galleryItems": {
          "uploadError": "很抱歉，無法上傳此項目。"
        },
        "agol": {
          "remove1": "從您的 ArcGIS 帳號刪除此未使用的圖像",
          "remove2": "(如果決定稍後使用它，您將需要重新上傳它)。",
          "removeFailed": "從此清單移除此無法存取的圖像。",
          "modified": "修改的 ${date}",
          "uploaded": "上傳的 ${date}",
          "contentByAuthor": "按 ${author} 排列的 ${contentType}"
        },
        "googlePhotos": {
          "searchAndBrowse": "在 ${Picasa} 或 ${Google+} 上瀏覽相片"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "在 ${Flickr} 上搜尋和瀏覽相片"
        },
        "unsplash": {
          "searchAndBrowse": "在 ${Unsplash} 上搜尋相片",
          "photoBy": "按 ${username} 排列相片",
          "userLink": "移至 ${username} 的 ${Unsplash} 頁面"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "連結至 Web 上的內容",
            "imageOnly": "連結至 Web 上的圖像",
            "imageAndVideo": "連結至 Web 上的圖像或影片"
          },
          "linkText": {
            "imageOnly": "在上述方塊中，您可以直接連結至相片。",
            "imageAndVideo1": "在上述方塊中，您可以從 ${YouTube} 和 ${Vimeo} 貼上影片的連結或 iframe 代碼。",
            "imageAndVideo2": "您也可以直接連結到相片。",
            "imageVideoWebpage1": "在上述方塊中，您可以從 ${YouTube} 和 ${Vimeo} 貼上影片的連結或 iframe 代碼。",
            "imageVideoWebpage2": "您也可以直接連結到相片、網頁或 Web 應用程式。",
            "ender": "可行的話，使用安全 (https) 連結。"
          },
          "embedProtocol": {
            "embedProtocolLabel": "透過安全連線 (https) 載入頁面",
            "embedProtocolWarning1": "若您的故事未載入此網頁，則基於 Web 安全性原因將無法內嵌它。",
            "embedProtocolWarning2": "若您的故事未載入此網頁，請取消勾選此選項並再試一次。若仍未載入此網頁，則基於 Web 安全性原因將無法內嵌它。",
            "embedProtocolWarning3": "替代方案是在敘述中新增連結，以便在新的瀏覽器頁籤中開啟網頁。${linkText}",
            "linkText": "瞭解詳細資訊。"
          },
          "placeholder": "${https://}... 或 ${http://}... 或 ${<iframe>}",
          "uploadErrors": {
            "generic": "輸入的位址發生了一些錯誤。請再試一次。",
            "imageOnly1": "您必須在故事的此部分中使用圖像。",
            "imageOnly2": "請提供圖像 (.jpg、.png、.gif) 的連結，或從 ${ArcGIS}、${Flickr}、${Google+} 或 ${Unsplash} 選擇圖像。",
            "imageAndVideo1": "您必須在故事的此部分中使用圖像或影片。",
            "imageAndVideo2": "請提供圖像 (.jpg、.png、.gif)，或 ${YouTube} 或 ${Vimeo} 上影片的連結，或從 ${ArcGIS}、${Flickr}、${Google+} 或 ${Unsplash} 選擇圖像。",
            "badFormat": "您正嘗試新增的檔案之連結格式不正確。",
            "inaccessible": "您正嘗試新增的檔案遺失或無法存取。",
            "tryAgain": "請檢查位址並重試。",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "圖像",
              "generic": "媒體"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "電子郵件或 ${Picasa}/${Google+} ID",
          "helpText": "您可以將上傳到 ${Picasa} 或 ${Google+} 的相片新增到您的故事。圖像使用的相關 ${helpLinkText} 儲存在您故事的 ${Google} 帳號中。",
          "helpLinkText": "瞭解詳細資訊",
          "cannotFindUser": "找不到使用者 ${username}。請再試一次。"
        },
        "unsplash": {
          "placeholder": "搜尋相片",
          "aboutText": "${Unsplash} 是免費、高品質的相片精選集。",
          "copyrightText": "在 ${Unsplash} 上發佈的所有相片皆經 ${CC0} 授權。如需詳細資訊，${moreInfoLink}。",
          "moreInfoLink": "此處"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} 帳號",
            "text": "全部 ${Flickr}"
          },
          "placeholders": {
            "user": "搜尋帳號",
            "userText": "搜尋此帳號以取得相片",
            "text": "搜尋相片"
          },
          "errors": {
            "cannotFindUser": "找不到使用者 ${username}。",
            "noUserPhotos": "${username} 沒有任何公開相片。",
            "didYouMean": "您的意思是 ${username}?",
            "generalUserError": "搜尋使用者 ${username} 時發生了一些錯誤。"
          },
          "licenses": {
            "licenseLabel": "授權: ",
            "public": "公開領域",
            "commercial": "適用於商業用途",
            "nonCommercial": "適用於非商業用途",
            "reserved": "保留所有權利",
            "any": "任何授權"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "此故事",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "入口網站",
            "myOrg": "${orgname} 組織",
            "myContent": "我的內容"
          },
          "createContent": {
            "or": "或",
            "dragAndDrop": "在這裡放置圖像",
            "uploadImage": "瀏覽圖像",
            "agolInfo": "圖片將儲存在您的 ArcGIS 帳號中，並可在您的故事中存取。",
            "saveBeforeUpload": "儲存此故事後，您可以在裡將圖像上傳到 ArcGIS。",
            "fileTypesImage": "支援的檔案類型: .png、.jpeg、.jpg、.gif、.bmp"
          },
          "filterAndSort": {
            "webmap": "Web 地圖",
            "webscene": "Web 場景",
            "image": "影像",
            "date": "日期",
            "sortByDate": "按日期排序",
            "title": "標題",
            "sortByTitle": "按標題排序",
            "views": "檢視",
            "search": "按關鍵字或 ID 搜尋"
          }
        }
      }
    }
  }
});