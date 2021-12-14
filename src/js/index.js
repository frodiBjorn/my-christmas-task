import {App} from "./app";

const body = document.querySelector('body');

if (!body) {
    throw new Error('Not body');
}

const app = new App(body);