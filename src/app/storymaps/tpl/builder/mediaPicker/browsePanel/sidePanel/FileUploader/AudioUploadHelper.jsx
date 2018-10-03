import constants from '../../../constants';

/* ----- main function to export ----- */

// need to return
// {
//    type: 'audio' // since this is the audio helper, we shouldn't have gotten here on a different media type
//    file: the original file
//    thumb: need some sort of datauri maybe with an icon?
// }

const loadAudioFromFile = function(file, isSingle) {
  return new Promise((resolve, reject) => {
    handleAudioFile(file, isSingle).then(resolve).catch(reject);
  });
};

const handleAudioFile = function(file, isSingle) {
  return new Promise((resolve, reject) => {
    // do some client-side processing to make sure the gif isn't too big
    // (either in dimensions or filesize);

    // since we can't resample or resize audio client-side, first check the filesize.
    // if it's too big, no sense in continuing...
    if (!validateFileSize(file)) {
      console.warn('gif file size too big!');
      reject({reason: 'filesize'});
      return;
    }

    resolveWithData({file, isSingle}, resolve);

  });
};

/* ----- UTILITY FUNCTIONS ----- */

const resolveWithData = function(options, resolve) {
  options.img = options.img || options.canvas;
  resolve({
    type: 'audio',
    file: options.file,
    dataUrl: options.isSingle
  });
};

const validateFileSize = function(fileOrBlob) {
  return fileOrBlob.size <= constants.fileSettings.maxFileSize;
};

export default {
  loadAudioFromFile
};
