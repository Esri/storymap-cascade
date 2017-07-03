import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import Deferred from 'dojo/Deferred';
import Helper from '../../../utils/Helper';
import 'lib/resample-hermite/hermite';
import 'lib/loader/dist/loader';
import {} from 'lib-build/less!./FileUploader';
import i18n from 'lib-build/i18n!commonResources/nls/media';
import topic from 'dojo/topic';
import constants from '../../../constants';
import ImageUploadHelper from './NewerImageUploadHelper';
import { ArcGISConnector } from '../../../connectors/ArcGIS';

var text = i18n.mediaPicker.browsePanel.sidePanel.agol;

export default class FileUploader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragging: false,
      fileError: false,
      singleFile: true,
      contentTypes: [],
      uploadExtensions: []
    };

    this.checkForCapabilities();

    this.fileChange = this.fileChange.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
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

  componentWillReceiveProps(nextProps) {
    let uploadExtensions = [];
    let contentTypes = [];
    for (let key in constants.contentType) {
      if (nextProps.authorizedMedia.indexOf(constants.contentType[key]) >= 0) {
        if (constants.uploadFileExtensions[key]) {
          uploadExtensions.push(...constants.uploadFileExtensions[key]);
          contentTypes.push(constants.contentType[key]);
        }
      }
    }
    this.setState({
      contentTypes,
      uploadExtensions
    });
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

  validateFile(file) {
    var ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    var simplifiedType = this.getSimplifiedType(file.type);
    var comparison = this.state.uploadExtensions;
    return comparison.some((filetype) => {
      return filetype === ext || filetype === file.type || filetype === simplifiedType;
    });
  }

  validateDrag(items) {
    let i = 0, matching = true;
    while (i < items.length && matching) {
      const simplifiedType = this.getSimplifiedType(items[i].type);
      matching = this.state.contentTypes.indexOf(simplifiedType) >= 0;
      i++;
    }
    return !matching;
  }

  getSimplifiedType(originalType) {
    return originalType.substring(0, originalType.indexOf('/'));
  }

  fileChange(e) {

    const files = e.target ? e.target.files : e;

    if (files && files.length) {
      const singleFile = files.length === 1;
      this.setState({singleFile});
      if (!singleFile) {
        this.props.fileUploadFunctions.multiStart();
      }

      var processingOptions = this.sequentialPreprocessing(files, singleFile);
      this.sequentialProcessing(processingOptions);

      // let uploadArr = [];
      // for (let i = 0; i < files.length; i++) {
      //   uploadArr.push(
      //     this.processOneFile(files[i], singleFile).catch((err) => {
      //       console.warn('processOneFile rejected. err:', err);
      //       this.props.fileUploadFunctions.singleFailure(files[i]);
      //     })
      //   );
      // }
      // Promise.all(uploadArr).then(() => {
      //   this.props.fileUploadFunctions.allComplete();
      // }, () => {
      //   console.warn('Promise.all failure');
      //   this.props.fileUploadFunctions.allComplete();
      // });
    }

  }

  sequentialPreprocessing(files, singleFile) {
    let namesArr = [], filesArr = [];
    for (let i = 0; i < files.length; i++) {
      if (this.validateFile(files[i])) {
        filesArr.push(files[i]);
        // need to create names upfront because name is linked to time,
        // and we want to put placeholders in for each image immediately,
        // but since we're processing sequentially, we need to capture the
        // name we used for each file. but also don't want every file to have
        // the same date, so offset by a microsecond for each file.
        // (files.length - i is to get the first file in the upload list to have
        // the most recent, not the least recent time, so it'll show up first on date sort)
        namesArr.push(this.getUploadFileNames(files[i], files.length - i));
      }
      else {
        this.setErrorTimer();
      }
    }

    if (!singleFile) {
      namesArr.forEach((names) => {
        this.props.fileUploadFunctions.singleProgress(Object.assign({
          dataUrl: constants.blankBackground
        }, names));
      });
    }
    return {namesArr, filesArr, singleFile, uploadArr: [], processArr: [], i: 0};
  }

  sequentialProcessing(params) {
    if (params.i < params.filesArr.length) {
      let names = params.namesArr[params.i];
      let file = params.filesArr[params.i];

      var processedDef = this.processOneFileSequentially(file, params.singleFile, names);
      params.processArr.push(processedDef);

      processedDef.then((processedResult) => {
        var uploadDef = this.uploadOneFileSequentially(processedResult, params.singleFile, names);
        params.uploadArr.push(uploadDef);
        params.i++;
        this.sequentialProcessing(params);
      }).catch((err) => {
        console.warn('processOneFileSequentially rejected. err: ', err);
        this.props.fileUploadFunctions.singleFailure(Object.assign({}, file, names));
        params.i++;
        this.sequentialProcessing(params);
      });
    }
    else {
      Promise.all(params.processArr).then(() => {
        this.onAllProcessingComplete(params.uploadArr);
      }, () => {
        console.warn('Promise.all failure');
        // on failure, still trigger allComplete
        // but do we need a timeout or something here...?
        this.onAllProcessingComplete(params.uploadArr);
      });
    }
  }

  onAllProcessingComplete(uploadArr) {
    Promise.all(uploadArr).then(() => {
      this.resetPicker();
      this.props.fileUploadFunctions.allComplete();
    }, () => this.props.fileUploadFunctions.allComplete);
  }

  processOneFileSequentially(file, isSingle, names) {
    return new Promise((resolve, reject) => {
      if (!this.validateFile(file)) {
        this.setErrorTimer();
        reject();
        return;
      }
      this.processFile(file, isSingle).then((result) => {
        Object.assign(result, names);
        if (!isSingle) {
          // update the container with the file's thumbnail
          this.props.fileUploadFunctions.singleProgress(result);
        }
        resolve(result);
      }).catch((result) => {
        console.warn('rejecting processFile', result);
        reject({file: Object.assign({}, file, names), result});
      });
    });
  }

  uploadOneFileSequentially(fileDetails, isSingle, names) {
    return new Promise((resolve, reject) => {
      this.fileUploadToAGOL(fileDetails, isSingle).then((uploadResult) => {
        this.props.fileUploadFunctions.singleComplete(Object.assign(fileDetails, uploadResult));
        resolve();
      }, (err) =>  {
        console.warn('fileUploadToAGOL catch. err:', err);
        Object.assign(fileDetails, names);
        reject(err);
      });
    });

  }

  processOneFile(file, isSingle) {
    return new Promise((resolve, reject) => {
      // validate file -- look for matching file extension from allowed extensions
      if (this.validateFile(file)) {
        const names = this.getUploadFileNames(file);

        if (!isSingle) {
          // pass a blank background back to the container for a placeholder while the thumbnail is generated
          this.props.fileUploadFunctions.singleProgress(Object.assign({dataUrl: constants.blankBackground}, names));
        }

        this.processFile(file, isSingle).then((result) => {
          Object.assign(result, names);
          if (!isSingle) {
            // update the container with the file's thumbnail
            this.props.fileUploadFunctions.singleProgress(result);
          }
          this.fileUploadToAGOL(result, isSingle).then((uploadResult) => {
            this.props.fileUploadFunctions.singleComplete(Object.assign(result, uploadResult));
            resolve();
          }, (err) =>  {
            console.warn('fileUploadToAGOL catch. err:', err);
            Object.assign(file, names);
            reject(err);
          });
        }).catch((result) => {
          console.warn('rejecting processFile', result);
          Object.assign(file, names);
          reject(result);
        });
      }
      else {
        console.warn('reject file', file.name);
        this.setErrorTimer();
        reject();
      }
    });
  }

  processFile(file, isSingle) {
    const simplifiedType = this.getSimplifiedType(file.type);
    switch (simplifiedType) {
      case 'image':
        return ImageUploadHelper.loadImageFromFile(file, isSingle);
      case 'audio':
      case 'video':
        console.warn('unhandled file type', simplifiedType);
        return;
      default:
        console.warn('unknown file type', file);
        return;
    }
  }

  setErrorTimer() {
    this.setState({fileError: true});
    setTimeout(() => {
      this.setState({fileError: false});
    }, 3000);
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    let walker;
    if ((walker = e.dataTransfer) && (walker = walker.items) && walker.length) {
      const err = this.validateDrag(walker);
      this.setState({
        dragging: true,
        canCheckFileOnDrag: true,
        fileError: err
      });
      return;
    }
    this.setState({
      dragging: true,
      canCheckFileOnDrag: false
    });
  }

  onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      dragging: false,
      fileError: false
    });
  }

  onDrop(e) {
    this.setState({
      dragging: false
    });
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({singleFile: e.dataTransfer.files.length === 1});
      this.fileChange(e.dataTransfer.files);
    }
  }

  getUploadFileNames(file, offset) {
    const fileName = file.name.replace(/[<>"'()*%!?&]/g, '');
    const now = new Date();
    const lastDot = fileName.lastIndexOf('.');
    const name = lastDot >= 0 ? fileName.substr(0, lastDot) : fileName;
    const ext = lastDot >= 0 ? fileName.substr(lastDot) : file.type.substr(file.type.indexOf('/' + 1));
    const baseName = name + '__' + (now.getTime() + (offset || 0));
    return {
      processedFileName: baseName +  ext,
      thumbName: baseName + '__thumb' + ext
    };
  }

  fileUploadToAGOL(processedResult, isSingle) {
    let broadcastAfterUpload = false;
    let def = new Deferred();
    if (this.state.singleFile || isSingle) {
      if (processedResult.dataUrl) {
        this.broadcastChosenFile(Object.assign(processedResult, {uploadDeferred: def}));
      }
      else {
        broadcastAfterUpload = true;
      }
    }

    ArcGISConnector.uploadSingleResource(processedResult).then((uploadResult) => {
      let urls = {
        url: uploadResult.picUrl,
        thumbUrl: uploadResult.thumbUrl
      };
      def.resolve(urls);
      if (broadcastAfterUpload) {
        Object.assign(processedResult, urls);
        if (processedResult.dataUrl) {
          processedResult.dataUrl = null;
        }
        this.broadcastChosenFile(processedResult);
      }

    }).catch((result) => {
      console.warn('uploadSingleResource catch. result:', result);
      def.reject(result);
    });

    return def;
  }

  broadcastChosenFile(fileDetails) {
    let broadcastDetails = {
      type: fileDetails.type,
      width: fileDetails.width,
      height: fileDetails.height
    };
    if (fileDetails.uploadDeferred) {
      Object.assign(broadcastDetails, {uploadDeferred: fileDetails.uploadDeferred});
    }

    if (fileDetails.dataUrl) {
      Object.assign(broadcastDetails, {dataUrl: fileDetails.dataUrl});
    }

    if (fileDetails.url) {
      Object.assign(broadcastDetails, {url: fileDetails.url});
    }

    if (fileDetails.thumbUrl) {
      Object.assign(broadcastDetails, {thumbUrl: fileDetails.thumbUrl});
    }

    topic.publish('MEDIA-PICKER-SELECTION', broadcastDetails);
  }

  resetPicker() {
    this.refs.input.value = '';
  }

  getFileTypesText() {
    // TODO: when more file types are supported, need to decide between help texts.
    return text.createContent.fileTypesImage;
  }

  forceClickInput(evt) {
    if (evt.charCode && evt.charCode === 13) {
      this.refs.input.click();
    }
  }

  // ---------- render functions ---------- //

  renderDnD() {
    const uploaderClasses = Helper.classnames([this.props.className,'drag-area','uploader','alert',{
      'alert-gray': (!this.state.dragging && !this.state.fileError) || (this.state.dragging && !this.state.canCheckFileOnDrag),
      'alert-danger': this.state.fileError,
      'alert-success': this.state.dragging && this.state.canCheckFileOnDrag && !this.state.fileError
    }]);
    const fileExtClasses = Helper.classnames(['info-filetype', 'block-md', {
      'text-danger': this.state.fileError
    }]);

    return (
      <div
      className={uploaderClasses}
      onDragOver={this.onDragOver}
      onDragLeave={this.onDragLeave}
      onDrop={this.onDrop}>
        <span className="bg-img fa fa-picture-o fa-5x" />
        <span className="block-md">
          <span className="fa fa-hand-rock-o fa-lg" />
          <span>{text.createContent.dragAndDrop}</span>
        </span>
        <span className="block-md">{text.createContent.or}</span>
        <button
          type="button"
          className="btn btn-bw inverse btn-file block-md"
          tabIndex="3"
          onKeyPress={(evt) => this.forceClickInput(evt)}
        >
          <span className="fa fa-folder-open-o fa-lg" />
          <span>{text.createContent.uploadImage}</span>
          <input
            multiple="multiple"
            id={this.props.id}
            ref="input"
            type="file"
            accept={this.state.uploadExtensions.toString()}
            capture={this.useCapture ? 'camera' : false}
            tabIndex="-1"
            onChange={this.fileChange}>
          </input>
        </button>
        <div className={fileExtClasses}>
          <span className="fa fa-file-o info" />
          <span className="fa fa-exclamation-triangle danger" />
          <span> {this.getFileTypesText()}</span>
        </div>
        <div className="info-footer">
          <span className="fa fa-lg fa-info-circle" />
          <span>{text.createContent.agolInfo}</span>
        </div>
      </div>
    );
  }

  renderNoDnD() {
    return (
      <button type="button" className="uploader btn btn-bw inverse btn-file btn-block">
        {text.createContent.uploadImage}
        <input
        id={this.props.id}
        ref="input"
        type="file"
        accept={this.state.uploadExtensions.toString()}
        capture={this.useCapture ? 'camera' : false}
        tabIndex="-1"
        onChange={this.fileChange}>
      </input>
      </button>
    );
  }

  renderNoAppId() {
    return (
      <div className="drag-area uploader alert alert-gray">
        <span>{text.createContent.saveBeforeUpload}</span>
      </div>
    );

  }

  render() {

    const inputClasses = Helper.classnames([this.props.className, 'photo-input', 'form-group']);

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
      </div>
    );
  }
}
