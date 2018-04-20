import Tab from './Tab';

import viewTpl from 'lib-build/hbars!./TabIssues';
import {} from 'lib-build/less!./TabIssues';
import {} from 'lib-build/less!./Common';
import issues from 'issue-checker/IssueTypes';

import i18n from 'lib-build/i18n!resources/tpl/builder/nls/app';
const text = i18n.builder;
const helpLinks = app.cfg.BUILDER_LINKS.issueHelps;

export default class TabIssues extends Tab {
  constructor(params = {}) {
    super(params);
    this.title = i18n.builder.mediaConfig.tabs.issues;
    this.type = 'issues';
    this.icon = 'fa-exclamation-triangle';

    this.scanResults = params.scanResults;
    this.issues = params.issues;
    this.instanceID = params.instanceID;
    // show an error if there are errors
    this.showErrors = params.scanResults.errors.length;
    // show warning if there are warnings BUT no errors
    this.showWarnings = !params.scanResults.errors.length && params.scanResults.warnings.length;
  }

  render(params) {
    if (!this.scanResults || !this.issues || !this.issues.length) {
      return;
    }
    const issueMessages = this.getIssueMessages(params && params.showDefaultButton);

    return viewTpl({
      issueMessages: issueMessages,
      needsCarousel: issueMessages.length > 1,
      carouselId: this.getCarouselId(),
      issueItemsTemplate: params ? params.itemsTemplate : null,
      isMap: params && params.isMap || false
    });
  }

  postCreate(params) {
    super.postCreate(params);

    // activate tooltips
    let tooltips = this._node.find('.fix-tooltip');
    tooltips.tooltip({
      container: this._node
    });
    tooltips.on('click', function() {
      const link = $(this).data('link');
      if (link) {
        window.open(link, '_blank');
      }
    });

    let carousel = this._node.find('.carousel');
    carousel.find('.carousel-control.left').addClass('hidden');

    // activate first issue
    carousel.find('.item').eq(0).addClass('active');
    carousel.find('.carousel-indicators li').eq(0).addClass('active');

    // adjust arrow visibility and item highlighting on carousel slide
    carousel.on('slide.bs.carousel', function(evt) {
      let nextIndex = parseInt($(evt.relatedTarget).data('slide-to'));

      // adjust arrow visibility
      this.updateCarouselArrows(carousel, this, nextIndex);
    }.bind(this));

    this._addFixButtonEvents();
  }

  _addFixButtonEvents() {
    this._node.find('.fix-btn').each((i, btn) => {
      const issue = this.issues[i];
      $(btn).on('click', () => {
        switch(issue.id) {
          case issues.webpages.httpContentUnfixable:
          case issues.webpages.httpContentIndeterminate:
          case issues.images.httpContentUnfixable:
          case issues.images.httpContentIndeterminate:
          case issues.audio.httpContentUnfixable:
          case issues.audio.httpContentIndeterminate:
          case issues.videos.httpContentUnfixable:
          case issues.videos.httpContentIndeterminate:
            this._onAction('https-open-picker');
            break;
          case issues.webpages.httpContentFixable:
          case issues.images.httpContentFixable:
          case issues.audio.httpContentFixable:
          case issues.videos.httpContentFixable:
            this._onAction('https-swap');
            break;
          default:
            break;
        }
      });
    });
  }

  updateCarouselArrows(carousel, self, nextIndex) {
    carousel.find('.carousel-control').removeClass('hidden');
    if (nextIndex === 0) {
      carousel.find('.carousel-control.left').addClass('hidden');
    }
    else if ((nextIndex + 1) === self.scanResults.errors.length) {
      carousel.find('.carousel-control.right').addClass('hidden');
    }
  }

  getCarouselId() {
    return `${this.instanceID}_carousel`;
  }

  updateCarouselId() {
    const carouselId = this.getCarouselId();

    this._node.find('.issue-summary-wrapper.carousel')
              .prop('id', carouselId);
    this._node.find('.carousel-indicators li').data('target', '#' + carouselId);
    this._node.find('.carousel-inner .item').data('target', '#' + carouselId);
    this._node.find('.carousel-control').attr('href', '#' + carouselId);
  }

