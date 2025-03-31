import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import classes from '../modules/Header.module.scss'
import burger from '../assets/Burger.svg'
import search from '../assets/search-icon.svg';
import cart from '../assets/cart-icon.svg';
import favorites from '../assets/favorites-icon.svg';
import profile from '../assets/profile-icon.svg';
import logo from '../assets/cyber-logo.svg'

export const Header = () => {
    const [navItems, setNavItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/menus/navbarItems')
            .then(response => {
                setNavItems(response.data);
                console.log('Navbar items:', response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    return (
        <>
            <header className={`${isOpen ? classes['header-wrapper-open'] : classes['header-wrapper']}`}>
                <figure>
                    <Link className={classes['navlink']} to={'/'}>
                        <img src={logo} alt="cyber-logo"/>
                    </Link>
                </figure>


                <figure className={classes['burger-menu']} onClick={toggleMenu}>
                    <img src={burger} alt="burger-menu"/>
                </figure>



                <div className={`${isOpen ? classes['open-search'] : classes['search-wrapper']}`}>
                    <img src={search} alt="search-icon"/>
                    <input placeholder='Search' type='text' className={`${isOpen ? classes['open-input'] : classes['input']}`}/>
                </div>

                <nav>
                    <ul className={`${isOpen ? classes['open-ul'] : classes['ul']}`}>
                        {navItems.map((navItem, index) => (
                            <li key={index} className={`${isOpen ? classes['open-li'] : classes['li']}`}>
                                <Link className={`${isOpen ? classes['open-navLink'] : classes['navLink']}`} to={navItem.route}>
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <figure className={`${isOpen ? classes['open-icons-wrapper'] : classes['icons-wrapper']}`}>
                    <img src={cart} alt="cart-icon"/>
                    <img src={favorites} alt="favorites-icon"/>
                    <img src={profile} alt="profile-icon"/>
                </figure>
            </header>
        </>
    );
};

export default Header;


