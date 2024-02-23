"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectDB_1 = __importDefault(require("./src/config/connectDB"));
const auth_route_1 = __importDefault(require("./src/routes/auth.route"));
const user_route_1 = __importDefault(require("./src/routes/user.route"));
const course_route_1 = __importDefault(require("./src/routes/course.route"));
const app = (0, express_1.default)();
const POST = 8080;
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.send({
        message: 'Server is running!',
    });
});
app.use('/api/auth', auth_route_1.default);
app.use('/api/users', user_route_1.default);
app.use('/api/courses', course_route_1.default);
(0, connectDB_1.default)();
app.listen(POST, () => {
    console.log(`Server is running at http://localhost:${POST}`);
});
