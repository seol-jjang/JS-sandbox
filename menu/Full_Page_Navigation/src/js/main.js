const navBtn = document.querySelector(".nav-btn");
const navContainer = document.querySelector("nav");
const menuUl = document.querySelector(".menu");

function handleMenu() {
  navBtn.classList.toggle("on");
  if (navBtn.classList.contains("on")) {
    navContainer.style.animation = "down 0.5s forwards";
    navContainer.style.display = "block";
    setTimeout(() => {
      menuUl.style.animation = "fade-in 0.3s forwards";
    }, 300);
    setTimeout(() => {
      navContainer.style.animation = "none";
    }, 500);
  } else {
    navContainer.style.animation = "up 0.5s forwards";
    setTimeout(() => {
      navContainer.style.display = "none";
      menuUl.style.animation = "none";
    }, 500);
  }
}

navBtn.addEventListener("click", handleMenu);
