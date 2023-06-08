import { socket } from "./connector";
import { store } from "../store/store";
import { MessageState, addMessages } from "../store/messages";

const dispatch = store.dispatch;

export function listenToSocket() {
    socket.on("sendMessage", (message: MessageState & {messageId: string}) => {
        dispatch(addMessages([message]));
    });
}