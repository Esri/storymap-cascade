/*
Unite Gallery by Max Viliano, license below:

-----------------------------------------------------------------
The MIT License (MIT)

Copyright (c) 2015 Max Valiano | http://unitegallery.net

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


-------------------------------------------------------------------

/* Adapted by Esri Story Maps team (fewer source files included in minified build, 3-5 functions' behavior modified)
The modified changes are released under the Apache License V2.0 by Esri http://www.esri.com/ - https://github.com/Esri/story-map-cascade

A custom build was made of the unite gallery; only these source files were included:
'ug-functions.js',
'ug-thumbsgeneral.js',
'ug-tiles.js',
'ug-tiledesign.js',
'ug-gallery.js',
'ug-api.js',
'ug-theme-tiles.js'
*/

// Modified changes are annotated below in the code -- marked by /** STEVEN KITTERMAN CHANGE ***/  AND /** END CHANGE **/
// unless the change was a deletion, in that case simply marked as a change.
/*
Change summary:
1) Allow backup dimensions for broken images
2) Added on load event
3) Removed references to lightbox
*/



/**
 * write something to debug line
 */
function debugLine(html,addRandom, addHtml){

	if(html === true)
		html = "true";

	if(html === false)
		html = "false";

	var output = html;

	if(typeof html == "object"){
		output = "";
		for(name in html){
			var value = html[name];
			output += " " + name + ": " + value;
		}
	}

	if(addRandom == true && !addHtml)
		output += " " + Math.random();

	if(addHtml == true){
		var objLine = jQuery("#debug_line");
		objLine.width(200);

		if(objLine.height() >= 500)
			objLine.html("");

		var currentHtml = objLine.html();
		output = currentHtml + "<br> -------------- <br>" + output;
	}

	jQuery("#debug_line").show().html(output);

}

/**
 *
 * debug side some object
 */
function debugSide(obj){

	var html = "";
	for(name in obj){
		var value = obj[name];
		html += name+" : " + value + "<br>";
	}

	jQuery("#debug_side").show().html(html);

}


/**
 * output some string to console
 */
function trace(str){

	if(typeof console != "undefined")
		console.log(str);

}




/** -------------- UgFunctions class ---------------------*/

function UGFunctions(){

	var g_browserPrefix = null;
	var t = this;
	var g_temp = {
		starTime:0,
		arrThemes:[],
		isTouchDevice:-1,
		isRgbaSupported: -1,
		timeCache:{},
		dataCache:{},
		lastEventType:"",		//for validate touchstart click
		lastEventTime:0,
		handle: null			//interval handle
	};

	this.debugVar = "";

	this.z__________FULL_SCREEN___________ = function(){}



	/**
	 * move to full screen mode
	 * fullscreen ID - the ID of current fullscreen
	 */
	this.toFullscreen = function(element, fullscreenID) {

		  if(element.requestFullscreen) {
		    element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
		    element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
		    element.webkitRequestFullscreen();
		  } else if(element.msRequestFullscreen) {
			    element.msRequestFullscreen();
		  } else{
			  return(false);
		  }

		  return(true);
	}


	/**
	 * exit full screen mode
	 * return if operation success (or if fullscreen mode supported)
	 */
	this.exitFullscreen = function() {
		  if(t.isFullScreen() == false)
			  return(false);

		  if(document.exitFullscreen) {
		    document.exitFullscreen();

		  } else if(document.cancelFullScreen) {
			    document.cancelFullScreen();

		  } else if(document.mozCancelFullScreen) {
		    document.mozCancelFullScreen();

		  } else if(document.webkitExitFullscreen) {
		    document.webkitExitFullscreen();

		  } else if(document.msExitFullscreen) {
			    document.msExitFullscreen();

		  }else{
			  return(false);
		  }

		  return(true);
	}

	/**
	 * cross browser attach even function
	 */
	function addEvent(evnt, elem, func) {
		   if (elem.addEventListener)  // W3C DOM
		      elem.addEventListener(evnt,func,false);
		   else if (elem.attachEvent) { // IE DOM
		      elem.attachEvent("on"+evnt, func);
		   }
		   else { // No much to do
		      elem[evnt] = func;
		   }
	}


	/**
	 * add fullscreen event to some function
	 */
	this.addFullScreenChangeEvent = function(func){

		if(document["webkitCancelFullScreen"])
			addEvent("webkitfullscreenchange",document,func);
		else if(document["msExitFullscreen"])
			addEvent("MSFullscreenChange",document,func);
		else if(document["mozCancelFullScreen"])
			addEvent("mozfullscreenchange",document,func);
		else
			addEvent("fullscreenchange",document,func);
	}


	/**
	 * destroy the full screen change event
	 */
	this.destroyFullScreenChangeEvent = function(){

		jQuery(document).unbind("fullscreenChange");
		jQuery(document).unbind("mozfullscreenchange");
		jQuery(document).unbind("webkitfullscreenchange");
		jQuery(document).unbind("MSFullscreenChange");
	}


	/**
	 * get the fullscreen element
	 */
	this.getFullScreenElement = function(){

		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;

		return(fullscreenElement);
	}

	/**
	 * return if fullscreen enabled
	 */
	this.isFullScreen = function(){

		var isFullScreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;

		if(!isFullScreen)
			isFullScreen = false;
		else
			isFullScreen = true;

		return(isFullScreen);
	}



	this.z__________GET_PROPS___________ = function(){}

	/**
	 * get browser prefix, can be empty if not detected.
	 */
	this.getBrowserPrefix = function(){

	   if(g_browserPrefix !== null)
		   return g_browserPrefix;

	   var arrayOfPrefixes = ['webkit','Moz','ms','O'];

	   var div = document.createElement("div");

	   for(var index in arrayOfPrefixes){
		   var prefix = arrayOfPrefixes[index];

		   if(prefix+"Transform" in div.style){
			   prefix = prefix.toLowerCase();
			   g_browserPrefix = prefix;
			   return(prefix);
		   }
	   }

	   g_browserPrefix = "";
	   return "";
	}

	/**
	 * get image inside parent data by image (find parent and size)
	 * scaleMode: fit, down, fill, fitvert
	 */
	this.getImageInsideParentDataByImage = function(objImage, scaleMode, objPadding){

		var objParent = objImage.parent();

		var objOrgSize = t.getImageOriginalSize(objImage);

		var objData = t.getImageInsideParentData(objParent, objOrgSize.width, objOrgSize.height, scaleMode, objPadding);

		return(objData);
	}


	/**
	 * get data of image inside parent
	 * scaleMode: fit, down, fill, fitvert
	 */
	this.getImageInsideParentData = function(objParent, originalWidth, originalHeight, scaleMode, objPadding, maxWidth, maxHeight){

		if(!objPadding)
			var objPadding = {};

		var objOutput = {};

		if(typeof maxWidth === "undefined")
			var maxWidth = objParent.width();

		if(typeof maxHeight === "undefined")
			var maxHeight = objParent.height();

		if(objPadding.padding_left)
			maxWidth -= objPadding.padding_left;

		if(objPadding.padding_right)
			maxWidth -= objPadding.padding_right;

		if(objPadding.padding_top)
			maxHeight -= objPadding.padding_top;

		if(objPadding.padding_bottom)
			maxHeight -= objPadding.padding_bottom;

		var imageWidth = null;
		var imageHeight = "100%";
		var imageTop = null;
		var imageLeft = null;
		var style = "display:block;margin:0px auto;";

		if(originalWidth > 0 && originalHeight > 0){

			//get image size and position

			if(scaleMode == "down" && originalWidth < maxWidth && originalHeight < maxHeight){

				imageHeight = originalHeight;
				imageWidth = originalWidth;
				imageLeft = (maxWidth - imageWidth) / 2;
				imageTop = (maxHeight - imageHeight) / 2;

			}else if(scaleMode == "fill"){
				var ratio = originalWidth / originalHeight;

				imageHeight = maxHeight;
				imageWidth = imageHeight * ratio;

				if(imageWidth < maxWidth){
					imageWidth = maxWidth;
					imageHeight = imageWidth / ratio;

					//center y position
					imageLeft = 0;
					imageTop = Math.round((imageHeight - maxHeight) / 2 * -1);
				}else{	//center x position
					imageTop = 0;
					imageLeft = Math.round((imageWidth - maxWidth) / 2 * -1);
				}

			}
			else{		//fit to borders
				var ratio = originalWidth / originalHeight;
				imageHeight = maxHeight;
				imageWidth = imageHeight * ratio;
				imageTop = 0;
				imageLeft = (maxWidth - imageWidth) / 2;

				if(scaleMode != "fitvert" && imageWidth > maxWidth){
					imageWidth = maxWidth;
					imageHeight = imageWidth / ratio;
					imageLeft = 0;
					imageTop = (maxHeight - imageHeight) / 2;
				}

			}

			imageWidth = Math.floor(imageWidth);
			imageHeight = Math.floor(imageHeight);

			imageTop = Math.floor(imageTop);
			imageLeft = Math.floor(imageLeft);

			style="position:absolute;";
		}

		//set padding
		if(objPadding.padding_top)
			imageTop += objPadding.padding_top;

		if(objPadding.padding_left)
			imageLeft += objPadding.padding_left;

		objOutput.imageWidth = imageWidth;
		objOutput.imageHeight = imageHeight;
		objOutput.imageTop = imageTop;
		objOutput.imageLeft = imageLeft;
		objOutput.imageRight = imageLeft + imageWidth;
		if(imageTop == 0 || imageHeight == "100%")
			objOutput.imageBottom = null;
		else
			objOutput.imageBottom = imageTop + imageHeight;

		objOutput.style = style;

		return(objOutput);
	}


	/**
	 * get element center position inside parent
	 * even if the object bigger than the parent
	 */
	this.getElementCenterPosition = function(element, objPadding){

		var parent = element.parent();
		var objSize = t.getElementSize(element);
		var objSizeParent = t.getElementSize(parent);

		var parentWidth = objSizeParent.width;
		var parentHeight = objSizeParent.height;

		if(objPadding && objPadding.padding_top !== undefined)
			parentHeight -= objPadding.padding_top;

		if(objPadding && objPadding.padding_bottom !== undefined)
			parentHeight -= objPadding.padding_bottom;

		if(objPadding && objPadding.padding_left !== undefined)
			parentWidth -= objPadding.padding_left;

		if(objPadding && objPadding.padding_right !== undefined)
			parentWidth -= objPadding.padding_right;


		var output = {};
		output.left = Math.round((parentWidth - objSize.width) / 2);
		output.top = Math.round((parentHeight - objSize.height) / 2);

		if(objPadding && objPadding.padding_top !== undefined)
			output.top += objPadding.padding_top;

		if(objPadding && objPadding.padding_left !== undefined)
			output.left += objPadding.padding_left;


		return(output);
	}


	/**
	 * get the center of the element
	 * includeParent - including left / right related to the parent
	 */
	this.getElementCenterPoint = function(element, includeParent){

		if(!includeParent)
			var includeParent = false;

		var objSize = t.getElementSize(element);
		var output = {};

		output.x =  objSize.width / 2;
		output.y =  objSize.height / 2;

		if(includeParent == true){
			output.x += objSize.left;
			output.y += objSize.top;
		}

		output.x = Math.round(output.x);
		output.y = Math.round(output.y);

		return(output);
	}


	/**
	 *
	 * get mouse position from the event
	 * optimised to every device
	 */
	this.getMousePosition = function(event, element){

		var output = {
			pageX: 	event.pageX,
			pageY: 	event.pageY,
			clientX: 	event.clientX,
			clientY: 	event.clientY
		};

		if(event.originalEvent && event.originalEvent.touches && event.originalEvent.touches.length > 0){
			output.pageX = event.originalEvent.touches[0].pageX;
			output.pageY = event.originalEvent.touches[0].pageY;
			output.clientX = event.originalEvent.touches[0].clientX;
			output.clientY = event.originalEvent.touches[0].clientY;
		}

		/**
		 * get element's mouse position
		 */
		if(element){
			var elementPos = element.offset();
			output.mouseX = output.pageX - elementPos.left;
			output.mouseY = output.pageY - elementPos.top;
		}

		return(output);
	}

	/**
	 * get mouse element related point from page related point
	 */
	this.getMouseElementPoint = function(point, element){

		//rename the input and output
		var newPoint = {x: point.pageX, y: point.pageY};

		var elementPoint = t.getElementLocalPoint(newPoint, element);

		return(elementPoint);
	}


	/**
	 * get element local point from global point position
	 */
	this.getElementLocalPoint = function(point, element){

		var elementPoint = {};
		var elementPos = element.offset();

		elementPoint.x = Math.round(point.x - elementPos.left);
		elementPoint.y = Math.round(point.y - elementPos.top);

		return(elementPoint);
	}


	/**
	 * get image oritinal size
	 * if originalWidth, originalHeight is set, just return them.
	 */
	this.getImageOriginalSize = function(objImage, originalWidth, originalHeight){

		if(typeof originalWidth != "undefined" && typeof originalHeight != "undefined")
			return({width:originalWidth, height:originalHeight});

		var htmlImage = objImage[0];

		if(typeof htmlImage == "undefined")
			throw new Error("getImageOriginalSize error - Image not found");

		var output = {};

		/************ STEVEN KITTERMAN CHANGE -- ALLOW GETTING BACKUP DIMENSIONS FOR BROKEN IMAGES  *************/
		if(typeof htmlImage.naturalWidth == "undefined" || (htmlImage.naturalWidth === 0 && htmlImage.naturalHeight === 0)){
		/************ END CHANGE ************/

			//check from cache
			if(typeof objImage.data("naturalWidth") == "number"){
				var output = {};
				output.width = objImage.data("naturalWidth");
				output.height = objImage.data("naturalHeight");
				return(output);
			}

		   //load new image
		   var newImg = new Image();
	       newImg.src = htmlImage.src;

	       if (newImg.complete) {
	        	output.width = newImg.width;
	        	output.height = newImg.height;

	        	//caching
				objImage.data("naturalWidth", output.width);
				objImage.data("naturalHeight", output.height);
	        	return(output);

	       }

				 /************ STEVEN KITTERMAN CHANGE -- ALLOW GETTING BROKEN DIMENSIONS FOR BROKEN IMAGES ************/
	       return({width:objImage.data('backupWidth'),height:objImage.data('backupHeight')});
				 /************ END CHANGE ************/

		}else{

			output.width = htmlImage.naturalWidth;
			output.height = htmlImage.naturalHeight;

			return(output);
		}

	}


	/**
	 * get current image ratio from original size
	 */
	this.getimageRatio = function(objImage){

		var originalSize = t.getImageOriginalSize(objImage);
		var size = t.getElementSize(objImage);
		var ratio = size.width / originalSize.width;

		return(ratio);
	}

	/**
	 * tells if the image fit the parent (smaller then the parent)
	 */
	this.isImageFitParent = function(objImage){
		var objParent = objImage.parent();
		var sizeImage = t.getElementSize(objImage);
		var sizeParent = t.getElementSize(objParent);

		if(sizeImage.width <= sizeParent.width && sizeImage.height <= sizeParent.height)
			return(true);

		return(false);
	}

	/**
	 * get size and position of some object
	 */
	this.getElementSize = function(element){

		if(element === undefined){
			throw new Error("Can't get size, empty element");
		}

		var obj = element.position();

		obj.height = element.outerHeight();
		obj.width = element.outerWidth();

		obj.left = Math.round(obj.left);
		obj.top = Math.round(obj.top);

		obj.right = obj.left + obj.width;
		obj.bottom = obj.top + obj.height;

		return(obj);
	}



	/**
	 * return true if the element is bigger then it's parent
	 */
	this.isElementBiggerThenParent = function(element){

		var objParent = element.parent();
		var objSizeElement = t.getElementSize(element);
		var objSizeParent = t.getElementSize(objParent);

		if(objSizeElement.width > objSizeParent.width || objSizeElement.height > objSizeParent.height)
			return(true);

		return(false);
	}


	/**
	 * tells if the mouse point inside image
	 * the mouse point is related to image pos
	 */
	this.isPointInsideElement = function(point, objSize){

		var isMouseXInside = (point.x >= 0 && point.x < objSize.width);
		if(isMouseXInside == false)
			return(false);

		var isMouseYInside = (point.y >= 0 && point.y < objSize.height);
		if(isMouseYInside == false)
			return(false);

		return(true);
	}


	/**
	 * get element relative position according the parent
	 * if the left / top is offset text (left , center, right / top, middle , bottom)
	 * the element can be number size as well
	 */
	this.getElementRelativePos = function(element, pos, offset, objParent){

		if(!objParent)
			var objParent = element.parent();

		if(typeof element == "number"){
			var elementSize = {
					width: element,
					height: element
			};
		}else
			var elementSize = t.getElementSize(element);

		var parentSize = t.getElementSize(objParent);


		switch(pos){
			case "top":
			case "left":
				pos = 0;
				if(offset)
					pos += offset;
			break;
			case "center":
				pos = Math.round((parentSize.width - elementSize.width) / 2);
				if(offset)
					pos += offset;

			break;
			case "right":
				pos = parentSize.width - elementSize.width;
				if(offset)
					pos -= offset;
			break;
			case "middle":
				pos = Math.round((parentSize.height - elementSize.height) / 2);
				if(offset)
					pos += offset;
			break;
			case "bottom":
				pos = parentSize.height - elementSize.height;
				if(offset)
					pos -= offset;
			break;
		}

		return(pos);
	}



	this.z_________SET_ELEMENT_PROPS_______ = function(){}


	/**
	 *
	 * zoom image inside parent
	 * the mouse point is page offset position, can be null
	 * return true if zoomed and false if not zoomed
	 */
	this.zoomImageInsideParent = function(objImage, zoomIn, step, point, scaleMode, maxZoomRatio, objPadding){

		if(!step)
			var step = 1.2;

		if(!scaleMode)
			var scaleMode = "fit";

		var zoomRatio = step;

		var objParent = objImage.parent();

		var objSize = t.getElementSize(objImage);
		var objOriginalSize = t.getImageOriginalSize(objImage);


		var isMouseInside = false;
		var newHeight,newWidth, panX = 0, panY = 0, newX, newY,panOrientX = 0, panOrientY = 0;

		if(!point){
			isMouseInside = false;
		}else{
			var pointImg = t.getMouseElementPoint(point, objImage);
			isMouseInside = t.isPointInsideElement(pointImg, objSize);

			//if mouse point outside image, set orient to image center
			panOrientX = pointImg.x;
			panOrientY = pointImg.y;
		}

		if(isMouseInside == false){
			var imgCenterPoint = t.getElementCenterPoint(objImage);
			panOrientX = imgCenterPoint.x;
			panOrientY = imgCenterPoint.y;
		}

		//zoom:
		if(zoomIn == true){		//zoom in

			newHeight = objSize.height * zoomRatio;
			newWidth =  objSize.width * zoomRatio;

			if(panOrientX != 0)
				panX = -(panOrientX * zoomRatio - panOrientX);

			if(panOrientY != 0)
				panY = -(panOrientY * zoomRatio - panOrientY);


		}else{		//zoom out

			newHeight = objSize.height / zoomRatio;
			newWidth =  objSize.width / zoomRatio;

			var objScaleData = t.getImageInsideParentData(objParent, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);

			//go back to original size
			if(newWidth < objScaleData.imageWidth){

				t.scaleImageFitParent(objImage, objOriginalSize.width, objOriginalSize.height, scaleMode, objPadding);
				return(true);
			}

			if(isMouseInside == true){
				if(panOrientX != 0)
					panX = -(panOrientX / zoomRatio - panOrientX);

				if(panOrientY != 0)
					panY = -(panOrientY / zoomRatio - panOrientY);
			}

		}

		//check max zoom ratio, ix exeeded, abort
		if(maxZoomRatio){
			var expectedZoomRatio = 1;
			if(objOriginalSize.width != 0)
				expectedZoomRatio = newWidth / objOriginalSize.width;

			if(expectedZoomRatio > maxZoomRatio)
				return(false);
		}

		//resize the element
		t.setElementSize(objImage, newWidth, newHeight);

		//set position:

		//if zoom out and mouse point not inside image,
		//get the image to center
		if(zoomIn == false && isMouseInside == false){
			var posCenter = t.getElementCenterPosition(objImage);
			newX = posCenter.left;
			newY = posCenter.top;
		}else{

			newX = objSize.left + panX;
			newY = objSize.top + panY;
		}

		t.placeElement(objImage, newX, newY);

		return(true);
	}



	/**
	 * place some element to some position
	 * if the left / top is offset text (left , center, right / top, middle , bottom)
	 * then put it in parent by the offset.
	 */
	this.placeElement = function(element, left, top, offsetLeft, offsetTop, objParent){


		if(jQuery.isNumeric(left) == false || jQuery.isNumeric(top) == false){

			if(!objParent)
				var objParent = element.parent();

			var elementSize = t.getElementSize(element);
			var parentSize = t.getElementSize(objParent);
		}

		//select left position
		if(jQuery.isNumeric(left) == false){

			switch(left){
				case "left":
					left = 0;
					if(offsetLeft)
						left += offsetLeft;
				break;
				case "center":
					left = Math.round((parentSize.width - elementSize.width) / 2);
					if(offsetLeft)
						left += offsetLeft;
				break;
				case "right":
					left = parentSize.width - elementSize.width;
					if(offsetLeft)
						left -= offsetLeft;
				break;
			}
		}

		//select top position
		if(jQuery.isNumeric(top) == false){

			switch(top){
				case "top":
					top = 0;
					if(offsetTop)
						top += offsetTop;
				break;
				case "middle":
				case "center":
					top = Math.round((parentSize.height - elementSize.height) / 2);
					if(offsetTop)
						top += offsetTop;
				break;
				case "bottom":
					top = parentSize.height - elementSize.height;
					if(offsetTop)
						top -= offsetTop;
				break;
			}

		}


		var objCss = {
				"position":"absolute",
				"margin":"0px"
		};

		if(left !== null)
			objCss.left = left;

		if(top !== null)
			objCss.top = top;

		element.css(objCss);
	}


	/**
	 * place element inside parent center.
	 * the element should be absolute position
	 */
	this.placeElementInParentCenter = function(element){

		t.placeElement(element, "center", "middle");
	}


	/**
	 * set element size and position
	 */
	this.setElementSizeAndPosition = function(element,left,top,width,height){

		var objCss = {
			"width":width+"px",
			"height":height+"px",
			"left":left+"px",
			"top":top+"px",
			"position":"absolute",
			"margin":"0px"
		}

		element.css(objCss);
	}

	/**
	 * set widht and height of the element
	 */
	this.setElementSize = function(element, width, height){

	    var objCss = {
			"width":width+"px"
		}

	    if(height !== null && typeof height != "undefined")
	    	objCss["height"] = height+"px"

		element.css(objCss);
	}


	/**
	 * clone element size and position
	 */
	this.cloneElementSizeAndPos = function(objSource, objTarget, isOuter, offsetX, offsetY){

		var objSize = objSource.position();

		if(objSize == undefined){
			throw new Error("Can't get size, empty element");
		}

		if(isOuter === true){
			objSize.height = objSource.outerHeight();
			objSize.width = objSource.outerWidth();
		}else{
			objSize.height = objSource.height();
			objSize.width = objSource.width();
		}

		objSize.left = Math.round(objSize.left);
		objSize.top = Math.round(objSize.top);

		if(offsetX)
			objSize.left += offsetX;

		if(offsetY)
			objSize.top += offsetY;

		t.setElementSizeAndPosition(objTarget, objSize.left, objSize.top, objSize.width, objSize.height);
	}


	/**
	 * place image inside parent, scale it by the options
	 * and scale it to fit the parent.
	 * scaleMode: fit, down, fill
	 */
	this.placeImageInsideParent = function(urlImage, objParent, originalWidth, originalHeight, scaleMode, objPadding){
		var obj = t.getImageInsideParentData(objParent, originalWidth, originalHeight, scaleMode, objPadding);

		//set html image:
		var htmlImage = "<img";

		if(obj.imageWidth !== null){
			htmlImage += " width = '" + obj.imageWidth + "'";
			obj.style += "width:" + obj.imageWidth + ";";
		}

		if(obj.imageHeight != null){

			if(obj.imageHeight == "100%"){
				htmlImage += " height = '" + obj.imageHeight+"'";
				obj.style += "height:" + obj.imageHeight+";";
			}else{
				htmlImage += " height = '" + obj.imageHeight + "'";
				obj.style += "height:" + obj.imageHeight + "px;";
			}

		}

		if(obj.imageTop !== null)
			obj.style += "top:"+obj.imageTop+"px;";

		if(obj.imageLeft !== null){
			obj.style += "left:"+obj.imageLeft+"px;";
		}

		urlImage = t.escapeDoubleSlash(urlImage);

		htmlImage += " style='"+obj.style+"'";
		htmlImage += " src=\""+urlImage+"\"";
		htmlImage += ">";

		objParent.html(htmlImage);

		//return the image just created
		var objImage = objParent.children("img");

		return(objImage);
	}


	/**
	 * scale image to fit parent, and place it into parent
	 * parent can be width , height, or object
	 */
	this.scaleImageCoverParent = function(objImage, objParent, pHeight){

		if(typeof objParent == "number"){
			var parentWidth = objParent;
			var parentHeight = pHeight;
		}else{
			var parentWidth = objParent.outerWidth();
			var parentHeight = objParent.outerHeight();
		}

		var objOriginalSize = t.getImageOriginalSize(objImage);

		var imageWidth = objOriginalSize.width;
		var imageHeight = objOriginalSize.height;

		var ratio = imageWidth / imageHeight;

		var fitHeight = parentHeight;
		var fitWidth = fitHeight * ratio;
		var posy = 0, posx = 0;

		if(fitWidth < parentWidth){
			fitWidth = parentWidth;
			fitHeight = fitWidth / ratio;

			//center y position
			posx = 0;
			posy = Math.round((fitHeight - parentHeight) / 2 * -1);
		}else{	//center x position
			posy = 0;
			posx = Math.round((fitWidth - parentWidth) / 2 * -1);
		}

		fitWidth = Math.round(fitWidth);
		fitHeight = Math.round(fitHeight);

		objImage.css({"width":fitWidth+"px",
					  "height":fitHeight+"px",
					  "left":posx+"px",
					  "top":posy+"px"});
	}




	/**
	 * resize image to fit the parent, scale it by the options
	 * scaleMode: fit, down, fill
	 */
	this.scaleImageFitParent = function(objImage, originalWidth, originalHeight, scaleMode, objPadding){

		var objParent = objImage.parent();

		var obj = t.getImageInsideParentData(objParent, originalWidth, originalHeight, scaleMode, objPadding);

		var updateCss = false;

		var objCss = {};

		if(obj.imageWidth !== null){
			updateCss = true
			objImage.removeAttr("width");
			objCss["width"] = obj.imageWidth+"px";
		}

		if(obj.imageHeight != null){
			updateCss = true
			objImage.removeAttr("height");
			objCss["height"] = obj.imageHeight+"px";
		}

		if(obj.imageTop !== null){
			updateCss = true;
			objCss.top = obj.imageTop+"px";
		}

		if(obj.imageLeft !== null){
			updateCss = true;
			objCss.left = obj.imageLeft+"px";
		}

		if(updateCss == true){

			objCss.position = "absolute";
			objCss.margin = "0px 0px";

			objImage.css(objCss);
		}


		return(obj);
	}


	/**
	 * scale image by height
	 */
	this.scaleImageByHeight = function(objImage, height, originalWidth, originalHeight){

		var objOriginalSize = t.getImageOriginalSize(objImage, originalWidth, originalHeight);

		var ratio = objOriginalSize.width / objOriginalSize.height;
		var width = Math.round(height * ratio);
		height = Math.round(height);

		t.setElementSize(objImage, width, height);
	}


	/**
	 * scale image by height
	 */
	this.scaleImageByWidth = function(objImage, width, originalWidth, originalHeight){

		var objOriginalSize = t.getImageOriginalSize(objImage, originalWidth, originalHeight);

		var ratio = objOriginalSize.width / objOriginalSize.height;

		var height = Math.round(width / ratio);
		width = Math.round(width);

		t.setElementSize(objImage, width, height);

	}


	/**
	 * scale image to exact size in parent, by setting image size and padding
	 */
	this.scaleImageExactSizeInParent = function(objImage, originalWidth, originalHeight, exactWidth, exactHeight, scaleMode){

		var objParent = objImage.parent();
		var parentSize = t.getElementSize(objParent);

		if(parentSize.width < exactWidth)
			exactWidth = parentSize.width;

		if(parentSize.height < exactHeight)
			exactHeight = parentSize.height;

		var obj = t.getImageInsideParentData(null, originalWidth, originalHeight, scaleMode, null, exactWidth, exactHeight);

		var imageWidth = exactWidth;
		var imageHeight = exactHeight;

		var paddingLeft = obj.imageLeft;
		var paddingRight = obj.imageLeft;
		var paddingTop = obj.imageTop;
		var paddingBottom = obj.imageTop;
		var imageLeft = Math.round((parentSize.width - exactWidth) / 2);
		var imageTop = Math.round((parentSize.height - exactHeight) / 2);

		var totalWidth = obj.imageWidth + paddingLeft + paddingRight;
		var diff = exactWidth - totalWidth;
		if(diff != 0)
			paddingRight += diff;

		var totalHeight = obj.imageHeight + paddingTop + paddingBottom;

		var diff = exactHeight - totalHeight;
		if(diff != 0)
			paddingBottom += diff;

		//update css:
		objImage.removeAttr("width");
		objImage.removeAttr("height");

		var objCss = {
				position: "absolute",
				margin: "0px 0px"
		};

		objCss["width"] = imageWidth+"px";
		objCss["height"] = imageHeight+"px";
		objCss["left"] = imageLeft+"px";
		objCss["top"] = imageTop+"px";
		objCss["padding-left"] = paddingLeft+"px";
		objCss["padding-top"] = paddingTop+"px";
		objCss["padding-right"] = paddingRight+"px";
		objCss["padding-bottom"] = paddingBottom+"px";

		objImage.css(objCss);

		//return size object

		var objReturn = {};
		objReturn["imageWidth"] = imageWidth;
		objReturn["imageHeight"] = imageHeight;
		return(objReturn);
	}


	/**
	 * show some element and make opacity:1
	 */
	this.showElement = function(element, element2, element3){

		element.show().fadeTo(0,1);

		if(element2)
			element2.show().fadeTo(0,1);

		if(element3)
				element3.show().fadeTo(0,1);

	}


	this.z_________GALLERY_RELATED_FUNCTIONS_______ = function(){}

	/**
	 * disable button
	 */
	this.disableButton = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";

		if(t.isButtonDisabled(objButton, className) == false)
			objButton.addClass(className);
	}


	/**
	 * convert custom prefix options
	 * prefix - the prefix.
	 * base - after the prefix text. example lightbox_slider_option (lightbox - prefix, slider - base)
	 */
	this.convertCustomPrefixOptions = function(objOptions, prefix, base){

		if(!prefix)
			return(objOptions);

		var modifiedOptions = {};

		jQuery.each(objOptions, function(key, option){

			if(key.indexOf(prefix + "_"+base+"_") === 0){
				var newKey = key.replace(prefix+"_"+base+"_", base+"_");
				modifiedOptions[newKey] = option;
			}else{
				modifiedOptions[key] = option;
			}

		});

		return(modifiedOptions);
	}


	/**
	 * enable button
	 */
	this.enableButton = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";

		if(t.isButtonDisabled(objButton, className) == true)
			objButton.removeClass(className);
	}


	/**
	 * check if some buggon disabled
	 */
	this.isButtonDisabled = function(objButton, className){
		if(!className)
			var className = "ug-button-disabled";

		if(objButton.hasClass(className))
			return(true);

		return(false);
	}



	this.z_________MATH_FUNCTIONS_______ = function(){}

	/**
	 *
	 * normalize the value for readable "human" setting value.
	 */
	this.normalizeSetting = function(realMin, realMax, settingMin, settingMax, value, fixBounds){
		if(!fixBounds)
			var fixBounds = false;

		var ratio = (value - settingMin)  / (settingMax - settingMin);
		value = realMin + (realMax - realMin) * ratio;

		if(fixBounds == true){
			if(value < realMin)
				value = realMin;

			if(value > realMax)
				value = realMax;
		}

		return(value);
	}


	/**
	 *
	 * get "real" setting from normalized setting
	 */
	this.getNormalizedValue = function(realMin, realMax, settingMin, settingMax, realValue){

		var ratio = (realValue - realMin)  / (realMax - realMin);
		realValue = realMin + (settingMax - settingMin) * ratio;

		return(realValue);
	}


	/**
	 * get distance between 2 points
	 */
	this.getDistance = function(x1,y1,x2,y2) {

		var distance = Math.round(Math.sqrt(Math.abs(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)))));

		return distance;
	}


	/**
	 * get center point of the 2 points
	 */
	this.getMiddlePoint = function(x1,y1,x2,y2){
		var output = {}
		output.x = x1 + Math.round((x2 - x1) / 2);
		output.y = y1 + Math.round((y2 - y1) / 2);

		return(output);
	}


	/**
	 * get number of items in space width gap
	 * even item sizes
	 * by lowest
	 */
	this.getNumItemsInSpace = function(spaceSize, itemsSize, gapSize){
		var numItems = Math.floor((spaceSize + gapSize) / (itemsSize + gapSize));
		return(numItems);
	}

	/**
	 * get number of items in space width gap
	 * even item sizes
	 * by Math.round
	 */
	this.getNumItemsInSpaceRound = function(spaceSize, itemsSize, gapSize){
		var numItems = Math.round((spaceSize + gapSize) / (itemsSize + gapSize));
		return(numItems);
	}

	/**
	 * get space (width in carousel for example) by num items, item size, and gap size
	 */
	this.getSpaceByNumItems = function(numItems, itemSize, gapSize){
		var space = numItems * itemSize + (numItems-1) * gapSize;
		return(space);
	}


	/**
	 * get item size by space and gap
	 */
	this.getItemSizeInSpace = function(spaceSize, numItems, gapSize){
		var itemSize = Math.floor((spaceSize - (numItems-1) * gapSize) / numItems);

		return(itemSize);
	}


	/**
	 * get column x pos with even column sizes, start from 0
	 */
	this.getColX = function(col, colWidth, colGap){

		var posx = col * (colWidth + colGap);

		return posx;
	}


	/**
	 * get column number by index
	 */
	this.getColByIndex = function(numCols, index){
		var col = index % numCols;
		return(col);
	}


	/**
	 * get col and row by index
	 */
	this.getColRowByIndex = function(index, numCols){

		var row = Math.floor(index / numCols);
		var col = Math.floor(index % numCols);

		return({col:col,row:row});
	}


	/**
	 * get index by row, col, numcols
	 */
	this.getIndexByRowCol = function(row, col, numCols){

		if(row < 0)
			return(-1);

		if(col < 0)
			return(-1);

		var index = row * numCols + col;
		return(index);
	}

	/**
	 * get previous row item in the same column
	 */
	this.getPrevRowSameColIndex = function(index, numCols){
		var obj = t.getColRowByIndex(index, numCols);
		var prevIndex = t.getIndexByRowCol(obj.row-1, obj.col, numCols);
		return(prevIndex);
	}

	/**
	 * get next row item in the same column
	 */
	this.getNextRowSameColIndex = function(index, numCols){
		var obj = t.getColRowByIndex(index, numCols);
		var nextIndex = t.getIndexByRowCol(obj.row+1, obj.col, numCols);
		return(nextIndex);
	}


	this.z_________DATA_FUNCTIONS_______ = function(){}


	/**
	 * set data value
	 */
	this.setGlobalData = function(key, value){

		jQuery.data(document.body, key, value);

	}

	/**
	 * get global data
	 */
	this.getGlobalData = function(key){

		var value = jQuery.data(document.body, key);

		return(value);
	}

	this.z_________EVENT_DATA_FUNCTIONS_______ = function(){}


	/**
	 * handle scroll top, return if scroll mode or not
	 */
	this.handleScrollTop = function(storedEventID){

		if(t.isTouchDevice() == false)
			return(null);

		var objData = t.getStoredEventData(storedEventID);

		var horPass = 15;
		var vertPass = 15;

		//check if need to set some movement
		if(objData.scrollDir === null){

			if(Math.abs(objData.diffMouseX) > horPass)
				objData.scrollDir = "hor";
			else
				if(Math.abs(objData.diffMouseY) > vertPass && Math.abs(objData.diffMouseY) > Math.abs(objData.diffMouseX) ){
					objData.scrollDir = "vert";
					objData.scrollStartY = objData.lastMouseClientY;
					objData.scrollOrigin = jQuery(document).scrollTop();

					g_temp.dataCache[storedEventID].scrollStartY = objData.lastMouseClientY;
					g_temp.dataCache[storedEventID].scrollOrigin = objData.scrollOrigin;
				}

			//update scrollDir
			g_temp.dataCache[storedEventID].scrollDir = objData.scrollDir;
		}

		if(objData.scrollDir !== "vert")
			return(objData.scrollDir);


		var currentScroll = jQuery(document).scrollTop();

		var scrollPos = objData.scrollOrigin - (objData.lastMouseClientY - objData.scrollStartY);

		if(scrollPos >= 0)
			jQuery(document).scrollTop(scrollPos);

		return(objData.scrollDir);
	}


	/**
	 * return true / false if was vertical scrolling
	 */
	this.wasVerticalScroll = function(storedEventID){
		var objData = t.getStoredEventData(storedEventID);

		if(objData.scrollDir === "vert")
			return(true);

		return(false);
	}


	/**
	 * store event data
	 */
	this.storeEventData = function(event, id, addData){

		var mousePos = t.getMousePosition(event);
		var time = jQuery.now();

		var obj = {
				startTime: time,
				lastTime: time,
				startMouseX: mousePos.pageX,
				startMouseY: mousePos.pageY,
				lastMouseX: mousePos.pageX,
				lastMouseY: mousePos.pageY,

				startMouseClientY: mousePos.clientY,
				lastMouseClientY: mousePos.clientY,

				scrollTop: jQuery(document).scrollTop(),
				scrollDir: null
		};

		if(addData)
			obj = jQuery.extend(obj, addData);

		g_temp.dataCache[id] = obj;

	}


	/**
	 * update event data with last position
	 */
	this.updateStoredEventData = function(event, id, addData){

		if(!g_temp.dataCache[id])
			throw new Error("updateEventData error: must have stored cache object");

		var obj = g_temp.dataCache[id];

		var mousePos = t.getMousePosition(event);
		obj.lastTime = jQuery.now();

		if(mousePos.pageX !== undefined){
			obj.lastMouseX = mousePos.pageX;
			obj.lastMouseY = mousePos.pageY;
			obj.lastMouseClientY = mousePos.clientY;
		}

		if(addData)
			obj = jQuery.extend(obj, addData);

		g_temp.dataCache[id] = obj;
	}

	/**
	 * get stored event data
	 */
	this.getStoredEventData = function(id, isVertical){
		if(!g_temp.dataCache[id])
			throw new Error("updateEventData error: must have stored cache object");

		var obj = g_temp.dataCache[id];

		obj.diffMouseX = obj.lastMouseX - obj.startMouseX;
		obj.diffMouseY = obj.lastMouseY - obj.startMouseY;

		obj.diffMouseClientY = obj.lastMouseClientY - obj.startMouseClientY;

		obj.diffTime = obj.lastTime - obj.startTime;

		//get mouse position according orientation
		if(isVertical === true){
			obj.startMousePos = obj.lastMouseY;
			obj.lastMousePos = obj.lastMouseY;
			obj.diffMousePos = obj.diffMouseY;
		}else{
			obj.startMousePos = obj.lastMouseX;
			obj.lastMousePos = obj.lastMouseX;
			obj.diffMousePos = obj.diffMouseX;
		}

		return(obj);
	}

	/**
	 * return if click event approved according the done motion
	 */
	this.isApproveStoredEventClick = function(id, isVertical){

		if(!g_temp.dataCache[id])
			return(true);

		var objData = t.getStoredEventData(id, isVertical);

		var passedDistanceAbs = Math.abs(objData.diffMousePos);

		if(objData.diffTime > 400)
			return(false);

		if(passedDistanceAbs > 30)
			return(false);

		return(true);

	}


	/**
	 * clear stored event data
	 */
	this.clearStoredEventData = function(id){
		g_temp.dataCache[id] = null;
	}

	this.z_________CHECK_SUPPORT_FUNCTIONS_______ = function(){}



	/**
	 * is canvas exists in the browser
	 */
	this.isCanvasExists = function(){

		var canvas = jQuery('<canvas width="500" height="500" > </canvas>')[0];

		if(typeof canvas.getContext == "function")
			return(true);

		return(false);
	}

	/**
	 * tells if vertical scrollbar exists
	 */
	this.isScrollbarExists = function(){
		var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
		return(hasScrollbar);
	}

	/**
	 * check if this device are touch enabled
	 */
	this.isTouchDevice = function(){

		  //get from cache
		  if(g_temp.isTouchDevice !== -1)
			  return(g_temp.isTouchDevice);

		  try{
			  document.createEvent("TouchEvent");
			  g_temp.isTouchDevice = true;
		  }
		  catch(e){
			  g_temp.isTouchDevice = false;
		  }

		  return(g_temp.isTouchDevice);
	}



	/**
	 * check if
	 */
	this.isRgbaSupported = function(){

		if(g_temp.isRgbaSupported !== -1)
			return(g_temp.isRgbaSupported);

		var scriptElement = document.getElementsByTagName('script')[0];
		var prevColor = scriptElement.style.color;
		try {
			scriptElement.style.color = 'rgba(1,5,13,0.44)';
		} catch(e) {}
		var result = scriptElement.style.color != prevColor;
		scriptElement.style.color = prevColor;

		g_temp.isRgbaSupported = result;

		return result;
	}

	this.z_________GENERAL_FUNCTIONS_______ = function(){}


	/**
	 * check if current jquery version is more then minimal version
	 * version can be "1.8.0" for example
	 */
	this.checkMinJqueryVersion = function(version){

	   var arrCurrent = jQuery.fn.jquery.split('.');
       var arrMin = version.split('.');

	  for (var i=0, len=arrCurrent.length; i<len; i++) {

		  var numCurrent = parseInt(arrCurrent[i]);
	      var numMin = parseInt(arrMin[i]);

	      if(typeof arrMin[i] == "undefined")
	    	  return(true);

	      if(numMin > numCurrent)
	    	  return(false);

	      if(numCurrent > numMin)
	    	  return(true);
	  }


	  //if all equal then all ok
	  return true;
	}


	/**
	 * get css size parameter, like width. if % given, leave it, if number without px - add px.
	 */
	this.getCssSizeParam = function(sizeParam){
		if(jQuery.isNumeric(sizeParam))
			return(sizeParam + "px");

		return(sizeParam);
	}

	/**
	 * convert hex color to rgb color
	 */
	this.convertHexToRGB = function(hexInput, opacity){

		var hex = hexInput.replace('#','');
	    if(hex === hexInput)
	    	return(hexInput);

	    r = parseInt(hex.substring(0,2), 16);
	    g = parseInt(hex.substring(2,4), 16);
	    b = parseInt(hex.substring(4,6), 16);
	    result = 'rgba('+r+','+g+','+b+','+opacity+')';
	    return result;
	}

	/**
	 * get timestamp to string
	 */
	this.timestampToString = function(stamp){

		var d = new Date(stamp);
		var str = d.getDate() + "/" + d.getMonth();
		str += " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds();

		return(str);
	}

	/**
	 * get touches array (if exists) from the event
	 */
	this.getArrTouches = function(event){

		var arrTouches = [];

		if(event.originalEvent && event.originalEvent.touches && event.originalEvent.touches.length > 0){
			arrTouches = event.originalEvent.touches;
		}

		return(arrTouches);
	}

	/**
	 * extract touch positions from arrTouches
	 */
	this.getArrTouchPositions = function(arrTouches){

		var arrOutput = [];

		for(var i=0;i<arrTouches.length;i++){

			var point = {
				pageX:arrTouches[i].pageX,
				pageY:arrTouches[i].pageY
			};

			arrOutput.push(point);
		}

		return(arrOutput);
	}


	/**
	 * start time debug
	 */
	this.startTimeDebug = function(){
		g_temp.starTime = jQuery.now();
	}

	/**
	 * show time debug
	 */
	this.showTimeDebug = function(){

		var endTime = jQuery.now();
		var diffTime = endTime - g_temp.starTime;

		debugLine({"Time Passed": diffTime},true);
	}


	/**
	 * put progress indicator to some parent by type
	 * return the progress indicator object
	 */
	this.initProgressIndicator = function(type, options, objParent){

		//check canvas compatability
		if(type != "bar" && t.isCanvasExists() == false)
			type = "bar";

		//put the progress indicator
		switch(type){
			case "bar":
				var g_objProgress = new UGProgressBar();
				g_objProgress.putHidden(objParent, options);
			break;
			default:
			case "pie":
				var g_objProgress = new UGProgressPie();
				g_objProgress.putHidden(objParent, options);
			break;
			case "pie2":
				options.type_fill = true;

				var g_objProgress = new UGProgressPie();
				g_objProgress.putHidden(objParent, options);
			break;
		}

		return(g_objProgress);
	}


	/**
	 * add to button ug-nohover class on ipad
	 * need to be processed in css
	 */
	this.setButtonMobileReady = function(objButton){

		objButton.on("touchstart",function(event){
			//event.preventDefault();
			jQuery(this).addClass("ug-nohover");
		});

		objButton.on("mousedown touchend",function(event){

			//debugLine("button touchend",true,true);
			//event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			//debugLine(event.type, true, true);

			return(false);
		});

	}


	/**
	 * register gallery theme
	 */
	this.registerTheme = function(themeName){

		g_temp.arrThemes.push(themeName);
	}

	/**
	 * get themes array
	 */
	this.getArrThemes = function(){

		return(g_temp.arrThemes);
	}


	/**
	 * check if theme exists
	 */
	this.isThemeRegistered = function(theme){

		if(jQuery.inArray(theme, g_temp.arrThemes) !== -1)
			return(true);

		return(false);
	}

	/**
	 * get first registered theme name
	 */
	this.getFirstRegisteredTheme = function(){
		if(g_temp.arrThemes.length == 0)
			return("");
		var themeName = g_temp.arrThemes[0];

		return(themeName);
	}




	/**
	 * function checks if enought time passsed between function calls.
	 * good for filtering same time events
	 */
	this.isTimePassed = function(handlerName, timeLimit){

		if(!timeLimit)
			var timeLimit = 100;

		var currentTime = jQuery.now();
		if(g_temp.timeCache.hasOwnProperty(handlerName) == false)
			lastTime = 0;
		else
			lastTime = g_temp.timeCache[handlerName];

		var diffTime = currentTime - lastTime;

		g_temp.timeCache[handlerName] = currentTime;

		//debugLine(diffTime,true,true);

		if(diffTime <= timeLimit)
			return(false);

		return(true);
	}


	/**
	 * check if continious event is over like resize
	 */
	this.whenContiniousEventOver = function(handlerName, onEventOver, timeLimit){

		if(!timeLimit)
			var timeLimit = 300;


		if(g_temp.timeCache.hasOwnProperty(handlerName) == true && g_temp.timeCache[handlerName] != null){
			clearTimeout(g_temp.timeCache[handlerName]);
			g_temp.timeCache[handlerName] = null;
		}

		g_temp.timeCache[handlerName] = setTimeout(onEventOver, timeLimit);
	}


	/**
	 * validate click and touchstart events.
	 * if click comes after touchstart, return false.
	 */
	this.validateClickTouchstartEvent = function(eventType){

		var returnVal = true;

		var diff = jQuery.now() - g_temp.lastEventTime;

		//debugLine({lastType:g_temp.lastEventType, diff:diff},true, true);

		if(eventType == "click" && g_temp.lastEventType == "touchstart" && diff < 1000)
			returnVal = false;

		g_temp.lastEventTime = jQuery.now();
		g_temp.lastEventType = eventType;

		return(returnVal);
	}

	/**
	 * add some class on hover (hover event)
	 */
	this.addClassOnHover = function(element,className){
		if(!className)
			var className = "ug-button-hover";

		element.hover(function(){
			jQuery(this).addClass(className);
		},function(){
			jQuery(this).removeClass(className);
		});

	}

	/**
	 * destroy hover effect on elements
	 */
	this.destroyButton = function(element){
		element.off("mouseenter");
		element.off("mouseleave");
		element.off("click");
		element.off("touchstart");
		element.off("touchend");
		element.off("mousedown");
	}

	/**
	 * set button on click event, advanced
	 */
	this.setButtonOnClick = function(objButton, onClickFunction){

		t.setButtonMobileReady(objButton);

		objButton.on("click touchstart", function(event){

			objThis = jQuery(this);

			event.stopPropagation();
			event.stopImmediatePropagation();

			if(t.validateClickTouchstartEvent(event.type) == false)
				return(true);

			onClickFunction(objThis, event);
		});

	}

	/**
	 * load javascript dynamically
	 */
	this.loadJs = function(url, addProtocol){

		if(addProtocol === true)
			url = location.protocol + "//" + url;

		var tag = document.createElement('script');
		tag.src = url;
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	/**
	 * load css dymanically
	 */
	this.loadCss = function(url, addProtocol){
		if(addProtocol === true)
			url = location.protocol + "//" + url;

		var tag=document.createElement("link");
		  tag.setAttribute("rel", "stylesheet");
		  tag.setAttribute("type", "text/css");
		  tag.setAttribute("href", url);

		document.getElementsByTagName("head")[0].appendChild(tag);
	}

	/**
	 * add event listener with old browsers fallback
	 */
	 this.addEvent = function(elem, event, func ) {

		 if (typeof (elem.addEventListener) != "undefined") {
			 elem.addEventListener(event, func, false);
		    } else if (elem.attachEvent) {
		    	elem.attachEvent('on' + event, func);
		  }

	  }




	/**
	 * fire event where all images are loaded
	 */
	this.checkImagesLoaded = function(objImages, onComplete, onProgress){

		var arrImages = [];
		var counter = 0;
		var numImages = objImages.length;

		//if no images - exit
		if(numImages == 0 && onComplete){
			onComplete();
			return(false);
		}

		//nested function
		function checkComplete(image, isError){
			counter++;

			if(typeof onProgress == "function"){

				setTimeout(function(){
					onProgress(image, isError);
				});
			}

			if(counter == numImages && typeof onComplete == "function"){
				setTimeout(function(){
					onComplete();
				});
			}

		}


		//start a little later
		setTimeout(function(){

			//start the function
			for(var index=0;index < numImages; index++){
				var image = objImages[index];

				//arrImages.push(jQuery(image));
				if(image.naturalWidth !== undefined && image.naturalWidth !== 0){
					checkComplete(objImages[index], false);
				}
				else{
					var proxyImage = jQuery('<img/>');
					proxyImage.data("index", index);

					proxyImage.on("load", function(){
						var index = jQuery(this).data("index");
						checkComplete(objImages[index], false);
					});
					proxyImage.on("error", function(){
						var index = jQuery(this).data("index");
						checkComplete(objImages[index], true);
					});
					proxyImage.attr("src", image.src);
				}
			}

		});


	}


	/**
	 * run the function when the element size will be not 0
	 */
	this.waitForWidth = function(element, func){
		var width = element.width();
		if(width != 0){
			func();
			return(false);
		}

		g_temp.handle = setInterval(function(){
			width = element.width();
			if(width != 0){
				clearInterval(g_temp.handle);
				func();
			}

		}, 300);

	}

	/**
	 * shuffle (randomise) array
	 */
	this.arrayShuffle = function(arr){

		if(typeof arr != "object")
			return(arr);

	    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
	    return arr;
	}


	/**
	 * get object length
	 */
	this.getObjectLength = function(object){
		var num = 0;
		for(var item in object)
			num++;
		return num;
	}

	/**
	 * normalize the percent, return always between 0 and 1
	 */
	this.normalizePercent = function(percent){

		if(percent < 0)
			percent = 0;

		if(percent > 1)
			percent = 1;

		return(percent);
	}


	/**
	 * strip tags from string
	 */
	this.stripTags = function(html){

		var text = html.replace(/(<([^>]+)>)/ig,"");

		return(text);
	}


	/**
	 * escape double slash
	 */
	this.escapeDoubleSlash = function(str){

		return str.replace('"','\"');
	}


	/**
	 * html entitles
	 */
	this.htmlentitles = function(html){
		var text = jQuery('<div/>').text(html).html();
		return(text);
	}


	this.z_________END_GENERAL_FUNCTIONS_______ = function(){}

}



