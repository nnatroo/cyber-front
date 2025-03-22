import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Header.module.scss'
import cart from '../assets/cart-icon.svg'
import favorites from '../assets/favorites-icon.svg'
import profile from '../assets/profile-icon.svg'
import logo from '../assets/cyber-logo.svg'
import search from '../assets/search-icon.svg'
import {Link} from "react-router";

const Header = () => {
  const [menus, setMenus] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/menus/navbarItems')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <>
      <header className={classes['header-wrapper']}>
        <figure>
          <img src={logo} alt="cyber-logo"/>
        </figure>
        <figure className={classes['search-wrapper']}>
          <img src={search} alt="search-icon"/>
          <input placeholder='Search' type='text'/>
        </figure>
        <nav>
          <ul>
            <li>
              <Link className={`${classes['navlink']} ${classes['active']}`} to="/">Home</Link>
            </li>
            <li>
              <Link className={classes['navlink']} to="/">About</Link>
            </li>
            <li>
              <Link className={classes['navlink']} to="/">Contact Us</Link>
            </li>
            <li>
              <Link className={classes['navlink']} to="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
