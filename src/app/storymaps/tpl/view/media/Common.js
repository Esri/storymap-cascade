define([
  //
], function(
  //
) {
  return {
    load: function(media) {
      media.status = {
        loaded: false
      };
      return media;
    },
    toJSON: function(media) {
      delete media.status;
      return media;
    }
  };
});