var g_ugFunctions = new UGFunctions();


/** -------------- END UgFunctions class ---------------------*/



function UGThumbsGeneral(){

	var t = this, g_objThis = jQuery(t);

	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper;
	var g_arrItems, g_objStrip, g_objParent;
	var g_functions = new UGFunctions();
	var g_strip;
	var outer_options;

	this.events = {
		SETOVERSTYLE: "thumbmouseover",
		SETNORMALSTYLE: "thumbmouseout",
		SETSELECTEDSTYLE: "thumbsetselected",

		PLACEIMAGE: "thumbplaceimage",
		AFTERPLACEIMAGE: "thumb_after_place_image",
		IMAGELOADERROR: "thumbimageloaderror",
		THUMB_IMAGE_LOADED: "thumb_image_loaded"
	};

	var g_options = {
			thumb_width:88,								//thumb width
			thumb_height:50,							//thumb height
			thumb_fixed_size: true,						//true,false - fixed/dynamic thumbnail width
			thumb_resize_by: "height",					//set resize by width or height of the image in case of non fixed size,

			thumb_border_effect:true,					//true, false - specify if the thumb has border
			thumb_border_width: 0,						//thumb border width
			thumb_border_color: "#000000",				//thumb border color
			thumb_over_border_width: 0,					//thumb border width in mouseover state
			thumb_over_border_color: "#d9d9d9",			//thumb border color in mouseover state
			thumb_selected_border_width: 1,				//thumb width in selected state
			thumb_selected_border_color: "#d9d9d9",		//thumb border color in selected state

			thumb_round_corners_radius:0,				//thumb border radius

			thumb_color_overlay_effect: true,			//true,false - thumb color overlay effect, release the overlay on mouseover and selected states
			thumb_overlay_color: "#000000",				//thumb overlay color
			thumb_overlay_opacity: 0.4,					//thumb overlay color opacity
			thumb_overlay_reverse:false,				//true,false - reverse the overlay, will be shown on selected state only

			thumb_image_overlay_effect: false,			//true,false - images orverlay effect on normal state only
			thumb_image_overlay_type: "bw",				//bw , blur, sepia - the type of image effect overlay, black and white, sepia and blur.

			thumb_transition_duration: 200,				//thumb effect transition duration
			thumb_transition_easing: "easeOutQuad",		//thumb effect transition easing

			thumb_show_loader: true,					//show thumb loader while loading the thumb
			thumb_loader_type: "dark",					//dark, light - thumb loader type

			thumb_wrapper_as_link: false,				//set thumb as link
			thumb_link_newpage: false					//set the link to open newpage
		}

		var g_temp = {
			touchEnabled: false,
			num_thumbs_checking:0,
			customThumbs:false,
			funcSetCustomThumbHtml:null,
			isEffectBorder: false,
			isEffectOverlay: false,
			isEffectImage: false,
			colorOverlayOpacity: 1,
			thumbInnerReduce: 0,
			allowOnResize: true		//allow onresize event
		};


		var g_serviceParams = {			//service variables
			timeout_thumb_check:100,
			thumb_max_check_times:600,	//60 seconds
			eventSizeChange: "thumb_size_change"
		};

		/**
		 * init the thumbs object
		 */
		this.init = function(gallery, customOptions){
			g_objects = gallery.getObjects();
			g_gallery = gallery;
			g_objGallery = jQuery(gallery);
			g_objWrapper = g_objects.g_objWrapper;
			g_arrItems = g_objects.g_arrItems;

			g_options = jQuery.extend(g_options, customOptions);

			//set effects vars:
			g_temp.isEffectBorder = g_options.thumb_border_effect;
			g_temp.isEffectOverlay = g_options.thumb_color_overlay_effect;
			g_temp.isEffectImage = g_options.thumb_image_overlay_effect;

		}

		this._____________EXTERNAL_SETTERS__________ = function(){};

		/**
		 * append the thumbs html to some parent
		 */
		this.setHtmlThumbs = function(objParent){

			g_objParent = objParent;

			var numItems = g_gallery.getNumItems();

			//set image effect class
			if(g_temp.isEffectImage == true){
				var imageEffectClass = getImageEffectsClass();
			}

			 //append thumbs to strip
			 for(var i=0;i<numItems;i++){

				 var objItem = g_arrItems[i];

				 var classAddition = "";
				 if(g_temp.customThumbs == false)
					 classAddition = " ug-thumb-generated";

				var zIndex = objItem.index + 1;
				var thumbStyle = "style='z-index:"+zIndex+";'";

			 	var htmlThumb = "<div class='ug-thumb-wrapper"+classAddition+"' " + thumbStyle + "></div>";

				 if(g_options.thumb_wrapper_as_link == true){
					 var urlLink = objItem.link;
					 if(objItem.link == "")
						 urlLink = "javascript:void(0)";

					 var linkTarget = "";
						if(g_options.thumb_link_newpage == true && objItem.link)
							linkTarget = " target='_blank'";

					 var htmlThumb = "<a href='" + urlLink + "'"+linkTarget+" class='ug-thumb-wrapper"+classAddition+"'></a>";
				 }

				 var objThumbWrapper = jQuery(htmlThumb);

				 var objImage = objItem.objThumbImage;

				 if(g_temp.customThumbs == false){

					 if(g_options.thumb_show_loader == true && objImage){

						 var loaderClass = "ug-thumb-loader-dark";
						 if(g_options.thumb_loader_type == "bright")
							 loaderClass = "ug-thumb-loader-bright";

						 objThumbWrapper.append("<div class='ug-thumb-loader " + loaderClass + "'></div>");
						 objThumbWrapper.append("<div class='ug-thumb-error' style='display:none'></div>");
					 }

					 if(objImage){
						 objImage.addClass("ug-thumb-image");

						 //if image overlay effects active, clone the image, and set the effects class on it
						 if(g_options.thumb_image_overlay_effect == true){
							var objImageOverlay = objImage.clone().appendTo(objThumbWrapper);

							objImageOverlay.addClass("ug-thumb-image-overlay " + imageEffectClass).removeClass("ug-thumb-image");
							objImageOverlay.fadeTo(0,0);
							objItem.objImageOverlay = objImageOverlay;
						 }

						 objThumbWrapper.append(objImage);
					 }

				 }//end if not custom thumb

				 if(g_temp.isEffectBorder)
					 objThumbWrapper.append("<div class='ug-thumb-border-overlay'></div>");

				 if(g_temp.isEffectOverlay)
					 objThumbWrapper.append("<div class='ug-thumb-overlay'></div>");

				 g_objParent.append(objThumbWrapper);

				 //only custom thumbs function
				 if(g_temp.customThumbs){

					 g_temp.funcSetCustomThumbHtml(objThumbWrapper, objItem);

				 }

				 //add thumb wrapper object to items array
				 g_arrItems[i].objThumbWrapper = objThumbWrapper;

			 }
		}


		function _______________SETTERS______________(){};


		/**
		 * set thumb size with all the inside components (without the image).
		 * else, set to all the thumbs
		 */
		function setThumbSize(width, height, objThumb, innerOnly){

			var objCss = {
				width: width+"px",
				height: height+"px"
			};

			var objCssInner = {
					width: width-g_temp.thumbInnerReduce+"px",
					height: height-g_temp.thumbInnerReduce+"px"
				};

			var selectorsString = ".ug-thumb-loader, .ug-thumb-error, .ug-thumb-border-overlay, .ug-thumb-overlay";

			//set thumb size
			if(objThumb){
				if(innerOnly !== true)
					objThumb.css(objCss);

				objThumb.children(selectorsString).css(objCssInner);
			}
			else{	//set to all items
				g_objParent.children(".ug-thumb-wrapper").css(objCss);
				g_objParent.find(selectorsString).css(objCssInner);
			}

		}


		/**
		 * set thumb border effect
		 */
		function setThumbBorderEffect(objThumb, borderWidth, borderColor, noAnimation){

			if(!noAnimation)
				var noAnimation = false;

			if(g_gallery.isFakeFullscreen())
				noAnimation = true;

			var objBorderOverlay = objThumb.children(".ug-thumb-border-overlay");

			//set the border to thumb and not to overlay if no border size transition
			/*
			if(g_options.thumb_border_width == g_options.thumb_over_border_width
				&& g_options.thumb_border_width == g_options.thumb_selected_border_width)
				objBorderOverlay = objThumb;
			*/

			var objCss = {};

			objCss["border-width"] = borderWidth + "px";

			if(borderWidth != 0)
				objCss["border-color"] = borderColor;

			if(noAnimation && noAnimation === true){
				objBorderOverlay.css(objCss);

				if(borderWidth == 0)
					objBorderOverlay.hide();
				else
					objBorderOverlay.show();
			}
			else{

				if(borderWidth == 0)
					objBorderOverlay.stop().fadeOut(g_options.thumb_transition_duration);
				else
					objBorderOverlay.show().stop().fadeIn(g_options.thumb_transition_duration);

				animateThumb(objBorderOverlay, objCss);
			}

		}


		/**
		 * set thumb border effect
		 */
		function setThumbColorOverlayEffect(objThumb, isActive, noAnimation){

			var objOverlay = objThumb.children(".ug-thumb-overlay");

			var animationDuration = g_options.thumb_transition_duration;
			if(noAnimation && noAnimation === true)
				animationDuration = 0;

			if(isActive){
				objOverlay.stop(true).fadeTo(animationDuration, g_temp.colorOverlayOpacity);
			}else{
				objOverlay.stop(true).fadeTo(animationDuration, 0);
			}

		}


		/**
		 * set thumbnail bw effect
		 */
		function setThumbImageOverlayEffect(objThumb, isActive, noAnimation){

			var objImage = objThumb.children("img.ug-thumb-image");
			var objImageOverlay = objThumb.children("img.ug-thumb-image-overlay");

			var animationDuration = g_options.thumb_transition_duration;
			if(noAnimation && noAnimation === true)
				animationDuration = 0;

			if(isActive){
				objImageOverlay.stop(true).fadeTo(animationDuration,1);
			}else{
				//show the image, hide the overlay
				objImage.fadeTo(0,1);
				objImageOverlay.stop(true).fadeTo(animationDuration,0);
			}

		}


		/**
		 * on thumb mouse out - return the thumb style to original
		 */
		this.setThumbNormalStyle = function(objThumb, noAnimation, fromWhere){

			if(g_temp.customThumbs == true){
				objThumb.removeClass("ug-thumb-over");
			}

			if(g_temp.isEffectBorder)
			  setThumbBorderEffect(objThumb, g_options.thumb_border_width, g_options.thumb_border_color, noAnimation);

			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?false:true;
				setThumbColorOverlayEffect(objThumb, isSet, noAnimation);
			}

			if(g_temp.isEffectImage){
				setThumbImageOverlayEffect(objThumb, true, noAnimation);
			}

			g_objThis.trigger(t.events.SETNORMALSTYLE, objThumb);
		}


		/**
		 * on thumb mouse over - turn thumb style to over position
		 */
		this.setThumbOverStyle = function(objThumb){

			if(g_temp.customThumbs == true){
				objThumb.addClass("ug-thumb-over");
			}

			//border effect
			if(g_temp.isEffectBorder)
				setThumbBorderEffect(objThumb, g_options.thumb_over_border_width, g_options.thumb_over_border_color);

			//color overlay effect
			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?true:false;
				setThumbColorOverlayEffect(objThumb, isSet);
			}

			//image overlay effect
			if(g_temp.isEffectImage == true){
				setThumbImageOverlayEffect(objThumb, false);
			}

			//trigger event for parent classes
			g_objThis.trigger(t.events.SETOVERSTYLE, objThumb);
		}


		/**
		 * set thumb selected style
		 */
		function setThumbSelectedStyle(objThumb, noAnimation){

			if(g_temp.isEffectBorder)
				setThumbBorderEffect(objThumb, g_options.thumb_selected_border_width, g_options.thumb_selected_border_color, noAnimation);

			if(g_temp.isEffectOverlay){
				var isSet = (g_options.thumb_overlay_reverse == true)?true:false;
				setThumbColorOverlayEffect(objThumb, isSet, noAnimation);
			}

			//image overlay effect
			if(g_temp.isEffectImage)
				setThumbImageOverlayEffect(objThumb, false, noAnimation);


			g_objThis.trigger(t.events.SETSELECTEDSTYLE, objThumb);

		}


		/**
		 * set loading error of the thumb
		 */
		function setItemThumbLoadedError(objThumb){

			var objItem = t.getItemByThumb(objThumb);

			objItem.isLoaded = true;
			objItem.isThumbImageLoaded = false;

			if(g_temp.customThumbs == true){

				g_objThis.trigger(t.events.IMAGELOADERROR, objThumb);
				return(true);

			}

			objThumb.children(".ug-thumb-loader").hide();
			objThumb.children(".ug-thumb-error").show();
		}


		/**
		 * set border radius of all the thmbs
		 */
		function setThumbsBorderRadius(){

			if(g_options.thumb_round_corners_radius <= 0)
				return(false);

			//set radius:
			var objCss = {
				"border-radius":g_options.thumb_round_corners_radius + "px"
			};

			g_objParent.find(".ug-thumb-wrapper, .ug-thumb-wrapper .ug-thumb-border-overlay").css(objCss);

		}


		/**
		 * animate thumb transitions
		 */
		function animateThumb(objThumb, objThumbCss){

			objThumb.stop(true).animate(objThumbCss ,{
				duration: g_options.thumb_transition_duration,
				easing: g_options.thumb_transition_easing,
				queue: false
			});

		}


		/**
		 * redraw the thumb style according the state
		 */
		function redrawThumbStyle(objThumb){

			if(isThumbSelected(objThumb) == true)
				setThumbSelectedStyle(objThumb, true, "redraw");
			else
				t.setThumbNormalStyle(objThumb, true, "redraw");
		}




		/**
		 * place thumb image
		 * retrun - false, if already loaded
		 * return true - if was set on this function
		 * isForce - set the image anyway
		 */
		function placeThumbImage(objThumb, objImage, objItem){

			//scale the image
			if(g_options.thumb_fixed_size == true){
				g_functions.scaleImageCoverParent(objImage, objThumb);
			}
			else{

				//variant size

				if(g_options.thumb_resize_by == "height")	//horizontal strip
					g_functions.scaleImageByHeight(objImage, g_options.thumb_height);
				else		//vertical strip
					g_functions.scaleImageByWidth(objImage, g_options.thumb_width);

				var imageSize = g_functions.getElementSize(objImage);
				g_functions.placeElement(objImage, 0, 0);
				setThumbSize(imageSize.width, imageSize.height, objThumb);

			}

			//hide loader
			objThumb.children(".ug-thumb-loader").hide();

			//show image
			objImage.show();

			//if overlay effect exists
			if(g_options.thumb_image_overlay_effect == false){
				objImage.fadeTo(0,1);
			}
			else{

				//place bw image also if exists
				if(g_options.thumb_image_overlay_effect == true){
					copyPositionToThumbOverlayImage(objImage);
				}

				//hide the original image (avoid blinking at start)
				objImage.fadeTo(0,0);

				//redraw the style, because this function can overwrite it
				redrawThumbStyle(objThumb);
			}

			g_objThis.trigger(t.events.AFTERPLACEIMAGE, objThumb);

		}



		/**
		 * copy image position to bw image (if exists)
		 */
		function copyPositionToThumbOverlayImage(objImage){

			var objImageBW = objImage.siblings(".ug-thumb-image-overlay");
			if(objImageBW.length == 0)
				return(false);

			var objSize = g_functions.getElementSize(objImage);

			var objCss = {
					"width":objSize.width+"px",
					"height":objSize.height+"px",
					"left":objSize.left+"px",
					"top":objSize.top+"px"
				}

			objImageBW.css(objCss);

			//show the image
			if(g_temp.customThumbs == false)
				objImageBW.fadeTo(0,1);

		}




		function _______________GETTERS______________(){};


		/**
		 * get the image effects class from the options
		 */
		function getImageEffectsClass(){

			var imageEffectClass = "";
			var arrEffects = g_options.thumb_image_overlay_type.split(",");

			for(var index in arrEffects){
				var effect = arrEffects[index];

				switch(effect){
					case "bw":
						imageEffectClass += " ug-bw-effect";
					break;
					case "blur":
						imageEffectClass += " ug-blur-effect";
					break;
					case "sepia":
						imageEffectClass += " ug-sepia-effect";
					break;
				}
			}

			return(imageEffectClass);
		}

		/**
		 * get if the thumb is selected
		 */
		function isThumbSelected(objThumbWrapper){

			if(objThumbWrapper.hasClass("ug-thumb-selected"))
				return(true);

			return(false);
		}


		function _______________EVENTS______________(){};

		/**
		 * on thumb size change - triggered by parent on custom thumbs type
		 */
		function onThumbSizeChange(temp, objThumb){

			objThumb = jQuery(objThumb);
			var objItem = t.getItemByThumb(objThumb);

			var objSize = g_functions.getElementSize(objThumb);

			setThumbSize(objSize.width, objSize.height, objThumb, true);

			redrawThumbStyle(objThumb);
		}


		/**
		 * on thumb mouse over
		 */
		function onMouseOver(objThumb){


			//if touch enabled unbind event
			if(g_temp.touchEnabled == true){
				objThumbs.off("mouseenter").off("mouseleave");
				return(true);
			}

			if(isThumbSelected(objThumb) == false)
				t.setThumbOverStyle(objThumb);

		}


		/**
		 * on thumb mouse out
		 */
		function onMouseOut(objThumb){

			if(g_temp.touchEnabled == true)
				return(true);

			if(isThumbSelected(objThumb) == false)
				t.setThumbNormalStyle(objThumb, false);
		}


		/**
		 * on image loaded event
		 */
		function onImageLoaded(image, isForce){

			if(!isForce)
				var isForce = false;

			var objImage = jQuery(image);
			var objThumb = objImage.parents(".ug-thumb-wrapper");

			if(objThumb.parent().length == 0)		//don't treat detached thumbs
				return(false);

			objItem = t.getItemByThumb(objThumb);

			if(objItem.isLoaded == true && isForce === false)
				return(false);

			t.triggerImageLoadedEvent(objThumb, objImage);

			if(g_temp.customThumbs == true){

				g_objThis.trigger(t.events.PLACEIMAGE, [objThumb, objImage]);

			}else{

				placeThumbImage(objThumb, objImage, objItem);

			}

		}


		/**
		 * on image loaded - set appropriete item vars
		 */
		function onThumbImageLoaded(data, objThumb, objImage){

			objItem = t.getItemByThumb(objThumb);

			objItem.isLoaded = true;
			objItem.isThumbImageLoaded = true;

			var objSize = g_functions.getImageOriginalSize(objImage);

			objItem.thumbWidth = objSize.width;
			objItem.thumbHeight = objSize.height;
			objItem.thumbRatioByWidth = objSize.width / objSize.height;
			objItem.thumbRatioByHeight = objSize.height / objSize.width;

		}


		/**
		 * set thumbnails html properties
		 */
		this.setHtmlProperties = function(){

			 //set thumb params
			if(g_temp.customThumbs == false){
				var objThumbCss = {};

				//set thumb fixed size
				if(g_options.thumb_fixed_size == true)
					setThumbSize(g_options.thumb_width, g_options.thumb_height);

				 setThumbsBorderRadius();
			}

			 //set normal style to all the thumbs
			 g_objParent.children(".ug-thumb-wrapper").each(function(){
				 var objThumb = jQuery(this);
				 redrawThumbStyle(objThumb);
			 });


			//set color. if empty set from css
			if(g_temp.isEffectOverlay){

				if(g_options.thumb_overlay_color){

					var objCss = {};
					if(g_functions.isRgbaSupported()){
						var colorRGB = g_functions.convertHexToRGB(g_options.thumb_overlay_color, g_options.thumb_overlay_opacity);
						objCss["background-color"] = colorRGB;
					}else{
						objCss["background-color"] = g_options.thumb_overlay_color;
						g_temp.colorOverlayOpacity = g_options.thumb_overlay_opacity;
					}

					g_objParent.find(".ug-thumb-wrapper .ug-thumb-overlay").css(objCss);
				}

			}

		}


		/**
		 * set the thumb on selected state
		 */
		this.setThumbSelected = function(objThumbWrapper){

			if(g_temp.customThumbs == true)
				objThumbWrapper.removeClass("ug-thumb-over");

			if(isThumbSelected(objThumbWrapper) == true)
				return(true);

			objThumbWrapper.addClass("ug-thumb-selected");

			//set thumb selected style
			setThumbSelectedStyle(objThumbWrapper);
		}

		/**
		 * set the thumb unselected state
		 */
		this.setThumbUnselected = function(objThumbWrapper){

			//remove the selected class
			objThumbWrapper.removeClass("ug-thumb-selected");

			t.setThumbNormalStyle(objThumbWrapper, false, "set unselected");
		}


		/**
		 * set the options of the strip
		 */
		this.setOptions = function(objOptions){

			g_options = jQuery.extend(g_options, objOptions);

		}


		/**
		 * set thumb inner reduce - reduce this number when resizing thumb inner
		 */
		this.setThumbInnerReduce = function(innerReduce){

			g_temp.thumbInnerReduce = innerReduce;

		}

		/**
		 * set custom thumbs
		 * allowedEffects - border, overlay, image
		 */
		this.setCustomThumbs = function(funcSetHtml, arrAlowedEffects, customOptions){

			g_temp.customThumbs = true;

			if(typeof funcSetHtml != "function")
				throw new Error("The argument should be function");


			g_temp.funcSetCustomThumbHtml = funcSetHtml;

			//enable effects:
			if(jQuery.inArray("overlay", arrAlowedEffects) == -1)
				g_temp.isEffectOverlay = false;

			if(jQuery.inArray("border", arrAlowedEffects) == -1)
				g_temp.isEffectBorder = false;

			g_temp.isEffectImage = false;		//for custom effects the image is always off

			//check for dissalow onresize
			if(customOptions && customOptions.allow_onresize === false){
				g_temp.allowOnResize = false;
			}

		}






		this._____________EXTERNAL_GETTERS__________ = function(){};

		/**
		 * get the options object
		 */
		this.getOptions = function(){

			return(g_options);
		}


		/**
		 * get num thumbs
		 */
		this.getNumThumbs = function(){
			var numThumbs = g_arrItems.length;
			return(numThumbs);
		}


		/**
		 * get thumb image
		 */
		this.getThumbImage = function(objThumb){

			var objImage = objThumb.find(".ug-thumb-image");
			return(objImage);
		}


		/**
		 * get thumbs by index
		 */
		this.getThumbByIndex = function(index){
			var objThumbs = t.getThumbs();

			if(index >= objThumbs.length || index < 0)
				throw new Error("Wrong thumb index");

			var objThumb = jQuery(objThumbs[index]);

			return(objThumb);
		}


		/**
		 * get all thumbs jquery object
		 */
		this.getThumbs = function(){
			return(g_objParent.children(".ug-thumb-wrapper"));
		}

		/**
		 * get item by thumb object
		 */
		this.getItemByThumb = function(objThumb){

			var index = objThumb.data("index");

			if(index === undefined)
				index = objThumb.index();

			var arrItem = g_arrItems[index];
			return(arrItem);
		}


		/**
		 * is thumb loaded
		 */
		this.isThumbLoaded = function(objThumb){

			var objItem = t.getItemByThumb(objThumb);

			return(objItem.isLoaded);
		}


		/**
		 * get global thumb size
		 */
		this.getGlobalThumbSize = function(){

			var objSize = {
				width:g_options.thumb_width,
				height: g_options.thumb_height
			};

			return(objSize);
		}


		this._____________EXTERNAL_OTHERS__________ = function(){};



		/**
		 * init events
		 */
		this.initEvents = function(){

			var objThumbs = g_objParent.find(".ug-thumb-wrapper");

			objThumbs.on("touchstart",function(){
				g_temp.touchEnabled = true;
				objThumbs.off("mouseenter").off("mouseleave");
			});

			if(g_temp.allowOnResize == true)
				g_objWrapper.on(g_serviceParams.eventSizeChange, onThumbSizeChange);

			objThumbs.hover(function(event){		//on mouse enter
				var objThumb = jQuery(this);
				onMouseOver(objThumb);
			}, function(event){		//on mouse leave
				var objThumb = jQuery(this);
				onMouseOut(objThumb);
			});


			//on image loaded event - for setting the image sizes
			g_objThis.on(t.events.THUMB_IMAGE_LOADED, onThumbImageLoaded);

		}


		/**
		 * destroy the thumb element
		 */
		this.destroy = function(){
			var objThumbs = g_objParent.find(".ug-thumb-wrapper");
			objThumbs.off("touchstart");
			g_objWrapper.off(g_serviceParams.eventSizeChange);
			objThumbs.off("mouseenter");
			objThumbs.off("mouseleave");
			g_objThis.off(t.events.THUMB_IMAGE_LOADED);
		}


		/**
		 * preload thumbs images and put them into the thumbnails
		 */
		this.loadThumbsImages = function(){

			var objImages = g_objParent.find(".ug-thumb-image");
			g_functions.checkImagesLoaded(objImages, null, function(objImage,isError){

				if(isError == false){
					onImageLoaded(objImage, true);
				}
				else{
					var objItem = jQuery(objImage).parent();
					setItemThumbLoadedError(objItem);
				}
			});
		}


		/**
		 * trigger image loaded event
		 */
		this.triggerImageLoadedEvent = function(objThumb, objImage){

			g_objThis.trigger(t.events.THUMB_IMAGE_LOADED, [objThumb, objImage]);

		}


		/**
		 * hide thumbs
		 */
		this.hideThumbs = function(){

			g_objParent.find(".ug-thumb-wrapper").hide();

		}

}
/**
 * tiles class
 */
