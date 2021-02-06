import React from 'react'
import './CartItems.css'

function CartItems({items}) {
    
    return (
        <div className = "list_Of_Items">
            <h1>Items</h1>
            <hr />
    { items.map((item) => 
    
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
                                <select className ="opt">
                                    <option  value="1"> Qty:1</option>
                                    <option  value="1"> Qty:2</option>
                                    <option  value="1"> Qty:3</option>
                                    <option  value="1"> Qty:4</option>
                                    <option  value="1"> Qty:5</option>
                                    <option  value="1"> Qty:6</option>
                                    <option  value="1"> Qty:7</option>
                                    <option  value="1"> Qty:8</option>
                                    <option  value="1"> Qty:9</option>
                                    <option  value="1"> Qty:10</option>
                                    <option  value="1"> Qty:11</option>
                                    <option  value="1"> Qty:12</option>
                                </select>
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
    )}

         </div>
     
 )   
}

export default CartItems
