import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5"; 
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import useListenMessages from "../../hooks/useListenMessages";

const MessageContainer = () => {
  useListenMessages();
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='w-full md:min-w-[450px] flex flex-col h-full'>
      {!selectedConversation ? (
        <NoChatSelected authUser={authUser} />
      ) : (
        <>
          {/* HEADER WITH PROFILE PICTURE */}
          <div className='bg-white/10 px-4 py-3 flex items-center gap-3 border-b border-white/10'>
            <button 
              onClick={() => setSelectedConversation(null)} 
              className='md:hidden text-white text-xl hover:bg-white/20 p-1 rounded-full transition-colors'
            >
              <IoArrowBack />
            </button>

            {/* Profile Picture */}
            <div className='avatar'>
              <div className='w-10 h-10 rounded-full overflow-hidden border border-sky-400 flex items-center justify-center bg-slate-800'>
                <img
                  src={selectedConversation?.profilePic || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                  alt={selectedConversation?.fullName || "User Avatar"}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className='text-white font-bold text-base leading-tight'>
                {selectedConversation.fullName}
              </span>
              <span className='text-gray-400 text-xs'>To: chat</span>
            </div>
          </div>
          
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = ({ authUser }) => {
  return (
    <div className='flex items-center justify-center w-full h-full p-4'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-4 max-w-xs'>
        <p className="tracking-wide">Welcome 👋 {authUser?.fullName || "User"}</p>
        <p className="text-sm text-gray-400 font-normal">Select a chat to start messaging</p>
        <div className="bg-blue-500/10 p-4 rounded-full mt-2">
          <TiMessages className='text-4xl text-blue-400 animate-bounce' />
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;

// STARTER CODE SNIPPET
// import Messages from "./Messages";
// const MessageContainer = () => {
//     return (
//         <div className='md:min-w-[450px] flex flex-col'>
//             <>
//                 {/* Header */}
//                 <div className='bg-slate-500 px-4 py-2 mb-2'>
//                     <span className='label-text'>To:</span>{' '}
//                     <span className='text-gray-900 font-bold'>John doe</span>
//                 </div>
// 
//                 <Messages />
//                 <MessageInput />
//             </>
//         </div>
//     );
// };
// 
// export default MessageContainer;