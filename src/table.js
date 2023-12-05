export default (() => {

    const tableSection = document.querySelector('.table');

    tableSection?.addEventListener('click', async (event) => {

        if (event.target.closest('.edit-button')) {
            alert("hola");
        }

        if (event.target.closest('.delete-button')) {
            document.dispatchEvent(new CustomEvent ('showModalDelete'))
        }
        if (event.target.closest('.filter-button')){
            document.dispatchEvent(new CustomEvent ('showModalFilter'))
        }
        
    });
})();