function UGTiles(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objWrapper, g_objParent;
	var g_functions = new UGFunctions(), g_arrItems, g_objTileDesign = new UGTileDesign();
	var g_thumbs = new UGThumbsGeneral(), g_vars = {};
    var g_arrNestedGridRow, g_arrNestedItems;


	var g_options = {
		 tiles_type: "columns",					//columns / justified - tiles layout type
		 tiles_col_width: 250,					//column width - exact or base according the settings
		 tiles_align:"center",					//align of the tiles in the space
		 tiles_exact_width: false,				//exact width of column - disables the min and max columns
		 tiles_space_between_cols: 3,			//space between images
		 tiles_space_between_cols_mobile: 3,    //space between cols for mobile type
		 tiles_include_padding: true,			//include padding at the sides of the columns, equal to current space between cols
		 tiles_min_columns: 2,					//min columns
		 tiles_max_columns: 0,					//max columns (0 for unlimited)
		 tiles_keep_order: false,				//keep order - slower algorytm
		 tiles_set_initial_height: true,		//set some estimated height before images show

		 tiles_justified_row_height: 150,		//base row height of the justified type
		 tiles_justified_space_between: 3,		//space between the tiles justified type

		 tiles_nested_optimal_tile_width: 250,	// tiles optimal width
	     tiles_nested_col_width: null,			// nested tiles column width
	     tiles_nested_debug: false,

		 tiles_enable_transition: true			//enable transition when screen width change
	};

	this.events = {
			THUMB_SIZE_CHANGE: "thumb_size_change",
			TILES_FIRST_PLACED: "tiles_first_placed",		//only in case of justified
			ALL_TILES_LOADED: "all_tiles_loaded"
	};

	var g_temp = {
			isFixedMode: false,   //is tiles is custom sized, not related to the images that inside
			isFirstTimeRun:true,   //if run once
			handle:null,		   //interval handle
			isTransActive: false,  //is transition active
			isTransInited: false,  //if the transition function is set
			isAllLoaded: false
	};

    var g_nestedWork = {
    		colWidth: null,
            nestedOptimalCols: 5,
            gridY: 0,
            maxColumns: 0,						 //maxColumns
            columnsValueToEnableHeightResize: 3, //columns Value To Enable Height Resize
            resizeLeftRightToColumn: true,
            currentItem: 0,
	        currentGap: null,
	        optimalTileWidth: null,
	        maxGridY:0
    }


	function __________GENERAL_________(){};


	/**
	 * init the gallery
	 */
	function init(gallery, customOptions){

		g_objects = gallery.getObjects();
		g_gallery = gallery;
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;
		g_arrItems = g_objects.g_arrItems;

		g_options = jQuery.extend(g_options, customOptions);

		modifyOptions();

		g_objTileDesign.init(gallery, g_options);

		g_thumbs = g_objTileDesign.getObjThumbs();

	}


	/**
	 * modify options
	 */
	function modifyOptions(){

		if(g_options.tiles_min_columns < 1)
			g_options.tiles_min_columns = 1;

		//protection of max columns, can't be more then min columns
		if(g_options.tiles_max_columns != 0 && g_options.tiles_max_columns < g_options.tiles_min_columns){
			g_options.tiles_max_columns = g_options.tiles_min_columns;
		}

	}


	/**
	 * set the grid panel html
	 */
	function setHtml(objParent){

		if(!objParent)
			var objParent = g_objWrapper;

		g_objParent = objParent;

		var tilesType = g_options.tiles_type;
		objParent.addClass("ug-tiletype-"+tilesType);

		g_objTileDesign.setHtml(objParent);

		objParent.children(".ug-thumb-wrapper").hide();
	}


	/**
	 * set class that enables transition
	 */
	function setTransition(){

		//set the tiles in resting mode, to activate their own transitions
		g_objParent.addClass("ug-tiles-rest-mode");

		g_temp.isTransInited = true;

		//add css tansition
		if(g_options.tiles_enable_transition == true){
			g_objParent.addClass("ug-tiles-transit");

			//add image overlay transition
			var optionsTile = g_objTileDesign.getOptions();

			if(optionsTile.tile_enable_image_effect == true && optionsTile.tile_image_effect_reverse == false)
				g_objParent.addClass("ug-tiles-transit-overlays");

			g_temp.isTransActive = true;
		}

	}


	/**
	 * get parent width
	 */
	function getParentWidth(){
		return g_functions.getElementSize(g_objParent).width;
	}


	/**
	 * do some actions before transition
	 */
	function doBeforeTransition(){

		if(g_temp.isTransInited == false)
			return(false);

		g_objParent.addClass("ug-tiles-transition-active");
		g_objParent.removeClass("ug-tiles-rest-mode");

		//prepare for transition
		if(g_temp.isTransActive == false)
			return(false);

		g_objTileDesign.disableEvents();
	}


	/**
	 * set after transition classes
	 */
	function doAfterTransition_setClasses(){

		if(g_temp.isTransInited == false)
			return(false);

		g_objParent.removeClass("ug-tiles-transition-active");
		g_objParent.addClass("ug-tiles-rest-mode");
	}


	/**
	 * do some actions after transition
	 */
	function doAfterTransition(){


		if(g_temp.isTransActive == true){

			//trigger size change after transition
			setTimeout(function(){

				g_objTileDesign.enableEvents();
				g_objTileDesign.triggerSizeChangeEventAllTiles();

				doAfterTransition_setClasses();


			}, 800);

			//control size change
			if(g_temp.handle)
				clearTimeout(g_temp.handle);

			g_temp.handle = setTimeout(function(){

				doAfterTransition_setClasses();

				g_objTileDesign.triggerSizeChangeEventAllTiles();
				g_temp.handle = null;

			}, 2000);


		}else{

			g_objTileDesign.triggerSizeChangeEventAllTiles();

			doAfterTransition_setClasses();

		}

	}


	function __________COLUMN_TYPE_RELATED_________(){};

	/**
	 * count width by number of columns
	 */
	function fillTilesVars_countWidthByCols(){

		g_vars.colWidth = (g_vars.availWidth - g_vars.colGap * (g_vars.numCols-1)) / g_vars.numCols;
		g_vars.colWidth = Math.floor(g_vars.colWidth);

		g_vars.totalWidth = g_functions.getSpaceByNumItems(g_vars.numCols, g_vars.colWidth, g_vars.colGap);

	}



	/**
	 * fill common tiles vars
	 */
	function fillTilesVars(){

		g_vars.colWidth = g_options.tiles_col_width;
		g_vars.minCols = g_options.tiles_min_columns;
		g_vars.maxCols = g_options.tiles_max_columns;

		if(g_gallery.isMobileMode() == false){
			g_vars.colGap = g_options.tiles_space_between_cols;
		} else {
			g_vars.colGap = g_options.tiles_space_between_cols_mobile;
		}

		//set gallery width
		g_vars.galleryWidth = getParentWidth();

		g_vars.availWidth = g_vars.galleryWidth;

		if(g_options.tiles_include_padding == true)
			g_vars.availWidth = g_vars.galleryWidth - g_vars.colGap*2;

		//set the column number by exact width
		if(g_options.tiles_exact_width == true){

			g_vars.numCols = g_functions.getNumItemsInSpace(g_vars.availWidth, g_vars.colWidth, g_vars.colGap);

			if(g_vars.maxCols > 0 && g_vars.numCols > g_vars.maxCols)
				g_vars.numCols = g_vars.maxCols;

			//if less then min cols count width by cols
			if(g_vars.numCols < g_vars.minCols){
				g_vars.numCols = g_vars.minCols;

				fillTilesVars_countWidthByCols();

			}else{
				g_vars.totalWidth = g_vars.numCols * (g_vars.colWidth + g_vars.colGap) - g_vars.colGap;
			}

		} else {

			//set dynamic column number

			var numCols = g_functions.getNumItemsInSpaceRound(g_vars.availWidth, g_vars.colWidth, g_vars.colGap);

			if(numCols < g_vars.minCols)
				numCols = g_vars.minCols;
			else
				if(g_vars.maxCols != 0 && numCols > g_vars.maxCols)
					numCols = g_vars.maxCols;

			g_vars.numCols = numCols;

			fillTilesVars_countWidthByCols();

		}

		switch(g_options.tiles_align){
			case "center":
			default:
				//add x to center point
				g_vars.addX = Math.round( (g_vars.galleryWidth - g_vars.totalWidth) / 2 );
			break;
			case "left":
				g_vars.addX = 0;
			break;
			case "right":
				g_vars.addX = g_vars.galleryWidth - g_vars.totalWidth;
			break;
		}

		g_vars.maxColHeight = 0;

		//get posx array (constact to all columns)
		g_vars.arrPosx = [];
		for(col = 0; col < g_vars.numCols; col++){
			var colX = g_functions.getColX(col, g_vars.colWidth, g_vars.colGap);
			g_vars.arrPosx[col] = colX + g_vars.addX;
		}

		//empty heights array
		g_vars.colHeights = [0];

	}





	/**
	 * get column with minimal height
	 */
	function getTilesMinCol(){
		var numCol = 0;

		var minHeight = 999999999;

		for(col = 0; col < g_vars.numCols; col++){

			if(g_vars.colHeights[col] == undefined || g_vars.colHeights[col] == 0)
				return col;

			if(g_vars.colHeights[col] < minHeight){
				numCol = col;
				minHeight = g_vars.colHeights[col];
			}

		}

		return(numCol);
	}


	/**
	 * place tile as it loads
	 */
	function placeTile(objTile, toShow, setGalleryHeight, numCol){

		if(numCol === null || typeof numCol == "undefined")
			var numCol = getTilesMinCol();

		//set posy
		var posy = 0;
		if(g_vars.colHeights[numCol] !== undefined)
			posy = g_vars.colHeights[numCol];

		var itemHeight = g_objTileDesign.getTileHeightByWidth(g_vars.colWidth, objTile, "placeTile");

		if(itemHeight === null){	//for custom html tile
			if(g_options.tiles_enable_transition == true)
				throw new Error("Can't know tile height, please turn off transition");

			var itemSize = g_functions.getElementSize(objTile);
			itemHeight = itemSize.height;
		}

		var posx = g_vars.arrPosx[numCol];

		g_functions.placeElement(objTile, posx, posy);

		var realHeight = posy + itemHeight;

		g_vars.colHeights[numCol] = realHeight + g_vars.colGap;

		//set max height
		if(g_vars.maxColHeight < realHeight)
			g_vars.maxColHeight = realHeight;

		if(toShow == true)
			objTile.show().fadeTo(0,1);

		if(setGalleryHeight == true){
			g_objParent.height(g_vars.maxColHeight);
		}

	}


	/**
	 * place the tiles
	 */
	function placeTiles(toShow){

		if(!toShow)
			toShow = false;

		fillTilesVars();

		var objThumbs = g_thumbs.getThumbs();

		//do some operation before the transition
		doBeforeTransition();

		//resize all thumbs
		g_objTileDesign.resizeAllTiles(g_vars.colWidth, g_objTileDesign.resizemode.VISIBLE_ELEMENTS);

		//place elements
		for(var index = 0; index < objThumbs.length; index++){
			var objTile = jQuery(objThumbs[index]);
			var col = undefined;
			if(g_options.tiles_keep_order == true)
				col = g_functions.getColByIndex(g_vars.numCols, index);

			placeTile(objTile, toShow, false, col);
		}

		//bring back the state after transition
		doAfterTransition();

		//set gallery height, according the transition
		var galleryHeight = g_objParent.height();

		if(g_temp.isTransActive == true && galleryHeight > g_vars.maxColHeight)
			setTimeout(function(){
				g_objParent.height(g_vars.maxColHeight);
			},700);
		else
			g_objParent.height(g_vars.maxColHeight);
	}


	/**
	 * check if alowed to place ordered tile
	 */
	function isOrderedTilePlaceAlowed(objTile){

		var index = objTile.index();

		//don't allow double put items
		var currentItem = g_gallery.getItem(index);
		if(currentItem.ordered_placed === true)
			return(false);


		var prevIndex = g_functions.getPrevRowSameColIndex(index, g_vars.numCols);

		//put first item in the column
		if(prevIndex < 0)
			return(true);

		//check if previous tile in column is placed
		var objPrevItem = g_gallery.getItem(prevIndex);
		if(objPrevItem.ordered_placed === true)
			return(true);

		return(false);
	}


	/**
	 * place ordered tile
	 */
	function placeOrderedTile(objTile, isForce){

		if(isForce !== true){

			var isAlowed = isOrderedTilePlaceAlowed(objTile);

			if(isAlowed == false)
				return(false);
		}

		var index = objTile.index();

		var col = g_functions.getColByIndex(g_vars.numCols, index);

		var objItem = g_gallery.getItem(index);

		g_objTileDesign.resizeTile(objTile, g_vars.colWidth);

		placeTile(objTile, true, true, col);

		objItem.ordered_placed = true;

		//check by recursion and place next items in column
		var numItems = g_gallery.getNumItems();
		var nextIndex = g_functions.getNextRowSameColIndex(index, g_vars.numCols);
		if(nextIndex >= numItems)
			return(false);

		var nextTile = g_thumbs.getThumbByIndex(nextIndex);
		var nextItem = g_gallery.getItem(nextIndex);

		var isLoaded = g_thumbs.isThumbLoaded(nextTile);

		if(g_thumbs.isThumbLoaded(nextTile) && !nextItem.ordered_placed)
			placeOrderedTile(nextTile, true);
	}


	/**
	 * on single image load
	 */
	function onSingleImageLoad(objImage, isError){

		if(isError == true)
			return(false);

		objImage = jQuery(objImage);
		var objTile = jQuery(objImage).parent();

		g_thumbs.triggerImageLoadedEvent(objTile, objImage);

		if(g_options.tiles_keep_order == true){

			placeOrderedTile(objTile);

		}else{

			g_objTileDesign.resizeTile(objTile, g_vars.colWidth);
			placeTile(objTile, true, true);
		}

	}



	/**
	 * run columns type
	 */
	function runColumnsType(){

		var objThumbs = g_thumbs.getThumbs();

		g_temp.isAllLoaded = false;

		fillTilesVars();

		var diffWidth = Math.abs(g_vars.galleryWidth - g_vars.totalWidth);

		//set initial height of the parent by estimation
		if(g_options.tiles_set_initial_height == true && g_functions.isScrollbarExists() == false && diffWidth < 25){

			var numThumbs = objThumbs.length;
			var numRows = Math.ceil(objThumbs.length / g_vars.numCols);
			var estimateHeight = numRows * g_options.tiles_col_width * 0.75;

			g_objParent.height(estimateHeight);
			fillTilesVars();
		}


		objThumbs.fadeTo(0,0);
		var objImages = jQuery(g_objParent).find("img.ug-thumb-image");


		if(g_temp.isFixedMode == true){		//fixed mode type - just place tiles before images loaded

			g_objThis.trigger(t.events.TILES_FIRST_PLACED);

			placeTiles(true);

			g_functions.checkImagesLoaded(objImages, function(){
				setTransition();
				g_objThis.trigger(t.events.ALL_TILES_LOADED);
			});

		}else{	//dynamic size type

			var initNumCols = g_vars.numCols;
			var initWidth = g_vars.galleryWidth;
			var isFirstPlace = false;

			//on place the tile as it loads. After all tiles loaded,check position again.
			g_functions.checkImagesLoaded(objImages, function(){

				fillTilesVars();

				if(initNumCols != g_vars.numCols || initWidth != g_vars.galleryWidth){
					placeTiles(false);
				}

				setTransition();

				g_objThis.trigger(t.events.ALL_TILES_LOADED);

			} ,function(objImage, isError){

				if(isFirstPlace == false)
					g_objThis.trigger(t.events.TILES_FIRST_PLACED);

				isFirstPlace = true;

				onSingleImageLoad(objImage, isError);

			});

		}//end dynamic mode type


	}


	function __________JUSTIFIED_TYPE_RELATED_________(){};

	/**
	 * ------------ JUSTIFIED TYPE RELATED FUNCTIONS ----------------
	 */

	function getJustifiedData(){

		var galleryWidth = getParentWidth();

		var objTiles = g_thumbs.getThumbs();
		var rowHeightOpt = g_options.tiles_justified_row_height;
		var arrWidths = [];
		var totalWidth = 0;
		var gap = g_options.tiles_justified_space_between;
		var numTiles = objTiles.length;

		//get arr widths and total width
		jQuery.each(objTiles, function(index, objTile){
			objTile = jQuery(objTile);

			var objItem = g_thumbs.getItemByThumb(objTile);

			var tileWidth = objItem.thumbWidth;
			var tileHeight = objItem.thumbHeight;

			if (tileHeight !== rowHeightOpt)
				tileWidth = Math.floor(objItem.thumbRatioByWidth * rowHeightOpt);

			arrWidths[index] = tileWidth;

			totalWidth += tileWidth;
		});


		var numRows = Math.ceil(totalWidth / galleryWidth);

		if(numRows > numTiles)
			numRows = numTiles;

		var finalRowWidth = totalWidth / numRows;

		//fill rows array, break tiles to rows
		var arrRows = [], eachRowWidth = 0;
		var rowsWidths = [], rowsTiles = [], row = [];
		var progressWidth = 0, numRow = 0;

		jQuery.each(objTiles, function(index, objTile){
			var tileWidth = arrWidths[index];

			if( (progressWidth + tileWidth / 2) > (numRow+1) * finalRowWidth){

				rowsWidths[arrRows.length] = eachRowWidth;
				arrRows.push(row);
				row = [];
				eachRowWidth = 0;
				numRow++;
			}

			progressWidth += tileWidth;
			eachRowWidth += tileWidth;

			row.push(objTile);
		});

		rowsWidths[arrRows.length] = eachRowWidth;
		arrRows.push(row);


		//set heights and position images:
		var arrRowWidths = [];
		var arrRowHeights = [];
		var totalHeight = 0;

		jQuery.each(arrRows, function(index, row){

			var numTiles = row.length;
			var rowWidth = rowsWidths[index];

			var gapWidth = (row.length-1) * gap;

			var ratio = (galleryWidth - gapWidth) / rowWidth;
			var rowHeight = Math.round(rowHeightOpt * ratio);

			//count total height
			totalHeight += rowHeight;
			if(index > 0)
				totalHeight += gap;

			arrRowHeights.push(rowHeight);

			//ratio between 2 heights for fixing image width:
            var ratioHeights = rowHeight / rowHeightOpt;

            //set tiles sizes:
            var arrRowTileWidths = [];
            var actualRowWidth = gapWidth;

            jQuery.each(row, function(indexInRow, tile){
            	var objTile = jQuery(tile);
            	var tileIndex = objTile.index();
            	var tileWidth = arrWidths[tileIndex];
            	var newWidth = Math.round(tileWidth * ratioHeights);

            	arrRowTileWidths[indexInRow] = newWidth;
            	actualRowWidth += newWidth;
            });

            //fix images widths by adding or reducing 1 pixel
            var diff = actualRowWidth - galleryWidth;

            var newTotal = 0;
            jQuery.each(arrRowTileWidths, function(indexInRow, width){

            	if(diff == 0)
            		return(false);

            	if(diff < 0){
            		arrRowTileWidths[indexInRow] = width + 1;
            		diff++;
            	}else{
            		arrRowTileWidths[indexInRow] = width - 1;
            		diff--;
            	}

            	//if at last item diff stays, add all diff
            	if(indexInRow == (arrRowTileWidths.length-1) && diff != 0)
            		arrRowTileWidths[indexInRow] -= diff;
            });

            arrRowWidths[index] = arrRowTileWidths;
		});


		var objData = {
				arrRows: arrRows,
				arrRowWidths: arrRowWidths,
				arrRowHeights: arrRowHeights,
				gap: gap,
				totalHeight: totalHeight
		};

		return(objData);
	}


	/**
	 * put justified images
	 */
	function placeJustified(toShow){
		if(!toShow)
			var toShow = false;

		var parentWidth = getParentWidth();

		var objData = getJustifiedData();

		//if the width changed after height change (because of scrollbar), recalculate
		g_objParent.height(objData.totalHeight);

		var parentWidthAfter = getParentWidth();
		if(parentWidthAfter != parentWidth)
			objData = getJustifiedData();

		doBeforeTransition();

		var posy = 0;
		var totalWidth = 0;		//just count total widht for check / print
		jQuery.each(objData.arrRows, function(index, row){

			var arrRowTileWidths = objData.arrRowWidths[index];
			var rowHeight = objData.arrRowHeights[index];

			//resize and place tiles
            var posx = 0;
            jQuery.each(row, function(indexInRow, tile){

            	var objTile = jQuery(tile);
            	var tileHeight = rowHeight;
            	var tileWidth = arrRowTileWidths[indexInRow];

            	g_objTileDesign.resizeTile(objTile, tileWidth, tileHeight, g_objTileDesign.resizemode.VISIBLE_ELEMENTS);
            	g_functions.placeElement(objTile, posx, posy);

            	posx += tileWidth;

            	if(posx > totalWidth)
            		totalWidth = posx;

            	posx += objData.gap;

            	if(toShow == true)
            		jQuery(tile).show();

            });

            posy += (rowHeight + objData.gap);

		});

		doAfterTransition();

	}



	/**
	 * run justified type gallery
	 */
	function runJustifiedType(){

		var objImages = jQuery(g_objWrapper).find("img.ug-thumb-image");
		var objTiles = g_thumbs.getThumbs();

		g_temp.isAllLoaded = false;

		objTiles.fadeTo(0,0);

		g_functions.checkImagesLoaded(objImages, function(){

			setTimeout(function(){
				placeJustified(true);
				objTiles.fadeTo(0,1);
				g_objThis.trigger(t.events.TILES_FIRST_PLACED);
				setTransition();

				g_objThis.trigger(t.events.ALL_TILES_LOADED);

			});

		}, function(objImage, isError){

			objImage = jQuery(objImage);
			var objTile = jQuery(objImage).parent();
			g_thumbs.triggerImageLoadedEvent(objTile, objImage);

		});

	}




    function __________NESTED_TYPE_RELATED_________() {    };


    /**
     * ------------ NESTED TYPE RELATED FUNCTIONS ----------------
     */
    function runNestedType() {

        var objImages = jQuery(g_objWrapper).find("img.ug-thumb-image");
        var objTiles = g_thumbs.getThumbs();

        g_temp.isAllLoaded = false;

        objTiles.fadeTo(0, 0);

        g_functions.checkImagesLoaded(objImages, function () {

        	if(g_gallery.isMobileMode() == true){
        		placeTiles(true);
        	}
        	else
        		placeNestedImages(true);

            g_objThis.trigger(t.events.TILES_FIRST_PLACED);
            setTransition();

            g_objThis.trigger(t.events.ALL_TILES_LOADED);

        }, function (objImage, isError) {

            objImage = jQuery(objImage);
            var objTile = jQuery(objImage).parent();
            g_thumbs.triggerImageLoadedEvent(objTile, objImage);

        });

    }


    /**
     * fill nested vars
     */
    function fillNestedVars(){

    	var galleryWidth = getParentWidth();
    	g_nestedWork.galleryWidth = galleryWidth;

        g_arrNestedGridRow = {};
    	g_nestedWork.colWidth = g_options.tiles_nested_col_width;
    	g_nestedWork.optimalTileWidth = g_options.tiles_nested_optimal_tile_width;

    	g_nestedWork.currentGap = g_options.tiles_space_between_cols;

    	if(g_gallery.isMobileMode() == true)
            g_nestedWork.currentGap = g_options.tiles_space_between_cols_mobile;

        if(g_nestedWork.colWidth == null){
			g_nestedWork.colWidth = Math.floor(g_nestedWork.optimalTileWidth/g_nestedWork.nestedOptimalCols);
		} else if (g_nestedWork.optimalTileWidth > g_nestedWork.colWidth) {
            g_nestedWork.nestedOptimalCols = Math.ceil(g_nestedWork.optimalTileWidth / g_nestedWork.colWidth);
        } else {
            g_nestedWork.nestedOptimalCols = 1;
        }

    	g_nestedWork.maxColumns = g_functions.getNumItemsInSpace(galleryWidth, g_nestedWork.colWidth, g_nestedWork.currentGap);

        //fix col width - justify tiles
        g_nestedWork.colWidth = g_functions.getItemSizeInSpace(galleryWidth, g_nestedWork.maxColumns, g_nestedWork.currentGap);

        g_nestedWork.gridY = 0;
        g_arrNestedItems = []

        //trace(g_nestedWork);

    	var objTiles = g_thumbs.getThumbs();
		objTiles.each(function(){
			var objTile = jQuery(this);
		    var sizes = setNestedSize(objTile);
		    g_arrNestedItems.push(sizes);
		 });

        if (g_nestedWork.optimalTileWidth > g_nestedWork.colWidth) {
            g_nestedWork.nestedOptimalCols = Math.ceil(g_nestedWork.optimalTileWidth / g_nestedWork.colWidth);
        } else {
            g_nestedWork.nestedOptimalCols = 1;
        }

        g_nestedWork.totalWidth = g_nestedWork.maxColumns*(g_nestedWork.colWidth+g_nestedWork.currentGap)-g_nestedWork.currentGap;

        switch(g_options.tiles_align){
			case "center":
			default:
				//add x to center point
				g_nestedWork.addX = Math.round( (g_nestedWork.galleryWidth - g_nestedWork.totalWidth) / 2 );
			break;
			case "left":
				g_nestedWork.addX = 0;
			break;
			case "right":
				g_nestedWork.addX = g_nestedWork.galleryWidth - g_nestedWork.totalWidth;
			break;
		}


        g_nestedWork.maxGridY = 0;
    }


    /**
     * place Nested type images
     */
    function placeNestedImages(toShow){

    	var parentWidth = getParentWidth();

    	fillNestedVars();
        placeNestedImagesCycle();

        var totalHeight = g_nestedWork.maxGridY * (g_nestedWork.colWidth + g_nestedWork.currentGap) - g_nestedWork.currentGap;

    	//if the width changed after height change (because of scrollbar), recalculate
		g_objParent.height(totalHeight);

		var parentWidthAfter = getParentWidth();

		if(parentWidthAfter != parentWidth){
    		fillNestedVars();
        	placeNestedImagesCycle();
        }

        if(g_options.tiles_nested_debug == false)
        	drawNestedImages(toShow);

    }


    /**
     * set Nested size
     */
    function setNestedSize(objTile){

        var dimWidth, dimHeight;
        var output = {};

        var colWidth = g_nestedWork.colWidth;
        var gapWidth = g_nestedWork.currentGap;

        var objImageSize = g_objTileDesign.getTileImageSize(objTile);
        var index = objTile.index();

        var maxDim = Math.ceil(getPresettedRandomByWidth(index)*(g_nestedWork.nestedOptimalCols*1/3) + g_nestedWork.nestedOptimalCols * 2/3);

        var imgWidth = objImageSize.width;
        var imgHeight = objImageSize.height;

        var ratio = imgWidth/imgHeight;

        if(imgWidth>imgHeight){
            dimWidth = maxDim;
            dimHeight = Math.round(dimWidth/ratio);
            if(dimHeight == 0){
                dimHeight = 1;
            }
        } else {
            dimHeight = maxDim;
            dimWidth = Math.round(dimHeight*ratio);
            if(dimWidth == 0){
                dimWidth = 1;
            }
        }

        output.dimWidth = dimWidth;
        output.dimHeight = dimHeight;
        output.width = dimWidth * colWidth + gapWidth*(dimWidth-1);
        output.height = dimHeight * colWidth + gapWidth*(dimHeight-1);
        output.imgWidth =  imgWidth;
        output.imgHeight = imgHeight;
        output.left = 0;
        output.top = 0;
        return output;
    }


    /**
     *  get presetted random [0,1] from int
     */
    function getPresettedRandomByWidth(index){
        return Math.abs(Math.sin(Math.abs(Math.sin(index)*1000)));
    }


    /**
     * place nested images debug
     */
    function placeNestedImagesDebug(toShow, placeOne){

    	if(placeOne == false){
            for(var i = g_nestedWork.currentItem; i<g_arrNestedItems.length; i++){
                placeNestedImage(i, true);
            }
            g_nestedWork.currentItem = g_arrNestedItems.length-1;
        } else {
            placeNestedImage(g_nestedWork.currentItem, true);
        }

    	for(var i = 0; i<=g_nestedWork.currentItem; i++){
            drawNestedImage(i, true);
        }

        g_nestedWork.currentItem++;

    }


    /**
     * start cycle of placing imgaes
     */
    function placeNestedImagesCycle(placeOne){

        if(g_options.tiles_nested_debug == true){

        	if(typeof placeOne === 'undefined')
                placeOne = true;

        	placeNestedImagesDebug(true, placeOne);

        	return(false);
        }

        for(var i = 0; i < g_arrNestedItems.length; i++)
                placeNestedImage(i, true);

    }


    /**
     * place Nested Image
     */
    function placeNestedImage(tileID, toShow){

        if(!toShow)
            var toShow = false;

        g_nestedWork.maxColHeight = 0;

        var rowsValue = g_functions.getObjectLength(g_arrNestedGridRow);

        for(var row = g_nestedWork.gridY; row<=rowsValue+1; row++){
            for (var column = 0; column < g_nestedWork.maxColumns; column++) {
                if (isGridRowExists(g_nestedWork.gridY) == false || isGridCellTaken(g_nestedWork.gridY, column) == false) {
                    var totalFree = getTotalFreeFromPosition(column);
                    calculateOptimalStretchAndPosition(tileID, totalFree, column);

                    return;
                }
            }
            g_nestedWork.gridY++;
        }

    }


    /**
     * calculate optimal stretch of tile
     */
    function calculateOptimalStretchAndPosition(tileID, totalFree, column){

        var sizes = jQuery.extend(true, {}, g_arrNestedItems[tileID]);
        var currentWidth = sizes.dimWidth;
        var placeForNextImage = totalFree - sizes.dimWidth;
        var optimalWidth = g_nestedWork.nestedOptimalCols;
        var onlyCurrentImage = (totalFree<=sizes.dimWidth || placeForNextImage<=0.33*optimalWidth || totalFree<=optimalWidth);

        //Width stretching if needed
        if(onlyCurrentImage){	// if free space is smaller than image width - place to this space anyway
            resizeToNewWidth(tileID, totalFree);
        } else if (placeForNextImage<=optimalWidth){ // if there are place for 2 images
            if(optimalWidth>=4){
                if(isGridImageAligned(Math.floor(totalFree/2), column) == true){
                    resizeToNewWidth(tileID, Math.floor(totalFree/2)+1);
                } else {
                    resizeToNewWidth(tileID, Math.floor(totalFree/2));
                }
            } else {
                resizeToNewWidth(objImage, totalFree);
            }
        } else {
            if(isGridImageAligned(currentWidth, column) == true){
                switch(currentWidth>=optimalWidth){
                    case true:
                        resizeToNewWidth(tileID, currentWidth-1);
                        break
                    case false:
                        resizeToNewWidth(tileID, currentWidth+1);
                        break

                }
            }
        }

        //Height stretching if needed
        sizes = jQuery.extend(true, {}, g_arrNestedItems[tileID]);
        var columnInfo = getGridColumnHeight(tileID, sizes.dimWidth, column); 	// [columnHeight, imagesIDs]

        if(g_nestedWork.columnsValueToEnableHeightResize <= columnInfo[0] && g_nestedWork.maxColumns>=2*g_nestedWork.nestedOptimalCols){

            var sideHelper = getGridImageVerticalDifference(column, sizes);
            var columnSizes = resizeToNewHeight(tileID, sideHelper.newHeight, true);
            g_arrNestedItems[tileID].dimHeight = columnSizes.dimHeight;
            var columnResizes = redistributeColumnItems(columnInfo, columnSizes.dimWidth, column);
            var columnCrosshairs = getColumnCrosshairsCount(columnResizes);
            var disableColumnResizes = false;

            if(columnCrosshairs >= 2){
                disableColumnResizes = true;
            }

            if(sideHelper.newHeight>=sizes.dimHeight){
                sizes = resizeToNewHeight(tileID, sideHelper.newHeight, true);
            }
            var sideResizes = getSideResizeInfo(sideHelper.idToResize, sideHelper.newHeight, sizes.dimHeight);
            sizes.top = g_nestedWork.gridY;
            sizes.left = column;
            sideResizes.push({"tileID": tileID, "sizes": sizes});

            var sideResizesVal = calcResizeRatio(sideResizes);
            var columnResizesVal = calcResizeRatio(columnResizes);

            if(sideResizesVal<columnResizesVal || disableColumnResizes == true) {
                applyResizes(sideResizes);
                return;
            } else {
                applyResizes(columnResizes);
                return;
            }


        }
        sizes.left = column;
        sizes.top = g_nestedWork.gridY;
        g_arrNestedItems[tileID] = sizes;
        putImageToGridRow(tileID, sizes, column, g_nestedWork.gridY);

        g_nestedWork.maxGridY = sizes.top + sizes.dimHeight;

    }

    /**
     * check columns crosshairs
     */
    function getColumnCrosshairsCount(tilesAndSizes){

        var crosshairsCountR = 0;
        var crosshairsCountL = 0;

        for(var i = 0; i<tilesAndSizes.length-1; i++){

            var sizes = tilesAndSizes[i].sizes;
            var topItem = -1;
            var bottomItem = -1;
            if(isGridRowExists(sizes.top+sizes.dimHeight) && g_nestedWork.maxColumns>sizes.left+sizes.dimWidth){
                topItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight-1][sizes.left+sizes.dimWidth];
                bottomItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight][sizes.left+sizes.dimWidth];
            }
            if(topItem != bottomItem){
                crosshairsCountR++;
            }
        }

        for(var i = 0; i<tilesAndSizes.length-1; i++){

            var sizes = tilesAndSizes[i].sizes;
            var topItem = -1;
            var bottomItem = -1;
            if(isGridRowExists(sizes.top+sizes.dimHeight) && sizes.left-1>=0){
                topItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight-1][sizes.left-1];
                bottomItem = g_arrNestedGridRow[sizes.top+sizes.dimHeight][sizes.left-1];
            }
            if(topItem != bottomItem){
                crosshairsCountL++;
            }
        }
        return Math.max(crosshairsCountL, crosshairsCountR);
    }

    /**
     * get size resize info
     */
    function getSideResizeInfo(idToResize, newHeight, dimHeight){

        var currentTile = g_arrNestedItems[idToResize];
        var	tileHeight = currentTile.dimHeight;
        var tileWidth = currentTile.dimWidth;
        var tileLeft = currentTile.left;
        var tileTop = currentTile.top;
        var tileDimTop = parseInt(tileTop / (g_nestedWork.colWidth + g_nestedWork.currentGap));
        var tileDimLeft = parseInt(tileLeft / (g_nestedWork.colWidth + g_nestedWork.currentGap));
        var newSideHeight = tileHeight - newHeight + dimHeight;

        var sideSizes = resizeToNewHeight(idToResize, newSideHeight, true);
        var output = [];
        output.push({"tileID": idToResize, "sizes": sideSizes});
        return output;
    }

    /**
     * apply resizes to fix column
     */
    function applyResizes(resizeTilesAndSizes){

        for(var i = 0; i<resizeTilesAndSizes.length; i++){
            var sizes = resizeTilesAndSizes[i].sizes;
            var tileID = resizeTilesAndSizes[i].tileID;
            g_arrNestedItems[tileID]=jQuery.extend(true, {}, sizes);
            putImageToGridRow(tileID, sizes, sizes.left, sizes.top);
        }

    }

    /**
     * redistribute heights in column
     * returns current item sizes
     */
    function redistributeColumnItems(columnInfo, columnWidth){

        var originalHeight = 0;
        var columnHeight = 0;
        var objTiles = [];
        var cordX = 0, cordY = 0;

        for(var i = 0; i<columnInfo[1].length; i++){
            var tileID = columnInfo[1][i];
            var currentTile = g_arrNestedItems[columnInfo[1][i]];
            columnHeight += currentTile.dimHeight;
            if(i==0){
                var sizes = resizeToNewWidth(tileID, columnWidth, true);
                originalHeight += sizes.dimHeight;
                objTiles.push([columnInfo[1][i], sizes.dimHeight]);
                continue;
            }
            originalHeight += currentTile.dimHeight;
            objTiles.push([tileID, currentTile.dimHeight]);
        }

        cordX = currentTile.left;
        cordY = currentTile.top;

        var tempHeight = columnHeight;
        var output = [];

        for(var i = objTiles.length-1; i>=0; i--){
            var tileID = objTiles[i][0];
            var newHeight;
            if(i != 0) {
                newHeight = Math.max(Math.round(columnHeight*1/3),Math.floor(objTiles[i][1] * (columnHeight / originalHeight)));
                tempHeight = tempHeight - newHeight;
                sizes = resizeToNewHeight(tileID, newHeight, true);
                sizes.left = cordX;
                sizes.top = cordY;
                output.push({"tileID": tileID, "sizes": sizes});
                cordY += sizes.dimHeight;
            } else {
                newHeight = tempHeight;
                sizes = resizeToNewHeight(tileID, newHeight, true);
                sizes.left = cordX;
                sizes.top = cordY;
                output.push({"tileID": tileID, "sizes": sizes});
            }
        }
        return output;
    }

    /**
     * Calculate num of objects in current column and return they are ID's
     */
    function getGridColumnHeight(tileID, dimWidth, column){
        var tempY = g_nestedWork.gridY-1;
        var curImage = 0;
        var prevImage = 0;
        var columnHeight = 1;
        var imagesIDs = [];
        var toReturn = [];
        imagesIDs.push(tileID);
        if(tempY>=0){
            prevImage = 0;
            while(tempY>=0){
                curImage = g_arrNestedGridRow[tempY][column];
                if( (typeof g_arrNestedGridRow[tempY][column-1] === 'undefined' || g_arrNestedGridRow[tempY][column-1] != g_arrNestedGridRow[tempY][column])
                    &&(typeof g_arrNestedGridRow[tempY][column+dimWidth] === 'undefined' || g_arrNestedGridRow[tempY][column+dimWidth-1] != g_arrNestedGridRow[tempY][column+dimWidth])
                    &&(g_arrNestedGridRow[tempY][column]==g_arrNestedGridRow[tempY][column+dimWidth-1])){
                    if(prevImage != curImage){
                        columnHeight++;
                        imagesIDs.push(curImage);
                    }
                } else {
                    toReturn.push(columnHeight);
                    toReturn.push(imagesIDs);
                    return toReturn;
                }
                tempY--;
                prevImage = curImage;
            }
            toReturn.push(columnHeight);
            toReturn.push(imagesIDs);
            return toReturn;
        }
        return [0, []];
    }

    /**
     * get new height based on left and right difference
     */
    function getGridImageVerticalDifference(column, sizes){
        var newHeightR = 0;
        var newHeightL = 0;
        var dimWidth = sizes.dimWidth;
        var dimHeight = sizes.dimHeight;
        var leftID = 0;
        var rightID = 0;
        var array = jQuery.map(g_arrNestedGridRow, function(value, index) {
            return [value];
        });

        if(typeof array[g_nestedWork.gridY] === 'undefined' || typeof array[g_nestedWork.gridY][column-1]=== 'undefined'){
            newHeightL = 0;
        } else {
            var tempY=0;
            while(true){
                if(typeof g_arrNestedGridRow[g_nestedWork.gridY+tempY] !== 'undefined' && g_arrNestedGridRow[g_nestedWork.gridY+tempY][column-1] != -1 ){
                    leftID = g_arrNestedGridRow[g_nestedWork.gridY+tempY][column-2];
                    tempY++;
                    newHeightL++;
                } else {
                    break;
                }
            }
        }

        if(typeof array[g_nestedWork.gridY] === 'undefined' || typeof array[g_nestedWork.gridY][column+dimWidth]=== 'undefined'){
            newHeightR = 0;
        } else {
            tempY=0;
            while(true){
                if(typeof g_arrNestedGridRow[g_nestedWork.gridY+tempY] !== 'undefined' && g_arrNestedGridRow[g_nestedWork.gridY+tempY][column+dimWidth] != -1 ){
                    rightID = g_arrNestedGridRow[g_nestedWork.gridY+tempY][column+dimWidth+1];
                    tempY++;
                    newHeightR++;
                } else {
                    break;
                }
            }
        }

        var newHeight = 0;
        var idToResize = 0;
        if(Math.abs(dimHeight - newHeightL) < Math.abs(dimHeight - newHeightR) && newHeightL != 0) {
            newHeight = newHeightL;
            idToResize = leftID;
        } else if (newHeightR !=0) {
            newHeight = newHeightR;
            idToResize = rightID;
        } else {
            newHeight = dimHeight; //malo li
        }

        var output = {"newHeight": newHeight, "idToResize": idToResize};

        return output;
    }

    /**
     * resize to new Dim width
     */
    function resizeToNewWidth(tileID, newDimWidth, toReturn) {
        if(!toReturn){
            toReturn = false;
        }

        var colWidth = g_nestedWork.colWidth;
        var gapWidth = g_nestedWork.currentGap;
        var currentTile = g_arrNestedItems[tileID];
        var imgWidth = currentTile.imgWidth;
        var imgHeight = currentTile.imgHeight;
        var ratio = imgWidth / imgHeight;
        dimWidth = newDimWidth;
        dimHeight = Math.round(dimWidth / ratio);
        if(toReturn == true){
            var sizes = jQuery.extend(true, {}, currentTile);
            sizes.dimWidth = dimWidth;
            sizes.dimHeight = dimHeight;
            sizes.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
            sizes.height = dimHeight * colWidth + gapWidth * (dimHeight - 1);
            return sizes;
        }
        currentTile.dimWidth = dimWidth;
        currentTile.dimHeight = dimHeight;
        currentTile.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
        currentTile.height = dimHeight * colWidth + gapWidth * (dimHeight - 1);
    }

    /**
     * resize to new height without width changing
     */
    function resizeToNewHeight(tileID, newDimHeight, toReturn) {

        if(!toReturn){
            toReturn = false;
        }

        var currentTile = g_arrNestedItems[tileID];
        var dimWidth = currentTile.dimWidth;
        var colWidth = g_nestedWork.colWidth;
        var gapWidth = g_nestedWork.currentGap;

        if(toReturn == true){
            var sizes = jQuery.extend(true, {}, currentTile);

            sizes.dimHeight = newDimHeight;
            sizes.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
            sizes.height = newDimHeight * colWidth + gapWidth * (newDimHeight - 1);

            return sizes;
        }

        currentTile.dimHeight = newDimHeight;
        currentTile.width = dimWidth * colWidth + gapWidth * (dimWidth - 1);
        currentTile.height = newDimHeight * colWidth + gapWidth * (newDimHeight - 1);
    }

    /**
     * calc resize koef
     */
    function calcResizeRatio(objTilesAndSizes){
        var tempResizes = 0;
        var tempNum = 0;

        for(var i = 0; i<objTilesAndSizes.length; i++){
            var sizes = g_arrNestedItems[objTilesAndSizes[i].tileID];
            if((sizes.dimHeight != 0) && (sizes.height != 0)){
                resizeVal = (sizes.dimWidth/sizes.dimHeight)/(sizes.imgWidth/sizes.imgHeight);
            } else {
                return;
            }
            if(resizeVal < 1){
                resizeVal = 1/resizeVal;
            }
            tempResizes += resizeVal;
            tempNum++;
        }
        return tempResizes/tempNum;
    }

    /**
     * check for column break
     */
    function isGridImageAligned(dimWidth, column){
        var y = g_nestedWork.gridY-1;
        if(y<=0 || isGridRowExists(y) == false){
            return false;
        }
        if(g_arrNestedGridRow[y][column+dimWidth-1]!=g_arrNestedGridRow[y][column+dimWidth]) {
            return true;
        }

        return false;
    }

    /**
     * get free line length in GridRow
     */
    function getTotalFreeFromPosition(column){
        var x = column;
        var totalFree = 0;
        if(isGridRowExists(g_nestedWork.gridY) == true){
            while(isGridCellTaken(g_nestedWork.gridY, x) == false){
                totalFree ++;
                x++;
            }
        } else {
            totalFree = g_nestedWork.maxColumns;
        }
        return totalFree;
    }

    /**
     * is nestedGridRow row exists
     */
    function isGridRowExists(y){
        if(typeof g_arrNestedGridRow[y] === 'undefined'){
            return false;
        }
        return true;
    }


    /**
     * put image to grid row
     */
    function putImageToGridRow(id, sizes, gridX, gridY){

    	for (var y = 0; y < sizes.dimHeight; y++) {
            for (var x = 0; x < sizes.dimWidth; x++) {
                if (isGridRowExists(gridY+y) == 0) {
                    addGridRow(gridY+y);
                }

                setGridCellValue(gridY+y, gridX+x, id);
            }
        }
    }

    /**
     * add grid with Y index
     */
    function addGridRow(y){
        g_arrNestedGridRow[y] = new Object;
        for (var t = 0; t < g_nestedWork.maxColumns; t++) {
            g_arrNestedGridRow[y][t] = -1;
        }
    }

    /**
     * isGridRowCellTaken
     */
    function isGridCellTaken(y,x){
        return (g_arrNestedGridRow[y][x] != -1);
    }

    /**
     * set nestedGridRow cell value
     */
    function setGridCellValue(y,x,value){
        g_arrNestedGridRow[y][x]=value;
    }


    /**
     * draw nested images
     */
    function drawNestedImages(toShow){

        if(!toShow)
            var toShow = false;

        doBeforeTransition();

        for(var i = 0; i<g_arrNestedItems.length; i++){
            drawNestedImage(i, toShow);
        }

        g_objParent.height(g_nestedWork.maxColHeight);

        doAfterTransition();
    }


    /**
     * draw nested image
     */
    function drawNestedImage(i, toShow){

        var objTile = g_thumbs.getThumbByIndex(i);

        var sizes = g_arrNestedItems[i];
        var newY = sizes.top * (g_nestedWork.colWidth + g_nestedWork.currentGap);
        var newX = g_nestedWork.addX + sizes.left * (g_nestedWork.colWidth + g_nestedWork.currentGap);

        g_objTileDesign.resizeTile(objTile, sizes.width, sizes.height, g_objTileDesign.resizemode.VISIBLE_ELEMENTS);

        g_functions.placeElement(objTile, newX, newY);

        if(newY + sizes.height > g_nestedWork.maxColHeight){
            g_nestedWork.maxColHeight = newY + sizes.height;
        };

        if(toShow == true){
            objTile.fadeTo(0, 1);
        }

    }


	function __________COMMON_AND_EVENTS_______(){};


	/**
	 * on resize event
	 */
	function onResize(){

		if(g_temp.isFirstTimeRun == true)
			return(true);

		if(g_temp.isAllLoaded == false)
			return(false);

		switch(g_options.tiles_type){
			case "columns":
				placeTiles(false);
			break;
			case "justified":
				placeJustified(false);
			break;
            case "nested":

            	var isMobileMode = g_gallery.isMobileMode();
            	if(isMobileMode == true){
            		placeTiles(false);
            	}
            	else
            		placeNestedImages(false);

            break;
		}

	}


	/**
	 * init panel events
	 */
	function initEvents(){

		//only on first placed start size change event
		g_objThis.on(t.events.ALL_TILES_LOADED, function(){

			if(g_temp.isAllLoaded == true)
				return(true);

			g_temp.isAllLoaded = true;

			/************ STEVEN KITTERMAN CHANGE -- added load firing event ************/
			g_objGallery.trigger(g_gallery.events.LOAD);
			/************ END CHANGE --  ************/
		});

		g_objGallery.on(g_gallery.events.SIZE_CHANGE, onResize);

		g_objTileDesign.initEvents();

	}


	/**
	 * run the gallery after init and set html
	 */
	function run(){

		//show tiles
		g_objWrapper.children(".ug-tile").show();

		if(g_temp.isFirstTimeRun == true){
			initEvents();
		}

		g_objTileDesign.run();

		switch(g_options.tiles_type){
			default:
			case "columns":
				runColumnsType();
			break;
			case "justified":
				runJustifiedType();
			break;
			case "nested":
				runNestedType();
			break;
		}


		g_temp.isFirstTimeRun = false;
	}


	/**
	 * destroy the events
	 */
	this.destroy = function(){

		g_objGallery.off(g_gallery.events.SIZE_CHANGE);
		g_objTileDesign.destroy();
	}

	/**
	 * set the custom size mode.
	 * set it before the init
	 */
	this.setFixedSizeMode = function(){
		g_temp.isFixedMode = true;
		g_objTileDesign.setFixedMode();
	}


	/**
	 * init function for avia controls
	 */
	this.init = function(gallery, customOptions){

		init(gallery, customOptions);
	}


	/**
	 * set html
	 */
	this.setHtml = function(objParent){
		setHtml(objParent);
	}

	/**
	 * get tile design object
	 */
	this.getObjTileDesign = function(){
		return(g_objTileDesign);
	}

	/**
	 * set html and properties
	 */
	this.run = function(){
		run();
	}


}

