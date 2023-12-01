class Menu extends HTMLElement {

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
      this.title = this.getAttribute('title')
    }
  
    connectedCallback () {
      this.render()
    }
  
    render() {
  
      this.shadow.innerHTML =
        /*html*/`
          <style>
            .menu {
                top: -100vh;
                left: 0;
                z-index: 1000;
                background-color: aquamarine;
                height: 100vh;
                width: 100%;
                position: fixed;
                transition: top 0.7s;
            }

            .menu.active {
                top: 0;
            }
           
            .container{
            z-index: 1002;
            }

            .container-button {
                cursor: pointer;
                display: flex;
                z-index: 1002;
                position: relative;

            }

            .container-button svg {
                transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
                width: 5rem;
            }

            .container-button.active svg {
                transform: rotate(90deg);
            }

            .container-button path {
                transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
                    stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
                    stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
            }

            .container-button path:nth-child(1) {
                transform-origin: 36% 40%;
            }

            .container-button path:nth-child(2) {
                stroke-dasharray: 29 299;
            }

            .container-button path:nth-child(3) {
                transform-origin: 35% 63%;
            }

            .container-button path:nth-child(4) {
                stroke-dasharray: 29 299;
            }

            .container-button path:nth-child(5) {
                transform-origin: 61% 52%;
            }

            .container-button path:nth-child(6) {
                transform-origin: 62% 52%;
            }

            .container-button.active path:nth-child(1) {
                transform: translateX(9px) translateY(1px) rotate(45deg);
            }

            .container-button.active path:nth-child(2) {
                stroke-dasharray: 225 299;
                stroke-dashoffset: -72px;
            }

            .container-button.active path:nth-child(3) {
                transform: translateX(9px) translateY(1px) rotate(-45deg);
            }

            .container-button.active path:nth-child(4) {
                stroke-dasharray: 225 299;
                stroke-dashoffset: -72px;
            }

            .container-button.active path:nth-child(5) {
                transform: translateX(9px) translateY(1px) rotate(-45deg);
            }

            .container-button.active path:nth-child(6) {
                transform: translateX(9px) translateY(1px) rotate(45deg);
            }

          </style>
            <div class="menu">

            </div>
            <div class="container">
            <button class="container-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <g stroke-width="6.5" stroke-linecap="round">
                    <path
                    d="M72 82.286h28.75"
                    fill="#009100"
                    fill-rule="evenodd"
                    stroke="#fff"
                    />
                    <path
                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                    fill="none"
                    stroke="#fff"
                    />
                    <path
                    d="M72 125.143h28.75"
                    fill="#009100"
                    fill-rule="evenodd"
                    stroke="#fff"
                    />
                    <path
                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                    fill="none"
                    stroke="#fff"
                    />
                    <path
                    d="M100.75 82.286h28.75"
                    fill="#009100"
                    fill-rule="evenodd"
                    stroke="#fff"
                    />
                    <path
                    d="M100.75 125.143h28.75"
                    fill="#009100"
                    fill-rule="evenodd"
                    stroke="#fff"
                    />
                </g>
                </svg>
            </button>
            </div>
      `;
    }
  }
    
  customElements.define('menu-component', Menu);