import React from 'react'
import './CartItems.css'



function CartItems({items, setCartItems, index}){

    const changingItem = (e) =>
    {
         console.log(e.target.value);
         const newItem = [...items];
         items[index].quantity = e.target.value;
         setCartItems(newItem);
    }
    
    return (
        <div className = "list_Of_Items">
            <h1>Items</h1>
            <hr />
    { items.map((item, index,changingItem) => 
           
            
            <div className = "Ind_Product">
          
            <div className = "ImageOfProduct">
               <hr/>
                 <img src = {process.env.PUBLIC_URL + '/items/'+ item.image} alt=""/>  
            </div>
                <div className = "iteamInfo">
                    <div className = "typeOfGrocery">
                        <h2>{item.title}</h2>

                    </div>
                   <div className = "StockOrNot" >
                        {item.stock}
                   </div>
                   <div className = "option">
                     <div  className = "number">
                                <select
                            
                             onChange ={changingItem}
                            value= {item.quantity}
                                className ="opt">
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
                    ${item.price}
                </div>
                
             
           </div>
    
    
    
    )}

         </div>
     
 ) 



}

export default CartItems
