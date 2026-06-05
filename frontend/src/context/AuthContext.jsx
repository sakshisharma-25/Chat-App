import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("chat-user");
      
      // Agar localStorage khali hai ya usme koi kachra value (jaise string "undefined") hai
      if (!storedUser || storedUser === "undefined" || storedUser === "null") {
        localStorage.removeItem("chat-user");
        return null;
      }

      const parsedUser = JSON.parse(storedUser);
      return parsedUser || null;
    } catch (err) {
      localStorage.removeItem("chat-user");
      return null;
    }
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};


// import { createContext, useContext, useState } from "react";
// 
// export const AuthContext = createContext();
// 
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };
// 
// export const AuthContextProvider = ({ children }) => {
//   // useEffect ki jagah seedhe useState ke andar hi check kar lo (Synchronous fallback)
//   const [authUser, setAuthUser] = useState(() => {
//     const storedUser = localStorage.getItem("chat-user");
//     if (!storedUser) return null;
// 
//     try {
//       const parsedUser = JSON.parse(storedUser);
//       // Agar galti se false ya invalid data store ho gaya ho
//       if (!parsedUser || parsedUser === false) {
//         localStorage.removeItem("chat-user");
//         return null;
//       }
//       return parsedUser;
//     } catch (err) {
//       localStorage.removeItem("chat-user");
//       return null;
//     }
//   });
// 
//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };