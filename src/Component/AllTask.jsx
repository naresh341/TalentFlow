import React, { useContext } from 'react'
import { Auth } from '../Context/AuthContext';

const AllTask = () => {
    const [userData,setUserData] = useContext(Auth);


    if(!userData || userData.length===0){
      return <div>no user data</div>;
    }
  return (
    <>
    <div className='listTask bg-[#1c1c1c] p-5 mt-5 rounded  '>
    <div className='bg-red-300 mb-2 py-2 px-4   flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5'>tasks</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Falied Task</h5>
    </div>
    <div className=''>
       {userData.map(function(el,index){      
           return<div key={index} className='border-emerald-300 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className=' text-lg font-medium w-1/5'>{el.firstName}</h2>
        <h3 className=' text-lg font-medium w-1/5 text-blue-600'>{el.taskCounts.newTask}</h3>
        <h5 className=' text-lg font-medium w-1/5 text-yellow-600'>{el.taskCounts.active}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-green-600'>{el.taskCounts.completed}</h5>
        <h5 className=' text-lg font-medium w-1/5 text-red-600'>{el.taskCounts.failed}</h5>
    </div>
       })}
       </div>
       
    </div>
    </>
  )
}

export default AllTask