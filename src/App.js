import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/home.component';
import './App.scss';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} component={HomePage}></Route>
        <Route path={'/hats'} component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
