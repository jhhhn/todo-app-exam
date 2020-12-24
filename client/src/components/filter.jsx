import React from 'react'
import CustomBtn from './button'
import Loading from './loading'

const Filter = ({ filterTodo, loading }) => {
  const handleFilter = (data) => {
    filterTodo(data)
  }
  return (
    <div className='flex justify-end items-center'>
      {loading && <Loading />}
      <CustomBtn
        className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-gray-500 text-gray-200 font-extrabold
           tracking-widest m-3'
        type={'button'}
        title={'All'}
        runAction={() => handleFilter(null)}
      />
      <CustomBtn
        className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-green-500 text-gray-200 font-extrabold
           tracking-widest m-3'
        type={'button'}
        title={'Completed'}
        runAction={() => handleFilter(true)}
      />
      <CustomBtn
        className='p-2 cursor-pointer shadow-md hover:shadow-inner rounded-md flex-none bg-red-500 text-gray-200 font-extrabold
            tracking-widest m-3'
        type={'button'}
        title={'Pending'}
        runAction={() => handleFilter(false)}
      />
    </div>
  )
}

export default Filter
