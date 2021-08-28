import React, { useState, useEffect, useReducer } from 'react'
import { countStore, userStore } from '../store';
// STORE, ACTIONS Y REDUCER para trabajar en modalidad REDUX

const reducer = (state, action) => { // es un filtro de ACTIONS
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'SET_NAME':
      return {
        name: action.payload
      }
    default:
      return state;
  }
};

// states para users, companies, posts, etc
// const store = {
//   count: 0
// }

const Redux = () => {

  // const [state, dispatch] = useReducer(reducer, estadoInicial)

  const [countState, countDispatch] = useReducer(reducer, countStore)
  const [userState, userDispatch] = useReducer(reducer, userStore)
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      setUsers(users);
    } catch (error) {
      console.error(error.message);
    }
  }, [value]);

  // dispatch({ type: 'INCREMENT' })
  // dispatch({ type: 'SET_TITLE, payload: e.target.value })

  return (
    <div>
      <p>{ countState.count }</p> 
      <p>nombre: { userState.name }</p>
      <p>value: { value }</p>
      <input onChange={(e) => setValue(e.target.value)} placeholder='Cambiar value' type="text" />
      <br />
      <input placeholder='Cambiar nombre' onChange={(e) => userDispatch({ type: 'SET_NAME', payload: e.target.value })} type="text" />
      <button onClick={() => countDispatch({ type: 'INCREMENT' })}>Incrementar</button>
      <button onClick={() => countDispatch({ type: 'DECREMENT' })}>Decrementar</button>
      {
        users.map((user, i) => <p key={i}>{ user.name }</p>)
      }
    </div>
  )
};

export default Redux;
