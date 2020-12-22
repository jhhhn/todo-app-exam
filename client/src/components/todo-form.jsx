import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../redux/todo/todo-actions'
import CustomBtn from './button'
import InputText from './input_text'

const TodoForm = ({ dataTodo }) => {
  const dispatch = useDispatch()

  const [state, setstate] = useState({
    edit: false,
    id: '',
    title: '',
    completed: false,
  })

  useEffect(() => {
    if (dataTodo && dataTodo.title) {
      setstate({
        edit: true,
        ...dataTodo,
      })
    }
  }, [dataTodo])

  const handleChange = (e) => {
    const value = e.target.value
    setstate({ ...state, title: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.edit) {
      dispatch(
        updateTodo({
          id: state.id,
          title: state.title,
          completed: state.completed,
        })
      )
      setstate({ edit: false, id: '', title: '', completed: false })
    } else {
      dispatch(addTodo(state.title))
      setstate({ edit: false, id: '', title: '', completed: false })
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='flex items-center justify-between'
    >
      <div className='flex items-center'>
        <InputText
          handleChange={handleChange}
          placeholder='Add todo'
          value={state.title}
          className='card p-4 w-96'
        />
        <CustomBtn
          className='p-4 ml-4 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none'
          type={'submit'}
          title={`${state.edit ? 'Update' : 'Add'}`}
          onSubmit={(e) => handleSubmit(e)}
        />
      </div>
    </form>
  )
}

export default TodoForm
