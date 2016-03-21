$(function() {
  $('.project').click(function() {
    href = $(this).attr("goto");
    console.log(href);
    $('#transition-block').velocity({top:0},{complete: function(){window.location=href;}});
  });
});