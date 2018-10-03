import constants from '../../../constants';

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

const loadImageFromFile = function(file, isSingle) {
  return new Promise((resolve, reject) => {

    if (file.type.indexOf('gif') >= 0) {
      handleGifFile(file, isSingle).then(resolve).catch(reject);
    }
    else {
      handleImageFile(file, isSingle).then(resolve).catch(reject);
    }
  });
};

const handleGifFile = function(file, isSingle) {
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
      // (we already checked file size, and we got complaints that the image width check was too narrow,
      // so just go for it -- upload whatever);

      // we pass the dimensions back to the requesting function.
      resolveWithData({file, img, dataUrl: isSingle ? null : constants.fileSettings.blankBackground}, resolve);

    }).catch(reject); // pass createNewImage rejection along.

  });
};

const handleImageFile = function(origFile, isSingle) {
  return new Promise((resolve, reject) => {
    createNewImage(origFile).then((img) => {
      let canvas = createNewCanvas(img, {width: constants.photoSettings.maxWidth});
      let file = origFile;
      let canvasDataUrl;
      if (!checkIdealFileSize(origFile) || !validateDimensions(img)) {
        canvasDataUrl = canvas.toDataURL(origFile.type, constants.photoSettings.quality);
        file = dataURItoBlob(canvasDataUrl);
        if (!validateFileSize(file)) {
          reject({reason: 'compressed filesize'});
          return;
        }
      }
      const thumbHeight = Math.max(constants.galleryContent.IMG_HEIGHT, constants.galleryContent.ALBUM_HEIGHT);
      let thumbCanvas = createNewCanvas(img, {height: thumbHeight});
      let thumbDataUrl = thumbCanvas.toDataURL(origFile.type, constants.photoSettings.quality);
      let thumb = dataURItoBlob(thumbDataUrl);
      let dataUrl = isSingle ? canvasDataUrl : thumbDataUrl;
      resolveWithData({canvas, file, dataUrl, thumb}, resolve);
    }).catch(reject);
  });
};

/* ----- UTILITY FUNCTIONS ----- */

const resolveWithData = function(options, resolve) {
  options.img = options.img || options.canvas;
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
  return fileOrBlob.size <= constants.fileSettings.maxFileSize;
};

const checkIdealFileSize = function(file) {
  return file.size <= constants.photoSettings.idealFileSize;
};

const validateDimensions = function(imgOrCanvas) {
  return (imgOrCanvas.width <= constants.photoSettings.maxWidth);
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

const createNewCanvas = function(img, sizeOptions) {
  let dims = getPhotoSize(img, sizeOptions);
  let canvas = document.createElement('canvas');
  canvas.width = dims.width;
  canvas.height = dims.height;
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, 0, 0, dims.width, dims.height);

  return canvas;
};

const getPhotoSize = function(img, sizeOptions) {
  let height = img.height;
  let width = img.width;
  if (!validateDimensions(img, sizeOptions)) {
    let imgRatio = width / height;
    if (sizeOptions.width) {
      width = sizeOptions.width;
      height = width / imgRatio;
    }
    else if (sizeOptions.height) {
      height = sizeOptions.height;
      width = imgRatio * height;
    }
    else {
      console.warn('sizeOptions dont include width or height', sizeOptions);
    }
  }

  return {
    height: Math.round(height),
    width: Math.round(width)
  };

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
