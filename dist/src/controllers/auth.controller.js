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
exports.signUp = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_model_1.default.findOne({ username });
        if (user) {
            return res.json({ error: 'Username already exists' });
        }
        const newUser = new user_model_1.default({
            username,
            password,
        });
        if (newUser) {
            yield newUser.save();
            return res.json({ message: 'User created successfully' });
        }
        return res.json({ error: 'Invalid user data' });
    }
    catch (error) {
        console.log('Error in signUp controller', error.message);
        res.json({ error: 'Internal server error' });
    }
});
exports.signUp = signUp;
