$(function () {

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows___left" src=" img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows___right"src=" img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-dotshead',
	});

	$('.slider-dotshead').slick({

		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',

	});


	$('.serf__slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows___left" src=" img/arrows-left.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrows slider-arrows___right"src=" img/arrows-right.svg" alt=""></img>',
		asNavFor: '.slider-map',
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.serf__slider',
		focusOnSelect: true

	})

});