/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "コンテンツへのリンク",
      "urls_short": "リンク",
      "contentType": {
        "error": "許可されているメディアがありません。",
        "imageOnly": "ストーリーのこの部分には、画像を追加できます。",
        "imageAndVideo": "ストーリーのこの部分には、画像またはビデオを追加できます。",
        "imageVideoWebpage": "ストーリーのこの部分には、画像、ビデオ、または Web ページを追加できます。"
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
          "searchAndBrowse": "${Flickr} の写真を検索および参照"
        },
        "unsplash": {
          "searchAndBrowse": "${Unsplash} の写真を検索",
          "photoBy": "${username} による写真",
          "userLink": "${username} の ${Unsplash} ページへ移動"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Web 上のコンテンツへのリンク",
            "imageOnly": "Web 上の画像へのリンク",
            "imageAndVideo": "Web 上の画像またはビデオへのリンク"
          },
          "linkText": {
            "imageOnly": "上のボックスで写真に直接リンクできます。",
            "imageAndVideo1": "上のボックスで、${YouTube} および ${Vimeo} からビデオのリンクまたは iframe コードを貼り付けることができます。",
            "imageAndVideo2": "また、写真に直接リンクすることもできます。",
            "imageVideoWebpage1": "上のボックスで、${YouTube} および ${Vimeo} からビデオのリンクまたは iframe コードを貼り付けることができます。",
            "imageVideoWebpage2": "また、写真、Web ページ、または Web アプリケーションに直接リンクすることもできます。",
            "ender": "可能な場合、セキュリティで保護された (https) リンクを使用します。"
          },
          "embedProtocol": {
            "embedProtocolLabel": "セキュリティで保護された接続 (https) を介してページを読み込みます",
            "embedProtocolWarning1": "このページがストーリーに読み込まれない場合、Web セキュリティ上の理由からこのページを埋め込むことはできません。",
            "embedProtocolWarning2": "このページがストーリーに読み込まれない場合、このオプションをオフにしてもう一度試行してください。それでもまだページが読み込まれない場合は、Web セキュリティ上の理由からこのページを埋め込むことはできません。",
            "embedProtocolWarning3": "代替操作として、注釈のリンクを追加して、新しいブラウザー タブでそのページを開きます。${linkText}",
            "linkText": "詳細"
          },
          "placeholder": "${https://}... または ${http://}... または ${<iframe>}",
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
        "googlePhotos": {
          "placeholder": "電子メールまたは ${Picasa}/${Google+} ID",
          "helpText": "${Picasa} または ${Google+} にアップロードされた写真は、ストーリーに追加できます。${Google} アカウントに格納された画像のストーリーでの使用に関する ${helpLinkText}。",
          "helpLinkText": "詳細",
          "cannotFindUser": "${username} が見つかりません。もう一度やり直してください。"
        },
        "unsplash": {
          "placeholder": "写真の検索",
          "aboutText": "${Unsplash} は、無料の高品質な写真コレクションです。",
          "copyrightText": "${Unsplash} 上に公開されているすべての写真は、${CC0} ライセンスに基づいてライセンスが付与されています。詳細については、${moreInfoLink} をご参照ください。",
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
            "portal": "ポータル",
            "myOrg": "${orgname} の組織サイト",
            "myContent": "マイ コンテンツ"
          },
          "createContent": {
            "or": "または",
            "dragAndDrop": "画像をここにドロップ",
            "uploadImage": "画像の参照",
            "agolInfo": "画像は、ArcGIS アカウントで格納され、ストーリー内でのみアクセスできます。",
            "saveBeforeUpload": "このストーリーを保存すると、ここで画像を ArcGIS にアップロードできます。",
            "fileTypesImage": "サポートされているファイル タイプ: .png、.jpeg、.jpg、.gif、.bmp"
          },
          "filterAndSort": {
            "webmap": "Web マップ",
            "webscene": "Web シーン",
            "image": "画像",
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
  }
});