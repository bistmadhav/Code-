import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotalBlance from './components/CartTotalBlance';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className = "main_Component">
          <CartItems />
          <CartTotalBlance/>
      </div>
      </div>
  );
}

export default App;
