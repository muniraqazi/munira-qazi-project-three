import React from 'react';

export default function Header(props) {
  return (
    <header className="row center">
      <div>
        <a href="#/">
          <h1>Munira's Super Cool Shop</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>
      </div>
    </header>
  )
}