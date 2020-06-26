import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Food from './pages/Food';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    <Switch>
          <Route path="/food">
            <Food/>
          </Route>
          <Route path="/drink">
            <div>đồ uống</div>
          </Route>
          <Route path="/streetfood">
            <div>ăn vặt</div>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
