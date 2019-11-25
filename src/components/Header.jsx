import React from 'react';
import {Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user.png';
import cart from '../assets/static/cart.png';
import favorites from '../assets/static/favorites.png'

const Header = () => (
    <header className="header">
        <div className="header_logo">
            <Link to="/"><img className="header_logo--img" src={logo} alt="ZuperFit"/></Link>
        </div>
        <div className="header_profile">
            <div className="header_profile--cart">
                <Link to="/cart/Cart" className="header_profile--option"><img src={cart} alt="carrito"/></Link>
            </div>
            <div className="header_profile--cart">
                <Link to="/cart/WishList" className="header_profile--option"><img src={favorites} alt="favoritos"/></Link>
            </div>
            <div className="header_profile--user">
                <Link to="/cart" className="header_profile--option"><img src={userIcon} alt="cuenta"/></Link>
            </div>
        </div>
    </header>
);

export default Header;