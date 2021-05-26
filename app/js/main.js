//LOADER
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
	mask.classList.add('hide');
	setTimeout(() => {
		mask.remove();
	}, 600)
});

$(function () {
	// //Slick-slider
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			autoplay: true,
			adaptiveHeight: true,
			infinite: true,
			dots: true,
			arrows: true,
			accessibility: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplaySpeed: 3000,
			speed: 1000,
			// adaptiveHeight: true,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			// nextArrow:'<button type="button" class="slick-next"></button>',
			// prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 768,
				settings: {}
			}]
		});
	}

	$('#fullpage').fullpage({
		//options here
		// autoScrolling:true,
		scrollBar: false,
		scrollingSpeed: 1000,
		navigation: true,
		navigationPosition: 'left',
		scrollOverflow: true, //Включает скролл если не влезает страница
		anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8', 'section-9', 'section-10'],
		lockAnchors: true,		
		// autoScrolling:false, //Отключаем листание FullPage в мобильной версии
		// responsiveWidth: 767, //с размера эрана ниже

		afterLoad: function(origin, destination, direction){
			var loadedSection = this;
			if ($('.section-6, .section-7, .section-8, .section-9, .section-10').hasClass('active')) {
				$('#fp-nav').addClass('hide')
			} else {
				$('#fp-nav').removeClass('hide')
			}
		}
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	$(document).on('click', '.menu__link_1', function (e) {
		e.preventDefault();
		fullpage_api.moveTo('section-6', 1);
	});

	$(document).on('click', '.menu__link_2', function (e) {
		e.preventDefault();
		fullpage_api.moveTo('section-8', 1);
	});

	$(document).on('click', '.menu__link_3', function (e) {
		e.preventDefault();
		fullpage_api.moveTo('section-7', 1);
	});

	$(document).on('click', '.menu__link_4', function (e) {
		e.preventDefault();
		fullpage_api.moveTo('section-9', 1);
	});

	$(document).on('click', '.section__btn', function (e) {
		e.preventDefault();
		fullpage_api.moveTo('section-10', 1);
	});


	$('.icon-menu').on('click', function () {
		$('#fp-nav').toggleClass('hide'),
		$('.header__logo').toggleClass('active'),
		$('.icon-menu').toggleClass('active'),
		$('.menu__body').toggleClass('active'),
		$('body').toggleClass('lock');
	});

	//Закрыть бургер меню по клику на ссылку, перетйти по ссылке
	$('.header__menu .menu__link').click(function (event) {
		$('#fp-nav').toggleClass('hide'),
		$('.header__logo').toggleClass('active'),
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	});

	// baguetteBox
	baguetteBox.run('.gallery__body');

	//datedroper
	$('#date-input').dateDropper({
		theme: 'my-theme',
		lang: 'ru',
		format: 'd-m-Y',
		large: true,
		largeOnly: false
	});
});