"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureSocketServer = void 0;
const logger_1 = require("./logger");
const crypto_1 = require("crypto");
const events = {
    JOIN_CHAT: "joinChat",
    SEND_MESSAGE: "sendMessage"
};
function configureSocketServer(io) {
    io.on("connection", (socket) => {
        (0, logger_1.logInfo)(`socket connected with id of ${socket.id}`);
        socket.on("disconnect", () => {
            (0, logger_1.logInfo)(`socket diconnected with id of ${socket.id}`);
        });
        socket.on(events.JOIN_CHAT, ({ chatId, userId }) => {
            socket.join(chatId);
            io.to(chatId).emit(events.SEND_MESSAGE, { senderUserId: null, content: `${userId} joined the channel!`, chatId, messageId: (0, crypto_1.randomUUID)() });
        });
        socket.on(events.SEND_MESSAGE, ({ content, senderUserId, chatId }) => {
            io.to(chatId).emit(events.SEND_MESSAGE, { senderUserId, content, chatId, messageId: (0, crypto_1.randomUUID)() });
        });
    });
}
exports.configureSocketServer = configureSocketServer;
//# sourceMappingURL=connectionHandler.js.map