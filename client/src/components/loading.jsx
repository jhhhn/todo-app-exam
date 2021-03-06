import React from 'react'
import { ReactComponent as GlobeIcon } from '../assets/icons/globe.svg'
const Loading = () => {
  return (
    <div className='animate-spin w-8 h-8 mx-4'>
      <GlobeIcon />
    </div>
  )
}

export default Loading
