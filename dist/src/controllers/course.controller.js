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
exports.newCourse = exports.getCourses = void 0;
const course_model_1 = __importDefault(require("../models/course.model"));
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const course = yield course_model_1.default.find();
        if (course) {
            return res.json(course);
        }
        return res.json({ error: 'Not found courses' });
    }
    catch (error) {
        console.log('Error getCourses in controller: ', error.message);
        return res.json({ error: 'Internal server error' });
    }
});
exports.getCourses = getCourses;
const newCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        if (!name)
            res.json({ error: 'Field name is required' });
        const course = yield course_model_1.default.findOne({ name });
        if (course)
            res.json({ error: 'Course is exited' });
        const newCourse = new course_model_1.default({
            name,
            description,
        });
        if (newCourse) {
            yield newCourse.save();
            return res.json({ message: 'Course created successfully' });
        }
        return res.json({ error: 'Invalid course data' });
    }
    catch (error) {
        console.log('Error createCourse in controller: ', error.message);
        res.json({ error: 'Internal server error' });
    }
});
exports.newCourse = newCourse;
