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
            <header className={classes['header-wrapper']}>
                <figure>
                    <Link className={`${classes['navlink']} ${classes['active']}`} to={'/'}>
                        <img src={logo} alt="cyber-logo"/>
                    </Link>
                </figure>


                <figure className={classes['burger-menu']} onClick={toggleMenu}>
                    <img src={burger} alt="burger-menu"/>
                </figure>


                {isOpen && (
                    <div className={classes['menu']}>
                        <div className={classes['search-wrapper-mobile']}>
                            <img src={search} alt="search-icon-mobile"/>
                            <input placeholder='Search' type='text'/>
                        </div>

                        <div className={classes['nav-mobile']}>
                            <ul>
                                {navItems.map((navItem, index) => (
                                    <li key={index}>
                                        <Link className={`${classes['navLink-mobile']} ${classes['active']}`} to={navItem.route}>
                                            {navItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <figure className={classes['icons-wrapper-mobile']}>
                            <img src={cart} alt="cart-icon"/>
                            <img src={favorites} alt="favorites-icon"/>
                            <img src={profile} alt="profile-icon"/>
                        </figure>
                    </div>
                )}


                <div className={classes['search-wrapper']}>
                    <img src={search} alt="search-icon"/>
                    <input placeholder='Search' type='text'/>
                </div>

                <nav>
                    <ul>
                        {navItems.map((navItem, index) => (
                            <li key={index}>
                                <Link className={`${classes['navLink']} ${classes['active']}`} to={navItem.route}>
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <figure className={classes['icons-wrapper']}>
                    <img src={cart} alt="cart-icon"/>
                    <img src={favorites} alt="favorites-icon"/>
                    <img src={profile} alt="profile-icon"/>
                </figure>
            </header>
        </>
    );
};

export default Header;
