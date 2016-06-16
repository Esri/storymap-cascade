define([
  'lib-build/tpl!./BuilderView',
  'lib-build/less!./BuilderView',
  'storymaps-react/tpl/builder/Controller',

  'storymaps/common/builder/mediaPicker/MediaPickerPopup',
  'storymaps-react/tpl/builder/settings/Popup',

  'storymaps/common/utils/CommonHelper',
  'storymaps/common/builder/BuilderHelper',

  // Utils
  'dojo/Deferred',
  'dojo/topic',
  'dojo/_base/lang'
], function(
  viewTpl,
  viewCss,
  Controller,

  MediaPickerPopup,
  SettingsPopup,

  CommonHelper,
  BuilderHelper,

  // Utils
  Deferred,
  topic,
  lang
) {
  var STORY_SHELL = {
    config: {
      author: {
        name: ''
      }
    },
    settings: {
      /*
      theme: {
        colors: {
          id: 'black-over-white-1',
          'text-main': '#000',
          'background-main': '#FFF'
        }
      },*/
      header: { }
    },
    template: {
      name: app.cfg.TPL_ID,
      createdWith: app.version,
      editedWith: app.version,
      dataVersion: '1.0.0'
    },
    sections: [ ]
  };

  return function BuilderView(Core, Builder) {
    $('#builder-views').append(viewTpl({ }));

    var _settingsPopup = null, // eslint-disable-line no-unused-vars
        _mediaPicker = null;

    this.init = function() {
      app.builder.pendingChanges = 0;

      // Media picker
      _mediaPicker = new MediaPickerPopup({
        container: $('.media-picker-popup')
      });
      app.builder.mediaPicker = _mediaPicker;

      _settingsPopup = new SettingsPopup({
        container: $('#settings-popup')
      });
      app.builder.settingsPopup = _settingsPopup;

      //
      // My Stories
      //

      //topic.subscribe('MY-STORIES-EDIT-MEDIA', myStoriesEditMedia);
      //topic.subscribe('MY-STORIES-EDIT-MAP', myStoriesEditMap);

      topic.subscribe('builder-section-update', onSectionUpdate);

      // Mhh
      topic.subscribe('tpl-ready', function() {
        updateCreditsPlaceholderVisibility();
        topic.publish('builder-story-title-update', app.Controller.getStoryTitle());
      });
    };

    this.appInitComplete = function() {
      var newStory = null;

      //
      // Start in fromScratch mode
      //
      if (! app.data.appItem &&
          (CommonHelper.getUrlParams().fromScratch !== undefined
          || CommonHelper.getUrlParams().fromscratch !== undefined)) {
        newStory = getBlankAppDataJSON({
          //title: 'Cascade created on ' + new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString(),
          //subtitle: 'Builder placeholder'
          title: '',
          subtitle: ''
        });

        if (CommonHelper.getUrlParams().dev !== undefined) {
          newStory = getBlankAppDataJSON2({});
        }
        else if (CommonHelper.getUrlParams().dev2 !== undefined) {
          newStory = getBlankAppDataJSON3({});
        }

        app.data.appItem = {
          item: BuilderHelper.getBlankAppJSON(),
          data: {
            values: null
          }
        };

        // TODO: tmp - force a different item title
        app.data.title = app.data.appItem.item.title;
      }
      //
      // Start from a webmap or an empty item
      //
      else if (app.data.appItem && app.Controller.isStoryBlank()) {
        var webmapId = null,
            websceneId = null;

        if (app.data.appItem.data && app.data.appItem.data.values) {
          webmapId = app.data.appItem.data.values.webmap;
          websceneId = app.data.appItem.data.values.webscene;
        }

        newStory = getBlankAppDataJSON({
          webmapId: webmapId,
          websceneId: websceneId,
          title: app.data.appItem.item.title || '',
          subtitle: app.data.appItem.item.snippet || ''
        });
      }

      if (newStory) {
        app.data.appItem.data.values = newStory;
      }

      topic.subscribe('builder-story-title-update', function(title) {
        document.title = title;
      });

      //
      // Update some components that need to know if the story has a title yet
      //
      topic.publish('builder-story-title-update', app.Controller.getStoryTitle());

      if (! app.isProduction && CommonHelper.getUrlParams().debug == 'media-picker') {
        app.builder.mediaPicker.open({
          mode: 'add'
        }).then(
          function(selection) {
            console.log('selected media:', selection);
          },
          function() {
            //
          }
        );
      }
    };

    this.updateUI = function() {
      //
    };

    this.saveApp = function() {
      var storyData = Controller.serializeStory();

      app.data.title = app.Controller.getStoryTitle();
      app.data.appItem.data.values.sections = storyData;

      Builder.saveApp();
    };

    this.saveFailed = function(source) {
      if (source === 'DUPLICATE') {
        app.data.sections[0].showTitleError();
        app.Controller.navigateToSection({
          index: 0,
          animate: false
        });
      }
    };

    /*jshint -W098 */
    this.resize = function() {
      // On Firefox and share dialog is displayed
      /*
      if (has('ff') && $('#sharePopup').hasClass('in')) {
        _sharePopup.updateMyStoriesPosition();
      }
      */
    };

    function onSectionUpdate() {
      var sections = app.data.sections;

      if (! sections || ! sections.length) {
        return;
      }

      app.Controller.renderHeader();
      updateCreditsPlaceholderVisibility();
    }

    function updateCreditsPlaceholderVisibility() {
      var sections = app.data.sections;

      if (! sections || ! sections.length) {
        return;
      }

      //
      // Update the visibility of credits-placeholder section
      // - not visible if there is a credits section
      // - visible if no credits and
      //    - there is more than 2 sections (excluding credits-placeholder)
      //    - 2 sections and the second section is
      //      - an immersive
      //      - a sequence with 2 or more complete blocks
      //

      var lastSection = sections[sections.length - 1];

      if (lastSection && lastSection.type == 'credits') {
        sections[sections.length - 2].setVisibility(false);
      }
      else {
        var isVisible = sections.length > 3;

        if (! isVisible) {
          if (sections[1].type == 'immersive') {
            isVisible = true;
          }
          else if (sections[1].type == 'sequence') {
            if (sections[1].getNumberOfBlocks() >= 3) {
              isVisible = true;
            }
          }
        }

        sections[sections.length - 1].setVisibility(isVisible);
      }
    }

    function getBlankAppDataJSON(params) {
      var story = lang.clone(STORY_SHELL);

      //story.config.author.name = app.portal.getPortalUser().fullName;

      var firstSectionBlocks = [];

      if (params.webmapId) {
        firstSectionBlocks = [
          /* todo webmap title? */
          app.ui.MediaFactory.createInstance({
            type: 'webmap',
            webmap: {
              id: params.webmapId
            }
          }).serialize()
        ];
      }
      else if (params.websceneId) {
        firstSectionBlocks = [
          /* todo webscene title? */
          app.ui.MediaFactory.createInstance({
            type: 'webscene',
            webscene: {
              id: params.websceneId
            }
          }).serialize()
        ];
      }

      story.sections = [
        app.ui.SectionFactory.createInstance({
          type: 'cover',
          foreground: {
            title: params.title,
            subtitle: params.subtitle
          }
        }).serialize(),
        app.ui.SectionFactory.createInstance({
          type: 'sequence',
          background: app.ui.MediaFactory.createInstance({
            type: 'color',
            color: {
              value: '#FFF'
            }
          }).serialize(),
          foreground: {
            blocks: firstSectionBlocks
          }
        }).serialize()
      ];

      return story;
    }

    /* todo: remove */
    function getCoverPlaceholderImage() {
      var images = [
        'AngelaBenito.jpg',
        'EandNPhotographies.jpg',
        'ErolAhmed.jpg',
        'FrancesGunn.jpg',
        'JeremyThomas.jpg',
        'JonathanBean.jpg',
        'LukasBudimaier.jpg',
        'NASA.jpg',
        'PatrickFore.jpg',
        'PatrickTomasso.jpg',
        'PhilippeWuyts.jpg',
        'SamuelScrimshaw.jpg',
        'SujanSundareswaran.jpg',
        'SusanneFeldt.jpg',
        'VladimirKudinov.jpg',
        'WilsonLau.jpg'
      ];

      var image = images[Math.floor(Math.random() * images.length)];

      return 'resources/tpl/viewer/cover-placeholder/' + image;
    }

    /*eslint-disable */
    function getBlankAppDataJSON2() {
      return {
        "config": {
          "author": {
            "name": "The Esri Story Maps team"
          },
          "custom-story": "refugee"
        },
        "settings": {
          "theme": {
            "colors": {
              "id": "black-over-white-1",
              "text-main": "#000",
              "background-main": "#FFF"
            }
          },
          "header": { }
        },
        "template": {
          "name": "Cascade",
          "createdWith": "0.0.1",
          "editedWith": "0.0.2",
          "dataVersion": "0.5.0"
        },
        "sections": [
          {
            "type": "cover",
            "layout": "cover-1",
            "background": {
              "type": "video",
              "video": {
                "source": "vimeo",
                "id": "154001757"
              },
              "alternate": "image",
              "image": {
                  "url": getCoverPlaceholderImage()
              }
            },
            "foreground": {
              "title": "Builder demo",
              "subtitle": "Created on " + new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString(),
              "credits-left": "©UNHCR/Viktor Pesenti",
              "credits-right": "Story sources: UNHCR, Airbus Defense and Space"
            }
          },

          {
            "type": "sequence",
            "layout": "sequence-1",
            "background": {
              "type": "color",
              "color": {
                "value": "#FFF"
              }
            },
            "foreground": {
              "blocks": [
                {
                  "type": "text",
                  "text": {
                    "value": "<h1 class='block' style='text-align: center;'>Epicenter of the refugee crisis: Syria.</h1>"
                  }
                },/*
                {
                  "type" : "webmap",
      						"webmap" : {
      							"id" : "c0314d09ac144c49ad36523aaee8077e",
      							"extent" : null,
      							"layers" : [{
      									"id" : "World_Hillshade_2070",
      									"visibility" : false
      								}
      							]
                  }
                },
                {
                  "type": "webscene",
                  "webscene": {
                    "id" : "abac15d78f944e12ad7624d77c819dd7",
                    "slide": 0
                  }
                },/*
                {
                  "type": "webscene",
                  "webscene": {
                    "id" : "81ee99aea2834978bd3007aa5cbe73f3"
                  }
                },
                {
                  "type": "video",
                  "video": {
                    "source": "vimeo",
                    "id": "154001757"
                  }
                },
                {
                  "type": "webpage",
                  "webpage": {
                    "url": "http://www.arcgis.com"
                  }
                },*/
                /*
                {
                  "type": "text",
                  "text": {
                    "value": "<p class='block' style='text-align: center;'>A brutal civil war has devastated scores of cities and towns. More than seven million people have fled their homes but remain within Syria. Four million Syrian refugees reside in neighboring countries; a million more have streamed across Greece and the Balkans toward hoped-for asylum in Western Europe.</p>"
                  }
                },
                {
                  "type": "text",
                  "text": {
                    "value": "<p class='block' style='text-align: center;'>The crisis shows no signs of abating in 2016. More than 300 people have drowned attempting the water crossing from Turkey to Greece. And tens of thousands of desperate Syrians have massed at the Turkish border, following renewed fighting in Aleppo, Syria’s largest city. Government troops, emboldened by recent victories, threaten to cut off insurgent supply lines to the city.</p>"
                  }
                },*/
                {
                  "type": "image-gallery",
                  "image-gallery": {
                    "images": [
                      {
                        "url": "stories/refugees-assets/intro-1.jpg",
                        "width": 2000,
                        "height": 1333
                      },
                      {
                        "url": "stories/refugees-assets/intro-2.jpg",
                        "width": 2000,
                        "height": 1331
                      }
                    ],
                    "caption": "Syrian refugees throng a busy thoroughfare in the Zaatari Refugee Camp in Jordan <small>©UNHCR/Christopher Herwig</small>. Refugees seeking asylum in western Europe crowd a train station in Budapest, Hungary <small>©UNHCR/Mark Henley</small>."
                  }
                },/*
                {
                  "type": "text",
                  "text": {
                    "value": "<p class='block'>Although Syria leads the list of source countries, refugees have fled many other nations, prominent among them Afghanistan, Somalia, Sudan and South Sudan.</p>"
                  }
                },*/
                {
                  "type": "image",
                  "image": {
                    "url": "stories/refugees-assets/intro-3.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 2000,
                    "height": 1073,
                    "options": {
                      "size": "medium"
                    }
                  }
                }
              ]
            }
          },
          /*
          {
            "type": "immersive",
            "views": [
              {
                "transition": "fade-slow",
                "background": {
                  "type": "webscene",
                  "webscene": {
                    "id" : "29fb98146624419a9da3bad9455b1635",
                    "slide": 2
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "large",
                        "style": "background",
                        "theme": "white-over-black"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>When the Syrian Civil War erupted in 2011, hundreds of thousands of Syrian civilians joined a procession of hopeful migrants and refugees from South Asia, the Middle East, and North Africa, all seeking new lives in Europe.</p>"
                          }
                        },
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>The sheer number of Syrian refugees quickly inundated overland routes, straining the resources of transit countries, including economically imperiled Greece.</p>"
                          }
                        },
                        {
                          "type": "image",
                          "image": {
                            "url": "stories/refugees-assets/exodus-travel-04.jpg",
                            "caption": "Refugees crowd a border crossing between Serbia and Croatia. © UNHCR/Rafal Kostrzynski",
                            "width": 2000,
                            "height": 1333
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "transition": "none",
                "background": {
                  "type": "webscene",
                  "webscene": {
                    "id" : "29fb98146624419a9da3bad9455b1635",
                    "slide": 1
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "large",
                        "style": "background",
                        "theme": "white-over-black"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>In response to the sudden influx of refugees, Greece built an eight-mile fence along its border with Turkey in 2012. The Evros River, impassable in most sections, makes up the remainder of the border between the two countries.</p>"
                          }
                        },
                        {
                          "type": "image",
                          "image": {
                            "url": "stories/refugees-assets/RF235187_Med_res.jpg",
                            "caption": "The Evros fence between Greece and Turkey. © UNHCR/Achilles Zavallis",
                            "width": 2000,
                            "height": 1333
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "immersive",
            "options": {
              "events": "button"
            },
            "views": [
              {
                "transition": "fade-slow",
                "background": {
                  "type" : "webmap",
      						"webmap" : {
      							"id" : "c0314d09ac144c49ad36523aaee8077e",
      							"extent" : null,
      							"layers" : [{
      									"id" : "2014_4419",
      									"visibility" : true
      								}, {
      									"id" : "World_Hillshade_2070",
      									"visibility" : false
      								}, {
      									"id" : "Zaatari_classification_2013_6006",
      									"visibility" : false
      								}
      							],
                    "swipeLayer" : "2014_4419",
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "white-over-black"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>Fallow fields and a dusty airstrip characterized the Zaatari site prior to mid-2012. The site is 10 kilometers east of Mafraq, a regional capital with a population of 56,000.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "transition": "swipe-vertical",
                "background": {
                  "type" : "webmap",
      						"webmap" : {
      							"id" : "c0314d09ac144c49ad36523aaee8077e",
      							"extent" : null,
      							"layers" : [{
      									"id" : "World_Hillshade_2070",
      									"visibility" : false
      								}, {
      									"id" : "Zaatari_classification_2013_6006",
      									"visibility" : false
      								}
      							],
                    "swipeLayer" : "2014_4419"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "white-over-black"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>This 2015 satellite image reveals an orderly grid crowded with thousands of structures. Pleiades satellite imagery provided by Airbus Defense and Space.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          },*/

          /*
          {
            "type": "immersive",
            "options": {
              "events": "button"
            },
            "views": [
              {
                "transition": "fade-slow",
                "background": {
                  "type" : "webmap",
      						"webmap" : {
      							"id" : "c0314d09ac144c49ad36523aaee8077e",
      							"extent" : null,
      							"layers" : [{
      									"id" : "2014_4419",
      									"visibility" : true
      								}, {
      									"id" : "World_Hillshade_2070",
      									"visibility" : false
      								}, {
      									"id" : "Zaatari_classification_2013_6006",
      									"visibility" : false
      								}
      							],
                    "swipeLayer" : "2014_4419",
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "white-over-black"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>Fallow fields and a dusty airstrip characterized the Zaatari site prior to mid-2012. The site is 10 kilometers east of Mafraq, a regional capital with a population of 56,000.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "transition": "swipe-vertical",
                "background": {
                  "type" : "webmap",
      						"webmap" : {
      							"id" : "c0314d09ac144c49ad36523aaee8077e",
      							"extent" : null,
      							"layers" : [{
      									"id" : "World_Hillshade_2070",
      									"visibility" : false
      								}, {
      									"id" : "Zaatari_classification_2013_6006",
      									"visibility" : false
      								}
      							],
                    "swipeLayer" : "2014_4419"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "white-over-black"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>This 2015 satellite image reveals an orderly grid crowded with thousands of structures. Pleiades satellite imagery provided by Airbus Defense and Space.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          },*/

          {
            "type": "immersive",
            "views": [
              {
                "transition": "fade-slow",
                "background": {
                  "type" : "webmap",
      						"webmap" : {
      							"id" : "c0314d09ac144c49ad36523aaee8077e",
      							"extent" : null,
      							"layers" : [{
      									"id" : "World_Hillshade_2070",
      									"visibility" : false
      								}
      							]
                  }
                },
                "foreground": {
                  "title": {
                    "value": "",
                    "global": true
                  },
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "black-over-white"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>A deadlocked civil war made Syria the largest source of refugees in 2014.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "transition": "swipe-vertical",
                "background": {
                  "type": "image",
                  "image": {
                    "url" : "stories/refugees-assets/IDP_14_Labeled.jpg",
                    "alternate": "stories/refugees-assets/IDP_14_Centered.jpg"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "black-over-white"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>xsaxasxSyria also had more IDPs than any other country.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "transition": "swipe-horizontal",
                "background": {
                  "type": "image",
                  "image": {
                    "url" : "stories/refugees-assets/exodus-travel-01.jpg"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "black-over-white"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>xxxSyria also had more IDPs than any other country.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              },

              {
                "transition": "swipe-vertical",
                "background": {
                  "type": "image",
                  "image": {
                    "url" : "stories/refugees-assets/exodus-travel-02.jpg"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-full",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "background",
                        "theme": "black-over-white"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>zzzSyria also had more IDPs than any other country.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "title",
            "options": {
              "dimension": "large"
            },
            "background": {
              "type": "video",
              "video": {
                "source": "vimeo",
                "id": "153950216",
                "options": "margin-top: -197px;"
              },
              "alternate": "image",
              "image": {
                  "url": "stories/refugees-assets/Zaatari-alt.jpg"
              }
            },
            "foreground": {
              "title": "The Disintegration of Syria",
              "credits": "©USAID"
            }
          }/*,
          {
            "type": "sequence",
            "layout": "sequence-1",
            "background": {
              "type": "color",
              "color": {
                "value": "#FFF"
              }
            },
            "foreground": {
              "blocks": [
                {
                  "type": "text",
                  "text": {
                    "value": "<h1 class='block' style='text-align: center;'>Epicenter of the refugee crisis: Syria.</h1>"
                  }
                }
              ]
            }
          },*/

          /*
          {
            "type": "immersive",
            "views": [
              {
                "transition": "none",
                "background": {
                  "type": "webpage",
                  "webpage": {
                    "url" : "stories/refugees-assets/refugees-IDPS-chart.html"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-partial",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "text-shadow",
                        "theme": "black-over-white"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'>The total number of forcibly displaced people has nearly tripled since 1995.</p>"
                          }
                        },
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'><strong>Refugees</strong> totaled an estimated 15.1 million in 2015.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              },
              {
                "transition": "none",
                "background": {
                  "type": "webpage",
                  "webpage": {
                    "url" : "stories/refugees-assets/refugees-IDPS-chart.html"
                  }
                },
                "foreground": {
                  "panels": [
                    {
                      "layout": "scroll-partial",
                      "settings": {
                        "position-x": "left",
                        "size": "medium",
                        "style": "text-shadow",
                        "theme": "black-over-white"
                      },
                      "blocks": [
                        {
                          "type": "text",
                          "text": {
                            "value": "<p class='block'><strong>Internally displaced people (IDPs)</strong>, who have left their homes but remain within their countries of origin, numbered 34 million.</p>"
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            ]
          }*//*,
          {
            "type": "credits",
            "layout": "credits-1",
            "background": {
              "type": "color",
              "color": {
                "value": "#000"
              }
            },
            "foreground": {
              "blocks": [
                {
                  "type": "text",
                  "text": {
                    "value": "<div style='opacity: 0.7'>Satellite imagery</div><a href='http://www.geo-airbusds.com/en/65-satellite-imagery' target='_blank'><img src='stories/refugees-assets/Airbus_Logo.png' /></a>"
                  }
                },
                {
                  "type": "credits",
                  "credits": {
                    "col1": [
                      {
                        "label": "World refugee/IDP statistics",
                        "link": "<a href='http://popstats.unhcr.org/en/persons_of_concern' target='_blank'>UNHCR</a>"
                      },
                      {
                        "label": "Migration routes",
                        "link": "<a href='http://migration.iom.int/europe/' target='_blank'>International Organization for Migration</a>"
                      }
                    ],
                    "col2": [
                      {
                        "label": "Refugee camps",
                        "link": "<a href='http://data.unhcr.org/syrianrefugees/regional.php' target='_blank'>UNHCR</a>"
                      },
                      {
                        "label": "IDP camps",
                        "link": "<a href='https://data.hdx.rwlabs.org/dataset/syria-idp-sites' target='_blank'>U.S. Department of State Humanitarian Information Unit</a>"
                      }
                    ]
                  }
                },
                {
                  "type": "discover",
                  "discover": {
                    "title": "Discover more Story Maps by Esri’s Story Maps team",
                    "items": [
                      {
                        "title": "Great Wetlands of the World",
                        "thumbnail": "http://story.maps.arcgis.com/sharing/rest/content/items/aed61922c4b444ba843d19e676e80004/info/thumbnail/thumbnail.png",
                        "url": "http://story.maps.arcgis.com/apps/MapSeries/?appid=aed61922c4b444ba843d19e676e80004"
                      },
                      {
                        "title": "Atlas for a Changing Planet",
                        "thumbnail": "http://story.maps.arcgis.com/sharing/rest/content/items/3680cbc3b6484f35a09265489791379e/info/thumbnail/ago_downloaded.jpg",
                        "url": "http://storymaps.esri.com/stories/2015/atlas-for-a-changing-planet/"
                      },
                      {
                        "title": "Katrina +10: A Decade of Change in New Orleans",
                        "thumbnail": "http://www.arcgis.com/sharing/rest/content/items/597d573e58514bdbbeb53ba2179d2359/info/thumbnail/katrina_plus_10_small_thumbnail.jpg",
                        "url": "http://story.maps.arcgis.com/apps/MapSeries/index.html?appid=597d573e58514bdbbeb53ba2179d2359"
                      },
                      {
                        "title": "Mountains of Fire",
                        "thumbnail": "http://story.maps.arcgis.com/sharing/rest/content/items/4c77a56bbcd743b69232cf3fd9c7a61c/info/thumbnail/mountains_of_fire.png",
                        "url": "http://story.maps.arcgis.com/apps/MapJournal/?appid=4c77a56bbcd743b69232cf3fd9c7a61c"
                      }
                    ]
                  }
                }
              ]
            }
          }*/
        ]
      };
    }

    function getBlankAppDataJSON3() {
      return {
        "config": {
          "author": {
            "name": "The Esri Story Maps team"
          },
          "custom-story": "refugee"
        },
        "settings": {
          "theme": {
            "colors": {
              "id": "black-over-white-1",
              "text-main": "#000",
              "background-main": "#FFF"
            },
            "fonts": {
              "main": {
                "id": "default",
                "name": "Open Sans",
                "value": ""
              }
            }

          },
          "header": {
            "linkText": "",
            "social": {
              "facebook": true
            }
          }
        },
        "template": {
          "name": "Cascade",
          "createdWith": "0.0.1",
          "editedWith": "0.0.2",
          "dataVersion": "0.5.0"
        },
        "sections": [
          {
            "type": "cover",
            "layout": "cover-1",
            "background": {
              "type": "image",
              "video": {
                "source": "vimeo",
                "id": "154001757"
              },
              "alternate": "image",
              "image": {
                  "url": getCoverPlaceholderImage()
              }
            },
            "foreground": {
              "title": "Builder demo",
              "subtitle": "Created on " + new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString(),
              "credits-left": "©UNHCR/Viktor Pesenti",
              "credits-right": "Story sources: UNHCR, Airbus Defense and Space"
            }
          },

          {
            "type": "sequence",
            "layout": "sequence-1",
            "background": {
              "type": "color",
              "color": {
                "value": "#FFF"
              }
            },
            "foreground": {
              "blocks": [
                {
                  "type": "text",
                  "text": {
                    "value": "<h1 class='block' style='text-align: center;'>Image test</h1>"
                  }
                },

                {
                  "type": "text",
                  "text": {
                    "value": "<p class='block' style='text-align: left;'>Below is tests of the size options for 4 images that I hope represent typical images.</p>"
                  }
                },

                {
                  "type": "text",
                  "text": {
                    "value": "<p class='block' style='text-align: left;'>Each image mutiple times with all settings in the following order: small, medium (default - cropIfNeeded=true), medium (cropIfNeeded=false), large</p>"
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "resources/tpl/viewer/icons/esri-logo.png",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 87,
                    "height": 32,
                    options: {
                      size: 'small',
                      fitHeight: true
                    }
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "resources/tpl/viewer/icons/esri-logo.png",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 87,
                    "height": 32,
                    options: {
                      size: 'medium',
                      fitHeight: true
                    }
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "resources/tpl/viewer/icons/esri-logo.png",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 87,
                    "height": 32,
                    options: {
                      size: 'medium',
                      fitHeight: false
                    }
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "resources/tpl/viewer/icons/esri-logo.png",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 87,
                    "height": 32,
                    options: {
                      size: 'large',
                      fitHeight: false
                    }
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "http://www.maniacworld.com/now-this-is-a-tall-building.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 640,
                    "height": 4298,
                    options: {
                      size: 'small',
                      fitHeight: true
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "http://www.maniacworld.com/now-this-is-a-tall-building.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 640,
                    "height": 4298,
                    options: {
                      size: 'medium',
                      fitHeight: true
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "http://www.maniacworld.com/now-this-is-a-tall-building.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 640,
                    "height": 4298,
                    options: {
                      size: 'medium',
                      fitHeight: false
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "http://www.maniacworld.com/now-this-is-a-tall-building.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 640,
                    "height": 4298,
                    options: {
                      size: 'large',
                      fitHeight: false
                    }
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor,_Mount_Washington_Panorama.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 19412,
                    "height": 3866,
                    options: {
                      size: 'small',
                      fitHeight: true
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor,_Mount_Washington_Panorama.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 19412,
                    "height": 3866,
                    options: {
                      size: 'medium',
                      fitHeight: true
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor,_Mount_Washington_Panorama.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 19412,
                    "height": 3866,
                    options: {
                      size: 'medium',
                      fitHeight: false
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Mount_Ellinor,_Mount_Washington_Panorama.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 19412,
                    "height": 3866,
                    options: {
                      size: 'large',
                      fitHeight: false
                    }
                  }
                },

                {
                  "type": "image",
                  "image": {
                    "url": "stories/refugees-assets/exodus-travel-03.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 2000,
                    "height": 1333,
                    options: {
                      size: 'small',
                      fitHeight: true
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "stories/refugees-assets/exodus-travel-03.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 2000,
                    "height": 1333,
                    options: {
                      size: 'medium',
                      fitHeight: true
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "stories/refugees-assets/exodus-travel-03.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 2000,
                    "height": 1333,
                    options: {
                      size: 'medium',
                      fitHeight: false
                    }
                  }
                },
                {
                  "type": "image",
                  "image": {
                    "url": "stories/refugees-assets/exodus-travel-03.jpg",
                    "caption": "Somali refugee camp in Eritrea, Horn of Africa. <small>Creative Commons/Reinhard Dietrich</small>",
                    "width": 2000,
                    "height": 1333,
                    options: {
                      size: 'large',
                      fitHeight: false
                    }
                  }
                }
              ]
            }
          },

          {
            "type": "credits",
            "layout": "credits-1",
            "background": {
              "type": "color",
              "color": {
                "value": "#000"
              }
            },
            "foreground": {
              "blocks": [
                {
                  "type": "text",
                  "text": {
                    "value": "<div style='opacity: 0.7'>Satellite imagery</div><a href='http://www.geo-airbusds.com/en/65-satellite-imagery' target='_blank'><img src='stories/refugees-assets/Airbus_Logo.png' /></a>"
                  }
                },
                {
                  "type": "credits",
                  "credits": {
                    "col1": [
                      {
                        "label": "World refugee/IDP statistics",
                        "link": "<a href='http://popstats.unhcr.org/en/persons_of_concern' target='_blank'>UNHCR</a>"
                      },
                      {
                        "label": "Migration routes",
                        "link": "<a href='http://migration.iom.int/europe/' target='_blank'>International Organization for Migration</a>"
                      }
                    ],
                    "col2": [
                      {
                        "label": "Refugee camps",
                        "link": "<a href='http://data.unhcr.org/syrianrefugees/regional.php' target='_blank'>UNHCR</a>"
                      },
                      {
                        "label": "IDP camps",
                        "link": "<a href='https://data.hdx.rwlabs.org/dataset/syria-idp-sites' target='_blank'>U.S. Department of State Humanitarian Information Unit</a>"
                      }
                    ]
                  }
                },
                {
                  "type": "discover",
                  "discover": {
                    "title": "Discover more Story Maps by Esri’s Story Maps team",
                    "items": [
                      {
                        "title": "Great Wetlands of the World",
                        "thumbnail": "http://story.maps.arcgis.com/sharing/rest/content/items/aed61922c4b444ba843d19e676e80004/info/thumbnail/thumbnail.png",
                        "url": "http://story.maps.arcgis.com/apps/MapSeries/?appid=aed61922c4b444ba843d19e676e80004"
                      },
                      {
                        "title": "Atlas for a Changing Planet",
                        "thumbnail": "http://story.maps.arcgis.com/sharing/rest/content/items/3680cbc3b6484f35a09265489791379e/info/thumbnail/ago_downloaded.jpg",
                        "url": "http://storymaps.esri.com/stories/2015/atlas-for-a-changing-planet/"
                      },
                      {
                        "title": "Katrina +10: A Decade of Change in New Orleans",
                        "thumbnail": "http://www.arcgis.com/sharing/rest/content/items/597d573e58514bdbbeb53ba2179d2359/info/thumbnail/katrina_plus_10_small_thumbnail.jpg",
                        "url": "http://story.maps.arcgis.com/apps/MapSeries/index.html?appid=597d573e58514bdbbeb53ba2179d2359"
                      },
                      {
                        "title": "Mountains of Fire",
                        "thumbnail": "http://story.maps.arcgis.com/sharing/rest/content/items/4c77a56bbcd743b69232cf3fd9c7a61c/info/thumbnail/mountains_of_fire.png",
                        "url": "http://story.maps.arcgis.com/apps/MapJournal/?appid=4c77a56bbcd743b69232cf3fd9c7a61c"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      };
    }
    /*eslint-enable */
  };
});
