window.onload = function () {

  'use strict';

  var Loader = window.Loader;
  var URL = window.URL || window.webkitURL;
  var dropzone = document.getElementsByClassName('docs-dropzone')[0];
  var preview = document.getElementsByClassName('docs-preview')[0];
  var loaded = document.getElementsByClassName('docs-loaded')[0];
  var fileInput = dropzone.getElementsByTagName('input')[0];
  var options = {
        done: function (image) {
          loaded.innerHTML = '';
          loaded.appendChild(image);
        }
      };


  function loadImage() {
    return new Loader(preview.getElementsByTagName('img')[0], options);
  }

  function loadImageFromFile(file) {
    var image;

    // Clear loaded image
    loaded.innerHTML = '';

    if (URL) {
      image = new Image();

      image.onload = function () {
        this.onload = null;
        URL.revokeObjectURL(file);
      };

      image.src = URL.createObjectURL(file);

      // Clear chosen file
      fileInput.value = '';

      // Clear existing image
      preview.innerHTML = '';
      preview.appendChild(image);
      return new Loader(image, options);
    }
  }

  // Load default image
  loadImage();

  fileInput.onchange = function (e) {
    var files = e.target.files;

    if (files && files.length) {
      loadImageFromFile(files[0]);
    }
  };

  dropzone.ondragover = function (e) {
    e.preventDefault();
  };

  dropzone.ondrop = function (e) {
    var files = e.dataTransfer.files;

    e.preventDefault();

    if (files && files.length) {
      loadImageFromFile(files[0]);
    }
  };
};
