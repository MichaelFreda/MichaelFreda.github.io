//===================================== DARK THEME =========================
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//We need to validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //ADD or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user has chosen
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// console.log("THEME SETTING IS WORKING!")

//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
    dynamicbullets: true,
  },
  // mousewheel: true,
  keyboard: true,
});
console.log("Portfolio Swiper is working!");
