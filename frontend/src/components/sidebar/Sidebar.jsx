import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = ({ onSelectChat }) => {
  return (
    // md:w-[350px] se desktop par fix rahega, w-full se mobile par poori screen lega
    // flex-1 aur overflow-auto se content screen se bahaar nahi bhaagega
    <div className="w-full md:w-[400px] border-r border-slate-700 p-4 flex flex-col h-full">
      <SearchInput />
      <div className="divider px-3 my-2"></div>
      <div className="flex-1 overflow-auto">
        {/* Yahan hum conversations list pass karenge */}
        <Conversations onSelectChat={onSelectChat} />
      </div>
      <div className="mt-auto pt-2">
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