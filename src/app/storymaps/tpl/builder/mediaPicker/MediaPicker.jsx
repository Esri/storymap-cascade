import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import * as actions from './actions';

import BrowseToggleContainer from './browseToggle/BrowseToggleContainer';
import BrowsePanelContainer from './browsePanel/BrowsePanelContainer';
import {} from 'lib-build/less!./MediaPicker';

import topic from 'dojo/topic';
import Deferred from 'dojo/Deferred';

var store = createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : {});
var _resultDeferred;

// The event is fired in GalleryItem.jsx and end the media picking workflow
topic.subscribe('MEDIA-PICKER-SELECTION', function(selection) {
  if (_resultDeferred && selection) {
    _resultDeferred.resolve({
      type: selection.type, // TODO temporary
      [selection.type]: selection
    });
  }
});

topic.subscribe('MEDIA-PICKER-SWAP-MAP-EDITOR', function() {
  _resultDeferred && _resultDeferred.reject('swap-map-editor');
});

class MediaPicker extends React.Component {

  constructor(container) {
    super();
    this.container = container;
    this.render();
  }

  open(params) {
    _resultDeferred = new Deferred();

    this.render(Object.assign(params, {justOpened: true}));

    _resultDeferred.then(() => {
      this.render(Object.assign(params, {justOpened: false}));
    }, () => {
      this.render(Object.assign(params, {justOpened: false}));
    });

    if (params.selectedProvider) {
      store.dispatch(actions.selectProvider(params.selectedProvider));
    }

    return _resultDeferred;
  }

  render(params) {
    ReactDOM.render(
      <Provider store={store} >
        <div className="media-picker">
          <BrowseToggleContainer authorizedMedia={params ? params.authorizedMedia : null} />
          <BrowsePanelContainer params={params} />
        </div>
      </Provider>
    , document.getElementById(this.container));
  }
}

export default MediaPicker;
