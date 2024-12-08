import React from 'react'

const Tasklist = ({data}) => {
  return (
    <>
    <div className='flex  mt-10 screen justify-between gap-5'>
        <div className='h-40 w-[45%]  py-6  px-9 rounded-xl  bg-orange-300 caret-transparent'>
            <h2 className='text-3xl'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='h-40 w-[45%]  py-6  px-9 rounded-xl  bg-green-300  caret-transparent'>
            <h2 className='text-3xl'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='h-40 w-[45%]  py-6  px-9 rounded-xl  bg-blue-300 caret-transparent '>
            <h2 className='text-3xl'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='h-40 w-[45%]  py-6  px-9 rounded-xl  bg-violet-300 caret-transparent'>
            <h2 className='text-3xl'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>

    </div>
    </>
  )
}

export default Tasklist