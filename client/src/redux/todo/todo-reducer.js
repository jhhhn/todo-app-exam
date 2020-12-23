import TodoConstant from './todo-constant'
import {
  todoDelete,
  todoUpdate,
  addTodo,
  markComplete,
  todoFilter,
} from './todo-utils'

const INITIAL_STATE = {
  todos: [],
  loading: false,
  success: false,
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
        success: true,
        loading: false,
      }

    case TodoConstant.TODOS_ADD:
      return {
        ...state,
        todos: addTodo(state.todos, payload),
        success: true,
        loading: false,
      }

    case TodoConstant.TODOS_UPDATE:
      return {
        ...state,
        todos: todoUpdate(state.todos, payload),
        success: true,
        loading: false,
      }

    case TodoConstant.TODOS_MARKCOMPLETE:
      return {
        ...state,
        todos: markComplete(state.todos, payload),
        loading: false,
      }

    case TodoConstant.TODOS_DELETE:
      return {
        ...state,
        todos: todoDelete(state.todos, payload),
        success: true,
        loading: false,
      }

    case TodoConstant.TODOS_FILTER:
      return {
        ...state,
        // todos: todoFilter(state.todos, payload),

        todos: [...payload],
        success: true,
        loading: false,
      }

    case TodoConstant.TODOS_FAIL:
      return {
        ...state,
        error: 'Error in todo',
        success: false,
        loading: false,
      }

    default:
      return state
  }
}

export default todos
