$(document).ready(function() {
  // Move logo out of navigation area on hover
  var logo = $('#logo'),
    targets = $('#mainNavWrapper > div > ul > li:not(#logo)');
  targets.unbind('mouseover');
  targets.on('mouseover', function() {
    var width = $(document).width(),
      top = '-120px';
    logo.stop();
    logo.animate({
      top: top
    }, 300);
  });
  targets.unbind('mouseout');
  targets.on('mouseout', function() {
    var width = $(document).width(),
      top = '-80px';
    logo.stop();
    logo.animate({
      top: top
    }, 300);
  });
});