/**
 * tiles design class
 */
function UGTileDesign(){

	var t = this, g_objThis = jQuery(this);
	var g_gallery = new UniteGalleryMain(), g_objGallery;
	var g_functions = new UGFunctions(), g_objParentWrapper, g_objWrapper;
	var g_thumbs = new UGThumbsGeneral(), g_items;

	this.resizemode = {			//modes constants for resize tile
		FULL: "full",
		WRAPPER_ONLY: "wrapper_only",
		VISIBLE_ELEMENTS: "visible_elements"
	};

	this.sizeby = {				//sizeby option constants
		GLOBAL_RATIO: "global_ratio",
		TILE_RATIO: "tile_ratio",
		IMAGE_RATIO: "image_ratio",
		CUSTOM: "custom"
	};

	this.events = {
			TILE_CLICK: "tile_click"
	};

	var g_options = {

			tile_width: 250,						//in case of fixed size: tile width
			tile_height: 200,						//in case of fixed size: tile height
			tile_size_by:t.sizeby.IMAGE_RATIO,		//image ratio, tile ratio , global_ratio - decide by what parameter resize the tile
			tile_visible_before_image:false,		//tile visible before image load

			tile_enable_background:true,			//enable backgruond of the tile
			tile_background_color: "#F0F0F0",		//tile background color

			tile_enable_border:false,				//enable border of the tile
			tile_border_width:3,					//tile border width
			tile_border_color:"#F0F0F0",			//tile border color
			tile_border_radius:0,					//tile border radius (applied to border only, not to outline)

			tile_enable_outline: false,				//enable outline of the tile (works only together with the border)
			tile_outline_color: "#8B8B8B",			//tile outline color

			tile_enable_shadow:false,				//enable shadow of the tile
			tile_shadow_h:1,						//position of horizontal shadow
			tile_shadow_v:1,						//position of vertical shadow
			tile_shadow_blur:3,						//shadow blur
			tile_shadow_spread:2,					//shadow spread
			tile_shadow_color:"#8B8B8B",			//shadow color

			tile_enable_action:	true,				//enable tile action on click like lightbox
			tile_as_link: false,					//act the tile as link, no lightbox will appear
			tile_link_newpage: true,				//open the tile link in new page

			tile_enable_overlay: true,				//enable tile color overlay (on mouseover)
			tile_overlay_opacity: 0.4,				//tile overlay opacity
			tile_overlay_color: "#000000",			//tile overlay color

			tile_enable_icons: true,				//enable icons in mouseover mode
			tile_show_link_icon: false,				//show link icon (if the tile has a link). In case of tile_as_link this option not enabled
			tile_videoplay_icon_always_on: 'never',	//'always', 'never', 'mobile_only', 'desktop_only' always show video play icon
			tile_space_between_icons: 26,			//initial space between icons, (on small tiles it may change)

			tile_enable_image_effect:false,			//enable tile image effect
			tile_image_effect_type: "bw",			//bw, blur, sepia - tile effect type
			tile_image_effect_reverse: false,		//reverce the image, set only on mouseover state

			tile_enable_textpanel: false,			 //enable textpanel
			tile_textpanel_source: "title",			 //title,desc,desc_title,title_and_desc. source of the textpanel. desc_title - if description empty, put title
			tile_textpanel_always_on: false,		 //textpanel always visible - for inside type
			tile_textpanel_appear_type: "slide",	 //slide, fade - appear type of the textpanel on mouseover
			tile_textpanel_position:"inside_bottom", //inside_bottom, inside_top, inside_center, top, bottom the position of the textpanel
			tile_textpanel_offset:0					 //vertical offset of the textpanel
	};


	var g_defaults = {
			thumb_color_overlay_effect: true,
			thumb_overlay_reverse: true,
			thumb_image_overlay_effect: false,
			tile_textpanel_enable_description: false,
			tile_textpanel_bg_opacity: 0.6,
			tile_textpanel_padding_top:8,
			tile_textpanel_padding_bottom: 8
	};

	var g_temp = {
		ratioByHeight:0,
		ratioByWidth:0,
		eventSizeChange: "thumb_size_change",
		funcCustomTileHtml: null,
		funcCustomPositionElements: null,
		funcParentApproveClick: null,
		isSaparateIcons: false,
		tileInnerReduce: 0,		//how much reduce from the tile inner elements from border mostly
		isTextpanelOutside: false,	//is the textpanel is out of tile image border
		hasImageContainer:false,
		isVideoplayIconAlwaysOn:false,
		isTextPanelHidden:false
	};


	/**
	 * init the tile object
	 */
	function init(gallery, customOptions){

		g_gallery = gallery;

		g_objGallery = jQuery(gallery);

		var objects = g_gallery.getObjects();
		g_objWrapper = objects.g_objWrapper;

		g_items = g_gallery.getArrItems();

		g_options = jQuery.extend(g_options, g_defaults);

		g_options = jQuery.extend(g_options, customOptions);

		modifyOptions();

		g_thumbs.init(gallery, g_options);

		var objCustomOptions = {allow_onresize:false};

		var customThumbsAdd = ["overlay"];

		if(g_temp.funcCustomTileHtml)
			customThumbsAdd = [];

		g_thumbs.setCustomThumbs(setHtmlThumb, customThumbsAdd, objCustomOptions);

		//get thumb default options too:
		var thumbOptions = g_thumbs.getOptions();
		g_options = jQuery.extend(g_options, thumbOptions);

		//set ratios of fixed mode
		g_temp.ratioByWidth = g_options.tile_width / g_options.tile_height;
		g_temp.ratioByHeight = g_options.tile_height / g_options.tile_width;


		//set if tile has image container
		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO && g_temp.isTextpanelOutside)
			g_temp.hasImageContainer = true;

	}


	/**
	 * set thumb and textpanel options according tile options
	 */
	function modifyOptions(){

		//set overlay related options
		if(g_options.tile_enable_overlay == true){

			g_options.thumb_overlay_opacity = g_options.tile_overlay_opacity;
			g_options.thumb_overlay_color = g_options.tile_overlay_color;

		}else if(g_options.tile_enable_icons == false){		//if nothing on overlay - turn it off
			g_options.thumb_color_overlay_effect = false;
		}else{											//if icons enabled - make it transparent
			g_options.thumb_overlay_opacity = 0;
		}

		//set item as link
		if(g_options.tile_as_link){
			g_options.thumb_wrapper_as_link = true;
			g_options.thumb_link_newpage = g_options.tile_link_newpage;
		}

		//outline cannot appear without border
		if(g_options.tile_enable_outline == true && g_options.tile_enable_border == false)
			g_options.tile_enable_outline = false;

		//set inner reduce value - in case of the border
		g_temp.tileInnerReduce = 0;
		if(g_options.tile_enable_border){
			g_temp.tileInnerReduce = g_options.tile_border_width * 2;
			g_thumbs.setThumbInnerReduce(g_temp.tileInnerReduce);
		}

		//check if saparate icons
		g_temp.isSaparateIcons = !g_functions.isRgbaSupported();

		//set if the textpanel is enabled and outside
		if(g_options.tile_enable_textpanel == true){

			//optimize for touch device
			switch(g_options.tile_textpanel_position){
				case "top":
					g_options.tile_textpanel_align = "top";
				case "bottom":
					g_temp.isTextpanelOutside = true;
					g_options.tile_textpanel_always_on = true;
					g_options.tile_textpanel_offset = 0;
				break;
				case "inside_top":
					g_options.tile_textpanel_align = "top";
				break;
				case "middle":
					g_options.tile_textpanel_align = "middle";
					g_options.tile_textpanel_appear_type = "fade";
				break;
			}

			//if text panel oppearing with the overlay, icons should be saparated
			if(g_options.tile_textpanel_always_on == false)
				g_temp.isSaparateIcons = true;

		}


		//if the textpanel offset is not from the border, it's always fade.
		if(g_options.tile_textpanel_offset != 0){
			g_options.tile_textpanel_appear_type = "fade";
			g_options.tile_textpanel_margin = g_options.tile_textpanel_offset;
		}

		//enable description if needed
		if(g_options.tile_textpanel_source == "title_and_desc"){
			g_options.tile_textpanel_enable_description = true;
			g_options.tile_textpanel_desc_style_as_title = true;
		}

	}


	/**
	 * set options before render
	 */
	function modifyOptionsBeforeRender(){

		var isMobile = g_gallery.isMobileMode();

		//set text panel show / hide

		g_temp.isTextPanelHidden = false;
		if(isMobile == true && g_options.tile_textpanel_always_on == false)
			g_temp.isTextPanelHidden = true;


		//set video icon always on true / false

		g_temp.isVideoplayIconAlwaysOn = g_options.tile_videoplay_icon_always_on;

		switch(g_options.tile_videoplay_icon_always_on){
			case "always":
				g_temp.isVideoplayIconAlwaysOn = true;
			break;
			case "never":
				g_temp.isVideoplayIconAlwaysOn = false;
			break;
			case "mobile_only":
				g_temp.isVideoplayIconAlwaysOn = (isMobile == true)?true:false;
			break;
			case "desktop_only":
				g_temp.isVideoplayIconAlwaysOn = (isMobile == false)?true:false;
			break;
		}


	}


	/**
	 * set thumb html
	 */
	function setHtmlThumb(objThumbWrapper, objItem){

		objThumbWrapper.addClass("ug-tile");

		if(g_temp.funcCustomTileHtml){
			g_temp.funcCustomTileHtml(objThumbWrapper, objItem);
			return(false);
		}

		var html = "";

		//add image container
		if(g_temp.hasImageContainer == true){
			html += "<div class='ug-image-container ug-trans-enabled'>";
		}

		//add thumb image:
		var classImage = "ug-thumb-image";

		if(g_options.tile_enable_image_effect == false || g_options.tile_image_effect_reverse == true)
			classImage += " ug-trans-enabled";

		var imageAlt = g_functions.stripTags(objItem.title);
		imageAlt = g_functions.htmlentitles(imageAlt);

		/************ STEVEN KITTERMAN CHANGE ************/
		html += "<img src=\""+g_functions.escapeDoubleSlash(objItem.urlThumb)+"\" alt='"+imageAlt+"' class='"+classImage+
			"' data-backup-width='" + objItem.thumbWidth + "' data-backup-height='" + objItem.thumbHeight + "'>";
			/************ END CHANGE ************/

		if(g_temp.hasImageContainer == true){
			html += "</div>";
		}

		objThumbWrapper.append(html);


		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO){
			objThumbWrapper.fadeTo(0,0);		//turn on in thumbsGeneral
		}

		//---- set thumb styles ----

		//set border:
		var objCss = {};

		if(g_options.tile_enable_background == true){
			objCss["background-color"] = g_options.tile_background_color;
		}

		if(g_options.tile_enable_border == true){
			objCss["border-width"] = g_options.tile_border_width+"px";
			objCss["border-style"] = "solid";
			objCss["border-color"] = g_options.tile_border_color;

			if(g_options.tile_border_radius)
				objCss["border-radius"] = g_options.tile_border_radius+"px";
		}

		//set outline:
		if(g_options.tile_enable_outline == true){
			objCss["outline"] = "1px solid " + g_options.tile_outline_color;
		}

		//set shadow
		if(g_options.tile_enable_shadow == true){
			var htmlShadow = g_options.tile_shadow_h+"px ";
			htmlShadow += g_options.tile_shadow_v+"px ";
			htmlShadow += g_options.tile_shadow_blur+"px ";
			htmlShadow += g_options.tile_shadow_spread+"px ";
			htmlShadow += g_options.tile_shadow_color;

			objCss["box-shadow"] = htmlShadow;
		}

		objThumbWrapper.css(objCss);


		//----- add icons

		var htmlAdd = "";

		if(g_options.tile_enable_icons){

			//add zoom icon
			if(g_options.tile_as_link == false && g_options.tile_enable_action == true){
				var iconPlayClass = "ug-button-play ug-icon-zoom";
				if(objItem.type != "image")
					iconPlayClass = "ug-button-play ug-icon-play";

				htmlAdd += "<div class='ug-tile-icon " + iconPlayClass + "' style='display:none'></div>";
			}

			//add link icon
			if(objItem.link && g_options.tile_show_link_icon == true || g_options.tile_as_link == true){

				if(g_options.tile_as_link == false){
					var linkTarget = "";
					if(g_options.tile_link_newpage == true)
						linkTarget = " target='_blank'";

					htmlAdd += "<a href='"+objItem.link+"'"+linkTarget+" class='ug-tile-icon ug-icon-link'></a>";
				}else{
					htmlAdd += "<div class='ug-tile-icon ug-icon-link' style='display:none'></div>";
				}

			}

		var toSaparateIcon = g_temp.isSaparateIcons;
		if(toSaparateIcon == false && objItem.type != "image" && g_temp.isVideoplayIconAlwaysOn == true)
			toSaparateIcon = true;

		if(toSaparateIcon)		//put the icons on the thumb
			var objOverlay = objThumbWrapper;
		else
			var objOverlay = objThumbWrapper.children(".ug-thumb-overlay");

		objOverlay.append(htmlAdd);

		var objButtonZoom = objOverlay.children("." + iconPlayClass);

		if(objButtonZoom.length == 0)
			objButtonZoom = null;
		else
			objButtonZoom.hide();

		var objButtonLink = objOverlay.children(".ug-icon-link");

		if(objButtonLink.length == 0)
			objButtonLink = null;
		else
			objButtonLink.hide();

		//if only zoom icon, make the tile clickable for lightbox open
		if(!objButtonLink && g_options.tile_enable_action == true)
			objThumbWrapper.addClass("ug-tile-clickable");

		}  //if icons enabled
		else{		//if the icons don't enabled, set the tile clickable

			if(g_options.tile_enable_action == true)
				objThumbWrapper.addClass("ug-tile-clickable");

		}

		//add image overlay
		if(g_options.tile_enable_image_effect == true){

			var imageEffectClassAdd = "";
			if(g_options.tile_image_effect_reverse == false)
				imageEffectClassAdd = " ug-trans-enabled";

			var imageOverlayHtml = "<div class='ug-tile-image-overlay"+imageEffectClassAdd+"' >";
			var imageEffectClass = " ug-"+g_options.tile_image_effect_type+"-effect";

			imageOverlayHtml += "<img src=\""+g_functions.escapeDoubleSlash(objItem.urlThumb)+"\" alt='"+objItem.title+"' class='"+imageEffectClass + imageEffectClassAdd+"'>";
			imageOverlayHtml += "</div>";

			objThumbWrapper.append(imageOverlayHtml);

			//hide the image overlay if reversed
			if(g_options.tile_image_effect_reverse == true){
				objThumbWrapper.children(".ug-tile-image-overlay").fadeTo(0,0);
			}

		}


		//add text panel
		if(g_options.tile_enable_textpanel == true){

			var objTextPanel = new UGTextPanel();
			objTextPanel.init(g_gallery, g_options, "tile");

			//set transition class
			var textpanelAddClass = "";
			if(g_options.tile_textpanel_always_on == true || g_temp.isTextpanelOutside == true)
				textpanelAddClass = "ug-trans-enabled";

			objTextPanel.appendHTML(objThumbWrapper, textpanelAddClass);

			var panelTitle = objItem.title;
			var panelDesc = "";

			switch(g_options.tile_textpanel_source){
				case "desc":
				case "description":
					panelTitle = objItem.description;
				break;
				case "desc_title":
					if(objItem.description != "")
						panelTitle = objItem.description;
				break;
				case "title_and_desc":
					panelTitle = objItem.title;
					panelDesc = objItem.description;
				break;
			}

			objTextPanel.setTextPlain(panelTitle, panelDesc);

			if(g_options.tile_textpanel_always_on == false)
				objTextPanel.getElement().fadeTo(0,0);

			objThumbWrapper.data("objTextPanel", objTextPanel);

			//if textpanel always on, it has to be under the overlay
			if(g_options.tile_textpanel_always_on == true){
				var textPanelElement = getTextPanelElement(objThumbWrapper);
				textPanelElement.css("z-index",2);
			}

			//if text panel is outside, clone textpanel
			if(g_temp.isTextpanelOutside == true){

				var htmlClone = "<div class='ug-tile-cloneswrapper'></div>";
				objThumbWrapper.append(htmlClone);
				var objCloneWrapper = objThumbWrapper.children(".ug-tile-cloneswrapper");

				var objTextPanelClone = new UGTextPanel();
				objTextPanelClone.init(g_gallery, g_options, "tile");
				objTextPanelClone.appendHTML(objCloneWrapper);
				objTextPanelClone.setTextPlain(panelTitle, panelDesc);
				objThumbWrapper.data("objTextPanelClone", objTextPanelClone);
			}

		}

		//add additional html
		if(objItem.addHtml !== null)
			objThumbWrapper.append(objItem.addHtml);

	}


	/**
	 * load tile image, place the image on load
	 */
	this.loadTileImage = function(objTile){

		var objImage = t.getTileImage(objTile);

		g_functions.checkImagesLoaded(objImage, null, function(objImage,isError){
			onPlaceImage(null, objTile, jQuery(objImage));
		});

	}

	function _________________GETTERS________________(){};



	/**
	 * get image overlay
	 */
	function getTileOverlayImage(objTile){
		var objOverlayImage = objTile.children(".ug-tile-image-overlay");
		return(objOverlayImage);
	}

	/**
	 * get tile color overlay
	 */
	function getTileOverlay(objTile){
		var objOverlay = objTile.children(".ug-thumb-overlay");
		return(objOverlay);
	}


	/**
	 * get image container
	 */
	function getTileImageContainer(objTile){
		if(g_temp.hasImageContainer == false)
			return(null);

		var objImageContainer = objTile.children(".ug-image-container");

		return(objImageContainer);
	}


	/**
	 * get image effect
	 */
	function getTileImageEffect(objTile){
		var objImageEffect = objTile.find(".ug-tile-image-overlay img");
		return(objImageEffect);
	}


	/**
	 * get text panel
	 */
	function getTextPanel(objTile){
		var objTextPanel = objTile.data("objTextPanel");

		return(objTextPanel);
	}


	/**
	 * get cloned text panel
	 */
	function getTextPanelClone(objTile){
		var objTextPanelClone = objTile.data("objTextPanelClone");

		return(objTextPanelClone);

	}


	/**
	 * get text panel element from the tile
	 */
	function getTextPanelElement(objTile){
		var objTextPanel = objTile.children(".ug-textpanel");

		return(objTextPanel);
	}


	/**
	 * get text panel element cloned
	 */
	function getTextPanelCloneElement(objTile){
		var objTextPanel = objTile.find(".ug-tile-cloneswrapper .ug-textpanel");

		if(objTextPanel.length == 0)
			throw new Error("text panel cloned element not found");

		return(objTextPanel);

	}


	/**
	 * get text panel height
	 */
	function getTextPanelHeight(objTile){

		if(g_temp.isTextpanelOutside == true)
			var objTextPanel = getTextPanelCloneElement(objTile);
		else
			var objTextPanel = getTextPanelElement(objTile);


		if(!objTextPanel)
			return(0);

		var objSize = g_functions.getElementSize(objTextPanel);
		return(objSize.height);
	}


	/**
	 * get button link
	 */
	function getButtonLink(objTile){
		var objButton = objTile.find(".ug-icon-link");
		if(objButton.length == 0)
			return(null);

		return objButton;
	}


	/**
	 * get tile ratio
	 */
	function getTileRatio(objTile, fromWhere){

		//global ratio
		var ratio = g_temp.ratioByHeight;

		switch(g_options.tile_size_by){
			default:		//global ratio
				ratio = g_temp.ratioByHeight;
			break;
			case t.sizeby.IMAGE_RATIO:

				if(!objTile)
					throw new Error("tile should be given for tile ratio");

				var item = t.getItemByTile(objTile);

				if(typeof item.thumbRatioByHeight != "undefined"){

					if(item.thumbRatioByHeight == 0){
						trace(item);
						throw new Error("the item ratio not inited yet");
					}

					ratio = item.thumbRatioByHeight;
				}

			break;
			case t.sizeby.CUSTOM:
				return null;
			break;
		}

		return(ratio);
	}


	/**
	 * get button zoom
	 */
	function getButtonZoom(objTile){
		var objButton = objTile.find(".ug-button-play");

		if(objButton.length == 0)
			return(null);

		return objButton;
	}


	/**
	 * tells if the tile is over style
	 */
	function isOverStyle(objTile){

		if(objTile.hasClass("ug-thumb-over"))
			return(true);

		return(false);
	}


	/**
	 * check if the tile is clickable
	 */
	function isTileClickable(objTile){

		return objTile.hasClass("ug-tile-clickable");
	}


	/**
	 * return if the items icon always on
	 */
	function isItemIconAlwaysOn(objItem){

		if(g_options.tile_enable_icons == true && g_temp.isVideoplayIconAlwaysOn == true && objItem.type != "image")
			return(true);

		return(false);
	}


	function _________________SETTERS________________(){};


	/**
	 * position tile images elements
	 * width, height - tile width height
	 */
	function positionElements_images(objTile, width, height, visibleOnly){

		var objImageOverlay = getTileOverlayImage(objTile);
		var objThumbImage = t.getTileImage(objTile);
		var objImageEffect = getTileImageEffect(objTile);

		//reduce borders
		width -= g_temp.tileInnerReduce;
		height -= g_temp.tileInnerReduce;

		var imagePosy = null;

		//reduce textpanel height
		if(g_temp.isTextpanelOutside == true){

			var textHeight = getTextPanelHeight(objTile);
			height -= textHeight;

			if(g_options.tile_textpanel_position == "top"){
				imagePosy = textHeight;
			}

			/**
			 * if has image container
			 */
			if(g_temp.hasImageContainer == true){
				var objImageContainer = getTileImageContainer(objTile);
				g_functions.setElementSize(objImageContainer, width, height);

				if(imagePosy !== null)
					g_functions.placeElement(objImageContainer, 0, imagePosy);
			}

		}

		//scale image
		if(g_options.tile_enable_image_effect == false){

			g_functions.scaleImageCoverParent(objThumbImage, width, height);

			if(g_temp.hasImageContainer == false && imagePosy !== null)
				g_functions.placeElement(objThumbImage, 0, imagePosy);

		}else{	//width the effect

			//set what to resize
			var dontResize = "nothing";
			if(visibleOnly === true && g_temp.isTextpanelOutside == false){
				if(g_options.tile_image_effect_reverse == true){
					dontResize = "effect";
				}else{
					dontResize = "image";
				}
			}

			//resize image effect
			if(dontResize != "effect"){
				g_functions.setElementSize(objImageOverlay, width, height);

				if(imagePosy !== null)
					g_functions.placeElement(objImageOverlay, 0, imagePosy);

				g_functions.scaleImageCoverParent(objImageEffect, width, height);
			}


			//resize image
			if(dontResize != "image"){

				if(g_temp.hasImageContainer == true){
					g_functions.scaleImageCoverParent(objThumbImage, width, height);
				}else{

					//if can't clone, resize
					if(dontResize == "effect"){
						g_functions.scaleImageCoverParent(objThumbImage, width, height);
						if(imagePosy !== null)
							g_functions.placeElement(objThumbImage, 0, imagePosy);
					}
					else
						g_functions.cloneElementSizeAndPos(objImageEffect, objThumbImage, false, null, imagePosy);

				}

			}



		}

	}


	/**
	 * position text panel
	 * panelType - default or clone
	 */
	function positionElements_textpanel(objTile, panelType, tileWidth, tileHeight){

		var panelWidth = null;
		if(tileWidth)
			panelWidth = tileWidth - g_temp.tileInnerReduce;

		if(tileHeight)
			tileHeight -= g_temp.tileInnerReduce;

		if(panelType == "clone"){
			var objTextPanelClone = getTextPanelClone(objTile);
			objTextPanelClone.refresh(true, true, panelWidth);
			var objItem = t.getItemByTile(objTile);
			objItem.textPanelCloneSizeSet = true;

			return(false);
		}

		var objTextPanel = getTextPanel(objTile);

		if(!objTextPanel)
			return(false);

		var panelHeight = null;

		//set panel height also
		if(g_temp.isTextpanelOutside == true)
			panelHeight = getTextPanelHeight(objTile);

		objTextPanel.refresh(false, true, panelWidth, panelHeight);

		var isPosition = (g_options.tile_textpanel_always_on == true || g_options.tile_textpanel_appear_type == "fade");

		if(isPosition){

			if(g_temp.isTextpanelOutside == true && tileHeight && g_options.tile_textpanel_position == "bottom"){

				var posy = tileHeight - panelHeight;
				objTextPanel.positionPanel(posy);
			}else
				objTextPanel.positionPanel();
		}

	}


	/**
	 * position the elements
	 */
	function positionElements(objTile){

		var objItem = t.getItemByTile(objTile);
		var objButtonZoom = getButtonZoom(objTile);
		var objButtonLink = getButtonLink(objTile);
		var sizeTile = g_functions.getElementSize(objTile);

		positionElements_images(objTile, sizeTile.width, sizeTile.height);

		//position text panel:
		if(g_options.tile_enable_textpanel == true)
			positionElements_textpanel(objTile, "regular", sizeTile.width, sizeTile.height);


		//position overlay:
		var overlayWidth = sizeTile.width - g_temp.tileInnerReduce;
		var overlayHeight = sizeTile.height - g_temp.tileInnerReduce;
		var overlayY = 0;
		if(g_temp.isTextpanelOutside == true){
			var textHeight = getTextPanelHeight(objTile);
			overlayHeight -= textHeight;
			if(g_options.tile_textpanel_position == "top")
				overlayY = textHeight;
		}

		var objOverlay = getTileOverlay(objTile);
		g_functions.setElementSizeAndPosition(objOverlay, 0, overlayY, overlayWidth, overlayHeight);

		//set vertical gap for icons
		if(objButtonZoom || objButtonLink){

			var gapVert = 0;
			if( g_options.tile_enable_textpanel == true && g_temp.isTextPanelHidden == false && g_temp.isTextpanelOutside == false){
				var objTextPanelElement = getTextPanelElement(objTile);
				var texPanelSize = g_functions.getElementSize(objTextPanelElement);
				if(texPanelSize.height > 0)
					gapVert = Math.floor((texPanelSize.height / 2) * -1);
			}

		}

		if(objButtonZoom && objButtonLink){
			var sizeZoom = g_functions.getElementSize(objButtonZoom);
			var sizeLink = g_functions.getElementSize(objButtonLink);
			var spaceBetween = g_options.tile_space_between_icons;

			var buttonsWidth = sizeZoom.width + spaceBetween + sizeLink.width;
			var buttonsX = Math.floor((sizeTile.width - buttonsWidth) / 2);

			//trace("X: "+buttonsX+" "+"space: " + spaceBetween);

			//if space more then padding, calc even space.
			if(buttonsX < spaceBetween){
				spaceBetween = Math.floor((sizeTile.width - sizeZoom.width - sizeLink.width) / 3);
				buttonsWidth = sizeZoom.width + spaceBetween + sizeLink.width;
				buttonsX = Math.floor((sizeTile.width - buttonsWidth) / 2);
			}

			g_functions.placeElement(objButtonZoom, buttonsX, "middle", 0 ,gapVert);
			g_functions.placeElement(objButtonLink, buttonsX + sizeZoom.width + spaceBetween, "middle", 0, gapVert);

		}else{

			if(objButtonZoom)
				g_functions.placeElement(objButtonZoom, "center", "middle", 0, gapVert);

			if(objButtonLink)
				g_functions.placeElement(objButtonLink, "center", "middle", 0, gapVert);

		}

		if(objButtonZoom)
			objButtonZoom.show();

		if(objButtonLink)
			objButtonLink.show();
	}


	/**
	 * set tiles htmls
	 */
	this.setHtml = function(objParent){
		g_objParentWrapper = objParent;

		modifyOptionsBeforeRender();

		g_thumbs.setHtmlThumbs(objParent);
	}


	/**
	 * set the overlay effect
	 */
	function setImageOverlayEffect(objTile, isActive){

		var objItem = t.getItemByTile(objTile);
		var objOverlayImage = getTileOverlayImage(objTile);

		var animationDuration = g_options.thumb_transition_duration;

		if(g_options.tile_image_effect_reverse == false){

			var objThumbImage = t.getTileImage(objTile);

			if(isActive){
				objThumbImage.fadeTo(0,1);
				objOverlayImage.stop(true).fadeTo(animationDuration, 0);
			}
			else
				objOverlayImage.stop(true).fadeTo(animationDuration, 1);

		}else{

			if(isActive){
				objOverlayImage.stop(true).fadeTo(animationDuration, 1);
			}
			else{
				objOverlayImage.stop(true).fadeTo(animationDuration, 0);
			}
		}

	}


	/**
	 * set textpanel effect
	 */
	function setTextpanelEffect(objTile, isActive){

		var animationDuration = g_options.thumb_transition_duration;

		var objTextPanel = getTextPanelElement(objTile);
		if(!objTextPanel)
			return(true);

		if(g_options.tile_textpanel_appear_type == "slide"){

			var panelSize = g_functions.getElementSize(objTextPanel);
			if(panelSize.width == 0)
				return(false);

			var startPos = -panelSize.height;
			var endPos = 0;
			var startClass = {}, endClass = {};

			var posName = "bottom";
			if(g_options.tile_textpanel_position == "inside_top")
				posName = "top";

			startClass[posName] = startPos+"px";
			endClass[posName] = endPos+"px";

			if(isActive == true){

				objTextPanel.fadeTo(0,1);

				if(objTextPanel.is(":animated") == false)
					objTextPanel.css(startClass);

				endClass["opacity"] = 1;

				objTextPanel.stop(true).animate(endClass, animationDuration);

			}else{

				objTextPanel.stop(true).animate(startClass, animationDuration);

			}

		}else{		//fade effect

			if(isActive == true){
				objTextPanel.stop(true).fadeTo(animationDuration, 1);
			}else{
				objTextPanel.stop(true).fadeTo(animationDuration, 0);
			}

		}

	}


	/**
	 * set thumb border effect
	 */
	function setIconsEffect(objTile, isActive, noAnimation){

		var animationDuration = g_options.thumb_transition_duration;
		if(noAnimation && noAnimation === true)
			animationDuration = 0;

		var g_objIconZoom = getButtonZoom(objTile);
		var g_objIconLink = getButtonLink(objTile);
		var opacity = isActive?1:0;

		if(g_objIconZoom)
			g_objIconZoom.stop(true).fadeTo(animationDuration, opacity);

		if(g_objIconLink)
			g_objIconLink.stop(true).fadeTo(animationDuration, opacity);

	}



	/**
	 * set tile over style
	 */
	function setOverStyle(data, objTile){

		objTile = jQuery(objTile);

		if(g_options.tile_enable_image_effect)
			setImageOverlayEffect(objTile, true);

		if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == false && g_temp.isTextPanelHidden == false)
			setTextpanelEffect(objTile, true);

		//show/hide icons - if saparate (if not, they are part of the overlay)
		//if the type is video and icon always on - the icon should stay
		if(g_temp.isSaparateIcons && g_options.tile_enable_icons == true){
			var isSet = (g_options.thumb_overlay_reverse == true);

			var objItem = t.getItemByTile(objTile);
			if(isItemIconAlwaysOn(objItem) == false)
				setIconsEffect(objTile, isSet, false);

		}

	}


	/**
	 * set normal style
	 */
	function setNormalStyle(data, objTile){

		objTile = jQuery(objTile);

		if(g_options.tile_enable_image_effect)
			setImageOverlayEffect(objTile, false);

		if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == false)
			setTextpanelEffect(objTile, false);

		//show/hide icons - if saparate (if not, they are part of the overlay)
		if(g_temp.isSaparateIcons == true && g_options.tile_enable_icons == true){

			var isSet = (g_options.thumb_overlay_reverse == true)?false:true;

			var objItem = t.getItemByTile(objTile);
			if(isItemIconAlwaysOn(objItem) == false)
				setIconsEffect(objTile, isSet, false);
			else{	//make icon always appear
				setIconsEffect(objTile, true, true);
			}

		}

	}


	/**
	 * set all tiles normal style
	 */
	function setAllTilesNormalStyle(objTileExcept){

		var objTiles = g_thumbs.getThumbs().not(objTileExcept);
		objTiles.each(function(index, objTile){
			g_thumbs.setThumbNormalStyle(jQuery(objTile));
		});

	}


	function _________________EVENTS________________(){};


	/**
	 * on tile size change, place elements
	 */
	function onSizeChange(data, objTile, forcePosition){

		objTile = jQuery(objTile);

		//position elements only if the image loaded (placed)
		if(g_options.tile_visible_before_image == true && objTile.data("image_placed") !== true && forcePosition !== true)
			return(true);

		positionElements(objTile);

		g_thumbs.setThumbNormalStyle(objTile);
	}


	/**
	 * on place image event after images loaded
	 */
	function onPlaceImage(data, objTile, objImage){

		positionElements(objTile);
		objImage.fadeTo(0,1);

		objTile.data("image_placed", true);
	}


	/**
	 * on tile click on mobile devices on normal state
	 * set the tile over state
	 */
	function onMobileClick(objTile){

		if(isTileClickable(objTile) == true){
			g_objThis.trigger(t.events.TILE_CLICK, objTile);
			return(true);
		}

		if(isOverStyle(objTile) == false){
			setAllTilesNormalStyle(objTile);
			g_thumbs.setThumbOverStyle(objTile);
		}

	}


	/**
	 * on tile click event
	 */
	function onTileClick(event){

		var objTile = jQuery(this);

		var tagname = objTile.prop("tagName").toLowerCase();
		var isApproved = true;
		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			isApproved = false;

		if(tagname == "a"){

			if(isApproved == false)
				event.preventDefault();

		}else{		//in case of div

			if(isOverStyle(objTile) == false){	//mobile click version

				if(isApproved == true)
					onMobileClick(objTile);

			}else{
				if(isTileClickable(objTile) == false)
					return(true);

				if(isApproved == true)
					g_objThis.trigger(t.events.TILE_CLICK, objTile);
			}


		}

	}


	/**
	 * click on zoom button (as tile click)
	 */
	function onZoomButtonClick(event){

		event.stopPropagation();

		var objTile = jQuery(this).parents(".ug-tile");

		var isApproved = true;

		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			isApproved = false;

		if(isOverStyle(objTile) == false){
			onMobileClick(objTile);
			return(true);
		}

		if(isApproved == true){
			g_objThis.trigger(t.events.TILE_CLICK, objTile);
			return(false);
		}

	}


	/**
	 * on link icon click
	 */
	function onLinkButtonClick(event){
		var objTile = jQuery(this).parents(".ug-tile");

		if(g_temp.funcParentApproveClick && g_temp.funcParentApproveClick() == false)
			event.preventDefault();

		//allow click only from over style
		if(isOverStyle(objTile) == false && g_options.tile_as_link == false){
			event.preventDefault();
			onMobileClick(objTile);
		}

	}


	/**
	 * init events
	 */
	this.initEvents = function(){

		g_thumbs.initEvents();

		//connect the over and normal style of the regular thumbs
		jQuery(g_thumbs).on(g_thumbs.events.SETOVERSTYLE, setOverStyle);
		jQuery(g_thumbs).on(g_thumbs.events.SETNORMALSTYLE, setNormalStyle);
		jQuery(g_thumbs).on(g_thumbs.events.PLACEIMAGE, onPlaceImage);

		g_objWrapper.on(g_temp.eventSizeChange, onSizeChange);

		g_objParentWrapper.delegate(".ug-tile .ug-button-play", "click", onZoomButtonClick);

		g_objParentWrapper.delegate(".ug-tile", "click", onTileClick);

		g_objParentWrapper.delegate(".ug-tile .ug-icon-link", "click", onLinkButtonClick);
	}


	/**
	 * destroy the element events
	 */
	this.destroy = function(){

		jQuery(g_thumbs).off(g_thumbs.events.SETOVERSTYLE);
		jQuery(g_thumbs).off(g_thumbs.events.SETNORMALSTYLE);
		jQuery(g_thumbs).off(g_thumbs.events.PLACEIMAGE);
		g_objWrapper.off(g_temp.eventSizeChange);

		if(g_options.tile_enable_textpanel == true){
			var objThumbs = g_thumbs.getThumbs();
			jQuery.each(objThumbs, function(index, thumb){
				var textPanel = getTextPanel(jQuery(thumb));
				if(textPanel)
					textPanel.destroy();
			});
		}

		g_thumbs.destroy();

	}


	/**
	 * external init
	 */
	this.init = function(gallery, g_thumbs, customOptions){

		init(gallery, g_thumbs, customOptions);
	}

	/**
	 * set fixed mode
	 */
	this.setFixedMode = function(){

		g_options.tile_size_by = t.sizeby.GLOBAL_RATIO;
		g_options.tile_visible_before_image = true;
	}


	/**
	 * set parent approve click function
	 */
	this.setApproveClickFunction = function(funcApprove){
		g_temp.funcParentApproveClick = funcApprove;
	}



	/**
	 * resize tile. If no size given, resize to original size
	 * the resize mode taken from resize modes constants, default is full
	 */
	this.resizeTile = function(objTile, newWidth, newHeight, resizeMode){

			//if textpanel outside - refresh the textpanel first
			if(g_temp.isTextpanelOutside == true)
				positionElements_textpanel(objTile, "clone", newWidth);

			if(!newWidth){

				var newWidth = g_options.tile_width;
				var newHeight = g_options.tile_height;

			}else{		//only height is missing
				if(!newHeight){

					var newHeight = t.getTileHeightByWidth(newWidth, objTile, "resizeTile");
				}
			}

			g_functions.setElementSize(objTile, newWidth, newHeight);

			switch(resizeMode){
				default:
				case t.resizemode.FULL:
					t.triggerSizeChangeEvent(objTile, true);
				break;
				case t.resizemode.WRAPPER_ONLY:
					return(true);
				break;
				case t.resizemode.VISIBLE_ELEMENTS:

					if(g_temp.funcCustomTileHtml){
						t.triggerSizeChangeEvent(objTile, true);
						return(true);
					}

					//resize images
					positionElements_images(objTile, newWidth, newHeight, true);

					//resize text panel, if visible
					if(g_options.tile_enable_textpanel == true && g_options.tile_textpanel_always_on == true && newWidth){
						positionElements_textpanel(objTile, "regular", newWidth, newHeight);
					}

				break;
			}

	}


	/**
	 * resize all tiles
	 */
	this.resizeAllTiles = function(newWidth, resizeMode){

		modifyOptionsBeforeRender();

		var newHeight = null;

		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO)
			newHeight = t.getTileHeightByWidth(newWidth,null,"resizeAllTiles");

		var objTiles = g_thumbs.getThumbs();
		objTiles.each(function(index, objTile){
			t.resizeTile(jQuery(objTile), newWidth, newHeight, resizeMode);
		});

	}


	/**
	 * trigger size change events
	 * the force is only for fixed size mode
	 */
	this.triggerSizeChangeEvent = function(objTile, isForce){

		if(!objTile)
			return(false);

		if(!isForce)
			var isForce = false;

		g_objWrapper.trigger(g_temp.eventSizeChange, [objTile, isForce]);

	}


	/**
	 * trigger size change event to all tiles
	 * the force is only for fixed mode
	 */
	this.triggerSizeChangeEventAllTiles = function(isForce){

		var objThumbs = g_thumbs.getThumbs();

		objThumbs.each(function(){
			var objTile = jQuery(this);

			t.triggerSizeChangeEvent(objTile, isForce);

		});

	}





	/**
	 * disable all events
	 */
	this.disableEvents = function(){
		var objThumbs = g_thumbs.getThumbs();
		objThumbs.css("pointer-events", "none");
	}


	/**
	 * enable all events
	 */
	this.enableEvents = function(){
		var objThumbs = g_thumbs.getThumbs();
		objThumbs.css("pointer-events", "auto");
	}

	/**
	 * set new options
	 */
	this.setOptions = function(newOptions){
		g_options = jQuery.extend(g_options, newOptions);
		g_thumbs.setOptions(newOptions);
	}


	/**
	 * set new tile size, this function will not resize, and keep ratio
	 */
	this.setTileSizeOptions = function(newTileWidth){

		if(g_options.tile_size_by !== t.sizeby.GLOBAL_RATIO)
			throw new Error("setNewTileOptions works with global ration only");

		g_options.tile_width = newTileWidth;
		g_options.tile_height = Math.floor(newTileWidth * g_temp.ratioByHeight);


	}


	/**
	 * set custom tile html function
	 */
	this.setCustomFunctions = function(funcCustomHtml, funcPositionElements){
		g_temp.funcCustomTileHtml = funcCustomHtml;
		g_temp.funcCustomPositionElements = funcPositionElements;
	}


	/**
	 * run the tile design
	 */
	this.run = function(){

		//resize all tiles
		var objThumbs = g_thumbs.getThumbs();

		if(g_options.tile_size_by == t.sizeby.GLOBAL_RATIO){
			t.resizeAllTiles(g_options.tile_width, t.resizemode.WRAPPER_ONLY);
		}

		//hide original image if image effect active
		if(g_options.tile_enable_image_effect == true && g_options.tile_image_effect_reverse == false)
			objThumbs.children(".ug-thumb-image").fadeTo(0,0);

		g_thumbs.setHtmlProperties();

		if(g_options.tile_visible_before_image == true){

			//if textpanel outside - refresh the textpanel first
			objThumbs.children(".ug-thumb-image").fadeTo(0,0);
			g_thumbs.loadThumbsImages();
		}

	}


	this._____________EXTERNAL_GETTERS____________=function(){};


	/**
	 * get thumbs general option
	 */
	this.getObjThumbs = function(){
		return g_thumbs;
	}

	/**
	 * get options
	 */
	this.getOptions = function(){
		return g_options;
	}

	/**
	 * get tile image
	 */
	this.getTileImage = function(objTile){
		var objImage = objTile.find("img.ug-thumb-image");
		return(objImage);
	}


	/**
	 * get item from tile
	 */
	this.getItemByTile = function(objTile){
		return g_thumbs.getItemByThumb(objTile);
	}


	/**
	 * get tile height by width
	 */
	this.getTileHeightByWidth = function(newWidth, objTile, fromWhere){

		var ratio = getTileRatio(objTile, fromWhere);

		if(ratio === null)
			return(null);

		var height = Math.floor( (newWidth - g_temp.tileInnerReduce) * ratio) + g_temp.tileInnerReduce;

		if(objTile && g_temp.isTextpanelOutside == true && g_options.tile_size_by == t.sizeby.IMAGE_RATIO)
			height += getTextPanelHeight(objTile);

		return(height);
	}


	/**
	 * get tile original size
	 */
	this.getTileImageSize = function(objTile){
        var objItem = t.getItemByTile(objTile);
        if(!objItem.thumbWidth || !objItem.thumbHeight)
        	throw new Error("Can't get image size - image not inited.");

        var objSize = {
        		width: objItem.thumbWidth,
        		height: objItem.thumbHeight
        };

        return(objSize);
	}


	/**
	 * get tile size
	 */
	this.getGlobalTileSize = function(){

		if(g_options.tile_size_by != t.sizeby.GLOBAL_RATIO)
			throw new Error("The size has to be global ratio");

		var objSize = {
				width: g_options.tile_width,
				height: g_options.tile_height
		};

		return(objSize);
	}


}

	/**
	 * prototype gallery funciton
	 */
	jQuery.fn.unitegallery = function(options){
		var element = jQuery(this);
		var galleryID = "#" + element.attr("id");

		if(!options)
			var options = {};

		var objGallery = new UniteGalleryMain();
		objGallery.run(galleryID, options);

		var api = new UG_API(objGallery);

		return(api);
	}


	/**
	 * check for min jquery version
	 */
	function ugCheckForMinJQueryVersion(){

		var isMinJQuery = g_ugFunctions.checkMinJqueryVersion("1.8.0");

		if(isMinJQuery == false)
			throw new Error("The gallery can run from jquery 1.8 You have jQuery "+jQuery.fn.jquery+" Please update your jQuery library.");
	}


	/**
	 * check for errors function
	 */
	function ugCheckForErrors(galleryID, type){

		/**
		 * check for jquery presents
		 */
		function checkForJqueryPresents(){
			if(typeof jQuery == "undefined")
				throw new Error("jQuery library not included");
		}

		/**
		 * check for double jquery error
		 */
		function checkForDoubleJQuery(){

			if(typeof jQuery.fn.unitegallery == "function")
				return(true);

			var errorMessage = "You have some jquery.js library include that comes after the gallery files js include.";
			errorMessage += "<br> This include eliminates the gallery libraries, and make it not work.";

			if(type == "cms"){
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Gallery Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
			}else{
				errorMessage += "<br><br> Please find and remove this jquery.js include and the gallery will work. <br> * There should be only one jquery.js include before all other js includes in the page.";
			}


			throw new Error(errorMessage);
		}

		try{
			if(type == "jquery"){
				checkForJqueryPresents();
				ugCheckForMinJQueryVersion();
			}else{
				ugCheckForMinJQueryVersion();
				checkForDoubleJQuery();
			}

		}catch(objError){

			var message = objError.message;
			message = "Unite Gallery Error: "+ message;
			message = "<div style='font-size:16px;color:#BC0C06;max-width:900px;border:1px solid red;padding:10px;'>" + message + "</div>"

			if(type == "jquery"){
				var objGallery = document.getElementById(galleryID);
				objGallery.innerHTML = message;
				objGallery.style.display = "block";
			}
			else
				jQuery(galleryID).show().html(message);

			return(false);
		}

		return(true);
	}


