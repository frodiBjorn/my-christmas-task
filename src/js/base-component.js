class BaseComponent {
  constructor(tag = 'div', classes = [], attributes) {
    this.element = document.createElement(tag);
    this.element.classList.add(...classes);
    this.element.setAttribute(attributes[0], attributes[1])

    for (const attribute of attributes) {
      this.element.setAttribute(attribute[0], attribute[1])
    }
  }
}

export { BaseComponent };
