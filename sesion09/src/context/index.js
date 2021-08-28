import React, { createContext } from 'react'

export const MyContext = createContext();

const Nieto = () => {
  return (
    <MyContext.Consumer>
      {
        (ctx) => {
          return (
            <>
              <h1>{ ctx.name }</h1>
              <button onClick={ctx.func}>click</button>
            </>
          )
        }
      }
    </MyContext.Consumer>
  )
}

const Papa = () => {
  return (
    <div>
      <Nieto />
    </div>
  )
}

const Abuelo = () => {
  return (
    <MyContext.Provider value={{name: 'jp', func: () => {console.log('hola desde provider')}}}>
      <Papa />
    </MyContext.Provider>
  )
}

export default Abuelo;
