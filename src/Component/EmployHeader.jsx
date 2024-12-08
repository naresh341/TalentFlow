import React, { useEffect, useState } from 'react'

const EmployHeader = (props) => {
  const [username, setUsername] = useState("")

  useEffect(() => {
   
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setUsername(loggedInUser.firstName || "Admin"); 
    } else {
      setUsername("Admin"); 
    }
  }, []);

  const handlelogout=()=>{
    localStorage.removeItem("loggedInUser")
    props.changeUser("")
    // window.location.reload()
  }
  return (
    <>
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>User</span>  </h1>
        <button onClick={handlelogout} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium '>LogOut</button>
    </div>
    </>
  )
}

export default EmployHeader