"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = 4000; //process.env.API_PORT;
app_1.default.listen(port, () => {
    console.log(`Connected successfully on port ${port}`);
});
