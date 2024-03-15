let rootEle = document.documentElement;
let toggleBtn = document.querySelector(".toggleBtn");

rootEle.classList.add("light-mode");

function modeToggle() {
    rootEle.classList.toggle("dark-mode");
    toggleBtn.classList.toggle("toggleBtnDarkMode");
}
