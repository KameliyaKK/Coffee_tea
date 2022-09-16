/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../styles/swiper.scss";

// Полный набор стилей из node_modules
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper('.tips__slider ', {
	modules: [Navigation, Pagination, Parallax, Autoplay],
	observer: true,
	observeParents: true,
	zoom: true,
	navigation: {
		nextEl: 'slider-arrows .swiper-button-next',
		prevEl: 'slider-arrows .swiper-button-prev',
	},
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
			clickable: true,
			dynamicBullets: true,
		//Кастомные буллеты
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },

		//Фракция
		// type: 'fraction', //нумерация в виде 1/5
		// //Кастомный вывод фракции
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },

		/*	//Прогрессбар линия приближения к последнему слайду
			type: 'progressbar'*/
	},

	//Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true, //возможность перетаскивать скролл
	},
	//Включение или  отключение 
	//simulateTouch: false, //перетаскивание на ПК если надо отключить, по умолчанию она есть
	//чувствительность свайпа
	touchRatio: 1,
	//угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//курсор перетаскивания
	grabCursor: true,

	// переключится при клике на слайд
	slideToClickedSlide: true,

	//навигация по хешу
	hashNavigation: {
		replaceState: true,
		watchState: true, //jnckt;bdfybt состояние

	},
	//управление клавиатурой
	keyboard: {
		enabled: true, // вкл выкл управление
		onlyInViewport: true,
		pageUpDown: true,

	},
	//управление мышью
	mousewheel: {
		invert: true,
		sensitivity: 1,
		//eventsTarget: ".image-slider" // если все с этим класом то лучше не использовать
	},
	// Автовысота слайдов, картинок
	// autoHeight: false,
	//количество слайдов отображаются
	slidesPerView: 2, // можно добавить вместо цифры 'auto' и автошириину в css  
	// отключение функционала если слайдов меньше чем нужно
	wathOverflow: true,
	//отступ между слайдами
	spaceBetween: 30,

	// количество пролистывания слайдов
	slidesPerGroup: 3,

	//активный слайд по центру
	centeredSlides: true,

	//стартовый слайд
	initialSlide: 0,

	//мультиярядность
	slidesPerColumn: 1,
	//бесконечный слайдер
	loop: true,
	//кол-во дублирующих слайдов 
	loopedSlides: 0,

	//свободный режим
	freeMode: true,

	//автопрокрутка 
	/*autoplay:{
		//пауза между прокруткой
		delay: 5000,
		//Закончить на последнем слайде
		stopOnLastSlide: false,
		//Отключить после ручного переключения
		disableOnInteraction: false
	},*/
	//скорость
	// speed: 800,

	//вертикальный слайдер 'vertical'
	// direction: 'horizontal',
	/*	//эффект перключения слайдов листание
		effect: 'slide',
		effect: 'fade', //смена прозрачность
		// дополнение к fade 
		fadeEffect:{
			crossFade:true // паралел смена прозрачности для одного слайда
		},*/

	// эффект переключение слайда переворотом
	/*effect:'flip',
	//дополнение к flip
	flipEffect:{
		slideShadows:true, // тень
		limitRotation: true, // показ только активного слайда
	},*/

	// эффект куб
	/*effect: 'cube',
	// дополнение к cube 
	cubeEffect: {
		slishadow: true,
		shadowOffset: 20,
		shadowScale: 0.94,
		slideShadows: true,
	},*/

	//эфект потока
	/*	effect: 'coverflow',
		// дополнение к overflow'
		coverflowEffect: {
			rotate: 20,//угол
			stretch: 50, //наложение
			slideShadows: true, //тень
		},*/

	//Брейк поинты- адаптив
	/*	slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}*/
});


