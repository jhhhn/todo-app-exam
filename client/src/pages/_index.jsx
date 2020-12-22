import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../redux/todo/todo-actions'
import List from '../components/list'
import TodoForm from '../components/todo-form'
import Loading from '../components/loading'

const Index = () => {
  const dispatch = useDispatch()
  const todosState = useSelector(({ todos }) => todos)
  const { loading, todos, error } = todosState

  const [dataTodo, setDataTodo] = useState({})

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const setUpdateTodo = (todo) => {
    setDataTodo(todo)
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

      <div>
        {error ? (
          <h1>Error</h1>
        ) : (
          <List todos={todos} setUpdateTodo={setUpdateTodo} />
        )}
      </div>

      <div className='pb-8 m-8 flex justify-center'>
        {loading && <Loading />}
      </div>
    </div>
  )
}

export default Index
