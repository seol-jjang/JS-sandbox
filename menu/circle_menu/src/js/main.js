const logo = document.querySelector(".logo");
const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.querySelector("nav");

const handleOpenMenu = () => {
  menuBtn.classList.toggle("on");
  if (menuBtn.classList.contains("on")) {
    menuContainer.style.animation = "circle 0.5s forwards";
    menuContainer.style.display = "block";
    setTimeout(() => {
      logo.style.color = "white";
    }, 300);
    setTimeout(() => {
      menuContainer.style.animation = none;
    }, 500);
  } else {
    menuContainer.style.animation = "undo-circle 0.5s forwards";
    logo.style.color = "black";
    setTimeout(() => {
      menuContainer.style.display = "none";
      menuContainer.style.animation = none;
    }, 500);
  }
};

menuBtn.addEventListener("click", handleOpenMenu);
