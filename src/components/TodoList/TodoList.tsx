import React from 'react';
import { Todo } from '../../models/Todo';
import './index.css'

const TodoList = () => {

  const list: Todo[] = [
    {
      id: 1,
      title: 'Create Todo',
      priority: 'alta',
      done: false
    },
    {
      id: 2,
      title: 'Create Todo',
      priority: 'alta',
      done: false
    }
  ]

  return (

    <div className="todo-list">
      <h1>My Todo list</h1>
      {list.map(item => (
        <div className="list">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.priority}</td>
                <td>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default TodoList;