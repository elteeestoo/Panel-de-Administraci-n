class Filter extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        document.addEventListener("showModalFilter", (event => {
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

        <div class="filter-modal">
            <div class="filter-modal-content">
                <div class="content-title">
                    <h3>filtrar tabla</h3>
                </div>
                <div class="content-text">
                    <label for="name">Nombre</label>
                    <input type="text">
                </div>
                <div class="content-text">
                    <label for="name">e-mail</label>
                    <input type="text">
                </div>
                <div class="content-buttons">
                    <button class="content-buttons-accept">
                        <h3>Aceptar</h3>
                    </button>
                    <button class="content-buttons-deny">
                        <h3>Cancelar</h3>
                    </button>
                </div>
            </div>
        </div>
        `

        const modaldeny = this.shadow.querySelector(".content-buttons-deny");

        modaldeny.addEventListener("click", (event) => {
            this.closeModal()
        });
    }

    openModal(){
        const filtermodal = this.shadow.querySelector(".filter-modal")
        console.log(filtermodal)
        filtermodal.classList.add("active");
    }

    closeModal(){
        const filtermodal = this.shadow.querySelector(".filter-modal")
        filtermodal.classList.remove("active");
    }
}

customElements.define('filter-component', Filter);



