import React from "react";
import styles from '../modules/Navbar.module.css';
import logo from '../images/svg/flashy-logo.svg';

function Navbar() {
    return (
        <header className={styles.navbar}>
            <img src={logo} alt="flashy logo"></img>
        </header>
    )
}

export default Navbar;