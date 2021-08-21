import React from 'react';


export const ButtonMain = (props) => {
  return (
    <button className={`btn ${props.islight ? 'bg-main_light' : 'btn-main'} ${props.islight ? 'text-secondary' : 'text-white'}`}>
      { props.text }
    </button>
  )
};

export const ButtonSecondary = (props) => {
  return (
    <button className="btn btn-secondary">
      { props.text }
    </button>
  )
}