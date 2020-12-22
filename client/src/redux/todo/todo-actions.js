import Axios from 'axios'
import TodoConstant from './todo-constant'

export const addTodo = (todo) => async (dispatch) => {
  dispatch({
    type: TodoConstant.TODOS_REQUEST,
  })
  dispatch({
    type: TodoConstant.TODOS_ADD,
    payload: todo,
  })
}

export const completeTodo = (id) => async (dispatch) => {
  dispatch({
    type: TodoConstant.TODOS_REQUEST,
  })
  dispatch({
    type: TodoConstant.TODOS_MARKCOMPLETE,
    payload: id,
  })
}

export const updateTodo = (dataToUpdate) => ({
  type: TodoConstant.TODOS_UPDATE,
  payload: dataToUpdate,
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
    const { data } = await Axios.get('/todos?_limit=5')
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
