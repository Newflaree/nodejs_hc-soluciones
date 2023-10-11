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
// Database
const config_1 = require("../../../config");
// Models
const models_1 = require("../models");
// Utils
const utils_1 = require("../../../utils");
/**
 * Service Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const createNewUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new models_1.User(userData);
        yield config_1.db.connect();
        yield newUser.save();
        yield config_1.db.disconnect();
        return newUser;
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'createNewUserService');
    }
});
exports.default = createNewUserService;
//# sourceMappingURL=createNewUserService.js.map