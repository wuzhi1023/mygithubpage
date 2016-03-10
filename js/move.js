var vx=0;
var vy=0;
var target_vx=0;
var target_vy=0;

var $move=null;
var $document=null;

var oriLeft;
var oriTop;

function init(){
	$move = $("#animated-bg");
	$document=$(document);
	$document.mousemove(function( event ) {
		target_vx=(2*event.pageX/$document.width())-1;
		target_vy=(2*event.pageY/$document.height())-1;
	})
	oriLeft=$move.position().left;
	oriTop=$move.position().top;
	animate();
}

function animate() {
	if(vx<target_vx) vx+=0.01;
	if(vx>target_vx) vx-=0.01;
	if(vy<target_vy) vy+=0.01;
	if(vy>target_vy) vy-=0.01;

	var newLeft=$move.position().left+10*vx;
	var newTop=$move.position().top+10*vy;

	if ((newLeft-oriLeft)<=-100) newLeft+=100;
	else if ((newLeft-oriLeft)>=100) newLeft-=100;
	if ((newTop-oriTop)<=-100) newTop+=100;
	else if ((newTop-oriTop)>=100) newTop-=100;

	$move.css('left', newLeft);
	$move.css('top', newTop);
	setTimeout(animate,16);
}

window.onload = init;
