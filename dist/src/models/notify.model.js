"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const notifySchema = new mongoose_1.default.Schema({
    method: {
        type: String,
    },
    orderId: {
        type: String,
    },
    appId: {
        type: String,
    },
    // data: { type: String },
    mac: {
        type: String,
    },
});
const Notify = mongoose_1.default.model('Notify', notifySchema);
exports.default = Notify;
