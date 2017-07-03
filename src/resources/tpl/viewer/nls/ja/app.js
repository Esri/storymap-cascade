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
      "builderSupport1": "ストーリー マップ カスケード ビルダーは ${CHROME} および ${SAFARI} でのみサポートされています。ただし、ビルダーで作成したカスケード ストーリーは、それらのブラウザーの他に Internet Explorer 11+ と Firefox でも表示できます。",
      "builderSupport2": "ストーリー マップ カスケード ビルダーは iPad ではサポートされていません。作成および共有したカスケード ストーリーは iPad 上で動作します。",
      "builderSupport3": "カスケード ストーリーは、Chrome、Safari、Firefox、および Internet Explorer 11+ で表示できますが、ストーリー マップ カスケード ビルダーは ${CHROME} および ${SAFARI} でのみサポートされています。",
      "builderSupport4": "カスケード ストーリーは、最新の Web ブラウザーで表示できますが、ストーリー マップ カスケード ビルダーは ${CHROME} および ${SAFARI} でのみサポートされています。<br><br>カスケード ビルダーで別のブラウザーをサポートする必要がある場合は、${ESRI-SUPPORT} または ${BROWSER-SUPPORT-VOTE} にお問い合わせください。",
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
      "share": "共有",
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
    }
  }
});