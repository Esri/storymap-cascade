import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import Deferred from 'dojo/Deferred';
import Helper from '../../utils/Helper';
import FormGroup from '../../components/FormGroup';
import 'lib/resample-hermite/hermite';
import 'lib/loader/dist/loader';
import {} from 'lib-build/less!./PhotoUploader';
import i18n from 'lib-build/i18n!../../../../_resources/nls/media';
import topic from 'dojo/topic';
import constants from '../../constants';
import { ArcGISConnector } from '../../connectors/ArcGIS';

var text = i18n.mediaPicker.browsePanel.sidePanel.agol;

export default class Photo extends FormGroup {

  constructor(props) {
    super(props);

    this.checkForCapabilities();

    this.fileChange = this.fileChange.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.resetPicker = this.resetPicker.bind(this);
    this.loadImageFromFile = this.loadImageFromFile.bind(this);
  }

  checkForCapabilities() {
    // check for dnd capabilities up front, not on every render
    this.hasDnD = !navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) &&
                  'draggable' in document.createElement('span') &&
                  typeof(window.FileReader) !== 'undefined';
    this.useCapture = navigator.userAgent.match(/iPad|iPhone|iPod/g);
  }

  componentDidMount() {
    if (this.hasDnD && !window.dndDisabled) {
      this.addDnDListener();
    }
  }

  addDnDListener() {
    // prevent drag and drop anywhere in the window
    // (by default, would open file and lose place in app configuration)
    window.dndDisabled = true;
    window.addEventListener('dragover', function(evt) {
      if (evt && !$(evt.target).hasClass('drag-area')) {
        evt.preventDefault();
      }
    });
    window.addEventListener('drop', function(evt) {
      if (evt) {
        evt.preventDefault();
      }
    });
  }

  fileChange(e) {
    const files = e.target.files;

    if (files && files.length) {
      this.loadImageFromFile(files[0]);
    }
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragging: true
    });
  }

  onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragging: false
    });
  }

  onDrop(e) {
    this.setState({
      dragging: false
    });
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
      e.preventDefault();
      e.stopPropagation();
      this.loadImageFromFile(e.dataTransfer.files[0]);
    }
  }

  loadImageFromFile(file) {
    const image = new Image();
    const URL = window.URL || window.webkitURL;
    const self = this;

    if (URL) {
      image.src = URL.createObjectURL(file);
      image.onload = function() {
        this.onload = null;

        if (file.type.indexOf('gif') >= 0) {
          self.handleGif(file, this);
        }
        else {
          self.handleImage(file, this);
        }
        URL.revokeObjectURL(file);
      };
    }
  }

  checkOriginalSize(file, img) {
    return (img.width <= constants.photoSettings.maxWidth &&
            img.height <= constants.photoSettings.maxHeight &&
            file.size <= constants.photoSettings.maxFileSize);
  }

  handleGif(file, img) {
    if (!this.checkOriginalSize(file, img)) {
      console.warn('gif too big. width: ', img.width, ', maxWidth: ', constants.photoSettings.maxWidth,
        '; height: ', img.height, ', maxHeight: ', constants.photoSettings.maxHeight,
        '; file size: ', file.size, ', maxFileSize: ', constants.photoSettings.maxFileSize);
      return;
    }
    // can't create thumbnail really, so just upload the original file
    // (but include img for height/width)
    this.fileUploadToAGOL(file, img);
  }

  handleImage(file, img) {
    const thisRatio = img.width / img.height;
    const options = this.getLoaderSizeOptions(thisRatio, 'photo');
    // convert to dataUrl and possibly resize
    new window.Loader(img, Object.assign(options, {
      done: (loaderImg) => {
        this.handleLoaderImage(loaderImg, img, file);
      }
    }));
  }

  getLoaderSizeOptions(thisRatio, type) {
    if (type === 'thumb') {
      const maxHeight = Math.max(constants.galleryContent.IMG_HEIGHT, constants.galleryContent.ALBUM_HEIGHT);
      return {
        maxHeight: maxHeight
      };
    }
    var maxRatio = constants.photoSettings.maxWidth / constants.photoSettings.maxHeight;

    if (thisRatio < maxRatio && maxRatio > 1) {
      return {
        maxHeight: constants.photoSettings.maxHeight
      };
    }
    return {
      maxWidth: constants.photoSettings.maxWidth
    };
  }

  generateThumbnail(loadedImg) {
    var def = new Deferred();
    const thisRatio = loadedImg.width / loadedImg.height;
    const options = this.getLoaderSizeOptions(thisRatio, 'thumb');

    // use loader to reduce image size
    new window.Loader(loadedImg, Object.assign(options, {
      done: (newImg) => {
        def.resolve(newImg);
      }
    }));
    return def;
  }

  getUploadFileNames(file) {
    const fileName = file.name;
    const now = new Date();
    const lastDot = fileName.lastIndexOf('.');
    const name = lastDot >= 0 ? fileName.substr(0, lastDot) : fileName;
    const ext = lastDot >= 0 ? fileName.substr(lastDot) : file.type.substr(file.type.indexOf('/' + 1));
    const baseName = name + '__' + now.getTime();
    return {
      type: ext.substr(1),
      fileName: baseName +  ext,
      thumbName: baseName + '__thumb' + ext
    };
  }

  fileUploadToAGOL(file, img) {
    const fileName = this.getUploadFileNames(file).fileName;

    let formdata = new FormData();
    formdata.append('img', file, fileName);
    formdata.append('f', 'json');

    ArcGISConnector.uploadResources(formdata).then((result) => {
      this.props.onPhotoUpload(result);
      topic.publish('MEDIA-PICKER-SELECTION', {
        type: 'image',
        width: img.width,
        height: img.height,
        url: result.baseAttachmentUrl + fileName
      });
      this.resetPicker();
    });

  }

  blobUploadToAGOL(blobs, file, def) {
    const fileNames = this.getUploadFileNames(file);
    if (!this.props.appId) {
      def.reject('No app id');
      return;
    }

    let formdata = new FormData();
    formdata.append('img', blobs.img, fileNames.fileName);
    if (blobs.thumb) {
      formdata.append('thumb', blobs.thumb, fileNames.thumbName);
    }
    formdata.append('f', 'json');

    ArcGISConnector.uploadResources(formdata).then((result) => {
      this.props.onPhotoUpload(result);
      def.resolve({ url: result.baseAttachmentUrl + encodeURIComponent(fileNames.fileName) });
    }).catch((result) => {
      def.reject(result);
    });
  }

  handleLoaderImage(loaderImg, origImg, file) {
    let fileBlob;
    if (file.size > constants.photoSettings.maxFileSize) {
      fileBlob = Helper.dataURItoBlob(loaderImg.src);
      if (fileBlob.size > constants.photoSettings.maxFileSize) {
        console.warn('need to scale this photo down before upload!');
      }
    }
    else {
      fileBlob = file;
    }

    var def = new Deferred();

    topic.publish('MEDIA-PICKER-SELECTION', {
      type: 'image',
      width: loaderImg.width,
      height: loaderImg.height,
      dataUrl: loaderImg.src,
      uploadDeferred: def
    });
    this.resetPicker();

    this.generateThumbnail(origImg).then((thumb) => {
      this.blobUploadToAGOL({
        img: fileBlob,
        thumb: Helper.dataURItoBlob(thumb.src)
      }, file, def);
    });
  }

  resetPicker() {
    this.refs.input.value = '';
  }

  // ---------- render functions ---------- //

  renderDnD() {
    const uploaderClasses = Helper.classnames([this.props.className,'drag-area','uploader','alert',{
      'alert-default': !this.state.dragging,
      'alert-success': this.state.dragging
    }]);

    return (
      <div className={uploaderClasses} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}>
        <span className="bg-img fa fa-picture-o fa-5x" />
        <span className="block-md">
          <span className="fa fa-hand-rock-o fa-lg" />
          <span>{text.createContent.dragAndDrop}</span>
        </span>
        <span className="block-md">{text.createContent.or}</span>
        <button type="button" className="btn btn-default btn-file block-md" onBlur={this.onBlur}>
          <span className="fa fa-folder-open-o fa-lg" />
          <span>{text.createContent.uploadImage}</span>
          <input id={this.props.id} ref="input" type="file" accept="image/*" capture={this.useCapture ? 'camera' : false} tabIndex="-1" onChange={this.fileChange}></input>
        </button>
        <div className="info-footer">
          <span className="fa fa-lg fa-info-circle" />
          <span>{text.createContent.agolInfo}</span>
        </div>
      </div>
    );
  }

  renderNoDnD() {
    return (
      <button type="button" className="uploader btn btn-default btn-file btn-block" onBlur={this.onBlur}>
        {text.createContent.uploadImage}
        <input id={this.props.id} ref="input" type="file" accept="image/*" capture={this.useCapture ? 'camera' : false} tabIndex="-1" onChange={this.fileChange}></input>
      </button>
    );
  }

  renderNoAppId() {
    return (
      <div className="drag-area uploader alert alert-default">
        <span>{text.createContent.saveBeforeUpload}</span>
      </div>
    );

  }

  render() {

    const inputClasses = Helper.classnames([this.props.className, 'photo-input', 'form-group', {
      'required': this.props.required,
      'has-error': !this.state.isValid
    }]);

    let fileUploader;
    if (!this.props.appId) {
      fileUploader = this.renderNoAppId();
    }
    else if (this.hasDnD) {
      fileUploader = this.renderDnD();
    }
    else {
      fileUploader = this.renderNoDnD();
    }

    return (
      <div className={inputClasses}>
        {fileUploader}
        {this.getErrorMessage ? this.getErrorMessage() : null}
      </div>
    );

  }

}
