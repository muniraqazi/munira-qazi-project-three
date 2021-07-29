// Shop App MVP

// Display firebase items on the page 
  // -empty state to hold items 
  // -get items from firebase - one time connection (empty useEffect  array)
  // -put items in state 
  // -print JSX on page

// Let user add items to cart 
  // -button for add to cart 
  // -onclick event handler
  
// Let user delete item from cart
  // -button calls funtion that will delete 
  // -need unique key for items 

  // Stretch Goals 
    // -scroll to top
    // -cart reset button removes everything 
    // -quanitity counter instead of multiples in the cart 
    // -dropdown menu to filter items 
import { useEffect, useState } from 'react';
import firebase from './firebase';
// import './App.css';
import Header from './Header';
import Main from './Main';
import Cart from './Cart';
import data from './data';

function App() {
  const {items} = data;

  const [cartItems, setCartItems] = useState([]);
  const [addToCart, setAddToCart] = useState("");


  //USE EFFECT
  useEffect(() => {
    //get object that references database
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const data = response.val();
      
      const newArray = [];


    for (let propertyName in data) {
      newArray.push(data[propertyName]);

      const itemObj = {
        key: propertyName,
        name: data[propertyName]
      }

      newArray.push(itemObj);
    }

    console.log(newArray);
    setCartItems(newArray);
    })
  }, [])
  //empty useEffect array means it will only run it once
  //END OF USE EFFECT

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

  const handleDelete = (keyOfItemToDelete) => {
    //create a reference to our firebase database
    const dbRef = firebase.database().ref();  
    //go get the specific property to delete in firebase and remove it
    dbRef.child(keyOfItemToDelete).remove();
  }
  
  return (
    <div className="app">
      <Header/>
      <div className="row">
      <Main items={items}/>
      <Cart cartItems={cartItems}/>
      
      </div>
    </div>
  )
}

export default App;
