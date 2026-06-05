import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // 🔴 FIXED: http://localhost:5000 hata diya taaki Vite Proxy kaam kare, aur credentials include kiya
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Signup failed");
      }

      if (!data || typeof data !== "object") {
        throw new Error("Invalid user data received");
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      toast.success("Account created successfully!");
      return data;

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;


// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext";
// 
// const useSignup = () => {
//   const [loading, setLoading] = useState(false);
//   const { setAuthUser } = useAuthContext();
// 
//   const signup = async ({
//     fullName,
//     username,
//     password,
//     confirmPassword,
//     gender,
//   }) => {
//     if (!fullName || !username || !password || !confirmPassword || !gender) {
//       toast.error("Please fill all fields");
//       return;
//     }
// 
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
// 
//     setLoading(true);
// 
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName,
//           username,
//           password,
//           confirmPassword,
//           gender,
//         }),
//       });
// 
//       const data = await res.json();
// 
//       if (!res.ok) {
//         throw new Error(data.error || "Signup failed");
//       }
// 
//       if (!data || typeof data !== "object") {
//         throw new Error("Invalid user data received");
//       }
// 
//       localStorage.setItem("chat-user", JSON.stringify(data));
//       setAuthUser(data);
// 
//       toast.success("Account created successfully!");
//       return data;
// 
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
// 
//   return { loading, signup };
// };
// 
// export default useSignup;