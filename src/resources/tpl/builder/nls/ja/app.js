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
    "builderPanel": {
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
        "remove": "削除"
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
        "alternativeMedia": "代替メディア",
        "explanation": "一部のメディアは、モバイル デバイスでサポートされていないか、うまく動作しない可能性があります。 このパネルを使用して、ストーリーを電話またはタブレットで表示するときに、このメディアの場所に表示されるモバイルに適した代替アイテムを選択します。",
        "changeAltImage": "イメージの変更",
        "uploadAltImage": "画像の追加"
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
      "imageUpload": "画像のアップロードが進行中です",
      "imageUploadSuccess": "画像が正常にアップロードされました",
      "imageUploadFail": "画像のアップロードに失敗しました"
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
        "noAltImage": "メディアがモバイル デバイスでサポートされていません",
        "altImageBroken": "このメディア アイテムに定義されている代替画像にアクセスできません"
      },
      "contentWarnings": {
        "noAltImage": "このメディアのタイプは、モバイル デバイスでサポートされていません。 ストーリーをモバイル デバイスで表示するときに表示される代替画像を指定します。",
        "noAltImageAlt": "このメディアのタイプは、モバイル デバイスでサポートされていません。 モバイル タブで、ストーリーをモバイル デバイスで表示するときに表示される代替画像を指定します。"
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
    }
  }
});