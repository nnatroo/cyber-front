import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import classes from "../modules/Header.module.scss";
import search from "../assets/search-icon.svg";
import cart from "../assets/cart-icon.svg";
import favorites from "../assets/favorites-icon.svg";
import profile from "../assets/profile-icon.svg";
import logo from "../assets/cyber-logo.svg";
import SearchDropdown from "./SearchDropdown";

export  const Header = ({ onSearch, searchTerm  }) => {
    const [navItems, setNavItems] = useState([]);
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/menus/navbarItems")
            .then(response => setNavItems(response.data))
            .catch(error => console.error("Error fetching data", error));
    }, []);

    const toggleBurgerMenu = () => {
        setIsOpenBurgerMenu(!isOpenBurgerMenu);
    };
    const clearSearch = () => {
        onSearch('');
    };

    return (
        <>
            {!isOpenBurgerMenu ? (
                <header className={classes['header-wrapper']}>
                    <figure onClick={clearSearch}>
                        <Link to="/">
                            <img src={logo} alt="cyber-logo" id="logo"/>
                        </Link>
                    </figure>

                    <div className={classes["search-wrapper"]}>
                        <img src={search} alt="search-icon"/>
                        <SearchDropdown onSelect={onSearch} value={searchTerm}/>
                    </div>
                    <nav>
                        <ul className={classes['ul']}>
                            {navItems.map((item, index) => (
                                <li key={index} className={classes['li']}>
                                    <Link className={classes['navLink']} to={item.route}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <figure className={classes['actions-wrapper']}>
                        <img src={favorites} alt="favorites-icon"/>
                        <Link to={"/shopping-cart"}>
                            <img src={cart} alt="cart-icon"/>
                        </Link>
                        <img src={profile} alt="profile-icon"/>
                    </figure>
                    <div onClick={toggleBurgerMenu} className={classes['burger-menu-icon']}>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                        <div className={classes.line}></div>
                    </div>
                </header>
            ) : (
                <header className={classes['header-wrapper-mobile']}>
                    <div className={classes["search-wrapper"]}>
                        <img src={search} alt="search-icon"/>
                        <SearchDropdown onSelect={onSearch} value={searchTerm}/>
                    </div>
                    <nav>
                        <ul className={classes['ul']}>
                            {navItems.map((item, index) => (
                                <li key={index} className={classes['li']}>
                                    <Link className={classes['navLink']} to={item.route}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div onClick={toggleBurgerMenu} className={classes['close-icon']}>
                        <div className={classes['line-1']}></div>
                        <div className={classes['line-2']}></div>
                    </div>
                </header>
            )}
        </>
    );
};

export default Header;
