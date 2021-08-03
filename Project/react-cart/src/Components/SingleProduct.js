import React from "react";
import { useParams , useHistory } from 'react-router-dom';
import pizza from '../helpers';

function SingleProduct() {
    const params = useParams();
    const id = params.id;
    const foundPizza = pizza[id - 1];
    const history = useHistory();
    const handleBackButton = () => {
        history.goBack();
    }
  return (
    <div className="center mx-auto mt-12 w-4/5">
      <button className="mb-12 font-bold" onClick={handleBackButton}>Back</button>
      <div className="flex">
        <img src="/images/peproni.png" alt="pizza" />
        <div className="mx-16">
                  <h1 className="text-xl font-bold">{foundPizza.name}</h1>
                  <div className="text-md">{foundPizza.category}</div>
                  <div className="font-bold mt-2">₹ {foundPizza.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
