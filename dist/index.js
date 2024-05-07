"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const connectDB_1 = __importDefault(require("./src/config/connectDB"));
const auth_route_1 = __importDefault(require("./src/routes/auth.route"));
const user_route_1 = __importDefault(require("./src/routes/user.route"));
const course_route_1 = __importDefault(require("./src/routes/course.route"));
const notify_route_1 = __importDefault(require("./src/routes/notify.route"));
const hasu_route_1 = __importDefault(require("./src/routes/hasu.route"));
const path_1 = __importStar(require("path"));
const app = (0, express_1.default)();
const PORT = 8080;
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
const dirname = path_1.default.resolve();
app.get('/', (req, res) => {
    res.sendFile((0, path_1.join)(dirname + '/src/', 'index.html'));
});
app.use('/api/auth', auth_route_1.default);
app.use('/api/users', user_route_1.default);
app.use('/api/courses', course_route_1.default);
app.use('/api/notify', notify_route_1.default);
app.use('/api/hasu/', hasu_route_1.default);
(0, connectDB_1.default)();
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
