/*
 * From https://github.com/guybedford/require-less
 *
 * Modified by Esri:
 *
 * the lessAPI.load function was changed to match this PR
 * https://github.com/guybedford/require-less/pull/67/files#diff-9d4a71e57b09ae9bbedff88d0778dd60
 */

define(['require'], function(require) {

  var lessAPI = {};

  lessAPI.pluginBuilder = './less-builder';

  if (typeof window == 'undefined') {
    lessAPI.load = function(n, r, load) { load(); };
    return lessAPI;
  }

  lessAPI.normalize = function(name, normalize) {
    if (name.substr(name.length - 5, 5) == '.less')
      name = name.substr(0, name.length - 5);

    name = normalize(name);

    return name;
  };

  var head = document.getElementsByTagName('head')[0];

  var base = document.getElementsByTagName('base');
  base = base && base[0] && base[0] && base[0].href;
  var pagePath = (base || window.location.href.split('#')[0].split('?')[0]).split('/');
  pagePath[pagePath.length - 1] = '';
  pagePath = pagePath.join('/');

  var styleCnt = 0;
  var curStyle;
  lessAPI.inject = function(css) {
    if (styleCnt < 31) {
      curStyle = document.createElement('style');
      curStyle.type = 'text/css';
      head.appendChild(curStyle);
      styleCnt++;
    }
    if (curStyle.styleSheet)
      curStyle.styleSheet.cssText += css;
    else
      curStyle.appendChild(document.createTextNode(css));
  };

  lessAPI.load = function(lessId, req, load, config) {
    var defaultConfig = {};
    var lessConfig = config ? (config.less || config) : defaultConfig;
    if (! ('env' in lessConfig))
      lessConfig.env = 'development';
    var globalLess = window.less;
    if (! globalLess)
        window.less = lessConfig;
    else if (! globalLess.Parser) {
        if (lessConfig === defaultConfig)
          lessConfig = globalLess;
        globalLess = null;
    }
    require(globalLess ? ['./normalize'] : ['./normalize', './lessc'], function(normalize, lessc) {
      if (! lessc)
        lessc = globalLess;
      if (! ("fileExt" in lessConfig))
        lessConfig.fileExt = ".less";
      var fileUrl = lessId;
      if (fileUrl.substring(fileUrl.length - 4) !== ".css" && lessConfig.fileExt)
        fileUrl += lessConfig.fileExt;
      fileUrl = normalize.absoluteURI(req.toUrl(fileUrl), pagePath);

      //make it compatible with v1 and v2
      var generation = (lessc.version || [1])[0];
      var renderer;
      var cssGetter;
      if (generation === 1) {
        //v1, use parser and toCSS
        var parser = new lessc.Parser(lessConfig);
        renderer = function (input, cb) {
          parser.parse.call(parser, input, cb, lessConfig);
        };
        cssGetter = function (tree) {
          return tree.toCSS(config.less);
        };
      } else if (generation >= 2) {
        //v2 or newer, use render and output
        renderer = function (input, cb) {
          lessc.render(input, lessConfig, cb);
        };
        cssGetter = function (output) {
          return output.css;
        };
      }

      renderer('@import (' + (lessConfig.importOption || 'multiple') +  ') "' + fileUrl + '";', function(err, output) {
        if (err) {
          console.log(err + ' at ' + fileUrl + ', line ' + err.line);
          return load.error(err);
        }
        var css = cssGetter(output);
        lessAPI.inject(normalize(css, fileUrl, pagePath));

        setTimeout(load, 7);
      }, lessConfig);

    });
  };

  return lessAPI;
});
