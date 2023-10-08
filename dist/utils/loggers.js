"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleErrorsHandler = exports.listenServerLogger = void 0;
const listenServerLogger = (port) => {
    console.clear();
    console.log(`${'[SERVER.LISTEN]:'.green} Listening on port: ${port.green}`);
};
exports.listenServerLogger = listenServerLogger;
const consoleErrorsHandler = (error, fileName) => {
    const words = fileName.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    const type = words.pop().toUpperCase();
    const convention = words.map((word) => word.toUpperCase()).join('-');
    console.log(`${`[${type}.${convention}]`.bgRed}: ${error}`);
};
exports.consoleErrorsHandler = consoleErrorsHandler;
//# sourceMappingURL=loggers.js.map