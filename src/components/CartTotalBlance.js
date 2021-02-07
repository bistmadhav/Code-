import React from 'react'
import './CartTotalBlance.css'

function CartTotalBlance() {
    return (
        <div className = "total_blance">
             <h2> Subtotal (0 items) = 
                 <span className = "Totalbalnce">
                     $0.00
                 </span>
             </h2>
             <button className = "btn">
                  Click here to checkout
             </button>
        </div>
    )
}

export default CartTotalBlance
