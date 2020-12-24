import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getTodos, updateTodo } from '../redux/todo/todo-actions'
import List from '../components/list'
import Loading from '../components/loading'
import Modal from '../components/modal'
import CustomBtn from '../components/button'
import InputText from '../components/input_text'
import Filter from '../components/filter'
import LoadMore from '../components/loadmore'

const Index = () => {
  const dispatch = useDispatch()
  const modalRef = useRef()
  const todosState = useSelector(({ todos }) => todos)
  const { loading, todos } = todosState

  const [state, setstate] = useState({
    skip: 0,
    limit: 5,
    completeFilter: null,
  })

  const [dataTodo, setDataTodo] = useState({
    edit: false,
    id: '',
    title: '',
    completed: false,
  })

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(getTodos(state.skip, state.limit, state.completeFilter))
    }
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
    if (dataTodo.edit) {
      dispatch(
        updateTodo({
          id: dataTodo.id,
          title: dataTodo.title,
          completed: dataTodo.completed,
        })
      )
      closeModal()
      setDataTodo({
        edit: false,
        id: '',
        title: '',
        completed: false,
      })
    } else {
      dispatch(addTodo(dataTodo.title))
      closeModal()
      setDataTodo({
        edit: false,
        id: '',
        title: '',
        completed: false,
      })
    }
  }

  const loadMore = () => {
    let skip = state.skip + state.limit
    dispatch(getTodos(skip, state.limit, state.completeFilter, todos)).then(
      () => {
        setstate({
          ...state,
          skip: skip,
        })
      }
    )
  }

  const filterTodo = (completed) => {
    dispatch(getTodos(0, state.limit, completed)).then(() => {
      setstate({
        ...state,
        skip: 0,
        completeFilter: completed,
      })
    })
  }

  return (
    <div>
      <header>
        <div className='text-gray-700 text-3xl uppercase flex align-end justify-between mb-4'>
          <h2 className='flex items-center'>
            <span className='font-semibold  mr-2'>My</span>
            Todos
          </h2>
          <CustomBtn
            className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-blue-500 text-gray-200 font-extrabold
           tracking-widest m3'
            type={'button'}
            title={'Add todo'}
            runAction={() =>
              openModal({
                edit: false,
              })
            }
          />
        </div>
      </header>

      <Filter filterTodo={filterTodo} loading={loading} />
      <List todos={todos} setUpdateTodo={openModal} />
      <h1>Showing {todos.length} of 200</h1>
      <LoadMore loading={loading} limit={state.limit} loadMore={loadMore} />

      <Modal ref={modalRef}>
        {dataTodo && (
          <form onSubmit={(e) => handleSubmit(e)} className='font-mono'>
            <h1 className='text-2xl font-semibold'>
              {dataTodo.edit ? 'Update todo' : 'Add todo'}
            </h1>
            <div className='flex items-center justify-between '>
              <InputText
                handleChange={handleChange}
                placeholder='Add todo'
                value={dataTodo.title}
                className='card p-4 w-60 md:w-96'
              />
              <CustomBtn
                className='p-2 ml-4 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-blue-500 text-gray-100 tracking-widest text-xl'
                type={'submit'}
                title={`${dataTodo.edit ? 'Update' : 'Add'}`}
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
