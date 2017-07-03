/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */

define({
  root: ({
    viewer: {
      common: {
        save: "Save",
        close: "Close"
      },
      errors: {
        noConfigName: "No configuration specified in index.html > configOptions.story",
        configFormatError: "The specified configuration couldn't be loaded because of a JSON syntax error.",
        configNotFound: "The specified configuration hasn't been found or couldn't be loaded because of a JSON syntax error.",
        boxTitle: "An error has occurred",
        servedFromFile: "The application has to be accessed through a web server. See ${USER_GUIDE} for details.",
        userGuide: "user guide",
        invalidConfig: "Invalid configuration",
        invalidConfigNoApp: "Web Mapping Application identifier not specified in index.html.",
        invalidConfigNoAppDev: "No Web Mapping Application identifier is specified in URL parameters (?appid=). In development mode, the appid configuration in index.html is ignored.",
        unspecifiedConfigOwner: "Authorized owner hasn't been configured.",
        invalidConfigOwner: "Story owner is not authorized.",
        invalidConfignoOAuth: "This story requires authentication, please configure an ArcGIS OAuth ID in index.html or make the story public.",
        invalidApp: "This story cannot be loaded.",
        appLoadingFail: "Something went wrong, the {TPL_NAME} did not load correctly.",
        notConfiguredDesktop: "The story is not configured yet.",
        notConfiguredMobile: "The {TPL_NAME} builder is not supported at this display size. If possible, resize your browser to access the builder or please build your story on a device with a larger screen.",
        notConfiguredMobile2: "Please rotate your device to landscape orientation to use the {TPL_NAME} builder.",
        notAuthorized: "You are not authorized to access this story",
        notAuthorizedBuilder: "You are not authorized to use {TPL_NAME} builder.",
        noViewerIE: "This story is not supported in Internet Explorer before version ${VERSION}. ${UPGRADE}.",
        noViewerIE2: "You are attempting to view this story using an older, unsupported browser. There may be features that do not work or other unexpected issues. We suggest you upgrade to Internet Explorer 11 or use another browser, such as Chrome.",
        noViewerIE3: "In late 2017, this story will no longer load on this browser. At that time, you must use a supported browser to view this story.",
        upgradeBrowser: "Please update your browser",
        mapLoadingFail: "Something went wrong, the map did not load correctly.",
        signOut: "Sign Out",
        builderSupport1: "Story Map Cascade builder is supported only in ${CHROME} and ${SAFARI}. However, Cascade stories that you create with builder can be viewed those browsers, Internet Explorer 11+, and Firefox.",
        builderSupport2: "Story Map Cascade builder is not supported on iPad. Cascade stories that you create and share will work on iPad.",
        builderSupport3: "Cascade stories can be viewed in Chrome, Safari, Firefox, and Internet Explorer 11+, but Story Map Cascade builder is supported only in ${CHROME} and ${SAFARI}.",
        builderSupport4: "Cascade stories can be viewed in any modern web browser, but Story Map Cascade builder is supported only in ${CHROME} and ${SAFARI}.<br><br>If you need Cascade builder to support a different browser, please contact ${ESRI-SUPPORT} or ${BROWSER-SUPPORT-VOTE}.",
        sorry: "Attention:"
      },
      mobileWarning: {
        message1: "You've read the mobile version of this story. For the full version, with richer media elements try it out on a desktop computer.",
        email: "Email a link to this story"
      },
      cover: {
        iosEmbedLink: "Tap to read full story",
      },
      media: {
        captionPlaceholder: "Your caption here...",
        loadingError: "Sorry, this content is not accessible",
        explore: "Explore",
        exploreMap: "Explore Map",
        exploreStop: "Stop Exploring",
        sceneNotSupported: "Sorry, this 3D map is not supported on your device.",
        loading1: "Loading...",
        loading2: "Loading map...",
        videoPlayPause: "play/pause",
        videoMuteUnmute: "mute/unmute"
      },
      headerFromCommon: {
        defaultTagline: "A ${STORY_MAP}",
        share: "Share",
        tooltipAutoplayDisabled: "This isn't available in autoplay mode"
      },
      shareFromCommon: {
        copy: "Copy",
        copied: "Copied",
        open: "Open",
        embed: "Embed in web page",
        embedExplain: "Use the following HTML code to embed the story in a web page.",
        size: "Size (width/height):",
        autoplayLabel: "Autoplay mode",
        autoplayExplain1: "Autoplay mode will advance through your story at a regular interval. This is ideal on a kiosk or public display monitor, but be aware that in other situations it may make the story harder to read. This feature isn't supported on small displays.",
        autoplayExplain2: "When this mode is active there are controls to play/pause the story and adjust the navigation speed.",
        linksupdated: "Links updated!"
      },
      theme: {
        lightLabel: "Light",
        darkLabel: "Dark"
      }
    }
  }),
  "ar": 1,
  "bs": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hi": 1,
  "hr": 1,
  "id": 1,
  "it": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nl": 1,
  "nb": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
