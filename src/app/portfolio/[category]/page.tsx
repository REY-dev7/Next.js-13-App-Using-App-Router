// "use client"
import React from "react";
import styles from "./page.module.css";
import HText from "@/components/TextTitle/HText";
import Button from "@/components/Button/Button";
import Image from "next/image";
import TextImage from "@/components/TitleDesc/TitleDesc";

interface Param {
  params: { category: string };
}

const Category = ({ params }: Param) => {
  return (
    <div className={styles.container}>
      <HText className={styles.catTitle} text={params.category} />
      {
        <div className={styles.item}>
          <div className={styles.content}>
            <HText className={styles.title} text="" />
            <p className={styles.desc}>dds</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image src="" alt="img" fill={true} />
          </div>
        </div>
      }
    </div>
  );
};

export default Category;
