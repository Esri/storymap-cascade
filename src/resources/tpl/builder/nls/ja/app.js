/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "適用",
      "close": "閉じる"
    },
    "header": {
      "sharingNotAvailable": "これはストーリーを共有するまで利用できません",
      "edit": "編集"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "ブックマーク",
        "logoSharing": "ロゴと共有",
        "theme": "表示設定"
      },
      "bookmarks": {
        "title": "セクション",
        "bookmark": "ブックマーク",
        "intro": "ブックマークは、ヘッダーに表示されるストーリー セクションへのリンクです。ストーリーのメイン セクションに簡潔なブックマークを作成すると、ユーザーが使いやすくなります。",
        "sequentialDefault": "注釈セクション (テキストが見つかりません)",
        "immersiveDefault": "没入型セクション (テキストが見つかりません)",
        "titleDefault": "タイトル セクション (テキストが見つかりません)",
        "coverDefault": "カバー セクション (テキストが見つかりません)",
        "coverAppendage": "(カバー)"
      },
      "logoSharing": {
        "logo": "ロゴ",
        "logoButton": "${ESRI} のロゴを使用",
        "useOrgLogo": "組織のロゴを使用",
        "useOrgLogoHelp": "管理者が指定したロゴを使用",
        "logoLink": "ロゴのリンク",
        "logoUploadProgress": "ロゴのアップロードが進行中です",
        "logoUploadSuccess": "ロゴが正常にアップロードされました",
        "logoUploadError": "ロゴのアップロードに失敗しました。${ESRI} のロゴに再び切り替えます。",
        "customHeaderText": "タグライン",
        "taglineLinkDisabledTooltip": "タグラインを入力してリンクを有効化",
        "link": "タグラインのリンク",
        "enableSocialSharing": "共有ボタンの表示"
      },
      "appearance": {
        "themeLabel": "テーマ",
        "fontLabel": "フォント",
        "previewLabel": "プレビュー",
        "fontsTitleLabel": "タイトル",
        "fontsBodyLabel": "ボディ",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "プライベート",
      "btnOrg": "組織",
      "btnPublic": "パブリック",
      "btnEveryone": "すべてのユーザー"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "ビルダー",
      "buttonSaving": "保存しています",
      "buttonSaved": "保存完了",
      "buttonError": "保存できません",
      "buttonShare": "共有",
      "buttonSettings": "設定",
      "settingsLogoError": "ロゴに問題があります。クリックして詳細を確認してください。",
      "buttonHelp": "ヘルプを表示または GeoNet にフィードバックを送信",
      "buttonPreview": "ストーリーの表示",
      "buttonHealth": "正常性レポート",
      "manageStories": "マイ ストーリーの管理",
      "closeWithPendingChange": "このアクションを確認しますか？変更内容は失われます。",
      "coverLabel": "カバー",
      "creditsLabel": "クレジット",
      "betaFeedback": "フィードバック",
      "betaNote": "${APP_NAME} に対するご意見をお聞かせください。または、正常に動作していない場合はご連絡ください。",
      "notSharedNote": "ストーリーは共有されていません。あなただけこのストーリを見れます。",
      "organizationWarning": "このストーリーを他のユーザーが表示できるようにするには、そのシーン、シーン レイヤー、および埋め込みアプリを組織で共有する必要もあります。マップとマップ レイヤーは自動的に共有されます。",
      "publicWarning": "このストーリーを他のユーザーが表示できるようにするには、そのシーン、シーン レイヤー、および埋め込みアプリをすべてのユーザーと共有する必要もあります。マップとマップ レイヤーは自動的に共有されます。",
      "addTitleNote": "保存するカバーにタイトルを追加",
      "saveError": "ストーリーの保存中にエラーが発生しました。",
      "duplicate": "複製",
      "organize": "整理",
      "done": "完了",
      "invite": "ストーリーを構築するとき、セクションはここに表示されます...",
      "mystoriestooltip": "カスケード ビルダーはストーリーの問題を警告するため、問題の解決に役立ちます。シーンおよび埋め込みアプリはチェックされないため、手動で確認してください。"
    },
    "immersiveViewPanel": {
      "transition": "トランジション",
      "chooseTransition": "トランジションの選択",
      "fade": "フェード",
      "fadeSlow": "低速でフェード",
      "swipeVertical": "垂直方向にスワイプ",
      "swipeHorizontal": "水平方向にスワイプ",
      "none": "なし",
      "disabledConsecutiveSameMedia": "連続型ビューが同じメディアを使用する場合は利用できません",
      "disabledTooltipMap": "このトランジションを使用するには、両方のビューの表示レイヤーが異なり、他のマップ プロパティは同じである必要があります",
      "disabledConsecutiveSameMap": "連続型ビューが同じマップを使用する場合は利用できません",
      "disabledNotInBeta": "連続型ビューが同じマップを使用する場合は利用できません",
      "disabledNonConsecutive": "このメディアが連続しないで表示されるため利用できません",
      "addMedia": "メディアの追加",
      "invite": "没入型セクションを構築するとき、ビューはここに表示されます..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "表示設定",
        "manage": "管理",
        "size": "サイズ",
        "background": "背景",
        "mobile": "モバイル",
        "issues": "問題",
        "fixIssues": "問題の解決"
      },
      "manage": {
        "changeMedia": "メディアの変更",
        "edit": "編集",
        "editAside": "新しいブラウザー タブで開きます。編集内容の保存後は、このストーリーを保存および再読み込みすると、変更内容が表示されます。",
        "remove": "削除",
        "altTextPlaceholder": "視覚障害者向けに、このメディアの説明を追加します...",
        "altTextHelptip": "代替テキストは、スクリーン リーダー ソフトウェアなどの補助テクノロジで使用される視覚メディアの説明です。 これはオプションですが、WCAG や Section 508 などの Web アクセシビリティ ガイドラインを満たすために推奨されます。"
      },
      "appearance": {
        "homeView": "初期表示",
        "audio": "オーディオ",
        "on": "オン",
        "muted": "ミュート",
        "volumeAside": "ユーザーがこのビューを表示すると、ビデオが自動再生されます。音をミュートにした場合、ユーザーは有効にできません。",
        "view": "表示",
        "resetLocation": "位置のリセット",
        "resetLayers": "レイヤーのリセット",
        "clearPopup": "ポップアップの消去",
        "interaction": "対話機能",
        "interactionDisabled": "対話機能が無効です",
        "buttonToEnable": "有効にするボタン",
        "interactionEnabled": "対話機能が有効です",
        "interactionAside": "*タッチ デバイスには対話機能ボタンが表示されます。",
        "slide": "スライド",
        "noSlides": "利用できるスライドはありません。",
        "mapExtentPrompt": "ストーリーを伝えるマップを更新します。チェックマークをクリックすると、変更内容が保存されます。"
      },
      "sectionAppearance": {
        "layout": "レイアウト",
        "theme": "テーマ"
      },
      "size": {
        "small": "小",
        "medium": "中",
        "large": "大",
        "noCrop": "縦長の画像をトリミングしない",
        "noCropTallTooltip": "縦長の画像をトリミングしない場合、画像全体を表示するためにスクロールする必要があるため、読者に大きな影響があります。"
      },
      "background": {
        "noCrop": "トリミングしない",
        "mostImportantPart": "最も重要なポイントを選択",
        "cropExplanationImmersive": "画像上のポイントを選択して、画像を異なる画面サイズでトリミングする方法を選択します。 選択したポイントは常に表示されます。 画像を完全に表示する必要がある場合は、[トリミングしない] をオンにします。",
        "cropExplanation": "画像上のポイントを選択して、画像を異なる画面サイズでトリミングする方法を選択します。 選択したポイントは常に表示されます。",
        "color": "色",
        "previews": "プレビュー"
      },
      "altMedia": {
        "alternativeMedia": "モバイル用の代替画像",
        "explanation": "一部のメディアは、モバイル デバイスでサポートされていないか、うまく動作しない可能性があります。このパネルを使用して、ストーリーをスマートフォンまたはタブレットで表示するときにこのメディアの代わりに表示される画像を指定してください。",
        "changeAltImage": "イメージの変更",
        "uploadAltImage": "代替画像を追加"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "コンテンツへのリンク",
        "urls_short": "リンク",
        "contentType": {
          "error": "許可されているメディアがありません。",
          "imageOnly": "ストーリーのこの部分には、画像を追加できます。",
          "imageAndVideo": "ストーリーのこの部分には、画像またはビデオを追加できます。",
          "imageVideoWebpage": "ストーリーのこの部分には、オーディオ、画像、ビデオ、または Web ページを追加できます。"
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "\"${searchterm}\" を検索しています...",
          "searchedFor": "\"${searchterm}\" の検索結果",
          "albumsOf": "${username} のアルバム",
          "noPhotosFound": "検索に一致する写真はありませんでした。もう一度やり直してください。",
          "noItemsFound": "検索に一致するアイテムはありませんでした。もう一度やり直してください。",
          "noItemsInThisStory": "このストーリーには ArcGIS のコンテンツがまだ追加されていません。",
          "limitReached": "100 アイテムを表示しています。必要なアイテムが見つからなかった場合は、キーワード検索をお試しください。",
          "galleryItems": {
            "uploadError": "このアイテムをアップロードできませんでした。"
          },
          "agol": {
            "remove1": "この未使用の画像を ArcGIS アカウントから削除します",
            "remove2": "(後で使用する場合は、もう一度アップロードする必要があります)。",
            "removeFailed": "このアクセスできない画像をこのリストから削除します。",
            "modified": "${date} を変更しました",
            "uploaded": "${date} をアップロードしました",
            "contentByAuthor": "${author} 別の ${contentType}"
          },
          "googlePhotos": {
            "searchAndBrowse": "${Picasa} または ${Google+} の写真を参照"
          },
          "flickr": {
            "photostream": "Photostream",
            "searchAndBrowse": "${Flickr} の写真を検索および参照",
            "captionStarter": "${Flickr} の ${USERNAME} の写真"
          },
          "unsplash": {
            "searchAndBrowse": "${Unsplash} の写真を検索",
            "photoBy": "${username} による写真",
            "userLink": "${username} の ${Unsplash} ページへ移動",
            "captionStarter": "${Unsplash} の ${USERNAME} の写真"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Web 上のコンテンツへのリンク",
              "imageOnly": "Web 上の画像へのリンク",
              "imageAndVideo": "Web 上の画像またはビデオへのリンク"
            },
            "linkText": {
              "imageOnly": "上のボックスで写真に直接リンクできます。",
              "imageAndVideo1": "上のボックスで、${YouTube} または ${Vimeo} のビデオのリンクまたは iframe コードを貼り付けることができます。",
              "imageAndVideo2": "また、写真に直接リンクすることもできます。",
              "imageVideoWebpage1": "上のボックスで、動的なチャートなどの Web コンテンツのリンクまたは iframe コードや、${YouTube} または ${Vimeo} のビデオのリンクまたは iframe コードを貼り付けることができます。",
              "imageVideoWebpage2": "写真、ビデオ、音声ファイル、Web ページ、または Web アプリに直接リンクすることもできます。",
              "ender": "必ずセキュアな (https) リンクを使用してください。コンテンツが https をサポートしていない場合、リンクをストーリーのテキスト内のコンテンツに追加し、ユーザーがブラウザーの新しいタブでコンテンツを表示できるようにします。",
              "httpsError": "リンクは、HTTPS で始まる必要があります"
            },
            "embedProtocol": {
              "embedProtocolLabel": "セキュリティで保護された接続 (https) を介してページを読み込みます",
              "embedProtocolWarning1": "このページがストーリーに読み込まれない場合、Web セキュリティ上の理由からこのページを埋め込むことはできません。",
              "embedProtocolWarning2": "このページがストーリーに読み込まれない場合、このオプションをオフにしてもう一度試行してください。それでもまだページが読み込まれない場合は、Web セキュリティ上の理由からこのページを埋め込むことはできません。",
              "embedProtocolWarning3": "代替操作として、注釈のリンクを追加して、新しいブラウザー タブでそのページを開きます。${linkText}",
              "linkText": "詳細"
            },
            "placeholder": "${https://}... または ${<iframe>}",
            "uploadErrors": {
              "generic": "入力したアドレスで問題が発生しました。もう一度やり直してください。",
              "imageOnly1": "ストーリーのこの部分には、画像を使用する必要があります。",
              "imageOnly2": "画像 (*.jpg、*.png、*.gif) へのリンクを指定するか、${ArcGIS}、${Flickr}、${Google+}、または ${Unsplash} から画像を選択してください。",
              "imageAndVideo1": "ストーリーのこの部分には、画像またはビデオを使用する必要があります。",
              "imageAndVideo2": "画像 (*.jpg、*.png、*.gif) または ${YouTube} や ${Vimeo} のビデオへのリンクを指定するか、${ArcGIS}、${Flickr}、${Google+}、または ${Unsplash} から画像を選択してください。",
              "badFormat": "追加しようとしているファイルへのリンクの書式が正しくありません。",
              "inaccessible": "追加しようとしているファイルが見つからないか、アクセスできません。",
              "tryAgain": "アドレスを確認して、もう一度やり直してください。",
              "mediaTypes": {
                "VIDEO": "ビデオ",
                "IMAGE": "画像",
                "generic": "メディア"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "サードパーティのサービスを使用することによって、そのサービスの利用条件に同意します。 ",
          "googlePhotos": {
            "placeholder": "電子メールまたは ${Picasa}/${Google+} ID",
            "helpText": "${Picasa} または ${Google+} にアップロードされた写真は、ストーリーに追加できます。${Google} アカウントに格納された画像のストーリーでの使用に関する ${helpLinkText}。",
            "helpLinkText": "詳細",
            "cannotFindUser": "${username} が見つかりません。もう一度やり直してください。"
          },
          "unsplash": {
            "placeholder": "写真の検索",
            "aboutText": "${Unsplash} は、無料の高品質な写真コレクションです。",
            "copyrightText": "すべての写真は ${Unsplash} のライセンスの下でライセンス供与されます。 詳細情報 ${moreInfoLink} をご参照ください。",
            "moreInfoLink": "こちら"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} アカウント",
              "text": "すべての ${Flickr}"
            },
            "placeholders": {
              "user": "アカウントの検索",
              "userText": "このアカウントの写真を検索",
              "text": "写真の検索"
            },
            "errors": {
              "cannotFindUser": "ユーザー ${username} が見つかりません。",
              "noUserPhotos": "${username} にパブリックな写真はありません。",
              "didYouMean": "${username} ですか？",
              "generalUserError": "ユーザー ${username} の検索中に問題が発生しました。"
            },
            "licenses": {
              "licenseLabel": "ライセンス: ",
              "public": "パブリック ドメイン",
              "commercial": "営利利用の場合に OK",
              "nonCommercial": "個人利用の場合に OK",
              "reserved": "All rights reserved",
              "any": "任意のライセンス"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "このストーリー",
              "agol": "ArcGIS Online",
              "portalArcGIS": "Portal for ArcGIS",
              "portal": "Portal",
              "myOrg": "${orgname} の組織サイト",
              "myContent": "マイ コンテンツ"
            },
            "createContent": {
              "createNewMap": "新しいマップの作成",
              "or": "OR",
              "dragAndDropImage": "画像をドロップ",
              "dragAndDropImageAudio": "画像またはオーディオをドロップ",
              "uploadButton": "参照",
              "agolInfo": "アップロードした画像とオーディオには、このストーリー内でのみアクセスできます。",
              "saveBeforeUpload": "このストーリーを保存したら、ここで画像とオーディオを ArcGIS にアップロードできます。",
              "fileExtsImage": "サポートされているタイプ: png、jpg、gif、bmp",
              "fileExtsImageAudio": "サポートされているタイプ: png、jpg、gif、bmp、mp3",
              "maxSize": "ファイルあたり最大 10 MB"
            },
            "filterAndSort": {
              "webmap": "Web マップ",
              "webscene": "Web シーン",
              "image": "イメージ",
              "audio": "オーディオ",
              "date": "日付",
              "sortByDate": "日付で並べ替え",
              "title": "タイトル",
              "sortByTitle": "タイトルで並べ替え",
              "views": "ビュー",
              "search": "キーワードまたは ID による検索"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "マップの編集",
      "unauthorizedDomain": "認証済みドメイン上にいないため、マップ エディターを使用できません",
      "loading": "マップ エディターを読み込んでいます。しばらくお待ちください",
      "saving": "マップを保存しています",
      "success": "マップが保存されました",
      "cancelTitle": "保存されていない変更内容をすべて破棄しますか？",
      "errorSave": "マップを保存できません。もう一度やり直してください。",
      "loadFail": "マップ エディターを読み込めません",
      "close": "閉じる",
      "save": "保存",
      "confirm": "はい、マップを閉じます",
      "deny": "いいえ、このまま続行します"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "ここでストーリーを続行..."
      },
      "blockAdd": {
        "text": "テキスト",
        "media": "メディア",
        "title": "タイトル",
        "immersive": "没入型"
      },
      "link": {
        "invite": "リンクの貼り付けまたはリンク..."
      },
      "color": {
        "choose": "選択",
        "cancel": "キャンセル",
        "clear": "色の消去"
      }
    },
    "imageGallery": {
      "addImage": "別の画像を追加",
      "moveBackward": "後方へ移動",
      "moveForward": "前方へ移動"
    },
    "cover": {
      "titlePrompt": "ストーリーのタイトルを入力...",
      "subtitlePrompt": "下にスクロールして操作を開始するか、オプションのサブタイトルを入力",
      "mediaPlaceholder": "画像またはビデオの追加",
      "saveError": "保存できませんでした。このタイトルのアイテムがすでに存在します"
    },
    "credits": {
      "sectionInvite": "著作権セクションの追加",
      "warning": "両方のフィールドを入力する必要があります",
      "content": "コンテンツ...",
      "source": "ソース...",
      "linkPrompt": "オプションのリンク...",
      "introductionPlaceholder": "任意で概要を著作権セクションに追加"
    },
    "immersive": {
      "titleConfig": {
        "theme": "テーマ"
      },
      "panelConfig": {
        "position": "位置",
        "theme": "テーマ",
        "size": "サイズ",
        "background": "背景",
        "layout": "スクロール (すべてのパネル)"
      }
    },
    "title": {
      "placeholder": "タイトルの入力..."
    },
    "media": {
      "mediaUpload": "メディアのアップロードが進行中です...",
      "mediaUploadSuccess": "メディアが正常にアップロードされました",
      "mediaUploadFail": "メディアのアップロードに失敗しました"
    },
    "controller": {
      "sectionOrganize": "セクションを整理しました",
      "immersiveOrganize": "ビューを整理しました",
      "sectionDelete": "セクションを削除しました",
      "viewDelete": "ビューを削除しました"
    },
    "notification": {
      "cancel": "キャンセル",
      "close": "閉じる",
      "undo": "元に戻す"
    },
    "sections": {
      "sequence": "注釈",
      "immersive": "没入型",
      "title": "タイトル"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "画像",
        "audio": "オーディオ",
        "webmap": "マップ",
        "webscene": "シーン",
        "video": "ビデオ",
        "content": "コンテンツ",
        "webpage": "Web ページ"
      },
      "placeholders": {
        "generic": "このコンテンツにアクセスできません。",
        "deleted": "このアイテムは削除されました。",
        "inaccessible": "このコンテンツにアクセスできません。",
        "unauthorized": "このコンテンツを表示する権限がありません。",
        "unshared": "このアイテムはストーリーと同じように共有されていません。",
        "othersUnshared": "このアイテムはストーリーと同じように共有されていません。",
        "subscriptionContent": "このマップには登録者のレイヤーが含まれています。",
        "premiumContent": "このマップにはプレミアム レイヤーが含まれています。",
        "secureService": "このマップには保護されたレイヤーが含まれています。"
      },
      "contentIssues": {
        "noAltImage": "メディアがモバイル上で動作しない可能性があります",
        "noAltImageUnsupported": "メディアがモバイルでサポートされていません",
        "noAltImageWarning": "メディアがモバイル上で動作しない可能性があります",
        "altImageBroken": "このメディア アイテムに定義されている代替画像にアクセスできません",
        "httpMedia": "安全でないメディア",
        "httpContent": "安全でないコンテンツ"
      },
      "contentWarnings": {
        "noAltImage": "ストーリーを共有する前に、そのストーリーを必ずモバイル デバイス上でテストしてください。このメディアが期待どおりに動作しない場合は、下のボタンを使用して、ストーリーをスマートフォンまたはタブレットで表示するときに表示される代替画像を追加してください。",
        "noAltImageUnsupported": "このメディアは、モバイル デバイス上では動作しません。下のボタンを使用して、ストーリーをスマートフォンまたはタブレットで表示するときに表示される代替画像を追加してください。",
        "noAltImageWarning": "ストーリーを共有する前に、そのストーリーを必ずモバイル デバイス上でテストしてください。このメディアが期待どおりに動作しない場合は、下のボタンを使用して、ストーリーをスマートフォンまたはタブレットで表示するときに表示される代替画像を追加してください。",
        "noAltImageAlt": "このメディアのタイプは、モバイル デバイスでサポートされていないか、うまく動作しない可能性があります。モバイル タブで、ストーリーをスマートフォンまたはタブレットで表示するときに表示される代替画像を指定してください。"
      },
      "descriptions": {
        "httpAudioUnfixable": "このオーディオは、HTTPS をサポートしていません。ストーリーからこれを削除するか、リンクに置き換えてください。",
        "httpAudioUncheckable": "このオーディオには安全でない (HTTP) URL があります。下のボタンをクリックして、このオーディオに HTTPS URL を使用してみてください。 動作しない場合は、ストーリーからオーディオを削除するか、ハイパーリンクに置き換えてください。",
        "httpAudioFixable": "このオーディオには安全でない (HTTP) URL があります。下のボタンをクリックして、このオーディオに安全な HTTPS URL を使用してください。",
        "httpWebpageUnfixable": "この Web ページは、HTTPS をサポートしていません。ストーリーからこれを削除するか、スクリーンショットまたはリンクに置き換えてください。",
        "httpWebpageUncheckable": "この Web ページには安全でない (HTTP) URL があります。下のボタンをクリックして、この Web ページに HTTPS URL を使用してみてください。 動作しない場合は、ストーリーから Web ページを削除するか、スクリーンショットまたはハイパーリンクに置き換えてください。",
        "httpWebpageFixable": "この Web ページには安全でない (HTTP) URL があります。下のボタンをクリックして、この Web ページに安全な HTTPS URL を使用してください。",
        "httpVideoUnfixable": "このビデオは、HTTPS をサポートしていません。ストーリーからこれを削除するか、スクリーンショットまたはリンクに置き換えてください。",
        "httpVideoUncheckable": "このビデオには安全でない (HTTP) URL があります。下のボタンをクリックして、このビデオに HTTPS URL を使用してみてください。 動作しない場合は、ストーリーからビデオを削除するか、スクリーンショットまたはハイパーリンクに置き換えてください。",
        "httpVideoFixable": "このビデオには安全でない (HTTP) URL があります。下のボタンをクリックして、このビデオに安全な HTTPS URL を使用してください。",
        "httpImageUnfixable": "この画像は、HTTPS をサポートしていません。ストーリーからこれを削除するか、リンクに置き換えてください。",
        "httpImageUncheckable": "この画像には安全でない (HTTP) URL があります。下のボタンをクリックして、この画像に HTTPS URL を使用してみてください。 動作しない場合は、ストーリーから画像を削除するか、ハイパーリンクに置き換えてください。",
        "httpImageFixable": "この画像には安全でない (HTTP) URL があります。下のボタンをクリックして、この画像に安全な HTTPS URL を使用してください。",
        "httpLayer": "このレイヤーには安全でない (HTTP) URL があります。",
        "inaccessibleLogo": "このロゴにはアクセスできません。別の画像に置き換えてください。",
        "httpLogoUnfixable": "このロゴは HTTPS をサポートしていません。別の画像に置き換えてください。",
        "httpLogoFixable": "このロゴには安全でない (HTTP) URL があります。ロゴに HTTPS URL を使用してください。",
        "httpLogoUncheckable": "このロゴには安全でない (HTTP) URL があります。ロゴに HTTPS URL を使用するか、別の画像に置き換えてください。"
      },
      "tooltips": {
        "httpAudioFixable": "ボタンをクリックして、このオーディオに安全な HTTPS URL を使用してください。",
        "httpAudioUncheckable": "このオーディオに HTTPS URL を使用してみてください。 動作しない場合は、ストーリーからオーディオを削除するか、リンクに置き換えてください。",
        "httpWebpageFixable": "ボタンをクリックして、この Web ページに安全な HTTPS URL を使用してください。",
        "httpWebpageUncheckable": "この Web ページに HTTPS URL を使用してみてください。 動作しない場合は、ストーリーから Web ページを削除するか、スクリーンショットまたはリンクに置き換えてください。",
        "httpVideoFixable": "ボタンをクリックして、このビデオに安全な HTTPS URL を使用してください。",
        "httpVideoUncheckable": "このビデオに HTTPS URL を使用してみてください。 動作しない場合は、ストーリーからビデオを削除するか、スクリーンショットまたはリンクに置き換えてください。",
        "httpImageFixable": "ボタンをクリックして、この画像に安全な HTTPS URL を使用してください。",
        "httpImageUncheckable": "この画像に HTTPS URL を使用してみてください。 動作しない場合は、ストーリーから画像を削除するか、リンクに置き換えてください。",
        "httpLayerMyMap": "マップのアイテム ページにアクセスして、HTTPS を使用するようこのレイヤーを更新してください。レイヤーを更新できない場合は、マップから削除します。",
        "httpLayerNotMyMap": "マップのコピーを作成して、HTTPS を使用するようこのレイヤーを更新してください。レイヤーを更新できない場合は、マップから削除します。",
        "clickLearnMore": "クリックして詳細を確認してください。"
      },
      "fixButtons": {
        "agolItemPage": "アイテム ページ",
        "openTheMap": "マップを開く",
        "updateAudio": "オーディオの URL の解決",
        "updateWebpages": "Web ページの URL の解決",
        "updateVideos": "ビデオの URL の解決",
        "updateImages": "画像の URL の解決"
      },
      "mapIssues": {
        "fixButton": "問題の解決",
        "nofixButton": "問題",
        "mapLabel": "マップ:",
        "summaries": {
          "unshared": "共有されていないコンテンツ",
          "othersUnshared": "他のユーザーの共有されていないコンテンツ",
          "subscriptionContent": "登録者のコンテンツ",
          "premiumContent": "プレミアム コンテンツ",
          "secureContent": "保護されたコンテンツ",
          "deleted": "削除されたコンテンツ",
          "inaccessible": "アクセスできないコンテンツ",
          "unauthorized": "許可されていないコンテンツ"
        },
        "descriptions": {
          "unshared": "このコンテンツはストーリーと同じように共有されていません。",
          "othersUnshared": "このコンテンツは他のユーザーが所有し、ストーリーと同じように共有されていません。",
          "othersUnsharedAuthorized": "このコンテンツは他のユーザーが所有していますが、これを共有する権限があります。",
          "inaccessible": "このコンテンツにアクセスできません。",
          "deleted": "このコンテンツは削除されました。",
          "unauthorized": "このコンテンツを表示する権限がありません。",
          "popupFeatureLayer": "タイル レイヤーのポップアップは、ストーリーと同じように共有されていないフィーチャ レイヤーから取得されています。",
          "subscriptionContent": "一般ユーザーが使用できるように、登録者のコンテンツを認証する必要があります。",
          "premiumContent": "一般ユーザーが使用できるように、プレミアム コンテンツを認証する必要があります。",
          "secureService": "ユーザーは保護されたコンテンツにアクセスできません。",
          "missingItemWarning": "このレイヤーと関連付けられているアイテムが削除されました。"
        },
        "tooltips": {
          "unshared": "クリックすると、共有の詳細が表示されます。",
          "othersUnshared": "他のユーザーが所有するコンテンツを共有する権限がありません。所有者に共有してもらうか、ストーリーからマップを削除するか、マップを編集して所有していないレイヤーを削除してください。クリックすると、マップの編集の詳細が表示されます。",
          "inaccessible": "ストーリーからこのマップを削除するか、マップを編集してアクセスできないレイヤーを削除してください。クリックすると、マップの編集の詳細が表示されます。",
          "deleted": "ストーリーからこのマップを削除するか、マップを編集して見つからないレイヤーを削除してください。クリックすると、マップの編集の詳細が表示されます。",
          "unauthorized": "ストーリーからこのマップを削除するか、マップを編集して許可されていないレイヤーを削除してください。クリックすると、マップの編集の詳細が表示されます。",
          "popupFeatureLayer": "タイル レイヤーのポップアップは、ストーリーと同じように共有されていないフィーチャ レイヤーから取得されています。",
          "subscriptionContent": "登録者のコンテンツは、クレジットを消費しません。クリックすると、詳細が表示されます。",
          "premiumContent": "ユーザーがストーリー内のプレミアム レイヤーを表示するたびに、組織のクレジットが消費されます。クリックすると、詳細が表示されます。",
          "secureService": "ストーリーから保護されたコンテンツを削除してください。または、クリックすると、他のユーザーが使用できるように保護されたコンテンツを認証する方法の詳細が表示されます。",
          "missingItemWarning": "このレイヤーは動作しますが、そのシンボル、ポップアップ、または名前が変更されている場合があります。レイヤーが期待どおりの外観であることを確認するか、ストーリーからレイヤーを削除してください。"
        },
        "fixButtons": {
          "share": "共有",
          "hide": "非表示",
          "authorize": "認証",
          "remove": "削除",
          "help": "ヘルプの表示",
          "ignore": "無視",
          "confirm": "確認",
          "edit": "マップの編集"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "一部のマップとレイヤーも共有されました。",
          "alsoSharedMaps": "一部のマップも共有されました。",
          "alsoSharedLayers": "一部のレイヤーも共有されました。",
          "sharedOthersContent": "管理権限を使用して、他のユーザーのコンテンツを共有しました。"
        }
      },
      "storyHealth": {
        "healthy": "問題はありません",
        "notHealthy": "問題の解決",
        "warnings": "警告の表示"
      }
    },
    "saveErrorSocial": {
      "title": "ソーシャル メディアでの共有",
      "panel1": "ArcGIS Web アプリケーション アイテムのタイトルがストーリーのタイトルと同じでないため、ソーシャル メディアでストーリーが正しく表示されない可能性があります。",
      "panel1tooltip": "タイトル、サマリー、およびサムネイル画像を定義すると、ストーリーは次のように表示されます。",
      "panel2": "ソーシャル メディアで使用するタイトル:",
      "panel2q1": "ストーリーのタイトル (推奨)",
      "panel2q1tooltip": "このオプションを選択すると、アイテムのタイトルは、ストーリーのタイトルと一致するように変更され、ビルダーでの追加の変更が同期するようになります。",
      "panel2q2": "アイテムのタイトル",
      "panel3": "ソーシャル メディアでのストーリーの外観をさらに改善するには、${MYSTORIES} を使用してサマリーとサムネイル画像を追加します。",
      "panel4": "今後、ストーリーについて警告しない",
      "save": "保存",
      "mystories": "マイ ストーリー"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Web Security とストーリー マップに関する重要なメッセージ",
      "s1h1": "Esri はストーリー マップのセキュリティ向上に努めています",
      "s1p1": "ストーリー マップは Web 上に存在しており、Web コミュニティが、より良いセキュリティを確立して実装しようと、常に努力しています。 インターネットを経由して送信されるコンテンツにセキュリティで保護された接続を提供する HTTPS は、Web コンテンツにアクセスすることが期待される方法として現れました。 最新のブラウザーは現在、HTTPS の代わりに HTTP が使用された場合、警告メッセージを表示します。 これが標準となったことから、ストーリー マップを作成および共有する場合には HTTPS リンクを使用すること、Web コンテンツを埋め込む場合またはストーリー マップ内の画像にリンクする場合には HTTPS URL のみを使用することが強く推奨されます。",
      "s1p2": "事実上、ストーリー マップおよびそのすべてのコンテンツ (画像、レイヤー、埋め込まれたアプリおよび Web サイトを含む) には、HTTP ではなく HTTPS で始まるリンクを使用してアクセスする必要があるということです。 これによって、ストーリーが安全であることをほとんどの Web ブラウザーが示すようになるため、ユーザーに最高の体験を提供します。",
      "s2h1": "必要な操作",
      "s2p1": "Esri は、ストーリー マップの作成者およびユーザーの HTTPS への移行を簡単にするように努めています。 ストーリー内の安全でないコンテンツ (HTTP) を検出するのに役立ち、それに対処する方法に関する推奨を提供するツールが、ストーリー マップ ビルダーおよびマイ ストーリーで使用できるようになりました。 安全でないコンテンツがあるかどうかストーリーをチェックし、できるだけ速やかに HTTPS に更新してください。",
      "action1": "クローズ",
      "action2": "ストーリーを今すぐ確認する",
      "action3": "詳細",
      "floatingNotification": "このストーリーには安全でない (HTTP) コンテンツがあります。確認の上、問題を解決してください。"
    }
  }
});