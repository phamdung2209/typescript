"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hasu_controller_1 = require("../controllers/hasu.controller");
const route = express_1.default.Router();
route.post('/product-by-category', hasu_controller_1.getProductsByCategory);
exports.default = route;
