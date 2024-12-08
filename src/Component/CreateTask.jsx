import React, { useContext, useState } from 'react'
import { Auth } from '../Context/AuthContext';

const CreateTask = () => {

  const [userData,setUserData] = useContext(Auth);


    const [taskTitle, setTaskTitle] = useState("")
    const [taskDesc, setTaskDesc] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")

    // const [addTask, setAddTask] = useState({})

  const subHandler=(e)=>{
             e.preventDefault()
    
          const newTask={taskDate,
            taskDesription:taskDesc,
            taskTitle,
            category,
            active:false,
            newTask:true,
            failed:false,
            completed:false,
            taskNumber:Math.random(),
          }
       

          const updatedUserData = userData.map((user) => {
            if (user.firstName.toLowerCase() === assignTo.toLowerCase()) {
              return {
                ...user,
                tasks: [...user.tasks, newTask], 
                taskCounts: {
                  ...user.taskCounts,
                  newTask: user.taskCounts.newTask + 1, 
                },
              };
            }
            return user; 
          });

          setUserData(updatedUserData);
          localStorage.setItem("employees", JSON.stringify(updatedUserData));
      


    setAssignTo("")
    setCategory("")
    setTaskDate("")
    setTaskDesc("")
    setTaskTitle("")
          
  }

  return (
    
   <>
    <div className="p-5 bg-[#1c1c1c] mt-7  rounded">
          <form onSubmit={subHandler} className="flex  items-start flex-wrap w-full justify-between  ">
            <div className="w-1/2  ">
              <div>
                <h3 className="text-sm text-gray-300 mb-1.5">Task Title</h3>
                <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className="text-sm py-1 px-2 w-4/5 mb-2 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Make a task" />
              </div>

              <div>
                <h3 className="text-sm text-gray-300 mb-1.5">Date</h3>
                <input value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} className="text-sm py-1 px-2 w-4/5 mb-2  rounded outline-none bg-transparent border-[1px] border-gray-400" type="date" />
              </div>

              <div>
                <h3 className="text-sm text-gray-300 mb-1.5">Assign To</h3>
                <input value={assignTo} onChange={(e)=>setAssignTo(e.target.value)} className="text-sm py-1 px-2 w-4/5 mb-2 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Employe Name" />
              </div>

              <div>
                <h3 className="text-sm text-gray-300 mb-1.5">Category</h3>
                <input value={category} onChange={(e)=>setCategory(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Design, Dev" />
              </div>
            </div>

            <div className="w-2/5 flex flex-col item-start">
              <h3 className="text-sm text-gray-300 mb-0.5">Task Description</h3>
              <textarea value={taskDesc} onChange={(e)=>setTaskDesc(e.target.value)} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" cols="30" rows="10"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full" >Create Task</button>
            </div>

          </form>
        </div>
   </>
  )
}

export default CreateTask