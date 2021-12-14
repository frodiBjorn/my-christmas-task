import { Header } from './header.js';
import { Main } from './main.js';
import { Footer } from './footer.js';
import { PageStart } from './pages/page-start.js';

class App {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.header = new Header(this);
    this.main = new Main();
    this.footer = new Footer();
    this.startPage = new PageStart(this);
    this.rootElement.append(this.header.element);
    this.rootElement.append(this.main.element);
    this.rootElement.append(this.footer.element);
    this.renderHomePage();
  }

  render(page) {
    this.main.render(page);
  }

  renderHomePage() {
    this.render(this.startPage);
  }

}

export { App };
