console.log('https://vk.com/tomkovich_ya');

const slider = document.querySelector('.section-main_slider > .section-main_slider__wrapper');
if(slider) {
	const sliders = document.querySelectorAll('.section-main_slider .section-main_slider__slide');
	let arrowPrev = document.querySelector('.section-main_slider .nav-prev');
	let arrowNext = document.querySelector('.section-main_slider .nav-next');
	const sliderLenght = sliders.length;

	let slideMe = (sliderViewItems, isActiveItem) => {
		isActiveItem.classList.remove('active');
		sliderViewItems.classList.add('active');
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

			if(nextItem === 0) {
				sliderViewItems = document.querySelector(`.section-main_slider__slide:nth-child(${sliderLenght})`);
			}

			arrowNext.addEventListener('click', () => { 
				beforeSliding(1);
			});

			arrowPrev.addEventListener('click', () => { 
				beforeSliding(0); 
			});
		}
	}
}

let points = document.querySelectorAll('.section-review_image .point');


points.forEach( point => {
	point.addEventListener('click', event => {
		let point_text = event.target;
		let text = point_text.firstElementChild;

		text.classList.toggle('active');
	});
});


if(document.querySelector('.tom-slider')) {
	tomSlider({
		slidesShow: 4,
		margin: '10px',
		innerArrowPrev: '<span class="tomkovich-icon  tom-left-arrow"></span>',
		innerArrowNext: '<span class="tomkovich-icon  tom-right-arrow"></span>',
		response: {
			992: {
				slidesShow: 3
			},
			760: {
				slidesShow: 2
			},
			576: {
				slidesShow: 1
			}
		}
	});
}

let popupLogin = document.querySelector('.popup-login');
let overlay = document.querySelector('.overlay');

document.querySelector('.add-menu_account').addEventListener('click', () => {
	popupLogin.classList.add('show')
	overlay.classList.add('show')
});

overlay.addEventListener('click', () => {
	popupLogin.classList.remove('show')
	overlay.classList.remove('show')
});

popupLogin.querySelector('.close').addEventListener('click', () => {
	popupLogin.classList.remove('show')
	overlay.classList.remove('show')
});

let options = document.querySelectorAll('.product-details_options input[type="checkbox"]');

options.forEach( option => {
	option.addEventListener('click', e => {
		if(option.checked) {
			option.parentElement.classList.toggle('check')
		}
	})
});

let quantityInput = document.querySelector('.product-details_quantity input[name="quantity"]');



if(quantityInput) {
	let incrementBtn = document.querySelector('.quantity_increment');
	let decrementBtn = document.querySelector('.quantity_decrement');
	let inputVal = quantityInput.value;

	let increment = () => {
		if(quantityInput.value < 99) {
			quantityInput.value++
		} else {
			quantityInput.value = 99;
		}
	}

	let decrement = () => {
		if(quantityInput.value > 1) {
			quantityInput.value--
		} else {
			quantityInput.value = 1;
		}
	}

	incrementBtn.addEventListener('click', increment)
	decrementBtn.addEventListener('click', decrement)
}

let gallery = document.querySelector('.product-gallery');

if(gallery) {
	let mainContainer = gallery.querySelector('.img-wrap');
	let thumbnails = document.querySelectorAll('.product-gallery_images span');

	thumbnails.forEach( (thumbnail, index) => { 
		index === 0 && thumbnail.classList.add('active')
		thumbnail.addEventListener('click', () => {

			let cloneImg = thumbnail.querySelector('img').cloneNode();

			mainContainer.replaceChild(cloneImg, mainContainer.querySelector('img'));
			thumbnails.forEach(item => item.classList.remove('active'))
			thumbnail.classList.add('active')

		});
	})
}

let hamburgerBtn = document.querySelector('.hamburger-wrap');

if(hamburgerBtn) {
	let mobileMenu = document.querySelector('.mobile-menu');
	hamburgerBtn.addEventListener('click', () => {
		hamburgerBtn.classList.toggle('active');
		mobileMenu.classList.toggle('open')
	});
}

let tabs = document.querySelector('.product-tab');

let removerClass = (arr, nameClass) => {
	arr.forEach(item => item.classList.remove(nameClass))
}

if(tabs) {
	let filteredTabs = tabs.querySelectorAll('li[role="tab"]');
	let panels = document.querySelectorAll('.tab-panel');

	filteredTabs[0].classList.add('active');
	panels[0].classList.add('open');

	filteredTabs.forEach((item, i) => {

		item.addEventListener('click', e => {
			e.preventDefault();

			removerClass(filteredTabs, 'active')

			let parent = e.target.parentElement;
			let attr = parent.getAttribute('aria-controls');

			parent.classList.add('active');

			let panel = document.querySelector('#' + attr);

			if(parent.classList.contains('active')) {
				removerClass(panels, 'open')
				panel.classList.toggle('open')
			}
		});
	});
}
