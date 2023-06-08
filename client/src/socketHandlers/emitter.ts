import { socket } from "./connector";

export function joinChat(chatId: string, userId: string) {
    socket.emit("joinChat", {chatId, userId});
}

export function sendMessage(messageContent: string, chatId: string, userId: string) {
    socket.emit("sendMessage", {content: messageContent, chatId, senderUserId: userId});
}