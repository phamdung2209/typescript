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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotifyCallback = exports.getNotify = void 0;
const notify_model_1 = __importDefault(require("../models/notify.model"));
const getNotify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { data, mac } = req.body;
        const notify = yield notify_model_1.default.create({
            method: (_a = data.method) !== null && _a !== void 0 ? _a : 'No method',
            orderId: (_b = data.orderId) !== null && _b !== void 0 ? _b : 'No orderId',
            appId: (_c = data.appId) !== null && _c !== void 0 ? _c : 'No appId',
            // data: data ?? 'No data',
            mac: mac !== null && mac !== void 0 ? mac : 'No mac',
        });
        if (!notify)
            return res.json({
                error: 'Create notify failed',
                returnCode: 0,
                returnMessage: 'Payment failed',
            });
        yield notify.save();
        const notifies = yield notify_model_1.default.find();
        if (!notifies) {
            return res.json({
                error: 'Not found notifies',
                returnCode: 0,
                returnMessage: 'Payment failed',
            });
        }
        return res.json({
            notifies,
            returnCode: 1,
            returnMessage: 'Payment success',
        });
    }
    catch (error) {
        console.log('Error getNotify in controller: ', error.message);
        return res.json({ error: error.message, returnCode: 0, returnMessage: 'Payment failed' });
    }
});
exports.getNotify = getNotify;
const getNotifyCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, mac, overallMac } = req.body;
        console.log('data: ', data);
        console.log('mac: ', mac);
        console.log('overallMac: ', overallMac);
        return res.json({ data, returnCode: 1, returnMessage: 'Payment ss*' });
    }
    catch (error) {
        console.log('Error getNotifyCallback in controller: ', error.message);
        return res.json({ error: error.message, returnCode: 0, returnMessage: 'Payment failed*' });
    }
});
exports.getNotifyCallback = getNotifyCallback;
