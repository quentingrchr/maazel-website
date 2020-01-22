const hamburger = document.querySelector("#hamburger");
const iconMenu = document.querySelector("#icon-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll("menu ul li");
const toAnimate = document.querySelectorAll(".to-animate");
const latestRelease = document.querySelector("#sectionReleases");
const scrollDown = document.querySelector(".scroll-down");

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
    offset: "110%"
  });
});

let scrollDownHidden = new Waypoint({
  element: latestRelease,
  handler: function() {
    console.log(scrollDown);
    scrollDown.classList.add("hidden");
  },
  offset: "80%"
});
