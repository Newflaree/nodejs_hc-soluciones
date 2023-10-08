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
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0
};
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (mongoConnection.isConnected) {
            console.log(`${'[CONFIG.DATABASE.CONNECT]'.bgGreen}: Now we are connected`);
            return;
        }
        if (mongoose_1.default.connections.length > 0) {
            mongoConnection.isConnected = mongoose_1.default.connections[0].readyState;
            if (mongoConnection.isConnected === 1) {
                console.log(`${'[CONFIG.DATABASE.CONNECT]'.bgGreen}: Using previous connction`);
                return;
            }
            yield mongoose_1.default.disconnect();
        }
        yield mongoose_1.default.connect(process.env.MONGO_CNN_LOCAL || '');
        mongoConnection.isConnected = 1;
        console.log(`${'[CONFIG.DATABASE.CONNECT]'.bgGreen}: Database ${'ONLINE'.green}`);
    }
    catch (error) {
        yield mongoose_1.default.disconnect();
        console.log(`${'[CONFIG.DATABASE.CONNECT]'.bgRed}: ${error}`);
    }
});
exports.connect = connect;
const disconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (process.env.NODE_ENV === 'development')
            return;
        if (mongoConnection.isConnected === 0)
            return;
        yield mongoose_1.default.disconnect();
        mongoConnection.isConnected = 0;
        console.log(`${'[CONFIG.DATABASE.DISCONNECT]'.bgGreen}: Disconnected from MongoDB`);
    }
    catch (error) {
        yield mongoose_1.default.disconnect();
        console.log(`${'[CONFIG.DATABASE.DISCONNECT]'.bgRed}: ${error}`);
    }
});
exports.disconnect = disconnect;
//# sourceMappingURL=databaseConfig.js.map