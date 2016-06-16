define([
  'lib-build/css!./Discover'
], function(
  //viewCss
) {
  return function Discover(discover) {
    this.render = function(context) {
      var output = '';

      if (! discover || ! context) {
        console.log('Could not render Discover block in section');
        return output;
      }

      output += '<div class="discover">';
      output += ' <strong>' + discover.title + '</strong>';
      output += ' <table><tr>';
      $.each(discover.items, function(i, item) {
        output += '<td><div class="discover-item"><a href="' + item.url + '" target="_blank"><img src="' + item.thumbnail + '" /><div>' + item.title + '</div></a></div></td>';
      });
      output += ' </tr></table>';
      output += '</div>';

      return output;
    };
  };
});
