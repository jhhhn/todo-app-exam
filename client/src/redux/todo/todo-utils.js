export const todoDelete = (prevTodos, todoIdToDelete) => {
  const newTodos = prevTodos.filter((i) => i.id !== todoIdToDelete)
  return newTodos
}

export const todoUpdate = (prevTodos, newTodo) => {
  const newTodos = prevTodos.map((i) => {
    if (i.id === newTodo.id) {
      return { id: i.id, title: newTodo.title, completed: newTodo.completed }
    } else {
      return i
    }
  })
  return newTodos
}

export const addTodo = (prevTodos, todo) => {
  /* -------------------------------------------------------------------------- */
  /*                  easy way to generate random id Date.now() lol             */
  /* -------------------------------------------------------------------------- */
  const newTodos = {
    id: Date.now(),
    title: todo,
    completed: false,
  }
  return [...prevTodos, newTodos]
}

export const markComplete = (prevTodos, id) => {
  const newTodos = prevTodos.map((i) => {
    if (i.id === id) {
      return { ...i, completed: !i.completed }
    } else {
      return i
    }
  })

  return newTodos
}
