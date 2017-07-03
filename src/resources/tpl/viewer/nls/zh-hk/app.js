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
      "builderSupport1": "只有 ${CHROME} 和 ${SAFARI} 支援「故事地圖串流」建立器。不過，那些瀏覽器、Internet Explorer 11+ 和 Firefox 可檢視您使用建立器所建立的串流故事。",
      "builderSupport2": "iPad 不支援事地圖串流建立器。您建立和分享的串流故事將在 iPad 上運作。",
      "builderSupport3": "可在 Chrome、Safari、Firefox 和 Internet Explorer 11+ 中檢視串流故事，但故事地圖串流建立器僅受 ${CHROME} 和 $SAFARI} 支援。",
      "builderSupport4": "可在任何新穎的 Web 瀏覽器中檢視串流故事，但故事地圖串流建立器僅受 ${CHROME} 和 ${SAFARI} 支援。<br><br>如果需要串流建立器來支援不同的瀏覽器，請聯絡 ${ESRI-SUPPORT} 或 ${BROWSER-SUPPORT-VOTE}。",
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
      "share": "分享",
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
    }
  }
});