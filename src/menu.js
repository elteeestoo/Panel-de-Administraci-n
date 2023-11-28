export default (() => {

  const menu = document.querySelector(".menu");
  const menuButton = document.querySelector(".container-button");

  menuButton?.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
  });

})();
  