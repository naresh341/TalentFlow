// import React, { createContext, useEffect, useState } from 'react'
// import { getlocalStorage } from '../utils/LocalStorage'

// export const Auth=createContext()

//  export const AuthContext = ({children}) => {

//     const [userData, setUserData] = useState([])

//     useEffect(() => {
//       const {employees}=getlocalStorage()
//       setUserData(employees)
    
    
//     },[])
    
//   return (
//     <Auth.Provider value={[userData,setUserData]}>
//         {children}
//     </Auth.Provider>
//   )
// }



import React, { createContext, useState, useEffect } from "react";

export const Auth = createContext();

export const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState([]);
  
  // Load initial data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("employees"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);
  
  // Update localStorage whenever userData changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(userData));
  }, [userData]);
  
  return <Auth.Provider value={[userData, setUserData]}>{children}</Auth.Provider>;
};

export default AuthContext