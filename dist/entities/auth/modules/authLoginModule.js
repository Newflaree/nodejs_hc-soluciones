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
// Utils
// TODO: Write doc for login module
const authLoginModule = (req
// TODO: Added auth login response interface
) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Defined body parameters for this module
    try {
        // TODO: Check if user exists
        // TODO: Check if user is active
        // TODO: Check if password is valid
        // TODO: Genreate JsonWebToken
        // TODO: Return { statusCode, ok, validUser, jwt }
    }
    catch (error) {
        yield config_1.db.disconnect();
        // TODO: Return possible errors
    }
});
exports.default = authLoginModule;
//# sourceMappingURL=authLoginModule.js.map