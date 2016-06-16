define([
  './CoverStatic',
  './CoverScale',
  './CoverBlur',
  './CoverPartialPage',
  './CoverDelay',
  './CoverBlendHeader',
  './CoverCurtain'
], function(
  CoverStatic,
  CoverScale,
  CoverBlur,
  CoverPartialPage,
  CoverDelay,
  CoverBlendHeader,
  CoverCurtain
) {

  function createInstance(style) {
    var cover = null;

    cover = overrideWithUrlParam();

    if (!cover) {
      switch (style) {
        case 'scale': {
          cover = new CoverScale();
          break;
        }
        case 'blur': {
          cover = new CoverBlur();
          break;
        }
        case 'partial-page': {
          cover = new CoverPartialPage();
          break;
        }
        case 'delay': {
          cover = new CoverDelay();
          break;
        }
        case 'blend-header': {
          cover = new CoverBlendHeader();
          break;
        }
        case 'curtain': {
          cover = new CoverCurtain();
          break;
        }
        default: {
          cover = new CoverStatic();
          break;
        }
      }
    }

    return cover;
  }

  function overrideWithUrlParam() {
    var url = window.location.href,
        cover = null;

    if (url.indexOf('coverStyle=blur') !== -1) {
      cover = new CoverBlur();
    }
    else if (url.indexOf('coverStyle=scale') !== -1) {
      cover = new CoverScale();
    }
    else if (url.indexOf('coverStyle=partial-page') !== -1) {
      cover = new CoverPartialPage();
    }
    else if (url.indexOf('coverStyle=delay') !== -1) {
      cover = new CoverDelay();
    }
    else if (url.indexOf('coverStyle=blend-header') !== -1) {
      cover = new CoverBlendHeader();
    }
    else if (url.indexOf('coverStyle=curtain') !== -1) {
      cover = new CoverCurtain();
    }

    return cover;
  }

  return {
    createInstance: createInstance
  };
});
