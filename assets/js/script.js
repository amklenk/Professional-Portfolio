$(".img").wrap('<div class="alt-wrap"/>');

$(".img").each(function() {
    $(this).before('<p class="alt">' + $(this).attr('alt') + '</p>');
  })