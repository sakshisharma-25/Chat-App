import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  
  // Agar onlineUsers me user ki ID aati hai toh ye sahi chalega
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer transition-all duration-200 ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Avatar Container ko relative banaya taaki dot sahi jagah baithe */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center overflow-hidden border border-slate-500">
            <img
              src={conversation.profilePic}
              alt={conversation.fullName}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Custom Tailwind Green Dot */}
          {isOnline && (
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-slate-800" />
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between items-center">
            <p className="font-bold text-gray-200">
              {conversation.fullName}
            </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && (
        <div className="divider my-0 py-0 h-1 border-slate-700 opacity-20" />
      )}
    </>
  );
};

export default Conversation;