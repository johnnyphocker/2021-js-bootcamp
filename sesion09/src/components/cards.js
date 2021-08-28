import React from 'react';
import { MainButton } from './buttons';

export const Card = ({ text, body, url }) => {
  return (
    <div className='rounded bg-primary-light p-4'>
      <h2>{ text }</h2>
      <p>{ body }</p>
      <MainButton className='bg-primary text-white py-4 px-8 inline-block' text={text} to={url} />
    </div>
  )
};

export const ImageCard = () => {
  return (
    <div>
      
    </div>
  )
};

export const BorderCard = () => {
  return (
    <div>
      
    </div>
  )
};
