import React from 'react';

export const Danger = ({ message, status }) => {
  return (
    <div className='bg-red-500 text-white p-4 mb-4'>
      { message }
    </div>
  )
};

export const Warning = () => {
  return (
    <div>
      warning
    </div>
  )
};

export const Success = () => {
  return (
    <div>
      success
    </div>
  )
};
