import constants from '../../../constants';
import loadImage from 'lib/javascript-load-image/js/load-image';

/* ----- main function to export ----- */

// need to return
// {
//    type: 'image' // since this is the image helper, we shouldn't have gotten here on a different media type
//    file: either the original file or a file blob, extracted from dataURItoBlob(scaled-image's dataUrl);
//    thumb: same format as file
//    width: scaled image width
//    height: scaled image height
//    dataUrl: used if single file for placeholder in main app while upload occurs, used if multi-file for placeholder in MP while upload occurs
// }

const loadImageFromFile = function(file) {
  return new Promise((resolve, reject) => {

    if (file.type.indexOf('gif') >= 0) {
      handleGifFile(file).then(resolve).catch(reject);
    }
    else {
      handleImageFile(file).then(resolve).catch(reject);
    }
  });
};

const handleGifFile = function(file) {
  return new Promise((resolve, reject) => {
    // do some client-side processing to make sure the gif isn't too big
    // (either in dimensions or filesize);

    // since we can't resample or resize gifs client-side, first check the filesize.
    // if it's too big, no sense in continuing...
    if (!validateFileSize(file)) {
      console.warn('gif file size too big!');
      reject({reason: 'filesize'});
      return;
    }

    // we don't know the dimensions of a gif until
    // we make it into an Image object and wait for it to load...

    createNewImage(file).then((img) => {
      // now we have the dimensions, so we can validate them client-side.
      if (!validateDimensions(img)) {
        reject({reason: 'gif dimensions'});
        return;
      }

      // we pass the dimensions back to the requesting function.
      resolveWithData({file, img, dataUrl: 'resources/tpl/viewer/icons/loading-light.gif'}, resolve);

    }).catch(reject); // pass createNewImage rejection along.

  });
};

const handleImageFile = function(file) {
  return new Promise((resolve/*, reject*/) => {
    loadImage(file, (canvas) => {
      var dataUrl = canvas.toDataURL();
      var fileBlob = dataURItoBlob(dataUrl);
      loadImage(file, (canvas) => {
        var thumb = dataURItoBlob(canvas.toDataURL());
        resolveWithData({img: canvas, file: fileBlob, dataUrl, thumb}, resolve);
      }, getPhotoSizeOptions('thumb'));
    }, getPhotoSizeOptions('photo'));
  });
};

/* ----- UTILITY FUNCTIONS ----- */

const resolveWithData = function(options, resolve) {
  resolve(Object.assign({
    type: 'image',
    width: options.img.width,
    height: options.img.height,
    file: options.file
  }, options.dataUrl ? {dataUrl: options.dataUrl} : {},
     options.thumb ? {thumb: options.thumb} : {}
  ));
};

const validateFileSize = function(fileOrBlob) {
  return fileOrBlob.size <= constants.photoSettings.maxFileSize;
};

const validateDimensions = function(imgOrCanvas) {
  return (imgOrCanvas.width <= constants.photoSettings.maxWidth &&
          imgOrCanvas.height <= constants.photoSettings.maxHeight);
};

const createNewImage = function(file) {
  return new Promise((resolve, reject) => {
    // we don't know the dimensions of a gif until
    // we make it into an Image object and wait for it to load...

    const img = new Image();
    const URL = window.URL || window.webkitURL;

    if (!URL) {
      reject({reason: 'no window.URL'});
      return;
    }

    img.src = URL.createObjectURL(file);
    img.onload = function() {
      this.onload = null; // revoke onload listener
      URL.revokeObjectURL(file); // release memory
      resolve(this);
    };

  });
};

const getPhotoSizeOptions = function(type) {
  let maxHeight, maxWidth;
  if (type === 'thumb') {
    maxHeight = Math.max(constants.galleryContent.IMG_HEIGHT, constants.galleryContent.ALBUM_HEIGHT);
  }
  else {
    maxHeight = constants.photoSettings.maxHeight,
    maxWidth = constants.photoSettings.maxWidth;
  }

  return Object.assign({
    canvas: true,
    maxHeight
  }, maxWidth ? {maxWidth} : {});

};

const dataURItoBlob = function(dataURI) {
  let byteString;

  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURI.split(',')[1]);
  }
  else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type: mimeString});
};

export default {
  loadImageFromFile
};