import React, { useState } from 'react'

const State = () => {

  const [value, setValue] = useState(''); // strings, numbers, booleans, arrays, objects
  const [counter, setCounter] = useState(0);
  
  const handleInput = (e) => setValue(e.target.value);
  const handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <p>nombre: { value }</p>
      <p>contador: { counter }</p>
      <br />
      <input onChange={handleInput} type="text" value={value} />
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default State;