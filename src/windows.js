export default (() => {

    const tabsSection = document.querySelector(".tabs");

    tabsSection.addEventListener("click", (event) => {

        if(event.target.closest('.tab')){
            const tab = event.target.closest('.tab');
            tab.parentElement.querySelector('.active').classList.remove('active');
            tab.classList.add('active');

            const tabContents = document.querySelectorAll('.tab-content');

            tabContents.forEach(tabContent => {
                if(tab.dataset.tab == tabContent.dataset.tab ){
                    tabContent.classList.add('active');
                }else{
                    tabContent.classList.remove('active');
                }
            })
        }
    });
})();

  
