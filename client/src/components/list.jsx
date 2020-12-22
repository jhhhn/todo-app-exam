import React from 'react'
import CustomBtn from './button'

const List = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {console.log(todos)}
      {todos.map((i) => (
        <li key={i.id}>
          {i.title}
          <CustomBtn
            type={'link'}
            linkTo={`/todo-update/${i.id}`}
            title={'update'}
          />
          <CustomBtn
            type={'button'}
            runAction={() => deleteTodo(i.id)}
            title={'delete'}
          />
        </li>
      ))}
    </ul>
  )
}

export default List

//plan
// card list -> delete todos / mark complete / update todo
