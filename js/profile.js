$(function() {
  var curSec = ".about-me";
  var newSec = ".about-me";
  var about_me = $('#about-me').offset().top;
  var skills = $('#skills').offset().top;
  var education = $('#education').offset().top;
  var intern = $('#intern').offset().top;
  var contact = $('#contact').offset().top;
  var avoidChange = false;

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      newSec = "."+$(this).attr("class");
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').velocity("scroll", {
          offset: target.offset().top,
          duration: 1000,
          begin: function(elements) {
            toggle();
            avoidChange = true;
          },
          complete: function(elements) { avoidChange = false;}
        });
        return false;
      }
    }
  });

  $(window).scroll(function(e) {
    if(Math.abs(about_me - $(window).scrollTop())<400) newSec = ".about-me";
    else if(Math.abs(skills - $(window).scrollTop())<400) newSec = ".skills";
    else if(Math.abs(education - $(window).scrollTop())<400) newSec = ".education";
    else if(Math.abs(intern - $(window).scrollTop())<400) newSec = ".intern";
    else if(Math.abs(contact - $(window).scrollTop())<400) newSec = ".contact";
    
    if ((!avoidChange) && (newSec != curSec)) {
      toggle();
    }
  });

  function toggle(){
    $(curSec).toggleClass("hidden");
    $(newSec).toggleClass("hidden");
    curSec = newSec;
  }

  $( window ).resize(function() {
    about_me = $('#about-me').offset().top;
    skills = $('#skills').offset().top;
    education = $('#education').offset().top;
    intern = $('#intern').offset().top;
    contact = $('#contact').offset().top;
  });
});