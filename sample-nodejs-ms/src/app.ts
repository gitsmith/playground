import express, { Application } from "express";
import router from "./router";

class App {
    public express: Application;

    constructor () {
        this.express = express();
        this.init();
    }

    private init (): void {
        this.express.use(express.json());
        this.express.use(`/sample`, router);
    }
}

export default new App().express;