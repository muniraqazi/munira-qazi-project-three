// import { useEffect, useState } from 'react';
import React from 'react'
import firebase from 'firebase';


// const [addToCart, setAddToCart] = useState("");

export default function Item(props) {
  const {item} = props;

  // const handleAdd = (event) => {
  //   setAddToCart(event.target.value);
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   //we create a reference to our firebase database:
  //   const dbRef = firebase.database().ref();

  //   dbRef.push(addToCart);

  //   setAddToCart("");
  // }

  return (
    <div>
      <img className="small" src={item.image} alt={item.name}/>
      <h3>{item.name}</h3>
      <div>${item.price}</div>
      <div>
        <button
        // id="addToCart"
        // onClick={handleAdd}
        >Add to Cart
        </button>
      </div>
    </div>
  )
}
