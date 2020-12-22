import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='font-bold text-2xl p-8'>Todo App List Exam</h2>

      <p>John Allen de Chavez</p>
      <p>
        <a
          href='mailto:johnllendechavez23@gmail.com'
          className='hover:text-gray-400'
        >
          johnllendechavez23@gmail.com
        </a>
      </p>
      <p className='text-xs p-8'>12 / 23 / 2020</p>
    </div>
  )
}

export default About
