/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Ссылка на ресурсы",
      "urls_short": "Связь",
      "contentType": {
        "error": "Отсутствуют авторизованные медиа-ресурсы",
        "imageOnly": "В этой части истории вы можете добавить изображение.",
        "imageAndVideo": "В этой части истории вы можете добавить изображение или видео.",
        "imageVideoWebpage": "В этой части истории вы можете добавить изображение, видео или веб-страницу."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Поиск \"${searchterm}\"...",
        "searchedFor": "Результаты поиска \"${searchterm}\"",
        "albumsOf": "Альбомы ${username}'s",
        "noPhotosFound": "Не найдено фото, удовлетворяющих условиям поиска. Попробуйте еще раз.",
        "noItemsFound": "Не найдено элементов, удовлетворяющих условиям поиска. Попробуйте еще раз.",
        "noItemsInThisStory": "К истории пока не добавлено никаких ресурсов ArcGIS.",
        "limitReached": "Показано 100 элементов. Если вы не нашли то, что нужно - попробуйте поиск по ключевым словам.",
        "galleryItems": {
          "uploadError": "Не удалось загрузить этот элемент."
        },
        "agol": {
          "remove1": "Удалите это неиспользуемое изображение из вашей учетной записи ArcGIS.",
          "remove2": "(Вы можете потом загрузить его еще раз, если решите использовать позднее.)",
          "removeFailed": "Удалите это недоступное изображение из этого списка.",
          "modified": "Изменено ${date}",
          "uploaded": "Загружено ${date}",
          "contentByAuthor": "${contentType} создан ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Поиск фото на ${Picasa} или ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Поиск и переход к фото на ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Поиск фото на ${Unsplash}",
          "photoBy": "Фото создано ${username}",
          "userLink": "Перейти на страницу ${username}'s ${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Ссылка на ресурсы в Интернет",
            "imageOnly": "Ссылка на изображение в Интернет",
            "imageAndVideo": "Ссылка на изображение или видео в Интернет"
          },
          "linkText": {
            "imageOnly": "В окне выше вы можете использовать прямую ссылку на фото.",
            "imageAndVideo1": "В окне выше вы можете вставить ссылки или код iframe для видео с ${YouTube} и ${Vimeo}.",
            "imageAndVideo2": "Вы можете также вставить прямую ссылку на фото.",
            "imageVideoWebpage1": "В окне выше вы можете вставить ссылки или код iframe для видео с ${YouTube} и ${Vimeo}.",
            "imageVideoWebpage2": "Вы можете также вставить прямую ссылку на фото, веб-страницу или веб-приложения.",
            "ender": "По возможности используйте защищенные (https) ссылки."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Загрузить страницу через безопасное подключение (https)",
            "embedProtocolWarning1": "Если эта страница не загружается в вашу историю, ее нельзя встроить по соображениям веб-безопасности.",
            "embedProtocolWarning2": "Если данная страница не загружена в вашу историю, снимите отметку с этой опции и попробуйте еще раз. Если страница всё еще не загружена, ее нельзя встроить по соображениям веб-безопасности.",
            "embedProtocolWarning3": "В качестве альтернативы добавьте ссылку в ваше описание, чтобы открыть страницу в новой вкладке браузера. ${linkText}",
            "linkText": "Более подробно."
          },
          "placeholder": "${https://}... или ${http://}... или ${<iframe>}",
          "uploadErrors": {
            "generic": "Возникли проблемы с введенным адресом. Попробуйте ещё раз.",
            "imageOnly1": "В этой части истории необходимо использовать изображение.",
            "imageOnly2": "Введите ссылку на изображение (.jpg, .png, .gif), или выберите изображение из ${ArcGIS}, ${Flickr}, ${Google+} или ${Unsplash}.",
            "imageAndVideo1": "В этой части истории необходимо использовать изображение или видео.",
            "imageAndVideo2": "Введите ссылку на изображение (.jpg, .png, .gif) или на видео на ${YouTube}/${Vimeo}, или выберите изображение из ${ArcGIS}, ${Flickr}, ${Google+} или ${Unsplash}.",
            "badFormat": "Ссылка на файл, которую вы пытаетесь добавить, некорректна.",
            "inaccessible": "Файл, которое вы пытаетесь добавить, отсутствует или недоступен.",
            "tryAgain": "Проверьте адрес и повторите попытку.",
            "mediaTypes": {
              "VIDEO": "видео",
              "IMAGE": "изображение",
              "generic": "медиа"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "Email или ${Picasa}/${Google+} ID",
          "helpText": "Вы можете добавить фото, загруженное на ${Picasa} или ${Google+}, к вашей истории. См. 0${helpLinkText} об использовании изображений вашей учетной записи ${Google} в историях.",
          "helpLinkText": "Более подробно",
          "cannotFindUser": "не удалось найти пользователя ${username}. Попробуйте еще раз."
        },
        "unsplash": {
          "placeholder": "Поиск фото",
          "aboutText": "${Unsplash} представляет коллекции бесплатных фотографий высокого качества.",
          "copyrightText": "Все фото, опубликованные на ${Unsplash} лицензированы с помощью ${CC0} License. Для дополнительной информации см. ${moreInfoLink}.",
          "moreInfoLink": "здесь"
        },
        "flickr": {
          "searchType": {
            "account": "Учетная запись ${Flickr}",
            "text": "Все ${Flickr}"
          },
          "placeholders": {
            "user": "Поиск учетной записи",
            "userText": "Поиск этой учетной записи для фотографий",
            "text": "Поиск фото"
          },
          "errors": {
            "cannotFindUser": "Не удалось найти пользователя ${username}.",
            "noUserPhotos": "У пользователя ${username} нет ни одной фотографии для общего доступа.",
            "didYouMean": "Вы имели в виду ${username}?",
            "generalUserError": "При поиске пользователя ${username} произошла ошибка."
          },
          "licenses": {
            "licenseLabel": "Лицензия: ",
            "public": "Общественный доступ",
            "commercial": "ОК для коммерческого использования",
            "nonCommercial": "ОК для некоммерческого использования",
            "reserved": "Все права защищены",
            "any": "Любая лицензия"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Эта история",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Портал",
            "myOrg": "Организация ${orgname}",
            "myContent": "Мои ресурсы"
          },
          "createContent": {
            "or": "ИЛИ",
            "dragAndDrop": "Перетащить изображение сюда",
            "uploadImage": "Поиск изображений",
            "agolInfo": "Изображения будут сохранены в вашей учетной записи ArcGIS и будут доступны только в этой истории.",
            "saveBeforeUpload": "После сохранения истории вы можете загрузить изображения в ArcGIS здесь.",
            "fileTypesImage": "Поддерживаются типы файлов: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Веб-карта",
            "webscene": "веб-сцена",
            "image": "Изображение",
            "date": "Дата",
            "sortByDate": "Сортировать по дате",
            "title": "Заголовок",
            "sortByTitle": "Сортировать по названию",
            "views": "Виды",
            "search": "Поиск по ключевым словам или ID"
          }
        }
      }
    }
  }
});