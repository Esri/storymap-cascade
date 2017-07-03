/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "저장",
      "close": "닫기"
    },
    "errors": {
      "noConfigName": "index.html > configOptions.story에 지정된 구성이 없음",
      "configFormatError": "JSON 구문 오류로 인해, 지정된 구성을 불러올 수 없습니다.",
      "configNotFound": "지정된 구성을 찾을 수 없거나 JSON 구문 오류로 인해 불러올 수 없습니다.",
      "boxTitle": "오류가 발생했습니다.",
      "servedFromFile": "웹 서버를 통해 응용프로그램에 접근해야 합니다. 자세한 내용은 ${USER_GUIDE}를 참고하세요.",
      "userGuide": "사용자 가이드",
      "invalidConfig": "잘못된 구성",
      "invalidConfigNoApp": "index.html에 웹 매핑 응용프로그램 식별자가 지정되지 않았습니다.",
      "invalidConfigNoAppDev": "URL 매개변수에 웹 매핑 응용프로그램 식별자(?appid=)가 지정되어 있지 않습니다. 개발 모드에서 index.html의 AppId 구성이 무시됩니다.",
      "unspecifiedConfigOwner": "권한이 있는 소유자가 구성되지 않았습니다.",
      "invalidConfigOwner": "스토리 소유자가 인증되지 않았습니다.",
      "invalidConfignoOAuth": "이 스토리에는 인증이 필요합니다. index.html에 ArcGIS OAuth ID를 구성하거나 스토리를 공용 스토리로 설정하세요.",
      "invalidApp": "이 스토리는 불러올 수 없습니다.",
      "appLoadingFail": "오류가 발생했습니다. {TPL_NAME}을(를) 올바르게 불러오지 않았습니다.",
      "notConfiguredDesktop": "스토리가 아직 구성되지 않았습니다.",
      "notConfiguredMobile": "{TPL_NAME} 빌더는 이 디스플레이 크기에서 지원되지 않습니다. 가능한 경우 빌더에 접근할 수 있도록 브라우저의 크기를 조정하거나 화면이 더 큰 기기에서 스토리를 만드세요.",
      "notConfiguredMobile2": "{TPL_NAME} 빌더를 사용하려면 기기를 가로 방향으로 회전하세요.",
      "notAuthorized": "이 스토리에 접근할 권한이 없음",
      "notAuthorizedBuilder": "{TPL_NAME} 빌더를 사용할 수 있는 권한이 없습니다.",
      "noViewerIE": "이 스토리는 ${VERSION} 이전 버전의 Internet Explorer에서 지원되지 않습니다. ${UPGRADE}.",
      "noViewerIE2": "지원되지 않는 이전 브라우저를 사용하여 이 스토리를 보려고 합니다. 작동되지 않는 기능이 있거나 예기치 않은 문제가 발생할 수 있습니다. Internet Explorer 11로 업그레이드하거나 Chrome 등의 다른 브라우저를 사용하세요.",
      "noViewerIE3": "2017년 후반부터는 이 스토리를 이 브라우저에서 불러올 수 없으므로 이 스토리를 보려면 지원되는 브라우저를 사용해야 합니다.",
      "upgradeBrowser": "브라우저를 업데이트하세요.",
      "mapLoadingFail": "오류가 발생했습니다. 맵을 올바르게 불러오지 않았습니다.",
      "signOut": "로그아웃",
      "builderSupport1": "Story Map Cascade 빌더는 ${CHROME}과 ${SAFARI}에서만 지원됩니다. 하지만 빌더로 생성한 Cascade 스토리는 이러한 브라우저, Internet Explorer 11 이상, Firefox에서 볼 수 있습니다.",
      "builderSupport2": "Story Map Cascade 빌더는 iPad에서 지원되지 않습니다. 생성한 후 공유하는 Cascade 스토리는 iPad에서 작동됩니다.",
      "builderSupport3": "Cascade 스토리는 Chrome, Safari, Firefox, Internet Explorer 11 이상에서 볼 수 있지만 Story Map Cascade 빌더는 ${CHROME}과 ${SAFARI}에서만 지원됩니다.",
      "builderSupport4": "Cascade 스토리는 모든 최신 웹 브라우저에서 볼 수 있지만 Story Map Cascade 빌더는 ${CHROME}과 ${SAFARI}에서만 지원됩니다.<br><br>다른 브라우저를 지원하는 Cascade 빌더가 필요한 경우 ${ESRI-SUPPORT} 또는 ${BROWSER-SUPPORT-VOTE}에 문의하세요.",
      "sorry": "주의:"
    },
    "mobileWarning": {
      "message1": "이 스토리의 모바일 버전을 읽었습니다. 더 다양한 미디어 요소로 구성된 정식 버전을 알아보려면 데스크톱 컴퓨터에서 사용해 보세요.",
      "email": "이 스토리에 대한 링크를 이메일로 보내기"
    },
    "cover": {
      "iosEmbedLink": "눌러서 전체 스토리 확인"
    },
    "media": {
      "captionPlaceholder": "캡션은 여기에 나타남...",
      "loadingError": "죄송합니다. 이 콘텐츠에는 접근할 수 없습니다.",
      "explore": "탐색",
      "exploreMap": "맵 탐색",
      "exploreStop": "탐색 중지",
      "sceneNotSupported": "죄송합니다. 이 3D 맵은 기기에서 지원되지 않습니다.",
      "loading1": "불러오는 중...",
      "loading2": "맵 불러오는 중...",
      "videoPlayPause": "재생/일시 중지",
      "videoMuteUnmute": "음소거/음소거 해제"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "공유",
      "tooltipAutoplayDisabled": "자동 재생 모드에서는 사용할 수 없습니다."
    },
    "shareFromCommon": {
      "copy": "복사",
      "copied": "복사됨",
      "open": "열기",
      "embed": "웹 페이지에 임베드",
      "embedExplain": "스토리를 웹 페이지에 임베드하려면 다음의 HTML 코드를 사용합니다.",
      "size": "크기(너비/높이):",
      "autoplayLabel": "자동 재생 모드",
      "autoplayExplain1": "자동 재생 모드를 사용하면 스토리가 주기적으로 진행됩니다. 이 기능은 키오스크 또는 공공의 디스플레이 모니터에는 적합하지만 그 이외의 환경에서는 스토리 읽기가 더욱 어려워질 수 있습니다. 소형 디스플레이에서는 이 기능이 지원되지 않습니다.",
      "autoplayExplain2": "이 모드가 활성화되면 스토리를 재생/일시 중지하고 탐색 속도를 조정하는 컨트롤이 나타납니다.",
      "linksupdated": "링크가 업데이트되었습니다!"
    },
    "theme": {
      "lightLabel": "밝게",
      "darkLabel": "어둡게"
    }
  }
});