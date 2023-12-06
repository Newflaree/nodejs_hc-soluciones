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
// ExpressJS
const express_1 = require("express");
// Database
const config_1 = require("../../../config");
// Models
const models_1 = require("../../auth/models");
// Utils
const utils_1 = require("../../../utils");
const router = (0, express_1.Router)();
router.post('/load', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.db.connect();
        yield models_1.User.deleteMany();
        yield models_1.User.insertMany(config_1.initialData.users);
        yield config_1.db.connect();
        res.status(200).json({
            ok: true,
            message: 'Datos cargados con éxito'
        });
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'seedController');
        res.status(500).json({
            ok: false,
            message: 'Something went wrong. Talking the Admin'
        });
    }
}));
exports.default = router;
//# sourceMappingURL=seedRoutes.js.map