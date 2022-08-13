// Color swatches
document.querySelector(".switcher-btn").onclick = () => {
  document.querySelector(".color-switcher").classList.toggle("active");
};

let themeButtons = document.querySelectorAll(".theme-btns");

themeButtons.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("--color-primary", dataColor);
  });
});

// Navbar - Automatically highlights the nav-items while scrolling
let navlinkContainer = document.getElementsByClassName("navbar-nav");

let links = document.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Footer - Updates the year automatically
const year = new Date().getFullYear();
document.getElementById(
  "copyright-msg"
).innerHTML = `Copyright &copy; ${year}, Sabbir Ahmed.`;

// Adds preloader and makes the navigation bar sticky after loading
let loader = document.getElementById("preloader");
let navbar = document.getElementById("navigation");
window.addEventListener("load", function () {
  loader.style.display = "none";
  navbar.classList.add("sticky-top");
});
