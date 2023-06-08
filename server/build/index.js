"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const connectionHandler_1 = require("./connectionHandler");
const logger_1 = require("./logger");
dotenv_1.default.config();
if (process.env.CHAT_SERVER_PORT === undefined) {
    (0, logger_1.logError)(`Missing required enviroment variable ${"CHAT_SERVER_PORT"}`);
    throw new Error();
}
const port = Number.parseInt(process.env.CHAT_SERVER_PORT);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*"
    },
    connectionStateRecovery: {
        maxDisconnectionDuration: 2 * 60 * 1000
    }
});
(0, connectionHandler_1.configureSocketServer)(io);
httpServer.listen(port);
//# sourceMappingURL=index.js.map