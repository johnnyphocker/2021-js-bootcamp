import React, { useRef } from 'react'

export const Ref = () => {

  const input = useRef();

  const focus = () => {
    input.current.focus()
  };
  
  const blur = () => {
    input.current.blur()
  };

  return (
    <div>
      <input ref={input} type="text"  />
      <button onClick={focus}>focus</button>
      <button onClick={blur}>blur</button>
    </div>
  )
}

export default Ref;

//debounce 
// useeffect(() => {
//   setTimeout(() => {
//     Hasta que pasan 600 ms se hace el fetch
//     if(name === input.current.value) {
//       aquí se hace el fetch
//     }
//   }, 600);
// })