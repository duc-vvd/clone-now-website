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
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import StreetFood from './pages/StreetFood';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    <Switch>
          <Route path="/food">
            <FoodPage/>
          </Route>
          <Route path="/drink">
            <DrinkPage/>
          </Route>
          <Route path="/streetfood">
            <StreetFood/>
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
