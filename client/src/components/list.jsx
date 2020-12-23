import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/todo/todo-actions'
import CustomBtn from './button'

const List = ({ todos, setUpdateTodo }) => {
  const dispatch = useDispatch()

  const handleMarkComplete = (id) => {
    dispatch(completeTodo(id))
  }

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  return (
    <ul>
      {todos.length > 0 &&
        todos.map((i) => (
          <li
            key={i.id}
            className={`${
              i.completed ? 'border-green-500' : 'border-red-500'
            } card hover:shadow-md flex items-center justify-between  border-b-4 md:border-b-0 md:border-l-4 flex-col md:flex-row`}
          >
            <span
              className={`${
                i.completed ? 'line-through' : ''
              } md:w-96 lg:w-auto break-words  px-8 py-4`}
            >
              {i.title}
            </span>
            <div className='md:block'>
              <CustomBtn
                className='btn bg-blue-500 hover:bg-opacity-80 '
                type={'button'}
                runAction={() => setUpdateTodo({ ...i, edit: true })}
                title={'update'}
              />
              <CustomBtn
                className='btn bg-red-500  hover:bg-opacity-80'
                type={'button'}
                runAction={() => handleDeleteTodo(i.id)}
                title={'Delete'}
              />
              <CustomBtn
                className='btn bg-green-500  hover:bg-opacity-80'
                type={'button'}
                runAction={() => handleMarkComplete(i.id)}
                title={`${i.completed ? 'Undone' : 'Done'}`}
              />
            </div>
          </li>
        ))}
    </ul>
  )
}

export default List
