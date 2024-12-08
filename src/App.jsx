
import React, { useContext, useEffect, useState } from "react";
import { setlocalStorage } from "./utils/LocalStorage";
import LoginPage from "./Component/LoginPage";
import EmployeeDashboard from "./Component/EmployeeDashboard";
import AdminDashboard from "./Component/AdminDashboard";
import { Auth } from "./Context/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);
  const [userData] = useContext(Auth);

  useEffect(() => {
    setlocalStorage(); 
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser.role);
      setLoggedUserData(loggedInUser.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        setLoggedUserData(employee);
        setUser("employee");
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        console.log("Invalid login credentials");
      }
    }
  };

  return (
    <>
      {!user && <LoginPage handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedUserData} />}
    </>
  );
};

export default App;

