import { html, css, LitElement } from 'lit-element';

export class ComponentMio extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--component-mio-text-color, #000);
      }
      button {
        background-color: red;
        color: white;
        
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };      
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 2;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
