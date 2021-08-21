import React, { Component } from 'react';
import { db } from '../firebase';

import { Container } from '../components/Container';
import Section from '../components/Section';
import Card from '../components/Card';
import Loader from '../components/Loader';

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    let posts = [];
    db.collection('posts').get().then(snapshot => {
      snapshot.forEach(doc => {
        posts = [...posts, {...doc.data(), id: doc.id}]
        this.setState({ posts });
      })
    }).catch(err => console.error(err.message));
  }


  render() {
    return (
      <Container className='bg-main_light px-8'>
        <Section className='mb-4 py-4'>
          <h1 className='mb-4'>Lista de posts</h1>
          <div className='grid grid-cols-3 gap-4'>
            {
              !this.state.posts.length ? (
                <Loader />
              ) : this.state.posts.map(item => {
                return <Card item={item} />
              })
            }
          </div>
        </Section>
      </Container>
    )
  }
}

export default Home;