const __swiper = new Swiper('.image-slider', {
	modules: [Navigation, Pagination, Parallax, Autoplay],
	// observer: true,
	// observeParents: true,
	zoom: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	//Навигация
	//Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
			clickable: true,
			dynamicBullets: true,
		//Кастомные буллеты
		// renderBullet: function (index, className) {
		// 	return '<span class="' + className + '">' + (index + 1) + "</span>";
		// },

		//Фракция
		// type: 'fraction', //нумерация в виде 1/5
		// //Кастомный вывод фракции
		// renderFraction: function (currentClass, totalClass) {
		// 	return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		// },

		/*	//Прогрессбар линия приближения к последнему слайду
			type: 'progressbar'*/
	},

	//Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true, //возможность перетаскивать скролл
	},
	//Включение или  отключение 
	//simulateTouch: false, //перетаскивание на ПК если надо отключить, по умолчанию она есть
	//чувствительность свайпа
	touchRatio: 1,
	//угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	//курсор перетаскивания
	grabCursor: true,

	// переключится при клике на слайд
	slideToClickedSlide: true,

	//навигация по хешу
	hashNavigation: {
		replaceState: true,
		watchState: true, // отслеживание состояние

	},
	//управление клавиатурой
	keyboard: {
		enabled: true, // вкл выкл управление
		onlyInViewport: true,
		pageUpDown: true,

	},
	//управление мышью
	mousewheel: {
		invert: true,
		sensitivity: 1,
		//eventsTarget: ".image-slider" // если все с этим класом то лучше не использовать
	},
	// Автовысота слайдов, картинок
	autoHeight: false,
	//количество слайдов отображаются
	slidesPerView: 2, // можно добавить вместо цифры 'auto' и автошириину в css  
	// отключение функционала если слайдов меньше чем нужно
	wathOverflow: true,
	//отступ между слайдами
	spaceBetween: 30,

	// количество пролистывания слайдов
	slidesPerGroup: 3,

	//активный слайд по центру
	centeredSlides: true,

	//стартовый слайд
	initialSlide: 0,

	//мультиярядность
	slidesPerColumn: 1,
	//бесконечный слайдер
	loop: true,
	//кол-во дублирующих слайдов 
	loopedSlides: 0,

	//свободный режим
	freeMode: true,

	//автопрокрутка 
	/*autoplay:{
		//пауза между прокруткой
		delay: 5000,
		//Закончить на последнем слайде
		stopOnLastSlide: false,
		//Отключить после ручного переключения
		disableOnInteraction: false
	},*/
	//скорость
	// speed: 800,

	//вертикальный слайдер 'vertical'
	// direction: 'horizontal',
	/*	//эффект перключения слайдов листание
		effect: 'slide',
		effect: 'fade', //смена прозрачность
		// дополнение к fade 
		fadeEffect:{
			crossFade:true // паралел смена прозрачности для одного слайда
		},*/

	// эффект переключение слайда переворотом
	/*effect:'flip',
	//дополнение к flip
	flipEffect:{
		slideShadows:true, // тень
		limitRotation: true, // показ только активного слайда
	},*/

	// эффект куб
	/*effect: 'cube',
	// дополнение к cube 
	cubeEffect: {
		slishadow: true,
		shadowOffset: 20,
		shadowScale: 0.94,
		slideShadows: true,
	},*/

	//эфект потока
	/*	effect: 'coverflow',
		// дополнение к overflow'
		coverflowEffect: {
			rotate: 20,//угол
			stretch: 50, //наложение
			slideShadows: true, //тень
		},*/

	//Брейк поинты- адаптив
	/*	slidesPerView: 1,
		spaceBetween: 10,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}*/
});



// let sliders = document.querySelectorAll('.swiper');
// if (sliders) {
// 	for (let index = 0; index < sliders.length; index++) {
// 		let slider = sliders[index];
// 		if (!slider.classList.contains('swiper-bild')) {
// 			let slider_items = slider.children;
// 			if (slider_items) {
// 				for (let index = 0; index < slider_items.length; index++) {
// 					let el = slider_items[index];
// 					el.classList.add('swiper-slide');
// 				}
// 			}
// 			let slider_content = slider.innerHTML;
// 			let slider_wrapper = document.createElement('div');
// 			slider_wrapper.classList.add('swiper-wrapper');
// 			slider_wrapper.innerHTML = slider_content;
// 			slider.innerHTML = '';
// 			slider.appendChild(slider_wrapper);
// 			slider.classList.add('swiper-bild');

// 			if (slider.classList.contains('swiperscroll')) {
// 				let sliderScroll = document.createElement('div');
// 				sliderScroll.classList.add('swiper-scrollbar');
// 				slider.appendChild(sliderScroll);
// 			}
// 		}
// 		if (slider.classList.contains('gallery')) {
// 			slider.data('lightGallery').destroy(true);
// 		}
// 	}
// 	sliders_bild_callback();
// }
// function sliders_bild_callback(params) { }



// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
// function bildSliders() {
// 	//BildSlider
// 	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
// 	if (sliders) {
// 		sliders.forEach(slider => {
// 			slider.parentElement.classList.add('swiper');
// 			slider.classList.add('swiper-wrapper');
// 			for (const slide of slider.children) {
// 				slide.classList.add('swiper-slide');
// 			}
// 		});
// 	}
// }
// // Инициализация слайдеров
// function initSliders() {
// 	// Добавление классов слайдера
// 	// при необходимости отключить
// 	bildSliders();

// 	// Перечень слайдеров

