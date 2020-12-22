import TodoConstant from './todo-constant'
import { todoDelete, todoUpdate } from './todo-utils'

const INITIAL_STATE = {
  todos: [],
}

const todos = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TodoConstant.TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case TodoConstant.GET_TODOS:
      return {
        ...state,
        todos: [...payload],
        loading: false,
      }

    case TodoConstant.TODOS_ADD:
      return {
        ...state,
        todos: payload,
        loading: false,
      }

    case TodoConstant.TODOS_UPDATE:
      return {
        ...state,
        todos: todoUpdate(state.todos, payload),
        loading: false,
      }

    case TodoConstant.TODOS_DELETE:
      return {
        ...state,
        todos: todoDelete(state.todos, payload),
        loading: false,
      }

    case TodoConstant.TODOS_FAIL:
      return {
        ...state,
        error: 'Error in todo',
        loading: false,
      }

    default:
      return state
  }
}

export default todos
