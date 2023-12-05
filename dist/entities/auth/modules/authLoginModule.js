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
// DB Config
const config_1 = require("../../../config");
// Interfaces
// Services
const services_1 = require("../services");
const utils_1 = require("../../../utils");
// Utils
// TODO: Write doc for login module
const authLoginModule = (req
// TODO: Added auth login response interface
) => __awaiter(void 0, void 0, void 0, function* () {
    // Defined body parameters for this module
    const { email, password } = req.body;
    try {
        // Check if user exists
        const { user } = yield (0, services_1.findUserByEmailService)(email);
        if (!user)
            return {
                statusCode: 401,
                ok: false,
                message: 'Correo electrónico o contraseña incorrectos'
            };
        // Check if user is active
        const userIsBlocked = yield (0, services_1.checkUserBlockedService)(email);
        if (userIsBlocked)
            return {
                statusCode: 401,
                ok: false,
                message: 'Correo electrónico o contraseña incorrectos'
            };
        // TODO: Check if password is valid
        const validPassword = yield (0, services_1.checkValidPasswordService)(password, user.password);
        if (!validPassword)
            return {
                statusCode: 401,
                ok: false,
                message: 'Correo electrónico o contraseña incorrectos'
            };
        // TODO: Genreate JsonWebToken
        const token = yield (0, utils_1.generateJWT)(user._id);
        // Return { statusCode, ok, validUser, jwt }
        return {
            statusCode: 200,
            ok: true,
            user,
            token
        };
    }
    catch (error) {
        yield config_1.db.disconnect();
    }
});
exports.default = authLoginModule;
//# sourceMappingURL=authLoginModule.js.map