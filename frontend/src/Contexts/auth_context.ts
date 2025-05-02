// import React, { createContext, useState, useEffect, ReactNode } from "react";

// // Define the User type (if you need it)
// interface User {
//   username: string;
// }

// // Define the context type
// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   token: string | null;
//   login: (userData: User, token: string) => void;
//   logout: () => void;
// }

// // Create context with default values
// export const AuthContext = createContext<AuthContextType>({
//   user: null,
//   isAuthenticated: false,
//   token: null,
//   login: () => {},
//   logout: () => {},
// });

// // Define AuthProviderProps to type `children` correctly
// interface AuthProviderProps {
//   children: ReactNode;
// }

// // AuthProvider component with correct return type
// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     // Try to load user and token from localStorage
//     const storedUser = localStorage.getItem("user");
//     const storedToken = localStorage.getItem("token");

//     if (storedUser && storedToken) {
//       setUser(JSON.parse(storedUser));
//       setToken(storedToken);
//     }
//   }, []);

//   const login = (userData: User, newToken: string) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("token", newToken);
//     setUser(userData);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken(null);
//   };

//   const isAuthenticated = !!token;

//   // Ensure you are returning JSX
//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
