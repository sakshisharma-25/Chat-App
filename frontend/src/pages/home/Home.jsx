import { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex w-full max-w-4xl h-[90vh] md:h-[550px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
      
      <div className={`w-full md:flex ${selectedConversation ? "hidden" : "flex"}`}>
        <Sidebar />
      </div>

      <div className={`w-full md:flex ${!selectedConversation ? "hidden" : "flex"}`}>
        <MessageContainer />
      </div>

    </div>
  );
};

export default Home;

//My older code
// import Sidebar from "../../components/sidebar/Sidebar";
// const Home = () => {
//   return (
//     <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//       <Sidebar />
//        <MessageContainer /> 
//     </div>
//   );
// };
// 
// export default Home;

