import { socket } from "./connector";
import { store } from "../store/store";
import { MessageState, addMessages } from "../store/messages";
import { addUsersAction } from "../store/users";
import { getRandomRGBColor } from "../utils";
import { ChatState, addChats } from "../store/chats";

const dispatch = store.dispatch;

export function listenToSocket() {
    socket.on("sendMessage", (message: MessageState & {messageId: string}) => {
        const state = store.getState();
        // TODO: might want to migrate this, so that on new user detection it will query the user from db
        if (message.senderUserId && !state.users[message.senderUserId]) {
            dispatch(addUsersAction([{userId: message.senderUserId, color: getRandomRGBColor()}]))
        }
        dispatch(addMessages([message]));
    });
    socket.on("joinChat", (chat: ChatState & {chatId: string}) => {
        store.dispatch(addChats([chat]));
    });
}