import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map(todo => {
        return (
          <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
        )
      })}
    </div>
  )
}

export default TodoList