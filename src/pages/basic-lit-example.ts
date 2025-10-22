
import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('basic-lit-example')
export class BasicLitExample extends LitElement {
  render() {
    return html`<p>Hello, World!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'basic-lit-example': BasicLitExample;
  }
}