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
// Models
const models_1 = require("../models");
const services_1 = require("../services");
const authRegisterModule = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, } = req.body;
    const newUserData = {
        name,
        email,
        password
    };
    try {
        // TODO: Check if email exists
        const emailExists = yield (0, services_1.checkEmailService)(email);
        if (emailExists)
            return {
                statusCode: 400,
                ok: false,
                message: 'El correo ya existe'
            };
        // TODO: Encrypt password
        // TODO: Save to DB
        // TODO: Geerate JWT
        const newUser = new models_1.User(newUserData);
        return {
            statusCode: 201,
            ok: true,
        };
    }
    catch (error) {
        yield config_1.db.disconnect();
        return {
            statusCode: 400,
            ok: false,
            error: error
        };
    }
});
exports.default = authRegisterModule;
//# sourceMappingURL=authRegisterModule.js.map