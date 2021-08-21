import React from 'react';

const Card = ({ item }) => {

  return (
    <div className='card'>
      <p className='border-b mb-2 text-xs'>{ item.user }</p>
      <h2 className='font-bold text-lg'>{item.title}</h2>
      <p className='text-sm'>{item.body}</p>
    </div>
  )
}

export default Card;