function UniteGalleryMain(){

	var t = this;
	var g_galleryID;
	var g_objGallery = jQuery(t), g_objWrapper, g_objParent;
	var g_objThumbs, g_objSlider, g_functions = new UGFunctions(), g_objTabs;
	var g_arrItems = [], g_numItems, g_selectedItem = null, g_selectedItemIndex = -1;
	var g_objTheme, g_objCache = {};

	this.events = {
			ITEM_CHANGE: "item_change",
			SIZE_CHANGE: "size_change",
			ENTER_FULLSCREEN: "enter_fullscreen",
			EXIT_FULLSCREEN: "exit_fullscreen",
			START_PLAY: "start_play",
			STOP_PLAY: "stop_play",
			PAUSE_PLAYING: "pause_playing",
			CONTINUE_PLAYING: "continue_playing",
			SLIDER_ACTION_START: "slider_action_start",
			SLIDER_ACTION_END: "slider_action_end",
			ITEM_IMAGE_UPDATED: "item_image_updated",
			GALLERY_KEYPRESS: "gallery_keypress",
			GALLERY_BEFORE_REQUEST_ITEMS: "gallery_before_request_items",	//before ajax load items
			OPEN_LIGHTBOX:"open_lightbox",
			CLOSE_LIGHTBOX:"close_lightbox",
			/************ STEVEN KITTERMAN CHANGE -- ADDED LOAD EVENT ************/
			LOAD: "load"
			/************ END CHANGE --  ************/
	};


	//set the default gallery options
	var g_options = {
			gallery_width:900,							//gallery width
			gallery_height:500,							//gallery height

			gallery_min_width: 150,						//gallery minimal width when resizing
			gallery_min_height: 100,					//gallery minimal height when resizing

			gallery_theme:"default",					//default,compact,grid,slider - select your desired theme from the list of themes.
			gallery_skin:"default",						//default, alexis etc... - the global skin of the gallery. Will change all gallery items by default.

			gallery_images_preload_type:"minimal",		//all , minimal , visible - preload type of the images.
														//minimal - only image nabours will be loaded each time.
														//visible - visible thumbs images will be loaded each time.
														//all - load all the images first time.

			gallery_autoplay:false,						//true / false - begin slideshow autoplay on start
			gallery_play_interval: 3000,				//play interval of the slideshow
			gallery_pause_on_mouseover: true,			//true,false - pause on mouseover when playing slideshow true/false

			gallery_mousewheel_role:"zoom",				//none, zoom, advance
			gallery_control_keyboard: true,				//true,false - enable / disble keyboard controls
			gallery_carousel:true,						//true,false - next button on last image goes to first image.

			gallery_preserve_ratio: true,				//true, false - preserver ratio when on window resize
			gallery_background_color: "",				//set custom background color. If not set it will be taken from css.
			gallery_debug_errors:false,					//show error message when there is some error on the gallery area.
			gallery_shuffle:false,						//randomise position of items at start.
			gallery_urlajax:null,						//ajax url for requesting new items etc.
			gallery_enable_tabs: false,					//enable/disable category tabs
			gallery_enable_cache: true,					//enable caching items
			gallery_initial_catid: ""					//initial category id (for caching)
	};

	//gallery_control_thumbs_mousewheel

	var g_temp = {					//temp variables
		objCustomOptions:{},
		isAllItemsPreloaded:false,	//flag that tells that all items started preloading
		isFreestyleMode:false,		//no special html additions
		lastWidth:0,
		lastHeigh:0,
		handleResize: null,
		isInited: false,
		isPlayMode: false,
		isPlayModePaused: false,
		playTimePassed: 0,
		playTimeLastStep: 0,
		playHandle: "",
		playStepInterval: 33,
		objProgress: null,
		isFakeFullscreen: false,
		thumbsType:null,
		isYoutubePresent:false,			//flag if present youtube items
		isVimeoPresent:false,			//flag if present vimeo items
		isHtml5VideoPresent:false,		//flag if present html5 video items
		isSoundCloudPresent:false,		//flag if present soundcloud items
		isWistiaPresent: false,			//flag if some wistia movie present
		resizeDelay: 100,
		isRunFirstTime: true,
		originalOptions: {},
		funcCustomHeight: null			//custom height function, set by the theme if needed
	};



	function __________INIT_GALLERY_______(){};

	/**
	 * get theme function from theme name
	 */
	function getThemeFunction(themeName){
		 var themeFunction = themeName;
		if(themeFunction.indexOf("UGTheme_") == -1)
			 themeFunction = "UGTheme_" + themeFunction;

		return(themeFunction);
	}

	/**
	 * init the theme
	 */
	function initTheme(objCustomOptions){

		//set theme function:
		 if(objCustomOptions.hasOwnProperty("gallery_theme"))
			 g_options.gallery_theme = objCustomOptions.gallery_theme;
		 else{
			 var defaultTheme = g_options.gallery_theme;
			 if(g_ugFunctions.isThemeRegistered(defaultTheme) == false)
				 g_options.gallery_theme = g_ugFunctions.getFirstRegisteredTheme();
		 }

		 var themeFunction = getThemeFunction(g_options.gallery_theme);

		 try{
			 g_options.gallery_theme = eval(themeFunction);
		 }catch(e){
			 //check registered themes
		 };

		 g_options.gallery_theme = eval(themeFunction);

		 //init the theme
		 g_objTheme = new g_options.gallery_theme();
		 g_objTheme.init(t, objCustomOptions);
	}


	/**
	 * reset all the options for the second time run
	 */
	function resetOptions(){

		 g_options = jQuery.extend({}, g_temp.originalOptions);

		 g_selectedItemIndex = -1;
		 g_selectedItem = null;
		 g_objSlider = undefined;
		 g_objThumbs = undefined;
		 g_objSlider = undefined;
	}


	/**
	 * check for some errors and fire error if needed
	 */
	function checkForStartupErrors(){

		//protection agains old jquery version
		try{
			ugCheckForMinJQueryVersion();
		}catch(e){
			throwErrorShowMessage(e.message);
		}

		//protection against some jquery ui function change
	     if(typeof g_objWrapper.outerWidth() == "object")
	    	 throwErrorShowMessage("You have some buggy script. most chances jquery-ui.js that destroy jquery outerWidth, outerHeight functions. The gallery can't run. Please update jquery-ui.js to latest version.");

	     //check for late jquery include
	     setTimeout(function(){ugCheckForErrors(g_galleryID, "cms")} , 5000);

	}



	/**
	 *  the gallery
	 */
	function runGallery(galleryID, objCustomOptions, htmlItems, cacheID){

			var isCustomOptions = (typeof objCustomOptions == "object");

			if(isCustomOptions)
		      g_temp.objCustomOptions = objCustomOptions;

		     if(g_temp.isRunFirstTime == true){

		    	 g_galleryID = galleryID;
				 g_objWrapper = jQuery(g_galleryID);
				 if(g_objWrapper.length == 0){
					 trace("div with id: "+g_galleryID+" not found");
					 return(false);
				 }

				 g_objParent = g_objWrapper.parent();

				 checkForStartupErrors();

				 g_temp.originalOptions = jQuery.extend({}, g_options);

				 //merge options
				 if(isCustomOptions)
					 g_options = jQuery.extend(g_options, objCustomOptions);

				 //cache items
				 if(g_options.gallery_enable_cache == true && g_options.gallery_initial_catid)
					 cacheItems(g_options.gallery_initial_catid);

				 //set size class
				 t.setSizeClass();

				 //fill arrItems
				 var objItems = g_objWrapper.children();

				 fillItemsArray(objItems);
				 loadAPIs();

				 //hide images:
				 g_objWrapper.find("img").fadeTo(0,0).hide();
				 g_objWrapper.show();

				 clearInitData();

		     }else{		//reset options - not first time run

		    	 t.destroy();

		    	 resetOptions();

		    	 g_options = jQuery.extend(g_options, g_temp.objCustomOptions);

		    	 if(htmlItems){

		    		 //cache items
		    		 if(cacheID && g_options.gallery_enable_cache == true)
		    			 cacheItems(cacheID, htmlItems);

		    		 if(htmlItems == "noitems"){
		    			 showErrorMessage("No items in this category","");
		    			 return(false);
			    	 }

		    		 g_objWrapper.html(htmlItems);

		    		 var objItems = g_objWrapper.children();
		    		 fillItemsArray(objItems);

		    		 loadAPIs();

					 g_objWrapper.children().fadeTo(0,0).hide();

					 g_objWrapper.show();
					 clearInitData();
		    	 }

		     }

			 //init tabs
			 if(g_temp.isRunFirstTime == true && g_options.gallery_enable_tabs == true){
				 g_objTabs = new UGTabs();
				 g_objTabs.init(t, g_options);
			 }

			 //modify and verify the params
			 if(isCustomOptions)
				 modifyInitParams(g_temp.objCustomOptions);

			 validateParams();

			 //shuffle items
			 if(g_options.gallery_shuffle == true)
				 t.shuffleItems();

			 //init the theme
			 initTheme(g_temp.objCustomOptions);

			 //set gallery html elements
			 setGalleryHtml();

			 //set html properties to all elements
			 setHtmlObjectsProperties();

			 var galleryWidth = g_objWrapper.width();

			 if(galleryWidth == 0){
				 g_functions.waitForWidth(g_objWrapper, runGalleryActually);
			 }else
				 runGalleryActually();

	}


	/**
	 * actually run the gallery
	 */
	function runGalleryActually(){

		t.setSizeClass();

		if(g_temp.isFreestyleMode == false){

			 if(g_options.gallery_preserve_ratio == true)
				 setHeightByOriginalRatio();
		 }

		 g_objTheme.run();

		 if(g_objTabs && g_temp.isRunFirstTime)
			 g_objTabs.run();

		 preloadBigImages();

		 initEvents();

		 //select first item
		 if(g_numItems > 0)
			 t.selectItem(0);


		 //set autoplay
		 if(g_options.gallery_autoplay == true)
			 t.startPlayMode();

		 g_temp.isRunFirstTime = false;

	}


	/**
	 *
	 * show error message
	 */
	function showErrorMessage(message, prefix){

		if(typeof prefix == "undefined")
			var prefix = "<b>Unite Gallery Error: </b>";

		message = prefix + message;

		var html = "<div class='ug-error-message-wrapper'><div class='ug-error-message'>" + message + "</div></div>";

		g_objWrapper.children().remove();

		g_objWrapper.html(html);
		g_objWrapper.show();
	}

	/**
	 * show error message and throw error
	 */
	function throwErrorShowMessage(message){
		showErrorMessage(message);
		throw new Error(message);
	}


	/**
	 *
	 * @param objParams
	 */
	 function modifyInitParams(){

		 //set default for preloading
		 if(!g_options.gallery_images_preload_type)
			 g_options.gallery_images_preload_type = "minimal";

		 //normalize gallery min height and width
		 if(g_options.gallery_min_height == undefined || g_options.gallery_height < g_options.gallery_min_height){
			 g_options.gallery_min_height = 0;
		 }

		 if(g_options.gallery_min_width == undefined || g_options.gallery_width < g_options.gallery_min_width){
			 g_options.gallery_min_width = 0;
		 }

	 }


	/**
	 * validate the init parameters
	 */
	 function validateParams(){

		 //validate theme:
		 if(!g_options.gallery_theme)
			 throw new Error("The gallery can't run without theme");

		 //if(typeof g_options.theme != "function")
			 //throw new Error("Wrong theme function: " + g_options.theme.toString());

		 //validate height and width
		 if(jQuery.isNumeric(g_options.gallery_height) && g_options.gallery_height < g_options.gallery_min_height)
			 throw new Error("The <b>gallery_height</b> option must be bigger then <b>gallery_min_height option</b>");

		 if(g_options.gallery_width < g_options.gallery_min_width)
			 throw new Error("The <b>gallery_width</b> option must be bigger then <b>gallery_min_width option</b>");


	 }


	 /**
	 * set gallery html
	 */
	function setGalleryHtml(){

		 //add classes and divs
		 g_objWrapper.addClass("ug-gallery-wrapper");

		 g_objWrapper.append("<div class='ug-overlay-disabled' style='display:none'></div>");

		 t.setSizeClass();
	}


	/**
	 * if the thumbs panel don't exists, delete initial images from dom
	 */
	function clearInitData(){

		var objItems = g_objWrapper.children().remove();
	}


	/**
	 * store last gallery size
	 */
	function storeLastSize(){
		var objSize = t.getSize();

		g_temp.lastWidth = objSize.width;
		g_temp.lastHeight = objSize.height;
	}


	/**
	 * set gallery height by original ratio
	 */
	function setHeightByOriginalRatio(){

		var objSize = t.getSize();

		var ratio = objSize.width / objSize.height;

		if(ratio != objSize.orig_ratio){

			var newHeight = objSize.width / objSize.orig_ratio;
			newHeight = Math.round(newHeight);

			if(newHeight < g_options.gallery_min_height)
				newHeight = g_options.gallery_min_height;

			g_objWrapper.height(newHeight);
		}

	}


	/**
	 * set properties of the html objects
	 */
	function setHtmlObjectsProperties(){

			var optionWidth = g_functions.getCssSizeParam(g_options.gallery_width);

		   //set size
		   var objCss = {
				    //"width":optionWidth,		//make it work within tabs
				    "max-width":optionWidth,
					"min-width":g_functions.getCssSizeParam(g_options.gallery_min_width)
			};

		   if(g_temp.isFreestyleMode == false){

			   var galleryHeight = g_functions.getCssSizeParam(g_options.gallery_height);
			   objCss["height"] = galleryHeight;

		   }else{
			   objCss["overflow"] = "visible";
		   }

		   //set background color
		   if(g_options.gallery_background_color)
			   objCss["background-color"] = g_options.gallery_background_color;


		   g_objWrapper.css(objCss);

	}


	/**
	 * fill items array from images object
	 */
	function fillItemsArray(arrChildren){

		g_arrItems = [];

		var isMobile = t.isMobileMode();

		 var numIndex = 0;

		 for(var i=0;i<arrChildren.length;i++){
			 var objChild = jQuery(arrChildren[i]);

			 var tagname = objChild.prop("tagName").toLowerCase();

			 //handle link wrapper
			 var itemLink = "";
			 if(tagname == "a"){
				 itemLink = objChild.attr("href");
				 objChild = objChild.children();
				 var tagname = objChild.prop("tagName").toLowerCase();
			 }

			 var itemType = objChild.data("type");
			 if(itemType == undefined)
				 itemType = "image";

			 var objItem = {};
			 objItem.type = itemType;

			 if(tagname == "img"){

				 //protection agains lasy load
				 var lasyLoadSrc = objChild.data("lazyload-src");
				 if(lasyLoadSrc && lasyLoadSrc != ""){
					 objChild.attr("src", lasyLoadSrc);
					 jQuery.removeData(objChild, "lazyload-src");
				 }

				 //src is thumb
				 var urlImage = objChild.data("image");
				 var urlThumb = objChild.data("thumb");

				 if(typeof(urlImage) == "undefined")
					 urlImage = null;

				 if(typeof(urlThumb) == "undefined")
					 urlThumb = null;

				 var imageSrc = objChild.attr("src");

				 if(!urlImage)
					 urlImage = imageSrc;

				 if(!urlThumb)
					 urlThumb = imageSrc;

				 if(!urlThumb)
					 urlThumb = urlImage;

				 if(!urlImage)
					 urlImage = urlThumb;


				 objItem.urlThumb = urlThumb;
				 objItem.urlImage = urlImage;

				 objItem.title = objChild.attr("alt");

				 //always set thumb image to object
				 objItem.objThumbImage = objChild;

				 objItem.objThumbImage.attr("src", objItem.urlThumb);

			 }else{

				 if(itemType == "image"){
					 trace("Problematic gallery item found:");
					 trace(objChild);
					 trace("Please look for some third party js script that could add this item to the gallery");
					 throw new Error("The item should not be image type");
				 }

				 objItem.urlThumb = objChild.data("thumb");
				 objItem.title = objChild.data("title");
				 objItem.objThumbImage = null;
				 objItem.urlImage = objChild.data("image");
			 }


			 //check mobile version images
			 if(isMobile == true){

				 var urlThumbMobile = objChild.data("thumb-mobile");
				 if(typeof urlThumbMobile != "undefined" && urlThumbMobile != ""){
					 objItem.urlThumb = urlThumbMobile;

					 if(tagname == "img")
	 					 objChild.attr("src",objItem.urlThumb);
				 }

				 var urlImageMobile = objChild.data("image-mobile");
				 if(typeof urlImageMobile != "undefined" && urlImageMobile != "")
					 objItem.urlImage = urlImageMobile;
			 }

			 objItem.link = itemLink;

			 //get description:
			 objItem.description = objChild.attr("title");
			 if(!objItem.description)
				 objItem.description = objChild.data("description");

			 if(!objItem.description)
				 objItem.description = "";

			 objItem.isLoaded = false;
			 objItem.isThumbImageLoaded = false;	//if the image loaded or error load
			 objItem.objPreloadImage = null;
			 objItem.isBigImageLoadStarted = false;
			 objItem.isBigImageLoaded = false;
			 objItem.isBigImageLoadError = false;
			 objItem.imageWidth = 0;
			 objItem.imageHeight = 0;

			 //set thumb size
			 objItem.thumbWidth = 0;
			 objItem.thumbHeight = 0;
			 objItem.thumbRatioByWidth = 0;
			 objItem.thumbRatioByHeight = 0;

			 var dataWidth = objChild.data("width");
			 var dataHeight = objChild.data("height");
			 if(dataWidth && typeof dataWidth == "number" && dataHeight && typeof dataHeight == "number"){
				 objItem.thumbWidth = dataWidth;
				 objItem.thumbHeight = dataHeight;
				 objItem.thumbRatioByWidth = dataWidth / dataHeight;
				 objItem.thumbRatioByHeight = dataHeight / dataWidth;
			 }

			 objItem.addHtml = null;

			 var isImageMissing = (objItem.urlImage == undefined || objItem.urlImage == "");
			 var isThumbMissing = (objItem.urlThumb == undefined || objItem.urlThumb == "");

			 switch(objItem.type){
			 	case "youtube":
					 objItem.videoid = objChild.data("videoid");

					 if(isImageMissing || isThumbMissing){

						 var objImages = g_ugYoutubeAPI.getVideoImages(objItem.videoid);

				 		 //set preview image
				 		 if(isImageMissing)
				 			objItem.urlImage = objImages.preview;

				 		 //set thumb image
				 		 if(isThumbMissing){
				 			 	objItem.urlThumb = objImages.thumb;

				 			 	 if(tagname == "img")
				 					 objChild.attr("src",objItem.urlThumb);
				 		 }

					 }

					 g_temp.isYoutubePresent = true;
				break;
			 	case "vimeo":

					objItem.videoid = objChild.data("videoid");

					g_temp.isVimeoPresent = true;
			 	break;
			 	case "html5video":
			 		objItem.videoogv = objChild.data("videoogv");
			 		objItem.videowebm = objChild.data("videowebm");
			 		objItem.videomp4 = objChild.data("videomp4");

			 		g_temp.isHtml5VideoPresent = true;
			 	break;
			 	case "soundcloud":
			 		objItem.trackid = objChild.data("trackid");
			 		g_temp.isSoundCloudPresent = true;
			 	break;
			 	case "wistia":
					 objItem.videoid = objChild.data("videoid");
					 g_temp.isWistiaPresent = true;
			 	break;
			 	case "custom":
					var objChildImage = objChild.children("img");

					if(objChildImage.length){
						objChildImage = jQuery(objChildImage[0]);

					    objItem.urlThumb = objChildImage.attr("src");
					    objItem.title = objChildImage.attr("alt");
					    objItem.objThumbImage = objChildImage;
			 		}

					//add additional html
					var objChildren = objChild.children().not("img:first-child");

					if(objChildren.length)
						objItem.addHtml = objChildren.clone();

			 	break;
			 }

			 //clear not needed attributes
			 if(objItem.objThumbImage){
				 objItem.objThumbImage.removeAttr("data-description", "");
				 objItem.objThumbImage.removeAttr("data-image", "");
				 objItem.objThumbImage.removeAttr("data-thumb", "");
				 objItem.objThumbImage.removeAttr("title", "");
			 }

			 objItem.index = numIndex;
			 g_arrItems.push(objItem);
			 numIndex++;

		 }


		 g_numItems = g_arrItems.length;

	}


	/**
	 * load api's according presented item types
	 */
	function loadAPIs(){

		//load youtube api
		if(g_temp.isYoutubePresent)
			g_ugYoutubeAPI.loadAPI();

		if(g_temp.isVimeoPresent)
			g_ugVimeoAPI.loadAPI();

		if(g_temp.isHtml5VideoPresent)
			g_ugHtml5MediaAPI.loadAPI();

		if(g_temp.isSoundCloudPresent)
			g_ugSoundCloudAPI.loadAPI();

		if(g_temp.isWistiaPresent)
			g_ugWistiaAPI.loadAPI();

	}


	/**
	 * preload big images
	 */
	function preloadBigImages(){

		//check and fix preload type
		if(g_options.gallery_images_preload_type == "visible" && !g_objThumbs)
			g_options.gallery_images_preload_type = "minimal";

		if(g_temp.isAllItemsPreloaded == true)
			return(true);

		switch(g_options.gallery_images_preload_type){
			default:
			case "minimal":
			break;
			case "all":

				jQuery(g_arrItems).each(function(){
					preloadItemImage(this);
				});

			break;
			case "visible":
				jQuery(g_arrItems).each(function(){
					var objItem = this;
					var isVisible = g_objThumbs.isItemThumbVisible(objItem);

					if(isVisible == true)
						preloadItemImage(objItem);
				});

			break;
		}

	}

	/**
	 * check if item needed to preload and preload it
	 */
	function checkPreloadItemImage(objItem){

		if(objItem.isBigImageLoadStarted == true ||
				   objItem.isBigImageLoaded == true ||
				   objItem.isBigImageLoadError == true){
					return(false);
		}

		switch(g_options.gallery_images_preload_type){
			default:
			case "minimal":
			break;
			case "all":
					preloadItemImage(objItem);
			break;
			case "visible":
				var isVisible = g_objThumbs.isItemThumbVisible(objItem);
					if(isVisible == true)
						preloadItemImage(objItem);
			break;
		}

	}

	/**
	 * preload item image
	 */
	function preloadItemImage(objItem){

		if(objItem.isBigImageLoadStarted == true ||
		   objItem.isBigImageLoaded == true ||
		   objItem.isBigImageLoadError == true){
			return(true);
		}

		var imageUrl = objItem.urlImage;
		if(imageUrl == "" || imageUrl == undefined){
			objItem.isBigImageLoadError = true;
			return(false);
		}

		objItem.isBigImageLoadStarted = true;

		objItem.objPreloadImage = jQuery('<img/>').attr("src", imageUrl);
		objItem.objPreloadImage.data("itemIndex", objItem.index);

		//set image load event (not that reliable)
		objItem.objPreloadImage.on("load", t.onItemBigImageLoaded);

		//set load error event
		objItem.objPreloadImage.on( "error", function(){
			var objImage = jQuery(this);
			var itemIndex = objImage.data("itemIndex");
			var objItem = g_arrItems[itemIndex];

			//update error:
			objItem.isBigImageLoadError = true;
			objItem.isBigImageLoaded = false;

			//print error
			var imageUrl = jQuery(this).attr("src");
			console.log("Can't load image: "+ imageUrl);

			//try to load the image again
			g_objGallery.trigger(t.events.ITEM_IMAGE_UPDATED, [itemIndex, objItem.urlImage]);
			objItem.objThumbImage.attr("src", objItem.urlThumb);

		});

		//check the all items started preloading flag
		checkAllItemsStartedPreloading();

	}


	/**
	 * on item big image loaded event function.
	 * Update image size and that the image has been preloaded
	 * can be called from another objects like the slider
	 */
	this.onItemBigImageLoaded = function(event, objImage){

		if(!objImage)
			var objImage = jQuery(this);

		var itemIndex = objImage.data("itemIndex");

		var objItem = g_arrItems[itemIndex];

		objItem.isBigImageLoaded = true;

		//get size with fallback function
		var objSize = g_functions.getImageOriginalSize(objImage);

		objItem.imageWidth = objSize.width;
		objItem.imageHeight = objSize.height;
	}

	/**
	 * check and fill image size in item object
	 */
	this.checkFillImageSize = function(objImage, objItem){

		if(!objItem){
			var itemIndex = objImage.data("itemIndex");
			if(itemIndex === undefined)
				throw new Error("Wrong image given to gallery.checkFillImageSize");

			var objItem = g_arrItems[itemIndex];
		}

		var objSize = g_functions.getImageOriginalSize(objImage);

		objItem.imageWidth = objSize.width;
		objItem.imageHeight = objSize.height;
	}


	/**
	 * preload next images near current item
	 */
	function preloadNearBigImages(objItem){

		if(g_temp.isAllItemsPreloaded == true)
			return(false);

		if(!objItem)
			var objItem = g_selectedItem;

		if(!objItem)
			return(true);

		var currentIndex = objItem.index;
		var lastItemIndex = currentIndex - 1;
		var nextItemIndex = currentIndex + 1;

		if(lastItemIndex > 0)
			preloadItemImage(g_arrItems[lastItemIndex]);

		if(nextItemIndex < g_numItems)
			preloadItemImage(g_arrItems[nextItemIndex]);

	}


	/**
	 * check that all items started preloading, if do, set
	 * flag g_temp.isAllItemsPreloaded to true
	 */
	function checkAllItemsStartedPreloading(){

		if(g_temp.isAllItemsPreloaded == true)
			return(false);

		//if some of the items not started, exit function:
		for(var index in g_arrItems){
			if(g_arrItems[index].isBigImageLoadStarted == false)
				return(false);
		}

		//if all started, set flag to true
		g_temp.isAllItemsPreloaded = true;
	}


	/**
	 * set freestyle mode
	 */
	this.setFreestyleMode = function(){

		g_temp.isFreestyleMode = true;

	}


	/**
	 * attach thumbs panel to the gallery
	 */
	this.attachThumbsPanel = function(type, objThumbs){
		g_temp.thumbsType = type;
		g_objThumbs = objThumbs;
	}


	/**
	 * init the slider
	 */
	this.initSlider = function(customOptions, optionsPrefix){

		 //mix options with user options
		 if(!customOptions)
			 var customOptions = {};

		 customOptions = jQuery.extend(g_temp.objCustomOptions, customOptions);

		 g_objSlider = new UGSlider();
		 g_objSlider.init(t, customOptions, optionsPrefix);
	}


	function __________END_INIT_GALLERY_______(){};

	function __________EVENTS_____________(){};


	/**
	 * on gallery mousewheel event handler, advance the thumbs
	 */
	this.onGalleryMouseWheel = function(event, delta, deltaX, deltaY){

		event.preventDefault();

		if(delta > 0)
			t.prevItem();
		else
			t.nextItem();
	}


	/**
	 * on mouse enter event
	 */
	function onSliderMouseEnter(event){

		if(g_options.gallery_pause_on_mouseover == true && t.isFullScreen() == false && g_temp.isPlayMode == true && g_objSlider && g_objSlider.isSlideActionActive() == false)
			t.pausePlaying();
	}


	/**
	 * on mouse move event
	 */
	function onSliderMouseLeave(event){

		if(g_options.gallery_pause_on_mouseover == true && g_temp.isPlayMode == true && g_objSlider && g_objSlider.isSlideActionActive() == false){

			var isStillLoading = g_objSlider.isCurrentSlideLoadingImage();

			if(isStillLoading == false)
				t.continuePlaying();
		}

	}


	/**
	 * on keypress - keyboard control
	 */
	function onKeyPress(event){

		var obj = jQuery(event.target);
		if(obj.is("textarea") || obj.is("select") || obj.is("input"))
			return(true);

		 var keyCode = (event.charCode) ? event.charCode :((event.keyCode) ? event.keyCode :((event.which) ? event.which : 0));

		 var wasAction = true;

		 switch(keyCode){
			 case 39:	//right key
				 t.nextItem();
			 break;
			 case 37:	//left key
				 t.prevItem();
			 break;
			 default:
				 wasAction = false;
			 break;
		 }

		 //only first page gallery affected

		 if(wasAction == true){
			 event.preventDefault();
			 event.stopPropagation();
			 event.stopImmediatePropagation();
		 }

		g_objGallery.trigger(t.events.GALLERY_KEYPRESS, [keyCode,event]);
	}


	/**
	 * check that the gallery resized, if do, trigger onresize event
	 */
	function onGalleryResized(){

		var objSize = t.getSize();

		if(objSize.width == 0)	//fix hidden gallery change
			return(true);

		t.setSizeClass();

		var objSize = t.getSize();

		if(objSize.width != g_temp.lastWidth || objSize.height != g_temp.lastHeight){

			var heightWasSet = false;

			//set height with custom function (if exists)
			if(g_temp.funcCustomHeight){
				var newHeight = g_temp.funcCustomHeight(objSize);
				if(newHeight){
					g_objWrapper.height(newHeight);
					heightWasSet = true;
				}
			}

			if(heightWasSet == false && g_options.gallery_preserve_ratio == true && g_temp.isFreestyleMode == false)
				setHeightByOriginalRatio();

			storeLastSize();
			g_objGallery.trigger(t.events.SIZE_CHANGE);

		}

	}


	/**
	 * on strip move event
	 * preload visible images if that option selected
	 */
	function onThumbsChange(event){

		//preload visible images
		if(g_options.gallery_images_preload_type == "visible" && g_temp.isAllItemsPreloaded == false){
			preloadBigImages();
		}

	}


	/**
	 * on full screen change event
	 */
	function onFullScreenChange(){


		var isFullscreen = g_functions.isFullScreen();
		var event = isFullscreen ? t.events.ENTER_FULLSCREEN:t.events.EXIT_FULLSCREEN;

		 var fullscreenID = g_functions.getGlobalData("fullscreenID");

		 //check if this gallery was affected
		 if(g_galleryID !== fullscreenID)
			 return(true);

		 //add classes for the gallery
		 if(isFullscreen){
			 g_objWrapper.addClass("ug-fullscreen");
		 }else{
			 g_objWrapper.removeClass("ug-fullscreen");
		 }

		 g_objGallery.trigger(event);

		 onGalleryResized();
	}

	/**
	 * on big image updated, if needed - preload this item image
	 */
	function onItemImageUpdated(event, index){

		var objItem = t.getItem(index);
		checkPreloadItemImage(objItem);
	}

	/**
	 * on current slide image load end. If playing mode, begin playing again
	 */
	function onCurrentSlideImageLoadEnd(){

		if(t.isPlayMode() == true)
			t.continuePlaying();
	}


	/**
	 * init all events
	 */
	function initEvents(){

		//avoid annoyong firefox image dragging
		g_objWrapper.on("dragstart",function(event){
			event.preventDefault();
		});

		//on big image updated, if needed - preload this item image
		g_objGallery.on(t.events.ITEM_IMAGE_UPDATED, onItemImageUpdated);

		//init custom event on strip moving
		if(g_objThumbs){
			switch(g_temp.thumbsType){
				case "strip":
					jQuery(g_objThumbs).on(g_objThumbs.events.STRIP_MOVE, onThumbsChange);
				break;
				case "grid":
					jQuery(g_objThumbs).on(g_objThumbs.events.PANE_CHANGE, onThumbsChange);
				break;
			}
		}

		//init mouse wheel
		if(g_options.gallery_mousewheel_role == "advance" && g_temp.isFreestyleMode == false)
			g_objWrapper.on("mousewheel", t.onGalleryMouseWheel);

		 //on resize event
		 storeLastSize();

		 jQuery(window).resize(function(){
			 g_objWrapper.css("width","auto");
			 g_functions.whenContiniousEventOver("gallery_resize", onGalleryResized, g_temp.resizeDelay);
		 });

		 //check resize once in a time, start from 10 seconds
		 setTimeout(function(){
			 setInterval(onGalleryResized, 2000);
		 }, 10000);


		 //fullscreen:
		 g_functions.addFullScreenChangeEvent(onFullScreenChange);

		 //on slider item changed event
		 if(g_objSlider){

			 jQuery(g_objSlider).on(g_objSlider.events.ITEM_CHANGED, function(){
				 var sliderIndex = g_objSlider.getCurrentItemIndex();

				 if(sliderIndex != -1)
					 t.selectItem(sliderIndex);
			 });

			 //add slider onmousemove event
			 if(g_options.gallery_pause_on_mouseover == true){
				 var sliderElement = g_objSlider.getElement();
				 sliderElement.hover(onSliderMouseEnter, onSliderMouseLeave);

				 //on full screen, run on mouse leave
				 g_objGallery.on(t.events.ENTER_FULLSCREEN, function(){
						 onSliderMouseLeave();
				 });

			 }

			 //retrigger slider events
			 retriggerEvent(g_objSlider, g_objSlider.events.ACTION_START, t.events.SLIDER_ACTION_START);
			 retriggerEvent(g_objSlider, g_objSlider.events.ACTION_END, t.events.SLIDER_ACTION_END);

			 jQuery(g_objSlider).on(g_objSlider.events.CURRENTSLIDE_LOAD_END, onCurrentSlideImageLoadEnd);

		 }

		 //add keyboard events
		 if(g_options.gallery_control_keyboard == true)
			 jQuery(document).keydown(onKeyPress);

	}


	/**
	 * destroy all gallery events
	 */
	this.destroy = function(){

		g_objWrapper.off("dragstart");
		g_objGallery.off(t.events.ITEM_IMAGE_UPDATED);

		//init custom event on strip moving
		if(g_objThumbs){
			switch(g_temp.thumbsType){
				case "strip":
					jQuery(g_objThumbs).off(g_objThumbs.events.STRIP_MOVE);
				break;
				case "grid":
					jQuery(g_objThumbs).off(g_objThumbs.events.PANE_CHANGE);
				break;
			}
		}

		 g_objWrapper.off("mousewheel");

		 jQuery(window).off("resize");

		 //fullscreen:
		 g_functions.destroyFullScreenChangeEvent();

		 //on slider item changed event
		 if(g_objSlider){

			 jQuery(g_objSlider).off(g_objSlider.events.ITEM_CHANGED);

			 //add slider onmousemove event
			 var sliderElement = g_objSlider.getElement();
			 sliderElement.off("mouseenter");
			 sliderElement.off("mouseleave");

			 g_objGallery.off(t.events.ENTER_FULLSCREEN);
			 jQuery(g_objSlider).off(g_objSlider.events.ACTION_START);
			 jQuery(g_objSlider).off(g_objSlider.events.ACTION_END);
			 jQuery(g_objSlider).off(g_objSlider.events.CURRENTSLIDE_LOAD_END);
		 }

		 //add keyboard events
		 if(g_options.gallery_control_keyboard == true)
			 jQuery(document).off("keydown");

		 //destroy theme
		 if(g_objTheme && typeof g_objTheme.destroy == "function"){
			 g_objTheme.destroy();
		 }

		 g_objWrapper.html("");
	}


	function __________GENERAL_______(){};

	/**
	 * get items array
	 */
	this.getArrItems = function(){
		return g_arrItems;
	}

	/**
	 * get gallery objects
	 */
	this.getObjects = function(){

		var objects = {
			g_galleryID:g_galleryID,
			g_objWrapper:g_objWrapper,
			g_objThumbs:g_objThumbs,
			g_objSlider:g_objSlider,
			g_options:g_options,
			g_arrItems:g_arrItems,
			g_numItems:g_numItems
		};

		return(objects);
	}

	/**
	 * get slider object
	 */
	this.getObjSlider = function(){

		return(g_objSlider);
	}


	/**
	 *
	 * get item by index, if the index don't fit, trace error
	 */
	this.getItem = function(index){
		if(index < 0){
			throw new Error("item with index: " + index + " not found");
			return(null);
		}
		if(index >= g_numItems){
			throw new Error("item with index: " + index + " not found");
			return(null);
		}

		return(g_arrItems[index]);
	}


	/**
	 * get gallery width
	 */
	this.getWidth = function(){

		var objSize = t.getSize();

		return(objSize.width);
	}

	/**
	 * get gallery height
	 */
	this.getHeight = function(){

		var objSize = t.getSize();

		return(objSize.height);
	}


	/**
	 * get gallery size
	 */
	this.getSize = function(){

		var objSize = g_functions.getElementSize(g_objWrapper);

		objSize.orig_width = g_options.gallery_width;
		objSize.orig_height = g_options.gallery_height;
		objSize.orig_ratio = objSize.orig_width / objSize.orig_height;

		return(objSize);
	}

	/**
	 * get gallery ID
	 */
	this.getGalleryID = function(){

		var id = g_galleryID.replace("#","");

		return(id);
	}

	/**
	 * get next item by current index (or current object)
	 */
	this.getNextItem = function(index, forceCarousel){

		if(typeof index == "object")
			index = index.index;

		var nextIndex = index + 1;

		if(forceCarousel !== true && g_numItems == 1)
			return(null);

		if(nextIndex >= g_numItems){

			if(g_options.gallery_carousel == true || forceCarousel === true)
				nextIndex = 0;
			else
				return(null);
		}

		var objItem = g_arrItems[nextIndex];

		return(objItem);
	}


	/**
	 * get previous item by index (or item object)
	 */
	this.getPrevItem = function(index){

		if(typeof index == "object")
			index = index.index;

		var prevIndex = index - 1;

		if(prevIndex < 0){
			if(g_options.gallery_carousel == true || forceCarousel === true)
				prevIndex = g_numItems - 1;
			else
				return(null);
		}

		var objItem = g_arrItems[prevIndex];

		return(objItem);
	}



	/**
	 * get selected item
	 */
	this.getSelectedItem = function(){

		return(g_selectedItem);
	}

	/**
	 * get selected item index
	 */
	this.getSelectedItemIndex = function(){

		return(g_selectedItemIndex);
	}


	/**
	 * get number of items
	 */
	this.getNumItems = function(){
		return g_numItems;
	}

	/**
	 * get true if the current item is last
	 */
	this.isLastItem = function(){
		if(g_selectedItemIndex == g_numItems - 1)
			return(true);

		return(false);
	}


	/**
	 * get true if the current item is first
	 */
	this.isFirstItem = function(){
		if(g_selectedItemIndex == 0)
			return(true);
		return(false);
	}


	/**
	 * get gallery options
	 */
	this.getOptions = function(){
		return g_options;
	}


	/**
	 * get the gallery wrapper element
	 */
	this.getElement = function(){
		return(g_objWrapper);
	}


	this.___________SET_CONTROLS___________ = function(){}

	/**
	 * set next button element
	 * set onclick event
	 */
	this.setNextButton = function(objButton){

		//register button as a unite gallery belong
		objButton.data("ug-button", true);

		g_functions.setButtonOnClick(objButton, t.nextItem);

	}


	/**
	 * set prev button element
	 * set onclick event
	 */
	this.setPrevButton = function(objButton){

		//register button as a unite gallery belong
		objButton.data("ug-button", true);

		g_functions.setButtonOnClick(objButton, t.prevItem);

	}


	/**
	 * set fullscreen button to enter / exit fullscreen.
	 * on fullscreen mode ug-fullscreenmode class wil be added
	 */
	this.setFullScreenToggleButton = function(objButton){

		//register button as a unite gallery belong
		objButton.data("ug-button", true);

		g_functions.setButtonOnClick(objButton, t.toggleFullscreen);

		g_objGallery.on(t.events.ENTER_FULLSCREEN,function(){
			objButton.addClass("ug-fullscreenmode");
		});

		g_objGallery.on(t.events.EXIT_FULLSCREEN,function(){
			objButton.removeClass("ug-fullscreenmode");
		});

	}


	/**
	 * destroy full screen button
	 */
	this.destroyFullscreenButton = function(objButton){

		g_functions.destroyButton(objButton);

		g_objGallery.off(t.events.ENTER_FULLSCREEN);
		g_objGallery.off(t.events.EXIT_FULLSCREEN);
	}


	/**
	 * set play button event
	 */
	this.setPlayButton = function(objButton){

		//register button as a unite gallery belong
		objButton.data("ug-button", true);

		g_functions.setButtonOnClick(objButton, t.togglePlayMode);

		g_objGallery.on(t.events.START_PLAY,function(){
			objButton.addClass("ug-stop-mode");
		});

		g_objGallery.on(t.events.STOP_PLAY, function(){
			objButton.removeClass("ug-stop-mode");
		});

	}

	/**
	 * destroy the play button
	 */
	this.destroyPlayButton = function(objButton){
		g_functions.destroyButton(objButton);
		g_objGallery.off(t.events.START_PLAY);
		g_objGallery.off(t.events.STOP_PLAY);
	}

	/**
	 * set playing progress indicator
	 */
	this.setProgressIndicator = function(objProgress){

		g_temp.objProgress = objProgress;
	}


	/**
	 * set title and descreiption containers
	 */
	this.setTextContainers = function(objTitle, objDescription){

		g_objGallery.on(t.events.ITEM_CHANGE, function(){

			var objItem = t.getSelectedItem();
			objTitle.html(objItem.title);
			objDescription.html(objItem.description);

		});

	}

	/**
	 * show overlay disabled
	 */
	this.showDisabledOverlay = function(){
		g_objWrapper.children(".ug-overlay-disabled").show();
	}

	/**
	 * show overlay disabled
	 */
	this.hideDisabledOverlay = function(){
		g_objWrapper.children(".ug-overlay-disabled").hide();
	}

	this.___________END_SET_CONTROLS___________ = function(){}


	/**
	 * cache items, put to cache array by id
	 * the items must be unprocessed yet
	 */
	function cacheItems(cacheID, htmlItemsArg){

		if(htmlItemsArg){
			var htmlItems = htmlItemsArg;
			if(htmlItems != "noitems")
				htmlItems = jQuery(htmlItemsArg).clone();
		}else{
			var htmlItems = g_objWrapper.children().clone();
		}

		g_objCache[cacheID] = htmlItems;
	}


	/**
	 * remove all size classes
	 */
	function removeAllSizeClasses(objWrapper){

		if(!objWrapper)
			objWrapper = g_objWrapper;

		objWrapper.removeClass("ug-under-480");
		objWrapper.removeClass("ug-under-780");
		objWrapper.removeClass("ug-under-960");
	}




	/**
	 * retrigger event from another objects
	 * the second parameter will be the second object
	 */
	function retriggerEvent(object, originalEvent, newEvent){

		jQuery(object).on(originalEvent, function(event){
			g_objGallery.trigger(newEvent, [this]);
		});

	}


	/**
	 * advance next play step
	 */
	function advanceNextStep(){

		var timeNow = jQuery.now();
		var timeDiff = timeNow - g_temp.playTimeLastStep;
		g_temp.playTimePassed += timeDiff;
		g_temp.playTimeLastStep = timeNow;

		//set the progress
		if(g_temp.objProgress){
			var percent = g_temp.playTimePassed / g_options.gallery_play_interval;
			g_temp.objProgress.setProgress(percent);
		}

		//if interval passed - proceed to next item
		if(g_temp.playTimePassed >= g_options.gallery_play_interval){

			t.nextItem();
			g_temp.playTimePassed = 0;
		}


	}

	this.___________PLAY_MODE___________ = function(){}


	/**
	 * start play mode
	 */
	this.startPlayMode = function(){

		g_temp.isPlayMode = true;
		g_temp.isPlayModePaused = false;

		g_temp.playTimePassed = 0;
		g_temp.playTimeLastStep = jQuery.now();

		g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval);

		//show and reset progress indicator
		if(g_temp.objProgress){
			var objElement = g_temp.objProgress.getElement();
			g_temp.objProgress.setProgress(0);
			objElement.show();
		}

		g_objGallery.trigger(t.events.START_PLAY);

		//check if there is a need to pause
		if(g_objSlider && g_objSlider.isCurrentSlideLoadingImage() == true){
			t.pausePlaying();
		}

	}


	/**
	 * reset playing - set the timer to 0
	 */
	this.resetPlaying = function(){

		if(g_temp.isPlayMode == false)
			return(true);

		g_temp.playTimePassed = 0;
		g_temp.playTimeLastStep = jQuery.now();
	}


	/**
	 * pause playing slideshow
	 */
	this.pausePlaying = function(){

		if(g_temp.isPlayModePaused == true)
			return(true);

		g_temp.isPlayModePaused = true;
		clearInterval(g_temp.playHandle);

		g_objGallery.trigger(t.events.PAUSE_PLAYING);
	}


	/**
	 * continue playing slideshow
	 */
	this.continuePlaying = function(){

		if(g_temp.isPlayModePaused == false)
			return(true);

		g_temp.isPlayModePaused = false;
		g_temp.playTimeLastStep = jQuery.now();
		g_temp.playHandle = setInterval(advanceNextStep, g_temp.playStepInterval);

	}


	/**
	 * stop play mode
	 */
	this.stopPlayMode = function(){
		g_temp.isPlayMode = false;
		clearInterval(g_temp.playHandle);

		g_temp.playTimePassed = 0;

		//hide progress indicator
		if(g_temp.objProgress){
			var objElement = g_temp.objProgress.getElement();
			objElement.hide();
		}

		g_objGallery.trigger(t.events.STOP_PLAY);
	}


	/**
	 * tells if the play mode are active
	 */
	this.isPlayMode = function(){

		return(g_temp.isPlayMode);
	}


	/**
	 * start / stop play mode
	 */
	this.togglePlayMode = function(){

		if(t.isPlayMode() == false)
			t.startPlayMode();
		else
			t.stopPlayMode();
	}


	/**
	 * unselect all items
	 */
	function unselectSeletedItem(){

		if(g_selectedItem == null)
			return(true);

		if(g_objThumbs)
			g_objThumbs.setThumbUnselected(g_selectedItem.objThumbWrapper);

		g_selectedItem = null;
		g_selectedItemIndex = -1;
	}


	this.___________GENERAL_EXTERNAL___________ = function(){}

	/**
	 * shuffle items - usually before theme start
	 */
	this.shuffleItems = function(){

		g_arrItems = g_functions.arrayShuffle(g_arrItems);

		for(var index in g_arrItems)		//fix index
			g_arrItems[index].index = parseInt(index);

	}

	/**
	 * set main gallery params, extend current params
	 */
	this.setOptions = function(customOptions){

		g_options = jQuery.extend(g_options, customOptions);
	}


	/**
	 * select some item
	 * the input can be index or object
	 * role - the role of the object who selected the item
	 */
	this.selectItem = function(objItem, role){

		if(typeof objItem == "number")
			objItem = t.getItem(objItem);

		var itemIndex = objItem.index;
		if(itemIndex == g_selectedItemIndex)
			return(true);

		unselectSeletedItem();

		//set selected item
		g_selectedItem = objItem;
		g_selectedItemIndex = itemIndex;

		g_objGallery.trigger(t.events.ITEM_CHANGE, [objItem,role]);

		//reset playback, if playing
		if(g_temp.isPlayMode == true){
				t.resetPlaying();

			var stillLoading = g_objSlider.isCurrentSlideLoadingImage();
			if(stillLoading == true)
				t.pausePlaying();
		}

	}


	/**
	 * go to next item
	 */
	this.nextItem = function(){

		var newItemIndex = g_selectedItemIndex + 1;

		if(g_numItems == 0)
			return(true);

		if(g_options.gallery_carousel == false && newItemIndex >= g_numItems)
			return(true);

		if(newItemIndex >= g_numItems)
			newItemIndex = 0;

		//debugLine(newItemIndex,true);

		t.selectItem(newItemIndex, "next");
	}


	/**
	 * go to previous item
	 */
	this.prevItem = function(){

		var newItemIndex = g_selectedItemIndex - 1;

		if(g_selectedItemIndex == -1)
			newItemIndex = 0;

		if(g_numItems == 0)
			return(true);

		if(g_options.gallery_carousel == false && newItemIndex < 0)
			return(true);

		if(newItemIndex < 0)
			newItemIndex = g_numItems - 1;

		t.selectItem(newItemIndex, "prev");

	}


	/**
	 * expand gallery to body size
	 */
	function toFakeFullScreen(){

		jQuery("body").addClass("ug-body-fullscreen");
		g_objWrapper.addClass("ug-fake-fullscreen");

		g_temp.isFakeFullscreen = true;

		g_objGallery.trigger(t.events.ENTER_FULLSCREEN);
		g_objGallery.trigger(t.events.SIZE_CHANGE);
	}


	/**
	 * exit fake fullscreen
	 */
	function exitFakeFullscreen(){

		jQuery("body").removeClass("ug-body-fullscreen");
		g_objWrapper.removeClass("ug-fake-fullscreen");

		g_temp.isFakeFullscreen = false;

		g_objGallery.trigger(t.events.EXIT_FULLSCREEN);
		g_objGallery.trigger(t.events.SIZE_CHANGE);

	}

	/**
	 * return if the fullscreen mode is available
	 */
	this.isFullScreen = function(){

		if(g_temp.isFakeFullscreen == true)
			return(true);

		if(g_functions.isFullScreen() == true)
			return(true);

		return(false);
	}


	/**
	 * tells if it's fake fullscreen
	 */
	this.isFakeFullscreen = function(){

		return(g_temp.isFakeFullscreen);
	}


	/**
	 * go to fullscreen mode
	 */
	this.toFullScreen = function(){

		g_functions.setGlobalData("fullscreenID", g_galleryID);

		var divGallery = g_objWrapper.get(0);

		var isSupported = g_functions.toFullscreen(divGallery);

		if(isSupported == false)
			toFakeFullScreen();

	}


	/**
	 * exit full screen
	 */
	this.exitFullScreen = function(){

		if(g_temp.isFakeFullscreen == true)
			exitFakeFullscreen();
		else
			g_functions.exitFullscreen();

	}

	/**
	 * toggle fullscreen
	 */
	this.toggleFullscreen = function(){

		if(t.isFullScreen() == false){
			t.toFullScreen();
		}else{
			t.exitFullScreen();
		}

	}

	/**
	 * resize the gallery
	 * noevent - initally false
	 */
	this.resize = function(newWidth, newHeight, noevent){

		g_objWrapper.css("width", "auto");
		g_objWrapper.css("max-width",newWidth+"px");

		if(newHeight)
			g_objWrapper.height(newHeight);

		if(!noevent && noevent !== true)
			onGalleryResized();

	}


	/**
	 * set size class to the wrapper
	 * this can work to any other wrapper too
	 */
	this.setSizeClass = function(objWrapper, width){

		if(!objWrapper)
			var objWrapper = g_objWrapper;

		if(!width){
			var objSize = t.getSize();
			var width = objSize.width;
		}

		if(width == 0)
			var width = jQuery(window).width();

		var addClass = "";

		if(width <= 480){
			addClass = "ug-under-480";
		}else
		if(width <= 780){
			addClass = "ug-under-780";
		}else
		if(width < 960){
			addClass = "ug-under-960";
		}

		if(objWrapper.hasClass(addClass) == true)
			return(true);

		removeAllSizeClasses(objWrapper);
		if(addClass != "")
			objWrapper.addClass(addClass);
	}


	/**
	 * return if the size is suited for mobile
	 */
	this.isMobileMode = function(){

		if(g_objWrapper.hasClass("ug-under-480"))
			return(true);

		return(false);
	}


	/**
	 * get if small screen
	 */
	this.isSmallWindow = function(){

		var windowWidth = jQuery(window).width();


		if(!windowWidth)
			return(true);

		if(windowWidth <= 480)
			return(true);

		return(false);
	}


	/**
	 * change gallery items
	 */
	this.changeItems = function(itemsContent, cacheID){

		if(!itemsContent)
			var itemsContent = "noitems";

		runGallery(g_galleryID, "nochange", itemsContent, cacheID);
	}

	/**
	 * show error message, replace whole gallery div
	 */
	this.showErrorMessageReplaceGallery = function(message){
		showErrorMessage(message);
	}

	/**
	 * set custom height function by width
	 */
	this.setFuncCustomHeight = function(func){
		g_temp.funcCustomHeight = func;
	}

	this.__________AJAX_REQUEST_______ = function(){};


	/**
	 * ajax request
	 */
	this.ajaxRequest = function(action, data, isJSON, successFunction){

		var dataType = "html";
		if(isJSON == true)
			dataType = "json";

		if(!successFunction || typeof successFunction != "function")
			throw new Error("ajaxRequest error: success function should be passed");

		var urlAjax = g_options.gallery_urlajax;
		if(urlAjax == "")
			throw new Error("ajaxRequest error: Ajax url don't passed");

		if(typeof data == "undefined")
			var data = {};

		//add galleryID to data
		var objData = {
				action:"unitegallery_ajax_action",
				client_action:action,
				galleryID: g_galleryID,
				data:data
		};

		jQuery.ajax({
			type:"post",
			url:g_options.gallery_urlajax,
			dataType: 'json',
			data:objData,
			success:function(response){

				if(!response){
					showErrorMessage("Empty ajax response!", "Ajax Error");
					return(false);
				}

				if(response == -1 || response === 0){
					showErrorMessage("ajax error!!!");
					return(false);
				}

				if(typeof response.success == "undefined"){
					showErrorMessage("The 'success' param is a must!");
					return(false);
				}

				if(response.success == false){
					showErrorMessage(response.message);
					return(false);
				}

				successFunction(response);
			},
			error:function(jqXHR, textStatus, errorThrown){
				console.log("Ajax Error!!! " + textStatus);
			}
		});

	}


	/**
	 * request new items
	 * isForce - don't take from cache
	 */
	this.requestNewItems = function(catID, isForce, cacheID){

		var checkCache = g_options.gallery_enable_cache;

		if(!cacheID)
			cacheID = catID;

		if(isForce == true)
			checkCache = false;

		//get items from cache
		if(checkCache == true && g_objCache.hasOwnProperty(cacheID)){

			var htmlItems = g_objCache[cacheID];

			t.changeItems(htmlItems, cacheID);

		}else{

			g_objGallery.trigger(t.events.GALLERY_BEFORE_REQUEST_ITEMS);

			t.ajaxRequest("front_get_cat_items",{catid:catID}, true, function(response){

				var htmlItems = response.html;

				t.changeItems(htmlItems, cacheID);

			});

		}

	}


	/**
	 * run the gallery
	 */
	 this.run = function(galleryID, objParams){


		 var debug_errors = g_options.gallery_debug_errors;
		 if(objParams && objParams.hasOwnProperty("gallery_debug_errors"))
			 g_options.gallery_debug_errors = objParams.gallery_debug_errors;


		 if(g_options.gallery_debug_errors == true){

			 try{

				 runGallery(galleryID, objParams);


			 }catch(objError){
				 if(typeof objError == "object"){

					 var message = objError.message;
					 var lineNumber = objError.lineNumber;
					 var fileName = objError.fileName;
					 var stack = objError.stack;

					 message += " <br><br> in file: "+fileName;
					 message += " <b> line " + lineNumber + "</b>";

					 trace(objError);

				 }else{
					 var message = objError;
				 }

				 //remove double "error:" text
				 message = message.replace("Error:","");

				 showErrorMessage(message);
			 }

		 }else{
			 runGallery(galleryID, objParams);
		 }



	 }

}	//unitegallery object end


