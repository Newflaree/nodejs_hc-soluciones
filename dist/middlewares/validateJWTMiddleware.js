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
exports.validateJWTMiddleware = void 0;
// JsonWebToken
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Models
const models_1 = require("../entities/auth/models");
// Utils
const utils_1 = require("../utils");
const validateJWTMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('x-token');
    if (!token)
        return res.status(401).json({
            ok: false,
            message: 'No hay token en la petición'
        });
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || '');
        const user = (yield models_1.User.findById({ id: uid })) || { isBlocked: true };
        if (!user || !!user.isBlocked)
            return res.status(401).json({
                ok: false,
                message: 'Token inválido'
            });
        req.user = user;
        next();
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'validateJWTMiddleware');
        res.status(401).json({
            ok: false,
            message: 'Token inválido'
        });
    }
});
exports.validateJWTMiddleware = validateJWTMiddleware;
//# sourceMappingURL=validateJWTMiddleware.js.map