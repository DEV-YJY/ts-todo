import React from 'react'
import { Todo } from '../model'
import './styles.css'

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      
    </div>
  )
}

export default TodoList