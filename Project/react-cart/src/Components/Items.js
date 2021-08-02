import React, { useState, useEffect } from "react";
import pizza from "../helpers";
import Card from './Card';

function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(pizza);
  }, []);
  return (
    <>
    {items.map((item) => {
      // console.log(props.name);
      return <Card key={item.id} name={item.name} price={item.price} category={item.category} id={item.id}/>
    })}
  </>
  )
}

export default Items;
