import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar--logo">
                <h1>MERN Shopping Cart</h1>
            </div>
            <ul className="navbar--links">
                <li className="cart">
                    <Link to={`/cart`}>
                        <AiOutlineShoppingCart className="cart--icon"/> Cart <span className="cart--counter">0</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/`}>Shop</Link>
                </li>
            </ul>
            {/* Hamburguer Menu activates with media-queries */}
            <div className="hamburguer--menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default NavBar;
