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
// PATH: /api/narrators/find-nearby-narrators
router.post('/find-nearby-narrators', [
    (0, express_validator_1.check)('latitude', 'La Latitud en requerida').not().isEmpty(),
    (0, express_validator_1.check)('longitude', 'La Longitud en requerida').not().isEmpty(),
    middlewares_1.validateFields
], controllers_1.findNearbyNarratorsController);
// PATH: /api/narrators
router.get('/');
// PATH: /api/narrators/:id
router.get('/:id');
exports.default = router;
//# sourceMappingURL=narratorsRoutes.js.map