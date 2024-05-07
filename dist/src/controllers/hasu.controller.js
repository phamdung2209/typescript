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
exports.getProductsByCategory = void 0;
const axios_1 = __importDefault(require("axios"));
const getProductsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const { formData } = req.body;
        const data = yield axios_1.default.postForm('https://hasumart.com.vn/ajax/product/items', formData);
        res.json({
            data: (_b = (_a = data.data) === null || _a === void 0 ? void 0 : _a.success) === null || _b === void 0 ? void 0 : _b.items,
            total: (_d = (_c = data.data) === null || _c === void 0 ? void 0 : _c.success) === null || _d === void 0 ? void 0 : _d.total,
        });
    }
    catch (error) {
        console.log(error.message);
        res.json({
            error: error.message,
        });
    }
});
exports.getProductsByCategory = getProductsByCategory;
