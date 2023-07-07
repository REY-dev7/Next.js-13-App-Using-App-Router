import React from "react";
import styles from "./page.module.css";
import TitleDesc from "@/components/TitleDesc/TitleDesc";
import { items } from "../portfolio/[category]/data";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    // next: { revalidate: 10 }, //revalidate data every 10 sec
     cache: 'no-store' 
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      {data.map((items: Data) => (
        <TitleDesc
          key={items.id}
          title={items.title}
          desc={items.body}
          link="/blog/testId"
          img="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      ))}
    </div>
  );
};

export default Blog;
