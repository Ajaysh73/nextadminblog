import React from 'react';
import Links from '../links/Links';
import styles from './navbar.module.css';
import { Style_Script } from 'next/font/google';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        DevThoughts
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
