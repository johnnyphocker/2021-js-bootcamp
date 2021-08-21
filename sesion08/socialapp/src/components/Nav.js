import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';

export const Nav = (props) => {

  // estado de las funciones
  // const [user, setUser] = useState({name: 'jp'})

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        return <Redirect path='/' />
      })
      .catch(err => console.error(err.message));
  }

  // Ciclo de vida de las funciones
  // useEffect(() => {
  //   const firebaseuser = firebase.auth().currentUser;
  //   console.log(firebaseuser)
  // }, []);


  return (
    <nav className='px-4 py-2 bg-main text-white flex justify-between'>
      <div>
        logo
      </div>
      <ul className='flex'>
        <li className='mr-4'>
          <Link to='/'>Inicio</Link>
        </li>
        {
          props.user.length ? (
            <>
              <li className='mr-4'>
                <Link to={`/usuario`}>Usuario</Link>
              </li>
              <li>
                <button onClick={handleLogout} >Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className='mr-4'>
                <Link to='/login'>Login</Link>
              </li>
              <li className='mr-4'>
                <Link to='/registro'>Crear cuenta</Link>
              </li>
            </>
          )
        }
      </ul>
    </nav>
  )
}


