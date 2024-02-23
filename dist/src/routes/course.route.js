"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("../controllers/course.controller");
const router = express_1.default.Router();
router.get('/', course_controller_1.getCourses);
router.post('/new-course', course_controller_1.newCourse);
exports.default = router;