  getIssueMessages(showDefaultButton) {
    return this.issues.map((issue, i) => {
      let banner, tooltip, button, description, helpLink;
      const errorText = text.mediaErrors;

      //
      // MAP LAYER ISSUES
      //

      if (issue.id === issues.maps.unshared || issue.id === issues.layers.unshared || issue.id === issues.content.unshared) {
        banner = errorText.mapIssues.summaries.unshared;
        description = errorText.mapIssues.descriptions.unshared;
        tooltip = errorText.mapIssues.tooltips.unshared;
        button = errorText.mapIssues.fixButtons.share;
        helpLink = helpLinks.unshared;
      }
      else if (issue.id === issues.maps.othersUnshared || issue.id === issues.layers.othersUnshared || issue.id === issues.content.othersUnshared) {
        banner = errorText.mapIssues.summaries.othersUnshared;
        description = errorText.mapIssues.descriptions.othersUnshared;
        tooltip = errorText.mapIssues.tooltips.othersUnshared;
        button = errorText.mapIssues.fixButtons.help;
        helpLink = helpLinks.othersUnshared;
      }
      else if (issue.id === issues.layers.deleted) {
        banner = errorText.mapIssues.summaries.deleted;
        description = errorText.mapIssues.descriptions.descriptions;
        tooltip = errorText.mapIssues.tooltips.deleted;
        button = errorText.mapIssues.fixButtons.remove;
        helpLink = helpLinks.deleted;
      }
      else if (issue.id === issues.layers.inaccessible) {
        banner = errorText.mapIssues.summaries.inaccessible;
        description = errorText.mapIssues.descriptions.inaccessible;
        tooltip = errorText.mapIssues.tooltips.inaccessible;
        button = errorText.mapIssues.fixButtons.remove;
        helpLink = helpLinks.inaccessible;
      }
      else if (issue.id === issues.layers.unauthorized) {
        banner = errorText.mapIssues.summaries.unauthorized;
        description = errorText.mapIssues.descriptions.unauthorized;
        tooltip = errorText.mapIssues.tooltips.unauthorized;
        button = errorText.mapIssues.fixButtons.remove;
        helpLink = helpLinks.unauthorized;
      }
      else if (issue.id === issues.layers.premiumContent) {
        banner = errorText.mapIssues.summaries.premiumContent;
        description = errorText.mapIssues.descriptions.premiumContent;
        tooltip = errorText.mapIssues.tooltips.premiumContent;
        button = errorText.mapIssues.fixButtons.authorize;
        helpLink = helpLinks.premiumContent;
      }
      else if (issue.id === issues.layers.subscriptionContent) {
        banner = errorText.mapIssues.summaries.subscriptionContent;
        description = errorText.mapIssues.descriptions.subscriptionContent;
        tooltip = errorText.mapIssues.tooltips.subscriptionContent;
        button = errorText.mapIssues.fixButtons.authorize;
        helpLink = helpLinks.subscriptionContent;
      }
      else if (issue.id === issues.layers.secureService) {
        banner = errorText.mapIssues.summaries.secureContent;
        description = errorText.mapIssues.descriptions.secureContent;
        tooltip = errorText.mapIssues.tooltips.secureService;
        button = errorText.mapIssues.fixButtons.authorize;
        helpLink = helpLinks.secureContent;
      }

      //
      // HTTP CONTENT ISSUES
      //

      // FOR NOW, unfixable errors are treated as indeterminate in the UI... media often comes back as unfixable but really it exists over http...
      else if (issue.id === issues.webpages.httpContentFixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpWebpageFixable;
        button = errorText.fixButtons.updateWebpages;
        helpLink = '';
      }
      else if (issue.id === issues.webpages.httpContentUnfixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpWebpageUncheckable;
        button = errorText.fixButtons.updateWebpages;
        helpLink = '';
      }
      else if (issue.id === issues.webpages.httpContentIndeterminate) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpWebpageUncheckable;
        button = errorText.fixButtons.updateWebpages;
        helpLink = '';
      }

      else if (issue.id === issues.audio.httpContentFixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpAudioFixable;
        button = errorText.fixButtons.updateAudio;
        helpLink = '';
      }
      else if (issue.id === issues.audio.httpContentUnfixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpAudioUncheckable;
        button = errorText.fixButtons.updateAudio;
        helpLink = '';
      }
      else if (issue.id === issues.audio.httpContentIndeterminate) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpAudioUncheckable;
        button = errorText.fixButtons.updateAudio;
        helpLink = '';
      }

      else if (issue.id === issues.videos.httpContentFixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpVideoFixable;
        button = errorText.fixButtons.updateVideos;
        helpLink = '';
      }
      else if (issue.id === issues.videos.httpContentUnfixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpVideoUncheckable;
        button = errorText.fixButtons.updateVideos;
        helpLink = '';
      }
      else if (issue.id === issues.videos.httpContentIndeterminate) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpVideoUncheckable;
        button = errorText.fixButtons.updateVideos;
        helpLink = '';
      }

      else if (issue.id === issues.images.httpContentFixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpImageFixable;
        button = errorText.fixButtons.updateImages;
        helpLink = '';
      }
      else if (issue.id === issues.images.httpContentUnfixable) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpImageUncheckable;
        button = errorText.fixButtons.updateImages;
        helpLink = '';
      }
      else if (issue.id === issues.images.httpContentIndeterminate) {
        banner = errorText.contentIssues.httpMedia;
        description = errorText.descriptions.httpImageUncheckable;
        button = errorText.fixButtons.updateImages;
        helpLink = '';
      }

      //
      // DEFAULT ISSUE
      //

      else {
        banner = errorText.mapIssues.summaries.uncaught;
        description = errorText.mapIssues.descriptions.uncaught;
        tooltip = errorText.mapIssues.tooltips.uncaught;
        button = errorText.mapIssues.fixButtons.edit;
        helpLink = helpLinks.edit;
      }

      if (showDefaultButton) {
        let fullError = this.scanResults.errors[i];
        if (fullError && !fullError.actions.length) {
          button = errorText.mapIssues.fixButtons.edit;
        }
      }

      return {
        index: i,
        issueId: issue.id,
        banner,
        description,
        tooltip,
        button,
        helpLink,
        isError: issue.severity === 'error'
      };
    });
  }

  destroy() {
    super.destroy();
  }
}
