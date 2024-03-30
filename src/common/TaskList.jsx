import React from 'react'
import Button from './Button'

const TaskList = ({messageList, handleDeleteTask}) => {
  return (
    <div className='task-list'>
    <ul>
        {messageList.map((m) => (
          <div class="list-item">
          <li key={m.id}>
            {m.toDo}
          </li>
          <Button
          key={`delete-${m.id}`}
          text="x"
          onClick={() => handleDeleteTask(m.id)}
          className="bnt-delete"
        />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default TaskList