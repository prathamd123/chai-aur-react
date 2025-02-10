import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='h-90 flex items-center justify-center text-4xl font-semibold bg-gray-700 text-white'>
      User:{id}
    </div>
  )
}

export default User
