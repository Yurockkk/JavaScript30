
const sliderImages = document.querySelectorAll('.slide-in');


function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
			var later = function() {
			  timeout = null;
			  if (!immediate) func.apply(context, args);
			};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}


function checkSlide(e){
	//how far down we are for top of the page
	console.log(window.scrollY);
	sliderImages.forEach(sliderImage => {
		//how far down we are for bottom of the page
		//halfway through the image
		const slideInAt = window.scrollY + window.innerHeight - sliderImage.height/2;
		console.log(slideInAt);
		//bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;

		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledpast = window.scrollY < imageBottom;

		if(isHalfShown && isNotScrolledpast){
			sliderImage.classList.add('active');
		}else{
			sliderImage.classList.remove('active');
		}

	})
}

window.addEventListener('scroll',debounce(checkSlide));
