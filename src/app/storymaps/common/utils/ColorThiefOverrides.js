/*
Functions adapted from Color Thief
Color Thief:
https://github.com/lokesh/color-thief
Copyright (c) 2015 Lokesh Dhakar, released under the MIT license
*/
/*
Steven Kitterman note (8-2016)
Modified the following code:

-----------------
| GET PALETTE  |
----------------
if (!imageData) {
  return null;
}

LATER DOWN...
if (!(r > 250 && g > 250 && b > 250)) -> if (!(r > 255 && g > 255 && b > 255))

------------------
| GET IMAGE DATA |
------------------
wrapped getImageData in a try-catch and return null if there's an error caught.
This is because IE will load a non-CORS image even with crossOrigin="anonymous" set, so we need to try-catch in color-thief when it tries to read from the canvas.
*/

/* eslint-disable */
ColorThief.prototype.getPalette = function(sourceImage, colorCount, quality) {

  if (typeof colorCount === 'undefined') {
    colorCount = 10;
  }
  if (typeof quality === 'undefined' || quality < 1) {
    quality = 10;
  }

  // Create custom CanvasImage object
  var image      = new CanvasImage(sourceImage);
  var imageData  = image.getImageData();

  if (!imageData) {
    return null;
  }

  var pixels     = imageData.data;
  var pixelCount = image.getPixelCount();

  // Store the RGB values in an array format suitable for quantize function
  var pixelArray = [];
  for (var i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
    offset = i * 4;
    r = pixels[offset + 0];
    g = pixels[offset + 1];
    b = pixels[offset + 2];
    a = pixels[offset + 3];

    // If pixel is mostly opaque and not white
    if (a >= 125) {
      if (!(r > 255 && g > 255 && b > 255)) {
        pixelArray.push([r, g, b]);
      }
    }
  }

  // Send array to quantize function which clusters values
  // using median cut algorithm
  var cmap    = MMCQ.quantize(pixelArray, colorCount);
  var palette = cmap? cmap.palette() : null;

  // Clean up
  image.removeCanvas();

  return palette;
};


CanvasImage.prototype.getImageData = function () {
  var data = null;
  try {
    data = this.context.getImageData(0, 0, this.width, this.height);
  }

  catch(e) {
    data = null;
  }

  return data;
};
