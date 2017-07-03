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
    "builderPanel": {
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
        "remove": "移除"
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
        "alternativeMedia": "备用介质",
        "explanation": "有些介质可能不受支持，或无法在移动设备上正常工作。使用此面板可选择更适于移动的备用项目，在手机或平板电脑上查看故事时，将使用该项目替换该介质。",
        "changeAltImage": "更改图像",
        "uploadAltImage": "添加图像"
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
      "imageUpload": "正在上传图像...",
      "imageUploadSuccess": "图像上传成功",
      "imageUploadFail": "图像上传失败"
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
        "noAltImage": "介质不支持移动设备",
        "altImageBroken": "无法访问为此介质定义的备用图像"
      },
      "contentWarnings": {
        "noAltImage": "此介质类型不支持移动设备。请提供在移动设备上查看故事时显示的备用图像。",
        "noAltImageAlt": "此介质类型不支持移动设备。请在移动选项卡上提供在移动设备上查看故事时显示的备用图像。"
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
    }
  }
});