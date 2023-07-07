import React from "react";
import HText from "../TextTitle/HText";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

interface TImage {
  desc: string;
  title: string;
  img: string;
  link: string
}

const TitleDesc = ({ desc, title, img,link }: TImage) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={img} alt="img" width={400} height={250} />
      </div>
      <div className={styles.content}>
        <Link href={link}>
          <HText className={styles.title} text={title} />
        </Link>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default TitleDesc;
