const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let index = 0

const leftButton = document.querySelector("#left")
leftButton.addEventListener("click" , function(){
	if (index === 0){
		index = 3
	} else {
		index--
	}
	showImage()
})

const rightButton = document.querySelector("#right")
rightButton.addEventListener("click" , function(){
	if (index === 3){
		index = 0
	} else {
		index++
	}
	showImage()
})
showImage()
createDots()

function showImage (){
	const currentSlide = slides[index]
	const bannerImg = document.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + currentSlide.image
	const bannerText = document.querySelector("#banner p")
	bannerText.innerHTML = currentSlide.tagLine

	updateDots()
}

function createDots(){
	 const dotsContainer = document.querySelector(".dots")
	for(let i = 0; i < slides.length; i++){
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dot.addEventListener("click", () => {
			index = i
			showImage()
		})
		dotsContainer.append(dot)
	}
}

function updateDots() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, idx) => {
		if (idx === index) {
			dot.classList.add("dot_selected"); 
		} else {
			dot.classList.remove("dot_selected"); 
		}
	});
}
