require(['dojo/topic'], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe('tpl-ready', function() {
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */

    //console.log('Cascade is ready');
  });

  /*
   * Custom Javascript to be executed when a section becomes active
   */
  topic.subscribe('story-navigated-section', function(/*cfg*/) {
     //console.log('The section', cfg.index, 'is now active');
  });

});
