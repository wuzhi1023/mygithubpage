$(function() {
	$('#hero-image').css('top',1000);
	$('#hero-block').velocity({top: [0,1000]}, 600);
	$('#content-block').velocity({top: [400,1000]}, {duration: 600,delay:100});
	$('#hero-image').velocity({top: 0}, {duration: 1000,delay:600, easing: [.3,1.03,.74,1.13],complete: function(){$('#hero-image').css('position','fixed');$('body').css('background-color','#F70');}});
});