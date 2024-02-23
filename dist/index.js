"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const POST = 8080;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.send({
        message: 'Server is running!',
    });
});
app.listen(POST, () => {
    console.log(`Server is running at http://localhost:${POST}`);
});
