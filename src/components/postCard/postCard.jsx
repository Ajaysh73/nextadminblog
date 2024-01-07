import React from 'react';
import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='/post1.jpeg' fill className={styles.img} alt='post' />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem perferendis dicta
          exercitationem! Consectetur saepe facere non odit reiciendis dolorem animi!
        </p>
        <Link href='/blog/post' className={styles.link} />
      </div>
    </div>
  );
};

export default PostCard;