// 	if (document.querySelector('.slider-tips__body')) {
// 		const swiper = new Swiper('.slider-tips__body', {
// 			modules: [Navigation, Pagination, Parallax, Autoplay],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 3,
// 			spaceBetween: 32,
// 			speed: 800,
// 			loop: true,
// 			watchOverflow: true,
// 			// Dotts
// 			pagination: {
// 				el: '.swiper-pagination .slider-tips__dotts',
// 				clickable: true,
// 				// type: 'bullets',
// 			},
// 			// Arrows
// 			navigation: {
// 				nextEl: '.swiper-button-next .slider-tips .slider-arrow_next ',
// 				prevEl: '.swiper-button-prev .slider-tips .slider-arrow_prev ',
// 			},
// 			breakpoints: {
// 				// when window width is >= 320px
// 				320: {
// 					slidesPerView: 1.1,
// 					spaceBetween: 15
// 				},
// 				// when window width is >= 768px
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20
// 				},
// 				// when window width is >= 992px
// 				992: {
// 					slidesPerView: 3,
// 					spaceBetween: 32
// 				}
// 			}
// 		})
// 	}

// 	if (document.querySelector('.slider-tea__body')) {
// 		new Swiper('.slider-tea__body', {
// 			modules: [Navigation, Pagination, Parallax, Autoplay],
// 			observer: true,
// 			observeParents: true,
// 			slidesPerView: 3,
// 			spaceBetween: 32,
// 			speed: 800,
// 			loop: true,
// 			watchOverflow: true,
// 			// Dotts
// 			pagination: {
// 				el: '.slider-tea__arrows .swiper-pagination ',
// 				clickable: true,
// 				// type: 'bullets',
// 			},
// 			// Arrows
// 			navigation: {
// 				nextEl: '.slider-tea__arrows.swiper-button-next',
// 				prevEl: '.slider-tea__arrows .swiper-button-prev',
// 			},
// 			breakpoints: {
// 				// when window width is >= 320px
// 				320: {
// 					slidesPerView: 1.1,
// 					spaceBetween: 15
// 				},
// 				// when window width is >= 768px
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20
// 				},
// 				// when window width is >= 992px
// 				992: {
// 					slidesPerView: 3,
// 					spaceBetween: 32
// 				}
// 			}
// 		})
// 	}

// 	new Swiper('.swiper', {
// 		// Optional parameters
// 		modules: [Navigation, Pagination,],
// 		loop: true,

// 		// If we need pagination
// 		pagination: {
// 			el: '.swiper-pagination',
// 		},

// 		// Navigation arrows
// 		navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
// 		},

// 	});
// }
//BildSlider

// проверяем есть ли этот блок на странице if(document.querySelector('.slider-tips__body')){}


// let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
// if (sliderScrollItems.length > 0) {
// 	for (let index = 0; index < sliderScrollItems.length; index++) {
// 		const sliderScrollItem = sliderScrollItems[index];
// 		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 		const sliderScroll = new Swiper(sliderScrollItem, {
// 			observer: true,
// 			observeParents: true,
// 			direction: 'vertical',
// 			slidesPerView: 'auto',
// 			freeMode: true,
// 			scrollbar: {
// 				el: sliderScrollBar,
// 				draggable: true,
// 				snapOnRelease: false
// 			},
// 			mousewheel: {
// 				releaseOnEdges: true,
// 			},
// 		});
// 		sliderScroll.scrollbar.updateSize();
// 	}
// }


// function sliders_bild_callback(params) { }

// if (document.querySelector('.slider-main__body')) {
// 	new Swiper('.slider-main__body', {
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		spaceBetween: 32,
// 		watchOverflow: true,
// 		speed: 800,
// 		loop: true,
// 		loopAdditionalSlides: 5,
// 		preloadImages: false,
// 		parallax: true,
// 		// Dotts
// 		pagination: {
// 			el: '.controls-slider-main__dotts',
// 			clickable: true,
// 		},
// 		// Arrows
// 		navigation: {
// 			nextEl: '.slider-main .slider-arrow_next',
// 			prevEl: '.slider-main .slider-arrow_prev',
// 		}
// 	});
// }

// if (document.querySelector('.slider-rooms__body')) {
// 	new Swiper('.slider-rooms__body', {
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 'auto',
// 		spaceBetween: 24,
// 		speed: 800,
// 		loop: true,
// 		watchOverflow: true,
// 		loopAdditionalSlides: 5,
// 		preloadImages: false,
// 		parallax: true,
// 		// Dotts
// 		pagination: {
// 			el: '.slider-rooms__dotts',
// 			clickable: true,
// 		},
// 		// Arrows
// 		navigation: {
// 			nextEl: '.slider-rooms .slider-arrow_next',
// 			prevEl: '.slider-rooms .slider-arrow_prev',
// 		}
// 	});


