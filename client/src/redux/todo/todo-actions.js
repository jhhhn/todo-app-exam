import Axios from 'axios'
import TodoConstant from './todo-constant'

export const addTodo = (todo) => ({
  type: TodoConstant.TODOS_ADD,
  payload: todo,
})

export const updateTodo = (id) => ({
  type: TodoConstant.TODOS_UPDATE,
  payload: id,
})

export const deleteTodo = (id) => ({
  type: TodoConstant.TODOS_DELETE,
  payload: id,
})

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({
      type: TodoConstant.TODOS_REQUEST,
    })
    const { data } = await Axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    dispatch({
      type: TodoConstant.GET_TODOS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TodoConstant.TODOS_FAIL,
      payload: error.response && error.message,
    })
  }
}
