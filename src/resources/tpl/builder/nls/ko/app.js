/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "적용",
      "close": "닫기"
    },
    "header": {
      "sharingNotAvailable": "스토리를 공유하기 전에는 사용할 수 없음",
      "edit": "편집"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "책갈피",
        "logoSharing": "로고 및 공유",
        "theme": "모양"
      },
      "bookmarks": {
        "title": "섹션",
        "bookmark": "책갈피",
        "intro": "책갈피는 헤더에 나타나는 스토리 섹션에 대한 링크입니다. 스토리 기본 섹션에 대한 간략한 책갈피를 만들어 독자가 스토리를 쉽게 살펴볼 수 있습니다.",
        "sequentialDefault": "이야기 섹션(텍스트가 없음)",
        "immersiveDefault": "몰입형 섹션(텍스트가 없음)",
        "titleDefault": "제목 섹션(텍스트가 없음)",
        "coverDefault": "커버 섹션(텍스트가 없음)",
        "coverAppendage": "(커버)"
      },
      "logoSharing": {
        "logo": "로고",
        "logoButton": "${ESRI} 로고 사용",
        "useOrgLogo": "내 기관 로고 사용",
        "useOrgLogoHelp": "관리자가 제공한 로고 사용",
        "logoLink": "로고 링크",
        "logoUploadProgress": "로고 업로드 진행 중",
        "logoUploadSuccess": "로고가 업로드됨",
        "logoUploadError": "로고 업로드에 실패하여 ${ESRI} 로고로 전환됨",
        "customHeaderText": "설명",
        "taglineLinkDisabledTooltip": "링크를 활성화하는 설명을 입력",
        "link": "링크 설명",
        "enableSocialSharing": "공유 버튼 표시"
      },
      "appearance": {
        "themeLabel": "테마",
        "fontLabel": "글꼴",
        "previewLabel": "미리 보기",
        "fontsTitleLabel": "제목",
        "fontsBodyLabel": "본문",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "커버",
      "creditsLabel": "크레딧",
      "betaFeedback": "피드백",
      "betaNote": "${APP_NAME}에 대한 의견 또는 잘못된 사항이 있다면 알려주시기 바랍니다.",
      "notSharedNote": "스토리가 비공유 상태이므로 사용자 본인만 볼 수 있습니다.",
      "organizationWarning": "이 스토리를 다른 사람이 볼 수 있도록 하려면 스토리의 씬, 씬 레이어 및 임베드된 앱을 기관과 공유해야 합니다. 맵과 맵 레이어는 자동으로 공유됩니다.",
      "publicWarning": "이 스토리를 다른 사람이 볼 수 있도록 하려면 스토리의 씬, 씬 레이어, 임베드된 앱을 모두에게 공유(공개)해야 합니다. 맵과 맵 레이어는 자동으로 공유됩니다.",
      "addTitleNote": "저장할 커버의 표지 추가",
      "saveError": "스토리를 저장하는 중 오류가 발생했습니다.",
      "duplicate": "복제",
      "organize": "구성",
      "done": "완료",
      "invite": "스토리를 만들 때 섹션이 여기에 나타납니다.",
      "mystoriestooltip": "Cascade Builder에서는 스토리에서 발생한 문제를 알려주고 이러한 문제를 쉽게 해결할 수 있도록 도와줍니다. 씬과 임베드된 앱은 검사되지 않으므로 직접 확인하세요."
    },
    "immersiveViewPanel": {
      "transition": "전환",
      "fade": "흐린 효과",
      "fadeSlow": "천천히 흐린 효과",
      "swipeVertical": "수직 스와이프",
      "swipeHorizontal": "수평 스와이프",
      "none": "없음",
      "disabledConsecutiveSameMedia": "연속 뷰에서 동일한 미디어를 사용하는 경우 제공되지 않음",
      "disabledTooltipMap": "이 전환을 사용하려면 양쪽 뷰의 가시적 레이어가 달라야 하며 다른 맵 등록정보는 같아야 함",
      "disabledConsecutiveSameMap": "연속 뷰에서 동일한 맵을 사용하는 경우 제공되지 않음",
      "disabledNotInBeta": "연속 뷰에서 동일한 맵을 사용하는 경우 제공되지 않음",
      "disabledNonConsecutive": "이 미디어에 대한 다른 비연속적 발생이 있으므로 제공되지 않음",
      "addMedia": "미디어 추가",
      "invite": "몰입형 섹션을 만들 때 뷰가 여기에 나타납니다."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "모양",
        "manage": "관리",
        "size": "크기",
        "background": "배경",
        "mobile": "모바일",
        "issues": "문제",
        "fixIssues": "문제 해결"
      },
      "manage": {
        "changeMedia": "미디어 변경",
        "edit": "편집",
        "editAside": "새 브라우저 탭에서 엽니다. 편집 내용을 저장한 후 이 스토리를 저장하고 다시 로드하면 변경 사항이 나타납니다.",
        "remove": "제거"
      },
      "appearance": {
        "homeView": "초기 뷰",
        "audio": "오디오",
        "on": "켜기",
        "muted": "음소거",
        "volumeAside": "독자가 이 뷰에 이르면 비디오가 자동 재생됩니다. 소리를 음소거하면 독자가 오디오를 활성화할 수 없습니다.",
        "view": "뷰",
        "resetLocation": "위치 재설정",
        "resetLayers": "레이어 재설정",
        "clearPopup": "팝업 지우기",
        "interaction": "상호 작용",
        "interactionDisabled": "상호 작용이 비활성화됨",
        "buttonToEnable": "활성화하는 버튼",
        "interactionEnabled": "상호 작용이 활성화됨",
        "interactionAside": "*터치 기기에 상호 작용 버튼이 나타납니다.",
        "slide": "슬라이드",
        "noSlides": "사용 가능한 슬라이드가 없습니다.",
        "mapExtentPrompt": "맵을 업데이트하여 스토리를 전달하고, 변경 사항을 저장하는 체크 표시를 클릭함"
      },
      "sectionAppearance": {
        "layout": "레이아웃",
        "theme": "테마"
      },
      "size": {
        "small": "작게",
        "medium": "중간",
        "large": "크게",
        "noCrop": "긴 이미지를 자르지 않음",
        "noCropTallTooltip": "자르지 않은 긴 이미지는 전체이미지를 보기위해 스크롤을 해야하는 독자에게 영향을 미칩니다."
      },
      "background": {
        "noCrop": "자르지 않음",
        "mostImportantPart": "가장 중요한 포인트 선택",
        "cropExplanationImmersive": "이미지상의 한 포인트를 선택하여 다양한 화면 크기에서 이미지가 잘리는 방식을 선택합니다.  선택한 포인트는 항상 표시됩니다. 이미지가 완전히 보여야 하는 경우 '자르지 않음'을 선택합니다.",
        "cropExplanation": "이미지상의 한 포인트를 선택하여 다양한 화면 크기에서 이미지가 잘리는 방식을 선택합니다. 선택한 포인트는 항상 표시됩니다.",
        "color": "색상",
        "previews": "미리 보기"
      },
      "altMedia": {
        "alternativeMedia": "대체 미디어",
        "explanation": "일부 미디어는 모바일 기기에서 지원되지 않거나 올바르게 작동하지 않을 수 있습니다. 이 패널을 사용하여 더욱 모바일 친화적인 대체 항목을 선택합니다. 이 항목은 휴대폰이나 태블릿에서 스토리를 볼 때 이 미디어 대신 나타납니다.",
        "changeAltImage": "이미지 변경",
        "uploadAltImage": "이미지 추가"
      }
    },
    "imageGallery": {
      "addImage": "다른 이미지 추가",
      "moveBackward": "뒤로 이동",
      "moveForward": "앞으로 이동"
    },
    "cover": {
      "titlePrompt": "스토리 제목 입력...",
      "subtitlePrompt": "아래쪽으로 스크롤하여 시작하거나 선택적 부제목 입력",
      "mediaPlaceholder": "이미지 또는 비디오 추가",
      "saveError": "저장 실패, 이 제목의 항목이 이미 있음"
    },
    "credits": {
      "sectionInvite": "크레딧 섹션 추가",
      "warning": "양쪽 필드를 모두 채워야 함",
      "content": "콘텐츠...",
      "source": "원본...",
      "linkPrompt": "링크(선택)...",
      "introductionPlaceholder": "크레딧 섹션에 대한 소개(선택) 입력..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "테마"
      },
      "panelConfig": {
        "position": "위치",
        "theme": "테마",
        "size": "크기",
        "background": "배경",
        "layout": "스크롤링(모든 패널에 적용)"
      }
    },
    "title": {
      "placeholder": "제목 입력..."
    },
    "media": {
      "imageUpload": "이미지 업로드 진행 중...",
      "imageUploadSuccess": "이미지가 업로드됨",
      "imageUploadFail": "이미지를 업로드 실패"
    },
    "controller": {
      "sectionOrganize": "섹션이 구성됨",
      "immersiveOrganize": "뷰가 구성됨",
      "sectionDelete": "섹션이 삭제됨",
      "viewDelete": "뷰가 삭제됨"
    },
    "notification": {
      "cancel": "취소",
      "close": "닫기",
      "undo": "실행 취소"
    },
    "sections": {
      "sequence": "이야기",
      "immersive": "몰입형",
      "title": "제목"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "이미지",
        "webmap": "맵",
        "webscene": "씬",
        "video": "비디오",
        "content": "콘텐츠",
        "webpage": "웹 페이지"
      },
      "placeholders": {
        "generic": "이 콘텐츠에는 접근할 수 없습니다.",
        "deleted": "이 항목은 삭제되었습니다.",
        "inaccessible": "이 콘텐츠에는 접근할 수 없습니다.",
        "unauthorized": "이 콘텐츠를 볼 수 있는 권한이 없습니다.",
        "unshared": "이 항목은 스토리와 마찬가지로 공유되지 않습니다.",
        "othersUnshared": "이 항목은 스토리와 마찬가지로 공유되지 않습니다.",
        "subscriptionContent": "이 맵에는 구독자 레이어가 포함되어 있습니다.",
        "premiumContent": "이 맵에는 프리미엄 레이어가 포함되어 있습니다.",
        "secureService": "이 맵에는 보안 레이어가 포함되어 있습니다."
      },
      "contentIssues": {
        "noAltImage": "모바일 기기에서 미디어가 지원되지 않음",
        "altImageBroken": "이 미디어 항목에 대해 정의된 대체 이미지에 접근할 수 없음"
      },
      "contentWarnings": {
        "noAltImage": "이 미디어 유형은 모바일 기기에서 지원되지 않습니다. 스토리를 모바일 기기에서 볼 때 나타나는 대체 이미지를 제공하세요.",
        "noAltImageAlt": "이 미디어 유형은 모바일 기기에서 지원되지 않습니다. 스토리를 모바일 기기에서 볼 때 나타나는 대체 이미지를 모바일 탭에서 제공하세요."
      },
      "mapIssues": {
        "fixButton": "문제 해결",
        "nofixButton": "문제",
        "mapLabel": "맵:",
        "summaries": {
          "unshared": "공유되지 않은 콘텐츠",
          "othersUnshared": "다른 사람의 공유되지 않은 콘텐츠",
          "subscriptionContent": "구독자 콘텐츠",
          "premiumContent": "프리미엄 콘텐츠",
          "secureContent": "보안 콘텐츠",
          "deleted": "삭제된 콘텐츠",
          "inaccessible": "접근할 수 없는 콘텐츠",
          "unauthorized": "허용되지 않는 콘텐츠"
        },
        "descriptions": {
          "unshared": "이 콘텐츠는 스토리와 마찬가지로 공유되지 않습니다.",
          "othersUnshared": "이 콘텐츠는 다른 사람이 소유하고 있으며 스토리와 마찬가지로 공유되지 않습니다.",
          "othersUnsharedAuthorized": "이 콘텐츠는 다른 사람이 소유하고 있지만 이 콘텐츠를 공유할 수 있는 권한이 있습니다.",
          "inaccessible": "이 콘텐츠에는 접근할 수 없습니다.",
          "deleted": "이 콘텐츠는 삭제되었습니다.",
          "unauthorized": "이 콘텐츠를 볼 수 있는 권한이 없습니다.",
          "popupFeatureLayer": "타일 레이어의 팝업은 스토리와 마찬가지로 공유되지 않는 피처 레이어에서 가져옵니다.",
          "subscriptionContent": "구독자 콘텐츠를 일반 사용자용으로 인증해야 합니다.",
          "premiumContent": "프리미엄 콘텐츠를 일반 사용자용으로 인증해야 합니다.",
          "secureService": "보안 콘텐츠는 독자가 접근할 수 없습니다.",
          "missingItemWarning": "이 레이어와 연관된 항목이 삭제되었습니다."
        },
        "tooltips": {
          "unshared": "공유에 대해 자세히 알아보려면 클릭하세요.",
          "othersUnshared": "다른 사람이 소유한 콘텐츠를 공유할 수 있는 권한이 없습니다. 소유자에게 요청하여 이러한 콘텐츠를 공유하거나 맵을 스토리에서 제거하거나 맵을 편집하여 내 레이어가 아닌 레이어를 제거합니다. 맵 편집에 대해 자세히 알아보려면 클릭하세요.",
          "inaccessible": "이 맵을 스토리에서 제거하거나 맵을 편집하여 접근할 수 없는 레이어를 제거합니다. 맵 편집에 대해 자세히 알아보려면 클릭하세요.",
          "deleted": "이 맵을 스토리에서 제거하거나 맵을 편집하여 누락된 레이어를 제거합니다. 맵 편집에 대해 자세히 알아보려면 클릭하세요.",
          "unauthorized": "이 맵을 스토리에서 제거하거나 맵을 편집하여 허용되지 않는 레이어를 제거합니다. 맵 편집에 대해 자세히 알아보려면 클릭하세요.",
          "popupFeatureLayer": "타일 레이어의 팝업은 스토리와 마찬가지로 공유되지 않는 피처 레이어에서 가져옵니다.",
          "subscriptionContent": "구독자 콘텐츠에는 크레딧이 사용되지 않습니다. 자세히 알아보려면 클릭하세요.",
          "premiumContent": "사용자가 스토리의 프리미엄 레이어를 볼 때마다 기관에 크레딧이 청구됩니다. 자세히 알아보려면 클릭하세요.",
          "secureService": "스토리에서 보안 콘텐츠를 제거하세요. 또는 보안 콘텐츠를 공용으로 인증하는 방법에 대해 알아보려면 클릭하세요.",
          "missingItemWarning": "이 레이어는 여전히 작동되지만 레이어의 심볼, 팝업 또는 이름이 변경되었을 수 있습니다. 레이어가 정상적으로 나타나는지 확인하고 그렇지 않으며 스토리에서 제거하세요."
        },
        "fixButtons": {
          "share": "공유",
          "hide": "숨기기",
          "authorize": "인증",
          "remove": "제거",
          "help": "도움말 보기",
          "ignore": "무시",
          "confirm": "확인",
          "edit": "맵 편집"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "일부 맵과 레이어도 공유되었습니다.",
          "alsoSharedMaps": "일부 맵도 공유되었습니다.",
          "alsoSharedLayers": "일부 레이어도 공유되었습니다.",
          "sharedOthersContent": "관리자 권한을 사용하여 다른 사람의 콘텐츠를 공유했습니다."
        }
      },
      "storyHealth": {
        "healthy": "문제가 없음",
        "notHealthy": "문제 해결",
        "warnings": "경고 확인"
      }
    }
  }
});