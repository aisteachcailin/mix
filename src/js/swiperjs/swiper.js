const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 2,
	spaceBetween: 24,
	pagination: {
		el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
	},
  slideToClickedSlide: true,
  loop: true,
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 8
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 14
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 18
    }
  }
})
