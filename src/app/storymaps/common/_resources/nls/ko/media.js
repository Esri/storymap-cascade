/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "콘텐츠에 대한 링크",
      "urls_short": "링크",
      "contentType": {
        "error": "인증되지 않는 미디어입니다.",
        "imageOnly": "스토리의 이 부분에서는 이미지를 추가할 수 있습니다.",
        "imageAndVideo": "스토리의 이 부분에서는 이미지 또는 비디오를 추가할 수 있습니다.",
        "imageVideoWebpage": "스토리의 이 부분에서는 이미지, 비디오 또는 웹 페이지를 추가할 수 있습니다."
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
          "searchAndBrowse": "${Flickr}에서 사진 검색 및 찾아보기"
        },
        "unsplash": {
          "searchAndBrowse": "${Unsplash}에서 사진 검색",
          "photoBy": "${username}의 사진",
          "userLink": "${username}의 ${Unsplash} 페이지로 이동"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "웹의 콘텐츠에 대한 링크",
            "imageOnly": "웹의 이미지에 대한 링크",
            "imageAndVideo": "웹의 이미지 또는 비디오에 대한 링크"
          },
          "linkText": {
            "imageOnly": "위의 상자에서 직접 사진에 연결할 수 있습니다.",
            "imageAndVideo1": "위의 상자에서 ${YouTube} 및 ${Vimeo}의 비디오에 대한 링크 또는 iframe 코드를 붙여넣을 수 있습니다.",
            "imageAndVideo2": "사진에 직접 연결할 수도 있습니다.",
            "imageVideoWebpage1": "위의 상자에서 ${YouTube} 및 ${Vimeo}의 비디오에 대한 링크 또는 iframe 코드를 붙여넣을 수 있습니다.",
            "imageVideoWebpage2": "사진, 웹 페이지 또는 웹 응용프로그램에 직접 연결할 수도 있습니다.",
            "ender": "가능한 경우 보안(https) 링크를 사용합니다."
          },
          "embedProtocol": {
            "embedProtocolLabel": "보안 연결(https)을 통해 페이지 불러오기",
            "embedProtocolWarning1": "스토리에서 이 페이지를 불러오지 않는 경우 웹 보안을 위해 임베드할 수 없습니다.",
            "embedProtocolWarning2": "스토리에서 이 페이지를 불러오지 않는 경우 이 옵션을 선택 취소하고 다시 시도하세요. 해당 페이지를 여전히 불러올 수 없으면 웹 보안을 위해 임베드할 수 없습니다.",
            "embedProtocolWarning3": "대신 이야기에 링크를 추가하여 새 브라우저 탭에서 페이지를 여십시오. ${linkText}",
            "linkText": "자세한 정보."
          },
          "placeholder": "${https://}... 또는 ${http://}... 또는 ${<iframe>}",
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
        "googlePhotos": {
          "placeholder": "이메일 또는 ${Picasa}/${Google+} ID",
          "helpText": "${Picasa} 또는 ${Google+}에 업로드된 사진을 스토리에 추가할 수 있습니다. 스토리의 ${Google} 계정에 저장된 이미지 사용에 대한 정보: ${helpLinkText}.",
          "helpLinkText": "자세한 정보",
          "cannotFindUser": "사용자 ${username}을(를) 찾을 수 없습니다. 다시 시도하세요."
        },
        "unsplash": {
          "placeholder": "사진 검색",
          "aboutText": "${Unsplash}은 고품질 무료 사진의 선별된 컬렉션을 제공합니다.",
          "copyrightText": "${Unsplash}에서 발행된 모든 사진은 ${CC0} 라이선스에 따라 허가되었습니다. 추가 정보 확인: ${moreInfoLink}",
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
            "or": "또는",
            "dragAndDrop": "여기에 이미지 놓기",
            "uploadImage": "이미지 찾아보기",
            "agolInfo": "이미지가 ArcGIS에 저장되며 스토리 내에서만 접근할 수 있습니다.",
            "saveBeforeUpload": "이 스토리를 저장하면 여기에서 ArcGIS에 이미지를 업로드할 수 있습니다.",
            "fileTypesImage": "지원되는 파일 유형: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "웹 맵",
            "webscene": "웹 씬",
            "image": "이미지",
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
  }
});