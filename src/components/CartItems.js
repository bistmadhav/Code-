import React from 'react'
import './CartItems.css'
import indv_CartItems from './indv_CartItems'
function CartItems() {
    return (
        <div className = "list_Of_Items">
            <h1>Items</h1>
        <hr/>
        <div className = "items-list">
            <indv_CartItems/>
        </div>
        </div>
    )
}

export default CartItems
