import React from 'react'
import './CartTotalBlance.css'




function CartTotalBlance({items}) {

const totalBlance =() =>
{
   let totalMoney =0;
   items.forEach((item) =>{
      totalMoney += (item.price * item.quantity)
   }) 
   return totalMoney;
}

    return (
        <div className = "total_blance">
             <h2> Subtotal ({items.length} items) = 
                 <span className = "Totalbalnce">
                     ${totalBlance()}
                 </span>
             </h2>
             <button className = "btn">
                  Click here to checkout
             </button>
        </div>
    )
}

export default CartTotalBlance
