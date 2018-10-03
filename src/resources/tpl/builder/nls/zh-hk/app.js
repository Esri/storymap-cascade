/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "套用",
      "close": "關閉"
    },
    "header": {
      "sharingNotAvailable": "分享故事前無法使用此選項",
      "edit": "編輯"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "書簽",
        "logoSharing": "標誌與分享",
        "theme": "外觀"
      },
      "bookmarks": {
        "title": "節",
        "bookmark": "書籤",
        "intro": "書籤是標頭中顯示的故事章節的連結。針對故事的主要章節建立簡要書籤，可協助讀者融入情境。",
        "sequentialDefault": "敘述部分 (找不到文字)",
        "immersiveDefault": "擬真部分 (找不到文字)",
        "titleDefault": "標題部分 (找不到文字)",
        "coverDefault": "封面部分 (找不到文字)",
        "coverAppendage": "(封面)"
      },
      "logoSharing": {
        "logo": "標誌",
        "logoButton": "使用 ${ESRI} 標誌",
        "useOrgLogo": "使用我的組織的標誌",
        "useOrgLogoHelp": "使用您的管理員所提供的標誌",
        "logoLink": "標誌連結",
        "logoUploadProgress": "標誌上傳進行中",
        "logoUploadSuccess": "已成功上傳標誌",
        "logoUploadError": "標誌上傳失敗，正在切換回 ${ESRI} 標誌",
        "customHeaderText": "標籤行",
        "taglineLinkDisabledTooltip": "輸入標籤行以啟用連結",
        "link": "標籤行連結",
        "enableSocialSharing": "顯示分享按鈕"
      },
      "appearance": {
        "themeLabel": "主題",
        "fontLabel": "字體",
        "previewLabel": "預覽",
        "fontsTitleLabel": "標題",
        "fontsBodyLabel": "主體",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "私有",
      "btnOrg": "組織",
      "btnPublic": "公共",
      "btnEveryone": "任何人"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "建立器",
      "buttonSaving": "儲存",
      "buttonSaved": "已儲存",
      "buttonError": "儲存失敗",
      "buttonShare": "分享",
      "buttonSettings": "設定",
      "settingsLogoError": "您的標誌有問題。按一下以深入瞭解。",
      "buttonHelp": "在 GeoNet 上取得說明或提交回饋意見",
      "buttonPreview": "檢視故事",
      "buttonHealth": "健康報告",
      "manageStories": "管理我的故事",
      "closeWithPendingChange": "是否確定要確認此操作？您的變更將遺失。",
      "coverLabel": "封面",
      "creditsLabel": "點數",
      "betaFeedback": "意見",
      "betaNote": "請將您對 ${APP_NAME} 的看法告訴我們，或如果出現某些非預期的狀況，也請告訴我們。",
      "notSharedNote": "您的故事未分享，只有您會看到",
      "organizationWarning": "若要確保其他人可檢視此故事，您也必須與您的組織分享其場景、場景圖層和內嵌的應用程式。會自動分享地圖和地圖圖層。",
      "publicWarning": "若要確保其他人可檢視此故事，您也必須與每個人分享其場景、場景圖層和內嵌的應用程式。會自動分享地圖和地圖圖層。",
      "addTitleNote": "新增封面上要儲存的標題",
      "saveError": "儲存您的故事時出錯。",
      "duplicate": "重複",
      "organize": "組織",
      "done": "完成",
      "invite": "建立故事時，這裡將出現章節。",
      "mystoriestooltip": "串流建立器在您的故事中提示問題，並協助您修正問題。不會檢查場景和內嵌應用程式，因此請手動檢查它們。"
    },
    "immersiveViewPanel": {
      "transition": "轉換",
      "chooseTransition": "選擇轉換",
      "fade": "淡化",
      "fadeSlow": "緩慢淡化",
      "swipeVertical": "垂直滑動",
      "swipeHorizontal": "水平滑動",
      "none": "無",
      "disabledConsecutiveSameMedia": "當連續視圖使用相同的媒體時無法使用",
      "disabledTooltipMap": "若要使用此轉換，兩個視圖中的可見圖層必須不同，且其他地圖屬性必須相同",
      "disabledConsecutiveSameMap": "當連續視圖使用相同的地圖時無法使用",
      "disabledNotInBeta": "當連續視圖使用相同的地圖時無法使用",
      "disabledNonConsecutive": "無法使用，因為此媒體有其他非連續資料",
      "addMedia": "新增媒體",
      "invite": "建立擬真部分時，這裡將出現視圖。"
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "外觀",
        "manage": "管理",
        "size": "尺寸",
        "background": "背景",
        "mobile": "Mobile",
        "issues": "問題",
        "fixIssues": "修復問題"
      },
      "manage": {
        "changeMedia": "變更媒體",
        "edit": "編輯",
        "editAside": "在新瀏覽器頁籤中開啟。儲存編輯內容後，儲存和重新載入此故事可查看變更。",
        "remove": "移除",
        "altTextPlaceholder": "為視障讀者新增此媒體的說明。",
        "altTextHelptip": "替代文字是輔助技術 (如螢幕助讀程式軟體) 所使用的視覺媒體的說明。 這是選用的，但建議您符合 WCAG 和第 508 節之類的 Web 協助工具指導方針。"
      },
      "appearance": {
        "homeView": "初始視圖",
        "audio": "音訊",
        "on": "打開",
        "muted": "已靜音",
        "volumeAside": "當讀者移至此視圖時將自動播放影片。如果靜音，讀者將無法啟用它。",
        "view": "檢視",
        "resetLocation": "重設位置",
        "resetLayers": "重設圖層",
        "clearPopup": "清除快顯視窗",
        "interaction": "互動",
        "interactionDisabled": "互動已停用",
        "buttonToEnable": "要啟用的按鈕",
        "interactionEnabled": "互動已啟用",
        "interactionAside": "* 觸控裝置將顯示互動按鈕。",
        "slide": "投影片",
        "noSlides": "沒有可用的投影片。",
        "mapExtentPrompt": "更新地圖以敘說您的故事，按一下核取記號以儲存變更"
      },
      "sectionAppearance": {
        "layout": "版面配置",
        "theme": "主題"
      },
      "size": {
        "small": "小",
        "medium": "中",
        "large": "大",
        "noCrop": "請勿裁切高圖片",
        "noCropTallTooltip": "不裁切高圖片會對讀者產生重大影響，也就是需要捲動才能看到整張圖片。"
      },
      "background": {
        "noCrop": "請勿裁切",
        "mostImportantPart": "選擇最重要的點",
        "cropExplanationImmersive": "選擇圖片上的某個點，以選擇如何以不同的畫面大小裁切圖片。選擇的點一律可見。如果圖片需要完全可見，請勾選「請勿裁切」。",
        "cropExplanation": "選擇圖片上的某個點，以選擇如何以不同的畫面大小裁切圖片。選擇的點一律可見。",
        "color": "顏色",
        "previews": "預覽"
      },
      "altMedia": {
        "alternativeMedia": "行動的替代圖片",
        "explanation": "部分媒體不受支援，或可能無法在行動裝置上順暢運作。使用此面板來指定圖片，以便在手機或平板電腦上檢視您的故事時，顯示該圖片來取代此媒體。",
        "changeAltImage": "變更圖片",
        "uploadAltImage": "新增替代圖片"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "連結至內容",
        "urls_short": "連結",
        "contentType": {
          "error": "無授權的媒體。",
          "imageOnly": "在故事的此部分中，您可以新增圖像。",
          "imageAndVideo": "在故事的此部分中，您可以新增圖像或影片。",
          "imageVideoWebpage": "在故事的此部分中，您可以新增音訊、圖片、影片或網頁。"
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
            "searchAndBrowse": "在 ${Flickr} 上搜尋和瀏覽相片",
            "captionStarter": "${USERNAME} 在 ${Flickr} 上的相片"
          },
          "unsplash": {
            "searchAndBrowse": "在 ${Unsplash} 上搜尋相片",
            "photoBy": "${username} 的相片",
            "userLink": "移至 ${username} 的 ${Unsplash} 頁面",
            "captionStarter": "${USERNAME} 在 ${Unsplash} 上的相片"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "連結至 Web 上的內容",
              "imageOnly": "連結至 Web 上的圖像",
              "imageAndVideo": "連結至 Web 上的圖像或影片"
            },
            "linkText": {
              "imageOnly": "在上述方塊中，您可以直接連結至相片。",
              "imageAndVideo1": "在上述方塊中，您可以在 ${YouTube} 和 ${Vimeo} 貼上影片的連結或 iframe 代碼。",
              "imageAndVideo2": "您也可以直接連結到相片。",
              "imageVideoWebpage1": "在上述方塊中，您可以在 ${YouTube} 和 ${Vimeo} 上，貼上 Web 內容 (如動態圖表或影片) 的連結或 iframe 代碼。",
              "imageVideoWebpage2": "您也可以直接連結到相片、影片、音訊檔、網頁或 Web 應用程式。",
              "ender": "一律使用安全 (https) 連結。如果內容不支援 https，請在您故事的文字中新增其連結，讓讀者能在新瀏覽器頁籤中檢視它。",
              "httpsError": "連結必須以 HTTPS 開頭"
            },
            "embedProtocol": {
              "embedProtocolLabel": "透過安全連線 (https) 載入頁面",
              "embedProtocolWarning1": "若您的故事未載入此網頁，則基於 Web 安全性原因將無法內嵌它。",
              "embedProtocolWarning2": "若您的故事未載入此網頁，請取消勾選此選項並再試一次。若仍未載入此網頁，則基於 Web 安全性原因將無法內嵌它。",
              "embedProtocolWarning3": "替代方案是在敘述中新增連結，以便在新的瀏覽器頁籤中開啟網頁。${linkText}",
              "linkText": "瞭解詳細資訊。"
            },
            "placeholder": "${https://}... 或 ${<iframe>}",
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
                "VIDEO": "影片",
                "IMAGE": "圖像",
                "generic": "媒體"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "使用協力廠商服務時，即表示您同意其服務條款。 ",
          "googlePhotos": {
            "placeholder": "電子郵件或 ${Picasa}/${Google+} ID",
            "helpText": "您可以將上傳到 ${Picasa} 或 ${Google+} 的相片新增到您的故事。圖像使用的相關 ${helpLinkText} 儲存在您故事的 ${Google} 帳號中。",
            "helpLinkText": "瞭解詳細資訊",
            "cannotFindUser": "找不到使用者 ${username}。請再試一次。"
          },
          "unsplash": {
            "placeholder": "搜尋相片",
            "aboutText": "${Unsplash} 是免費、高品質的相片精選集。",
            "copyrightText": "所有相片都是在 ${Unsplash} 授權下發佈。 如需詳細資訊，${moreInfoLink}。",
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
              "agol": "ArcGIS Online 的項目",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "入口網站",
              "myOrg": "${orgname} 組織",
              "myContent": "我的內容"
            },
            "createContent": {
              "createNewMap": "新建地圖",
              "or": "或",
              "dragAndDropImage": "捨棄圖片",
              "dragAndDropImageAudio": "捨棄圖片或音訊",
              "uploadButton": "瀏覽",
              "agolInfo": "可在此故事中存取上傳的圖片和音訊。",
              "saveBeforeUpload": "儲存此故事後，您可以在這裡將圖片和音訊上傳到 ArcGIS。",
              "fileExtsImage": "支援的類型: png、jpg、gif、bmp。",
              "fileExtsImageAudio": "支援的類型: png、jpg、gif、bmp、mp3。",
              "maxSize": "每個檔案最大 10 MB。"
            },
            "filterAndSort": {
              "webmap": "Web 地圖",
              "webscene": "Web 場景",
              "image": "圖片",
              "audio": "音訊",
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
    },
    "mapEditor": {
      "dialogTitle": "編輯地圖",
      "unauthorizedDomain": "您不在授權的網域上，因此無法使用地圖編輯器",
      "loading": "請稍候，地圖編輯器正在載入",
      "saving": "正在儲存地圖",
      "success": "已儲存地圖",
      "cancelTitle": "放棄任何未儲存的變更?",
      "errorSave": "無法儲存地圖。請重試。",
      "loadFail": "很抱歉，無法載入地圖編輯器",
      "close": "關閉",
      "save": "儲存",
      "confirm": "是，關閉地圖",
      "deny": "否，維持運作"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "在這裡繼續您的故事..."
      },
      "blockAdd": {
        "text": "文字",
        "media": "媒體",
        "title": "標題",
        "immersive": "擬真"
      },
      "link": {
        "invite": "貼上或輸入連結..."
      },
      "color": {
        "choose": "選擇",
        "cancel": "取消",
        "clear": "清晰顏色"
      }
    },
    "imageGallery": {
      "addImage": "新增其他圖片",
      "moveBackward": "向後移動",
      "moveForward": "向前移動"
    },
    "cover": {
      "titlePrompt": "輸入您的故事標題...",
      "subtitlePrompt": "向下捲動以開始使用，或輸入選用的副標題",
      "mediaPlaceholder": "新增您的圖片或影片",
      "saveError": "儲存失敗，您已具有包含此標題的項目"
    },
    "credits": {
      "sectionInvite": "新增點數部分",
      "warning": "兩個欄位都必須填寫",
      "content": "內容...",
      "source": "來源...",
      "linkPrompt": "選用連結...",
      "introductionPlaceholder": "在點數部分中輸入選用簡介..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "主題"
      },
      "panelConfig": {
        "position": "位置",
        "theme": "主題",
        "size": "尺寸",
        "background": "背景",
        "layout": "正在捲動 (適用於所有面板)"
      }
    },
    "title": {
      "placeholder": "輸入標題..."
    },
    "media": {
      "mediaUpload": "媒體上傳進行中...",
      "mediaUploadSuccess": "已成功上傳媒體",
      "mediaUploadFail": "媒體上傳失敗"
    },
    "controller": {
      "sectionOrganize": "已組織部分",
      "immersiveOrganize": "已組織視圖",
      "sectionDelete": "已刪除部分",
      "viewDelete": "已刪除視圖"
    },
    "notification": {
      "cancel": "取消",
      "close": "關閉",
      "undo": "取消"
    },
    "sections": {
      "sequence": "敘述",
      "immersive": "擬真",
      "title": "標題"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "圖像",
        "audio": "音訊",
        "webmap": "地圖",
        "webscene": "場景",
        "video": "video",
        "content": "內容",
        "webpage": "網頁"
      },
      "placeholders": {
        "generic": "此內容無法存取。",
        "deleted": "已刪除此項目。",
        "inaccessible": "此內容無法存取。",
        "unauthorized": "您未取得檢視此內容的授權。",
        "unshared": "此項目未與您的故事分享相同的資訊。",
        "othersUnshared": "此項目未與您的故事分享相同的資訊。",
        "subscriptionContent": "此地圖包含訂閱者圖層。",
        "premiumContent": "此地圖包含高級圖層。",
        "secureService": "此地圖包含安全圖層。"
      },
      "contentIssues": {
        "noAltImage": "媒體可能無法在行動裝置上工作",
        "noAltImageUnsupported": "媒體不受行動裝置支援",
        "noAltImageWarning": "媒體可能無法在行動裝置上工作",
        "altImageBroken": "無法存取為此媒體項目定義的替代圖片",
        "httpMedia": "不安全的媒體",
        "httpContent": "不安全的內容"
      },
      "contentWarnings": {
        "noAltImage": "請務必先在行動裝置上測試您的故事再分享它。如果此媒體未依預期運作，請使用下列按鈕來新增替代圖片，以便在手機或平板電腦上檢視故事時顯示該圖片。",
        "noAltImageUnsupported": "此媒體不會在行動裝置上運作。使用下列按鈕來新增替代圖片，以便在手機或平板電腦上檢視故事時顯示該圖片。",
        "noAltImageWarning": "請務必先在行動裝置上測試您的故事再分享它。如果此媒體未依預期運作，請使用下列按鈕來新增替代圖片，以便在手機或平板電腦上檢視故事時顯示該圖片。",
        "noAltImageAlt": "此媒體類型不受支援，或可能無法在行動裝置上順暢運作。在行動頁籤上，提供在手機或平板電腦上檢視故事時將顯示的替代圖片。"
      },
      "descriptions": {
        "httpAudioUnfixable": "此音訊不支援 HTTPS。請從故事中移除它，或使用連結取代它。",
        "httpAudioUncheckable": "此音訊具有不安全的 (HTTP) URL。 按一下底下的按鈕，試著針對此音訊使用 HTTPS URL。 如果沒有作用，請從故事中移除音訊，或使用超連結取代它。",
        "httpAudioFixable": "此音訊具有不安全的 (HTTP) URL。 按一下底下的按鈕，針對此音訊使用安全 HTTPS URL。",
        "httpWebpageUnfixable": "此網頁不支援 HTTPS。請從故事中移除它，或使用螢幕截圖或連結取代它。",
        "httpWebpageUncheckable": "此網頁具有不安全的 (HTTP) URL。 按一下底下的按鈕，試著針對此網頁使用 HTTPS URL。 如果沒有作用，請從故事中移除網頁，或使用螢幕截圖或超連結取代它。",
        "httpWebpageFixable": "此網頁具有不安全的 (HTTP) URL。 按一下底下的按鈕，針對此網頁使用安全 HTTPS URL。",
        "httpVideoUnfixable": "此影片不支援 HTTPS。請從故事中移除它，或使用螢幕截圖或連結取代它。",
        "httpVideoUncheckable": "此影片具有不安全的 (HTTP) URL。 按一下底下的按鈕，試著針對此影片使用 HTTPS URL。 如果沒有作用，請從故事中移除影片，或使用螢幕截圖或超連結取代它。",
        "httpVideoFixable": "此影片具有不安全的 (HTTP) URL。 按一下底下的按鈕，針對此影片使用安全 HTTPS URL。",
        "httpImageUnfixable": "此圖片不支援 HTTPS。請從故事中移除它，或使用連結取代它。",
        "httpImageUncheckable": "此圖片具有不安全的 (HTTP) URL。 按一下底下的按鈕，試著針對此停片使用 HTTPS URL。 如果沒有作用，請從故事中移除圖片，或使用超連結取代它。",
        "httpImageFixable": "此圖片具有不安全的 (HTTP) URL。 按一下底下的按鈕，針對此圖片使用安全 HTTPS URL。",
        "httpLayer": "此圖層具有不安全的 (HTTP) URL。",
        "inaccessibleLogo": "無法存取此標誌。請使用其他圖片取代它。",
        "httpLogoUnfixable": "此標誌不支援 HTTPS。請使用其他圖片取代它。",
        "httpLogoFixable": "此標誌具有不安全的 (HTTP) URL。請針對標誌使用 HTTPS URL。",
        "httpLogoUncheckable": "此標誌具有不安全的 (HTTP) URL。請針對標誌使用 HTTPS URL，或使用其他圖片取代它。"
      },
      "tooltips": {
        "httpAudioFixable": "按一下按鈕，針對此音訊使用安全 HTTPS URL。",
        "httpAudioUncheckable": "試著針對此音訊使用 HTTPS URL。 如果沒有作用，請從故事中移除音訊，或使用連結取代它。",
        "httpWebpageFixable": "按一下按鈕，針對此網頁使用安全 HTTPS URL。",
        "httpWebpageUncheckable": "試著針對此網頁使用 HTTPS URL。 如果沒有作用，請從故事中移除網頁，或使用螢幕截圖或連結取代它。",
        "httpVideoFixable": "按一下按鈕，針對此影片使用安全 HTTPS URL。",
        "httpVideoUncheckable": "試著針對此影片使用 HTTPS URL。 如果沒有作用，請從故事中移除影片，或使用螢幕截圖或連結取代它。",
        "httpImageFixable": "按一下按鈕，針對此圖片使用安全 HTTPS URL。",
        "httpImageUncheckable": "試著針對此圖片使用 HTTPS URL。 如果沒有作用，請從故事中移除圖片，或使用連結取代它。",
        "httpLayerMyMap": "造訪地圖的項目頁面，將此圖層更新為使用 HTTPS。如果無法更新圖層，請從地圖移除它。",
        "httpLayerNotMyMap": "製作地圖的副本，並將此圖層更新為使用 HTTPS。如果無法更新圖層，請從地圖移除它。",
        "clickLearnMore": "按一下以深入瞭解。"
      },
      "fixButtons": {
        "agolItemPage": "項目頁面",
        "openTheMap": "開啟地圖",
        "updateAudio": "修正音訊 URL",
        "updateWebpages": "修正網頁 URL",
        "updateVideos": "修正影片 URL",
        "updateImages": "修正圖片 URL"
      },
      "mapIssues": {
        "fixButton": "修復問題",
        "nofixButton": "問題",
        "mapLabel": "地圖:",
        "summaries": {
          "unshared": "未分享的內容",
          "othersUnshared": "其他人的未分享內容",
          "subscriptionContent": "訂閱內容",
          "premiumContent": "高級內容",
          "secureContent": "安全內容",
          "deleted": "刪除的內容",
          "inaccessible": "無法存取的內容",
          "unauthorized": "未授權的內容"
        },
        "descriptions": {
          "unshared": "此內容未與您的故事分享相同的資訊。",
          "othersUnshared": "此內容由某人擁有，且未與您的故事分享相同的資訊。",
          "othersUnsharedAuthorized": "此內容由某人擁有，但您有權分享它。",
          "inaccessible": "此內容無法存取。",
          "deleted": "已刪除此內容。",
          "unauthorized": "您未取得檢視此內容的授權。",
          "popupFeatureLayer": "圖磚圖層的快顯視窗來自圖徵圖層，它未與您的故事分享相同的資訊。",
          "subscriptionContent": "您必須授權訂閱者內容供大眾使用。",
          "premiumContent": "您必須授權高級內容供大眾使用。",
          "secureService": "您的讀者無法存取安全內容。",
          "missingItemWarning": "已刪除與此圖層關聯的項目。"
        },
        "tooltips": {
          "unshared": "按一下以深入瞭解分享。",
          "othersUnshared": "您無權分享其他人擁有的內容。請要求擁有者分享它、從您的故事移除地圖，或編輯地圖來移除不屬於您的圖層。按一下以瞭解地圖編輯。",
          "inaccessible": "從您的故事移除此地圖，或編輯地圖來移除無法存取的圖層。按一下以瞭解地圖編輯。",
          "deleted": "從您的故事移除此地圖，或編輯地圖來移除遺失的圖層。按一下以瞭解地圖編輯。",
          "unauthorized": "從您的故事移除此地圖，或編輯地圖來移除未授權的圖層。按一下以瞭解地圖編輯。",
          "popupFeatureLayer": "圖磚圖層的快顯視窗來自圖徵圖層，它未與您的故事分享相同的資訊。",
          "subscriptionContent": "訂閱者內容未使用點數。按一下以深入瞭解。",
          "premiumContent": "每當某人檢視您故事中的高級圖層時，會向您的組織收取點數。按一下以深入瞭解。",
          "secureService": "從您的故事移除安全內容，或按一下以瞭解如何將安全內容授權給其他人使用。",
          "missingItemWarning": "此圖層仍在運作，但其符號、快顯視窗或名稱可能已變更。請確認依預期顯示圖層，或從您的故事移除它。"
        },
        "fixButtons": {
          "share": "分享",
          "hide": "隱藏",
          "authorize": "授權",
          "remove": "移除",
          "help": "取得說明",
          "ignore": "忽略",
          "confirm": "確認",
          "edit": "編輯地圖"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "部分地圖和圖層也已經分享。",
          "alsoSharedMaps": "部分地圖也已經分享。",
          "alsoSharedLayers": "部分圖層也已經分享。",
          "sharedOthersContent": "您已使用您的管理權限來分享某人的內容。"
        }
      },
      "storyHealth": {
        "healthy": "沒問題",
        "notHealthy": "修復問題",
        "warnings": "請參閱警告"
      }
    },
    "saveErrorSocial": {
      "title": "社交媒體分享",
      "panel1": "當您的 ArcGIS Web 應用程式項目標題不同於您的故事標題時，社交媒體可能無法正確顯示您的故事。",
      "panel1tooltip": "藉由定義標題、摘要和縮圖圖片，您的故事外觀類似於：",
      "panel2": "您要在社交媒體上使用哪個標題:",
      "panel2q1": "故事標題（建議）",
      "panel2q1tooltip": "藉由選擇此選項，將修改您的項目標題來符合您的故事標題，並在將同步的建立器中進一步變更。",
      "panel2q2": "項目標題",
      "panel3": "要進一步優化您在社交媒體上的故事外觀，請使用 ${MYSTORIES} 以新增摘要和縮圖圖片。",
      "panel4": "請勿再針對此故事發出警告",
      "save": "儲存",
      "mystories": "我的經驗"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Web 安全性和 Story Maps 的相關重要資訊",
      "s1h1": "Esri 正在加強 Story Maps 的安全性",
      "s1p1": "您的 Story Maps 在 Web 上運作，且 Web 社群一直致力於建立和實施更好的安全機制。 為透過網際網路傳輸的內容提供安全連線的 HTTPS，正在成為存取 Web 內容的通行方式。 若是使用 HTTP 而非 HTTPS，現今大多數的瀏覽器都會顯示警告訊息。 基於此新興的標準，我們強烈建議您使用 HTTPS 連結來創作和分享 Story Maps，並在故事地圖的圖片中嵌入 Web 內容或連結時，僅使用 HTTPS URL。",
      "s1p2": "從實務而言，這表示故事地圖及其所有內容 (包含圖片、圖層、內嵌的應用程式和網站) 都必須使用以 HTTPS (而非 HTTP) 開頭的連結存取。 如此可確保為您的讀者提供最佳的體驗，因為大多數的 Web 瀏覽器都會指出您的故事是安全的。",
      "s2h1": "我需要執行哪些工作?",
      "s2p1": "Esri 正在努力使故事地圖的作者和讀者都能輕鬆進行此轉移。 故事地圖建立器和我的故事現在提供了工具，可協助您在故事中尋找不安全的內容 (HTTP)，並提供如何解決問題的建議。 請檢查您的故事是否有不安全的內容，並盡快更新為 HTTPS。",
      "action1": "關閉",
      "action2": "立即檢查我的故事",
      "action3": "瞭解詳細資訊",
      "floatingNotification": "此故事包含不安全的 (HTTP) 內容。請檢閱並解決這些問題。"
    }
  }
});