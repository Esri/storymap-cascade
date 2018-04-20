import IssueTypes from './IssueTypes';

export default class Issue {
  static getIssueDetails(id) {
    const issueDetails = {
      [IssueTypes.images.inaccessible]: {
        mediaType: 'images',
        actions: []
      },
      [IssueTypes.images.httpContentFixable]: {
        mediaType: 'images',
        actions: []
      },
      [IssueTypes.images.httpContentUnfixable]: {
        mediaType: 'images',
        actions: []
      },
      [IssueTypes.images.httpContentIndeterminate]: {
        mediaType: 'images',
        actions: []
      },
      [IssueTypes.audio.inaccessible]: {
        mediaType: 'audio',
        actions: []
      },
      [IssueTypes.audio.httpContentFixable]: {
        mediaType: 'audio',
        actions: []
      },
      [IssueTypes.audio.httpContentUnfixable]: {
        mediaType: 'audio',
        actions: []
      },
      [IssueTypes.audio.httpContentIndeterminate]: {
        mediaType: 'audio',
        actions: []
      },
      [IssueTypes.videos.inaccessible]: {
        mediaType: 'videos',
        actions: []
      },
      [IssueTypes.videos.httpContentFixable]: {
        mediaType: 'videos',
        actions: []
      },
      [IssueTypes.videos.httpContentUnfixable]: {
        mediaType: 'videos',
        actions: []
      },
      [IssueTypes.videos.httpContentIndeterminate]: {
        mediaType: 'videos',
        actions: []
      },
      [IssueTypes.webpages.httpContentFixable]: {
        mediaType: 'webpages',
        actions: []
      },
      [IssueTypes.webpages.httpContentUnfixable]: {
        mediaType: 'webpages',
        actions: []
      },
      [IssueTypes.webpages.httpContentIndeterminate]: {
        mediaType: 'webpages',
        actions: []
      },
      [IssueTypes.maps.inaccessible]: {
        mediaType: 'maps',
        actions: []
      },
      [IssueTypes.maps.deleted]: {
        mediaType: 'maps',
        actions: []
      },
      [IssueTypes.maps.unauthorized]: {
        mediaType: 'maps',
        actions: []
      },
      [IssueTypes.maps.unshared]: {
        mediaType: 'maps',
        actions: ['maps/share']
      },
      [IssueTypes.maps.othersUnshared]: {
        mediaType: 'maps',
        actions: []
      },
      [IssueTypes.layers.inaccessible]: {
        mediaType: 'layers',
        actions: []
      },
      [IssueTypes.layers.deleted]: {
        mediaType: 'layers',
        actions: []
      },
      [IssueTypes.layers.unauthorized]: {
        mediaType: 'layers',
        actions: []
      },
      [IssueTypes.layers.unshared]: {
        mediaType: 'layers',
        actions: ['layers/share']
      },
      [IssueTypes.layers.othersUnshared]: {
        mediaType: 'layers',
        actions: []
      },
      [IssueTypes.layers.premiumContent]: {
        mediaType: 'layers',
        actions: ['layers/sharePremiumContent']
      },
      [IssueTypes.layers.subscriptionContent]: {
        mediaType: 'layers',
        actions: ['layers/shareSubscriptionContent']
      },
      [IssueTypes.layers.secureService]: {
        mediaType: 'layers',
        actions: []
      }
    };

    return issueDetails[id];
  }

  constructor(id, media) {
    let issueDetails = Issue.getIssueDetails(id);

    this.id = id;
    this.mediaType = issueDetails.mediaType;
    this.media = media;
    this.actions = issueDetails.actions;
  }
}
