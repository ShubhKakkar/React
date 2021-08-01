import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

function App() {
    return (
      <div>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market"/>
          </div>
          <Order />
          <Inventory />
        </div>
      </div>
    );
}

export default App