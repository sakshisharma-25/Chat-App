import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleClass = fromMe ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800";
  // const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="profile"
            src={profilePic}
          />
        </div>
      </div>

      {/*<div className={`chat-bubble text-white ${ fromMe ? "bg-blue-500" : "" }`}>*/}
      {/*  {message.message}*/}
      {/*</div>*/}

      <div className={`chat-bubble ${bubbleClass} ${shakeClass} pb-2`}>
        {message.message}
      </div> {/*used to update the bubble colour if msg from the sender is invisible*/}

      {/*<div className="chat-footer opacity-85 text-xs flex gap-1 items-center">*/}
      {/*  {formattedTime}*/}
      {/*</div>*/}

    <div className="chat-footer text-gray-300 text-[11px] font-medium flex gap-1 items-center mt-1">
      {formattedTime}
    </div>   {/*used to update the time colour*/}
    
    </div>
  );
};

export default Message;