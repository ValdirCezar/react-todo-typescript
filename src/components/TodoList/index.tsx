import React from 'react';
import { Todo } from '../../models/Todo';
import TodoListItem from '../TodoListItem';
import './index.css'

const TodoList = () => {

  const list: Todo[] = [
    {
      id: 1,
      title: 'Create Todo 1',
      priority: 'alta',
      done: true
    },
    {
      id: 2,
      title: 'Create Todo 2',
      priority: 'alta',
      done: false
    },
    {
      id: 3,
      title: 'Create Todo 3',
      priority: 'alta',
      done: true
    },
    {
      id: 4,
      title: 'Create Todo 4',
      priority: 'alta',
      done: false
    }
  ]

  return (

    <div className="todo-list">
      <h1>My Todo list</h1>
      <table className="table">
        <thead>
          <tr>
            <th id="thId">ID</th>
            <th>Tittle</th>
            <th id="thPriority">Priority</th>
            <th id="thAction">Done</th>
          </tr>
        </thead>
      </table>
      {
        list.map(item => <TodoListItem todo={item} />)
      }
    </div>
  )
}

export default TodoList;