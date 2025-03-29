import {useEffect, useState} from "react";
import axios from "axios";
import classes from '../modules/Header.module.scss'
import cart from '../assets/cart-icon.svg'
import favorites from '../assets/favorites-icon.svg'
import profile from '../assets/profile-icon.svg'
import logo from '../assets/cyber-logo.svg'
import search from '../assets/search-icon.svg'
import {Link} from "react-router";


export const Header = () => {
  const [navItems, setNavItems] = useState([]);


  useEffect(() => {

    axios.get('http://localhost:5000/menus/navbarItems')
        .then(response => {
          setNavItems(response.data);
          console.log('Navbar items:', response.data);
          console.log(Array.isArray(navItems));
        })
        .catch(error => {
          console.error('Error fetching data', error);
        });
  }, []);



  // const burgerMenu =()=>{
  //   setMenuOpen(!menuOpen)
  // }

  return (
      <>
        <header className={classes['header-wrapper']}>
          <figure>
            <Link className={`${classes['navlink']} ${classes['active']}`}
                  to={'/'}>
              <img src={logo} alt="cyber-logo"/>
            </Link>

          </figure>

          <figure className={classes['search-wrapper']}>
            <img src={search} alt="search-icon"/>
            <input placeholder='Search' type='text'/>
          </figure>

          <nav>
            <ul>
              {navItems.map((navItem, index) => {

                return (

                    <li key={index} >
                      <Link className={`${classes['navLink']} ${classes['active']}`}
                            to={navItem.route}>
                        {navItem.name}
                      </Link>


                    </li>
                );
              })}
            </ul>
          </nav>



          <figure className={classes['icons-wrapper']}>
            <img src={cart} alt="cart-icon"/>
            <img src={favorites} alt="favorites-icon"/>
            <img src={profile} alt="profile-icon"/>
          </figure>



        </header>
      </>
  )
}


export default Header