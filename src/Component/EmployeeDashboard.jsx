import React from 'react'
import EmployHeader from './EmployHeader'
import Tasklist from './TaskList'
import ListTask from './ListTask'

const EmployeeDashboard = ({changeUser,data}) => {
  return (
<>
    <div className='p-10 bg-[#1C1C1C] h-screen'>
     
      <EmployHeader  changeUser={changeUser} data={data}></EmployHeader>
      <Tasklist data={data} ></Tasklist>
      <ListTask data={data?.tasks || [] }></ListTask>
    </div>
</>
  )
}

export default EmployeeDashboard