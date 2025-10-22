export class BasicExample extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = ''; 
      this.shadowRoot.innerHTML = '<p>Hello, World!</p>';
    }
  }

}

customElements.define('basic-vanilla-ts-example', BasicExample);

declare global {
  interface HTMLElementTagNameMap {
    'basic-example': BasicExample;
  }
}