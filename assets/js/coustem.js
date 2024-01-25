$(".menubar").click(function () {
   $(".navlinks").toggleClass("main");

 });

 $('.owl_base_theme_1').owlCarousel({
  loop: true,
  nav: false,
  dots:false,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout:2000,
  autoplaySpeed: 1000,
  autoplayHoverPause: true,
  items: 1,
});