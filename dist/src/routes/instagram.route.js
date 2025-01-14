"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instagram_controller_1 = require("../controllers/instagram.controller");
const router = express_1.default.Router();
router.get('/webhook', instagram_controller_1.getWebhook);
router.get('/', instagram_controller_1.testInsta);
exports.default = router;
