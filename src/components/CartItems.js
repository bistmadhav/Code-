import React from 'react'
import './CartItems.css'

function CartItems() {
    return (
        <div className = "list_Of_Items">
            <h1>Items</h1>
    <hr />
            <div className = "Ind_Product">
            <div className = "ImageOfProduct">
                 <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZiDzN8XqpVvs-hfcSd-N-8ur3kbXyIw_CA&usqp=CAU" />  
            </div>
                <div className = "iteamInfo">
                    <div className = "typeOfGrocery">
                        <h2>Broccoli</h2>

                    </div>
                   <div className = "StockOrNot" >
                        In stock
                   </div>
                   <div className = "option">
                     <div  className = "number">

                     </div>
                    <div className = "deleteBtn">
                        Delete
                    </div>
                   </div>
                </div>
                <div className = "Price">
                    $0.50
                </div>
            </div>
        
        
         </div>
     
    )
}

export default CartItems
