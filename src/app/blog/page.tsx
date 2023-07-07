import React from "react";
import styles from './page.module.css'
import TitleDesc from "@/components/TitleDesc/TitleDesc";

const Blog = () => {
  return <div className={styles.container}>
    <TitleDesc title="dfg" desc="dfgs" link="/blog/testId" img="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </div>;
};

export default Blog;
