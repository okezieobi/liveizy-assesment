import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/layouts/Register';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
