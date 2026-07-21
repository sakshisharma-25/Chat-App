import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  const { authUser } = useAuthContext();

  return (
    // Is wrapper se layout hamesha centered aur clean rahega har screen par
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        <Route path='/profile' element={authUser ? <Profile /> : <Navigate to={"/login"} />} />
</Routes>
    </div>
  );
}

export default App;