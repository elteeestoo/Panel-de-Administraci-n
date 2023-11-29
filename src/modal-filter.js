export default(() => {
    const filtermodal = document.querySelector(".filter-modal")
    const modalaccept = document.querySelector(".content-buttons-accept");
    const modaldeny = document.querySelector(".content-buttons-deny");

    document.addEventListener("showModalfilter", (event => {
        filtermodal.classList.add("active"); 
    }));

    filtermodal.addEventListener("click", (event) => {
        if (event.target.closest('.content-buttons-deny')) {
            filtermodal.classList.remove("active");
        }

        if (event.target.closest('.content-buttons-accept')) {
            filtermodal.classList.remove("active");
        }
    });

})();
   