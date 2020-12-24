import React from 'react'
import Loading from './loading'

const LoadMore = ({ loadMore, loading, limit }) => {
  return (
    <div className='pb-8 m-8 flex justify-center'>
      {loading ? (
        <Loading />
      ) : (
        200 > 0 &&
        200 >= limit && (
          <h4
            className='hover:text-gray-400 cursor-pointer text-xl'
            onClick={() => loadMore()}
          >
            Load more
          </h4>
        )
      )}
    </div>
  )
}

export default LoadMore
