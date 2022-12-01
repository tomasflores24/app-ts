"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
const PORT = 3001;
app.get('/ping', (_, res) => {
    console.log("gogogo");
    return res.send("pong");
});
app.get('/hola', (_, res) => {
    console.log("hola");
    return res.send("hola");
});
app.listen(PORT, () => {
    console.log("corriendo");
});
