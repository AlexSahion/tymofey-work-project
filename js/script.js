//Burger Menu
// const iconMenu = document.querySelector(".menu__icon")
// const menuBody = document.querySelector(".menu__body")
// if (iconMenu) {
//   iconMenu.addEventListener('click', e => {
//     document.body.classList.toggle("_active")
//     iconMenu.classList.toggle("_active")
//     menuBody.classList.toggle("_active")
//   })
// }
const body = document.body


//ДЕЛЕГИРОВАНИЕ........................................................
body.addEventListener('click', e => {
	if (e.target.closest('.item-interact__day')) {
		const element = e.target.closest('.item-interact__day');
		element.classList.toggle('_active')
	}
	if (!e.target.closest('.item-interact__day')) {

	}
})


//BURGER........................................................
const burger = document.querySelector('.header__icon')
const menu = document.querySelector('.header__menu')
const phone = document.querySelector('.right-main__phone')
console.log(phone);
burger.addEventListener('click', e => {
	burger.classList.toggle('_active')
	body.classList.toggle('lock')
	menu.classList.toggle('_active')
	phone.classList.toggle('_active')
})

//SWIPER........................................................
new Swiper('.main-slider__container', {
	navigation: {
		prevEl: '.main-slider__prev',
		nextEl: '.main-slider__next',
	},
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	speed: 600,
});

new Swiper('.part__container', {
	navigation: {
		prevEl: '.part__prev',
		nextEl: '.part__next',
	},
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	speed: 600,
});


