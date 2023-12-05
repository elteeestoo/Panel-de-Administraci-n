class Table extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        document.addEventListener("showModal", (event => {
            this.openModal()
        }));

        this.render()
    }

    render() {

        this.shadow.innerHTML =
        /*html*/`
        <style>
            .filter-modal{
                display: flex;
                background-color: hsla(0, 0%, 0%, 0.555);
                align-items: center;
                justify-content: center;
                z-index: 3000;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: -100%;
                left: 0%
            }
                
            .filter-modal.active{
                top: 0;
            }
            
            .filter-modal-content{
                display: flex;
                z-index: 3000;
                position: absolute;
                background-color: hsl(271, 76%, 53%);
                width: 30%;
                height: 30%;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
                justify-content: center;
                border-radius: 8%;
                border-color: hsl(0, 0%, 100%);
                border-style: solid;
                
            }
            .content-text{
                display: flex;
                flex-direction: column;
                width: 80%;
                color: white;
                gap: 0.5rem;
            }
            
            .content-text input{
                border: none;
                padding: 0.3rem;
                color: black;
            }
            
            .content-title{
                text-transform: uppercase;
                color: white;
            }
            
            .content-buttons{
            
                display: flex;
                justify-content: space-between;
                width: 60%;
                
                
            
            }
            
            .content-buttons-accept{
                background-color: hsl(240, 100%, 50%);
                width: 40%;
                color: white;
                border-radius: 30%;
                padding: 0.5rem;
                border-color: hsl(0, 0%, 100%);
                border-style: solid;
            }
            
            .content-buttons-deny{
                background-color: hsl(0, 100%, 50%);
                width: 40%;
                border-radius: 30%;
                color: white;
                padding: 0.5rem;
                border-color: hsl(0, 0%, 100%);
                border-style: solid;
            }
        </style>

            <section class="table">
                <section class="filter">
                    <div class="filter-button">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
                        </button>
                    </div>
                </section>
                <article class="table-record">
                    <div class="table-buttons">
                        <div class="edit-button">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                </svg>
                            </button>
                        </div>
                        <div class="delete-button">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="table-data">
                        <ul>
                            <li><span>Email</span>bolitakinki69@hotmail.com</li>
                            <li><span>Nombre</span>Carlos</li>
                        </ul>
                    </div>
                </article>
                <article class="table-record">
                <div class="table-buttons">
                    <div class="edit-button">
                        </div>
                        <div class="delete-button">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="table-data">
                    <ul>
                    <li><span>Email</span>bolitakinki69@hotmail.com</li>
                    <li><span>Nombre</span>Carlos</li>
                    </ul>
                </div>
                </article>
                <article class="table-record">
                    <div class="table-buttons">
                        <div class="edit-button">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                </svg>
                            </button>
                        </div>
                        <div class="delete-button">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="table-data">
                    <ul>
                    <li><span>Email</span>bolitakinki69@hotmail.com</li>
                    <li><span>Nombre</span>Carlos</li>
                    </ul>
                </div>
                </article>
                <article class="table-record">
                    <div class="table-buttons">
                        <div class="edit-button">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                            </svg>
                        </button>
                        </div>
                        <div class="delete-button">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="table-data">
                        <ul>
                            <li><span>Email</span>bolitakinki69@hotmail.com</li>
                            <li><span>Nombre</span>Carlos</li>
                        </ul>
                    </div>
                    </article>
                    <div class="table-pagination">
                    <span> 4 {{ __('admin/pagination.total') }}</span>
                </div>
            </section>
            
        `

        const modaldeny = this.shadow.querySelector(".content-buttons-deny");

        modaldeny.addEventListener("click", (event) => {
            this.closeModal()
        });
    }

    openModal(){
        const filtermodal = this.shadow.querySelector(".filter-modal")
        filtermodal.classList.add("active");
    }

    closeModal(){
        const filtermodal = this.shadow.querySelector(".filter-modal")
        filtermodal.classList.remove("active");
    }
}

customElements.define('filter-component', Filter);



// export default (() => {

//     const tableSection = document.querySelector('.table');

//     tableSection?.addEventListener('click', async (event) => {

//         if (event.target.closest('.edit-button')) {
//             alert("hola");
//         }

//         if (event.target.closest('.delete-button')) {
//             document.dispatchEvent(new CustomEvent ('showModalDelete'))
//         }
//         if (event.target.closest('.filter-button')){
//             document.dispatchEvent(new CustomEvent ('showModalFilter'))
//         }
        
//     });
// })();