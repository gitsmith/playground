"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.init();
    }
    init() {
        this.express.use(express_1.default.json());
        this.express.use(`/sample`, router_1.default);
    }
}
exports.default = new App().express;
