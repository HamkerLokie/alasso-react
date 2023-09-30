import React from 'react'
import Skeleton from './Skeleton'

const SkeletonDisplay = () => {
  const lines = [...Array(100).keys()].map(i => {
    return <Skeleton key={i} classes='text width-100' />
  })
  return (
    <div>
      <div className='skeleton-admin'>
        <Skeleton classes='title width-50' />
        {lines}
      </div>
    </div>
  )
}

export default SkeletonDisplay
