import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom"; 
import { BiUserCircle } from "react-icons/bi";
const Sidebar = ({ onSelectChat }) => {
  return (
    <div className="w-full md:w-[400px] border-r border-slate-700 p-4 flex flex-col h-full">
      <SearchInput />
      <div className="divider px-3 my-2"></div>
      
      <div className="flex-1 overflow-auto">
        {/* Yahan hum conversations list pass karenge */}
        <Conversations onSelectChat={onSelectChat} />
      </div>

      {/* BOTTOM BUTTONS SECTION */}
      <div className="mt-auto pt-2 border-t border-slate-700/50 flex items-center justify-between">
      
        <Link 
          to='/profile' 
          className='flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors group cursor-pointer'
        >
          <BiUserCircle className='w-7 h-7 text-white group-hover:text-sky-400 transition-colors' />
          <span className='text-sm font-medium hidden md:inline'>Edit Profile</span>
        </Link>
        
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;

// Starter code for this File
// import SearchInput from "./SearchInput";
// import Conversations from "./Conversations";
// 
// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-500 p-4 flex flex-col">
//       <SearchInput />
//       <div className="divider px-3"></div>
//       <Conversations />
//       <LogoutButton /> 
//     </div>
//   );
// };
// 
// export default Sidebar;