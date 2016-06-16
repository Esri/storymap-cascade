window.addEventListener('DOMContentLoaded', function () {

  'use strict';

  var Loader = window.Loader;
  var QUnit = window.QUnit;
  var image = document.querySelector('.container > img');

  QUnit.test('options.type: image', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'image',
      done: function (image) {
        assert.ok(image instanceof HTMLImageElement);
        done();
      }
    });
  });

  QUnit.test('options.type: canvas', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      done: function (canvas) {
        assert.ok(canvas instanceof HTMLCanvasElement);
        done();
      }
    });
  });

  QUnit.test('options.width: 450', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      width: 450,
      done: function (canvas) {
        assert.equal(canvas.width, 450);
        done();
      }
    });
  });

  QUnit.test('options.height: 800', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      height: 800,
      done: function (canvas) {
        assert.equal(canvas.height, 800);
        done();
      }
    });
  });

  QUnit.test('options.minWidth: 720', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      minWidth: 720,
      done: function (canvas) {
        assert.equal(canvas.width, 720);
        done();
      }
    });
  });

  QUnit.test('options.minHeight: 1280', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      minHeight: 1280,
      done: function (canvas) {
        assert.equal(canvas.height, 1280);
        done();
      }
    });
  });

  QUnit.test('options.maxWidth: 360', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      maxWidth: 360,
      done: function (canvas) {
        assert.equal(canvas.width, 360);
        done();
      }
    });
  });

  QUnit.test('options.maxHeight: 640', function (assert) {
    var done = assert.async();

    return new Loader(image, {
      type: 'canvas',
      maxHeight: 640,
      done: function (canvas) {
        assert.equal(canvas.height, 640);
        done();
      }
    });
  });

});
