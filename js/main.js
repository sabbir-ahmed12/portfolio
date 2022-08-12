/* COLOR SWATCH */
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

/* NAVBAR CUSTOMIZATION */
let navlinkContainer = document.getElementsByClassName("navbar-nav");

let links = document.getElementsByClassName("nav-link");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* FOOTER */
const year = new Date().getFullYear();
document.getElementById(
  "copyright-msg"
).innerHTML = `Copyright &copy; ${year}, Sabbir Ahmed.`;
