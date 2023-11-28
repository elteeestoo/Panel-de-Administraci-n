export default (() => {

    const filter = document.querySelector(".filter");
    const filtermodal = document.querySelector(".filter-modal")
    const modalaccept = document.querySelector(".content-buttons-accept");
    const modaldeny = document.querySelector(".content-buttons-deny");

    filter?.addEventListener("click", () => {
        filtermodal.classList.add("active")
      });
    modalaccept?.addEventListener("click", () => {
        filtermodal.classList.remove("active");
      }); 
    modaldeny?.addEventListener("click", () => {
        filtermodal.classList.remove("active");
      }); 



})();