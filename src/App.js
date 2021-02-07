import React, {useState} from 'react'

import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotalBlance from './components/CartTotalBlance';
import data from './Data'

function App() {
  const [cartItems, setCartIems] = useState(data);
 
  return (
    <div className="App">
      <Header/>
      <div className = "main_Component">
        <hr/>
       <CartItems  items = {cartItems} setCartIems ={setCartIems}/>

       <CartTotalBlance items = {cartItems}/> 
      </div>
      </div>
  );
}

export default App;
