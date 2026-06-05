import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
      <Sidebar />
      <MessageContainer />
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

