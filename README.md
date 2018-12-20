# Story Map Cascade

The Story Map Cascade℠ app lets you combine narrative text with maps, images, and multimedia content in an engaging, full-screen scrolling experience. In a Cascade story, sections containing text and in-line media can be interspersed with "immersive" sections that fill the screen with your maps, 3D scenes, images, and videos. Cascade is ideal for making compelling, in-depth stories that are very easy for people to navigate.

![Screenshot](https://cloud.githubusercontent.com/assets/994078/16124248/074ded18-33a3-11e6-8151-0469f4cd412b.png)

[View it live](http://links.esri.com/storymaps/story_map_cascade_overview_1) |
[Download](http://links.esri.com/storymaps/story_map_cascade_zip) |
[Cascade page on Esri Story Maps website](https://storymaps.arcgis.com/en/app-list/cascade/)

**Latest release is version 1.10.0**, if you want to be informed of new releases, we recommend you watch this repository ([see GitHub help](https://help.github.com/articles/watching-repositories)). See the [release page](https://github.com/Esri/story-map-cascade/releases) for release notes.

## Help content

 * [Introduction](#introduction)
 * [Instructions](#instructions)
 * [Feedback / support](#feedback--support)
 * [FAQ](#faq)
 * [Configuration](#configuration)
 * [Customize the look and feel](#customize-the-look-and-feel)
 * [Developer guide](#developer-guide)
 * [Issues](#issues)
 * [Contributing](#contributing)
 * [Licensing](#licensing)

## Introduction
A Cascade story can be created from [ArcGIS Online](http://arcgis.com), from the [Esri Story Maps website](https://storymaps.arcgis.com/), or from [ArcGIS Enterprise](http://www.esri.com/en/arcgis/products/arcgis-enterprise/overview). The Cascade story's data are stored in a Web Application Item.
This repository provides the application source code for developers who want to customize the application.

For more information about the application, including a gallery of examples and a step-by-step tutorial, please see the [Cascade page](https://storymaps.arcgis.com/en/app-list/cascade/) on the [Esri Story Maps website](https://storymaps.arcgis.com/).

## Instructions
First, create your Cascade story in ArcGIS using the [step-by-step tutorial](https://storymaps.arcgis.com/en/app-list/cascade/tutorial/).
Once your story is ready, you have to find its ID in ArcGIS. The ID is a 32 character string that you will find in your web browser's address bar when you are viewing your story.

![Screenshot](https://cloud.githubusercontent.com/assets/994078/16124454/e26566ba-33a3-11e6-9be1-8af3f9f86113.png)

1. [Download the application](http://links.esri.com/storymaps/story_map_cascade_zip)
2. Deploy the application on your webserver. See [FAQ](#how-to-deploy-the-application-on-a-web-server) for details
3. Edit index.html, find the configuration section on line 47 and paste in your application ID
4. Navigate to index.html (e.g., `http://127.0.0.1/Cascade/index.html`)

You can continue to use the builder in ArcGIS to modify your story.

See [customize the look and feel section](#customize-the-look-and-feel) or [developer guide](#developer-guide) if you want to modify the app.

*If you are using ArcGIS Enterprise, please follow the instructions at the end of `app/config.js` to configure the application.*

## Feedback / support
We would love to hear from you!
* [StoryMaps Website](https://storymaps.arcgis.com/)
* [Story Maps community forum](http://links.esri.com/storymaps/story_maps_geonet)
* [Let us know about your story](https://storymaps.arcgis.com/en/gallery/submission-form/)
* [Story Maps Developers' Corner](https://developerscorner.storymaps.arcgis.com)
* [@EsriStoryMaps](https://twitter.com/EsriStoryMaps)
* [ArcGIS Blog](https://blogs.esri.com/esri/arcgis/)

When you contact us, don't hesitate to include a link to your application to make it easier for us to understand what you are working on.

## FAQ

For more answers, please see the [Story Map website FAQ page](https://storymaps.arcgis.com/en/faq/); it includes a section about [Cascade](https://storymaps.arcgis.com/en/faq/#category10).

### What are the supported browsers?
Cascade stories are supported on Internet Explorer 11 and above, Chrome, Firefox, Safari and the most recent tablet and smartphone devices.

Cascade authoring is supported on a desktop computer for Chrome, Firefox, and Safari. We are considering support for other browsers.

We actively test the application in all major browsers but if you experience difficulties, especially with the builder, we recommend that you use [Chrome](https://www.google.com/intl/en_us/chrome/browser/).

### Tips for your content

We have posted a number of tips and tricks for authoring your Cascade app [on the ArcGIS blog](https://blogs.esri.com/esri/arcgis/tag/story-map-cascade/), as well as several ["How To Cascade" tutorials](https://blogs.esri.com/esri/arcgis/2017/02/10/how-to-cascade/) using Cascade itself.

### Security

#### Can I keep my story private?
Yes, the regular ArcGIS security model applies.
By default your story is private, you can share it through Cascade builder or ArcGIS.
When you share your story through the Cascade builder, its maps and layers will also be shared if you own them or have privileges to share them. You will still need to make sure webscenes and embedded apps are accessible to your audience when you share, as they are not shared automatically with the story.

#### Can I use private web maps or layers?
Yes.

When the story is hosted in ArcGIS Online or ArcGIS Enterprise, users who don't have access to the story or a web map used in the story will be redirected to the ArcGIS sign-in page. It is not possible to display an authentication dialog in the application when it's hosted in ArcGIS.

When the story is hosted on your web server, by default an authentication dialog will appear inside the application. But we recommend that you configure the application to use OAuth. OAuth 2.0 based authentication is available for ArcGIS Online users with developer or organizational accounts and ArcGIS Enterprise users. Follow [this procedure](http://doc.arcgis.com/en/arcgis-online/share-maps/add-items.htm#ESRI_SECTION1_0D1B620254F745AE84F394289F8AF44B) to add and register an application to get an OAuth application ID. Once you have that application, open `index.html`, locate the `configOptions` section and fill the `oAuthAppId` property.

If you are using secured services but don't want users to have to authenticate, you can use a proxy to store the username/password to be used, see [Working with Proxy Services](https://developers.arcgis.com/authentication/working-with-proxies/#selfhosted-proxy-service), and add proxy rules to specify what services need to use the proxy by editing `PROXY_RULES` in `app/config.js`.

### Deployment
Deploying a Cascade story requires use of ArcGIS Online or ArcGIS Enterprise. The Cascade content must be created using the Cascade builder and will live in a Web Application Item.

#### Can I use the template without ArcGIS Online or ArcGIS Enterprise?
This is not a supported use case at this time. Please let us know if you are interested in such a scenario.

#### Where is the data stored?
The Cascade data are stored in a Web Application Item in ArcGIS Online or an ArcGIS Enterprise portal. This includes the narrative content, reference to any media used (web maps, web scenes, pictures, audio, videos, web pages), and app-wide settings.

The images, audio, and videos that you include in your story using the builder are not loaded into ArcGIS unless you upload them through the ArcGIS option. You have to make sure that those medias that are stored on other services are, and will remain, accessible to your audience.

#### Can I deploy Cascade using ArcGIS Enterprise?
Yes, Cascade is included with ArcGIS Enterprise starting at version 10.5.1.

#### Can I use the builder if I host the app on my own web server?
Yes, when the story is configured with an application ID, adding the URL parameter `edit` will open the builder. You will be prompted for user authentication.

#### How do I deploy the application on a web server?
If you are not familiar with web servers, here are some solutions:
 * Use the web server that comes with your Operating System. On Windows, this is Internet Information Services (IIS); if you have a `C:\inetpub\wwwroot` folder on your computer, you should be able to access its content using `http://localhost`
 * On Windows or Mac OS, use a simple web server like [Mongoose](https://code.google.com/p/mongoose/) (not recommended for production)

If you are experiencing some rendering issues like improper symbols appearing instead of icons, you will have extra configuration to perform. Some servers require the configuration of a new mime type to be able to serve Cascade fonts correctly. See the following links for more information:

 * [IIS Mime types](http://codingstill.com/2013/01/set-mime-types-for-web-fonts-in-iis/)
 * [Properly serve webfonts](http://blog.symbolset.com/properly-serve-webfonts)

#### Can I use a single deployment of Cascade for multiple stories?
Yes.
If you have customized the application and deployed it on your server, you don't need to copy it multiple times, edit index.html and paste a different application ID for each story you want to publish.

Instead edit `index.html`, locate the `configOptions` section and fill the `authorizedOwners` property with the ArcGIS Online or for ArcGIS login of the owner(s) of the story you want to use. This makes it possible for the application to display any of stories created by the specified user(s) through a URL parameter.

Example of the same application displaying two stories:
 * http://myserver.com/Cascade/index.html?appid=c7ad1a55de0247a68454a76f251225a4
 * http://myserver.com/Cascade/index.html?appid=c7ad1a55de0247a68454a76f251225a5

## Configuration
In addition to the configuration offered by the builder, the file `app/config.js` provides various additional settings. This is for example the place where you can override some settings like the list of Geocoder services to be used (changes override ArcGIS Online or your Organization default settings). See the documentation provided in that file for more details.

## Customize the look and feel

Cascade currently offers a light and dark theme and the option to choose between four different fonts. Other look and feel customizations can be done using the [regular application download](http://links.esri.com/storymaps/story_map_cascade_zip) and including the css/html overrides directly into `index.html`. A `style` tag is already present for you in `index.html` (search for `/* CUSTOM CSS RULES */`).

As the application Javascript and CSS are minified, **we don't recommend that you directly edit those files** (e.g. `viewer-min.css`, `viewer-min.js`, ...). In addition to being hard to edit, this will make application update complex for you.

If you want to change the behavior of one functionality or want to add new one, follow the [developer guide](#developer-guide) below.

The easiest way to find the ID or path of a DOM element that you want to customize is to use your browser's developer tools -- read the documentation for [Chrome](https://developers.google.com/web/tools/chrome-devtools/), [Safari](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html), [Firefox](https://developer.mozilla.org/en-US/docs/Tools).

## Developer guide

This developer guide is intended for developers who want to modify the behavior of, or add new functionalities to, the Cascade application.
It requires knowledge of HTML, Javascript and CSS languages.

For more infomation about using and customizing Esri's Storytelling Apps follow the [Story Maps Developers' Corner](https://developerscorner.storymaps.arcgis.com).

### Application life cycle
Cascade fires events that allow customization with loose integration. This means that you don't need to understand the application internals to implement simple extensions.

To try those events, look in the file `src/app/custom-scripts.js`.

```javascript
require(['dojo/topic'], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe('tpl-ready', function() {
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */

    // console.log('Cascade is ready');
  });

  /*
   * Custom Javascript to be executed when a section becomes active
   */
  topic.subscribe('story-navigated-section', function(/*cfg*/) {
     // console.log('The section', cfg.index, 'is now active');
  });

});
```

### Developer helpers
In addition to the events described above, the story data, configuration and useful helpers functions can be accessed through the global variable `app`.

```javascript
console.log("Story title", app.Controller.getStoryTitle());
console.log("Sections objects", app.data.sections);
console.log("First section bookmark", app.data.sections[0].getBookmark());
console.log("First section text preview", app.data.sections[0].getPreviewText());
console.log("Sections display informations", app.display.sections);
console.log("Second section vertical position (px)", app.display.sections[1].top);
console.log("IDs of all the ArcGIS content in the story", app.Controller.getArcGISContent());
```

### Environment setup

Clone the repository or download a [copy of the repository as a zip file](https://github.com/Esri/story-map-cascade/archive/master.zip).

To build a production version of the application from the source code, you first need to install [Node.js](http://nodejs.org/).

Then initialize the environment by running the following commands **in the Cascade folder**:
 * `npm install`
 * `npm install –g grunt-cli`

This will create a new `node-modules` folder in your project root with all the tools required to build the application. If you have trouble running the second command, [see this documentation on how to install grunt-cli locally](https://github.com/gruntjs/grunt-cli#installing-grunt-cli-locally).

### How to use the application from the source code
 * Make accessible the Cascade folder on a web server. Use your favorite server or run one with `grunt server`; this will start a server on port `8080`
 * If using an ArcGIS Enterprise portal, configure the `DEFAULT_SHARING_URL` property in `app/config.js` (close to the bottom of the file)
 * Run the following command: `grunt dev`
 * Navigate to index.html using the URL parameter `appid` to specify the web item to be loaded, e.g.: `http://localhost:8080/index.html?appid=ABCD` (configuring `index.html` > `configOptions.appid` is not supported in development mode)
 * If you want to use a non-public story or the builder you need to configure an `oAuth` ID in `index.html`. Follow [this procedure](http://doc.arcgis.com/en/arcgis-online/share-maps/add-items.htm#ESRI_SECTION1_0D1B620254F745AE84F394289F8AF44B) to add and register an application to get an OAuth application ID. Once you have that application, open `index.html`, locate the `configOptions` section and fill the `oAuthAppId` property.

### How to build the application from the source code
  * Open a terminal and navigate to the Cascade folder
  * Run the following command: `grunt`

The deploy folder now contains the built application that you can [deploy to your web server](#instructions).

### Issues building the application

The build script performs code validation through [ESLint](http://eslint.org/). You can disable those validations by editing `Gruntfile.js` -- look for the following comments `/* Comment out to disable code linting */`.

### Design
Cascade relies on AMD and Dojo loader [AMD](https://developers.arcgis.com/javascript/3/jshelp/inside_dojo_amd.html) for its application structure. Most of the viewer uses ES2015, and some builder components use [React](https://facebook.github.io/react/). The build chain is based on Grunt, r.js and Babel.

The application is structured as follows:

| Path          			                  	| Contains																						|
| ---------------------------------------------	|  -------------------------------------------------------------------------------------------- |
| Gruntfile.js									| Build configuration																			|
| src/											| Main source code folder with index.html					|
| src/app/										| Javascript and CSS source code 																|
| src/app/config.js			            		| App configuration file (loaded at execution time) 											|
| **src/app/storymaps/tpl/**					| Cascade modules (build configuration files in the root)									|
| src/app/storymaps/tpl/builder/				| Builder modules (main modules are Builder.js, BuilderView.js)												|
| src/app/storymaps/tpl/core/					| Core modules (main modules are Core.js, MainView.js) 													|
| src/app/storymaps/tpl/print/					| Print modules 													|
| src/app/storymaps/tpl/view/						| UI components of the viewer and builder											|
| **src/app/storymaps/tpl/view/media/**						| Map, Scene, Image, Audio, Video, WebPage, Text											|
| **src/app/storymaps/tpl/view/section/**					| Cover, Sequence, Immersive and Title sections 										|
| **src/app/storymaps/tpl/view/ui/**						| Header										|
| src/app/storymaps/tpl/utils/						| Utils, sharing, some external libraries											|
| src/app/storymaps/issue-checker/ | Issue checking utility (finds errors in story) |
|src/lib/									| Dependencies (included in the final app)														|
| src/lib-build/								| Dependencies used by the build (not included in final app)									|
| src/resources/								| Static resources																				|


The main dependencies are:
 * [jQuery](http://jquery.com/)
 * [Bootstrap](http://getbootstrap.com/)
 * [MediumEditor](https://github.com/yabwe/medium-editor)

The application Javascript and CSS are minified into six files:

| File			        |										                                        |
| --------------------- | ----------------------------------------------------------------------------- |
| app/viewer-min.css	| Compressed CSS loaded when accessing the story as a viewer		        |
| app/viewer-min.js	    | Compressed Javascript loaded when accessing the story as a viewer	    |
| app/builder-min.css	| Compressed CSS loaded when accessing the story as an author		        |
| app/builder-min.js	| Compressed Javascript loaded when accessing the story as an author	    |
| app/print-min.css	| Compressed CSS loaded when accessing the story in print mode		        |
| app/print-min.js	| Compressed Javascript loaded when accessing the story in print mode	    |

Depending on the URL parameters, index.html will load the corresponding files.

## Issues
Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing
Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright &copy; 2016-2018 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE.txt](LICENSE.txt) file.

Some open-source components of this project are licensed under other License terms, see `src/lib/` folder for respective license files.

| Library               | License   |
| --------------------- | --------- |
| Bootstrap 			      | MIT 		  |
| jQuery 				        | MIT 		  |
| MediumEditor          | MIT       |
| React                 | [BSD with patent grant](https://github.com/facebook/react#license)       |
| React-redux           | MIT       |
| Redux                 | MIT       |
| vimeo-player-js       | MIT       |
| youtube-api           | N/A       |
| Clipboard.js          | MIT       |
| ProgressJS            | MIT       |
| FastClick             | MIT       |
| Font Awesome          | SIL/MIT   |
| Sortable              | MIT       |
| React-Bootstrap       | MIT       |
| Loader                | MIT       |
| Hermite-resize        | MIT       |
| Babel Polyfill        | MIT       |
| jquery-mousewheel     | MIT       |
| Color Thief           | MIT       |

Additionally, The Unite Gallery open-source library is located at `src/app/storymaps/tpl/utils/UniteGallery.js`. It is licensed MIT; those portions modified by the Story Maps team are licensed Apache 2.0 with the rest of this project.
