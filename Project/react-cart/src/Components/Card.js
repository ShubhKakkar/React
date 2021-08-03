import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import  CartContext  from '../CartContext';

function Card(props) {
    const { name } = useContext(CartContext);
    return (
      <Link to={`/products/${props.id}`}>
        <div>
          <img src="/images/peproni.png" alt="pizza" />
          <div className="text-center">
            <h2 className=" text-lg font-bold py-2">{props.name}{name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
              {props.category}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">₹ {props.price}</span>
            <button className="py-1 px-4 bg-yellow-500 rounded-full font-bold">
              Add
            </button>
          </div>
        </div>
      </Link>
    );
}

export default Card;
