import React, { useState } from 'react'
import { NewTask } from './NewTask'
export const Tasks = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  function addTask(taskInput: string) {
    setTasks([...tasks, taskInput]);
    
  }
  return (
    <div className='w-full mt-20'>
      <div className='text-2xl font-bold'>تسک های امروز</div>
      <div className='opacity-50'>3 تسک رو باید انجام بدی</div>
      <NewTask addTask={addTask}/>
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  )
}
