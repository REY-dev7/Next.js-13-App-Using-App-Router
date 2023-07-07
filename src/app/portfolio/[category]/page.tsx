"use client"
import React from "react";
import styles from "./page.module.css";
import HText from "@/components/TextTitle/HText";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { Items, items } from "./data";
import { notFound } from "next/navigation";

interface Param {
  params: { category: any };
}
const getData = (cat:Items) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};
const Category = ({ params }: Param) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <HText className={styles.catTitle} text={params.category} />
      {data.map((item:any)=>(
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <HText className={styles.title} text={item.title} />
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See more" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.image} alt="img" fill={true} />
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Category;
