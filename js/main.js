// Fixed navbar functie
$(function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });
});

// Navigation scroll functie
$(document).ready(function() {

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 75
      }, 800, function() {

        window.location.hash = hash;
      });
    }
  });
});