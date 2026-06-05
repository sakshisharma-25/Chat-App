import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin"; // 👈 Hook import kiya (path check kar lena apne hisab se)

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin(); // 👈 Hook ko yahan call kiya

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password); // 👈 Login function call hoga
  };

  return (
    // h-screen aur flex-col add kiya taaki card screen ke center mein clean dikhe aur stretch na ho
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl bg-black/40 backdrop-blur-lg border border-white/20">
        
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="text-base text-white font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-11 bg-gray-900/50 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // 👈 spelling 'value' fix ki
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="text-base text-white font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-11 bg-gray-900/50 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 👈 spelling 'value' fix ki
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-300 hover:text-blue-400 hover:underline mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <div>
            <button 
              className="btn btn-primary btn-block mt-4" 
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;




//import { Link } from "react-router-dom";
//import { useState } from "react";
//
//const Login = () => {
//
//  const [username, setUsername] = useState("");
//  const [password, setPassword] = useState("");
//
//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    await login(username, password)
//  }
//
//  return (
//    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//      <div className="w-full p-6 rounded-2xl shadow-2xl bg-black/40 backdrop-blur-lg border border-white/20">
//
//        <h1 className="text-3xl font-semibold text-center text-white mb-4">
//          Login
//          <span className="text-blue-500"> ChatApp</span>
//        </h1>
//
//        <form onSubmit={handleSubmit}>
//          {/* Username */}
//          <div>
//            <label className="label p-2">
//              <span className="text-base text-white font-medium">
//                Username
//              </span>
//            </label>
//
//            <input
//              type="text"
//              placeholder="Enter username"
//              className="w-full input input-bordered h-10"
//              value={username}
//              onChange={(e) => setUsername(e.target.vale)}
//            />
//          </div>
//
//          {/* Password */}
//          <div>
//            <label className="label p-2">
//              <span className="text-base text-white font-medium">
//                Password
//              </span>
//            </label>
//
//            <input
//              type="password"
//              placeholder="Enter Password"
//              className="w-full input input-bordered h-10"
//              value={password}
//              onChange={(e) => setPassword(e.target.vale)}
//            />
//          </div>
//
//          <Link to="/signup" className="text-sm text-gray-200 hover:text-blue-400 hover:underline mt-2 inline-block">
//            Don't have an account?
//          </Link>
//
//          <div>
//            <button className="btn btn-primary btn-block mt-4">
//              Login
//            </button>
//          </div>
//        </form>
//
//      </div>
//    </div>
//  );
//};

// export default Login;


//My older code
// const Login = () => {
//
//lassName="flex flex-col items-center justify-center min-w-96 mx-auto">
//div className="w-full p-6 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">*/}
// className="w-full p-6 rounded-2xl shadow-2xl bg-black/40 backdrop-blur-lg border border-white/20">
//1 className="text-3xl font-semibold text-center text-gray-300">
//gin
//assName='text-blue-500'> ChatApp</span>
//
//
//
//
// className='label p-2'>
//span className='text-base label-text'>Username</span>*/}
//n className="text-base text-gray-100 font-medium"></span>
//l>
// type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//
//
//
// className='label'>
//span className='text-base label-text'>Password</span>*/}
//n className="text-base text-gray-100 font-medium"></span>
//l>
// 
//='password'
//eholder='Enter Password'
//sName='w-full input input-bordered h-10'
//
//
//='a' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>*/}
//' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//} have an account?

//export default Login;

