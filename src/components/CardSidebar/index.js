import React from 'react'
import { CardSidebarWrapper } from './Cardsidebar.Element'

const CardSidebar = ({isOpen, toggle, cartItems, onAddToCart}) => {
    return (
        <CardSidebarWrapper isOpen={isOpen} onClick={toggle}>
            <h1>Your Cart</h1>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}

                {}
                
            </div>
        </CardSidebarWrapper>
    )
}

export default CardSidebar
