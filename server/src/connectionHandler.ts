import { Server } from "socket.io";
import { logInfo } from "./logger";
import { randomUUID } from "crypto";

const events = {
    JOIN_CHAT: "joinChat",
    SEND_MESSAGE: "sendMessage"
}

export function configureSocketServer(io: Server) {
    io.on("connection", (socket) => {
        logInfo(`socket connected with id of ${socket.id}`);
        socket.on("disconnect", () => {
            logInfo(`socket diconnected with id of ${socket.id}`);
        });
        
        socket.on(events.JOIN_CHAT, ({chatId, userId}: {chatId: string, userId: string}) => {
            socket.join(chatId);
            io.to(chatId).emit(events.SEND_MESSAGE, {senderUserId: null, content: `${userId} joined the channel!`, chatId, messageId: randomUUID()});
        });

        socket.on(events.SEND_MESSAGE, ({content, senderUserId, chatId}: {content: string, senderUserId: string, chatId: string}) => {
            io.to(chatId).emit(events.SEND_MESSAGE, {senderUserId, content, chatId, messageId: randomUUID()});
        })
    });
}