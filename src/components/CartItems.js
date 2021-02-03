import React from 'react'
import './CartItems.css'
import ind_Iteam from './ind_Iteam'
function CartItems() {
    return (
        <div className = "list_Of_Items">
            <h1>Items</h1>
        <hr/>
        <div className = "items-list">
             <ind_Iteam />
        </div>
        </div>
    )
}

export default CartItems
