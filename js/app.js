let inputValue = document.querySelector("input");
let updateValues = document.getElementById("valueUpdate");
let logoImage = document.getElementById("logo_image");
let clearWords = document.getElementById("clear");

const clearAll = () => {
	logoImage.classList.remove("image_toggle");
	updateValues.textContent = "";
	clearWords.classList.add("clear-all");
	inputValue.value = "";
};

const newValues = (e) => {
	if (inputValue.value != 0) {
		logoImage.classList.add("image_toggle");
		updateValues.textContent = e.target.value;
		clearWords.classList.remove("clear-all");
	} else {
		return clearAll();
	}
};

inputValue.addEventListener("input", newValues);
clearWords.addEventListener("click", clearAll);

// the code using normal function
/* function clearAll() {
	logoImage.classList.remove("image_toggle");
	updateValues.textContent = "";
	clearWords.classList.add("clear-all");
	inputValue.value = "";
}

function newValues(e) {
	if (inputValue.value != 0) {
		logoImage.classList.add("image_toggle");
		updateValues.textContent = e.target.value;
		clearWords.classList.remove("clear-all");
	} else {
		return clearAll();
	}
}
 */
