export const todoDelete = (prevTodos, todoIdToDelete) => {
  const newTodos = prevTodos.filter((i) => i.id !== todoIdToDelete)
  return newTodos
}

export const todoUpdate = (prevTodos, newTodo) => {
  const newTodos = prevTodos.map((i) => {
    if (i.id === newTodo.id) {
      return { id: i.id, todo: newTodo.todos }
    } else {
      return i
    }
  })
  return newTodos
}
