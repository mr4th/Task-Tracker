import React from 'react'

function Vert({tasks}) {
  return (
    <div>
    {tasks.map((task,key) => (
    <ul>
    <li key={task.id}> {task.title}</li>
    <li key={task.id}> {task.body}</li>
    </ul>
    ))}
    </div>
  )
}

export default Vert