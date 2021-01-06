const section = document.querySelector("section");
const article = document.querySelector(".article");
const lists = document.querySelectorAll("li");
let selected = document.querySelector(".active");

window.addEventListener("DOMContentLoaded", () => {
	section.style.marginLeft = 0;
});

lists.forEach((list) => {
	list.addEventListener("click", function (e) {
		// e.preventDefault();
		if (e.currentTarget !== selected) {
			selected.classList.remove("active");
			this.classList.add("active");
			selected = this;
		}
	});
});
