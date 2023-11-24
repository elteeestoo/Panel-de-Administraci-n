export default (() => {

  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".container-button");
  const filter = document.querySelector(".filter");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
  });
  filter.addEventListener("click", () => {
    filter.classList.toggle("active");
  });
})();
  