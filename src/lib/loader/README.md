# Loader

> JavaScript image loader (translates Exif Orientation by canvas).

- [Homepage](http://fengyuanchen.github.io/loader)



## Install

```
npm install @fengyuanchen/loader
```

```html
<script src="/path/to/loader.js"></script>
```



## Usage

```html
<img id="image" src="image.jpg">
```

```js
var image = document.getElementById('image');
var loader = new Loader(image, {
  done: function(image) {
    console.log(image); // HTMLImageElement
  }
});
```



## Options

You may set cropper options with `new Loader(image, options)`.


### type

- Type: `String`
- Default: `'image'`
- Options: `'image'` and `'canvas'`

Define the type of the loaded image or canvas.

```js
new Loader(image, {
  type: 'canvas',
  done: function(canvas) {
    console.log(canvas); // HTMLCanvasElement
    console.log(canvas.toDataURL()); // Data URL
  }
});
```


### width

- Type: `Number`
- Default: `NaN`

Define the new width of the loaded image or canvas. Use the natural width of the original image by default.


### height

- Type: `Number`
- Default: `NaN`

Define the new height of the loaded image or canvas. Use the natural height of the original image by default.



### minWidth

- Type: `Number`
- Default: `0`

Define the minimum width of the loaded image or canvas.


### minHeight

- Type: `Number`
- Default: `0`

Define the minimum height of the loaded image or canvas.


### maxWidth

- Type: `Number`
- Default: `Infinity`

Define the maximum width of the loaded image or canvas.


### maxHeight

- Type: `Number`
- Default: `Infinity`

Define the maximum height of the loaded image or canvas.


### done

- Type: `Function`
- Default: `null`

Load complete callback.

```js
new Loader(image, {
  done: function(image) {
    console.log(image);
  }
});
```



## No conflict

If you have to use other global function with the same namespace, just call the `Loader.noConflict` static method to revert to it.

```html
<script src="other-loader.js"></script>
<script src="loader.js"></script>
<script>
  Loader.noConflict();
  // Code that uses other `Loader` can follow here.
</script>
```



## Browser support

- Chrome (latest 2)
- Firefox (latest 2)
- Internet Explorer 10+
- Opera (latest 2)
- Safari (latest 2)



## License

[MIT](http://opensource.org/licenses/MIT) © [Fengyuan Chen](http://chenfengyuan.com)
