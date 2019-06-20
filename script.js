var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomBtn = document.querySelector(".randomBtn");
var directionBtn = document.querySelector(".direction");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "  + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomize() {
	var random1 = "#";
	var random2 = "#"; 
	var letters = "0123456789abcdef";
	for (var i = 0; i < 6; i++){
		random1 += letters[Math.floor(Math.random() * 16)];
		random2 += letters[Math.floor(Math.random() * 16)];
	}

	color1.value = random1;
	color2.value = random2;
	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomize);

