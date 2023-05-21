const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slideMinIndexValue = 0
const slideMaxIndexValue = slides.length - 1

let slideCurrentIndex = 0

const changeTextImage = (slideIndex) => {
	// change the image
	const slidesFolderPath = "./assets/images/slideshow"
	const slidePath = `${slidesFolderPath}/${slides[slideIndex].image}`;

	document.getElementById("banner-img").src = slidePath;

	// change the Text
	const bannerTextElement = document.getElementById("banner__text");

	bannerTextElement.innerHTML = slides[slideIndex].tagLine;
}

const activeSlide = (slideIndex) => {
	const dotSelectedClass = "dot_selected"
	const dotsElementsClass = "dot"

	const previousDotSelected = document.getElementsByClassName(dotSelectedClass)[0]
	previousDotSelected.classList.remove(dotSelectedClass)

	const dotsElements = document.getElementsByClassName(dotsElementsClass)
	dotsElements[slideIndex].classList.add(dotSelectedClass);
}

const onArrowClick = (element) => {
	switch (element.id) {
		case "arrow_left":
			if (slideCurrentIndex === slideMinIndexValue) {
				slideCurrentIndex = slideMaxIndexValue
			} else {
				slideCurrentIndex -= 1
			}
			break
		case "arrow_right":
			if (slideCurrentIndex === slideMaxIndexValue) {
				slideCurrentIndex = slideMinIndexValue
			} else {
				slideCurrentIndex += 1
			}
			break
		default:
			console.log("Be careful about the IDs names")
			return;
	}

	changeTextImage(slideCurrentIndex)
	activeSlide(slideCurrentIndex)
}