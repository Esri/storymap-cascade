import EsriConfig from 'esri/config';
import ArcGISUtils from 'esri/arcgis/utils';

import Result from './Result';
import NormalizeHelper from './helpers/NormalizeHelper';
import Images from './media/Images';
import Videos from './media/Videos';
import Audio from './media/Audio';
import Webpages from './media/Webpages';
import Maps from './media/Maps';
import Issue from './Issue';
import Share from './Share';
import Fix from './Fix';
import Privileges from './Privileges';
import PremiumManager from './PremiumManager';

/** An issue finder and fixer. */
export default class IssueChecker {
  /**
  * @param {object} options - The parameters.
  * @param {string} options.owner - The owner of the app.
  * @param {object} options.portal - The ArcGIS Portal instance used in the app.
  * @param {string} [options.appId] - the AGOL ID of the app, if available at init-time.
  * @param {string} [options.appUrl] - the URL of the app, if available at init-time.
  * @param {string} [options.proxyUrl] - The proxy URL to be used for the app.
  * @param {string} [options.arcgisUrl] - The arcgisUrl to be used for the app.
  * @param {boolean} [options.disablePremiumManager] - Whether or not to disable the premium manager.
  */
  constructor(options) {
    this.owner = options ? options.owner : '';
    this.privileges = options && options.portal ? Privileges.findPrivileges(options.portal) : null;

    if (options) {
      if (options.proxyUrl) {
        EsriConfig.defaults.io.proxyUrl = options.proxyUrl;
      }
      if (options.arcgisUrl) {
        ArcGISUtils.arcgisUrl = options.arcgisUrl;
      }
      if (options.appUrl) {
        this.appUrl = options.appUrl;
      }
      if (options.appId && options.appUrl && !options.disablePremiumManager) {
        this.premiumManager = new PremiumManager(options.appId, options.appUrl);
      }
      if (options.portal) {
        this.portal = options.portal;
      }
      if (options.disablePremiumManager) {
        this.disablePremiumManager = options.disablePremiumManager;
      }
    }

    // there is no "default" proxy URL, so if not provided or set by the parent app, we'll give a default here.
    if (!EsriConfig.defaults.io.proxyUrl) {
      EsriConfig.defaults.io.proxyUrl = 'https://www.arcgis.com/sharing/proxy';
    }
  }

  /**
  * Performs any initialization (after having instantated the Issue Checker) that requires an appID.
  * For use when app is initially opened "from scratch" without an appID.
  * Certain issue-checker checks need an appID to function fully (once it's available);
  * @param {object} options - The parameters.
  * @param {string} options.appId - the ID of the app.
  * @param {string} options.appUrl - the URL of the app.
  */
  onFirstAppSave(options) {
    if (!this.disablePremiumManager) {
      this.premiumManager = new PremiumManager(options.appId, options.appUrl);
    }
    this.appUrl = options.appUrl;
  }

  /**
  * Checks if an app has issues, returning those that do.
  * @param {object} options - The parameters.
  * @param {Media} media - The app's media.
  * @param {string} appAccess - The sharing level of the app.
  * @return {Deferred.promise} The promise from the scan --
  * if resolved: scan completed successfully and returns {@link Result};
  * if rejected: Scan couldn't complete, returns {@link IncompleteScan}.
  */
  check(options) {
    let result = new Result(options.media);

    let allImages = NormalizeHelper.getAllItems(result.media.images);
    let imagesCheck = Images.check({
      items: allImages,
      appUrl: this.appUrl,
      portal: this.portal
    });

    let allVideos = NormalizeHelper.getAllItems(result.media.videos);
    let videosCheck = Videos.check({
      items: allVideos,
      appUrl: this.appUrl,
      portal: this.portal
    });

    let allAudio = NormalizeHelper.getAllItems(result.media.audio);
    let audioCheck = Audio.check({
      items: allAudio,
      appUrl: this.appUrl,
      portal: this.portal
    });

    let allWebpages = NormalizeHelper.getAllItems(result.media.webpages);
    let webpagesCheck = Webpages.check({
      items: allWebpages,
      appUrl: this.appUrl,
      portal: this.portal
    });

    let allMaps = NormalizeHelper.getAllItems(result.media.maps);
    let mapsCheck = Maps.check({
      items: allMaps,
      appAccess: options.appAccess,
      premiumManager: this.premiumManager,
      orgId: this.portal.user.orgId,
      privileges: this.privileges
    })
    .then(checkedMaps => {
      this._groomMapLayerData(result, checkedMaps);

      return checkedMaps;
    });

    let mediaChecks = [imagesCheck, videosCheck, audioCheck, webpagesCheck, mapsCheck];
    return Promise.all(mediaChecks).then(() => {
      // let's handle the errors here, then return the result.
      // I'm using "result.media" instead of the parameters to this .then function
      // so that we can check layers as first-class citizens, instead of having to deal with maps -> layers.
      result.errors = this._compileIssues(result.media, result.errors, 'errors');
      result.warnings = this._compileIssues(result.media, result.warnings, 'warnings');

      return result;
    });
  }

