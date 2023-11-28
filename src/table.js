export default (() => {
    const remove = document.querySelector(".delete-button");
    const removemodal = document.querySelector(".delete-modal")
    const modalaccept = document.querySelector(".delete-modal .content-buttons-accept");
    const modaldeny = document.querySelector(".delete-modal .content-buttons-deny");
    const tableSection = document.querySelector('.table');

    tableSection?.addEventListener('click', async (event) => {

        if (event.target.closest('.edit-button')) {
            alert("hola");
        }

        if (event.target.closest('.delete-button')) {
            removemodal.classList.add("active"); 
            modalaccept.classList.remove("active")   
            modaldeny.classList.remove("active")
        }
    });
})();