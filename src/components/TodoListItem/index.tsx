import React, { Component } from 'react'
import { Todo } from '../../models/Todo';
import './index.css'

interface TodoListItemProps {
  todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {

  const handleChange = () => {
    
  }

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th id="thId" scope="row">{props.todo.id}</th>
            <td id="title">{props.todo.title}</td>
            <td id="priority">{props.todo.priority}</td>
            <td id="action">
              <input
                className="done"
                checked={props.todo.done}
                type="checkbox"
                value="done"
                onChange={handleChange}></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoListItem;
