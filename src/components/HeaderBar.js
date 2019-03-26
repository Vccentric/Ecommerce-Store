import React from 'react';

const HeaderBar = (props) => {
    return (
        <header id="headerbar">
            <div className="logo">Demo Store</div>
            <ul className="menubar">
                <li>Shop</li>
                <li>Sales</li>
                <li>Coming Soon</li>
                <li>Contact Us</li>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
        </header>
    );
};

export default HeaderBar;
