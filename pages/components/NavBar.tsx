import Link from 'next/link';
import classes from './NavBar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiShoppingCart } from 'react-icons/hi';
import { useState } from 'react';

const NavBar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleClick = () => {
    setIsResponsive(!isResponsive);
  };

  const topNav = isResponsive
    ? `${classes.topnav} ${classes.responsive}`
    : classes.topnav;

  const icon = isResponsive
    ? classes.icon
    : `${classes.icon} ${classes.responsive}`;

  return (
    <div className={topNav} id="myTopnav">
      <Link href="#home" className={classes.active}>
        Shop
      </Link>
      <Link href="#home">Contact Us</Link>
      <Link href="#home">About</Link>
      <Link href="#home">
        <HiShoppingCart />
      </Link>
      <Link href="/account/Login">Login</Link>
      <Link href="/account/Register">Register</Link>
      <a className={icon}>
        <GiHamburgerMenu style={{ color: 'white' }} onClick={handleClick} />
      </a>
    </div>
  );
};

export default NavBar;
