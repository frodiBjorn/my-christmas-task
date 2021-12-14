import Header from "../header/header";

class App {
    private container: HTMLElement;
    private header: Header;

    constructor(){
        this.container = document.body;
        this.header = new Header('header');
    }
    run() {
        const headerHTML = this.header.render();
        // this.container.append(headerHTML)
    }
}
export default App;