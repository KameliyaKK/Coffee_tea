//js
import "@babel/polyfill";
import './js/sliders';
import './index.html';
import 'normalize.css';
// import './styles/main.scss';
import './styles/swiper.scss';


"use strict"



const myMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			myMobile.Android() ||
			myMobile.BlackBerry() ||
			myMobile.iOS() ||
			myMobile.Opera() ||
			myMobile.Windows());
	}
};

if (myMobile.any()) {
	// это мобильник - делаем что-то проверяем
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');

}

// Бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			// закрытие меню
			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
	// }
	// Инициализация слайдеров
	// function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров

	if (document.querySelector('.slider-tips__body')) {
		const swiper = new Swiper('.slider-tips__body', {
			modules: [Navigation, Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 32,
			speed: 800,
			loop: true,
			watchOverflow: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination .slider-tips__dotts',
				clickable: true,
				// type: 'bullets',
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-button-next .slider-tips .slider-arrow_next ',
				prevEl: '.swiper-button-prev .slider-tips .slider-arrow_prev ',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.1,
					spaceBetween: 15
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 992px
				992: {
					slidesPerView: 3,
					spaceBetween: 32
				}
			}
		})
	}

	if (document.querySelector('.slider-tea__body')) {
		new Swiper('.slider-tea__body', {
			modules: [Navigation, Pagination, Parallax, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 32,
			speed: 800,
			loop: true,
			watchOverflow: true,
			// Dotts
			pagination: {
				el: '.slider-tea__arrows .swiper-pagination ',
				clickable: true,
				// type: 'bullets',
			},
			// Arrows
			navigation: {
				nextEl: '.slider-tea__arrows.swiper-button-next',
				prevEl: '.slider-tea__arrows .swiper-button-prev',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.1,
					spaceBetween: 15
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 992px
				992: {
					slidesPerView: 3,
					spaceBetween: 32
				}
			}
		})
	}

	// new Swiper('.swiper', {
	// 	// Optional parameters
	// 	modules: [Navigation, Pagination,],
	// 	loop: true,

	// 	// If we need pagination
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 	},

	// 	// Navigation arrows
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},

	// });
}


