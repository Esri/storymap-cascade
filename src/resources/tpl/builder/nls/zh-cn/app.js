/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "应用",
      "close": "关闭"
    },
    "header": {
      "sharingNotAvailable": "共享故事后才可使用此功能。",
      "edit": "编辑"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "书签",
        "logoSharing": "徽标和共享",
        "theme": "外观"
      },
      "bookmarks": {
        "title": "部分",
        "bookmark": "书签",
        "intro": "书签是显示在页眉中的指向故事部分的链接。为故事的主要部分创建简明书签可便于读者进行导航。",
        "sequentialDefault": "叙述章节(找不到文本)",
        "immersiveDefault": "拟真部分(找不到文本)",
        "titleDefault": "标题部分(找不到文本)",
        "coverDefault": "封面部分(找不到文本)",
        "coverAppendage": "(封面)"
      },
      "logoSharing": {
        "logo": "徽标",
        "logoButton": "使用 ${ESRI} 徽标",
        "useOrgLogo": "使用我组织的徽标",
        "useOrgLogoHelp": "使用管理员提供的徽标",
        "logoLink": "徽标链接",
        "logoUploadProgress": "正在上传徽标",
        "logoUploadSuccess": "徽标已成功上传",
        "logoUploadError": "徽标上传失败，正在切换回 ${ESRI} 徽标",
        "customHeaderText": "标语",
        "taglineLinkDisabledTooltip": "请输入用于启用链接的标语",
        "link": "标语链接",
        "enableSocialSharing": "显示共享按钮"
      },
      "appearance": {
        "themeLabel": "主题",
        "fontLabel": "字体",
        "previewLabel": "预览",
        "fontsTitleLabel": "标题",
        "fontsBodyLabel": "主体",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "私有",
      "btnOrg": "组织",
      "btnPublic": "公共",
      "btnEveryone": "所有人"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "构建器",
      "buttonSaving": "正在保存",
      "buttonSaved": "已保存",
      "buttonError": "保存失败",
      "buttonShare": "共享",
      "buttonSettings": "设置",
      "settingsLogoError": "您的徽标有问题。单击以了解详细信息。",
      "buttonHelp": "在 GeoNet 上获取帮助或提交反馈",
      "buttonPreview": "查看故事",
      "buttonHealth": "健康报告",
      "manageStories": "管理我的故事",
      "closeWithPendingChange": "是否要确认此操作? 您的更改将丢失。",
      "coverLabel": "封面",
      "creditsLabel": "制作者名单",
      "betaFeedback": "反馈",
      "betaNote": "请告知我们您对于 ${APP_NAME} 的想法，如果某些功能未按预期运行，也请通知我们。",
      "notSharedNote": "您的故事尚未共享，只有您可以查看",
      "organizationWarning": "要确保他人可查看此故事，还必须与组织共享该故事的场景、场景图层和嵌入式应用程序。地图和地图图层自动共享。",
      "publicWarning": "要确保他人可查看此故事，还必须与所有人共享该故事的场景、场景图层和嵌入式应用程序。地图和地图图层自动共享。",
      "addTitleNote": "向封面添加标题以进行保存",
      "saveError": "保存故事时出错。",
      "duplicate": "复制",
      "organize": "组织",
      "done": "完成",
      "invite": "在构建故事的过程中，各个部分将在此处显示...",
      "mystoriestooltip": "Cascade 构建器会警示您故事中存在的问题并帮助您修复这些问题。但不会对场景和嵌入式应用程序进行检查，请手动检查这些内容。"
    },
    "immersiveViewPanel": {
      "transition": "过渡",
      "chooseTransition": "选择过渡",
      "fade": "渐变",
      "fadeSlow": "缓慢淡化",
      "swipeVertical": "垂直滑动",
      "swipeHorizontal": "水平滑动",
      "none": "无",
      "disabledConsecutiveSameMedia": "连续视图使用同一媒体时不可用",
      "disabledTooltipMap": "要使用此过渡，两个视图内的可见图层必须不同，且其他地图属性必须相同",
      "disabledConsecutiveSameMap": "连续视图使用同一地图时不可用",
      "disabledNotInBeta": "连续视图使用同一地图时不可用",
      "disabledNonConsecutive": "此媒体以非连续方式出现时不可用",
      "addMedia": "添加媒体",
      "invite": "在构建拟真部分时，各视图将在此处显示..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "外观",
        "manage": "管理",
        "size": "大小",
        "background": "背景",
        "mobile": "移动",
        "issues": "问题",
        "fixIssues": "修复问题"
      },
      "manage": {
        "changeMedia": "更改媒体",
        "edit": "编辑",
        "editAside": "在新浏览器选项卡中打开。保存编辑内容后，请保存并重新加载此故事以查看更改。",
        "remove": "移除",
        "altTextPlaceholder": "针对视觉障碍的读者，添加该媒体的描述...",
        "altTextHelptip": "备选文本是对屏幕阅读软件等辅助技术使用的视觉媒体的说明。 此文本为可选内容，但建议其符合 WCAG 和 Section 508 等 web 可用性原则。"
      },
      "appearance": {
        "homeView": "初始视图",
        "audio": "音频",
        "on": "开",
        "muted": "静音",
        "volumeAside": "读者访问此视图时将自动播放此视频。一旦静音，读者将无法启用声音。",
        "view": "视图",
        "resetLocation": "重置位置",
        "resetLayers": "重置图层",
        "clearPopup": "删除弹出窗口",
        "interaction": "交互",
        "interactionDisabled": "交互已禁用",
        "buttonToEnable": "启用按钮",
        "interactionEnabled": "交互已启用",
        "interactionAside": "*触摸屏设备将显示交互按钮。",
        "slide": "幻灯片",
        "noSlides": "无可用幻灯片。",
        "mapExtentPrompt": "更新地图以讲述故事，单击复选框以保存更改"
      },
      "sectionAppearance": {
        "layout": "布局",
        "theme": "主题"
      },
      "size": {
        "small": "小型",
        "medium": "中等",
        "large": "大型",
        "noCrop": "请勿裁剪长图像",
        "noCropTallTooltip": "不裁剪长图像会为读者提供一种需要滚动才能查看完整图像的动态效果。"
      },
      "background": {
        "noCrop": "请勿裁剪",
        "mostImportantPart": "选择最重要的点",
        "cropExplanationImmersive": "选择图像上的某点以选择图像在不同屏幕尺寸的裁剪方式。您选择的点将始终可见。如果图像需要完全可见，请选中“请勿裁剪”。",
        "cropExplanation": "选择图像上的某点以选择图像在不同屏幕尺寸的裁剪方式。您选择的点将始终可见。",
        "color": "颜色",
        "previews": "预览"
      },
      "altMedia": {
        "alternativeMedia": "移动设备的备用图像",
        "explanation": "有些介质可能不受支持，或无法在移动设备上正常工作。使用此面板可指定一张图像，在手机或平板电脑上查看故事时，将使用该图像替换该介质。",
        "changeAltImage": "更改图像",
        "uploadAltImage": "添加备选图像"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "链接到内容",
        "urls_short": "链接",
        "contentType": {
          "error": "无授权媒体。",
          "imageOnly": "可在故事的此部分中添加图像。",
          "imageAndVideo": "可在故事的此部分中添加图像或视频。",
          "imageVideoWebpage": "可在故事的此部分中添加音频、图像、视频或 Web 页面。"
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
            "searchAndBrowse": "在 ${Flickr} 上搜索和浏览照片",
            "captionStarter": "${USERNAME} 在 ${Flickr} 上的图片"
          },
          "unsplash": {
            "searchAndBrowse": "在 ${Unsplash} 上搜索照片",
            "photoBy": "照片所有者：${username}",
            "userLink": "转至 ${username} 的 ${Unsplash} 页面",
            "captionStarter": "${USERNAME} 在 ${Unsplash} 上的图片"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "链接到 Web 上的内容",
              "imageOnly": "链接到 Web 上的图像",
              "imageAndVideo": "链接到 Web 上的图像或视频"
            },
            "linkText": {
              "imageOnly": "在上面的框中，您可以直接链接到照片。",
              "imageAndVideo1": "在上面的框中，您可以粘贴来自 ${YouTube} 或 {Vimeo} 的视频链接或 iframe 代码。",
              "imageAndVideo2": "您还可以直接链接到照片。",
              "imageVideoWebpage1": "在上面的框中，您可以粘贴来自 web 内容的链接或 iframe 代码，如 ${YouTube} 或 ${Vimeo} 的动态图表或视频。",
              "imageVideoWebpage2": "您也可以直接链接到照片、视频、音频文件、web 页面或 web 应用程序。",
              "ender": "请始终使用安全(https)链接。如果您的内容不支持 https，则在故事的文本中添加一个 https 链接，以便读者可以在新的浏览器选项卡中查看。",
              "httpsError": "链接必须以 HTTPS 开头"
            },
            "embedProtocol": {
              "embedProtocolLabel": "通过安全连接 (https) 加载页面。",
              "embedProtocolWarning1": "如果您的故事中未加载此页面，则出于 Web 安全性原因，无法嵌入此页面。",
              "embedProtocolWarning2": "如果您的故事中未加载此页面，请取消选中该选项并重试。如果仍无法加载此页面，则出于 Web 安全性原因，无法嵌入此页面。",
              "embedProtocolWarning3": "但是可在叙述中添加链接以在新浏览器中打开页面。${linkText}",
              "linkText": "了解详细信息。"
            },
            "placeholder": "${https://}... 或 ${<iframe>}",
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
          "thirdPartyTerms": "使用第三方服务即表示您同意其服务条款。 ",
          "googlePhotos": {
            "placeholder": "电子邮件或 ${Picasa}/${Google+} ID",
            "helpText": "可向您的故事添加上传到 ${Picasa} 或 ${Google+} 的照片。有关在您的故事中使用存储在您 ${Google} 帐户中的图像的详细信息，请参阅 ${helpLinkText}。",
            "helpLinkText": "了解详细信息",
            "cannotFindUser": "找不到用户 ${username}。请重试。"
          },
          "unsplash": {
            "placeholder": "搜索照片",
            "aboutText": "${Unsplash} 是一个免费的高质量照片管理集合。",
            "copyrightText": "所有照片均受 ${Unsplash} 许可授权。 查看更多信息 ${moreInfoLink}。",
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
              "createNewMap": "创建新地图",
              "or": "或者",
              "dragAndDropImage": "放置图像",
              "dragAndDropImageAudio": "放置图像或音频",
              "uploadButton": "浏览",
              "agolInfo": "仅能在此故事中访问已上传的图像和音频。",
              "saveBeforeUpload": "保存该故事后，可在此处将图像和音频上传至 ArcGIS。",
              "fileExtsImage": "支持的类型：png、jpg、gif、bmp。",
              "fileExtsImageAudio": "支持的类型：png、jpg、gif、bmp、mp3。",
              "maxSize": "每个文件最大 10 MB。"
            },
            "filterAndSort": {
              "webmap": "Web 地图",
              "webscene": "Web 场景",
              "image": "图像",
              "audio": "音频",
              "date": "日期",
              "sortByDate": "按日期排序",
              "title": "标题",
              "sortByTitle": "按标题排序",
              "views": "访问量",
              "search": "按关键字或 ID 搜索"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "编辑地图",
      "unauthorizedDomain": "您未在授权的域名上，不可以使用地图编辑器",
      "loading": "正在加载地图编辑器，请稍候",
      "saving": "正在保存地图",
      "success": "已保存地图",
      "cancelTitle": "是否放弃所有未保存更改?",
      "errorSave": "无法保存地图。请重试。",
      "loadFail": "抱歉，无法加载地图编辑器",
      "close": "关闭",
      "save": "保存",
      "confirm": "是，关闭地图",
      "deny": "否，继续工作"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "在此处继续您的故事..."
      },
      "blockAdd": {
        "text": "文本",
        "media": "媒体",
        "title": "标题",
        "immersive": "拟真"
      },
      "link": {
        "invite": "粘贴或输入链接..."
      },
      "color": {
        "choose": "选择",
        "cancel": "取消",
        "clear": "清除颜色"
      }
    },
    "imageGallery": {
      "addImage": "添加其他影像",
      "moveBackward": "向后移动",
      "moveForward": "向前移动"
    },
    "cover": {
      "titlePrompt": "请输入故事标题...",
      "subtitlePrompt": "向下滚动以开始或输入可选子标题",
      "mediaPlaceholder": "添加图像或视频",
      "saveError": "保存失败，已存在与此标题相同的项目"
    },
    "credits": {
      "sectionInvite": "添加制作者名单部分",
      "warning": "必须填充所有字段",
      "content": "内容...",
      "source": "来源...",
      "linkPrompt": "可选链接...",
      "introductionPlaceholder": "向制作者名单部分输入可选简介..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "主题"
      },
      "panelConfig": {
        "position": "位置",
        "theme": "主题",
        "size": "大小",
        "background": "背景",
        "layout": "滚动(针对所有面板)"
      }
    },
    "title": {
      "placeholder": "输入标题..."
    },
    "media": {
      "mediaUpload": "正在上传媒体...",
      "mediaUploadSuccess": "媒体上传成功",
      "mediaUploadFail": "媒体上传失败"
    },
    "controller": {
      "sectionOrganize": "您对各个部分进行了组织",
      "immersiveOrganize": "您对各个视图进行了组织",
      "sectionDelete": "您删除了一个部分",
      "viewDelete": "您删除了一个视图"
    },
    "notification": {
      "cancel": "取消",
      "close": "关闭",
      "undo": "撤消"
    },
    "sections": {
      "sequence": "叙述",
      "immersive": "拟真",
      "title": "标题"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "图像",
        "audio": "音频",
        "webmap": "地图",
        "webscene": "场景",
        "video": "视频",
        "content": "内容",
        "webpage": "Web 页面"
      },
      "placeholders": {
        "generic": "无法访问此内容。",
        "deleted": "该项目已被删除。",
        "inaccessible": "无法访问此内容。",
        "unauthorized": "您无权查看此内容。",
        "unshared": "此项目未与以故事相同的方式进行共享。",
        "othersUnshared": "此项目未与以故事相同的方式进行共享。",
        "subscriptionContent": "此地图包含订阅者图层。",
        "premiumContent": "此地图包含高级图层。",
        "secureService": "此地图包含安全图层。"
      },
      "contentIssues": {
        "noAltImage": "介质可能无法用于移动设备",
        "noAltImageUnsupported": "介质不支持移动设备",
        "noAltImageWarning": "介质可能无法用于移动设备",
        "altImageBroken": "无法访问为此介质定义的备用图像",
        "httpMedia": "非安全媒体",
        "httpContent": "非安全内容"
      },
      "contentWarnings": {
        "noAltImage": "请确保在共享故事前先在移动设备上测试故事。如果该介质没有按预期运作，请使用以下按钮添加备选图像，在手机或平板电脑上查看故事时将显示该图像。",
        "noAltImageUnsupported": "此介质无法用于移动设备。请使用以下按钮添加备选图像，在手机或平板电脑上查看故事时将显示该图像。",
        "noAltImageWarning": "请确保在共享故事前先在移动设备上测试故事。如果该介质没有按预期运作，请使用以下按钮添加备选图像，在手机或平板电脑上查看故事时将显示该图像。",
        "noAltImageAlt": "此介质类型不受支持或无法用于移动设备。请在移动选项卡上提供一张备选图像，在手机或平板电脑上查看故事时将显示该图像。"
      },
      "descriptions": {
        "httpAudioUnfixable": "该音频不支持 HTTPS。请将其从您的故事中删除或将其替换为链接。",
        "httpAudioUncheckable": "此音频具有非安全 (HTTP) URL。 请单击以下按钮以尝试使用此音频的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此音频，或者将其替换为超链接。",
        "httpAudioFixable": "此音频具有非安全 (HTTP) URL。 请单击以下按钮以使用此音频的安全 HTTPS URL。",
        "httpWebpageUnfixable": "该网页不支持 HTTPS。请将其从您的故事中删除或将其替换为屏幕截图或链接。",
        "httpWebpageUncheckable": "此 web 页面具有非安全 (HTTP) URL。 请单击以下按钮以尝试使用此 web 页面的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此 web 页面，或者将其替换为屏幕截图或超链接。",
        "httpWebpageFixable": "此 web 页面具有非安全 (HTTP) URL。 请单击以下按钮以使用此 web 页面的安全 HTTPS URL。",
        "httpVideoUnfixable": "该视频不支持 HTTPS。请将其从您的故事中删除或将其替换为屏幕截图或链接。",
        "httpVideoUncheckable": "此视频具有非安全 (HTTP) URL。 请单击以下按钮以尝试使用此视频的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此视频，或者将其替换为屏幕截图或超链接。",
        "httpVideoFixable": "此视频具有非安全 (HTTP) URL。 请单击以下按钮以使用此视频的安全 HTTPS URL。",
        "httpImageUnfixable": "该图片不支持 HTTPS。请将其从您的故事中删除或将其替换为链接。",
        "httpImageUncheckable": "此图像具有非安全 (HTTP) URL。 请单击以下按钮以尝试使用此图像的安全 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此图像，或者将其替换为超链接。",
        "httpImageFixable": "此图像具有非安全 (HTTP) URL。 请单击以下按钮以使用此图像的安全 HTTPS URL。",
        "httpLayer": "该图层具有非安全 (HTTP) URL。",
        "inaccessibleLogo": "此徽标无法访问。请将其替换为其他图像。",
        "httpLogoUnfixable": "此徽标不支持 HTTPS。请将其替换为其他图像。",
        "httpLogoFixable": "此徽标具有非安全 (HTTP) URL。请为徽标使用 HTTPS URL。",
        "httpLogoUncheckable": "此徽标具有非安全 (HTTP) URL。请为徽标使用 HTTPS URL，或将其替换为其他图像。"
      },
      "tooltips": {
        "httpAudioFixable": "请单击按钮以使用此音频的安全 HTTPS URL。",
        "httpAudioUncheckable": "尝试使用此音频的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此音频，或者将其替换为链接。",
        "httpWebpageFixable": "请单击按钮以使用此网页的安全 HTTPS URL。",
        "httpWebpageUncheckable": "尝试使用此 web 页面的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此 web 页面，或者将其替换为屏幕截图或链接。",
        "httpVideoFixable": "请单击按钮以使用此视频的安全 HTTPS URL。",
        "httpVideoUncheckable": "尝试使用此视频的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此视频，或者将其替换为屏幕截图或链接。",
        "httpImageFixable": "请单击按钮以使用图像的安全 HTTPS URL。",
        "httpImageUncheckable": "尝试使用此图像的 HTTPS URL。 如果该方法不起作用，请从您的故事中移除此图像，或者将其替换为链接。",
        "httpLayerMyMap": "访问地图的项目页面更新此图层以使用 HTTPS。如果图层无法更新，请将其从地图中删除。",
        "httpLayerNotMyMap": "复制地图并更新此图层以使用 HTTPS。如果图层无法更新，请将其从地图中删除。",
        "clickLearnMore": "单击以了解详细信息。"
      },
      "fixButtons": {
        "agolItemPage": "项目页面",
        "openTheMap": "打开地图",
        "updateAudio": "修复音频 URL",
        "updateWebpages": "修复 Web 页面 URL",
        "updateVideos": "修复视频 URL",
        "updateImages": "修复图像 URL"
      },
      "mapIssues": {
        "fixButton": "修复问题",
        "nofixButton": "问题",
        "mapLabel": "地图：",
        "summaries": {
          "unshared": "未共享内容",
          "othersUnshared": "他人的未共享内容",
          "subscriptionContent": "订阅者内容",
          "premiumContent": "高级内容",
          "secureContent": "安全内容",
          "deleted": "已删除内容",
          "inaccessible": "无法访问的内容",
          "unauthorized": "未获授权的内容"
        },
        "descriptions": {
          "unshared": "此内容未以与故事相同的方式进行共享。",
          "othersUnshared": "此内容由其他人拥有，且未以与故事相同的方式进行共享。",
          "othersUnsharedAuthorized": "此内容由其他人拥有，但您有权对其进行共享。",
          "inaccessible": "无法访问此内容。",
          "deleted": "此内容已删除。",
          "unauthorized": "您无权查看此内容。",
          "popupFeatureLayer": "切片图层弹出窗口所在的要素图层未以与故事相同的方式进行共享。",
          "subscriptionContent": "您必须对订阅者内容进行授权以便公众使用。",
          "premiumContent": "您必须对高级内容进行授权以便公众使用。",
          "secureService": "读者无法访问安全内容。",
          "missingItemWarning": "与此图层关联的项目已删除。"
        },
        "tooltips": {
          "unshared": "单击以了解关于共享的更多信息。",
          "othersUnshared": "您没有共享他人所拥有内容的权限。请告知拥有者共享内容、从您的故事中移除地图或编辑地图以移除并非您拥有的图层。单击以了解有关编辑地图的详细信息。",
          "inaccessible": "从故事中移除此地图或编辑此地图以移除无法访问的图层。单击以了解有关编辑地图的详细信息。",
          "deleted": "从故事中移除此地图或编辑此地图以移除缺失的图层。单击以了解有关编辑地图的详细信息。",
          "unauthorized": "从故事中移除此地图或编辑此地图以移除未获授权的图层。单击以了解有关编辑地图的详细信息。",
          "popupFeatureLayer": "切片图层弹出窗口所在的要素图层未以与故事相同的方式进行共享。",
          "subscriptionContent": "订阅者内容不会消耗配额。单击以了解详细信息。",
          "premiumContent": "用户查看故事中的高级图层时将消耗组织配额。单击以了解详细内容。",
          "secureService": "从故事中移除安全内容，或单击以了解如何授权安全内容，以供他人使用。",
          "missingItemWarning": "此图层仍可供使用，但其符号、弹出窗口或名称可能发生了更改。请确认图层是否按预期显示，或从故事中移除图层。"
        },
        "fixButtons": {
          "share": "共享",
          "hide": "隐藏",
          "authorize": "授权",
          "remove": "移除",
          "help": "获取帮助",
          "ignore": "忽略",
          "confirm": "确认",
          "edit": "编辑地图"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "某些地图和图层也已共享。",
          "alsoSharedMaps": "某些地图也已共享。",
          "alsoSharedLayers": "某些图层也已共享。",
          "sharedOthersContent": "您已使用管理权限共享其他人的内容。"
        }
      },
      "storyHealth": {
        "healthy": "没有问题",
        "notHealthy": "修复问题",
        "warnings": "查看警告"
      }
    },
    "saveErrorSocial": {
      "title": "社交媒体共享",
      "panel1": "您的故事可能无法在社交媒体上正确显示，因为 ArcGIS Web 应用程序项目标题与故事标题不同。",
      "panel1tooltip": "通过定义标题、摘要和缩略图，您的故事将显示如下：",
      "panel2": "您希望在社交媒体上使用的标题：",
      "panel2q1": "故事标题(建议)",
      "panel2q1tooltip": "通过选择此选项，可修改您的项目标题以便与故事标题进行匹配并同步在构建器中所做的进一步更改。",
      "panel2q2": "项目标题",
      "panel3": "要进一步改善您的故事在社交媒体上的外观，请使用 ${MYSTORIES} 添加摘要和缩略图。",
      "panel4": "此故事不再提醒",
      "save": "保存",
      "mystories": "我的故事"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "关于网络安全和故事地图的重要消息",
      "s1h1": "Esri 将增强故事地图的安全性",
      "s1p1": "您的故事地图将显示在 web 上，web 社区始终致力于建立并实施更好的安全性措施。 HTTPS (可为通过 Internet 传输的内容提供安全连接)正逐渐成为访问 web 内容的首选方式。 当使用 HTTP 而非 HTTPS 时，大多数现代浏览器现在会显示警告消息。 鉴于这一新兴标准，我们强烈建议您使用 HTTPS 链接来创作和共享 Story Maps，并且仅在嵌入 web 内容或链接到 Story Map 中的图像时才使用 HTTPS URL。",
      "s1p2": "实际上，这意味着 Story Map 及其所有内容(包括影像、图层、嵌入式应用程序和网站)应使用以 HTTPS 而非 HTTP 开头的链接进行访问。 这可确保为读者提供最佳体验，因为大多数 web 浏览器都会指示您的故事是安全的。",
      "s2h1": "我需要做什么?",
      "s2p1": "Esri 致力于使故事地图的作者和读者轻松实现过渡。 Story Map 构建器和 My Stories 中现已提供工具，可帮助您在故事中查找非安全内容(HTTP)，并就如何解决提出建议。 请检查您的故事是否存在非安全内容，并尽快更新为 HTTPS。",
      "action1": "关闭",
      "action2": "立即检查我的故事",
      "action3": "了解详细信息",
      "floatingNotification": "此故事包含非安全 (HTTP) 内容。请检查并解决这些问题。"
    }
  }
});