  _groomMapLayerData(result, maps) {
    for (let map of maps.items) {
      // put the layers on the results object (if they're not on there already)
      result.addLayerEntries(map);
      // swap the map's layers object out with just the layer IDs (instead of the whole layer object).
      let layers = map.layers.slice(0);
      map.layers = layers.map(layer => {
        return layer.id;
      });
    }
  }

  _compileIssues(resultMedia, issues, severityLevel) {
    for (let media in resultMedia) {
      if (resultMedia.hasOwnProperty(media)) {
        let allItems = NormalizeHelper.getAllItems(resultMedia[media]);

        for (let item of allItems) {
          this._compileItemIssues(item.id, issues, item[severityLevel]);
        }
      }
    }

    return issues;
  }

  _compileItemIssues(id, issues, itemIssues) {
    for (let issue of itemIssues) {
      // either add the issue, or simply add to it if it already exists.
      let existingIssue = issues.byId[issue];
      if (existingIssue) {
        existingIssue.media.push(id);
      }
      else {
        let newIssue = new Issue(issue, [id]);

        NormalizeHelper.addEntry(issues, issue, newIssue);
      }
    }
  }

  /**
  * Resolves an issue, checking the story for issues thereafter.
  * @param {object} options - The parameters
  * @param {string} options.action - The action taken.
  * @param {Item[]} options.items - Items to be fixed.
  * @param {object} options.details - Any extra details needed.
  * @return {Deferred.promise} The promise of the fix and subsequent scan --
  * if resolved: fix and scan both completed successfully and returns {@link FixResult};
  * if rejected: Fix or scan couldn't complete, returns {@link IncompleteFix}.
  */
  fix(options) {
    if (options.action === 'maps/share' || options.action === 'layers/share' || options.action === 'content/share') {
      return Fix.fixMapsShare({
        items: options.items,
        sharingLevel: options.details.sharingLevel
      });
    }
    else if (options.action === 'layers/sharePremiumContent' || options.action === 'layers/shareSubscriptionContent') {
      return Fix.fixPremiumSubscriptionContent(options.items, this.premiumManager);
    }
    else {
      return Promise.reject({
        fixedItems: [],
        unfixedItems: options.items.map(item => {
          return item.id;
        })
      });
    }
  }

  /**
  * Shares the app, checking the story for issues thereafter.
  * @param {object} options - The parameters.
  * @param {string} options.appID - The ID of the app.
  * @param {string} options.sharingLevel - The desired sharing level for the app.
  * @return {Deferred.promise} The promise of the share and subsequent scan --
  * if resolved: share and scan both completed successfully and returns {@link ShareResult};
  * if rejected: Share or scan couldn't complete, returns {@link IncompleteShare}.
  */
  share(options) {
    let modifiedParameters = Object.assign({}, options, {
      owner: this.owner,
      premiumManager: this.premiumManager,
      orgId: this.portal.user.orgId,
      privileges: this.privileges
    });
    return Share.shareApp(modifiedParameters);
  }
}
