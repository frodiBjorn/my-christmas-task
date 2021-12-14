import { BaseComponent } from '../base-component.js';

export class PageStart extends BaseComponent {  

  constructor(parent) {
    super('section', ['page', 'start-page']);
    this.parent = parent;
    this.container = new BaseComponent('div', ['container']);
    this.render();
    this.start();
  }

  render() {
    this.element.append(this.container.element);
  }



}