"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contries_route_1 = __importDefault(require("./contries-route"));
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.use('/countries', contries_route_1.default);
exports.default = routes;
