export default (() => {

    const data = document.querySelector(".form-data");
    const databutton = document.querySelector(".form-data button");
    const images = document.querySelector(".form-images");
    const imagesbutton = document.querySelector(".form-images button");
  
    databutton?.addEventListener("click", () => {
        images.classList.add("active")
        data.classList.add("active");
        databutton.classList.remove("active");
    });
    imagesbutton?.addEventListener("click", () => {
        data.classList.add("active")
        images.classList.toggle("active");
        imagesbutton.classList.toggle("active");
      });
  
  })();
    