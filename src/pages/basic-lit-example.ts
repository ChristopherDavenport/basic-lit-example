
import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {PathController} from '../controllers/PathController.js';

@customElement('basic-lit-example')
export class BasicLitExample extends LitElement {

  pathController = new PathController(this);

  render() {
    return html`<div class="visualized"><h1>${this.pathController.path}</h1></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'basic-lit-example': BasicLitExample;
  }
}