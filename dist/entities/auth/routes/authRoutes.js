"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ExpressJS
const express_1 = require("express");
const express_validator_1 = require("express-validator");
// Controllers
const controllers_1 = require("../controllers");
// Middlewares
const middlewares_1 = require("../../../middlewares");
const router = (0, express_1.Router)();
router.post('/register', [
    (0, express_validator_1.check)('name', 'El nombre es un campo requerido').not().isEmpty(),
    (0, express_validator_1.check)('email', 'La dirección de correo es un campo requerido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña debe ser de mínimo 6 carácteres').isLength({ min: 6 }),
    middlewares_1.validateFields
], controllers_1.authRegisterController);
// TODO: Implenentate login module
router.post('/login');
exports.default = router;
//# sourceMappingURL=authRoutes.js.map