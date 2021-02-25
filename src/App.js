import React from 'react'
import Counter from './components/pages/Counter';
import RPS from './components/pages/RPS';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route exact path='/counter'>
          <Counter></Counter>
        </Route>
        
        <Route exact path='/rps'>
          <RPS/>
        </Route>

        <Route path="*">
            <NotFound></NotFound>
        </Route>
      
      </Switch>

    </Router>
  );
}