/**
 * API Class
 * addon to Unite gallery
 */
function UG_API(gallery){

	var t = this, g_objThis = jQuery(t);
	var g_gallery = new UniteGalleryMain(), g_objGallery;
	var g_arrEvents = [];

	g_gallery = gallery;
	g_objGallery = jQuery(gallery);


	this.events = {
			API_INIT_FUNCTIONS:"api_init",
			API_ON_EVENT:"api_on_event"
	}


	/**
	 * get item data for output
	 */
	function convertItemDataForOutput(item){

		var output = {
				index: item.index,
				title: item.title,
				description: item.description,
				urlImage: item.urlImage,
				urlThumb: item.urlThumb
			};

			//add aditional variables to the output
			var addData = item.objThumbImage.data();

			for(var key in addData){
				switch(key){
					case "image":
					case "description":
						continue;
					break;
				}
				output[key] = addData[key];
			}

			return(output);
	}


	/**
	 * event handling function
	 */
	this.on = function(event, handlerFunction, notCache){

		//remember cache
		if(notCache !== true){
			g_arrEvents.push({event:event,func:handlerFunction});
		}

		switch(event){
			case "item_change":

				g_objGallery.on(g_gallery.events.ITEM_CHANGE, function(){
						var currentItem = g_gallery.getSelectedItem();
						var output = convertItemDataForOutput(currentItem);
						handlerFunction(output.index, output);
				});

			break;
			case "resize":
				g_objGallery.on(g_gallery.events.SIZE_CHANGE, handlerFunction);
			break;
			case "enter_fullscreen":
				g_objGallery.on(g_gallery.events.ENTER_FULLSCREEN, handlerFunction);
			break;
			case "exit_fullscreen":
				g_objGallery.on(g_gallery.events.EXIT_FULLSCREEN, handlerFunction);
			break;
			case "play":
				g_objGallery.on(g_gallery.events.START_PLAY, handlerFunction);
			break;
			case "stop":
				g_objGallery.on(g_gallery.events.STOP_PLAY, handlerFunction);
			break;
			case "pause":
				g_objGallery.on(g_gallery.events.PAUSE_PLAYING, handlerFunction);
			break;
			case "continue":
				g_objGallery.on(g_gallery.events.CONTINUE_PLAYING, handlerFunction);
			break;
			case "open_lightbox":
				g_objGallery.on(g_gallery.events.OPEN_LIGHTBOX, handlerFunction);
			break;
			case "close_lightbox":
				g_objGallery.on(g_gallery.events.CLOSE_LIGHTBOX, handlerFunction);
			break;
			/************ STEVEN KITTERMAN CHANGE  -- ADDED LOAD EVENT ************/
			case "load":
				g_objGallery.on(g_gallery.events.LOAD, handlerFunction);
			break;
			/************ END CHANGE ************/
			default:
				if(console)
					console.log("wrong api event: " + event);
			break;
		}

		g_objGallery.trigger(t.events.API_ON_EVENT, [event, handlerFunction]);
	}


	/**
	 * start playing
	 */
	this.play = function(){
		g_gallery.startPlayMode();
	}


	/**
	 * stop playing
	 */
	this.stop = function(){
		g_gallery.stopPlayMode();
	}


	/**
	 * toggle playing
	 */
	this.togglePlay = function(){
		g_gallery.togglePlayMode();
	}


	/**
	 * enter fullscreen
	 */
	this.enterFullscreen = function(){
		g_gallery.toFullScreen();
	}

	/**
	 * exit fullscreen
	 */
	this.exitFullscreen = function(){
		g_gallery.exitFullScreen();
	}

	/**
	 * toggle fullscreen
	 */
	this.toggleFullscreen = function(){

		g_gallery.toggleFullscreen();
	}


	/**
	 * reset zoom
	 */
	this.resetZoom = function(){
		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);

		objSlider.zoomBack();
	}


	/**
	 * zoom in
	 */
	this.zoomIn = function(){

		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);

		objSlider.zoomIn();
	}

	/**
	 * zoom in
	 */
	this.zoomOut = function(){

		var objSlider = g_gallery.getObjSlider();
		if(!objSlider)
			return(false);

		objSlider.zoomOut();
	}

	/**
	 * next item
	 */
	this.nextItem = function(){
		g_gallery.nextItem();
	}


	/**
	 * prev item
	 */
	this.prevItem = function(){
		g_gallery.prevItem();
	}

	/**
	 * go to some item by index (0-numItems)
	 */
	this.selectItem = function(numItem){

		g_gallery.selectItem(numItem);

	}


	/**
	 * resize the gallery to some width (height).
	 */
	this.resize = function(width, height){

		if(height)
			g_gallery.resize(width, height);
		else
			g_gallery.resize(width);
	}


	/**
	 * get some item by index
	 */
	this.getItem = function(numItem){

		var data = g_gallery.getItem(numItem);
		var output = convertItemDataForOutput(data);

		return(output);
	}


	/**
	 * get number of items in the gallery
	 */
	this.getNumItems = function(){
		var numItems = g_gallery.getNumItems();
		return(numItems);
	}

	/**
	 * refresh gallery with another options
	 */
	this.reloadGallery = function(customOptions){
		if(!customOptions)
			var customOptions = {};

		g_gallery.run(null, customOptions);

		//restore events:
		g_arrEvents.map(function(obj){
			t.on(obj.event,obj.func,true);
		});

	}


	/**
	 * destroy the gallery
	 */
	this.destroy = function(){
		g_gallery.destroy();
	}

	//trigger api on init event
	g_objGallery.trigger(t.events.API_INIT_FUNCTIONS, t);

}


