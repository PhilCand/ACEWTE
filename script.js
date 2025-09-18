const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navButtons = document.querySelectorAll(".nav-link");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navButtons.forEach((button) => {
  button.addEventListener("click", () =>
    document.body.classList.remove("show-mobile-menu")
  );
});
