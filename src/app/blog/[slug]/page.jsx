import React from 'react';
import styles from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/post1.jpeg' fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.detail}>
          <Image src='/post1.jpeg' height={50} width={50} alt='avatar' className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Ajay Sharma</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos explicabo possimus,
          sint accusantium ab quam ullam aspernatur perspiciatis quaerat vitae commodi nesciunt.
          Nostrum voluptas accusantium quos et rem sed quasi.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
