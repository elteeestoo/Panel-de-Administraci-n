class Title extends HTMLElement {

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
          h1 {
              font-size: 2rem;
              font-weight: 700;
              color: white;
          }
        </style>

          <div class="top-bar-title">
              <h1>${this.title}</h1>
          </div>
    `;
  }
}
  
customElements.define('title-component', Title);