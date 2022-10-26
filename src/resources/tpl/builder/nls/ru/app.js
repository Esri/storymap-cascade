﻿/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Применить",
      "close": "Закрыть"
    },
    "header": {
      "sharingNotAvailable": "Недоступно, пока история не будет опубликована",
      "edit": "Редактировать"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Закладки",
        "logoSharing": "Логотип и общий доступ",
        "theme": "Оформление"
      },
      "bookmarks": {
        "title": "Раздел",
        "bookmark": "Закладка",
        "intro": "Закладки являются ссылками на разделы истории, которые отображаются в заголовке. Создание нескольких закладок для основных разделов истории поможет читателям ориентироваться.",
        "sequentialDefault": "Описательный раздел (текст не найден)",
        "immersiveDefault": "Разнонаправленный раздел (текст не найден)",
        "titleDefault": "Раздел заголовка (текст не найден)",
        "coverDefault": "Раздел обложки (текст не найден)",
        "coverAppendage": "(Обложка)"
      },
      "logoSharing": {
        "logo": "Логотип",
        "logoButton": "Использовать логотип ${ESRI}",
        "useOrgLogo": "Использовать логотип организации",
        "useOrgLogoHelp": "Использовать логотип, предоставленный администратором",
        "logoLink": "Ссылка на логотип",
        "logoUploadProgress": "Загрузка логотипа выполняется",
        "logoUploadSuccess": "Логотип успешно загружен",
        "logoUploadError": "Загрузка логотипа не удалась, возврат к логотипу ${ESRI}",
        "customHeaderText": "Строка тегов",
        "taglineLinkDisabledTooltip": "Введите строку тегов, чтобы включить ссылку",
        "link": "Ссылка на строку тегов",
        "enableSocialSharing": "Отобразить кнопку публикации"
      },
      "appearance": {
        "themeLabel": "Тема",
        "fontLabel": "Шрифты",
        "previewLabel": "Просмотр",
        "fontsTitleLabel": "Заголовки",
        "fontsBodyLabel": "Основа",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "Частная",
      "btnOrg": "Организация",
      "btnPublic": "Публичная",
      "btnEveryone": "Для всех"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "Builder",
      "buttonSaving": "Сохранение",
      "buttonSaved": "Сохранено",
      "buttonError": "Сохранение не выполнено",
      "buttonShare": "Общий доступ",
      "buttonSettings": "Настройки",
      "settingsLogoError": "Проблема с вашим логотипом. Щелкните, чтобы узнать подробности.",
      "buttonHelp": "Просмотрите справку или отправьте отзыв через GeoNet",
      "buttonPreview": "Просмотр истории",
      "buttonHealth": "Отчет о состоянии",
      "manageStories": "Управление моими историями",
      "closeWithPendingChange": "Вы действительно хотите подтвердить это действие? Все изменения будут потеряны.",
      "coverLabel": "Обложка",
      "creditsLabel": "Авторы",
      "betaFeedback": "Обратная связь",
      "betaNote": "Пожалуйста, сообщите нам, что вы думаете о ${APP_NAME}, а также если что-то работает не так, как ожидается.",
      "notSharedNote": "История не опубликована, она доступна только для вас.",
      "organizationWarning": "Чтобы гарантировать, что эта история может просматриваться другими пользователями, необходимо также опубликовать в организации ее сцены, слои сцен и встроенные приложения. Карты и слои карт публикуются автоматически.",
      "publicWarning": "Чтобы гарантировать, что эта история может просматриваться другими пользователями, необходимо также опубликовать ее сцены, слои сцен и встроенные приложения с доступом Для всех. Карты и слои карт публикуются автоматически.",
      "addTitleNote": "Добавьте заголовок на обложку для сохранения",
      "saveError": "При сохранении истории произошла ошибка.",
      "duplicate": "Дублировать",
      "organize": "Организовать",
      "done": "Готово",
      "invite": "При создании истории разделы будут отображаться здесь...",
      "mystoriestooltip": "Конструктор Cascade предупреждает об ошибках в истории и помогает исправить их. Сцены и вложенные приложения не проверяются, их следует проверить вручную."
    },
    "immersiveViewPanel": {
      "transition": "Переход",
      "chooseTransition": "Эффект перехода",
      "fade": "Проявление",
      "fadeSlow": "Медленное затемнение",
      "swipeVertical": "Шторка по вертикали",
      "swipeHorizontal": "Шторка по горизонтали",
      "none": "Нет",
      "disabledConsecutiveSameMedia": "Недоступно, когда последовательные виды используют одни и те же медиа-ресурсы",
      "disabledTooltipMap": "Чтобы использовать этот переход, отображаемые слои обоих видов должны отличаться, а другие свойства карты быть одинаковыми",
      "disabledConsecutiveSameMap": "Недоступно, когда последовательные виды используют одну и ту же карту",
      "disabledNotInBeta": "Недоступно, когда последовательные виды используют одну и ту же карту",
      "disabledNonConsecutive": "Недоступно, поскольку имеются эти же медиа-ресурсы вне последовательности",
      "addMedia": "Добавить медиа-ресурсы",
      "invite": "При создании разнонаправленного раздела виды будут отображаться здесь..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Оформление",
        "manage": "Организовать",
        "size": "Размер",
        "background": "Фон",
        "mobile": "Мобильное",
        "issues": "Ошибки",
        "fixIssues": "Исправить ошибки"
      },
      "manage": {
        "changeMedia": "Изменить медиа",
        "edit": "Редактировать",
        "editAside": "Открывается в новой закладке браузера. После сохранения изменений, сохраните и перезагрузите историю, чтобы увидеть изменения.",
        "remove": "Убрать",
        "altTextPlaceholder": "Добавить описание медиа для слабовидящих пользователей...",
        "altTextHelptip": "Альтернативный текст – это описание визуальных медиа, используемых вспомогательными технологиями, такими как программное обеспечение для чтения с экрана. Является дополнительным, но рекомендуется в соответствии с инструкциями по веб-доступу, такими как WCAG и Section 508."
      },
      "appearance": {
        "homeView": "Начальный вид",
        "audio": "Аудио",
        "on": "Вкл.",
        "muted": "Звук отключен",
        "volumeAside": "Когда читатель доходит до этого вида, воспроизведение видео начинается автоматически. Если звук отключен, читатель не сможет включить его.",
        "view": "Вид",
        "resetLocation": "Сбросить местоположение",
        "resetLayers": "Сбросить слои",
        "clearPopup": "Очистить всплывающее окно",
        "interaction": "Взаимодействие",
        "interactionDisabled": "Взаимодействие отключено",
        "buttonToEnable": "Кнопка для включения",
        "interactionEnabled": "Взаимодействие включено",
        "interactionAside": "*На устройствах с сенсорных экранах будет отображаться кнопка взаимодействия.",
        "slide": "Слайд",
        "noSlides": "Нет доступных слайдов.",
        "mapExtentPrompt": "Обновите карту, чтобы рассказать свою историю, щелкните отметку, чтобы сохранить изменения"
      },
      "sectionAppearance": {
        "layout": "Компоновка",
        "theme": "Тема"
      },
      "size": {
        "small": "Малый",
        "medium": "Средний",
        "large": "Большой",
        "noCrop": "Не обрезать вытянутое изображение",
        "noCropTallTooltip": "Необрезанное вытянутое изображение усложнит задачу читателю, так как придется прокручивать по всей длине изображения."
      },
      "background": {
        "noCrop": "Не обрезать",
        "mostImportantPart": "Выберите наиболее важную точку",
        "cropExplanationImmersive": "Выберите точку на изображении, чтобы задать обрезку изображения при различных размерах экрана. Выбранная точка всегда будет видна. Отметьте опцию Не обрезать, если вы хотите, чтобы медиа-ресурс всегда отображался полностью.",
        "cropExplanation": "Выберите точку на изображении, чтобы задать обрезку изображения при различных размерах экрана. Выбранная точка всегда будет видна.",
        "color": "Цвет",
        "previews": "Просмотр"
      },
      "altMedia": {
        "alternativeMedia": "Альтернативное изображение для мобильного устройства",
        "explanation": "Некоторые медиа не поддерживаются или работают некорректно на мобильных устройствах. На этой панели можно указать изображение, которое будет показано  вместо этого медиа при просмотре на телефоне или планшете.",
        "changeAltImage": "Изменить изображение",
        "uploadAltImage": "Добавить альтернативное изображение"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "Ссылка на ресурсы",
        "urls_short": "Ссылка",
        "contentType": {
          "error": "Отсутствуют авторизованные медиа-ресурсы",
          "imageOnly": "В этой части истории вы можете добавить изображение.",
          "imageAndVideo": "В этой части истории вы можете добавить изображение или видео.",
          "imageVideoWebpage": "В этой части истории вы можете добавить аудио, изображение, видео или веб-страницу."
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "Поиск \"${searchterm}\"...",
          "searchedFor": "Результаты поиска \"${searchterm}\"",
          "albumsOf": "Альбомы ${username}'s",
          "noPhotosFound": "Не найдено фото, удовлетворяющее условиям поиска. Попробуйте еще раз.",
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
            "photostream": "Фотопоток",
            "searchAndBrowse": "Поиск и переход к фото на ${Flickr}",
            "captionStarter": "Фото по ${USERNAME} на ${Flickr}"
          },
          "unsplash": {
            "searchAndBrowse": "Поиск фото на ${Unsplash}",
            "photoBy": "Фото создано ${username}",
            "userLink": "Перейти на страницу ${username}'s ${Unsplash}",
            "captionStarter": "Фото по ${USERNAME} на ${Unsplash}"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "Ссылка на ресурсы в Интернет",
              "imageOnly": "Ссылка на изображение в Интернет",
              "imageAndVideo": "Ссылка на изображение или видео в Интернет"
            },
            "linkText": {
              "imageOnly": "В окне выше вы можете использовать прямую ссылку на фото.",
              "imageAndVideo1": "В окне выше вы можете вставить ссылку или код iframe для видео на ${YouTube} или ${Vimeo}.",
              "imageAndVideo2": "Вы можете также использовать прямую ссылку на фото.",
              "imageVideoWebpage1": "В окне выше вы можете вставить ссылку или код iframe для веб-ресурса, такого как динамическая диаграмма или видео на ${YouTube} или ${Vimeo}.",
              "imageVideoWebpage2": "Вы можете также использовать прямую ссылку на фото, видео, аудио файл, веб-страницу или веб-приложение.",
              "ender": "Всегда используйте защищенные каналы (https). Если ваш ресурс не поддерживает https, добавьте ссылку на него в тексте истории, чтобы читатели могли просмотреть его в новой вкладке браузера.",
              "httpsError": "Ссылка должна начинаться с HTTPS"
            },
            "embedProtocol": {
              "embedProtocolLabel": "Загрузить страницу через безопасное подключение (https)",
              "embedProtocolWarning1": "Если эта страница не загружается в вашу историю, ее нельзя встроить по соображениям веб-безопасности.",
              "embedProtocolWarning2": "Если данная страница не загружена в вашу историю, снимите отметку с этой опции и попробуйте еще раз. Если страница всё еще не загружена, ее нельзя встроить по соображениям веб-безопасности.",
              "embedProtocolWarning3": "В качестве альтернативы добавьте ссылку в ваше описание, чтобы открыть страницу в новой вкладке браузера. ${linkText}",
              "linkText": "Более подробно."
            },
            "placeholder": "${https://} или ${<iframe>}",
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
          "thirdPartyTerms": "При использовании сервиса стороннего производителя, вы должны принять условия предоставления услуг сервиса: ",
          "googlePhotos": {
            "placeholder": "Email или ${Picasa}/${Google+} ID",
            "helpText": "Вы можете добавить фото, загруженное на ${Picasa} или ${Google+}, к вашей истории. См. 0${helpLinkText} об использовании изображений вашей учетной записи ${Google} в историях.",
            "helpLinkText": "Более подробно",
            "cannotFindUser": "не удалось найти пользователя ${username}. Попробуйте еще раз."
          },
          "unsplash": {
            "placeholder": "Поиск фото",
            "aboutText": "${Unsplash} представляет коллекции бесплатных фотографий высокого качества.",
            "copyrightText": "Все фото лицензированы по лицензии ${Unsplash}. Более подробно ${moreInfoLink}.",
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
              "portal": "Portal",
              "myOrg": "Организация ${orgname}",
              "myContent": "Мои ресурсы"
            },
            "createContent": {
              "createNewMap": "Создание новой карты",
              "or": "ИЛИ",
              "dragAndDropImage": "Перетащить изображения",
              "dragAndDropImageAudio": "Перетащить изображения или аудио",
              "uploadButton": "Просмотр",
              "agolInfo": "Загруженные изображения и аудио будут доступны только в пределах истории.",
              "saveBeforeUpload": "После сохранения истории вы можете загрузить изображения и аудио в ArcGIS здесь.",
              "fileExtsImage": "Поддерживаются типы: png, jpg, gif, bmp.",
              "fileExtsImageAudio": "Поддерживаются типы: png, jpg, gif, bmp, mp3.",
              "maxSize": "Максимальный размер одного файла 10 Мб."
            },
            "filterAndSort": {
              "webmap": "Веб-карта",
              "webscene": "Веб-сцена",
              "image": "Image",
              "audio": "Аудио",
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
    },
    "mapEditor": {
      "dialogTitle": "Редактировать карту",
      "unauthorizedDomain": "Вы находитесь не в авторизованном домене для использования редактора карты",
      "loading": "Подождите, пока загружается редактор карт",
      "saving": "Сохранить карту",
      "success": "Карта сохранена",
      "cancelTitle": "Отменить все не сохраненные изменения?",
      "errorSave": "Не удалось сохранить карту. Повторите попытку.",
      "loadFail": "Извините, не удается загрузить редактор карт",
      "close": "Закрыть",
      "save": "Сохранить",
      "confirm": "Да, закрыть карту",
      "deny": "Нет, продолжить работу"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "Продолжите вашу историю здесь..."
      },
      "blockAdd": {
        "text": "Текст",
        "media": "Медиа",
        "title": "Заголовок",
        "immersive": "Разнонаправленный"
      },
      "link": {
        "invite": "Вставьте или введите ссылку..."
      },
      "color": {
        "choose": "выберите",
        "cancel": "отмена",
        "clear": "Очистить цвет"
      }
    },
    "imageGallery": {
      "addImage": "Добавить другое изображение",
      "moveBackward": "Переместить назад",
      "moveForward": "Переместить вперед"
    },
    "cover": {
      "titlePrompt": "Введите заголовок истории...",
      "subtitlePrompt": "Пролистайте вниз, чтобы начать, или введите дополнительный подзаголовок",
      "mediaPlaceholder": "Добавьте изображение или видео",
      "saveError": "Сохранить не удалось, элемент с таким заголовком уже существует"
    },
    "credits": {
      "sectionInvite": "Добавить раздел об авторах",
      "warning": "Оба поля должны быть заполнены",
      "content": "Содержание...",
      "source": "Источник...",
      "linkPrompt": "Дополнительная ссылка",
      "introductionPlaceholder": "Дополнительно, введите вступление к разделу об авторах..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Тема"
      },
      "panelConfig": {
        "position": "Положение",
        "theme": "Тема",
        "size": "Размер",
        "background": "Фон",
        "layout": "Прокрутка (для всех панелей)"
      }
    },
    "title": {
      "placeholder": "Введите название..."
    },
    "media": {
      "mediaUpload": "Загрузка медиа выполняется...",
      "mediaUploadSuccess": "Медиа успешно загружены",
      "mediaUploadFail": "Сбой при загрузке медиа"
    },
    "controller": {
      "sectionOrganize": "Вы организовали разделы",
      "immersiveOrganize": "Вы организовали виды",
      "sectionDelete": "Вы удалили раздел",
      "viewDelete": "Вы удалили вид"
    },
    "notification": {
      "cancel": "Отмена",
      "close": "Закрыть",
      "undo": "Отменить"
    },
    "sections": {
      "sequence": "Описательный",
      "immersive": "Разнонаправленный",
      "title": "Заголовок"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "изображение",
        "audio": "аудио",
        "webmap": "карта",
        "webscene": "сцена",
        "video": "видео",
        "content": "содержание",
        "webpage": "веб-страница"
      },
      "placeholders": {
        "generic": "Этот ресурс недоступен.",
        "deleted": "Этот элемент был удален.",
        "inaccessible": "Этот ресурс недоступен.",
        "unauthorized": "Вы не авторизованы для просмотра этого ресурса.",
        "unshared": "Этот элемент не опубликован так же, как ваша история.",
        "othersUnshared": "Этот элемент не опубликован так же, как ваша история.",
        "subscriptionContent": "Эта карта содержит слой подписчика.",
        "premiumContent": "Эта карта содержит премиум-слой.",
        "secureService": "Эта карта содержит защищенный слой."
      },
      "contentIssues": {
        "noAltImage": "Медиа может не работать на мобильном устройстве",
        "noAltImageUnsupported": "Медиа не поддерживается на мобильном устройстве",
        "noAltImageWarning": "Медиа может не работать на мобильном устройстве",
        "altImageBroken": "Альтернативное изображение, указанное для этого медиа-элемента не поддерживается",
        "httpMedia": "Небезопасные носители",
        "httpContent": "Небезопасные ресурсы"
      },
      "contentWarnings": {
        "noAltImage": "Протестируйте вашу историю на мобильном устройстве до ее публикации. Если это медиа не работает, как ожидалось, нажмите на кнопку ниже, чтобы добавить альтернативное изображение, которое будет отображаться при просмотре истории на телефоне или планшете.",
        "noAltImageUnsupported": "Это медиа не будет работать на мобильных устройствах. Нажмите на кнопку ниже, чтобы добавить альтернативное изображение, которое будет отображаться при просмотре истории на телефоне или планшете.",
        "noAltImageWarning": "Протестируйте вашу историю на мобильном устройстве до ее публикации. Если это медиа не работает, как ожидалось, нажмите на кнопку ниже, чтобы добавить альтернативное изображение, которое будет отображаться при просмотре истории на телефоне или планшете.",
        "noAltImageAlt": "Этот тип медиа не поддерживается или не работает некорректно на мобильных устройствах. На вкладке Мобильные укажите альтернативное изображение, которое будет показано при отображении вашей истории на мобильном устройстве."
      },
      "descriptions": {
        "httpAudioUnfixable": "Это аудио не поддерживает HTTPS. Удалите его из вашей истории или замените на ссылку.",
        "httpAudioUncheckable": "У этого аудио небезопасный (HTTP) URL. Щелкните кнопку ниже, чтобы попробовать использовать HTTPS URL для этого аудио. Если это не поможет, удалите аудио из своей истории либо замените его гиперссылкой.",
        "httpAudioFixable": "У этого аудио небезопасный (HTTP) URL. Щелкните кнопку ниже для использования защищенного HTTPS URL для этого аудио.",
        "httpWebpageUnfixable": "Эта страница не поддерживает HTTPS. Удалите ее из своей истории либо замените скриншотом или ссылкой.",
        "httpWebpageUncheckable": "У этой страницы небезопасный (HTTP) URL. Щелкните кнопку ниже, чтобы попробовать использовать HTTPS URL для этой веб-страницы. Если это не поможет, удалите веб-страницу из своей истории либо замените скриншотом или гиперссылкой.",
        "httpWebpageFixable": "У этой страницы небезопасный (HTTP) URL. Щелкните кнопку ниже для использования защищенного HTTPS URL для этой веб-страницы.",
        "httpVideoUnfixable": "Это видео не поддерживает HTTPS. Удалите его из вашей истории или замените на скриншот или ссылку.",
        "httpVideoUncheckable": "У этого видео небезопасный (HTTP) URL. Щелкните кнопку ниже, чтобы попробовать использовать HTTPS URL для этого видео. Если это не поможет, удалите видео из своей истории либо замените скриншотом или гиперссылкой.",
        "httpVideoFixable": "У этого видео небезопасный (HTTP) URL. Щелкните кнопку ниже для использования защищенного HTTPS URL для этого видео.",
        "httpImageUnfixable": "Это изображение не поддерживает HTTPS. Удалите его из вашей истории или замените на ссылку.",
        "httpImageUncheckable": "У этого изображения небезопасный (HTTP) URL. Щелкните кнопку ниже, чтобы попробовать использовать HTTPS URL для этого изображения. Если это не поможет, удалите изображение из своей истории либо замените его гиперссылкой.",
        "httpImageFixable": "У этого изображения небезопасный (HTTP) URL. Щелкните кнопку ниже для использования защищенного HTTPS URL для этого изображения.",
        "httpLayer": "У этого слоя небезопасный (HTTP) URL.",
        "inaccessibleLogo": "Этот логотип недоступен. Замените его на другое изображение.",
        "httpLogoUnfixable": "Этот логотип не поддерживает HTTPS. Замените его на другое изображение.",
        "httpLogoFixable": "У этого логотипа небезопасный (HTTP) URL. Используйте для логотипа HTTPS URL.",
        "httpLogoUncheckable": "У этого логотипа небезопасный (HTTP) URL. Используйте для логотипа HTTPS URL либо замените его на другое изображение."
      },
      "tooltips": {
        "httpAudioFixable": "Щелкните кнопку для использования защищенного HTTPS URL для этого аудио.",
        "httpAudioUncheckable": "Попробуйте использовать защищенный протокол HTTPS URL для этого аудио. Если это не поможет, удалите аудио из своей истории либо замените его ссылкой.",
        "httpWebpageFixable": "Щелкните кнопку для использования защищенного HTTPS URL для этой веб-страницы.",
        "httpWebpageUncheckable": "Попробуйте использовать HTTPS URL для этой веб-страницы. Если это не поможет, удалите веб-страницу из своей истории либо замените скриншотом или гиперссылкой.",
        "httpVideoFixable": "Щелкните кнопку для использования защищенного HTTPS URL для этого видео.",
        "httpVideoUncheckable": "Попробуйте использовать протокол HTTPS URL для этого видео. Если это не поможет, удалите видео из своей истории либо замените скриншотом или ссылкой.",
        "httpImageFixable": "Щелкните кнопку для использования защищенного HTTPS URL для этого изображения.",
        "httpImageUncheckable": "Попробуйте использовать протокол HTTPS URL для этого изображения. Если это не поможет, удалите изображение из своей истории либо замените его ссылкой.",
        "httpLayerMyMap": "Посетите страницу элемента карты для настройки использования HTTPS для этого слоя. Если слой обновить нельзя, удалите его из карты.",
        "httpLayerNotMyMap": "Создайте копию карты и обновите этот слой для работы по HTTPS.Если слой обновить нельзя, удалите его из карты.",
        "clickLearnMore": "Щелкните для получения подробной информации."
      },
      "fixButtons": {
        "agolItemPage": "Страница элемента",
        "openTheMap": "Открыть карту",
        "updateAudio": "Фиксированный URL для аудио",
        "updateWebpages": "Фиксированный URL для веб-страницы",
        "updateVideos": "Фиксированный URL для видео",
        "updateImages": "Фиксированный URL для изображения"
      },
      "mapIssues": {
        "fixButton": "Исправить ошибки",
        "nofixButton": "Ошибки",
        "mapLabel": "Карта:",
        "summaries": {
          "unshared": "Неопубликованные ресурсы",
          "othersUnshared": "Неопубликованные ресурсы другого пользователя",
          "subscriptionContent": "Ресурсы подписчика",
          "premiumContent": "Премиум-ресурсы",
          "secureContent": "Защищенный ресурс",
          "deleted": "Удаленный ресурс",
          "inaccessible": "Недоступный ресурс",
          "unauthorized": "Неавторизованный ресурс"
        },
        "descriptions": {
          "unshared": "Этот ресурс не опубликован так же, как ваша история.",
          "othersUnshared": "Этот ресурс принадлежит другому пользователю и не опубликован так же, как ваша история.",
          "othersUnsharedAuthorized": "Этот ресурс принадлежит другому пользователю, но вы можете опубликовать его.",
          "inaccessible": "Этот ресурс недоступен.",
          "deleted": "Этот ресурс был удален.",
          "unauthorized": "Вы не авторизованы для просмотра этого ресурса.",
          "popupFeatureLayer": "Всплывающие окна слоя листов поступают из векторного слоя, который не опубликован так же, как ваша история.",
          "subscriptionContent": "Необходимо авторизовать ресурсы подписчика для публичного пользования.",
          "premiumContent": "Необходимо авторизовать премиум-ресурсы для публичного пользования.",
          "secureService": "Защищенные ресурсы недоступны для ваших читателей.",
          "missingItemWarning": "Элемент, связанный с эти слоем, был удален."
        },
        "tooltips": {
          "unshared": "Щелкните, чтобы узнать больше о совместном использовании.",
          "othersUnshared": "У вас нет прав на публикацию ресурсов, принадлежащих другим пользователям. Попросите владельца опубликовать ресурс, удалите карту из истории или отредактируйте ее, чтобы удалить не принадлежащие вам слои. Щелкните, чтобы узнать о редактировании карт.",
          "inaccessible": "Удалите эту карту из истории или отредактируйте ее, чтобы убрать недоступные слои. Щелкните, чтобы узнать о редактировании карт.",
          "deleted": "Удалите эту карту из истории или отредактируйте ее, чтобы убрать отсутствующие слои. Щелкните, чтобы узнать о редактировании карт.",
          "unauthorized": "Удалите эту карту из истории или отредактируйте ее, чтобы убрать неавторизованные слои. Щелкните, чтобы узнать о редактировании карт.",
          "popupFeatureLayer": "Всплывающие окна слоя листов поступают из векторного слоя, который не опубликован так же, как ваша история.",
          "subscriptionContent": "Ресурсы подписчика не используют кредиты. Щелкните, чтобы узнать подробнее.",
          "premiumContent": "При каждом просмотре премиум-слоя будут расходоваться кредиты вашей организации. Щелкните, чтобы узнать подробнее.",
          "secureService": "Удалите защищенные ресурсы из вашей истории или щелкните, чтобы узнать, как авторизовать защищенные ресурсы, чтобы их могли видеть другие пользователи.",
          "missingItemWarning": "Этот слой еще работает, но его символы, всплывающие окна или имя могли быть изменены. Убедитесь, что слой отображается правильно или удалите его из истории."
        },
        "fixButtons": {
          "share": "Опубликовать",
          "hide": "Скрыть",
          "authorize": "Авторизация",
          "remove": "Убрать",
          "help": "Получить справку",
          "ignore": "Игнорировать",
          "confirm": "Подтвердить",
          "edit": "Редактировать карту"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Некоторые карты и слои также были опубликованы.",
          "alsoSharedMaps": "Некоторые карты также были опубликованы.",
          "alsoSharedLayers": "Некоторые слои также были опубликованы.",
          "sharedOthersContent": "Вы использовали права администратора для публикации ресурсов других пользователей."
        }
      },
      "storyHealth": {
        "healthy": "Ошибок нет",
        "notHealthy": "Исправить ошибки",
        "warnings": "Просмотр предупреждений"
      }
    },
    "saveErrorSocial": {
      "title": "Общий доступ через социальные сети",
      "panel1": "Ваша история может отображаться некорректно в социальных сетях, так как название элемента вашего веб-приложения ArcGIS не совпадает с заголовком истории.",
      "panel1tooltip": "Если указать название, краткую информацию и изображение образца, ваша история будет выглядеть приблизительно так:",
      "panel2": "Какое название вы хотите использовать в социальных сетях:",
      "panel2q1": "Заголовок истории (рекомендуется)",
      "panel2q1tooltip": "Если выбрать эту опцию, заголовок элемента будет изменен соответственно заголовку истории, а дальнейшие изменения в конструкторе будут синхронизированы.",
      "panel2q2": "Название элемента",
      "panel3": "Для дальнейшего улучшения отображения своей истории в социальных сетях используйте ${MYSTORIES}, чтобы добавить краткую информацию и изображение образца.",
      "panel4": "Больше не уведомлять меня об этой истории",
      "save": "Сохранить",
      "mystories": "Мои истории"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "Важное сообщение о веб-безопасности и картах-историях.",
      "s1h1": "Esri улучшил защищенность карт-историй.",
      "s1p1": "Story Maps существуют в Интернете, поэтому веб-сообщество всегда работает над обеспечением безопасности. HTTPS, который предлагает защищенное подключение к ресурсам, передаваемым через Интернет, рассматривается как основной способ доступа к веб-ресурсам. Большинство современных браузеров могут отображать предупреждения при использовании HTTP вместо HTTPS. В соответствии со стандартами безопасности, мы рекомендуем использовать ссылки HTTPS для создания и публикации Story Maps, использовать только  HTTPS URL при встраивании веб-ресурса или ссылке на изображения в Story Map.",
      "s1p2": "Фактически это означает, что Story Map  и все ее содержание (включая изображения, слои, встроенные приложения и веб-сайты) должны быть доступны при помощи ссылок, начинающихся на HTTPS, а не на HTTP. Это гарантирует наибольшее удобство для ваших пользователей, поскольку большинство веб-браузеров показывают, что ваши истории защищены.",
      "s2h1": "Что еще нужно сделать?",
      "s2p1": "Esri работает над тем, чтобы переход для авторов и читателей Story Map был простым. В конструкторах Story Map и Моих историях имеются инструменты, которые помогают найти в ваших историях незащищенные ресурсы (HTTP) и предлагают рекомендации по исправлению этой ситуации. Проверьте ваши истории на небезопасные ресурсы и как можно скорее обновите до HTTPS.",
      "action1": "Закрыть",
      "action2": "Проверить мои истории сейчас",
      "action3": "Более подробно",
      "floatingNotification": "Эта история содержит небезопасный ресурс (HTTP). Пожалуйста, устраните эту проблему."
    },
    "extendedSupportMessage": {
      "bannerMsg": "Классические карты-истории Esri Story Maps находятся в режиме продленной поддержки",
      "s1h1": "Важное сообщение о классических картах-историях Esri Story Maps",
      "s1p1": "Классические шаблоны Esri Story Maps находятся в режиме продленной поддержки. Используйте ArcGIS Story Maps, современный инструмент Esri для создания захватывающих историй.",
      "s1p2": "Классические шаблоны больше не находятся в стадии активной разработки и не рекомендуются для новых проектов. Никаких дальнейших обновлений их возможностей не планируется. Истории, созданные вами с использованием классических шаблонов, будут по-прежнему доступны.",
      "s1p3": "В декабре 2021 года классические шаблоны будут удалены из галереи настраиваемых приложений по умолчанию. Один или несколько классических шаблонов могут быть добавлены в пользовательскую группу настраиваемых приложений вашей организации, если это необходимо для поддержки текущих рабочих процессов во время перехода к использованию ArcGIS StoryMaps.",
      "s1p4": "Для получения дополнительной информации нажмите на ссылку Узнать больше ниже.",
      "action1": "Закрыть",
      "action2": "Подробнее",
      "action3": "Попробовать ArcGIS StoryMaps"
    },
    "matureSupportMessage": {
      "bannerMsg": "Классические карты-истории Esri Story Maps находятся в режиме истекающей поддержки",
      "s1h1": "Важное сообщение о классических картах-историях Esri Story Maps",
      "s1p1": "Классические шаблоны Esri Story Maps находятся в режиме истекающей поддержки. Используйте ArcGIS Story Maps, современный инструмент Esri для создания захватывающих историй.",
      "s1p2": "Классические шаблоны больше не находятся в стадии активной разработки и не рекомендуются для новых проектов. Никаких дальнейших обновлений их возможностей не планируется. Истории, созданные вами с использованием классических шаблонов, будут по-прежнему доступны.",
      "s1p3": "Для получения дополнительной информации нажмите на ссылку Узнать больше ниже.",
      "action1": "Закрыть",
      "action2": "Подробнее",
      "action3": "Попробовать ArcGIS StoryMaps"
    },
    "storyTellerUserType": {
      "notCreatorError": "Лицензия вашей учетной записи (%USER_NAME%) не позволяет использовать классический конструктор карт-историй. Попросите администратора вашей организации назначить вам тип лицензии Creator."
    }
  }
});