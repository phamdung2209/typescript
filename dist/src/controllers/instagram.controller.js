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
exports.getinsta = exports.getWebhook = void 0;
const getWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hub = req.query;
        console.log('hub_____________>', hub);
        console.log('hub.challenge_____________>', hub['hub.challenge']);
        res.send(hub['hub.challenge']);
    }
    catch (error) {
        console.log('Error in getWebhook controller', error.message);
        res.json({ error: 'Internal server error' });
    }
});
exports.getWebhook = getWebhook;
const getinsta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('res___', req.body[0].changes[0]);
        res.json(req.body);
    }
    catch (error) {
        console.log('Error in getinsta controller', error.message);
        res.json({ error: 'Internal server error' });
    }
});
exports.getinsta = getinsta;
