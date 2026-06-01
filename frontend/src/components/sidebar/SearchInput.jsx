import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
            <button type="submit" className="btn btn-circle bg-cyan-700 hover:bg-cyan-600 border-none text-white"
>
        <IoSearchSharp className="w-6 h-6" />
    </button>
            
        </form>
    );
};

export default SearchInput;


// Starter code for SNIPPET
// import { IoSearchSharp } from "react-icons/io5";
// 
// const SearchInput = () => {
//     return (
//         <form className='flex items-center gap-2'>
//             <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
//             <button type="submit" className="btn btn-circle bg-cyan-700 hover:bg-cyan-600 border-none text-white"
// >
//         <IoSearchSharp className="w-6 h-6" />
//     </button>
//             
//         </form>
//     );
// };
// 
// export default SearchInput;
