

require(['dojo/topic', 'storymaps/tpl/utils/UI'], function(topic, UIUtils) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */
    var isInIframe = (parent !== window);

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };

    // function to get the query params from the URL
    var getQueryStringValue = function(key) {
        return decodeURIComponent(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
    };

    // function to update the query params in the URL address bar
    var updateQueryStringParameter = function(uri, key, value) {
        var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
        var separator = uri.indexOf('?') !== -1 ? '&' : '?';
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + '=' + value + '$2');
        } else {
            return uri + separator + key + '=' + value;
        }
    };

    // function to remove a query parameter from the URL address bar
    var removeQueryParam = function(sourceURL, key) {
        var rtn = sourceURL.split('?')[0];
        var param;
        var params_arr = [];
        var queryString = (sourceURL.indexOf('?') !== -1) ? sourceURL.split('?')[1] : '';

        if (queryString !== '') {
            params_arr = queryString.split('&');
            for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                param = params_arr[i].split('=')[0];
                if (param === key) {
                    params_arr.splice(i, 1);
                }
            }
            rtn = rtn + '?' + params_arr.join('&');
        }
        return rtn;
    };   

    //Listen to print requests and change location to print view
    if (!app.isPrint) {

        function beforePrint () {
            window.location = window.location.href + '&print';
        }
        window.onbeforeprint = beforePrint;
 
        var printHandler = function(mql) {
            if(mql.matches) {
                beforePrint();
            }
        };         
        var mql = window.matchMedia('print');
        mql.addListener(printHandler);
    };


    // The application is ready
    topic.subscribe('tpl-ready', function() {

        /*Make illustration sticky when the text-content is so long that the user has to scroll to view it all*/
        var updateIllustrationPosition = function($, headerHeight) {

            return function () {
                var MIN_WIDTH_FOR_STICKY_ILLUSTRATIONS = 600;
                var TOP_MARGIN = 100;
                var $this = $(this);
                var $imageParentContainer = $this.parent();
                if($imageParentContainer.outerWidth() >= MIN_WIDTH_FOR_STICKY_ILLUSTRATIONS){
                    var viewHeight = window.innerHeight - headerHeight - 100;
                    var imageHeight = $this.children('img').first().outerHeight();
                    var containerHeight = $this.parent().outerHeight();

                    if(containerHeight > imageHeight && containerHeight > viewHeight){
                        var topOfContainerElement = $imageParentContainer.offset().top;
                        var bottomOfContainerElement = $imageParentContainer.offset().top + $imageParentContainer.outerHeight();
                        var topOfScreen = $(window).scrollTop() +headerHeight +TOP_MARGIN;
                        var bottomLimit = (bottomOfContainerElement - imageHeight);

                        if((topOfContainerElement <= topOfScreen) && (bottomLimit >= topOfScreen)){
                            //Sticky
                            $this.removeClass("sticky-bottom").addClass("sticky");
                            $this.css("top", headerHeight + TOP_MARGIN);
                        } else if (topOfContainerElement <= topOfScreen){
                            //Sticky bottom
                            $this.removeClass("sticky").addClass("sticky-bottom");
                            $this.css("top", "auto");
                        } else {
                            //Not sticky
                            $this.removeClass("sticky").removeClass("sticky-bottom");
                            $this.css("top", "auto");
                        }       
                     }         
                } else {
                    $this.removeClass("sticky").removeClass("sticky-bottom");
                    $this.css("top", "auto");
                }                
            }
        }     

        function fixStickyIllustrations(){
            $('.image-content').each(updateIllustrationPosition($, UIUtils.getHeaderHeight()))
            topic.publish('compute-display-infos');
        };

        if(!$('body').hasClass('mobile-view') && !app.isInBuilder && !app.isPrint){
            var $window = $(window);
            $window.bind("scroll", fixStickyIllustrations);
            $window.bind("resize", fixStickyIllustrations);
        }


        //Navigate to section with the provided index
        var navigateToSection = function(sectionIndex){
            app.Controller.navigateToSection({
                index: sectionIndex,
                animate: true
            });
        };

        var getBookmarkByName = function(name) {
            var bookmarks = app.Controller.getBookmarks();
            return bookmarks.filter(function(bm) {
                return (bm.title === name);
            })[0];
        };    

        //COMMUNICATION WITH STORYMAP SERIES WHEN THIS STORYMAP IS EMBEDDED IN AN IFRAME
        if(isInIframe){
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
            var eventer = window[eventMethod];
            var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

            // Listen to messages from parent window
            eventer(messageEvent,function(e) {
                if(e.data.method === 'NAVIGATE'){
                    //Navigate to the bookmark
                    var sectionObject = getBookmarkByName(e.data.bookmark);
                    if(sectionObject){
                        navigateToSection(sectionObject.index);          
                    }
                }
            }, false); 

            //Tell the parent window that the storymap has been loaded
            var action =  {
                method: 'INIT_COMPLETED'
            };      
            parent.postMessage(action, "*");
        }

        //TOGGLE ELEMENTS
        var currentOpenToggle = null;
        var setupToggle = function($) {

            var preventScroll = function(e) {
                e.preventDefault();
            };

            //Stop body scrolling on touch devices
            function stopBodyScrolling (bool) {
                if (bool === true) {
                    document.body.addEventListener("touchmove", preventScroll, false);
                } else {
                    document.body.removeEventListener("touchmove", preventScroll, false);
                }
            }

            var openToggle = function(toggleClass, $button, $target) {
                if ($button[0].hasAttribute('data-toggle-body-no-scroll')) {
                    $('html, body').addClass($button.attr('no-scroll'));
                    stopBodyScrolling(true);
                }
                $button.attr('aria-expanded', true);
                $target.addClass(toggleClass);
                $button.data('isOpen', true); 
                topic.publish('media-dynamic-resize');               
            }

            var closeToggle = function(toggleClass, $button, $target) {
                $button.attr('aria-expanded', false);
                $button.data('isOpen', false);
                $target.removeClass(toggleClass);
                if ($button[0].hasAttribute('data-toggle-body-no-scroll')) {
                    stopBodyScrolling(false);
                    $('html, body').removeClass($button.attr('no-scroll'));
                }
                topic.publish('media-dynamic-resize');
            }

            return function () {
                var $this = $(this);
                var targetString = $this.data('toggle');
                var splittedTargetString = targetString.split(',');
                var target = splittedTargetString[0];
                var toggleClass = splittedTargetString[1];
                var isExpanded = splittedTargetString[2];

                toggleClass = toggleClass || 'open';

                if (target) {
                    var $target = $(target);
                    $this.attr('aria-controls', target.replace('#', ''));

                    if (isExpanded && isExpanded == 'true') {
                        openToggle(toggleClass, $this, $target);
                    } else {
                        closeToggle(toggleClass, $this, $target);
                    }

                    var handleToggle = function() {
                        var isOpen = $this.data('isOpen');

                        if (isOpen) {
                            closeToggle(toggleClass, $this, $target);
                        } else {
                            openToggle(toggleClass, $this, $target);
                        }
                    }

                    $this.on('click', handleToggle);
                    // Look for a close button within the $target
                    var $close = $target.find('[data-close]');
                    if ($close) {
                      $close.attr('aria-controls', target.replace('#', ''));
                    }
                }
            }
        }     
        $('[data-toggle]').each(setupToggle($))

        //INTERNAL LINKING TO SECTIONS (BY BOOKMARK NAME OR SECTION INDEX)
        //Check query string on page load
        var bookmark = getQueryStringValue('bookmark');
        var sectionIndex = getQueryStringValue('sectionIndex');
        if (bookmark) {
            var sectionObject = getBookmarkByName(bookmark);
            if (sectionObject) {
                navigateToSection(sectionObject.index);
            }
        } else if (sectionIndex) {
            navigateToSection(sectionIndex);
        }

        // This is the function that will be called when one of our `inlink` links is clicked
        var linkToSection = function(eventData) {
            eventData.preventDefault();

            // set the index, assume it's the section index number
            var index = eventData.data.section;

            // set URL bar to your new section. now you can copy/paste/share easily!
            var currentUrl = window.location.href;
            var newUrl = currentUrl;

            if (eventData.data.sectionType === 'bookmark') {
                // if we are dealing with a bookmark name, get the proper index
                var bookmarkObject = getBookmarkByName(eventData.data.section);
                index = bookmarkObject.index;

                // set the URL address bar
                newUrl = updateQueryStringParameter(currentUrl, 'bookmark', eventData.data.section);
                newUrl = removeQueryParam(newUrl, 'sectionIndex');
            } else {
                // set the URL address bar
                newUrl = updateQueryStringParameter(currentUrl, 'sectionIndex', eventData.data.section);
                newUrl = removeQueryParam(newUrl, 'bookmark');
            }

            // this actually refreshes the URL address bar
            window.history.pushState({}, '', newUrl);

            // scroll to the section (finally!)
            navigateToSection(index);      
        };

        // scan the entire story map and get all the `inlink-*` links
        var inlinkElements = document.querySelectorAll('a[href^=\'inlink-\']');

        // loop through each link element we have and make some adjustments
        for(var i=0; i<inlinkElements.length; i++){
            var linkElement = inlinkElements[i];
            // split up the href value; examples values are:
            // `inlink-bookmark-Learn` ==> navigate to the bookmark titled "Learn"
            // `inlink-index-9` ==> navigate to the 9th element in your story 
            var linkIdentifier = linkElement.href.substr(linkElement.href.indexOf('inlink-'), linkElement.href.length);
            var splits = linkIdentifier.split('-');
            // get section type; either `bookmark` (name) or `index` (number)
            var sectionType = splits[1];
            // grab the section index
            var section = decodeURIComponent(splits[2]);
            if(!app.isInBuilder){
                linkElement.href = '#';
            }
            $(linkElement).click({
                section: section,
                sectionType: sectionType
            }, linkToSection);
        };

        if(isInIframe){
            //Create a list of the appIds in the parent series
            var seriesEntries = app.data.seriesItem.data.values.story.entries;
            var seriesAppIds = [];
            for(var i=0; i<seriesEntries.length; i++){
                if(seriesEntries[i].media && seriesEntries[i].media.webpage){
                    var entryUrl = new URL(seriesEntries[i].media.webpage.url);
                    var entryAppId = entryUrl.searchParams.get("appid");                
                    seriesAppIds.push(entryAppId)
                } else {
                    seriesAppIds.push("NO APP ID");
                }
            }

            var linkToStory = function(eventData) {
                event.preventDefault();
                var action =  {
                  method: 'NAVIGATE',
                  entry: eventData.data.entry,
                  bookmark: eventData.data.bookmark
                };                
                parent.postMessage(action, "*");
            };

            //Find all links to other webpages includes in the same series (parent window) and replace those with javascript code 
            //for sending a message to navigate to the correct tab and section
            seriesLinkElements = document.querySelectorAll('a[href*="?appid="]')
            for(var i=0; i<seriesLinkElements.length; i++){
                var linkElement = seriesLinkElements[i];                
                var linkUrl = new URL(linkElement.href);
                var linkAppId = linkUrl.searchParams.get("appid");
                var bookmark = linkUrl.searchParams.get("bookmark");
                var entryIndex = seriesAppIds.indexOf(linkAppId);
                if(entryIndex >= 0){                    
                    var action =  {
                      method: 'NAVIGATE',
                      entry: entryIndex,
                      bookmark: bookmark
                    };

                    // reset the `href`
                    linkElement.href = '#';

                    $(linkElement).click({
                        entry: entryIndex,
                        bookmark: bookmark
                    }, linkToStory);
                }
            };
        }
    });

    /*
    * Custom Javascript to be executed when a section becomes active
    */
    topic.subscribe('story-navigated-section', function(cfg) {
        // as we scroll through the story, we can set the URL address bar with a shareable link directly to the section we want
        // var url = new URL(window.location.href);
        var currentUrl = window.location.href;
        var incomingIndex = getQueryStringValue('sectionIndex');
        var newUrl = currentUrl;

        if (cfg && cfg.data && cfg.data.type === 'cover') {
            newUrl = removeQueryParam(newUrl, 'bookmark');
            newUrl = removeQueryParam(newUrl, 'sectionIndex');
            window.history.pushState({}, '', newUrl);
            return;
        }

        // if we are at the Cover page, remove all the parameters and update the URL address bar
        // but if we have an incoming bookmark or sectionIndex param, we want to make sure that gets passed in
        var shouldRemoveUrlParams = false;
        if (cfg.index === 0 && incomingIndex === '') {
            shouldRemoveUrlParams = true;
        }

        if (shouldRemoveUrlParams) {
            newUrl = removeQueryParam(newUrl, 'sectionIndex');
            window.history.pushState({}, '', newUrl);
            return;
        }

        // get the bookmark object for the current section and update the URL address bar with it
        var bookmarkObject = app.Controller.getBookmarks().filter(
            function(bm) {
                return (bm.index === cfg.index);
            })[0];

        if (bookmarkObject) {
            var bookmarkName = bookmarkObject.title;

            newUrl = updateQueryStringParameter(currentUrl, 'bookmark', bookmarkName);
            newUrl = removeQueryParam(newUrl, 'sectionIndex');

            window.history.pushState({}, '', newUrl);
            return;
        }
    });

});
