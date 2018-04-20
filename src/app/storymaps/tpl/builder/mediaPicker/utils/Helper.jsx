const dataURItoBlob = function dataURItoBlob(dataURI) {
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

const classnames = function classnames() {
  let classes = '';
  const hasOwn = {}.hasOwnProperty;

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];

    if (!arg) {
      continue;
    }

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes += ' ' + arg;
    }
    else if ($.isArray(arg)) {
      classes += ' ' + classnames.apply(null, arg);
    }
    else if (argType === 'object') {
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes += ' ' + key;
        }
      }
    }
  }

  return classes.substr(1);
};

const unescapeBrands = function(target) {
  return target.replace(/\$\{(.*?)}/g, function(brand) {
    return brand.slice(2, -1);
  });
};

const mixinString = function(target, generic, replacement) {
  return target.replace('${' + generic + '}', replacement);
};

const stripTrailingSlash = function(str) {
  if (str.substr(-1) === '/') {
    return str.substr(0, str.length - 1);
  }
  return str;
};

export default {
  classnames,
  dataURItoBlob,
  stripTrailingSlash,
  unescapeBrands,
  mixinString
};