$(function() {
    var height = $('.hover-block').first().width();
    $('.hover-block').css('height', height);
    $('.project').click(function() {
        href = $(this).attr("goto");
        console.log(href);
        $('div:not(#transition-block)').velocity({opacity:0},800);
        $('#transition-block').velocity({top:0},{
        	queue: false,
        	duration: 800,
        	easing: 'ease-in',
        	complete: function(){window.location=href;}});
    });
    $( window ).resize(function() {
        var height = $('.hover-block').first().width();
        $('.hover-block').css('height', height);
    });
});