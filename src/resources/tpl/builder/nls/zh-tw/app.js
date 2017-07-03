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
    "builderPanel": {
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
        "remove": "移除"
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
        "alternativeMedia": "替代媒體",
        "explanation": "部分媒體不受支援，或可能無法在行動裝置上順暢運作。使用此面板來選擇更方便在行動時使用的替代項目，以便在手機或平板電腦上檢視您的故事時，顯示該項目來取代此媒體。",
        "changeAltImage": "變更圖片",
        "uploadAltImage": "新增圖片"
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
      "imageUpload": "圖片上傳進行中...",
      "imageUploadSuccess": "已成功上傳圖片",
      "imageUploadFail": "圖片上傳失敗"
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
        "noAltImage": "媒體在行動裝置上不受支援",
        "altImageBroken": "無法存取為此媒體項目定義的替代圖片"
      },
      "contentWarnings": {
        "noAltImage": "行動裝置不支援此媒體類型。提供在行動裝置上檢視故事時將顯示的替代圖片。",
        "noAltImageAlt": "行動裝置不支援此媒體類型。在行動頁籤上，提供在行動裝置上檢視故事時將顯示的替代圖片。"
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
    }
  }
});