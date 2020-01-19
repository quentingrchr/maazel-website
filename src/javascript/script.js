const hamburger = document.querySelector("#hamburger");
const iconMenu = document.querySelector("#icon-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll("menu ul li");
const toAnimate = document.querySelectorAll(".to-animate");

iconMenu.addEventListener("click", () => {
  hamburger.classList.toggle("menu-is-opened");
  menu.classList.toggle("menu-is-grown");
});

menuItems.forEach(element => {
  element.addEventListener("click", () => {
    hamburger.classList.toggle("menu-is-opened");
    menu.classList.toggle("menu-is-grown");
  });
});

toAnimate.forEach(element => {
  let waypoint = new Waypoint({
    element: element,
    handler: function() {
      element.classList.add("move-in-bot");
    },
    offset: "90%"
  });
});
