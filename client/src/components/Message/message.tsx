import { useSelector } from "react-redux"
import { MessageState } from "../../store/messages"
import { RootState } from "../../store/store"
import { SYSTEM_USER, UserState } from "../../store/users"

export const Message = ({messageId, content, senderUserId}: MessageState & {messageId: string}) => {
    const sendeingUser = useSelector<RootState, UserState>((state) => senderUserId ? state.users[senderUserId] : SYSTEM_USER);

    return <div key={messageId}> 
        {
            senderUserId && <span style={{color: sendeingUser.color}}>
                {`${senderUserId}: `}
            </span>
        }
        <span>
            {content}
        </span> 
    </div>
}