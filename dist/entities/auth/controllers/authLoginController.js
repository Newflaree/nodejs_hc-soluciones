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
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const authLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { statusCode, ok, message, user, token } = yield (0, modules_1.authLoginModule)(req);
        res.status(statusCode).json({
            ok,
            message,
            user,
            token
        });
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'authLoginController');
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong. Talking the Administrator'
        });
    }
});
exports.default = authLoginController;
//# sourceMappingURL=authLoginController.js.map