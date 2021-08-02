import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const cartIconStyle = {
    backgroundColor: '#F59E08',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px',
  }
    return (
      <div>
        <nav className="container mx-auto flex items-center justify-between py-3 px-3">
          <Link to="/" className="mx-2">
            <img src="/images/logo.png" alt="logo" style={{ height: 45 }} />
          </Link>
          <ul className="flex items-center">
            <li className="mx-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2">
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <div style={cartIconStyle} className="ml-2">
                  <span className="text-white">10</span>
                  <img src="/images/cart.png" alt="cart-icon" className="mx-2" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navbar;
