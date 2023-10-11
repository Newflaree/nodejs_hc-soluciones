"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
// JsonWebToken
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Utils
const _1 = require(".");
const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY || '', {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                _1.logger.consoleErrorsHandler(err, 'generateJWTUtil');
                reject('Token could not be generated');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=generateJWT.js.map