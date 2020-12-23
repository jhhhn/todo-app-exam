import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../redux/todo/todo-actions'
import CustomBtn from './button'
import InputText from './input_text'

const TodoForm = () => {
  const dispatch = useDispatch()

  const [state, setstate] = useState({
    edit: false,
    id: '',
    title: '',
    completed: false,
  })

  const handleChange = (e) => {
    const value = e.target.value
    setstate({ ...state, title: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(state.title))
    setstate({ edit: false, id: '', title: '', completed: false })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className='flex items-center justify-between '>
        <InputText
          handleChange={handleChange}
          placeholder='Add todo'
          value={state.title}
          className='card p-4 w-60 md:w-96'
        />
        <CustomBtn
          className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-blue-500 text-gray-200 font-extrabold
           text-xl tracking-widest'
          type={'submit'}
          title={'Add Todo'}
          onSubmit={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  )
}

export default TodoForm
