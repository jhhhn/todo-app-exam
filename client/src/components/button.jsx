import React from 'react'
import { Link } from 'react-router-dom'

const CustomBtn = (props) => {
  const buttons = () => {
    let template = ''
    switch (props.type) {
      case 'link':
        template = (
          <Link className='btn btn--link' to={props.linkTo}>
            {props.title}
          </Link>
        )
        break
      case 'button':
        template = (
          <button
            className='btn btn--button'
            onClick={() => {
              props.runAction()
            }}
          >
            {props.title}
          </button>
        )
        break

      default:
        template = ''
    }

    return template
  }

  return buttons()
}

export default CustomBtn
