export default (() => {
    
    let input = document.querySelector(".validate");
    let minlenght = input.dataset.minlength;
    
    input.addEventListener("input" , () => {
        console.log(input.value.length)
        if (input.value.length < minlenght) {
            input.classList.add("input-active");
        }

        if (input.value.length >= minlenght) {
            input.classList.remove("input-active");
        }
        
    })
})();