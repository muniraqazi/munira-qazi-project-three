import React from 'react';

export default function Cart(props) {
  const {cartItems} = props;
  return (
    <aside className="col-1">
      <h2>My Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Your cart is empty!</div>}
      </div>
    </aside>
  )
}