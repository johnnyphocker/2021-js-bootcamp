import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const Users = () => {

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUser();
    getPosts();
  }, []);

  const getUser = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      let user = await res.json();
      setUser(user);
    } catch(err) {
      console.log(err.message)
    }
  };

  const getPosts = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      let posts = await res.json();
      setPosts(posts);
    } catch(err) {
      console.log(err.message)
    }
  };

  if (isEmpty(user)) return 'Loading'; 

  return (
    <section className='p-8'>
      <div className="border-b-2">
        <h1>Nombre: { user.name }</h1>
        <p>Email: { user.email }</p>
        <p>Teléfono: { user.phone }</p>
        <p>Website: { user.website }</p>
        <p>Direción: { user.address.street } { user.address.suite }</p>
        <p>Ciudad: { user.address.city }</p>
        <p>Empresa: { user.company.name }</p>
      </div>
      <div className="border-b-2">
        <h2>Posts</h2>
        {
          posts.map(post => {
            console.log(post)
            return (
              <div key={post.id}>
                <p>{post.title}</p>
                <Link className='inline-block bg-primary text-white px-8 py-4' to={`/users/${post.userId}/${post.id}`}>Ir a post</Link>
              </div>
            )
          })
        }
      </div>
      <Link to='/'>Regresar al inicio</Link>
    </section>
  )
}

export default Users;