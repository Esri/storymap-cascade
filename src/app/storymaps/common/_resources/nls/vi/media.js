/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Liên kết đến nội dung",
      "urls_short": "Liên kết",
      "contentType": {
        "error": "Không có mạng truyền thông ủy quyền",
        "imageOnly": "Trong phần câu chuyện này, bạn có thể thêm hình ảnh.",
        "imageAndVideo": "Trong phần câu chuyện này, bạn có thể thêm hình ảnh hoặc video.",
        "imageVideoWebpage": "Trong phần câu chuyện này, bạn có thể thêm hình ảnh, video hoặc trang web."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Đang tìm kiếm \"${searchterm}\"...",
        "searchedFor": "Kết quả tìm kiếm cho \"${searchterm}\"",
        "albumsOf": "Album của ${username}",
        "noPhotosFound": "Không có hình ảnh nào khớp với tìm kiếm của bạn. Vui lòng thử lại.",
        "noItemsFound": "Không có mục nào khớp với tìm kiếm của bạn. Vui lòng thử lại.",
        "noItemsInThisStory": "Chưa có nội dung nào từ ArcGIS được thêm vào câu chuyện này.",
        "limitReached": "Đang hiển thị 100 mục. Nếu bạn không tìm thấy mục cần thiết, hãy thử tìm từ khóa.",
        "galleryItems": {
          "uploadError": "Rất tiếc, mục này không tải lên được."
        },
        "agol": {
          "remove1": "Xóa hình ảnh không được sử dụng này khỏi tài khoản ArcGIS của bạn.",
          "remove2": "(Bạn sẽ cần tải lên lại nếu sau này quyết định sử dụng nó)",
          "removeFailed": "Gỡ bỏ hình ảnh không sử dụng được này ra khỏi danh sách này.",
          "modified": "${date} được sửa đổi",
          "uploaded": "${date} được tải lên",
          "contentByAuthor": "${contentType} của ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Duyệt hình trên ${Picasa} hoặc ${Google+}"
        },
        "flickr": {
          "photostream": "Luồng hình ảnh",
          "searchAndBrowse": "Tìm kiếm và duyệt hình ảnh trên ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Tìm hình ảnh trên ${Unsplash}",
          "photoBy": "Hình ảnh của ${username}",
          "userLink": "Đến trang ${Unsplash} của ${username}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Liên kết đến nội dung trên trang web",
            "imageOnly": "Liên kết đến hình ảnh trên trang web",
            "imageAndVideo": "Liên kết đến hình ảnh hoặc video trên trang web"
          },
          "linkText": {
            "imageOnly": "Trong ô nói trên, bạn có thể liên kết trực tiếp đến hình ảnh.",
            "imageAndVideo1": "Trong ô nói trên, bạn có thể dán đường liên kết hoặc mã iframe cho video từ ${YouTube} và ${Vimeo}.",
            "imageAndVideo2": "Bạn cũng có thể liên kết trực tiếp đến hình ảnh.",
            "imageVideoWebpage1": "Trong ô nói trên, bạn có thể dán đường liên kết hoặc mã iframe cho video từ ${YouTube} và ${Vimeo}.",
            "imageVideoWebpage2": "Bạn cũng có thể liên kết trực tiếp đến hình ảnh, trang web, hoặc ứng dụng web.",
            "ender": "Sử dụng đường liên kết an toàn (https) nếu có thể."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Tải trang qua kết nối bảo mật (https)",
            "embedProtocolWarning1": "Nếu trang này không tải trong câu chuyện của bạn, trang này không thể được nhúng vì lý do an ninh trang web.",
            "embedProtocolWarning2": "Nếu trang này không tải trong câu chuyện của bạn, bỏ chọn tùy chọn này và thử lại. Nếu trang vẫn không tải được, trang này không thể được nhúng vì lý do an ninh trang web.",
            "embedProtocolWarning3": "Hoặc cách khác, thêm đường liên kết vào câu chuyện của bạn để mở trang trong tab trình duyệt mới. ${linkText}",
            "linkText": "Tìm hiểu Thêm."
          },
          "placeholder": "${https://}... hoặc ${http://}... hoặc ${<iframe>}",
          "uploadErrors": {
            "generic": "Đã xảy ra lỗi với địa chỉ khi nhập vào. Vui lòng thử lại.",
            "imageOnly1": "Bạn phải sử dụng một hình ảnh trong phần này của câu chuyện.",
            "imageOnly2": "Vui lòng cung cấp đường liên kết cho hình ảnh (.jpg, .png, .gif), hoặc chọn hình ảnh từ ${ArcGIS}, ${Flickr}, ${Google+}, hoặc ${Unsplash}.",
            "imageAndVideo1": "Bạn phải sử dụng một hình ảnh hoặc video trong phần này của câu chuyện.",
            "imageAndVideo2": "Vui lòng cung cấp đường liên kết cho hình ảnh (.jpg, .png, .gif), hoặc video trên ${YouTube} hoặc ${Vimeo}, hoặc chọn hình ảnh từ ${ArcGIS}, ${Flickr}, ${Google+}, hoặc ${Unsplash}.",
            "badFormat": "Đường liên kết đến tệp tin mà bạn đang cố gắng thêm vào có định dạng không chính xác.",
            "inaccessible": "Tệp tin mà bạn đang cố gắng thêm vào bị thiếu hoặc không thể truy cập được.",
            "tryAgain": "Vui lòng kiểm tra địa chỉ và thử lại.",
            "mediaTypes": {
              "VIDEO": "video",
              "IMAGE": "hình ảnh",
              "generic": "phương tiện truyền thông"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "ID Email hoặc ID ${Picasa}/${Google+}",
          "helpText": "Bạn có thể thêm hình ảnh đã được tải lên ${Picasa} hoặc ${Google+} vào câu chuyện của bạn. ${helpLinkText} sắp sửa sử dụng hình ảnh được lưu trong tài khoản ${Google} của bạn vào câu chuyện của bạn.",
          "helpLinkText": "Tìm hiểu thêm",
          "cannotFindUser": "Không thể tìm thấy người dùng ${username}. Vui lòng thử lại."
        },
        "unsplash": {
          "placeholder": "Tìm kiếm hình ảnh",
          "aboutText": "${Unsplash} là bộ sưu tập các hình ảnh miễn phí, chất lượng cao.",
          "copyrightText": "Tất cả các hình ảnh đăng trên ${Unsplash} được cấp phép theo Giấy phép ${CC0}. Tìm hiểu thêm thông tin ${moreInfoLink}.",
          "moreInfoLink": "ở đây"
        },
        "flickr": {
          "searchType": {
            "account": "Tài khoản ${Flickr}",
            "text": "Tất cả các ${Flickr}"
          },
          "placeholders": {
            "user": "Tìm kiếm tài khoản",
            "userText": "Tìm kiếm tài khoản này cho các hình ảnh",
            "text": "Tìm kiếm hình ảnh"
          },
          "errors": {
            "cannotFindUser": "Không thể tìm kiếm người dùng ${username}.",
            "noUserPhotos": "${username} không có bất kỳ hình ảnh công cộng nào.",
            "didYouMean": "Ý bạn có phải là ${username} không?",
            "generalUserError": "Đã xảy ra lỗi khi tìm kiếm người dùng ${username}."
          },
          "licenses": {
            "licenseLabel": "Giấy phép: ",
            "public": "Miền công cộng",
            "commercial": "Được phép sử dụng cho mục đích thương mại",
            "nonCommercial": "Được phép sử dụng cho mục đích phi thương mại",
            "reserved": "Tất cả các quyền đã được bảo hộ.",
            "any": "Bất kỳ giấy phép nào"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Câu chuyện này",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Cổng thông tin",
            "myOrg": "Tổ chức ${orgname}",
            "myContent": "Nội dung của tôi"
          },
          "createContent": {
            "or": "HOẶC",
            "dragAndDrop": "Thả (các) hình ảnh ở đây",
            "uploadImage": "Duyệt xem (các) hình ảnh",
            "agolInfo": "Ảnh sẽ được lưu trong tài khoản ArcGIS và chỉ có thể truy cập bên trong câu chuyện của bạn.",
            "saveBeforeUpload": "Sau khi bạn đã lưu câu chuyện này, bạn có thể tải hình ảnh lên ArcGIS ở đây.",
            "fileTypesImage": "Các loại tập tin được hỗ trợ: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Bản đồ Web",
            "webscene": "Web Scene",
            "image": "Hình ảnh",
            "date": "Ngày",
            "sortByDate": "Sắp xếp theo ngày",
            "title": "Tiêu đề",
            "sortByTitle": "Sắp xếp theo tiêu đề",
            "views": "Lượt xem",
            "search": "Tìm kiếm theo từ khóa hoặc ID"
          }
        }
      }
    }
  }
});