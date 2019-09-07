console.log('https://vk.com/tomkovich_ya');

'use strict';

const slider = document.querySelector('.section-main_slider > .section-main_slider__wrapper');
const sliders = document.querySelectorAll('.section-main_slider .section-main_slider__slide');
var arrowPrev = document.querySelector('.section-main_slider .nav-prev');
var arrowNext = document.querySelector('.section-main_slider .nav-next');
const sliderLenght = sliders.length;

function slideMe(sliderViewItems, isActiveItem) {
	isActiveItem.classList.remove('active');
	sliderViewItems.classList.add('active');

	slider.setAttribute('style', 'transform:translateX(-' + sliderViewItems.offsetLeft + 'px)');
}

function beforeSliding(i) {
	var isActiveItem = document.querySelector('.section-main_slider__slide.active');
	var currentItem = Array.from(sliders).indexOf(isActiveItem) + i;
	var nextItem = currentItem + i;
	var sliderViewItems = document.querySelector('.section-main_slider__slide:nth-child(' + nextItem + ')');

	if(nextItem > sliderLenght) {
		sliderViewItems = document.querySelector('.section-main_slider__slide:nth-child(1)');
	}

	if(nextItem === 0) {
		sliderViewItems = document.querySelector('.section-main_slider__slide:nth-child(' + sliderLenght + ')');
	}

	slideMe(sliderViewItems, isActiveItem);
}

arrowNext.addEventListener('click', function() { 
	beforeSliding(1);
});

arrowPrev.addEventListener('click', function() { 
	beforeSliding(0); 
});

var points = document.querySelectorAll('.section-review_image .point');
var title = document.querySelector('.section-review_content .title').textContent;

points.forEach(function(point) {

	point.addEventListener('click', function(e) {	
		var btnPoint = e.target;
		var text = btnPoint.firstElementChild;

		if(text.style.display == 'block') {
			text.style.display = 'none';
		} else {
			text.style.display = 'block';
		}

		btnPoint.classList.forEach(function(class) {
			if(class == 'point_one') {
				console.log(btnPoint.firstElementChild);
				text.textContent = 'Сделано из настоящей кожи!';		
			} else if(class == 'point_two') {
				text.textContent = 'Полный комфорт прослушивания. Наушники с саморегулирующейся головной стяжкой и мягкими чашками, которые плотно ложатся на всю поверхность уха.';
			} else {
				text.textContent = title;
			}
		});

	});

});