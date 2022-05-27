const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(button => {
	button.addEventListener("click", function() {
		let buttonPressed = this.innerHTML;
		makeSound(buttonPressed);
		changeButAnimation(buttonPressed);
	})
})

document.addEventListener("keypress", playKey);

function playKey (e) {
	makeSound(e.key);
	changeButAnimation(e.key);
}

function makeSound(key) {
	let mySound;
	switch (key) {
		case "w":
			mySound = new Audio("./sounds/tom-1.mp3");
			break;
		case "a":
			mySound = new Audio("./sounds/tom-2.mp3");
			break;
		case "s":
			mySound = new Audio("./sounds/tom-3.mp3");
			break;
		case "d":
			mySound = new Audio("./sounds/tom-4.mp3");
			break;
		case "j":
			mySound = new Audio("./sounds/snare.mp3");
			break;
		case "k":
			mySound = new Audio("./sounds/crash.mp3");
			break;
		case "l":
			mySound = new Audio("./sounds/kick-bass.mp3");
			break;
		default:
			console.log(key);
			break;
	}
	mySound.play();
}

function changeButAnimation (pressedKey) {
const keyRef = document.querySelector("." + pressedKey);
keyRef.classList.add("pressed");
setTimeout(function(){
	keyRef.classList.remove("pressed");
}, 200);
}