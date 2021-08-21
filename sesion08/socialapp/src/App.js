import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from 'firebase';

import { Nav } from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import User from './views/User';

class App extends Component {

  state = {
    user: ''
  }

  // componentDidMount() {
  //   const user = firebase.auth().currentUser;
  //   this.setState({ user })
  //   console.log(this.state.user)
  // }

  getUser = (user) => {
    this.setState({ user })
  }

  render() {
    return (
      <BrowserRouter>
        <Nav user={this.state.user} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login'>
            <Login getUser={this.getUser} />
          </Route>
          <Route path='/registro' component={Register} />
          <PrivateRoute user={this.state.user} path='/usuario'>
            <User />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;