import React from 'react'
import AcceptTask from './AcceptTask'
import Newtasklist from './Newtasklist'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const ListTask = ({data}) => {
  if (!data || !Array.isArray(data)) {
    return <p>No tasks available.</p>;
  }
  return (
    <>
        <div className='listTask h-[55%] flex items-center overflow-x-auto justify-start flex-nowrap gap-5 w-full py-5  mt-10 caret-transparent'>
         

           {data.map((e,index)=>{
          if(e.active){
            return <AcceptTask key={index} data={e}/>
          }
          if(e.newTask){
            return <Newtasklist key={index}  data={e}/>
          }
          if(e.completed){
            return <CompleteTask key={index}  data={e}/>
          }
          if(e.failed){
            return <FailedTask key={index}  data={e}/>
          }
})}
          
            
        </div>
    </>
  )
}

export default ListTask