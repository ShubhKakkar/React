import React from 'react';

function StorePicker() {
    return (
        <div>
            <form className="store-selector">
                <h2>Please Enter A Store</h2>
                <input type="text" placeholder="Store Name" />
                <button type="submit">Visit Store ➡ </button>
            </form>
        </div>
    )
}

export default StorePicker;
