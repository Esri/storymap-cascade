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
    "share": {
      "btnPrivate": "비공개",
      "btnOrg": "기관",
      "btnPublic": "공용",
      "btnEveryone": "모든 사람"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "빌더",
      "buttonSaving": "저장 중",
      "buttonSaved": "저장됨",
      "buttonError": "저장 실패",
      "buttonShare": "공유",
      "buttonSettings": "설정",
      "settingsLogoError": "로고에 문제가 있습니다. 자세히 알아보려면 클릭하세요.",
      "buttonHelp": "GeoNet에 대한 도움말 보기 또는 피드백 제출",
      "buttonPreview": "스토리 보기",
      "buttonHealth": "상태 보고서",
      "manageStories": "내 스토리 관리",
      "closeWithPendingChange": "이 작업을 확인하시겠습니까? 변경 내용이 손실됩니다.",
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
      "chooseTransition": "전환 선택",
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
        "remove": "제거",
        "altTextPlaceholder": "시각장애인을 위한 미디어에 설명 추가...",
        "altTextHelptip": "대체 텍스트는 화면 읽기 소프트웨어와 같은 보조 기술에서 사용되는 시각적 미디어에 대한 설명입니다. 이 설명은 선택 사항이지만 WCAG 및 Section 508 등의 웹 접근성 지침을 충족시키기 위해 권장됩니다."
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
        "alternativeMedia": "모바일용 대체 이미지",
        "explanation": "일부 미디어는 모바일 기기에서 지원되지 않거나 올바르게 작동하지 않을 수 있습니다. 이 패널을 사용하여, 휴대폰이나 태블릿에서 스토리를 볼 때 이 미디어 대신 나타나는 이미지를 지정할 수 있습니다.",
        "changeAltImage": "이미지 변경",
        "uploadAltImage": "대체 이미지 추가"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "콘텐츠에 대한 링크",
        "urls_short": "링크",
        "contentType": {
          "error": "인증되지 않는 미디어입니다.",
          "imageOnly": "스토리의 이 부분에서는 이미지를 추가할 수 있습니다.",
          "imageAndVideo": "스토리의 이 부분에서는 이미지 또는 비디오를 추가할 수 있습니다.",
          "imageVideoWebpage": "스토리의 해당 부분에는 오디오, 이미지, 비디오, 웹페이지를 추가할 수 있습니다."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "\"${searchterm}\"을(를) 검색하는 중...",
          "searchedFor": "\"${searchterm}\"에 대한 검색 결과",
          "albumsOf": "${username}의 앨범",
          "noPhotosFound": "검색과 일치하는 사진이 없습니다. 다시 시도하세요.",
          "noItemsFound": "검색과 일치하는 항목이 없습니다. 다시 시도하세요.",
          "noItemsInThisStory": "ArcGIS의 콘텐츠가 이 스토리에 아직 추가되지 않았습니다.",
          "limitReached": "100개 항목을 표시하는 중입니다. 필요한 항목을 찾을 수 없으면 키워드 검색을 시도하세요.",
          "galleryItems": {
            "uploadError": "죄송합니다. 이 항목을 업로드하지 못했습니다."
          },
          "agol": {
            "remove1": "ArcGIS 계정에서 사용하지 않는 이미지를 삭제합니다.",
            "remove2": "나중에 사용하려면 다시 업로드해야 합니다.",
            "removeFailed": "목록에서 이 접근 불가 이미지를 제거합니다.",
            "modified": "수정 날짜: ${date}",
            "uploaded": "업로드 날짜: ${date}",
            "contentByAuthor": "${contentType} 작성자: ${author}"
          },
          "googlePhotos": {
            "searchAndBrowse": "${Picasa} 또는 ${Google+}에서 사진 찾아보기"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "${Flickr}에서 사진 검색 및 찾아보기",
            "captionStarter": "${Flickr}에 있는 ${USERNAME}의 사진"
          },
          "unsplash": {
            "searchAndBrowse": "${Unsplash}에서 사진 검색",
            "photoBy": "${username}의 사진",
            "userLink": "${username}의 ${Unsplash} 페이지로 이동",
            "captionStarter": "${Unsplash}에 있는 ${USERNAME}의 사진"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "웹의 콘텐츠에 대한 링크",
              "imageOnly": "웹의 이미지에 대한 링크",
              "imageAndVideo": "웹의 이미지 또는 비디오에 대한 링크"
            },
            "linkText": {
              "imageOnly": "위의 상자에서 직접 사진에 연결할 수 있습니다.",
              "imageAndVideo1": "위의 상자에서 ${YouTube} 또는 ${Vimeo} 비디오에 대한 링크 또는 iframe 코드를 붙여넣을 수 있습니다.",
              "imageAndVideo2": "사진에 직접 연결할 수도 있습니다.",
              "imageVideoWebpage1": "위의 상자에서 ${YouTube} 또는 ${Vimeo}의 동적 차트나 비디오와 같은 웹 콘텐츠에 대한 링크 또는 iframe 코드를 붙여넣을 수 있습니다.",
              "imageVideoWebpage2": "사진, 비디오, 오디오 파일, 웹 페이지 또는 웹 앱에 직접 연결할 수도 있습니다.",
              "ender": "항상 보안(https) 링크를 사용해야 합니다. https가 지원되지 않는 콘텐츠인 경우에는 독자가 새 브라우저 탭에서 볼 수 있도록 스토리 텍스트에 해당 링크를 추가하세요.",
              "httpsError": "링크는 HTTPS로 시작해야 합니다."
            },
            "embedProtocol": {
              "embedProtocolLabel": "보안 연결(https)을 통해 페이지 불러오기",
              "embedProtocolWarning1": "스토리에서 이 페이지를 불러오지 않는 경우 웹 보안을 위해 임베드할 수 없습니다.",
              "embedProtocolWarning2": "스토리에서 이 페이지를 불러오지 않는 경우 이 옵션을 선택 취소하고 다시 시도하세요. 해당 페이지를 여전히 불러올 수 없으면 웹 보안을 위해 임베드할 수 없습니다.",
              "embedProtocolWarning3": "대신 이야기에 링크를 추가하여 새 브라우저 탭에서 페이지를 여십시오. ${linkText}",
              "linkText": "자세한 정보."
            },
            "placeholder": "${https://}... 또는 ${<iframe>}",
            "uploadErrors": {
              "generic": "입력한 주소에 문제가 발생했습니다. 다시 시도하세요.",
              "imageOnly1": "스토리의 이 부분에서 이미지를 사용해야 합니다.",
              "imageOnly2": "이미지(.jpg, .png, .gif)의 링크를 제공하거나 ${ArcGIS}, ${Flickr}, ${Google+} 또는 ${Unsplash}에서 이미지를 선택하세요.",
              "imageAndVideo1": "스토리의 이 부분에서 이미지 또는 비디오를 사용해야 합니다.",
              "imageAndVideo2": "이미지(.jpg, .png, .gif) 링크 또는 ${YouTube}나 ${Vimeo}의 비디오 링크를 제공하거나 ${ArcGIS}, ${Flickr}, ${Google+} 또는 ${Unsplash}에서 이미지를 선택하세요.",
              "badFormat": "추가하려는 파일의 링크는 형식이 잘못되었습니다.",
              "inaccessible": "추가하려는 파일은 누락되었거나 접근할 수 없습니다.",
              "tryAgain": "주소를 확인하고 다시 시도하세요.",
              "mediaTypes": {
                "VIDEO": "비디오",
                "IMAGE": "이미지",
                "generic": "미디어"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "서드 파티 서비스를 사용하면 서비스 약관에 동의하는 것입니다. ",
          "googlePhotos": {
            "placeholder": "이메일 또는 ${Picasa}/${Google+} ID",
            "helpText": "${Picasa} 또는 ${Google+}에 업로드된 사진을 스토리에 추가할 수 있습니다. 스토리의 ${Google} 계정에 저장된 이미지 사용에 대한 정보: ${helpLinkText}.",
            "helpLinkText": "자세한 정보",
            "cannotFindUser": "사용자 ${username}을(를) 찾을 수 없습니다. 다시 시도하세요."
          },
          "unsplash": {
            "placeholder": "사진 검색",
            "aboutText": "${Unsplash}은 고품질 무료 사진의 선별된 컬렉션을 제공합니다.",
            "copyrightText": "모든 사진은 ${Unsplash} 라이선스에 따라 허가되었습니다. ${moreInfoLink}에서 자세한 내용을 확인하세요.",
            "moreInfoLink": "여기"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} 계정",
              "text": "모든 ${Flickr}"
            },
            "placeholders": {
              "user": "계정 검색",
              "userText": "사진에 대해 이 계정 검색",
              "text": "사진 검색"
            },
            "errors": {
              "cannotFindUser": "${username} 사용자를 찾을 수 없습니다.",
              "noUserPhotos": "${username}은(는) 공개 사진이 없습니다.",
              "didYouMean": "${username}을(를) 원하셨습니까?",
              "generalUserError": "${username} 사용자를 찾는 중에 문제가 발생했습니다."
            },
            "licenses": {
              "licenseLabel": "라이선스: ",
              "public": "공용 도메인",
              "commercial": "상업 용도로 허용",
              "nonCommercial": "비상업 용도로 허용",
              "reserved": "All Rights Reserved",
              "any": "모든 라이선스"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "이 스토리",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "포털",
              "myOrg": "${orgname} 기관",
              "myContent": "내 콘텐츠"
            },
            "createContent": {
              "createNewMap": "새 맵 생성",
              "or": "OR",
              "dragAndDropImage": "이미지 드롭",
              "dragAndDropImageAudio": "이미지 또는 오디오 드롭",
              "uploadButton": "찾아보기",
              "agolInfo": "업로드한 이미지 및 오디오는 해당 스토리 내에서만 접근할 수 있습니다.",
              "saveBeforeUpload": "이 스토리를 저장하면 여기에서 ArcGIS에 이미지 및 오디오를 업로드할 수 있습니다.",
              "fileExtsImage": "png, jpg, gif, bmp 유형이 지원됩니다.",
              "fileExtsImageAudio": "png, jpg, gif, bmp, mp3 유형이 지원됩니다.",
              "maxSize": "파일당 최대 10MB가 지원됩니다."
            },
            "filterAndSort": {
              "webmap": "웹 맵",
              "webscene": "웹 씬",
              "image": "이미지",
              "audio": "오디오",
              "date": "날짜",
              "sortByDate": "날짜별로 정렬",
              "title": "제목",
              "sortByTitle": "제목별로 정렬",
              "views": "뷰",
              "search": "키워드 또는 ID로 검색"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "맵 편집",
      "unauthorizedDomain": "맵 편집기를 사용하기 위해 인증된 도메인이 아닙니다.",
      "loading": "맵 편집자를 불러오는 동안 잠시 기다려 주세요.",
      "saving": "맵을 저장하는 중",
      "success": "맵 저장됨",
      "cancelTitle": "저장하지 않은 변경사항을 취소하시겠습니까?",
      "errorSave": "맵을 저장할 수 없습니다. 다시 시도하세요.",
      "loadFail": "죄송합니다. 맵 편집기를 불러올 수 없습니다.",
      "close": "닫기",
      "save": "저장",
      "confirm": "예. 맵을 닫습니다.",
      "deny": "아니요. 계속 작업하겠습니다."
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "여기에서 스토리 계속..."
      },
      "blockAdd": {
        "text": "텍스트",
        "media": "미디어",
        "title": "제목",
        "immersive": "몰입형"
      },
      "link": {
        "invite": "링크를 붙여넣거나 입력..."
      },
      "color": {
        "choose": "선택",
        "cancel": "취소",
        "clear": "색상 지우기"
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
      "mediaUpload": "미디어 업로드 진행 중...",
      "mediaUploadSuccess": "미디어를 업로드했습니다.",
      "mediaUploadFail": "미디어를 업로드하지 못했습니다."
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
        "audio": "오디오",
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
        "noAltImage": "모바일에서 미디어가 작동하지 않을 수 있음",
        "noAltImageUnsupported": "모바일에서 미디어가 작동하지 않음",
        "noAltImageWarning": "모바일에서 미디어가 작동하지 않을 수 있음",
        "altImageBroken": "이 미디어 항목에 대해 정의된 대체 이미지에 접근할 수 없음",
        "httpMedia": "안전하지 않은 미디어",
        "httpContent": "안전하지 않은 콘텐츠"
      },
      "contentWarnings": {
        "noAltImage": "스토리를 공유하기 전에 모바일 기기에서 해당 스토리를 테스트해야 합니다. 이 미디어가 제대로 작동되지 않으면 아래의 버튼을 사용하여, 휴대폰이나 태블릿에서 스토리를 볼 때 나타나는 대체 이미지를 추가하세요.",
        "noAltImageUnsupported": "이 미디어는 모바일 기기에서 작동되지 않습니다. 아래의 버튼을 사용하여, 휴대폰이나 태블릿에서 스토리를 볼 때 나타나는 대체 이미지를 추가하세요.",
        "noAltImageWarning": "스토리를 공유하기 전에 모바일 기기에서 해당 스토리를 테스트해야 합니다. 이 미디어가 제대로 작동되지 않으면 아래의 버튼을 사용하여, 휴대폰이나 태블릿에서 스토리를 볼 때 나타나는 대체 이미지를 추가하세요.",
        "noAltImageAlt": "이 미디어 유형은 모바일 기기에서 지원되지 않거나 올바르게 작동하지 않을 수 있습니다. 스토리를 휴대폰이나 태블릿에서 볼 때 나타나는 대체 이미지를 모바일 탭에서 제공하세요."
      },
      "descriptions": {
        "httpAudioUnfixable": "이 오디오는 HTTPS를 지원하지 않습니다. 스토리에서 오디오를 제거하거나 링크로 바꾸세요.",
        "httpAudioUncheckable": "이 오디오에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 오디오에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 오디오를 제거하거나 하이퍼링크로 바꾸세요.",
        "httpAudioFixable": "이 오디오에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 오디오에 안전한 HTTPS URL을 사용하세요.",
        "httpWebpageUnfixable": "이 웹 페이지는 HTTPS를 지원하지 않습니다. 스토리에서 웹 페이지를 제거하거나 스크린샷 또는 링크로 바꾸세요.",
        "httpWebpageUncheckable": "이 웹 페이지에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 웹 페이지에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 웹 페이지를 제거하거나 스크린샷 또는 하이퍼링크로 바꾸세요.",
        "httpWebpageFixable": "이 웹 페이지에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 웹 페이지에 안전한 HTTPS URL을 사용하세요.",
        "httpVideoUnfixable": "이 비디오는 HTTPS를 지원하지 않습니다. 스토리에서 비디오를 제거하거나 스크린샷 또는 링크로 바꾸세요.",
        "httpVideoUncheckable": "이 비디오에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 비디오에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 비디오를 제거하거나 스크린샷 또는 하이퍼링크로 바꾸세요.",
        "httpVideoFixable": "이 비디오에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 비디오에 안전한 HTTPS URL을 사용하세요.",
        "httpImageUnfixable": "이 이미지는 HTTPS를 지원하지 않습니다. 스토리에서 이미지를 제거하거나 링크로 바꾸세요.",
        "httpImageUncheckable": "이 이미지에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 이미지에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 이미지를 제거하거나 하이퍼링크로 바꾸세요.",
        "httpImageFixable": "이 이미지에는 안전하지 않은(HTTP) URL이 있습니다. 아래 버튼을 클릭하여 이 이미지에 안전한 HTTPS URL을 사용하세요.",
        "httpLayer": "이 레이어에는 안전하지 않은(HTTP) URL이 있습니다.",
        "inaccessibleLogo": "이 로고에 접근할 수 없습니다. 로고를 다른 이미지로 바꾸세요.",
        "httpLogoUnfixable": "이 로고는 HTTPS를 지원하지 않습니다. 로고를 다른 이미지로 바꾸세요.",
        "httpLogoFixable": "이 로고에는 안전하지 않은(HTTP) URL이 있습니다. 로고에 HTTPS URL을 사용하세요.",
        "httpLogoUncheckable": "이 로고에는 안전하지 않은(HTTP) URL이 있습니다. 로고에 HTTPS URL을 사용하거나 로고를 다른 이미지로 바꾸세요."
      },
      "tooltips": {
        "httpAudioFixable": "버튼을 클릭하여 이 오디오에 안전한 HTTPS URL을 사용하세요.",
        "httpAudioUncheckable": "이 오디오에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 오디오를 제거하거나 링크로 바꾸세요.",
        "httpWebpageFixable": "버튼을 클릭하여 웹 페이지에 안전한 HTTPS URL을 사용하세요.",
        "httpWebpageUncheckable": "이 웹 페이지에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 웹 페이지를 제거하거나 스크린샷 또는 링크로 바꾸세요.",
        "httpVideoFixable": "버튼을 클릭하여 이 비디오에 안전한 HTTPS URL을 사용하세요.",
        "httpVideoUncheckable": "이 비디오에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 비디오를 제거하거나 스크린샷 또는 링크로 바꾸세요.",
        "httpImageFixable": "버튼을 클릭하여 이 이미지에 안전한 HTTPS URL을 사용하세요.",
        "httpImageUncheckable": "이 이미지에 HTTPS URL을 사용해 보세요. 작동하지 않으면 스토리에서 이미지를 제거하거나 링크로 바꾸세요.",
        "httpLayerMyMap": "맵의 항목 페이지를 방문하여 HTTPS를 사용하도록 이 레이어를 업데이트합니다. 레이어를 업데이트할 수 없으면 맵에서 레이어를 제거하세요.",
        "httpLayerNotMyMap": "맵의 복사본을 만들고 HTTPS를 사용하도록 이 레이어를 업데이트합니다. 레이어를 업데이트할 수 없으면 맵에서 레이어를 제거하세요.",
        "clickLearnMore": "자세히 알아보려면 클릭하세요."
      },
      "fixButtons": {
        "agolItemPage": "항목 페이지",
        "openTheMap": "맵 열기",
        "updateAudio": "오디오 URL 수정",
        "updateWebpages": "웹 페이지 URL 수정",
        "updateVideos": "비디오 URL 수정",
        "updateImages": "이미지 URL 수정"
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
    },
    "saveErrorSocial": {
      "title": "소셜 미디어 공유",
      "panel1": "ArcGIS 웹 응용프로그램 항목 제목이 스토리 제목과 같지 않으므로 소셜 미디어에서 스토리의 외관이 제대로 표시되지 않을 수 있습니다.",
      "panel1tooltip": "제목, 요약 및 섬네일 이미지를 정의하면 스토리가 다음과 같이 보입니다:",
      "panel2": "소셜 미디어에서 사용할 제목:",
      "panel2q1": "스토리 제목(권장됨)",
      "panel2q1tooltip": "이 옵션을 선택하면 항목 제목이 스토리 제목과 일치하도록 수정되며 빌더에서의 후속 변경 사항이 동기화됩니다.",
      "panel2q2": "항목 제목",
      "panel3": "소셜 미디어에서의 스토리의 외관을 더욱 향상시키려면 ${MYSTORIES}을(를) 사용하여 요약 및 섬네일 이미지를 추가합니다.",
      "panel4": "이 스토리에 대해 다시 경고 안 함",
      "save": "저장",
      "mystories": "내 스토리"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "웹 보안 및 스토리맵에 대한 중요 메시지",
      "s1h1": "Esri는 스토리맵의 보안을 지속적으로 강화하고 있습니다.",
      "s1p1": "스토리맵은 웹에서 실행되며 웹 커뮤니티는 더 강화된 보안을 설정하고 구현하기 위해 항상 노력하고 있습니다. 인터넷을 통해 전송되는 콘텐츠의 보안 연결을 제공하는 HTTPS는 웹 콘텐츠에 접근하는 필수 방법으로 부각되고 있어, 현재 대부분의 최신 브라우저에서는 HTTPS가 아닌 HTTP를 사용하는 경우 경고 메시지가 표시됩니다. 이 새로운 표준을 따라 스토리맵 제작 및 공유에 HTTPS 링크를 사용하고, 웹 콘텐츠를 임베드하거나 스토리맵 내 이미지에 연결할 때 HTTPS URL만 사용하는 것을 권장합니다.",
      "s1p2": "이는 스토리맵의 모든 콘텐츠(이미지, 레이어, 임베드된 앱, 웹 사이트)가 HTTP가 아닌 HTTPS로 시작하는 링크를 사용하여 접근해야 함을 의미합니다. HTTPS를 사용하면 대부분의 웹 브라우저에서 내 스토리가 안전한 것으로 나타나므로 독자에게 최상의 환경이 제공됩니다.",
      "s2h1": "해야 할 일",
      "s2p1": "Esri는 스토리맵 작성자와 독자가 쉽게 HTTPS로 전환할 수 있도록 노력하고 있습니다. 이제, 스토리맵 빌더 및 내 스토리에서 안전하지 않은 콘텐츠(HTTP)를 찾고 이를 해결하기 위한 권장 사항을 제시하는 도구가 제공됩니다. 내 스토리에서 안전하지 않은 콘텐츠를 확인하고 가능한 한 빨리 HTTPS로 업데이트하세요.",
      "action1": "닫기",
      "action2": "내 스토리 지금 확인",
      "action3": "자세한 정보",
      "floatingNotification": "이 스토리에는 안전하지 않은(HTTP) 콘텐츠가 포함되어 있습니다. 검토하고 해당 문제를 해결하세요."
    }
  }
});