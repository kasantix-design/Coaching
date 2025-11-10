document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const navMenu = document.querySelector(".nav-menu");
  const topLine = document.querySelector(".top_line");
  const bottomLine = document.querySelector(".bottom_line");

  menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    // Animate the burger icon
    if (navMenu.classList.contains("open")) {
      topLine.style.transform = "rotate(45deg) translateY(6px)";
      bottomLine.style.transform = "rotate(-45deg) translateY(-6px)";
    } else {
      topLine.style.transform = "none";
      bottomLine.style.transform = "none";
    }
  });
});
