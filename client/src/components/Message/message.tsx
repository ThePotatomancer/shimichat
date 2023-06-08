import { MessageState } from "../../store/messages"

export const Message = ({messageId, content, senderUserId}: MessageState & {messageId: string}) => {
    return <div key={messageId}> 
        {
            senderUserId && <span>
                {`${senderUserId}: `}
            </span>
        }
        <span>
            {content}
        </span> 
    </div>
}