import React from 'react';
import { Switch, Route } from 'react-router-dom';

// hooks
import State from './hooks/state';
import Effect from './hooks/effect';
import Context from './hooks/context';
import Ref from './hooks/ref';
import Redux from './hooks/reducer';
import Memo from './hooks/memo';

// views
import Home from './views/Home';
import Users from './views/Users';
import Post from './views/Post';
import Companies from './views/Companies';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users/:id' component={Users} />
      <Route exact path='/users/:id/:postId' component={Post} />
      <Route exact path='/companies' component={Companies} />
    </Switch>
  );
}

export default App;
