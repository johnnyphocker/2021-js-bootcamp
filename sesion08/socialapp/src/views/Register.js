import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../firebase';

import { Container } from '../components/Container';

class Register extends Component {

  state = {
    user: {
      email: '',
      password: ''
    }
  }

  handleInput = e => {
    this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } });
  }

  handleSubmit = e => {
    e.preventDefault();
    let { email, password }  = this.state.user;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        return <Redirect to='/login' />
      })
      .catch(err => console.error(err.message));
  }

  render() {

    return (
      <Container className='p-4'>
        <form onSubmit={this.handleSubmit} className='grid grid-cols-3 gap-4'>
          <input name='email' onChange={this.handleInput} className='rounded border border-main_light' type="text" />
          <input name='password' onChange={this.handleInput} className='rounded border border-main_light' type="text" />
          <input className='btn btn-main' type="submit" value="Crea usuario" />
        </form>
      </Container>
    )
  }
}

export default Register;