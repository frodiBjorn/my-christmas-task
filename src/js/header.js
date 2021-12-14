import { BaseComponent } from './base-component.js';

export class Header extends BaseComponent {
  constructor(parent) {
    super('header', ['header']);
    this.parent = parent;
    this.container = new BaseComponent('div', ['container']);
    this.logo = new BaseComponent('a', ['logo'], [['href', '#']]);
    this.element.append(this.container.element);
    this.container.element.append(this.logo.element);
  }

  // renderHomePage() {
  //   this.parent.renderHomePage();
  // }


}