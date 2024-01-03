import React from 'react';
import Links from '../links/Links';
import styles from './navbar.module.css';
import { Style_Script } from 'next/font/google';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
