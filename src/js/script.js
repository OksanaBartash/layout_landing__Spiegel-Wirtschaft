/* ---------------  Swiper magazine  --------------- */
let swiper = new Swiper(".magazineSwiper", {
	grabCursor: true,
	speed: 1800,
	autoplay: {
		delay: 0,
	},
	spaceBetween: 40,
	loop: true,
	breakpoints: {
		390: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 5,
		},
		1920: {
			slidesPerView: 6,
		}
	}
});
/* --------------------------------------------------- */