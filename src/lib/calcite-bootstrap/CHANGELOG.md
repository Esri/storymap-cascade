# Calcite Bootstrap CHANGELOG
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

For information about how to add entries to this file, please read [Keep a CHANGELOG](http://keepachangelog.com/)

##v0.3.2
### Changed
- Bug fixes that was causing styling rules to be overwritten by core on navbar, nav-tabs and dropdown menus.
- Updated Bootstrap Sass dependency to 3.3.6 to fix breadcrumb bug

##v0.3.1
### Changed
- Bug fix that was causing build to fail on npm module.

##v0.3.0
### Changed
- Lots of style changes to the navbar. Default height is now 65px, up from 50px. On hover the accent bar is now below the link instead of above. Tightened up the padding and margin on links significantly. This also makes the accent bar only the width of the text above it. Added custom rule for padding on the active links.
- Styling changes to dropdowns include adding border between menu items, changing the background color on hover to `$Calcite_Gray_100`, changing the link and link-hover colors to `$Calcite_Gray_200`, changed the menu border color to match item border color, lighten box-shadow of menu, tighten up padding around menu items and menu headers.
- Added new styling for having icons within form controls. Removed box-shadow from normal form-control states.
- Removed media-query in navbar-custom to reduce font-size at small viewports.
- Styling changes to Calcite-Header include changing background colors for tab and tab hover, adding spacing between tabs, color of hover accent bar
- Fixed compile issue in loader.scss where avenir-regular could not be extended

##v0.2.12
### Changed
- Removed old notes file and updated NPM command

## v0.2.11
### Changed
- Changed background color on hover for `.btn-default`, `.btn-primary`, `.btn-success`, `.btn-info`, `.btn-warning` and `.btn-danger` to the darker colors as used in Calcite Web
- Changed color values for `$brand-success` and `$brand-danger` variables to match what is used in Calcite Web
- Removed `!important` off of `.btn-default`
- Updated product name throughout to be consistent with other Calcite products.
- On cards-custom, added &:focus and &:active classes to hover for better accessability
- Changed `.cards-list > li` padding by 2px in order to make them flow better
- Noted in theme.html that adding `onclick=""` to the div will fix mobility issue for a first pass

## v0.2.10
### Changed
- Removed scss file for Calcite fonts and replaced import with direct fast.fonts url.
- Color for links was too dark to pass accessibility. Value for `$link-color` variable was changed.
- Custom Cards pattern added. [Example](http://esri.github.io/calcite-bootstrap/examples/#card)

## v0.2.9 
### Added
- Calcite Dark colors finalized
- Consolidated custom variable definitions into `_variables.scss` file.
### Changed
- Class to center text in the footer now works in both container types.

## v0.2.8 -- YANKED

## v0.2.7 -- YANKED

## v0.2.6
### Changed
- Bug causing primary typeface in body font stack to be dropped in both builds.

## v0.2.5
### Added
- Compiled Calcite variables files into a single _variables.scss file.
- Added Calcite Web loading animation
- added opensans font files
- added build process for *-open.css files
- renamed `calcite-custom.scss` to `components.scss` because that's what it is.

## v0.2.4
### Changed
- updated the very old grunt-sass which was using a very old node-sass which could not handle @at-root and thus passed it thru into the css... breaking the glyphicons. 

## v0.2.3
### Changed
- bumped version to address bizzaro caching @ github or proxies or whatever.

## v0.2.2
### Changed
- added build-*.scss files that include bootstrap
- removed the bootstrap include from the .scss files that ship in dist.
- made `bootstrap-sass@3.3.5` a dependancy of this project so it will be auto-installed
- added missing bootstrap vars into calcite files
- distibutions will have the combined & minified bootstrap javascript
- added docs describing this
- added a better example page and the example page markup to the static section so people can copy-paste and be working with Calcite Bootstrap.
- added missing /dist/sass/calcite folder to the build process

## v0.2.1
### Changed
- swapped acetate for assemble
- converted minimal docs to acetate
- added deploy.js which builds the json files needed for the Patterns site

## v0.2.0

### Changed
- project structure so we have `./bin`, `./docs` and `./lib`. Source js and sass live in lib, the docs are in doc and bin has a script for releasing.

### Added
- `grunt build:sass` to build the css and package the sass files in `./dist` in prep of a release
