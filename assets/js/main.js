let isToggled = true;

const button = document.querySelector(".toggle-chapters");

const chapters = document.querySelector("main aside");
const content = document.querySelector("main article");

button.addEventListener("click", () => {
   if (!isToggled) {
    chapters.classList.add("hide-on-mobile");
  } else {
    chapters.classList.remove("hide-on-mobile");
  }

  isToggled = !isToggled;  
});
