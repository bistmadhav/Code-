import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import CartItems from './CartItems';
import CartTotalBlance from './CartTotalBlance';

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
