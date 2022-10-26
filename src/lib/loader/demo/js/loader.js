/*!
 * Loader v0.1.1
 * https://github.com/fengyuanchen/loader
 *
 * Copyright (c) 2015 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2015-12-25T06:57:42.553Z
 */

(function (global, factory) {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(global, true);
  } else {
    factory(global);
  }
})(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {

  'use strict';


  // Variables
  // ---------------------------------------------------------------------------

  // Globals
  var ArrayBuffer = window.ArrayBuffer;

  // RegExps
  var REGEXP_DATA_URL = /^data\:/;
  var REGEXP_DATA_URL_HEAD = /^data\:([^\;]+)\;base64,/;
  var REGEXP_DATA_URL_JPEG = /^data\:image\/jpeg.*;base64,/;

  // Maths
  var PI = Math.PI;
  var min = Math.min;
  var max = Math.max;
  var sin = Math.sin;
  var cos = Math.cos;
  var abs = Math.abs;
  var floor = Math.floor;

  // Shortcuts
  var objectProto = Object.prototype;
  var toString = objectProto.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var fromCharCode = String.fromCharCode;


  // Utilities
  // ---------------------------------------------------------------------------

  function typeOf(obj) {
    return toString.call(obj).slice(8, -1).toLowerCase();
  }

  function isNumber(num) {
    return typeof num === 'number' && !isNaN(num);
  }

  function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
  }

  function isPlainObject(obj) {
    var constructor;
    var prototype;

    if (!isObject(obj)) {
      return false;
    }

    try {
      constructor = obj.constructor;
      prototype = constructor.prototype;

      return constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (e) {
      return false;
    }
  }

  function isFunction(fn) {
    return typeOf(fn) === 'function';
  }

  function isArray(arr) {
    return Array.isArray ? Array.isArray(arr) : typeOf(arr) === 'array';
  }

  function toArray(obj, offset) {
    var args = [];

    offset = offset >= 0 ? offset : 0;

    if (Array.from) {
      return Array.from(obj).slice(offset);
    }

    return args.slice.call(obj, offset);
  }

  function each(obj, callback) {
    var length;
    var i;

    if (obj && isFunction(callback)) {
      if (isArray(obj) || isNumber(obj.length)/* array-like */) {
        for (i = 0, length = obj.length; i < length; i++) {
          if (callback.call(obj, obj[i], i, obj) === false) {
            break;
          }
        }
      } else if (isObject(obj)) {
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (callback.call(obj, obj[i], i, obj) === false) {
              break;
            }
          }
        }
      }
    }

    return obj;
  }

  function extend(obj) {
    var args;

    if (arguments.length > 1) {
      args = toArray(arguments);

      if (Object.assign) {
        return Object.assign.apply(Object, args);
      }

      args.shift();

      each(args, function (arg) {
        each(arg, function (prop, i) {
          obj[i] = prop;
        });
      });
    }

    return obj;
  }

  function proxy(fn, context) {
    var args = toArray(arguments, 2);

    return function () {
      return fn.apply(context, args.concat(toArray(arguments)));
    };
  }

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    var i = start;

    for (length += start; i < length; i++) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var length = binary.length;
    var arrayBuffer = new ArrayBuffer(length);
    var dataView = new Uint8Array(arrayBuffer);
    var i;

    for (i = 0; i < length; i++) {
      dataView[i] = binary.charCodeAt(i);
    }

    return arrayBuffer;
  }

  // Only available for JPEG image
  function arrayBufferToDataURL(arrayBuffer) {
    var dataView = new Uint8Array(arrayBuffer);
    var length = dataView.length;
    var base64 = '';
    var i;

    for (i = 0; i < length; i++) {
      base64 += fromCharCode(dataView[i]);
    }

    return 'data:image/jpeg;base64,' + btoa(base64);
  }

  function createImage(url) {
    var image = new Image();

    image.src = url;

    return image;
  }

  function getRotatedSizes(data) {
    var deg = abs(data.degree) % 180;
    var arc = (deg > 90 ? (180 - deg) : deg) * PI / 180;
    var sinArc = sin(arc);
    var cosArc = cos(arc);
    var width = data.width;
    var height = data.height;

    return {
      width: width * cosArc + height * sinArc,
      height: width * sinArc + height * cosArc
    };
  }

  // Constructor
  // ---------------------------------------------------------------------------

  /**
   * Loader constructor
   *
   * @param {HTMLImageElement} image
   * @param {Object} options
   */
  function Loader(image, options) {
    this.image = image;
    this.options = extend({}, Loader.DEFAULTS, isPlainObject(options) && options);
    this.data = null;
    this.init();
  }

  Loader.prototype = {
    constructor: Loader,

    init: function () {
      var _this = this;
      var image = this.image;
      var xhr;
      var url;

      if (image && image.tagName.toLowerCase() === 'img' && image.src) {
        if (!ArrayBuffer) {
          return this.load(image);
        }

        url = image.src;

        // XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
        if (REGEXP_DATA_URL.test(url)) {
          return REGEXP_DATA_URL_JPEG.test(url) ?
            this.read(dataURLToArrayBuffer(url)) :
            this.load(image);
        }

        xhr = new XMLHttpRequest();

        xhr.onerror = xhr.onabort = function () {
          _this.load(image);
        };

        xhr.onload = function () {
          _this.read(this.response);
        };

        xhr.open('get', url);
        xhr.responseType = 'arraybuffer';
        xhr.send();
      } else {
        throw new Error('The given image is not a valid image');
      }
    },

    read: function (arrayBuffer) {
      var orientation = this.readOrientation(arrayBuffer);

      if (orientation > 1) {
        this.translate(orientation);
        this.load(createImage(arrayBufferToDataURL(arrayBuffer)));
      } else {
        this.load(this.image);
      }
    },

    readOrientation: function (arrayBuffer) {
      var dataView = new DataView(arrayBuffer);
      var length = dataView.byteLength;
      var orientation;
      var exifIDCode;
      var tiffOffset;
      var firstIFDOffset;
      var littleEndian;
      var endianness;
      var app1Start;
      var ifdStart;
      var offset;
      var i;

      // Only handle JPEG image (0xFFD8)
      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        offset = 2;

        while (offset < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset++;
        }
      }

      if (app1Start) {
        exifIDCode = app1Start + 4;
        tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
        }
      }

      if (ifdStart) {
        length = dataView.getUint16(ifdStart, littleEndian);

        for (i = 0; i < length; i++) {
          offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

            // Get the original orientation value
            orientation = dataView.getUint16(offset + 8, littleEndian);

            // Override the orientation with the default value: 1
            dataView.setUint16(offset + 8, 1, littleEndian);
            break;
          }
        }
      }

      return orientation;
    },

    translate: function (orientation) {
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      switch (orientation) {

        // horizontal flip
        case 2:
          scaleX = -1;
          break;

        // 180° rotate left
        case 3:
          rotate = -180;
          break;

        // vertical flip
        case 4:
          scaleY = -1;
          break;

        // vertical flip + 90° rotate right
        case 5:
          rotate = 90;
          scaleY = -1;
          break;

        // 90° rotate right
        case 6:
          rotate = 90;
          break;

        // horizontal flip + 90° rotate right
        case 7:
          rotate = 90;
          scaleX = -1;
          break;

        // 90° rotate left
        case 8:
          rotate = -90;
          break;
      }

      this.data = {
        rotate: rotate,
        scaleX: scaleX,
        scaleY: scaleY
      };
    },

    load: function (image) {
      var load = proxy(function () {
            image.removeEventListener('load', load, false);
            this.resize(image);
          }, this);

      if (image.complete) {
        this.resize(image);
      } else {
        image.addEventListener('load', load, false);
      }
    },

    draw: function (image) {
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var data = this.data;
      var x = 0;
      var y = 0;
      var width = image.naturalWidth;
      var height = image.naturalHeight;
      var rotate = data && data.rotate;
      var scaleX = data && data.scaleX;
      var scaleY = data && data.scaleY;
      var scalable = isNumber(scaleX) && isNumber(scaleY) && (scaleX !== 1 || scaleY !== 1);
      var rotatable = isNumber(rotate) && rotate !== 0;
      var advanced = rotatable || scalable;
      var canvasWidth = width;
      var canvasHeight = height;
      var translateX;
      var translateY;
      var rotated;

      if (scalable) {
        translateX = width / 2;
        translateY = height / 2;
      }

      if (rotatable) {
        rotated = getRotatedSizes({
          width: width,
          height: height,
          degree: rotate
        });

        canvasWidth = rotated.width;
        canvasHeight = rotated.height;
        translateX = rotated.width / 2;
        translateY = rotated.height / 2;
      }

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      if (advanced) {
        x = -width / 2;
        y = -height / 2;

        context.save();
        context.translate(translateX, translateY);
      }

      if (rotatable) {
        context.rotate(rotate * PI / 180);
      }

      // Should call `scale` after rotated
      if (scalable) {
        context.scale(scaleX, scaleY);
      }

      context.drawImage(image, floor(x), floor(y), floor(width), floor(height));

      if (advanced) {
        context.restore();
      }

      return canvas;
    },

    resize: function (image) {
      var options = this.options;
      var canvas = this.draw(image);
      var width = canvas.width;
      var height = canvas.height;
      var aspectRatio = width / height;
      var newCanvas = document.createElement('canvas');
      var minWidth = max(0, options.minWidth) || 0;
      var minHeight = max(0, options.minHeight) || 0;
      var maxWidth = max(minWidth, options.maxWidth) || Infinity;
      var maxHeight = max(minHeight, options.maxHeight) || Infinity;
      var newWidth = abs(options.width) || width;
      var newHeight =  abs(options.height) || height;

      if (minWidth > 0 && isFinite(minWidth)) {
        minHeight = minWidth / aspectRatio;
      } else if (minHeight > 0 && isFinite(minHeight)) {
        minWidth = minHeight * aspectRatio;
      }

      if (maxWidth > 0 && isFinite(maxWidth)) {
        maxHeight = maxWidth / aspectRatio;
      } else if (maxHeight > 0 && isFinite(maxHeight)) {
        maxWidth = maxHeight * aspectRatio;
      }

      newWidth = min(max(newWidth, minWidth), maxWidth);
      newHeight = min(max(newHeight, minHeight), maxHeight);

      if (isNumber(newWidth) && isNumber(newHeight)) {
        if (newHeight * aspectRatio > newWidth) {
          newHeight = newWidth / aspectRatio;
        } else {
          newWidth = newHeight * aspectRatio;
        }
      } else {
        newWidth = width;
        newHeight = height;
      }

      newCanvas.width = newWidth;
      newCanvas.height = newHeight;

      newCanvas.getContext('2d').drawImage(
        canvas,
        0, 0, floor(width), floor(height),
        0, 0, floor(newWidth), floor(newHeight)
      );

      this.done(newCanvas);
    },

    done: function (canvas) {
      var options = this.options;
      var result = canvas;

      if (options.type === 'image') {
        result = createImage(canvas.toDataURL());
      }

      if (isFunction(options.done)) {
        options.done.call(this, result);
      }
    }
  };

  Loader.DEFAULTS = {

    // String: the type of the loaded image or canvas
    type: 'image',

    // Number: the size limitation of the loaded image or canvas
    width: NaN,
    height: NaN,
    minWidth: 0,
    minHeight: 0,
    maxWidth: Infinity,
    maxHeight: Infinity,

    // Function: load complete callback
    done: null
  };


  // No Conflict
  // ---------------------------------------------------------------------------

  var _Loader = window.Loader;

  Loader.noConflict = function () {
    window.Loader = _Loader;
    return Loader;
  };


  // Export
  // ---------------------------------------------------------------------------

  if (typeof define === 'function' && define.amd) {
    define('loader', [], function () {
      return Loader;
    });
  }

  if (typeof noGlobal === 'undefined') {
    window.Loader = Loader;
  }

  return Loader;

});
