import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CartContext ,CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import StreetFood from './pages/StreetFood';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
          <Route path="/login">
              <LoginPage />
            </Route>
          <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/cart">
              <CartContext.Consumer>
                {(props) => <CartPage value={props}/>}
              </CartContext.Consumer>
            </Route>
            <Route path="/food">
              <FoodPage />
            </Route>
            <Route path="/drink">
              <DrinkPage />
            </Route>
            <Route path="/streetfood">
              <StreetFood />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
