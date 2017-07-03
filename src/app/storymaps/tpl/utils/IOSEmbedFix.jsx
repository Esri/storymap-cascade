import $ from 'jquery';
import UIUtils from 'storymaps/tpl/utils/UI';

const setStyles = function() {
  const styleWrapper = $(`<div style="position: fixed; width: 0; height: ${window.innerHeight}px"></div>`).appendTo('body');
  const isIOSEmbed = UIUtils.isMobileBrowser() && navigator.userAgent.match(/iPhone|iPad|iPod/i) && window.top !== window.self;

  const getCSSString = function() {
    if (UIUtils.isMobileBrowser()) {
      return `.section-layout-cover {
        height: ${styleWrapper.height()}px;
      }

      .section-layout-cover .wrapper {
        height: ${styleWrapper.height()}px;
      }

      .ios-embed .embed-wrapper {
         position: fixed;
         width: 100%;
         height: 100%;
         overflow: hidden;
      }

      .ios-embed .story-header .share {
         display: none;
      }`;
    }
  };

  if (isIOSEmbed) {
    $('body').addClass('ios-embed');
    styleWrapper.css({
      width: '100%',
      zIndex: 9999
    }).click(function() {
      window.open(window.location.href,'_blank');
    });
  }

  const addStyleTag = function() {
    styleWrapper.html(`<style>${getCSSString()}</style>`);
  };

  addStyleTag();
};

export default {
  setStyles
};
