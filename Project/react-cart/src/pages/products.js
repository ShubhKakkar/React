import React from 'react';
import Items from '../Components/Items';

function products() {
    return (
      <div>
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

export default products;
