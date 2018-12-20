/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "保存",
      "close": "閉じる"
    },
    "errors": {
      "noConfigName": "index.html の configOptions.story で構成が指定されていません",
      "configFormatError": "JSON 構文エラーのため、指定された構成を読み込めませんでした。",
      "configNotFound": "JSON 構文エラーのため、指定された構成が見つからないか読み込めませんでした。",
      "boxTitle": "エラーが発生しました",
      "servedFromFile": "アプリケーションには Web サーバーを通じてアクセスする必要があります。詳細については、${USER_GUIDE} をご参照ください。",
      "userGuide": "ユーザー ガイド",
      "invalidConfig": "無効な構成",
      "invalidConfigNoApp": "Web マッピング アプリケーションの識別子が index.html で指定されていません。",
      "invalidConfigNoAppDev": "Web マッピング アプリケーション ID が URL パラメーター (?appid=) で指定されていません。開発モードでは、index.html の appid 構成は無視されます。",
      "unspecifiedConfigOwner": "権限のある所有者が構成されていません。",
      "invalidConfigOwner": "ストーリーの所有者に権限がありません。",
      "invalidConfignoOAuth": "このストーリーには認証が必要です。index.html で ArcGIS OAuth ID を構成するか、ストーリーをパブリックにしてください。",
      "invalidApp": "このストーリーを読み込めません。",
      "appLoadingFail": "問題が発生しました。{TPL_NAME} を正しく読み込めませんでした。",
      "notConfiguredDesktop": "このストーリーは、まだ構成されていません。",
      "notConfiguredMobile": "この表示サイズでは、{TPL_NAME} ビルダーはサポートされません。可能な場合、ブラウザーのサイズを変更してビルダーにアクセスするか、さらに大きい画面を持つデバイス上でストーリーを構築してください。",
      "notConfiguredMobile2": "使用しているデバイスを横方向に回転して {TPL_NAME} ビルダーを使用してください。",
      "notAuthorized": "このストーリーにアクセスする権限が与えられていません。",
      "notAuthorizedBuilder": "{TPL_NAME} ビルダーを使用する権限がありません。",
      "noViewerIE": "このストーリーは、Internet Explorer ${VERSION} より前のバージョンではサポートされていません。${UPGRADE}",
      "noViewerIE2": "このストーリーをサポートされていない古いブラウザーで表示しようとしています。動作しない機能やその他の予期しない問題がある可能性があります。Internet Explorer 11 にアップグレードするか、Chrome などの別のブラウザーを使用することをお勧めします。",
      "noViewerIE3": "2017 年後半には、このストーリーはこのブラウザーで読み込めなくなります。その時点で、サポートされているブラウザーを使用してこのストーリーを表示する必要があります。",
      "upgradeBrowser": "ブラウザーを更新してください",
      "mapLoadingFail": "問題が発生しました。マップを正しく読み込みませんでした。",
      "signOut": "サイン アウト",
      "builderSupportFirefox": "ストーリー マップ カスケード ビルダーで、Firefox がサポートされるようになりました。<br><br>Firefox でのカスケード ストーリーの作成サポートは、現時点ではベータ版です。使用を試して、何か問題がありましたら、${ESRI-SUPPORT} または ${ESRI-COMMUNITY} にご報告ください。",
      "builderSupportOther": "カスケード ストーリーは最新の Web ブラウザーで表示できますが、ストーリー マップ カスケード ビルダーは ${CHROME}、${SAFARI}、および ${FIREFOX} でしかサポートされていません。<br><br>別のブラウザーをサポートするためにカスケード ビルダーが必要な場合は、${ESRI-SUPPORT} または ${BROWSER-SUPPORT-VOTE} にお問い合わせください。",
      "builderSupportIpad": "ストーリー マップ カスケード ビルダーは iPad ではサポートされていません。作成および共有したカスケード ストーリーは iPad 上で動作します。",
      "launchBuilder": "カスケード ビルダーの起動",
      "notAgain": "今後このメッセージを表示しない",
      "sorry": "注意:"
    },
    "mobileWarning": {
      "message1": "このストーリーのモバイル バージョンを読み取りました。メディア エレメントが豊富な完全バージョンについては、デスクトップ コンピューターでお試しください。",
      "email": "このストーリーのリンクを電子メールで送信"
    },
    "cover": {
      "iosEmbedLink": "タップしてストーリー全体を読む"
    },
    "media": {
      "captionPlaceholder": "ここにキャプションを入力...",
      "loadingError": "このコンテンツにアクセスできません",
      "explore": "調査",
      "exploreMap": "マップの操作",
      "exploreStop": "操作の停止",
      "sceneNotSupported": "この 3D マップはデバイスでサポートされていません。",
      "loading1": "読み込んでいます...",
      "loading2": "マップを読み込んでいます...",
      "videoPlayPause": "再生/一時停止",
      "videoMuteUnmute": "ミュート/ミュート解除"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "共有または印刷",
      "tooltipAutoplayDisabled": "これは、自動再生モードでは使用できません"
    },
    "shareFromCommon": {
      "copy": "コピー",
      "copied": "コピーしました",
      "open": "開く",
      "embed": "Web ページに埋め込む",
      "embedExplain": "ストーリーを Web ページに埋め込むには、次の HTML コードを使用します。",
      "size": "サイズ (幅/高さ):",
      "autoplayLabel": "自動再生モード",
      "autoplayExplain1": "自動再生モードでは、ストーリーが一定の間隔で進みます。このモードは、売店や公共の表示モニターでは理想的ですが、その他の状況では、ストーリーを読むのを難しくする場合があることに注意してください。この機能は、小さいディスプレイではサポートされません。",
      "autoplayExplain2": "このモードがアクティブの場合、ストーリーの再生/一時停止および再生速度の調整を行うコントロールが表示されます。",
      "linksupdated": "リンクが更新されました"
    },
    "theme": {
      "lightLabel": "明るい",
      "darkLabel": "暗い"
    },
    "autoplay": {
      "speedFast": "速い",
      "speedMedium": "中程度",
      "speedSlow": "遅い"
    },
    "bannerNotification": {
      "learnMore": "詳細",
      "close": "閉じる",
      "dontShowAgain": "今後このメッセージを表示しない"
    },
    "embedBar": {
      "share": "共有",
      "fullScreen": "全画面表示",
      "exitFullScreen": "全画面表示を終了",
      "enlarge": "拡大",
      "newTab": "新しいタブで開く",
      "tagline": "ストーリー マップ",
      "twitter": "Twitter で共有",
      "facebook": "Facebook で共有"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "ストーリー全体の読み込みが終了してから印刷してください",
      "printNotes": "このページの読み込みが遅い、またはメディアが表示されない場合は、ライブ メディアを画像に変更するか、印刷するセクションの範囲を小さくしてみてください。最善の結果を得るために、ブラウザーの印刷設定で、背景要素の印刷を有効にする必要がある場合もあります。",
      "printOptions": "オプション",
      "makeTextBlack": "すべてのテキストを黒くする",
      "showLinks": "リンク URL の表示",
      "useAltMedia": "使用可能な場合は、ライブ メディアを画像に変更する",
      "pageBreaks": "各セクションを新しいページで開始する",
      "printRange": "このストーリーの印刷部分",
      "sectionStart": "セクション:",
      "go": "申請",
      "reset": "ストーリー全体をリセット",
      "print": "印刷"
    },
    "page": {
      "appTagline": "このストーリーは ${CASCADE_LINK_TEXT} で作成されました。",
      "cascadeLinkText": "Esri のストーリー マップ カスケード",
      "readItOnline": "Web 上の ${STORY_URL} で読み取ります。"
    },
    "sections": {
      "sectionLabel": "セクション ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Web サイト:",
      "videoLabel": "ビデオ:",
      "audioLabel": "オーディオ:"
    },
    "licenseChange2018": {
      "noAccess": "パブリックでないストーリー マップを開くためのライセンスがアカウント (%USER_NAME%) に付与されていません。  組織の管理者にストーリー マップまたはアドオン Essential Apps ライセンスを含むユーザー タイプを割り当てるよう依頼してください。"
    }
  }
});