$(function() {
	scrollTo(0,0);
	set3Resize();
	var fixnavPos = $('#hero-block').height() - 60;
	var fixnav = false;
	if ($(window).scrollTop()>fixnavPos) {
		fixnav = true;
		$('#fix-navbar').velocity({opacity: 0.9}, 300);
	}
	if ($(window).scrollTop() == 0){
		$('#hero-image').css('top',1000);
		$('#hero-block').velocity({top: 0}, 600);
		$('#content-block').velocity({top: 400}, {easing: 'easeOut', duration: 600,delay:100});
		$('#hero-image').velocity({top: 0, opacity: 1}, {duration: 1000,delay:200, easing: [.3,1.03,.74,1.13],complete: function(){$('#hero-image').css('position','fixed');$('body').css('background-color','#F70');}});
		$('#shadow').velocity({top: 0}, {duration: 600, delay:200});
	} else {
		$('#hero-image').css('top',1000);
		$('#hero-block').css('top',0);
		$('#content-block').velocity({top: 400}, {easing: 'easeOut', duration: 600,delay:100});
		$('#hero-image').velocity({top: 0, opacity: 1}, {duration: 1000,delay:200, easing: [.3,1.03,.74,1.13],complete: function(){$('#hero-image').css('position','fixed');$('body').css('background-color','#F70');}});
		$('#shadow').velocity({top: 0}, {duration: 600, delay:200});
	}

	$('#button-bar a').click(function(event) {
		event.preventDefault();
        href = $(this).attr("href");
        console.log(href);
        $('#transition-block').velocity({top:0},{
        	queue: false,
        	duration: 400,
        	easing: 'ease-in',
        	complete: function(){window.location=href;}});
    });

	$(window).resize(set3Resize);
	function set3Resize(){
		console.log('here');
		$('.image-set').each(function() {
			if ($(this).height() != $(this).children(":first").height()*2)
				$(this).height($(this).children(":first").height()*2);
		});
	}
	$(window).scroll(function() {
		set3Resize();
		var scrollTop = $(window).scrollTop();
		$('#hero-image').css('top', -scrollTop/3);
		if (scrollTop>fixnavPos && fixnav==false){
			fixnav = true;
			$('#fix-navbar').velocity({opacity: 0.9}, 300);
		} else if (scrollTop<=fixnavPos && fixnav==true){
			fixnav = false;
			$('#fix-navbar').velocity({opacity: 0}, 300);
		}
	});
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
	window.onbeforeunload = function(){
		window.scrollTo(0,0);
	}

});