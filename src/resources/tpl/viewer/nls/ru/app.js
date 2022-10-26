﻿/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "Сохранить",
      "close": "Закрыть"
    },
    "errors": {
      "noConfigName": "Не указана конфигурация в index.html > configOptions.story",
      "configFormatError": "Указанная конфигурация не может быть загружена из-за ошибки в синтаксисе JSON.",
      "configNotFound": "Указанная конфигурация не найдена или не может быть загружена из-за ошибки в синтаксисе JSON.",
      "boxTitle": "Произошла ошибка",
      "servedFromFile": "Доступ к приложению возможен только через веб-сервер. Подробнее см. ${USER_GUIDE}.",
      "userGuide": "руководство пользователя",
      "invalidConfig": "Некорректная настройка",
      "invalidConfigNoApp": "Идентификатор картографического веб-приложения не указан в index.html.",
      "invalidConfigNoAppDev": "Нет идентификатора Web Mapping Application, указанного в параметрах URL (?appid= или ?webmap=). В режиме разработки конфигурация appid в index.html игнорируются.",
      "unspecifiedConfigOwner": "Авторизованный владелец не настроен.",
      "invalidConfigOwner": "Владелец истории не авторизован.",
      "invalidConfignoOAuth": "Для этой истории требуется аутентификация, настройте ArcGIS OAuth ID в index.html или сделайте историю публичной.",
      "invalidApp": "Не удается загрузить эту историю.",
      "appLoadingFail": "Произошла ошибка, {TPL_NAME} загружено некорректно.",
      "notConfiguredDesktop": "История пока не настроена.",
      "notConfiguredMobile": "Конструктор {TPL_NAME} не поддерживается на экранах такого размера. Если можете, измените размер браузера, чтобы получить доступ к конструктору, либо создайте свою историю на другом устройстве с большим монитором.",
      "notConfiguredMobile2": "Чтобы использовать конструктор {TPL_NAME}, поверните своё устройство в альбомную ориентацию.",
      "notAuthorized": "Вы не авторизованы для доступа к истории.",
      "notAuthorizedBuilder": "Вы не авторизованы для использования конструктора {TPL_NAME}.",
      "noViewerIE": "Эта история не поддерживается в Internet Explorer версии до ${VERSION}. ${UPGRADE}.",
      "noViewerIE2": "Вы пытаетесь просмотреть эту историю, используя устаревший, неподдерживаемый браузер. Некоторые элементы могут не работать, также возможны неожиданные ошибки. Воспользуйтесь Internet Explorer 11 или другим браузером, таким как Chrome.",
      "noViewerIE3": "В течение 2017 эта история более не будет загружаться данным браузером. С этого момента для просмотра данной истории следует воспользоваться поддерживающимся браузером.",
      "upgradeBrowser": "Пожалуйста, обновите ваш браузер",
      "mapLoadingFail": "Произошла ошибка, карта загрузилась некорректно.",
      "signOut": "Выйти",
      "builderSupportFirefox": "Конструктор Story Map Cascade теперь поддерживает Firefox! <br><br>Поддержка создания историй Cascade в Firefox в настоящий момент осуществляется в режиме тестирования. Пожалуйста, изучите и отправляйте сообщения об ошибках в ${ESRI-SUPPORT} или ${ESRI-COMMUNITY}.",
      "builderSupportOther": "Истории Cascade можно просматривать в любом современном браузере, но конструктор Story Map Cascade поддерживается только в ${CHROME} и ${SAFARI} и ${FIREFOX}.<br><br>Если вам требуется поддержка конструктора Cascade на другом браузере, свяжитесь с ${ESRI-SUPPORT} или ${BROWSER-SUPPORT-VOTE}.",
      "builderSupportIpad": "Конструктор Story Map Cascade не поддерживается на iPad. Опубликованные истории Cascade могут просматриваться на iPad.",
      "launchBuilder": "Запуск конструктора Cascade",
      "notAgain": "Не показывать это сообщение снова",
      "sorry": "Внимание:",
      "nonOwnerOrgUrl": "%TPL_NAME%, к которому вы пытаетесь получить доступ, не соответствует источнику по URL.",
      "nonOwnerOrgProceedToGeneric": "Продолжить до %HREF%",
      "advanced": "Дополнительно"
    },
    "mobileWarning": {
      "message1": "Вы прочитали мобильную версию этой истории. Полную версию, более насыщенную элементами медиа-ресурсов, прочитайте на настольном компьютере.",
      "email": "Отправить ссылку на эту историю"
    },
    "cover": {
      "iosEmbedLink": "Коснитесь, чтобы увидеть всю историю"
    },
    "media": {
      "captionPlaceholder": "Ваш заголовок здесь...",
      "loadingError": "Извините, этот ресурс недоступен",
      "explore": "Изучить",
      "exploreMap": "Изучение карты",
      "exploreStop": "Остановить изучение",
      "sceneNotSupported": "Извините, 3D карта не поддерживается на вашем устройстве.",
      "loading1": "Загрузка...",
      "loading2": "Загрузка карты...",
      "videoPlayPause": "воспроизведение/пауза",
      "videoMuteUnmute": "выключить звук/включить звук"
    },
    "headerFromCommon": {
      "defaultTagline": "${STORY_MAP}",
      "share": "Опубликовать или напечатать",
      "tooltipAutoplayDisabled": "Недоступно в режиме автовоспроизведения"
    },
    "shareFromCommon": {
      "copy": "Копировать",
      "copied": "Скопировано",
      "open": "Открыть",
      "embed": "Встроить в веб-страницу",
      "embedExplain": "Используйте следующий HTML-код для встраивания истории на веб-страницу.",
      "size": "Размер (ширина/высота):",
      "autoplayLabel": "Режим автовоспроизведения",
      "autoplayExplain1": "Режим автовоспроизведения будет проходить в вашей истории через равные промежутки времени. Это идеально подходит для информационных киосков или мониторов для публичного обозрения, но имейте в виду, что в некоторых случаях вашу историю будет тяжело читать. Эта возможность не поддерживается на маленьких мониторах.",
      "autoplayExplain2": "Когда активен данный режим, там есть элементы управления для включения/остановки воспроизведения истории и установки скорости перемещения.",
      "linksupdated": "Ссылки обновлены!"
    },
    "theme": {
      "lightLabel": "Светлая",
      "darkLabel": "Темная"
    },
    "autoplay": {
      "speedFast": "Быстро",
      "speedMedium": "Среднее",
      "speedSlow": "Медленно"
    },
    "bannerNotification": {
      "learnMore": "Подробнее",
      "close": "Закрыть",
      "dontShowAgain": "Не показывать это сообщение снова"
    },
    "embedBar": {
      "share": "Общий доступ",
      "fullScreen": "Во весь экран",
      "exitFullScreen": "Выйти из полноэкранного режима",
      "enlarge": "Увеличить",
      "newTab": "Открыть в новой вкладке",
      "tagline": "Карта-история",
      "twitter": "Разместить в Twitter",
      "facebook": "Разместить в Facebook"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "Прежде чем печатать, пожалуйста, подождите, пока загрузится вся история",
      "printNotes": "Если эта страница загружается медленно или некоторые медиаресурсы не отображаются, попробуйте заменить медиаресурсы в реальном времени изображениями или печать меньшего числа разделов. Лучше всего включить печать фоновых элементов в настройках печати вашего браузера.",
      "printOptions": "Опции",
      "makeTextBlack": "Сделать весь текст черным",
      "showLinks": "Показать URL связи",
      "useAltMedia": "Заменить, по возможности, медиаресурсы в реальном времени изображениями",
      "pageBreaks": "Начинать каждый раздел с новой страницы",
      "printRange": "Напечатать часть этой истории",
      "sectionStart": "Разделы:",
      "go": "Применить",
      "reset": "Сброс до всей истории",
      "print": "Печать"
    },
    "page": {
      "appTagline": "Эта история создана с ${CASCADE_LINK_TEXT}.",
      "cascadeLinkText": "Esri's Story Map Cascade",
      "readItOnline": "Прочитайте в интернете на сайте ${STORY_URL}."
    },
    "sections": {
      "sectionLabel": "Раздел ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "Веб-сайт:",
      "videoLabel": "Видео:",
      "audioLabel": "Аудио:"
    },
    "licenseChange2018": {
      "noAccess": "Ваша учетная запись (%USER_NAME%) не лицензирована на открытие не публичной Story Map. Обратитесь к администратору организации, чтобы получить тип пользователя, в который входит Story Map или лицензия дополнительного модуля Essential Apps."
    }
  }
});