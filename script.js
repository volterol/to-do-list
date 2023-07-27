let button = document.getElementById("mybutton");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.innerHTML = `${input.value} <button class="remove">Remove</button>`;
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.key === 'Enter') {
		createListElement();
	}
}

function removeListElement(event) {
    let buttonClicked = event.target;
    if (buttonClicked.className === "remove") {
        buttonClicked.parentElement.remove();
    }
}

function taskDone(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", removeListElement);
ul.addEventListener("click", taskDone);
