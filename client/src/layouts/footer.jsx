import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center pb-4'>
      <span>
        &copy;{new Date().getFullYear()}{' '}
        <a href='https://github.com/jhhhn' target='_blank'>
          jhhhn
        </a>
      </span>
    </footer>
  )
}

export default Footer
