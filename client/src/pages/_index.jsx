import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos, updateTodo } from '../redux/todo/todo-actions'
import List from '../components/list'
import TodoForm from '../components/todo-form'
import Loading from '../components/loading'
import Modal from '../components/modal'
import CustomBtn from '../components/button'
import InputText from '../components/input_text'
import Filter from '../components/filter'

const Index = () => {
  const dispatch = useDispatch()
  const modalRef = useRef()
  const todosState = useSelector(({ todos }) => todos)
  const { loading, todos, error } = todosState

  const [dataTodo, setDataTodo] = useState({
    id: '',
    title: '',
    completed: false,
  })

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const openModal = (data) => {
    setDataTodo(data)
    modalRef.current.openModal()
  }
  const closeModal = () => {
    modalRef.current.closeModal()
  }

  const handleChange = (e) => {
    const value = e.target.value
    setDataTodo({ ...dataTodo, title: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo(dataTodo))
    closeModal()
  }

  return (
    <div>
      <header>
        <div className='text-gray-700 text-3xl uppercase flex align-end justify-items-start mb-4'>
          <h2 className='flex items-center'>
            <span className='font-semibold  mr-2'>My</span>
            Todos
          </h2>
        </div>
      </header>

      <TodoForm dataTodo={dataTodo} />

      <Filter />

      <div>
        {error ? (
          <h1>Error</h1>
        ) : (
          <List todos={todos} setUpdateTodo={openModal} />
        )}
      </div>

      <div className='pb-8 m-8 flex justify-center'>
        {loading && <Loading />}
      </div>
      <Modal ref={modalRef}>
        {dataTodo && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Update Todo</h1>
            <div className='flex items-center justify-between '>
              <InputText
                handleChange={handleChange}
                placeholder='Add todo'
                value={dataTodo.title}
                className='card p-4 w-60 md:w-96'
              />
              <CustomBtn
                className='p-4 ml-4 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none'
                type={'submit'}
                title={'Update'}
                onSubmit={(e) => handleSubmit(e)}
              />
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}

export default Index
