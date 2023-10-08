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
// Modules
const modules_1 = require("../modules");
// Utils
const utils_1 = require("../../../utils");
/**
 * Handler description
 *
 * PATH: /api/auth/register
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const authRegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ok, message, error, } = yield (0, modules_1.authRegisterModule)(req);
        res.status(201).json({
            ok,
            message,
            error
        });
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'authRegisterController');
        res.status(500).json({
            ok: false,
            message: 'Something went wrong. Talking the Administrator'
        });
    }
});
exports.default = authRegisterController;
//# sourceMappingURL=authRegisterController.js.map