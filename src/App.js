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
import './App.css';


function ShopApp() {
  const [items, setItems] = useState([]);

  //USE EFFECT
  useEffect(() => {
    //get object that references database
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

    const newState = [];

    const data = response.val();

    for (let key in data) {
      newState.push(data[key]);
    }

    setItems(newState);
      // console.log(response.val());
    })
  }, [])

  
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <p>{item}</p>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default ShopApp;
