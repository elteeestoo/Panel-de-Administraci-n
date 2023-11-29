export default (() => {

    const data = document.querySelector(".form-data");
    const databutton = document.querySelector(".form-data button");
    const images = document.querySelector(".form-images");
    const imagesbutton = document.querySelector(".form-images button");
  
    databutton?.addEventListener("click", () => {
        data.classList.add("active");
        images.classList.remove("active");

    });
    imagesbutton?.addEventListener("click", () => {
        images.classList.add("active");
        data.classList.remove("active");
        imagesbutton.classList.toggle("active");
      });
  
  })();
    