if(typeof g_ugFunctions != "undefined")
	g_ugFunctions.registerTheme("tiles");
else
	jQuery(document).ready(function(){g_ugFunctions.registerTheme("tiles")});


/**
 * Grid gallery theme
 */
function UGTheme_tiles(){

	var t = this;
	var g_gallery = new UniteGalleryMain(), g_objGallery, g_objects, g_objWrapper;
	/************ STEVEN KITTERMAN CHANGE -- removed g_lightbox instantiation ************/
	var g_tiles = new UGTiles(), g_objPreloader, g_objTilesWrapper;
	var g_functions = new UGFunctions(), g_objTileDesign = new UGTileDesign();

	var g_options = {
			theme_enable_preloader: true,		//enable preloader circle
			theme_preloading_height: 200,		//the height of the preloading div, it show before the gallery
			theme_preloader_vertpos: 100,		//the vertical position of the preloader
			theme_gallery_padding: 0,			//the horizontal padding of the gallery from the sides
			theme_appearance_order: "normal",	//normal, shuffle, keep - the appearance order of the tiles. applying only to columns type
			theme_auto_open:null				//auto open lightbox at start
	};

	var g_defaults = {
			gallery_width: "100%"
	};

	//temp variables
	var g_temp = {
			showPreloader: false
	};


	/**
	 * Init the theme
	 */
	function initTheme(gallery, customOptions){

		g_gallery = gallery;

		//set default options
		g_options = jQuery.extend(g_options, g_defaults);

		//set custom options
		g_options = jQuery.extend(g_options, customOptions);

		modifyOptions();

		//set gallery options
		g_gallery.setOptions(g_options);

		g_gallery.setFreestyleMode();

		g_objects = gallery.getObjects();

		//get some objects for local use
		g_objGallery = jQuery(gallery);
		g_objWrapper = g_objects.g_objWrapper;

		//init objects
		g_tiles.init(gallery, g_options);
		/************ STEVEN KITTERMAN CHANGE -- removed g_lightbox.init() ************/

		g_objTileDesign = g_tiles.getObjTileDesign();


	}


	/**
	 * modift options
	 */
	function modifyOptions(){

		if(g_options.theme_enable_preloader == true)
			g_temp.showPreloader = true;

		switch(g_options.theme_appearance_order){
			default:
			case "normal":
			break;
			case "shuffle":
				g_gallery.shuffleItems();
			break;
			case "keep":
				g_options.tiles_keep_order = true;
			break;
		}

	}


	/**
	 * set gallery html elements
	 */
	function setHtml(){

		//add html elements
		g_objWrapper.addClass("ug-theme-tiles");

		g_objWrapper.append("<div class='ug-tiles-wrapper' style='position:relative'></div>");

		//add preloader
		if(g_temp.showPreloader == true){
			g_objWrapper.append("<div class='ug-tiles-preloader ug-preloader-trans'></div>");
			g_objPreloader = g_objWrapper.children(".ug-tiles-preloader");
			g_objPreloader.fadeTo(0,0);
		}

		g_objTilesWrapper = g_objWrapper.children(".ug-tiles-wrapper");

		//set padding
		if(g_options.theme_gallery_padding)
			g_objWrapper.css({
				"padding-left":g_options.theme_gallery_padding+"px",
				"padding-right":g_options.theme_gallery_padding+"px"
			});

		g_tiles.setHtml(g_objTilesWrapper);
		/************ STEVEN KITTERMAN CHANGE -- removed g_lightbox.putHtml() ************/
	}

	/**
	 * actually run the theme
	 */
	function actualRun(){

		//set preloader mode
		if(g_objPreloader){
			g_objPreloader.fadeTo(0,1);
			g_objWrapper.height(g_options.theme_preloading_height);
			g_functions.placeElement(g_objPreloader, "center", g_options.theme_preloader_vertpos);
		}

		initEvents();

		g_tiles.run();
		/************ STEVEN KITTERMAN CHANGE -- removed g._lightbox.run() ************/

	}


	/**
	 * run the theme
	 */
	function runTheme(){

		setHtml();

		actualRun();

	}



	/**
	 * init size of the thumbs panel
	 */
	function initThumbsPanel(){

		//set size:
		var objGallerySize = g_gallery.getSize();

		if(g_temp.isVertical == false)
			g_objPanel.setWidth(objGallerySize.width);
		else
			g_objPanel.setHeight(objGallerySize.height);

		g_objPanel.run();
	}


	/**
	 * on tile click - open lightbox
	 */
	function onTileClick(data, objTile){

		objTile = jQuery(objTile);

		var objItem = g_objTileDesign.getItemByTile(objTile);
		var index = objItem.index;
		/************ STEVEN KITTERMAN CHANGE -- removed g_lightbox.open() ************/

	}


	/**
	 * before items request: hide items, show preloader
	 */
	function onBeforeReqestItems(){

		g_objTilesWrapper.hide();

		if(g_objPreloader){
			g_objPreloader.show();

			var preloaderSize = g_functions.getElementSize(g_objPreloader);
			var galleryHeight = preloaderSize.bottom + 30;

			g_objWrapper.height(galleryHeight);
		}

	}

	/**
	 * open lightbox at start if needed
	 */
	function onLightboxInit(){

		if(g_options.theme_auto_open !== null){
			/************ STEVEN KITTERMAN CHANGE -- removed g._lightbox.open() ************/
			g_options.theme_auto_open = null;
		}

	}


	/**
	 * init buttons functionality and events
	 */
	function initEvents(){

		//remove preloader on tiles first placed
		if(g_objPreloader){
			jQuery(g_tiles).on(g_tiles.events.TILES_FIRST_PLACED, function(){
				g_objWrapper.height("auto");
				g_objPreloader.hide();
			});
		}

		jQuery(g_objTileDesign).on(g_objTileDesign.events.TILE_CLICK, onTileClick);

		g_objGallery.on(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS, onBeforeReqestItems);

		/************ STEVEN KITTERMAN CHANGE -- removed jquery(g_lightbox).on(g_lightbox.events.LIGHTBOX_INIT) ************/
	}


	/**
	 * destroy the theme
	 */
	this.destroy = function(){

		jQuery(g_objTileDesign).off(g_objTileDesign.events.TILE_CLICK);
		jQuery(g_tiles).off(g_tiles.events.TILES_FIRST_PLACED);

		g_objGallery.off(g_gallery.events.GALLERY_BEFORE_REQUEST_ITEMS);
		/************ STEVEN KITTERMAN CHANGE -- removed jquery(g_lightbox).off() ************/

		g_tiles.destroy();
		/************ STEVEN KITTERMAN CHANGE -- removed g_lightbox.destroy() ************/
	}


	/**
	 * run the theme setting
	 */
	this.run = function(){

		runTheme();
	}


	/**
	 * init
	 */
	this.init = function(gallery, customOptions){

		initTheme(gallery, customOptions);

	}


}
