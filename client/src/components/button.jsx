import React from 'react'
import { Link } from 'react-router-dom'

const CustomBtn = (props) => {
  const buttons = () => {
    let template = ''
    switch (props.type) {
      case 'link':
        template = (
          <Link
            className={props.className}
            disabled={props.disabled}
            to={props.linkTo}
          >
            {props.title}
          </Link>
        )
        break
      case 'button':
        template = (
          <button
            className={props.className}
            onClick={() => {
              props.runAction()
            }}
          >
            {props.title}
          </button>
        )
        break

      case 'submit':
        template = (
          <input
            type='submit'
            className={props.className}
            value={props.title}
          />
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
