export default (() => {
    
    let input = document.querySelector(".validate");
    let minlenght = input.dataset.minlenght;
    
input.addEventListener("input" , () => {
    if (input.value.length < parseInt(minlenght) && input.value.length > 0)
})

})();