$(function() {
	$('#hero-image').css('top',1000);
	$('#hero-block').velocity({top: 0}, 600);
	$('#content-block').velocity({top: 400}, {easing: 'easeOut', duration: 600,delay:100});
	$('#hero-image').velocity({top: 0, opacity: 1}, {duration: 1000,delay:200, easing: [.3,1.03,.74,1.13],complete: function(){$('#hero-image').css('position','fixed');$('body').css('background-color','#F70');}});
	$('#shadow').velocity({top: 0}, {duration: 600, delay:200});

	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
	$('body').on("mousewheel", function () {
		// remove default behavior
		event.preventDefault(); 

		//scroll without smoothing
		var wheelDelta = event.wheelDelta;
		var currentScrollPosition = window.pageYOffset;
		window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}
});