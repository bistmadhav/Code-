import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotalBlance from './components/CartTotalBlance';
import data from './Data'

function App() {
  const [cartItems, setCartItems] = useState(data);
 
  return (
    <div className="App">
      <Header/>
      <div className = "main_Component">
       <CartItems  items = {cartItems}/>

       <CartTotalBlance/> 
      </div>
      </div>
  );
}

export default App;
