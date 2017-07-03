/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Áp dụng",
      "close": "Đóng"
    },
    "header": {
      "sharingNotAvailable": "Điều này không có sẵn cho đến khi bạn chia sẻ câu chuyện này",
      "edit": "Chỉnh sửa"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Đánh dấu",
        "logoSharing": "Logo & Chia sẻ",
        "theme": "Giao diện"
      },
      "bookmarks": {
        "title": "Phần",
        "bookmark": "Đánh dấu",
        "intro": "Các đánh dấu là các liên kết đến các phần của câu chuyện được hiển thị trong tiêu đề. Tạo các đánh dấu ngắn gọn cho các phần chính của câu chuyện của bạn giúp định hướng người xem.",
        "sequentialDefault": "Phần kể chuyện (không tìm thấy văn bản)",
        "immersiveDefault": "Phần tạo không gian (không tìm thấy văn bản)",
        "titleDefault": "Phần tiêu đề (không tìm thấy văn bản)",
        "coverDefault": "Phần bìa (không tìm thấy văn bản)",
        "coverAppendage": "(Bìa)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Sử dụng Logo ${ESRI}",
        "useOrgLogo": "Sử dụng logo tổ chức của tôi",
        "useOrgLogoHelp": "Sử dụng logo được người quản trị của bạn cung cấp",
        "logoLink": "Liên kết logo",
        "logoUploadProgress": "Logo đang được tải lên",
        "logoUploadSuccess": "Logo được tải lên thành công",
        "logoUploadError": "Không thể tải logo lên, chuyển về logo ${ESRI}",
        "customHeaderText": "Khẩu hiệu",
        "taglineLinkDisabledTooltip": "Nhập khẩu hiệu để kích hoạt liên kết này",
        "link": "Liên kết khẩu hiệu",
        "enableSocialSharing": "Hiển thị nút chia sẻ"
      },
      "appearance": {
        "themeLabel": "Chủ đề",
        "fontLabel": "Phông chữ",
        "previewLabel": "Xem trước",
        "fontsTitleLabel": "Tiêu đề",
        "fontsBodyLabel": "Nội dung",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Bìa",
      "creditsLabel": "Điểm dịch vụ",
      "betaFeedback": "Ý kiến phản hồi",
      "betaNote": "Vui lòng cho chúng tôi biết bạn nghĩ gì về ${APP_NAME} hay liệu có điều gì đó không hoạt động như bạn đã mong đợi không.",
      "notSharedNote": "Câu chuyện của bạn không được chia sẻ, chỉ có bạn mới có thể xem câu chuyện này",
      "organizationWarning": "Để đảm bảo rằng những người khác có thể xem câu chuyện này, bạn cũng phải chia sẻ các scene, các lớp scene của câu chuyện, và các ứng dụng đi kèm với tổ chức của bạn. Các bản đồ và các lớp bản đồ được chia sẻ tự động.",
      "publicWarning": "Để đảm bảo rằng người khác có thể xem câu chuyện này, bạn cũng phải chia sẻ công khai các scene, các lớp scene của câu chuyện cũng như các ứng dụng đi kèm. Các bản đồ và các lớp bản đồ được chia sẻ một cách tự động.",
      "addTitleNote": "Thêm tiêu đề vào trang bìa để lưu",
      "saveError": "Đã có lỗi khi lưu câu chuyện của bạn.",
      "duplicate": "Bản sao",
      "organize": "Tổ chức",
      "done": "Hoàn tất",
      "invite": "Khi bạn xây dựng câu chuyện của mình, các phần sẽ xuất hiện ở đây...",
      "mystoriestooltip": "Bộ thiết lập Cascade thông báo cho bạn các vấn đề trong câu chuyện của mình và giúp bạn sửa những lỗi đó. Các scene và các ứng dụng đi kèm không được kiểm tra, vì vậy vui lòng kiểm tra chúng một cách thủ công."
    },
    "immersiveViewPanel": {
      "transition": "Chuyển tiếp",
      "fade": "Mờ",
      "fadeSlow": "Mờ Dần",
      "swipeVertical": "Trượt Dọc",
      "swipeHorizontal": "Trượt Ngang",
      "none": "Không có",
      "disabledConsecutiveSameMedia": "Không khả dụng khi các chế độ xem liên tiếp sử dụng cùng phương tiện",
      "disabledTooltipMap": "Để sử dụng chuyển đổi này các lớp có thể nhìn thấy ở cả hai chế độ xem phải khác nhau và các thuộc tính bản đồ khác phải giống nhau",
      "disabledConsecutiveSameMap": "Không khả dụng khi các chế độ xem liên tiếp sử dụng cùng bản đồ",
      "disabledNotInBeta": "Không khả dụng khi các chế độ xem liên tiếp sử dụng cùng bản đồ",
      "disabledNonConsecutive": "Không khả dụng do một sự xuất hiện khác của phương tiện này là không liên tục",
      "addMedia": "Thêm phương tiện",
      "invite": "Khi bạn xây dựng phần tạo không gian của mình, các chế độ xem sẽ xuất hiện ở đây..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Giao diện",
        "manage": "Quản lý",
        "size": "Kích cỡ",
        "background": "Nền",
        "mobile": "Di động",
        "issues": "Vấn đề",
        "fixIssues": "Khắc phục Vấn đề"
      },
      "manage": {
        "changeMedia": "Thay đổi phương tiện",
        "edit": "Chỉnh sửa",
        "editAside": "Mở trong một tab trình duyệt mới. Sau khi lưu các chỉnh sửa của bạn, lưu và tải lại câu chuyện này để xem lại các thay đổi của bạn.",
        "remove": "Gỡ bỏ"
      },
      "appearance": {
        "homeView": "Chế độ xem ban đầu",
        "audio": "Âm thanh",
        "on": "Bật",
        "muted": "Đã tắt âm thanh",
        "volumeAside": "Video này sẽ tự động phát khi người xem đến với chế độ xem này. Nếu bạn tắt âm thanh, người xem sẽ không thể bật nó lên.",
        "view": "Xem",
        "resetLocation": "Thiết lập lại Vị trí",
        "resetLayers": "Thiết lập lại các Lớp",
        "clearPopup": "Xóa Pop-Up",
        "interaction": "Tương tác",
        "interactionDisabled": "Tương tác đã bị Tắt",
        "buttonToEnable": "Nút để Kích hoạt",
        "interactionEnabled": "Tương tác đã được Bật",
        "interactionAside": "*Chạm vào các thiết bị sẽ làm hiển thị nút tương tác.",
        "slide": "Trang chiếu",
        "noSlides": "Không có trang chiếu khả dụng.",
        "mapExtentPrompt": "Cập nhật bản đồ để kể câu chuyện của bạn, nhấp vào đánh dấu để lưu các thay đổi"
      },
      "sectionAppearance": {
        "layout": "Bố cục",
        "theme": "Chủ đề"
      },
      "size": {
        "small": "Nhỏ",
        "medium": "Trung bình",
        "large": "Lớn",
        "noCrop": "Không được cắt bớt ảnh cao",
        "noCropTallTooltip": "Không cắt bớt ảnh cao tạo ra hiệu ứng động cho người đọc đòi hỏi phải cuộn để thấy toàn bộ hình ảnh."
      },
      "background": {
        "noCrop": "Không được cắt bớt",
        "mostImportantPart": "Chọn điểm quan trọng nhất",
        "cropExplanationImmersive": "Chọn một điểm trên ảnh để chọn cách ảnh của bạn sẽ được cắt bớt ở các kích thước màn hình khác nhau. Điểm bạn chọn sẽ luôn được nhìn thấy. Đánh dấu chọn \"Không được cắt bớt\" nếu hình của bạn cần được xem toàn bộ.",
        "cropExplanation": "Chọn một điểm trên ảnh để chọn cách ảnh của bạn sẽ được cắt bớt ở các kích thước màn hình khác nhau. Điểm bạn chọn sẽ luôn được nhìn thấy.",
        "color": "Màu sắc",
        "previews": "Xem trước"
      },
      "altMedia": {
        "alternativeMedia": "Truyền thông khác",
        "explanation": "Một số truyền thông không được hỗ trợ hoặc có thể không hoạt động tốt trên thiết bị di động. Sử dụng bảng này để chọn một truyền thông khác, mục dễ dùng cho di động hơn sẽ được hiển thị ở chỗ truyền thông này khi câu chuyện của bạn được xem trên điện thoại hoặc máy tính bảng.",
        "changeAltImage": "Thay đổi hình ảnh",
        "uploadAltImage": "Thêm hình ảnh"
      }
    },
    "imageGallery": {
      "addImage": "Thêm hình ảnh khác",
      "moveBackward": "Di chuyển về phía sau",
      "moveForward": "Di chuyển về phía trước"
    },
    "cover": {
      "titlePrompt": "Nhập tiêu đề câu chuyện của bạn...",
      "subtitlePrompt": "Cuộn xuống để bắt đầu hoặc nhập phụ đề tùy chọn",
      "mediaPlaceholder": "Thêm hình ảnh hoặc video của bạn",
      "saveError": "Không thể lưu, bạn đã có một mục với tiêu đề này rồi"
    },
    "credits": {
      "sectionInvite": "Thêm phần điểm dịch vụ",
      "warning": "Cả hai trường phải được điền",
      "content": "Nội dung...",
      "source": "Nguồn...",
      "linkPrompt": "Liên kết tùy chọn...",
      "introductionPlaceholder": "Nhập giới thiệu tùy chọn vào phần điểm dịch vụ của bạn..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Chủ đề"
      },
      "panelConfig": {
        "position": "Vị trí",
        "theme": "Chủ đề",
        "size": "Kích cỡ",
        "background": "Nền",
        "layout": "Cuộn (cho tất cả các bảng điều khiển)"
      }
    },
    "title": {
      "placeholder": "Nhập một tiêu đề..."
    },
    "media": {
      "imageUpload": "Hình ảnh đang được tải lên...",
      "imageUploadSuccess": "Hình ảnh được tải lên thành công",
      "imageUploadFail": "Không thể tải hình ảnh lên"
    },
    "controller": {
      "sectionOrganize": "Bạn đã tổ chức phần này",
      "immersiveOrganize": "Bạn đã tổ chức chế độ xem này",
      "sectionDelete": "Bạn đã xóa một phần",
      "viewDelete": "Bạn đã xóa một chế độ xem"
    },
    "notification": {
      "cancel": "Hủy",
      "close": "Đóng",
      "undo": "Hoàn tác"
    },
    "sections": {
      "sequence": "Kể chuyện",
      "immersive": "Phong phú",
      "title": "Tiêu đề"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "hình ảnh",
        "webmap": "bản đồ",
        "webscene": "scene",
        "video": "video",
        "content": "nội dung",
        "webpage": "trang web"
      },
      "placeholders": {
        "generic": "Không thể truy cập nội dung này.",
        "deleted": "Mục này đã bị xóa.",
        "inaccessible": "Không thể truy cập nội dung này.",
        "unauthorized": "Bạn không có quyền xem nội dung này.",
        "unshared": "Mục này không được chia sẻ giống như câu chuyện của bạn.",
        "othersUnshared": "Mục này không được chia sẻ giống như câu chuyện của bạn.",
        "subscriptionContent": "Bản đồ này chứa lớp của người đăng ký.",
        "premiumContent": "Bản đồ này chứa lớp cao cấp.",
        "secureService": "Bản đồ này chứa lớp bảo mật."
      },
      "contentIssues": {
        "noAltImage": "Truyền thông không được hỗ trợ trên thiết bị di động",
        "altImageBroken": "Hình ảnh khác được xác định cho mục truyền thông này không thể truy cập được"
      },
      "contentWarnings": {
        "noAltImage": "Loại truyền thông này không được hỗ trợ trên thiết bị di động. Cung cấp một hình khác sẽ được hiển thị khi câu chuyện được xem trên thiết bị di động.",
        "noAltImageAlt": "Loại truyền thông này không được hỗ trợ trên thiết bị di động. Trong tab di động, cung cấp một hình ảnh khác sẽ được hiển thị khi câu chuyện được xem trên thiết bị di động."
      },
      "mapIssues": {
        "fixButton": "Khắc phục Vấn đề",
        "nofixButton": "Vấn đề",
        "mapLabel": "Bản đồ:",
        "summaries": {
          "unshared": "Nội dung Không được chia sẻ",
          "othersUnshared": "Nội dung Không được chia sẻ của Một người khác",
          "subscriptionContent": "Nội dung của người đăng ký",
          "premiumContent": "Nội dung cao cấp",
          "secureContent": "Nội dung Bảo mật",
          "deleted": "Nội dung đã Xóa",
          "inaccessible": "Nội dung Không thể truy cập",
          "unauthorized": "Nội dung Trái phép"
        },
        "descriptions": {
          "unshared": "Nội dung này không được chia sẻ giống như câu chuyện của bạn.",
          "othersUnshared": "Nội dung này thuộc sở hữu của người khác và không được chia sẻ giống như câu chuyện của bạn.",
          "othersUnsharedAuthorized": "Nội dung này thuộc sở hữu của người khác, nhưng bạn được phép chia sẻ nó.",
          "inaccessible": "Không thể truy cập nội dung này.",
          "deleted": "Nội dung này đã bị xóa.",
          "unauthorized": "Bạn không có quyền xem nội dung này.",
          "popupFeatureLayer": "Các pop-up của lớp tile đến từ lớp đối tượng không được chia sẻ giống như câu chuyện của bạn.",
          "subscriptionContent": "Bạn phải ủy quyền cho nội dung của người đăng ký để sử dụng chung.",
          "premiumContent": "Bạn phải ủy quyền cho nội dung cao cấp để sử dụng chung.",
          "secureService": "Người xem của bạn không thể truy cập vào nội dung bảo mật.",
          "missingItemWarning": "Mục liên kết với lớp này đã bị xóa."
        },
        "tooltips": {
          "unshared": "Nhấp để tìm hiểu thêm về chia sẻ.",
          "othersUnshared": "Bạn không được phép chia sẻ nội dung thuộc sở hữu của người khác. Hãy yêu cầu người sở hữu chia sẻ nó, gỡ bỏ bản đồ này khỏi câu chuyện của bạn, hay chỉnh sửa bản đồ để loại bỏ các lớp không phải của bạn. Nhấp vào để tìm hiểu thêm về cách chỉnh sửa các bản đồ.",
          "inaccessible": "Gỡ bỏ bản đồ này khỏi câu chuyện của bạn hoặc chỉnh sửa nó để xóa các lớp không thể truy cập được. Nhấp vào để tìm hiểu thêm về cách chỉnh sửa các bản đồ.",
          "deleted": "Gỡ bỏ bản đồ này khỏi câu chuyện của bạn hoặc chỉnh sửa nó để xóa các lớp bị thiếu. Nhấp vào để tìm hiểu thêm về cách chỉnh sửa các bản đồ.",
          "unauthorized": "Gỡ bỏ bản đồ này khỏi câu chuyện của bạn hoặc chỉnh sửa nó để xóa các lớp trái phép. Nhấp vào để tìm hiểu thêm về cách chỉnh sửa các bản đồ.",
          "popupFeatureLayer": "Các pop-up của lớp tile đến từ lớp đối tượng không được chia sẻ giống như câu chuyện của bạn.",
          "subscriptionContent": "Nội dung của người đăng ký không làm tốn credits. Nhấp vào để tìm hiểu thêm.",
          "premiumContent": "Credits sẽ được tính phí cho tổ chức của bạn mỗi lần có người nào đó xem một lớp cao cấp trong câu chuyện của bạn. Nhấp vào để tìm hiểu thêm.",
          "secureService": "Gỡ bỏ nội dung bảo mật khỏi câu chuyện của bạn, hoặc nhấp vào đây để tìm hiểu cách cho phép người khác sử dụng nội dung bảo mật.",
          "missingItemWarning": "Lớp này vẫn hoạt động, nhưng các biểu tượng, pop-up, hay tên của lớp này có thể đã bị thay đổi. Xác nhận lớp xuất hiện như mong muốn, hoặc gỡ bỏ lớp này khỏi câu chuyện của bạn."
        },
        "fixButtons": {
          "share": "Chia sẻ",
          "hide": "Ẩn",
          "authorize": "Cho phép",
          "remove": "Gỡ bỏ",
          "help": "Xem Trợ giúp",
          "ignore": "Bỏ qua",
          "confirm": "Xác nhận",
          "edit": "Chỉnh sửa Bản đồ"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Một số bản đồ và lớp cũng đã được chia sẻ.",
          "alsoSharedMaps": "Một số bản đồ cũng đã được chia sẻ.",
          "alsoSharedLayers": "Một số lớp cũng đã được chia sẻ.",
          "sharedOthersContent": "Bạn đã sử dụng đặc quyền quản trị để chia sẻ nội dung của một người khác."
        }
      },
      "storyHealth": {
        "healthy": "Không có sự cố",
        "notHealthy": "Khắc phục vấn đề",
        "warnings": "Xem cảnh báo"
      }
    }
  }
});