$(function() {
    var height = $('.hover-block').first().width();
    $('.hover-block').css('height', height);
    $('.project').css('height', height);

    $('.project').each(function() {
        delay = ($(this).position().top*0.8 + $(this).position().left)*1280/$(window).innerWidth();
        $(this).velocity({backgroundColor: ['#82fffc','#f70'], backgroundColorAlpha: [0.2,1]}, {duration: 50, delay: delay});
        $(this).children("img").velocity({opacity: 1}, {delay: delay+80});
        $(this).children(".project-name").velocity({opacity: 1}, {delay: delay+80});
    });

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
        $('.project').css('height', height);
    });
});