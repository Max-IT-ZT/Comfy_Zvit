document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger_menu");
  const menuOverlay = document.querySelector(".menu_overlay");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burgerMenu.classList.toggle("open"); // Додавання/видалення класу активності для зміни вигляду бургер-меню
    if (burgerMenu.classList.contains("active")) {
      menuOverlay.style.height = "100%"; // Відкриття вспливаючого вікна
    } else {
      menuOverlay.style.height = "0"; // Закриття вспливаючого вікна
    }
  });
});
