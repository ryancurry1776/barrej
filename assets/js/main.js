$(document).ready(function() {
  $('#preloader').delay(1000).fadeOut(1000);
});

$(document).ready(function(){
    $('#fullscreen').css('min-height', $(window).height());
    $('#fullscreen-about').css('min-height', $(window).height()*.9);
    $('#fullscreen-location').css('min-height', $(window).height()*.9);
    $('#fullscreen-community').css('min-height', $(window).height()*.9);
    $('#fullscreen-learn-more').css('min-height', $(window).height()*.9);
    $('#fullscreen-contact').css('min-height', $(window).height()*.9);
    $('#overlay').css('min-height', $(window).height()*.9);
    $('#map').css('min-height', $(window).height()*.75);
    $('#map-parent').css('min-height', $(window).height()*.9);
    $('#footer').css('min-height', $(window).height()*.4);
    $('#about-1').css('min-height', $(window).height()*.8);
    $('#community-1').css('min-height', $(window).height()*.8);
    $('#community-2').css('min-height', $(window).height()*.8);
    $('#community-2').css('min-height', $(window).height()*.8);
    $('#contact').css('min-height', $(window).height()*.9);
});

$(window).resize(function(){
    $('#fullscreen').css('min-height', $(window).height());
    $('#fullscreen-about').css('min-height', $(window).height()*.9);
    $('#fullscreen-location').css('min-height', $(window).height()*.9);
    $('#fullscreen-community').css('min-height', $(window).height()*.9);
    $('#fullscreen-learn-more').css('min-height', $(window).height()*.9);
    $('#fullscreen-contact').css('min-height', $(window).height()*.9);
    $('#overlay').css('min-height', $(window).height()*.9);
    $('#map').css('min-height', $(window).height()*.75);
    $('#map-parent').css('min-height', $(window).height()*.9);
    $('#footer').css('min-height', $(window).height()*.4);
    $('#about-1').css('min-height', $(window).height()*.8);
    $('#community-1').css('min-height', $(window).height()*.8);
    $('#community-2').css('min-height', $(window).height()*.8);
    $('#contact').css('min-height', $(window).height()*.9);
});


// Side Nav scripts
function openNav() {
  document.getElementById("sidenav-id").style.width = "225px";
}

// Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white
function closeNav() {
  document.getElementById("sidenav-id").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}