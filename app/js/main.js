console.log('https://vk.com/tomkovich_ya');

const slider = document.querySelector('.section-main_slider > .section-main_slider__wrapper');
const sliders = document.querySelectorAll('.section-main_slider .section-main_slider__slide');
let arrowPrev = document.querySelector('.section-main_slider .nav-prev');
let arrowNext = document.querySelector('.section-main_slider .nav-next');
const sliderLenght = sliders.length;

let slideMe = (sliderViewItems, isActiveItem) => {
	isActiveItem.classList.remove('active');
	sliderViewItems.classList.add('active');

	slider.setAttribute('style', `transform:translateX(-${sliderViewItems.offsetLeft}px)`);
}

let beforeSliding = (i) => {
	let isActiveItem = document.querySelector('.section-main_slider__slide.active');
	let currentItem = Array.from(sliders).indexOf(isActiveItem) + i;
	let nextItem = currentItem + i;
	let sliderViewItems = document.querySelector(`.section-main_slider__slide:nth-child(${nextItem})`);

	if(nextItem > sliderLenght) {
		sliderViewItems = document.querySelector('.section-main_slider__slide:nth-child(1)');
	}

	if(nextItem === 0) {
		sliderViewItems = document.querySelector(`.section-main_slider__slide:nth-child(${sliderLenght})`);
	}

	slideMe(sliderViewItems, isActiveItem);
}

arrowNext.addEventListener('click', () => { 
	beforeSliding(1);
});

arrowPrev.addEventListener('click', () => { 
	beforeSliding(0); 
});

let points = document.querySelectorAll('.section-review_image .point');
let title = document.querySelector('.section-review_content .title').textContent;

points.forEach( point => {
	point.addEventListener('click', event => {
		let point_text = event.target;
		let text = point_text.firstElementChild;

		text.classList.forEach( c => {
			if(c == 'active') {
				text.classList.remove('active');
			} else {
				text.classList.add('active');
			}
		});
	});
});

tomSlider({
	slidesShow: 4,
	margin: '10px',
	innerArrowPrev: '<span class="tomkovich-icon  tom-left-arrow"></span>',
	innerArrowNext: '<span class="tomkovich-icon  tom-right-arrow"></span>'
});



