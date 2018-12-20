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
      "builderSupportFirefox": "이제 Story Map Cascade 빌더에서 FireFox를 지원합니다!<br><br>Firefox에서 Cascade 스토리 작성은 현재 베타 버전으로 지원됩니다. 사용 후 발견되는 모든 문제는 ${ESRI-SUPPORT} 또는 ${ESRI-COMMUNITY}로 보고해 주시기 바랍니다.",
      "builderSupportOther": "Cascade 스토리는 모든 최신 웹브라우저에서 볼 수 있지만 Story Map Cascade 빌더는 ${CHROME}, ${SAFARI}, ${FIREFOX}에서만 지원됩니다.<br><br>다른 브라우저를 지원하는 Cascade 빌더를 사용해야 할 경우 ${ESRI-SUPPORT} 또는 ${BROWSER-SUPPORT-VOTE}에 문의하세요.",
      "builderSupportIpad": "Story Map Cascade 빌더는 iPad에서 지원되지 않습니다. 생성한 후 공유하는 Cascade 스토리는 iPad에서 작동됩니다.",
      "launchBuilder": "Cascade 빌더 실행",
      "notAgain": "다시 표시 안 함",
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
      "share": "공유 또는 인쇄",
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
    },
    "autoplay": {
      "speedFast": "빠르게",
      "speedMedium": "중형",
      "speedSlow": "느리게"
    },
    "bannerNotification": {
      "learnMore": "자세한 정보",
      "close": "닫기",
      "dontShowAgain": "이 메시지를 다시 표시 안 함"
    },
    "embedBar": {
      "share": "공유하기",
      "fullScreen": "전체 화면",
      "exitFullScreen": "전체 화면 종료",
      "enlarge": "확대",
      "newTab": "새 탭에서 열기",
      "tagline": "스토리맵",
      "twitter": "Twitter에 공유",
      "facebook": "Facebook에 공유"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "인쇄하기 전에 전체 스토리를 불러올 때까지 잠시 기다려 주세요.",
      "printNotes": "이 페이지를 불러오는 데 시간이 오래 걸리거나 일부 미디어가 표시되지 않으면 실시간 미디어를 이미지로 바꾸거나 작은 범위의 섹션을 인쇄해 보세요. 최상의 결과를 위해 브라우저의 인쇄 설정에서 배경 요소 인쇄를 활성화해야 할 수도 있습니다.",
      "printOptions": "옵션",
      "makeTextBlack": "모든 텍스트를 검은색으로 설정",
      "showLinks": "링크 URL 표시",
      "useAltMedia": "해당하는 경우 실시간 미디어를 이미지로 바꾸기",
      "pageBreaks": "새 페이지에서 각 섹션 시작",
      "printRange": "일부 스토리 인쇄",
      "sectionStart": "섹션:",
      "go": "적용",
      "reset": "전체 스토리로 초기화",
      "print": "인쇄"
    },
    "page": {
      "appTagline": "이 스토리는 ${CASCADE_LINK_TEXT}로 이루어져 있습니다.",
      "cascadeLinkText": "Esri Story Map Cascade",
      "readItOnline": "웹(${STORY_URL})에서 읽어보세요."
    },
    "sections": {
      "sectionLabel": "섹션 ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "웹 사이트:",
      "videoLabel": "비디오:",
      "audioLabel": "오디오:"
    },
    "licenseChange2018": {
      "noAccess": "귀하의 계정(%USER_NAME%)에는 공개 상태가 아닌 스토리맵을 열 수 있는 라이선스가 없습니다.  스토리맵 또는 애드온 필수 앱 라이선스가 포함된 사용자 유형을 업무 지시하려면 기관 관리자에게 문의하세요."
    }
  }
});