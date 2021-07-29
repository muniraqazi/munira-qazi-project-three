import React from 'react';
import Item from './Item';

export default function Main(props) {
  const {items} = props;
  return (
    <main className="col-2">
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </main>
  )


  
}