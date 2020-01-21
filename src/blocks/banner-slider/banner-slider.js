document.addEventListener('DOMContentLoaded', function () {
  var bannerSwiper = new Swiper('.banner-slider', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    pagination: {
      el: '.banner-slider__pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1280: {
        slidesPerView: 3
      },
    }
  });
});

