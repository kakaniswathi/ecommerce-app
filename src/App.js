import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
      </div>
    </Router>
  );
};

export default App;

