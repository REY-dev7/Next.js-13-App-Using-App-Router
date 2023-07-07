"use client"
import Link from "next/link";
import React from "react";
import { links } from "./navLink";
import styles from './navbar.module.css'
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>As-Liz</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={()=>console.log("first")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
