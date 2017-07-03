/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Lưu",
      "close": "Đóng"
    },
    "errors": {
      "noConfigName": "Không có cấu hình nào được xác định trong index.html > configOptions.story",
      "configFormatError": "Cấu hình được xác định này không thể tải lên do có lỗi cú pháp JSON.",
      "configNotFound": "Cấu hình xác định này không được tìm thấy hoặc không thể tải lên do có lỗi cú pháp JSON.",
      "boxTitle": "Đã xảy ra lỗi",
      "servedFromFile": "Ứng dụng này phải được truy cập thông qua máy chủ web. Xem chi tiết tại ${USER_GUIDE}.",
      "userGuide": "hướng dẫn cho người dùng",
      "invalidConfig": "Cấu hình không hợp lệ",
      "invalidConfigNoApp": "Định danh Ứng dụng Lập bản đồ Web không được chỉ định trong index.html.",
      "invalidConfigNoAppDev": "Không có mã định danh Ứng dụng Thành lập bản đồ Web được xác định trong thông số URL (?appid=). Trong chế độ phát triển, cấu hình id ứng dụng trong index.html bị bỏ qua.",
      "unspecifiedConfigOwner": "Chủ sở hữu được ủy quyền chưa được cấu hình.",
      "invalidConfigOwner": "Chủ sở hữu câu chuyện chưa được ủy quyền.",
      "invalidConfignoOAuth": "Câu chuyện này yêu cầu phải có xác thực, vui lòng cấu hình ArcGIS OAuth ID trong trang index.html hoặc để câu chuyện ở chế độ công khai.",
      "invalidApp": "Không thể tải câu chuyện này.",
      "appLoadingFail": "Đã xảy ra sự cố, {TPL_NAME} không tải đúng cách.",
      "notConfiguredDesktop": "Câu chuyện chưa được cấu hình.",
      "notConfiguredMobile": "Bộ thiết lập {TPL_NAME} không được hỗ trợ ở kích cỡ hiển thị này. Nếu có thể, hãy thay đổi kích cỡ trình duyệt của bạn để truy cập bộ thiết lập hoặc vui lòng thiết lập câu chuyện của bạn trên thiết bị có màn hình lớn hơn.",
      "notConfiguredMobile2": "Vui lòng xoay thiết bị của bạn theo hướng ngang để sử dụng bộ thiết lập {TPL_NAME}.",
      "notAuthorized": "Bạn không được phép truy cập vào câu chuyện này",
      "notAuthorizedBuilder": "Bạn không có quyền sử dụng bộ thiết lập {TPL_NAME}.",
      "noViewerIE": "Ứng dụng này không được hỗ trợ trong Internet Explorer trước phiên bản ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Bạn đang cố gắng xem câu chuyện này bằng một trình duyệt cũ, không được hỗ trợ. Có thể có các tính năng không hoạt động hoặc các vấn đề không mong đợi khác. Chúng tôi đề nghị bạn nâng cấp lên Internet Explorer 11 hoặc sử dụng một trình duyệt khác, chẳng hạn như Chrome.",
      "noViewerIE3": "Vào cuối năm 2017, câu chuyện này sẽ không còn được tải trên trình duyệt này. Lúc đó, bạn phải sử dụng một trình duyệt được hỗ trợ để xem câu chuyện này.",
      "upgradeBrowser": "Vui lòng cập nhật trình duyệt của bạn",
      "mapLoadingFail": "Đã xảy ra lỗi, bản đồ không tải đúng.",
      "signOut": "Đăng Xuất",
      "builderSupport1": "Bộ thiết lập Story Map Cascade chỉ được hỗ trợ trong ${CHROME} và ${SAFARI}. Tuy nhiên, các câu chuyện Cascade bạn đã tạo ra với bộ thiết lập có thể được xem trên các trình duyệt Internet Explorer 11+ và Firefox.",
      "builderSupport2": "Bộ thiết lập Story Map Cascade không được hỗ trợ trên iPad. Các câu chuyện Cascade bạn đã tạo ra và chia sẻ sẽ hoạt động được trên iPad.",
      "builderSupport3": "Các câu chuyện Cascade có thể được xem ở Chrome, Safari, Firefox, và Internet Explorer 11+, nhưng bộ thiết lập Story Map Cascade chỉ được hỗ trợ ở ${CHROME} và ${SAFARI}.",
      "builderSupport4": "Các câu chuyện Cascade có thể được xem ở bất kỳ trình duyệt web hiện đại nào, nhưng bộ thiết lập Story Map Cascade chỉ được hỗ trợ ở ${CHROME} và ${SAFARI}.<br><br>Nếu bạn cần bộ thiết lập Cascade để hỗ trợ một trình duyệt khác, vui lòng liên lạc ${ESRI-SUPPORT} hoặc ${BROWSER-SUPPORT-VOTE}.",
      "sorry": "Lưu ý:"
    },
    "mobileWarning": {
      "message1": "Bạn đã xem phiên bản điện thoại của câu chuyện này. Để có phiên bản đầy đủ, với các yếu tố phương tiện sống động hơn, hãy thử nghiệm trên máy tính để bàn.",
      "email": "Gửi email một liên kết đến câu chuyện này"
    },
    "cover": {
      "iosEmbedLink": "Chạm vào để đọc toàn bộ câu chuyện"
    },
    "media": {
      "captionPlaceholder": "Chú thích của bạn tại đây...",
      "loadingError": "Rất tiếc, không thể truy cập vào nội dung này",
      "explore": "Khám phá",
      "exploreMap": "Khám phá Bản đồ",
      "exploreStop": "Dừng Khám phá",
      "sceneNotSupported": "Rất tiếc, bản đồ 3D này không được hỗ trợ trên thiết bị của bạn.",
      "loading1": "Đang tải...",
      "loading2": "Đang tải bản đồ...",
      "videoPlayPause": "phát/tạm dừng",
      "videoMuteUnmute": "tắt âm/bật âm"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Chia sẻ",
      "tooltipAutoplayDisabled": "Tính năng này không khả dụng trong chế độ phát tự động"
    },
    "shareFromCommon": {
      "copy": "Sao chép",
      "copied": "Đã sao chép",
      "open": "Mở",
      "embed": "Nhúng vào trang web",
      "embedExplain": "Sử dụng mã HTML sau để nhúng câu chuyện vào trang web.",
      "size": "Kích thước (chiều rộng/chiều cao):",
      "autoplayLabel": "Chế độ phát tự động",
      "autoplayExplain1": "Chế độ phát tự động sẽ chuyển qua câu chuyện của bạn theo khoảng thời gian định kỳ. Đây là tính năng lý tưởng đối với màn hình hiển thị nơi công cộng hoặc của ki-ốt, tuy nhiên, hãy lưu ý rằng trong các trường hợp khác, câu chuyện có thể trở nên khó đọc hơn. Tính năng này không được hỗ trợ trên các màn hình hiển thị nhỏ.",
      "autoplayExplain2": "Khi chế độ này được kích hoạt, có các nút điều khiển để phát/tạm dừng câu chuyện và điều chỉnh tốc độ điều hướng.",
      "linksupdated": "Liên kết đã được cập nhật!"
    },
    "theme": {
      "lightLabel": "Sáng",
      "darkLabel": "Đậm"
    }
  }
});