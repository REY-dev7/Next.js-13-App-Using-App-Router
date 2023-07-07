/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from './page.module.css'
import Image from "next/image";
import AboutImage from 'public/contact.png'

const Contact = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}>Let's Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src={AboutImage} alt="" fill={true} className={styles.image} />
      </div>
      <form className={styles.form}>
        <input type="name" placeholder="name" className={styles.input} />
        <input type="email" placeholder="email" className={styles.input} />
        <textarea name="" id="" cols={30} rows={8} className={styles.textArea} />
      </form>
    </div>
  </div>;
};

export default Contact;
