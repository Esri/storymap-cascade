/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "儲存",
      "close": "關閉"
    },
    "errors": {
      "noConfigName": "index.html > configOptions.story 中未指定配置",
      "configFormatError": "無法載入指定的配置，因為發生 JSON 語法錯誤。",
      "configNotFound": "找不到或無法載入指定的配置，因為發生 JSON 語法錯誤。",
      "boxTitle": "發生錯誤",
      "servedFromFile": "已透過 Web 伺服器存取應用程式。如需詳細資訊，請參閱 ${USER_GUIDE}。",
      "userGuide": "使用者指南",
      "invalidConfig": "設定無效",
      "invalidConfigNoApp": "未在 index.html 中指定 Web 製圖應用程式識別碼。",
      "invalidConfigNoAppDev": "未在 URL 參數 (?appid=) 中指定 Web 製圖應用程式識別碼。在開發模式中，會忽略 index.html 中的 appid 配置。",
      "unspecifiedConfigOwner": "尚未設定授權的擁有者。",
      "invalidConfigOwner": "未授權故事擁有者。",
      "invalidConfignoOAuth": "此故事需要驗證，請在 index.html 中配置 ArcGIS OAuth ID，或公開故事。",
      "invalidApp": "無法載入此故事。",
      "appLoadingFail": "發生了一些錯誤，{TPL_NAME} 未正確載入。",
      "notConfiguredDesktop": "故事尚未設定。",
      "notConfiguredMobile": "{TPL_NAME} 建立器不支援此顯示大小。如果可行，請重新調整瀏覽器大小來存取建立器，或請在裝置上使用較大的畫面建立您的故事。",
      "notConfiguredMobile2": "請將裝置旋轉為橫向以使用 {TPL_NAME} 建立器。",
      "notAuthorized": "您未取得存取該故事的授權",
      "notAuthorizedBuilder": "您未取得使用 {TPL_NAME} 建立器的授權。",
      "noViewerIE": "低於版本 ${version} 的 Internet Explorer 不支援該故事。${UPGRADE}。",
      "noViewerIE2": "您正在嘗試使用較舊、不支援的瀏覽器來檢視此故事。可能有未運作的圖徵或發生其他非預期的問題。我們建議您升級至 Internet Explorer 11 或使用其他瀏覽器，例如 Chrome。",
      "noViewerIE3": "在 2017 年末，無法再於此瀏覽器上載入此故事。到時您必須使用支援的瀏覽器來檢視此故事。",
      "upgradeBrowser": "請更新您的瀏覽器",
      "mapLoadingFail": "發生了一些錯誤，地圖未正確載入。",
      "signOut": "登出",
      "builderSupportFirefox": "Story Map Cascade 建立器現在支援 Firefox!<br><br>Firefox 支援的 Cascade 故事創作目前處於 beta 階段。請試用並向 ${ESRI-SUPPORT} 或 ${ESRI-COMMUNITY} 報告任何問題。",
      "builderSupportOther": "可在任何新穎的 Web 瀏覽器中檢視 Cascade 故事，但 Story Map Cascade 建立器僅受 ${CHROME}、${SAFARI} 和 ${FIREFOX} 支援。<br><br>如果需要 Cascade 建立器來支援不同的瀏覽器，請聯絡 ${ESRI-SUPPORT} 或 ${BROWSER-SUPPORT-VOTE}。",
      "builderSupportIpad": "iPad 不支援 Story Map Cascade 建立器。您建立和分享的 Cascade 故事將在 iPad 上運作。",
      "launchBuilder": "啟動 Cascade 建立器",
      "notAgain": "不再顯示此訊息",
      "sorry": "注意:"
    },
    "mobileWarning": {
      "message1": "您已閱讀此故事的行動版本。如需包含較豐富的媒體元素的完整版本，請在桌上型電腦中試用。",
      "email": "以電子郵件傳送此故事的連結"
    },
    "cover": {
      "iosEmbedLink": "點選以閱讀完整故事"
    },
    "media": {
      "captionPlaceholder": "這裡是您的標號...",
      "loadingError": "很抱歉，此內容無法存取",
      "explore": "瀏覽",
      "exploreMap": "瀏覽地圖",
      "exploreStop": "正在停止瀏覽",
      "sceneNotSupported": "很抱歉，您的裝置不支援此 3D 地圖。",
      "loading1": "正在載入...",
      "loading2": "正在載入地圖...",
      "videoPlayPause": "播放/暫停",
      "videoMuteUnmute": "靜音/取消靜音"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "分享或列印",
      "tooltipAutoplayDisabled": "這不適用於自動播放模式"
    },
    "shareFromCommon": {
      "copy": "複製",
      "copied": "已複製",
      "open": "開啟",
      "embed": "嵌入到網頁",
      "embedExplain": "使用以下 HTML 代碼將故事嵌入到網頁。",
      "size": "大小(寬度/高度):",
      "autoplayLabel": "自動播放模式",
      "autoplayExplain1": "自動播放模式將以一定間隔向前播放您的故事。這很適用於書報攤或公共顯示器，但請注意，在其他情況下可能會使得故事更難閱讀。此圖徵不支援小畫面。",
      "autoplayExplain2": "啟用此模式時，可使用控制項來播放/暫停故事和調整瀏覽速度。",
      "linksupdated": "已更新連結!"
    },
    "theme": {
      "lightLabel": "淺色",
      "darkLabel": "深色"
    },
    "autoplay": {
      "speedFast": "較快",
      "speedMedium": "中",
      "speedSlow": "較慢"
    },
    "bannerNotification": {
      "learnMore": "瞭解詳細資訊",
      "close": "關閉",
      "dontShowAgain": "請勿再次顯示此訊息"
    },
    "embedBar": {
      "share": "分享",
      "fullScreen": "全螢幕",
      "exitFullScreen": "退出全螢幕",
      "enlarge": "放大",
      "newTab": "在新頁籤中開啟",
      "tagline": "故事地圖",
      "twitter": "在 Twitter 上分享",
      "facebook": "在 Facebook 上分享"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "請等到整個故事載入完畢再列印",
      "printNotes": "如果此頁面載入緩慢或未顯示部分媒體，請試著以圖片取代即時媒體，或列印部分的較小範圍。為了獲得最佳結果，您可能需要在瀏覽器的列印設定中啟用背景元素列印。",
      "printOptions": "選項",
      "makeTextBlack": "將所有文字變成黑色",
      "showLinks": "顯示連結 URL",
      "useAltMedia": "如果可用，以圖片取代即時媒體",
      "pageBreaks": "在一個新頁面上開始每個部分",
      "printRange": "列印此故事的部分",
      "sectionStart": "部分:",
      "go": "套用",
      "reset": "重設為完整故事",
      "print": "列印"
    },
    "page": {
      "appTagline": "這是使用 ${CASCADE_LINK_TEXT} 所製作的故事。",
      "cascadeLinkText": "Esri 的 Story Map Cascade",
      "readItOnline": "在 ${STORY_URL} 的 Web 上讀取它。"
    },
    "sections": {
      "sectionLabel": "第 ${SECTION_NUMBER} 部分"
    },
    "media": {
      "websiteLabel": "網址:",
      "videoLabel": "影片:",
      "audioLabel": "音訊:"
    },
    "licenseChange2018": {
      "noAccess": "您的帳號 (%USER_NAME%) 未經授權，無法開啟非公開的故事地圖。 請聯繫您的組織管理員，請其將包含 Story Maps 或附加元件基礎應用程式授權的使用者類型指派給您。"
    }
  }
});