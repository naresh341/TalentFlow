import React from "react";
import EmployHeader from "./EmployHeader";
import CreateTask from "./CreateTask";
import AllTask from "./AllTask";

const AdminDashboard = ({changeUser}) => {
  return (
    <>
      <div className="h-screen w-full p-7 ">
        <EmployHeader changeUser={changeUser} ></EmployHeader>
        <CreateTask></CreateTask>
        <AllTask></AllTask>
       
      </div>
    </>
  );
};

export default AdminDashboard;
