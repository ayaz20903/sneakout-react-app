import React, {Component} from 'react';
import logo from './logo.svg';
import {Switch , Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Product_list from './components/Product_list';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Product_list}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
    </React.Fragment> 
  );
}

export default App;
