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
// Utils
const utils_1 = require("../../../utils");
const models_1 = require("../../auth/models");
const config_1 = require("../../../config");
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
const findNearesNarratorsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { longitude, latitude } = req.body;
        const location = {
            type: 'Point',
            coordinates: [latitude, longitude]
        };
        yield config_1.db.connect();
        const narrators = yield models_1.User.find({
            role: 'NARRATOR_ROLE',
            location: { $near: location }
        }).exec();
        yield config_1.db.disconnect();
        res.status(200).json({
            ok: true,
            narrators
        });
    }
    catch (error) {
        utils_1.logger.consoleErrorsHandler(error, 'findNearesNarratorsController');
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong. Talking the Administrator'
        });
    }
});
exports.default = findNearesNarratorsController;
//# sourceMappingURL=findNearbyNarratorsController.js.map