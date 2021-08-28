import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const Post = () => {

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id, postId } = useParams();

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  const getPost = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      let post = await res.json();
      setPost(post);
    } catch(err) {
      console.log(err.message)
    }
  };

  const getComments = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      let comments = await res.json();
      setComments(comments);
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <section className='p-8'>
      <div className="border-b-2">
        <h1 className='font-bold'>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      <div className="border-b-2 mb-4 pt-4">
        <h2 className='font-bold'>Comentarios</h2>
        {
          comments.map(comment => {
            return (
              <div className='border-b mb-4' key={comment.id}>
                <p>{comment.body}</p>
              </div>
            )
          })
        }
        <p>{post.body}</p>
      </div>
      <Link to={`/users/${id}`}>Regresar a la página de usuario</Link>
    </section>
  )
}

export default Post;