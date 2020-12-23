import React, { useState, forwardRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'

const Modal = forwardRef((props, ref) => {
  const [display, setdisplay] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    }
  })

  const open = () => {
    setdisplay(true)
  }

  const close = () => {
    setdisplay(false)
  }

  if (display) {
    return ReactDOM.createPortal(
      <div className='modal-wrapper absolute top-0 right-0 bottom-0 left-0'>
        <div
          onClick={close}
          className='fixed top-0 right-0 bottom-0 left-0  bg-gray-400 opacity-80 z-40'
        />
        <div className='card fixed inset-x-0 shadow-xl bg-white w-3/4 md:w-2/5 mx-auto -mt-1 rounded-lg rounded-t-none z-50'>
          {props.children}
        </div>
      </div>,
      document.getElementById('modal-root')
    )
  }

  return null
})

export default Modal
