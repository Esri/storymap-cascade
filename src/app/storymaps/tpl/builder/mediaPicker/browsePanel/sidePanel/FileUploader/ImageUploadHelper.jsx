import constants from '../../../constants';
import 'lib/loader/dist/loader';

/* ----- main function to export ----- */

const loadImageFromFile = function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {

    let isGif = file.type.indexOf('gif') >= 0;

    if (isGif) {
      if (!validateFileSize(file)) {
        // since we can't resample or resize gifs client-side, first check the filesize.
        // if it's too big, no sense in continuing...
        console.warn('gif file size too big');
        reject({reason: 'filesize'});
        return;
      }
    }

    // for both a gif and an image, we need to make a new Image
    createNewImage(file).then((img) => {
      if (isGif) {
        handleGifFile(file, img).then(resolve).catch(reject);
      }
      else {
        handleImageFile(file, img).then(resolve).catch(reject);
      }
    });
  });
};

/**
 * create image object straight from original file
 */
const createNewImage = function(file) {
  return new Promise((resolve, reject) => {

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

/* ----- top-level handlers ----- */

/** top-level gif handling:
 * if the gif conforms to width/height/size parameters, upload to agol.
 */
const handleGifFile = function handleGifFile(file, img) {
  return new Promise((resolve/*, reject*/) => {
    // (we already checked file size, and we got complaints that the image width check was too narrow,
    // so just go for it -- upload whatever);

    // no more processing available or checking needed, resolve w details
    resolve({
      file: file,
      width: img.width,
      height: img.height,
      dataUrl: 'resources/tpl/viewer/icons/loading-light.gif'
    });

  });

};

/** top-level image handling */
const handleImageFile = function handleImageFile(file, img) {
  return new Promise((resolve, reject) => {
    const options = getLoaderSizeOptions(img, 'photo');
    // convert to dataUrl and possibly resize
    new window.Loader(img, Object.assign(options, {
      done: (loaderImg) => {
        handleLoaderImage(loaderImg, img, file).then(resolve).catch(reject);
      }
    }));
  });
};

/** second-level image handling */

const handleLoaderImage = function handleLoaderImage(loaderImg, origImg, origFile) {
  return new Promise((resolve, reject) => {
    let file = origFile;
    if (!validateDimensions(origImg) || !validateFileSize(file)) {
      file = dataURItoBlob(loaderImg.src);

      if (!validateFileSize(file)) {
        console.warn('need to scale this photo down before upload');
        reject({reason: 'filesize'});
        return;
      }
    }
    generateThumbnailBlob(loaderImg).then((thumb) => {
      resolve({
        type: 'image',
        file,
        thumb,
        width: loaderImg.width,
        height: loaderImg.height,
        dataUrl: loaderImg.src
      });
    }).catch(reject);
  });
};

/* ----- utility functions ----- */

const generateThumbnailBlob = function(origImg) {
  return new Promise((resolve) => {
    const options = getLoaderSizeOptions(origImg, 'thumb');

    // use loader to reduce image size
    new window.Loader(origImg, Object.assign(options, {
      done: (newImg) => {
        resolve(dataURItoBlob(newImg.src));
      }
    }));
  });

};

const validateFileSize = function(fileOrBlob) {
  return fileOrBlob.size <= constants.photoSettings.maxFileSize;
};

const validateDimensions = function(imgOrCanvas) {
  return (imgOrCanvas.width <= constants.photoSettings.maxWidth &&
          imgOrCanvas.height <= constants.photoSettings.maxHeight);
};

const getLoaderSizeOptions = function(img, type) {
  const imgRatio = img.width / img.height;
  if (type === 'thumb') {
    const maxHeight = Math.max(constants.galleryContent.IMG_HEIGHT, constants.galleryContent.ALBUM_HEIGHT);
    return {
      maxHeight: maxHeight
    };
  }
  var maxRatio = constants.photoSettings.maxWidth / constants.photoSettings.maxHeight;

  if (imgRatio < maxRatio && maxRatio > 1) {
    return {
      maxHeight: constants.photoSettings.maxHeight
    };
  }
  return {
    maxWidth: constants.photoSettings.maxWidth
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