class ModalDelete extends HTMLElement {

  constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {

      document.addEventListener("showModalDelete", (event => {
          this.openModal()
      }));

      this.render()
  }

  render() {

      this.shadow.innerHTML =
      /*html*/`
      <style>
        .delete-modal{
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

        .delete-modal.active{
          top: 0;
        }

        .delete-modal-content{
          display: flex;
          z-index: 3000;
          position: absolute;
          background-color: blueviolet;
          width: 30%;
          height: 30%;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          border-radius: 8%;
          border-color: white;
          border-style: solid;
          
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

      
      <div class="delete-modal">
        <div class="delete-modal-content">
          <div class="content-title">
            <h3>¿quiere eliminar este registro?</h3>
          </div>
          <div class="content-buttons">
            <button class="content-buttons-accept">
              <h3>Sí</h3>
            </button>
            <button class="content-buttons-deny">
              <h3>No</h3>
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
      const deletemodal = this.shadow.querySelector(".delete-modal")
      console.log(deletemodal)
      deletemodal.classList.add("active");
  }

  closeModal(){
      const deletemodal = this.shadow.querySelector(".delete-modal")
      deletemodal.classList.remove("active");
  }
}

customElements.define('delete-component', ModalDelete);

 
