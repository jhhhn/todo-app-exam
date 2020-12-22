import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '../components/list'
import { deleteTodo, getTodos, updateTodo } from '../redux/todo/todo-actions'

const Index = () => {
  const dispatch = useDispatch()
  const todosState = useSelector(({ todos }) => todos)
  const { loading, todos, error } = todosState

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleUpdateTodo = () => {
    dispatch(updateTodo())
  }

  return (
    <div className='index'>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <List
          todos={todos}
          deleteTodo={handleDeleteTodo}
          updateTodo={handleUpdateTodo}
        />
      )}
    </div>
  )
}

export default Index
