/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "链接到内容",
      "urls_short": "链接",
      "contentType": {
        "error": "无授权媒体。",
        "imageOnly": "可在故事的此部分中添加图像。",
        "imageAndVideo": "可在故事的此部分中添加图像或视频。",
        "imageVideoWebpage": "可在故事的此部分中添加图像、视频或 Web 页面。"
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "正在搜索 \"${searchterm}\"...",
        "searchedFor": "\"${searchterm}\" 的搜索结果",
        "albumsOf": "${username} 的图片集",
        "noPhotosFound": "没有匹配您搜索条件的照片。请重试。",
        "noItemsFound": "没有匹配您搜索条件的项目。请重试。",
        "noItemsInThisStory": "尚未向此故事添加任何来自 ArcGIS 的内容。",
        "limitReached": "正在显示 100 条项目。如果您没有找到所需内容，请尝试使用关键字搜索。",
        "galleryItems": {
          "uploadError": "抱歉，项目加载失败。"
        },
        "agol": {
          "remove1": "从您的 ArcGIS 帐户中删除该未使用图像。",
          "remove2": "(如果稍后决定使用该图像，则需要重新上传。)",
          "removeFailed": "从列表中移除该无法访问的图像。",
          "modified": "修改日期：${date}",
          "uploaded": "上传日期：${date}",
          "contentByAuthor": "${contentType}，制作者：${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "在 ${Picasa} 或 ${Google+} 上浏览照片"
        },
        "flickr": {
          "photostream": "照片流",
          "searchAndBrowse": "在 ${Flickr} 上搜索和浏览照片"
        },
        "unsplash": {
          "searchAndBrowse": "在 ${Unsplash} 上搜索照片",
          "photoBy": "照片所有者：${username}",
          "userLink": "转至 ${username} 的 ${Unsplash} 页面"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "链接到 Web 上的内容",
            "imageOnly": "链接到 Web 上的图像",
            "imageAndVideo": "链接到 Web 上的图像或视频"
          },
          "linkText": {
            "imageOnly": "在上面的框中，可直接链接到照片。",
            "imageAndVideo1": "在上面的框中，您可以粘贴来自 ${YouTube} 和 ${Vimeo} 的视频链接或 iframe 代码。",
            "imageAndVideo2": "您也可以直接链接到照片。",
            "imageVideoWebpage1": "在上面的框中，您可以粘贴来自 ${YouTube} 和 ${Vimeo} 的视频链接或 iframe 代码。",
            "imageVideoWebpage2": "您也可以直接链接到照片、Web 页面或 Web 应用程序。",
            "ender": "适用时，请使用安全 (https) 链接。"
          },
          "embedProtocol": {
            "embedProtocolLabel": "通过安全连接 (https) 加载页面。",
            "embedProtocolWarning1": "如果您的故事中未加载此页面，则出于 Web 安全性原因，无法嵌入此页面。",
            "embedProtocolWarning2": "如果您的故事中未加载此页面，请取消选中该选项并重试。如果仍无法加载此页面，则出于 Web 安全性原因，无法嵌入此页面。",
            "embedProtocolWarning3": "但是可在叙述中添加链接以在新浏览器中打开页面。${linkText}",
            "linkText": "了解详细信息。"
          },
          "placeholder": "${https://}... 或 ${http://}... 或 ${<iframe>}",
          "uploadErrors": {
            "generic": "输入的地址发生错误。请重试。",
            "imageOnly1": "必须在故事的此部分中使用图像。",
            "imageOnly2": "请提供图像 (.jpg, .png, .gif) 的链接或选择来自 ${ArcGIS}、${Flickr}、${Google+} 或 ${Unsplash} 的图像。",
            "imageAndVideo1": "必须在故事的此部分中使用图像或视频。",
            "imageAndVideo2": "请提供图像 (.jpg, .png, .gif) 的链接或 ${YouTube} 或 ${Vimeo} 上视频的链接，或选择来自 ${ArcGIS}、${Flickr}、${Google+} 或 ${Unsplash} 的图像。",
            "badFormat": "您正在尝试添加的文件链接格式不正确。",
            "inaccessible": "您正在尝试添加的文件丢失或无法访问。",
            "tryAgain": "请检查地址并重试。",
            "mediaTypes": {
              "VIDEO": "视频",
              "IMAGE": "图像",
              "generic": "媒体"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "电子邮件或 ${Picasa}/${Google+} ID",
          "helpText": "可向您的故事添加上传到 ${Picasa} 或 ${Google+} 的照片。有关在您的故事中使用存储在您 ${Google} 帐户中的图像的详细信息，请参阅 ${helpLinkText}。",
          "helpLinkText": "了解详细信息",
          "cannotFindUser": "找不到用户 ${username}。请重试。"
        },
        "unsplash": {
          "placeholder": "搜索照片",
          "aboutText": "${Unsplash} 是一个免费的高质量照片管理集合。",
          "copyrightText": "${Unsplash} 上发布的所有照片均受 ${CC0} 许可授权。请查看更多信息 ${moreInfoLink}。",
          "moreInfoLink": "此处"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} 帐户",
            "text": "所有 ${Flickr}"
          },
          "placeholders": {
            "user": "搜索帐户",
            "userText": "搜索此帐户的照片",
            "text": "搜索照片"
          },
          "errors": {
            "cannotFindUser": "找不到用户 ${username}。",
            "noUserPhotos": "${username} 无任何公共照片。",
            "didYouMean": "是否是 ${username}?",
            "generalUserError": "搜索用户 ${username} 时出错。"
          },
          "licenses": {
            "licenseLabel": "许可： ",
            "public": "公共域",
            "commercial": "可供商业用途使用",
            "nonCommercial": "可供非商业用途使用",
            "reserved": "保留所有权利",
            "any": "任何许可"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "该故事",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "${orgname} 组织",
            "myContent": "我的内容"
          },
          "createContent": {
            "or": "或",
            "dragAndDrop": "在此处放置图像",
            "uploadImage": "浏览图像",
            "agolInfo": "图像将存储到您的 ArcGIS 帐户，并且仅能通过您的故事进行访问。",
            "saveBeforeUpload": "保存该故事后，可在此处将图像上传至 ArcGIS。",
            "fileTypesImage": "支持的文件类型：.png、.jpeg、.jpg、.gif、.bmp"
          },
          "filterAndSort": {
            "webmap": "Web 地图",
            "webscene": "Web 场景",
            "image": "图像",
            "date": "日期",
            "sortByDate": "按日期排序",
            "title": "标题",
            "sortByTitle": "按标题排序",
            "views": "查看",
            "search": "按关键字或 ID 搜索"
          }
        }
      }
    }
  }
});