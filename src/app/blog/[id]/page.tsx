import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  // const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {/* {data.title} */}
            title
            </h1>
          <p className={styles.desc}>
            {/* {data.desc} */}
            desc
            </p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src=''
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>
              {/* {data.username} */}
              name
              </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
          // src={data.img} 
          src=''
          alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {/* {data.content} */}
          text
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
