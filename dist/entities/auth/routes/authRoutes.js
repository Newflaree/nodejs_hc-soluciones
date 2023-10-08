"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ExpressJS
const express_1 = require("express");
// Controllers
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post('/register', [], controllers_1.authRegisterController);
router.post('/login');
exports.default = router;
//# sourceMappingURL=authRoutes.js.map