$(function() {
  return $.each($('li'), function() {
    return $(this).css('background-color', '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16));
  });
});
