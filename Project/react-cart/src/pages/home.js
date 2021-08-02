import React from "react";
import Items from "../Components/Items";

function home() {
  return (
    <div>
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between w-4/5">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-3xl font-bold">Don't wait!</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img
              src="/images/pizza.png"
              alt="pizza-img"
              className="w-3/5 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="items mx-auto conatiner py-16">
        <div className="w-4/5 mx-auto">
          <h1 className="text-lg font-bold my-8">Products</h1>
          <div className="grid grid-cols-5 my-8 gap-24">
            <Items />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
