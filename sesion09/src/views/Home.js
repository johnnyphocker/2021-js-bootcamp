import React, { useState, useEffect } from 'react';

import { Danger } from '../components/alerts';
import { Card } from '../components/cards';

const Home = () => {

  const [alert, setAlert] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let users = await res.json();
      setUsers(users)
    } catch(err) {
      setAlert(err.message)
      setTimeout(() => {
        setAlert('')
      }, 5000);
    }
  };

  return (
    <section>
      <h1>Users</h1>
      {alert && <Danger message={alert} />}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {
          !users.length ? 'Loading' : (
              users.map(user => <Card key={user.id} text={user.name} body={user.email} url={`/users/${user.id}`} />
            )
          )
        }
      </div>
    </section>
  )
};

export default Home;