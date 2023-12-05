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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Config
const config_1 = require("../../../config");
// Utils
const utils_1 = require("../../../utils");
/**
 * Service Desciption
 *
 * @param {String} email - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const checkValidPasswordService = (bodyPassword, userPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validPassword = bcryptjs_1.default.compareSync(bodyPassword, userPassword);
        return (validPassword)
            ? true
            : false;
    }
    catch (error) {
        yield config_1.db.disconnect();
        utils_1.logger.consoleErrorsHandler(error, 'checkValidPasswordService');
    }
});
exports.default = checkValidPasswordService;
//# sourceMappingURL=checkValidPasswordService.js.map