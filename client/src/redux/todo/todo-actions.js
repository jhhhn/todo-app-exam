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

export const getTodos = (
  skip,
  limit,
  completeFilter,
  previousState = []
) => async (dispatch) => {
  /* ------------ due to limitation of jsonplaceholder i use get req instead post req ------------ */

  try {
    dispatch({
      type: TodoConstant.TODOS_REQUEST,
    })

    if (previousState && completeFilter !== null) {
      const data = await Axios.get(
        `/todos?completed=${completeFilter}&_start=${skip}&_limit=${limit}`
      ).then((res) => {
        let newState = [...previousState, ...res.data]
        return newState
      })
      dispatch({
        type: TodoConstant.GET_TODOS,
        payload: data,
      })
    } else if (completeFilter !== null && !previousState) {
      const { data } = await Axios.get(
        `/todos?completed=${completeFilter}&_start=${skip}&_limit=${limit}`
      )
      dispatch({
        type: TodoConstant.GET_TODOS,
        payload: data,
      })
    } else if (completeFilter === null && previousState) {
      const data = await Axios.get(
        `/todos?_start=${skip}&_limit=${limit}`
      ).then((res) => {
        let newState = [...previousState, ...res.data]
        return newState
      })
      dispatch({
        type: TodoConstant.GET_TODOS,
        payload: data,
      })
    } else {
      const { data } = await Axios.get(`/todos?_start=${skip}&_limit=${limit}`)
      dispatch({
        type: TodoConstant.GET_TODOS,
        payload: data,
      })
    }
  } catch (error) {
    console.log(error)
  }
}
