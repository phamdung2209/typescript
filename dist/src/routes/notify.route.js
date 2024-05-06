"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notify_controller_1 = require("../controllers/notify.controller");
const router = express_1.default.Router();
router.post('/', notify_controller_1.getNotify);
router.post('/callback', notify_controller_1.getNotifyCallback);
exports.default = router;
