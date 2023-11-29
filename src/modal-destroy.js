export default(() => {

    const removemodal = document.querySelector(".delete-modal")
    const modalaccept = document.querySelector(".delete-modal .content-buttons-accept");
    const modaldeny = document.querySelector(".delete-modal .content-buttons-deny");

    document.addEventListener("showModalDestroy", (event => {
        removemodal.classList.add("active"); 
    }));

    removemodal.addEventListener("click", (event) => {
        if (event.target.closest('.content-buttons-deny')) {
            removemodal.classList.remove("active");
        }

        if (event.target.closest('.content-buttons-accept')) {
            removemodal.classList.remove("active");
        }
    });

})();

 
