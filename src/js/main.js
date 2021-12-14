import { BaseComponent } from './base-component.js';

export class Main extends BaseComponent {
  constructor() {
    super('main', ['main']);
  }

  clear() {
    this.element.innerHTML = '';
  }

  render(page) {
    this.clear();
    this.element.append(page.element);
  }
}