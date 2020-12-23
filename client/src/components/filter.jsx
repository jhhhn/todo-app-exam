import React from 'react'
import { useDispatch } from 'react-redux'
import { filterTodo } from '../redux/todo/todo-actions'
import CustomBtn from './button'

const Filter = () => {
  const dispatch = useDispatch()
  const handleFilter = (data) => {
    dispatch(filterTodo(data))
  }
  return (
    <div className='flex justify-end items-center'>
      <CustomBtn
        className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-red-500 text-gray-200 font-extrabold
            tracking-widest m-3'
        type={'button'}
        title={'uncomplete'}
        runAction={() => handleFilter(false)}
      />
      <CustomBtn
        className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-green-500 text-gray-200 font-extrabold
           tracking-widest m3'
        type={'button'}
        title={'complete'}
        runAction={() => handleFilter(true)}
      />
    </div>
  )
}

export default Filter
