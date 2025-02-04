const allAccordionButton = document.querySelectorAll('.info__item')

document.addEventListener('click', e => {
	if (e.target.closest('.info__item')) {
		const accordionElement = e.target.closest('.info__item')
		const accordionActive = document.querySelector('.info__item.active')

		if (accordionElement.classList.contains('active')) {
			accordionElement.classList.remove('active')
			return
		}

		if (accordionActive) {
			accordionActive.classList.remove('active')
		}
		accordionElement.classList.add('active')
	}
})

const swiper = new Swiper('.promo__swiper', {
	loop: true,
	slidesPerView: 2.2,
	spaceBetween: 20,
	centeredSlides: true,
	slideToClickedSlide: true,
	loopedSlides: 5,

	breakpoints: {
		438: {
			slidesPerView: 3,
		},

		400: {
			slidesPerView: 2.5,
		}
	}
})