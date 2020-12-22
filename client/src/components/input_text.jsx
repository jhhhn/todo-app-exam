import React from 'react'

const InputText = ({ handleChange, className, ...props }) => {
  return (
    <div>
      <input
        className={className}
        onChange={handleChange}
        type='text'
        {...props}
      />
    </div>
  )
}

export default InputText
