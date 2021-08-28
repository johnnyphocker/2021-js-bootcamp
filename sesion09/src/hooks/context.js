import React, { createContext, useState, useContext } from 'react'

export const NameContext = createContext();
export const ErrorContext = createContext();
export const UserContext = createContext();
export const CompanyContext = createContext();

const Nieto = () => {

  const { name, setName } = useContext(NameContext);

  return (
    <div>
      <h1>Child</h1>
      <p>Nombre: { name }</p>
      <input onChange={e => setName(e.target.value)} type="text" value={name} />
    </div>
  )
}

const Hijo = () => {
  return (
    <div>
      <Nieto />
    </div>
  )
}


const Context = () => {

  const [name, setName] = useState('')

  return (
    <NameContext.Provider value={{ name, setName }}>
      <Hijo />
    </NameContext.Provider>
  )
}

export default Context;
