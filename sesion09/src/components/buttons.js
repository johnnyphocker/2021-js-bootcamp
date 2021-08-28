import React from 'react';
import { Link } from 'react-router-dom';

export const MainButton = ({ text, to, className }) => {
  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  )
};

export const SecondayButton = () => {
  return (
    <div>
      
    </div>
  )
};

export const LinkButton = () => {
  return (
    <div>
      
    </div>
  )
};