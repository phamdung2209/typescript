"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testInsta = exports.getWebhook = void 0;
const getWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('res', res);
        res.json({
            message: 'Get from webhook instagram'
        });
    }
    catch (error) {
        console.log('Error in getWebhook controller', error.message);
        res.json({ error: 'Internal server error' });
    }
});
exports.getWebhook = getWebhook;
const testInsta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('res', res);
        res.json({ message: 'Server is running!' });
    }
    catch (error) {
        console.log('Error in getWebhook controller', error.message);
        res.json({ error: 'Internal server error' });
    }
});
exports.testInsta = testInsta;
