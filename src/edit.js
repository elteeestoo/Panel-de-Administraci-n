export default (() => {

    const remove = document.querySelector(".delete-button");
    const removemodal = document.querySelector(".delete-modal")
    const modalaccept = document.querySelector(".delete-modal .content-buttons-accept");
    const modaldeny = document.querySelector(".delete-modal .content-buttons-deny");
    const removes = document.querySelectorAll(".delete-button")
    const tablesection = document.querySelector(".table")
 
    tablesection?.addEventListener('click', async (event) => {
      if (event.target.closest('.delete-button'))

        const remove = event.target.closest('.delete-button')
    })

    removes.forEach(remove => {
    
      remove?.addEventListener("click", () => {
        removemodal.classList.add("active")
      });
    modalaccept?.addEventListener("click", () => {
        removemodal.classList.remove("active");
      }); 
    modaldeny?.addEventListener("click", () => {
        removemodal.classList.remove("active");
      }); 

  });
    


})();